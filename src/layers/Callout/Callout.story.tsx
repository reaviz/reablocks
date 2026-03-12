import React from 'react';
import { Small } from '@/typography';

import {
  Callout,
  SuccessCallout,
  WarningCallout,
  ErrorCallout,
  InfoCallout
} from '@/layers';

import CalendarIcon from '@/assets/icons/calendar.svg?react';

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
