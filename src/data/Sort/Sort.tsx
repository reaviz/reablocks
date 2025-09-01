import React, { FC, PropsWithChildren, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { DownArrowIcon } from './DownArrowIcon';
import { getNextDirection, SortDirection } from './utils';
import { twMerge } from '@/utils';
import { SortTheme } from './SortTheme';
import { useComponentTheme } from '@/utils';

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
  icon?: React.ComponentType<{ className?: string }>;

  /**
   * The neutral icon to display.
   */
  neutralIcon?: React.ComponentType<{ className?: string }>;

  /**
   * Additional css classnames to apply to the neutral icon.
   */
  neutralIconClassName?: string;

  /**
   * Theme for the Sort.
   */
  theme?: SortTheme;
}

export const Sort: FC<SortProps> = ({
  className,
  disabled,
  direction,
  iconClassName,
  icon: Icon = DownArrowIcon,
  neutralIcon: NeutralIcon,
  neutralIconClassName,
  children,
  onSort,
  theme: customTheme
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

  const theme: SortTheme = useComponentTheme('sort', customTheme);

  return (
    <div
      className={twMerge(
        theme.base,
        disabled && theme.disabled,
        disabled &&
          direction !== undefined &&
          direction !== null &&
          theme.hasValue
      )}
      role="button"
      tabIndex={-1}
      aria-label="Toggle sort direction"
      onClick={onSortClick}
      onKeyDown={onKeydown}
    >
      {children}
      <AnimatePresence initial={false} mode="wait">
        {direction === 'asc' && (
          <motion.div
            key="asc"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.05 } }}
          >
            <Icon
              className={twMerge(
                theme.icon.base,
                theme.icon.ascending,
                iconClassName
              )}
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
            <Icon className={twMerge(theme.icon.base, iconClassName)} />
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
              className={twMerge(theme.icon.base, neutralIconClassName)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
