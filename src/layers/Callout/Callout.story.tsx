import React, { FC } from 'react';
import { Small } from '@/typography';

import {
  Callout,
  SuccessCallout,
  WarningCallout,
  ErrorCallout,
  InfoCallout
} from '@/layers';

const CalendarIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.6667 2.66671H12V1.33337H10.6667V2.66671H5.33333V1.33337H4V2.66671H3.33333C2.59333 2.66671 2.00667 3.26671 2.00667 4.00004L2 13.3334C2 14.0667 2.59333 14.6667 3.33333 14.6667H12.6667C13.4 14.6667 14 14.0667 14 13.3334V4.00004C14 3.26671 13.4 2.66671 12.6667 2.66671ZM12.6667 13.3334H3.33333V6.66671H12.6667V13.3334ZM12.6667 5.33337H3.33333V4.00004H12.6667V5.33337ZM6 9.33337H4.66667V8.00004H6V9.33337ZM8.66667 9.33337H7.33333V8.00004H8.66667V9.33337ZM11.3333 9.33337H10V8.00004H11.3333V9.33337ZM6 12H4.66667V10.6667H6V12ZM8.66667 12H7.33333V10.6667H8.66667V12ZM11.3333 12H10V10.6667H11.3333V12Z"
      fill="currentColor"
    />
  </svg>
);

export default {
  title: 'Components/Layers/Callout',
  component: Callout
};

export const Simple = () => (
  <div className="w-[80%]">
    <Callout text="You will need admin privileges to install and access this application." />
  </div>
);

export const Variants = () => (
  <div className="flex items-center gap-2.5 flex-col w-full">
    <Callout text="You will need admin privileges to install and access this application." />
    <SuccessCallout text="You will need admin privileges to install and access this application." />
    <WarningCallout text="You will need admin privileges to install and access this application." />
    <ErrorCallout text="You will need admin privileges to install and access this application." />
    <InfoCallout text="You will need admin privileges to install and access this application." />
  </div>
);

export const CustomIcon = () => (
  <div className="w-[80%]">
    <InfoCallout
      icon={<CalendarIcon />}
      text="You will need admin privileges to install and access this application."
    />
  </div>
);

export const CustomText = () => (
  <div className="w-[80%]">
    <InfoCallout
      variant="info"
      text={
        <Small>
          You will need{' '}
          <span className="font-semibold text-warning">admin</span> privileges
          to install and access this application.
        </Small>
      }
    />
  </div>
);
