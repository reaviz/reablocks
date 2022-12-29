import React from 'react';
import {
  DesignTokens,
  DesignTokensProvider,
  lightTheme
} from '../../utils/DesignTokens';
import { Divider } from './Divider';

export default {
  title: 'Layout/Divider',
  component: Divider
};

const dividerTheme: DesignTokens = {
  ...lightTheme,
  components: {
    divider: {
      'divider-bg': lightTheme.colors.grey['500']
    }
  }
};

export const Horizontal = () => (
  <DesignTokensProvider value={dividerTheme}>
    <div style={{ width: 400 }}>
      Above
      <Divider />
      Below
    </div>
  </DesignTokensProvider>
);

export const NoMargin = () => (
  <DesignTokensProvider value={dividerTheme}>
    <div style={{ width: 400 }}>
      Above
      <Divider disableMargins />
      Below
    </div>
  </DesignTokensProvider>
);

export const Vertical = () => (
  <DesignTokensProvider value={dividerTheme}>
    <div style={{ height: 400, width: 100, display: 'flex' }}>
      Left
      <Divider orientation="vertical" />
      Right
    </div>
  </DesignTokensProvider>
);
