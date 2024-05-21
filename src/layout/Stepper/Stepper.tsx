import { StepperTheme } from '@/layout';
import { cn, useComponentTheme } from '@/utils';
import React, { Children, FC, PropsWithChildren } from 'react';

import { Step, StepProps } from './Step';

export interface StepperProps extends PropsWithChildren {
  /**
   * Currently active step
   */
  activeStep: number;

  /**
   * Theme for the Stepper.
   */
  theme?: StepperTheme;
}
export const Stepper: FC<StepperProps> = ({ children, theme: customTheme }) => {
  const theme: StepperTheme = useComponentTheme('stepper', customTheme);

  const childrenStepProps = Children.toArray(children)
    .filter((child: any) => child.type?.name === Step.name)
    .map((child: any) => child.props);

  const totalSteps = childrenStepProps.length - 1;

  return (
    <div className="flex flex-col">
      {childrenStepProps.map((props: StepProps, index) => (
        <div
          key={index}
          className={cn(theme.step.base, {
            'border-transparent': index === totalSteps,
            [theme.step.active]: index < totalSteps - 1
          })}
        >
          <div>
            <div className={theme.step.marker.container}>
              {props.markerLabel ? (
                <div
                  className={cn(theme.step.marker.labeled.base, {
                    [theme.step.marker.labeled.active]: index < totalSteps
                  })}
                >
                  <div
                    className={cn(theme.step.marker.base, {
                      [theme.step.marker.active]: index < totalSteps
                    })}
                  />
                  {props.markerLabel}
                </div>
              ) : (
                <div
                  className={cn(theme.step.marker.base, {
                    [theme.step.marker.active]: index < totalSteps
                  })}
                />
              )}
            </div>
          </div>
          <Step {...props} />
        </div>
      ))}
    </div>
  );
};
