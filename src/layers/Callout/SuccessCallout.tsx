import type { FC } from 'react';
import React from 'react';

import CheckCircleIcon from '@/assets/icons/check_circle.svg?react';

import type { CalloutProps } from './Callout';
import { Callout } from './Callout';

export const SuccessCallout: FC<CalloutProps> = ({ icon, ...rest }) => (
  <Callout icon={icon ?? <CheckCircleIcon />} variant="success" {...rest} />
);
