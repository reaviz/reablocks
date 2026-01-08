import type { ReactElement } from 'react';
import React, { forwardRef } from 'react';

import type { ChipTheme } from '@/elements';
import { Button } from '@/elements/Button';
import { CloseIcon } from '@/form';
import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';

import type { ChipProps } from './Chip';
import { Chip } from './Chip';

/**
 * @deprecated
 */
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

/**
 * @deprecated
 */
export const DeletableChip = forwardRef<HTMLDivElement, DeletableChipProps>(
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
              theme.types.tag.closeButton.base,
              theme.types.tag.closeButton.sizes[size]
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
