import React, { FC } from 'react';
import { Callout, CalloutProps } from './Callout';

import ErrorCircleIcon from '@/assets/icons/error_circle.svg?react';

export const ErrorCallout: FC<CalloutProps> = ({ icon, ...rest }) => (
  <Callout icon={icon ?? <ErrorCircleIcon />} variant="error" {...rest} />
);
