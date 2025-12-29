import type { FC } from 'react';
import React from 'react';

export type CheckIconProps = {
  className?: string;
};

export const CheckIcon: FC<CheckIconProps> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      <path
        d="M5.86339 10.5831L3.08339 7.80312L2.13672 8.74312L5.86339 12.4698L13.8634 4.46979L12.9234 3.52979L5.86339 10.5831Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
