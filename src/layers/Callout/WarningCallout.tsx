import type { FC } from 'react';
import React from 'react';

import WarningIcon from '@/assets/icons/warning.svg?react';

import type { CalloutProps } from './Callout';
import { Callout } from './Callout';

export const WarningCallout: FC<CalloutProps> = ({ icon, ...rest }) => (
  <Callout icon={icon ?? <WarningIcon />} variant="warning" {...rest} />
);
