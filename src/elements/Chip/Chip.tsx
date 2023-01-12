import React, { FC, forwardRef, Ref, ReactElement } from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import css from './Chip.module.css';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Color variant for the chip.
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'info';

  /**
   * Size variant for the chip.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Style variant for the chip.
   */
  variant?: 'filled' | 'outline';

  /**
   * Content to display before the chip label.
   */
  start?: ReactElement | string;

  /**
   * Whether the chip is selected.
   */
  selected?: boolean;

  /**
   * Whether the chip is disabled.
   */
  disabled?: boolean;

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;

  /**
   * Customize delete icon.
   */
  deleteIcon?: ReactElement;

  /**
   * Callback if the chip is deletable.
   */
  onDelete?: () => void;
}

export interface ChipRef {
  ref?: Ref<HTMLDivElement>;
}

export const Chip: FC<ChipProps & ChipRef> = forwardRef(
  (
    {
      children,
      color,
      variant,
      size,
      start,
      selected,
      disabled,
      className,
      disableMargins,
      deleteIcon = CloseIcon,
      onClick,
      onDelete,
      ...rest
    },
    ref: Ref<HTMLDivElement>
  ) => (
    <div
      {...rest}
      ref={ref}
      tabIndex={onClick ? 0 : -1}
      onClick={onClick}
      className={classNames(className, css.chip, {
        [css[color]]: true,
        [css[variant]]: true,
        [css[size]]: true,
        [css.selected]: !!selected,
        [css.disabled]: disabled,
        [css.selectable]: onClick && !disabled,
        [css.canDelete]: !!onDelete,
        [css.disableMargins]: disableMargins
      })}
    >
      <div className={css.contents}>
        {start && start}
        <span className={css.label}>{children}</span>
        {onDelete && (
          <Button
            tabIndex={0}
            variant="text"
            className={css.delete}
            onClick={event => {
              if (!disabled) {
                event.stopPropagation();
                onDelete();
              }
            }}
            disabled={disabled}
            disableMargins
            disablePadding
          >
            <CloseIcon />
          </Button>
        )}
      </div>
    </div>
  )
);

const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5304 4.53036L13.0608 4.00003L12.0001 2.93937L11.4698 3.4697L8.00011 6.93937L4.53044 3.4697L4.00011 2.93937L2.93945 4.00003L3.46978 4.53036L6.93945 8.00003L3.46978 11.4697L2.93945 12L4.00011 13.0607L4.53044 12.5304L8.00011 9.06069L11.4698 12.5304L12.0001 13.0607L13.0608 12L12.5304 11.4697L9.06077 8.00003L12.5304 4.53036Z"
    />
  </svg>
);

Chip.defaultProps = {
  color: 'default',
  size: 'medium',
  variant: 'filled'
};
