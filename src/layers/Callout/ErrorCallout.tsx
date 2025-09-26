import type { FC } from 'react';
import React from 'react';

import ErrorCircleIcon from '@/assets/icons/error_circle.svg?react';

import type { CalloutProps } from './Callout';
import { Callout } from './Callout';

export const ErrorCallout: FC<CalloutProps> = ({ icon, ...rest }) => (
  <Callout icon={icon ?? <ErrorCircleIcon />} variant="error" {...rest} />
);
