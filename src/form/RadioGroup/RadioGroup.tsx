import React, { Children, FC, useState } from 'react';
import { Stack } from '../../layout';
import { Radio } from '../Radio/Radio';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The Radio Buttons to display in the group.
   */
  children: any;

  /**
   * Additional CSS classes to apply to the Radio group
   */
  className?: string;

  /**
   * The direction of the layout.
   */
  direction?: 'row' | 'column';

  /**
   * Event handler for when the radio is changed.
   */
  onChange: (value: any) => void;

  /**
   * Default value of the Radio Button which is checked
   */
  defaultValue: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  className,
  direction,
  onChange,
  defaultValue
}) => {
  const [selectedValue, setSelectedValue] = useState<any>(defaultValue);
  const handleValueChange = value => {
    setSelectedValue(value);
    onChange(value);
  };
  const childrenArray: any[] = Children.toArray(children);

  return (
    <Stack direction={direction} alignItems="start" className={className}>
      {childrenArray.map((child, index) => (
        <div key={index}>
          <Radio
            {...child.props}
            checked={selectedValue === child.props.value}
            onChange={checked => {
              child.props.onChange && child.props.onChange(checked);
              checked && handleValueChange(child.props.value);
            }}
          />
        </div>
      ))}
    </Stack>
  );
};

RadioGroup.defaultProps = {
  direction: 'column'
};
