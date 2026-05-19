import React, { FC } from 'react';

interface DownArrowIconProps {
  className?: string;
}

export const DownArrowIcon: FC<DownArrowIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 5"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 5L0 0H8L4 5Z" fill="currentColor" />
  </svg>
);
