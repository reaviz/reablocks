import { MotionGroup, MotionItem, StepperTheme } from '@/layout';
import { cn, useComponentTheme } from '@/utils';
import React, { Children, FC, Fragment, PropsWithChildren } from 'react';
import { MotionNodeAnimationOptions } from 'motion';

import { Step, StepProps } from './Step';

export interface StepperProps extends PropsWithChildren {
  /**
   * CSS Classname to applied to the Stepper
   */
  className?: string;

  /**
   * Currently active step
   */
  activeStep?: number;

  /**
   * Theme for the Stepper.
   */
  theme?: StepperTheme;

  /**
   * Style of the stepper. Default is dots but it can be numbered too.
   */
  variant?: 'default' | 'numbered';

  /**
   * Display link after last step
   */
  continuous?: boolean;

  /**
   * @deprecated Use animation configuration instead.
   * Animate items appearance
   */
  animated?: boolean;

  /**
   * Animation configuration for the Stepper.
   */
  animation?: MotionNodeAnimationOptions;
}

export const Stepper: FC<StepperProps> = ({
  className,
  activeStep = 0,
  children,
  variant = 'default',
  continuous,
  animated,
  animation,
  theme: customTheme
}) => {
  const theme: StepperTheme = useComponentTheme('stepper', customTheme);

  const childrenStepProps = Children.toArray(children)
    .filter((child: any) => child.type?.name === Step.name)
    .map((child: any) => child.props);

  const totalSteps = childrenStepProps.length - 1;

  return (
    <MotionGroup
      className={cn(theme.base, className)}
      initial={animated ? 'initial' : null}
      animate={animated ? 'animate' : null}
      {...animation}
    >
      {childrenStepProps.map((props: StepProps, index) => (
        <Fragment key={index}>
          <div
            className={cn(theme.step.base, {
              'border-transparent': index === totalSteps && !continuous,
              [theme.step.active]: index < activeStep - 1
            })}
          >
            <MotionItem>
              <div className={theme.step.marker.container}>
                {/* Numbered marker */}
                {variant === 'numbered' && (
                  <div
                    className={cn(theme.step.marker.label.base, {
                      [theme.step.marker.label.active]: index < activeStep
                    })}
                  >
                    {index + 1}
                  </div>
                )}
                {/* Labeled marker */}
                {variant !== 'numbered' && props.label && (
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
                    {props.label}
                  </div>
                )}
                {/* Dot marker */}
                {variant !== 'numbered' && !props.label && (
                  <div
                    className={cn(theme.step.marker.base, {
                      [theme.step.marker.active]: index < activeStep
                    })}
                  />
                )}
              </div>
            </MotionItem>
          </div>
          <MotionItem>
            <Step
              className={cn(theme.step.content, props.className)}
              {...props}
            />
          </MotionItem>
        </Fragment>
      ))}
    </MotionGroup>
  );
};
