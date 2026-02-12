import { PaintBrushIcon } from '@storybook/icons';
import React from 'react';
import { IconButton } from 'storybook/internal/components';
import { addons, types, useGlobals } from 'storybook/manager-api';
import { styled } from 'storybook/theming';

import theme from './theme';

addons.setConfig({ theme });

const IconButtonLabel = styled.div(({ theme: t }) => ({
  fontSize: t.typography.size.s2 - 1
}));

const VariantToggle = React.memo(function VariantToggle() {
  const [globals, updateGlobals] = useGlobals();
  const current = globals.themeVariant || 'default';
  const isUnify = current === 'unify';

  return React.createElement(
    IconButton,
    {
      key: 'variant-toggle',
      active: true,
      title: `Switch to ${isUnify ? 'Default' : 'Unify'} theme`,
      onClick: () =>
        updateGlobals({ themeVariant: isUnify ? 'default' : 'unify' })
    },
    React.createElement(PaintBrushIcon, null),
    React.createElement(IconButtonLabel, null, isUnify ? 'Unify' : 'Default')
  );
});

addons.register('variant-toggle', () => {
  addons.add('variant-toggle/tool', {
    type: types.TOOL,
    title: 'Theme Variant',
    match: ({ viewMode, tabId }) =>
      !!(viewMode && viewMode.match(/^(story|docs)$/)) && !tabId,
    render: () => React.createElement(VariantToggle)
  });
});
