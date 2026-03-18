import type { FC, PropsWithChildren } from 'react';
import React from 'react';

export interface StepProps extends PropsWithChildren {
  /**
   * Optional Text of the marker
   */
  label?: string;

  /**
   * CSS Classname to applied to the Step
   */
  className?: string;
}

export const Step: FC<StepProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
