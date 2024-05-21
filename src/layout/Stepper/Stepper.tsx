import { StepperTheme } from '@/layout';
import { cn, useComponentTheme } from '@/utils';
import React, { Children, FC, Fragment, PropsWithChildren } from 'react';

import { Step, StepProps } from './Step';

export interface StepperProps extends PropsWithChildren {
  /**
   * Currently active step
   */
  activeStep?: number;

  /**
   * Theme for the Stepper.
   */
  theme?: StepperTheme;

  /**
   * Show number for every step
   */
  numbered?: boolean;
}

export const Stepper: FC<StepperProps> = ({
  activeStep = 0,
  children,
  numbered = false,
  theme: customTheme
}) => {
  const theme: StepperTheme = useComponentTheme('stepper', customTheme);

  const childrenStepProps = Children.toArray(children)
    .filter((child: any) => child.type?.name === Step.name)
    .map((child: any) => child.props);

  const totalSteps = childrenStepProps.length - 1;

  return (
    <div className={theme.base}>
      {childrenStepProps.map((props: StepProps, index) => (
        <Fragment key={index}>
          <div
            className={cn(theme.step.base, {
              'border-transparent': index === totalSteps,
              [theme.step.active]: index < activeStep - 1
            })}
          >
            <div className={theme.step.marker.container}>
              {/* Numbered marker */}
              {numbered && (
                <div
                  className={cn(theme.step.marker.label.base, {
                    [theme.step.marker.label.active]: index < activeStep
                  })}
                >
                  {index + 1}
                </div>
              )}
              {/* Labeled marker */}
              {!numbered && props.markerLabel && (
                <div
                  className={cn(theme.step.marker.label.base, {
                    [theme.step.marker.label.active]: index < activeStep
                  })}
                >
                  <div
                    className={cn(theme.step.marker.base, {
                      [theme.step.marker.active]: index < activeStep
                    })}
                  />
                  {props.markerLabel}
                </div>
              )}
              {/* Dot marker */}
              {!numbered && !props.markerLabel && (
                <div
                  className={cn(theme.step.marker.base, {
                    [theme.step.marker.active]: index < activeStep
                  })}
                />
              )}
            </div>
          </div>
          <Step
            className={cn(theme.step.content, props.className)}
            {...props}
          />
        </Fragment>
      ))}
    </div>
  );
};
