import React, { FC } from 'react';
import { Callout, CalloutProps } from './Callout';

import ErrorCircleIcon from '@/assets/icons/error_circle.svg?react';

export const ErrorCallout: FC<CalloutProps> = ({ icon, text, theme }) => (
  <Callout
    icon={icon ?? <ErrorCircleIcon />}
    text={text}
    variant="error"
    theme={theme}
  />
);
