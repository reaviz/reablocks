import { FC, forwardRef, Ref, ReactElement } from 'react';
import { Button } from '../Button';
import { Chip, ChipProps } from './Chip';
import { CloseIcon } from '../../form/Select/icons';
import css from './DeletableChip.module.css';

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
    { children, start, disabled, deleteIcon, onDelete, ...rest },
    ref: Ref<HTMLDivElement>
  ) => (
    <Chip ref={ref} disabled={disabled} {...rest}>
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
            {deleteIcon}
          </Button>
        )}
      </div>
    </Chip>
  )
);

DeletableChip.defaultProps = {
  color: 'default',
  size: 'medium',
  variant: 'filled',
  deleteIcon: <CloseIcon />
};
