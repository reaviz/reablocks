import React, { FC, PropsWithChildren } from 'react';

export interface StepProps extends PropsWithChildren {
  /**
   * Optional Text of the marker
   */
  markerLabel?: string;

  /**
   * CSS Classname to applied to the step
   */
  className?: string;
}

export const Step: FC<StepProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
