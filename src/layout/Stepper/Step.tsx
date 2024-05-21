import React, { FC, ReactElement } from 'react';

export interface StepProps {
  /**
   * Content of the step
   */
  content: string | ReactElement;

  /**
   * Optional Text of the marker
   */
  markerLabel?: string;

  /**
   * CSS Classname to applied to the step
   */
  className?: string;
}

export const Step: FC<StepProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
);
