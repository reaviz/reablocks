import React, { FC, useMemo } from 'react';
import {
  ButtonGroupContext,
  ButtonGroupContextProps
} from './ButtonGroupContext';

export interface ButtonGroupProps extends ButtonGroupContextProps {
  /**
   * The Buttons to display in the group.
   */
  children: any;

  /**
   * Additional CSS classes to apply to the Button group
   */
  className?: string;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className,
  variant,
  size
}) => {
  const values: ButtonGroupContextProps = useMemo(
    () => ({
      variant: variant || 'filled',
      size: size || 'medium'
    }),
    [size, variant]
  );

  return (
    <ButtonGroupContext.Provider value={values}>
      <div className={className}>{children}</div>
    </ButtonGroupContext.Provider>
  );
};
