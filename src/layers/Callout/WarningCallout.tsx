import React, { FC } from 'react';
import { Callout, CalloutProps } from './Callout';

import WarningIcon from '@/assets/icons/warning.svg?react';

export const WarningCallout: FC<CalloutProps> = ({ icon, ...rest }) => (
  <Callout icon={icon ?? <WarningIcon />} variant="warning" {...rest} />
);
