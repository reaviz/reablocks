import React, { FC, forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import css from './Badge.module.css';

export type BadgeColor = 'default' | 'primary' | 'secondary' | 'error';

export type BadgePlacement =
  | 'top-start'
  | 'top-end'
  | 'bottom-end'
  | 'bottom-start';

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'content'> {
  content?: string | React.JSX.Element;

  color?: BadgeColor;

  disableMargins?: boolean;

  hidden?: boolean;

  placement?: BadgePlacement;
}

export interface BadgeRef {
  ref?: LegacyRef<HTMLSpanElement>;
}

export const Badge: FC<BadgeProps & BadgeRef> = forwardRef(
  (
    {
      children,
      color,
      className,
      disableMargins,
      content,
      hidden,
      placement,
      ...rest
    }: BadgeProps,
    ref
  ) => (
    <span
      className={classNames(css.container, {
        [css.disableMargins]: disableMargins
      })}
    >
      {children}
      {!hidden && (
        <motion.span
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          aria-hidden="true"
        >
          <span
            {...rest}
            ref={ref}
            className={classNames(className, css.badge, css[color], {
              [css.top]: placement === 'top-start' || placement === 'top-end',
              [css.bottom]:
                placement === 'bottom-start' || placement === 'bottom-end',
              [css.left]:
                placement === 'top-start' || placement === 'bottom-start',
              [css.right]: placement === 'top-end' || placement === 'bottom-end'
            })}
          >
            {content}
          </span>
        </motion.span>
      )}
    </span>
  )
);

Badge.defaultProps = {
  color: 'default',
  placement: 'top-end'
};
