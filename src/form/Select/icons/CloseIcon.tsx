import type { FC } from 'react';
import React from 'react';

export type CloseIconProps = {
  height?: number;
  width?: number;
};

export const CloseIcon: FC<CloseIconProps> = ({ height = 16, width = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path
      d="M12.6667 4.27331L11.7267 3.33331L8.00004 7.05998L4.27337 3.33331L3.33337 4.27331L7.06004 7.99998L3.33337 11.7266L4.27337 12.6666L8.00004 8.93998L11.7267 12.6666L12.6667 11.7266L8.94004 7.99998L12.6667 4.27331Z"
      fill="currentColor"
    ></path>
  </svg>
);
