import React, { FC } from 'react';
import { Callout, CalloutProps } from './Callout';

import CheckCircleIcon from '@/assets/icons/check_circle.svg?react';

export const SuccessCallout: FC<CalloutProps> = ({ icon, ...rest }) => (
  <Callout icon={icon ?? <CheckCircleIcon />} variant="success" {...rest} />
);
