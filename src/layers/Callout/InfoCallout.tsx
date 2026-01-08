import type { FC } from 'react';
import React from 'react';

import InfoIcon from '@/assets/icons/info.svg?react';

import type { CalloutProps } from './Callout';
import { Callout } from './Callout';

export const InfoCallout: FC<CalloutProps> = ({ icon, ...rest }) => (
  <Callout icon={icon ?? <InfoIcon />} variant="info" {...rest} />
);
