import React from 'react';
import { cn, createCn } from './cn';

export default {
  title: 'Utils/cn Helper',
  component: undefined
};

/**
 * The default `cn` helper function merges classnames with tailwind-merge.
 */
export const DefaultCn = () => {
  const className1 = cn('p-4 bg-blue-500', 'p-2 text-white');
  const className2 = cn('hover:bg-red-500', 'hover:bg-green-500');

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded">
        <h3 className="font-semibold mb-2">Default cn Usage</h3>
        <div className={className1}>
          Classes: p-4 bg-blue-500 + p-2 text-white = {className1}
        </div>
      </div>
      <div className="p-4 border rounded">
        <div className={className2}>
          Hover classes: hover:bg-red-500 + hover:bg-green-500 = {className2}
        </div>
      </div>
    </div>
  );
};

/**
 * Create a custom `cn` function with tailwind-merge configuration.
 * This example shows how to configure a custom prefix.
 */
export const CustomCnWithPrefix = () => {
  // Create a custom cn with 'tw-' prefix
  const customCn = createCn({
    prefix: 'tw-'
  });

  const className = customCn('tw-p-4 tw-bg-blue-500', 'tw-p-2 tw-text-white');

  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold mb-2">Custom cn with Prefix</h3>
      <p className="mb-2">
        Config:{' '}
        <code className="bg-gray-100 px-2 py-1 rounded">{`{ prefix: 'tw-' }`}</code>
      </p>
      <div className="p-4 bg-gray-50 rounded">
        <code>
          customCn('tw-p-4 tw-bg-blue-500', 'tw-p-2 tw-text-white') ={' '}
          {className}
        </code>
      </div>
    </div>
  );
};

/**
 * Create a custom `cn` function with extended class groups.
 * This example shows how to add custom class groups for better merging.
 */
export const CustomCnWithExtendedClassGroups = () => {
  // Create a custom cn with extended class groups
  const customCn = createCn({
    extend: {
      classGroups: {
        'custom-spacing': [
          'space-custom-sm',
          'space-custom-md',
          'space-custom-lg'
        ]
      }
    }
  });

  const className1 = customCn('space-custom-sm', 'space-custom-lg');
  const className2 = cn('space-custom-sm', 'space-custom-lg'); // Without config

  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold mb-2">
        Custom cn with Extended Class Groups
      </h3>
      <p className="mb-2">
        Config:{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
          {`{ extend: { classGroups: { 'custom-spacing': [...] } } }`}
        </code>
      </p>
      <div className="space-y-2">
        <div className="p-4 bg-gray-50 rounded">
          <p className="text-sm mb-1">With custom config:</p>
          <code className="text-xs">
            customCn('space-custom-sm', 'space-custom-lg') = {className1}
          </code>
        </div>
        <div className="p-4 bg-gray-50 rounded">
          <p className="text-sm mb-1">Without config (both classes kept):</p>
          <code className="text-xs">
            cn('space-custom-sm', 'space-custom-lg') = {className2}
          </code>
        </div>
      </div>
    </div>
  );
};

/**
 * Create a custom `cn` function with custom separator.
 */
export const CustomCnWithSeparator = () => {
  // Create a custom cn with custom separator
  const customCn = createCn({
    separator: '_'
  });

  const className = customCn('hover_bg-blue-500', 'hover_bg-green-500');

  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold mb-2">Custom cn with Custom Separator</h3>
      <p className="mb-2">
        Config:{' '}
        <code className="bg-gray-100 px-2 py-1 rounded">{`{ separator: '_' }`}</code>
      </p>
      <div className="p-4 bg-gray-50 rounded">
        <code>
          customCn('hover_bg-blue-500', 'hover_bg-green-500') = {className}
        </code>
      </div>
    </div>
  );
};

/**
 * Real-world example: Create a custom cn for a design system with custom utility classes.
 */
export const RealWorldExample = () => {
  // Create a custom cn for a design system
  const designSystemCn = createCn({
    extend: {
      classGroups: {
        'font-size': [
          {
            text: [
              'xs',
              'sm',
              'base',
              'lg',
              'xl',
              '2xl',
              'display-sm',
              'display-md',
              'display-lg'
            ]
          }
        ],
        'brand-color': [
          { 'bg-brand': ['primary', 'secondary', 'accent'] },
          { 'text-brand': ['primary', 'secondary', 'accent'] }
        ]
      }
    }
  });

  const heading = designSystemCn(
    'text-2xl text-brand-primary',
    'text-display-md'
  );
  const button = designSystemCn(
    'bg-brand-primary',
    'bg-brand-accent',
    'px-4 py-2 rounded'
  );

  return (
    <div className="p-4 border rounded space-y-4">
      <h3 className="font-semibold mb-2">Real-World Example: Design System</h3>
      <p className="text-sm text-gray-600 mb-4">
        Configure custom class groups for your design system to ensure proper
        class merging.
      </p>

      <div className="space-y-3">
        <div className="p-4 bg-gray-50 rounded">
          <p className="text-sm mb-1 font-medium">Heading classes:</p>
          <code className="text-xs">
            designSystemCn('text-2xl text-brand-primary', 'text-display-md') ={' '}
            {heading}
          </code>
        </div>

        <div className="p-4 bg-gray-50 rounded">
          <p className="text-sm mb-1 font-medium">Button classes:</p>
          <code className="text-xs">
            designSystemCn('bg-brand-primary', 'bg-brand-accent', 'px-4 py-2
            rounded') = {button}
          </code>
        </div>
      </div>
    </div>
  );
};
