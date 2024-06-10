import React, { FC } from 'react';
import { Callout, CalloutProps } from './Callout';

import WarningIcon from '@/assets/icons/warning.svg?react';

export const WarningCallout: FC<CalloutProps> = ({ icon, text, theme }) => (
  <Callout
    icon={icon ?? <WarningIcon />}
    text={text}
    variant="warning"
    theme={theme}
  />
);
