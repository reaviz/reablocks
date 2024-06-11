import React, { FC } from 'react';
import { Callout, CalloutProps } from './Callout';

import InfoIcon from '@/assets/icons/info.svg?react';

export const InfoCallout: FC<CalloutProps> = ({ icon, ...rest }) => (
  <Callout icon={icon ?? <InfoIcon />} variant="info" {...rest} />
);
