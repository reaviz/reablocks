import React, { FC, forwardRef, Ref, ReactElement } from 'react';
import { Button } from '../Button';
import { Chip, ChipProps } from './Chip';
import { CloseIcon } from '../../form/Select/icons';

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

export interface ChipRef {
  ref?: Ref<HTMLDivElement>;
}

export const DeletableChip: FC<DeletableChipProps & ChipRef> = forwardRef(
  (
    { children, disabled, deleteIcon, onDelete, ...rest },
    ref: Ref<HTMLDivElement>
  ) => (
    <Chip
      ref={ref}
      disabled={disabled}
      end={
        <Button
          tabIndex={0}
          variant="text"
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
