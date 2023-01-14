import { FC, forwardRef, Ref, ReactElement } from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import { ChipProps } from './Chip';
import { CloseIcon } from '../../form/Select/icons';
import css from './Chip.module.css';

export interface DeletableChipProps extends ChipProps {
  /**
   * Content to display before the chip label.
   */
  start?: ReactElement | string;

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

export const DeletableChip: FC<DeletableChipProps & ChipRef> = forwardRef(
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
      deleteIcon,
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

DeletableChip.defaultProps = {
  color: 'default',
  size: 'medium',
  variant: 'filled',
  deleteIcon: <CloseIcon />
};
