import type { FC } from 'react';
import React, { useCallback, useMemo, useState } from 'react';

import type { RadioGroupContextProps } from './RadioGroupContext';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioGroupProps extends RadioGroupContextProps {
  /**
   * The Radio Buttons to display in the group.
   */
  children: any;

  /**
   * Additional CSS classes to apply to the Radio group
   */
  className?: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  className,
  onChange,
  selectedValue: defaultValue
}) => {
  const [selectedValue, setSelectedValue] = useState<any>(defaultValue);

  const handleValueChange = useCallback(
    value => {
      setSelectedValue(value);
      onChange(value);
    },
    [onChange]
  );

  const values: RadioGroupContextProps = useMemo(
    () => ({
      onChange: handleValueChange,
      selectedValue: selectedValue
    }),
    [handleValueChange, selectedValue]
  );

  return (
    <RadioGroupContext.Provider value={values}>
      {children}
    </RadioGroupContext.Provider>
  );
};
