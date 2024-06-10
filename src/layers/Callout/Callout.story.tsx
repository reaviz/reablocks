import React from 'react';
import { Stack } from '@/layout';
import { Callout } from './Callout';
import { Text } from '@/typography';

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
    <Callout
      variant="default"
      text="You will need admin privileges to install and access this application."
    />
    <Callout
      variant="success"
      text="You will need admin privileges to install and access this application."
    />
    <Callout
      variant="warning"
      text="You will need admin privileges to install and access this application."
    />
    <Callout
      variant="error"
      text="You will need admin privileges to install and access this application."
    />
    <Callout
      variant="info"
      text="You will need admin privileges to install and access this application."
    />
  </Stack>
);

export const CustomIcon = () => (
  <div className="w-[80%]">
    <Callout
      icon={<CalendarIcon />}
      variant="info"
      text="You will need admin privileges to install and access this application."
    />
  </div>
);

export const CustomText = () => (
  <div className="w-[80%]">
    <Callout
      variant="info"
      text={
        <Text>
          You will need{' '}
          <Text fontStyle="bold" color="warning">
            admin
          </Text>{' '}
          privileges to install and access this application.
        </Text>
      }
    />
  </div>
);
