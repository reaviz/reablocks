import React, { FC, PropsWithChildren, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';
import { DownArrowIcon } from './DownArrowIcon';
import { getNextDirection, SortDirection } from './utils';
import css from './Sort.module.css';

export interface SortProps extends PropsWithChildren {
  /**
   * Additional css classnames to apply
   */
  className?: string;

  /**
   * Additional css classnames to apply to the icon
   */
  iconClassName?: string;

  /**
   * Whether the sort is disabled
   */
  disabled?: boolean;

  /**
   * The current sort direction
   */
  direction?: SortDirection;

  /**
   * The callback to call when the sort is toggled
   */
  onSort?: (direction: SortDirection) => void;

  /**
   * The icon to display
   */
  icon?: any;

  /**
   * The neutral icon to display.
   */
  neutralIcon?: (props: { className?: string }) => React.JSX.Element;

  /**
   * Additional css classnames to apply to the neutral icon.
   */
  neutralIconClassName?: string;
}

export const Sort: FC<SortProps> = ({
  className,
  disabled,
  direction,
  iconClassName,
  icon: Icon,
  neutralIcon: NeutralIcon,
  neutralIconClassName,
  children,
  onSort
}) => {
  const onSortClick = useCallback(() => {
    if (!disabled) {
      onSort?.(getNextDirection(direction));
    }
  }, [disabled, direction, onSort]);

  const onKeydown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!disabled && (event.key === 'Enter' || event.key === 'Space')) {
        onSort?.(getNextDirection(direction));
      }
    },
    [disabled, direction, onSort]
  );

  return (
    <div
      className={classNames(css.button, className, {
        [css.disabled]: disabled,
        [css.hasValue]: direction !== undefined && direction !== null
      })}
      role="button"
      tabIndex={-1}
      aria-label="Toggle sort direction"
      onClick={onSortClick}
      onKeyDown={onKeydown}
    >
      {children}
      <AnimatePresence initial={false} exitBeforeEnter>
        {direction === 'asc' && (
          <motion.div
            key="asc"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.05 } }}
          >
            <Icon
              className={classNames(css.icon, iconClassName, css.ascIcon)}
            />
          </motion.div>
        )}
        {direction === 'desc' && (
          <motion.div
            key="desc"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.05 } }}
          >
            <Icon
              className={classNames(css.icon, iconClassName, css.descIcon)}
            />
          </motion.div>
        )}
        {!!NeutralIcon && !direction && (
          <motion.div
            key="neutral"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.05 } }}
          >
            <NeutralIcon
              className={classNames(css.icon, neutralIconClassName)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Sort.defaultProps = {
  icon: DownArrowIcon
};
