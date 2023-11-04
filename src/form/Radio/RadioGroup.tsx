import React, { Children, FC, useCallback, useMemo, useState } from 'react';
import { RadioGroupContext, RadioGroupContextProps } from './RadioGroupContext';
import { Stack } from '../../layout';

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

  const childrenArray: any[] = Children.toArray(children);

  const values: RadioGroupContextProps = useMemo(
    () => ({
      onChange: handleValueChange,
      selectedValue: selectedValue
    }),
    [handleValueChange, selectedValue]
  );

  return (
    <RadioGroupContext.Provider value={values}>
      <Stack className={className}>
        {childrenArray.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Stack>
    </RadioGroupContext.Provider>
  );
};
