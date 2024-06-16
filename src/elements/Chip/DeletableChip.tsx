import React, { FC, forwardRef, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/elements/Button';
import { Chip, ChipProps, ChipRef } from './Chip';
import { CloseIcon } from '@/form';
import { ChipTheme } from './ChipTheme';
import { useComponentTheme } from '@/utils';

export interface DeletableChipProps extends Omit<ChipProps, 'end'> {
  /**
   * Customize delete icon.
   */
  deleteIcon?: ReactElement;

  /**
   * Callback if the chip is deletable.
   */
  onDelete?: () => void;

  /**
   * Theme for the Deletable Chip.
   */
  theme?: ChipTheme;
}

export const DeletableChip: FC<DeletableChipProps & ChipRef> = forwardRef(
  (
    {
      children,
      disabled,
      deleteIcon = <CloseIcon height={12} width={12} />,
      onDelete,
      size = 'medium',
      color = 'default',
      theme: customTheme,
      variant = 'filled',
      ...rest
    },
    ref
  ) => {
    const theme: ChipTheme = useComponentTheme('chip', customTheme);

    return (
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
            className={twMerge(
              theme.deleteButton.base,
              theme.deleteButton[size]
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
        variant={variant}
        theme={theme}
        {...rest}
      >
        {children}
      </Chip>
    );
  }
);
