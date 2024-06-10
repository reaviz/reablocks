import React, { FC } from 'react';
import { Callout, CalloutProps } from './Callout';

import InfoIcon from '@/assets/icons/info.svg?react';

export const InfoCallout: FC<CalloutProps> = ({ icon, text, theme }) => (
  <Callout
    icon={icon ?? <InfoIcon />}
    text={text}
    variant="info"
    theme={theme}
  />
);
