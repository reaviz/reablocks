import { Typography } from '@/typography';
import React from 'react';
import { Stack } from '@/layout';

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
  <Stack direction="column" className="w-full">
    <Callout text="You will need admin privileges to install and access this application." />
    <SuccessCallout text="You will need admin privileges to install and access this application." />
    <WarningCallout text="You will need admin privileges to install and access this application." />
    <ErrorCallout text="You will need admin privileges to install and access this application." />
    <InfoCallout text="You will need admin privileges to install and access this application." />
  </Stack>
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
        <Typography>
          You will need <Typography variant="button">admin</Typography>{' '}
          privileges to install and access this application.
        </Typography>
      }
    />
  </div>
);
