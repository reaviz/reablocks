import React, { FC, forwardRef, Ref, ReactElement } from 'react';
import { Button } from '../Button';
import { Chip, ChipProps, ChipRef } from './Chip';
import { CloseIcon } from '../../form/Select/icons';
import classNames from 'classnames';
import css from './DeletableChip.module.css';

export interface DeletableChipProps extends Omit<ChipProps, 'end'> {
  /**
   * Customize delete icon.
   */
  deleteIcon?: ReactElement;

  /**
   * Callback if the chip is deletable.
   */
  onDelete?: () => void;
}

export const DeletableChip: FC<DeletableChipProps & ChipRef> = forwardRef(
  ({ children, disabled, deleteIcon, onDelete, size, color, ...rest }, ref) => (
    <Chip
      ref={ref}
      size={size}
      disabled={disabled}
      color={color}
      end={
        <Button
          tabIndex={0}
          variant="text"
          size={size}
          className={classNames(
            css.deleteButton,
            { [css[size]]: true },
            { [`text-${color}-500`]: rest?.variant === 'outline' },
            { ['text-white']: rest?.variant === 'filled' }
          )}
          onClick={event => {
            if (!disabled) {
              event.stopPropagation();
              onDelete?.();
            }
          }}
          disabled={disabled}
          disableMargins
          disablePadding
        >
          {deleteIcon}
        </Button>
      }
      {...rest}
    >
      {children}
    </Chip>
  )
);

DeletableChip.defaultProps = {
  color: 'default',
  size: 'medium',
  variant: 'filled',
  deleteIcon: <CloseIcon />
};
