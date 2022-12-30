import React from 'react';
import { DesignTokensProvider, lightTheme } from '../../utils/DesignTokens';
import { Divider } from './Divider';

export default {
  title: 'Layout/Divider',
  component: Divider,
  decorators: [
    Story => (
      <DesignTokensProvider value={lightTheme}>
        <div style={{ width: 400 }}>
          <Story />
        </div>
      </DesignTokensProvider>
    )
  ]
};

export const Horizontal = () => (
  <>
    Above
    <Divider />
    Below
  </>
);

export const NoMargin = () => (
  <>
    Above
    <Divider disableMargins />
    Below
  </>
);

export const Vertical = () => (
  <div style={{ height: 400, display: 'flex' }}>
    Left
    <Divider orientation="vertical" />
    Right
  </div>
);
