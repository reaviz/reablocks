import React from 'react';
import figma from '@figma/code-connect';
import { DateInput } from './DateInput';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the DateInput component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  DateInput,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATE_INPUT_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      disabled: figma.enum('State', {
        Disabled: true
      }),
      error: figma.enum('State', {
        Error: true
      }),
      isRange: figma.boolean('Range Mode'),
      openOnFocus: figma.boolean('Open on Focus'),
      format: figma.string('Date Format'),
      placeholder: figma.string('Placeholder')
    },
    example: props => (
      <DateInput
        disabled={props.disabled}
        error={props.error}
        isRange={props.isRange}
        openOnFocus={props.openOnFocus}
        format={props.format}
        placeholder={props.placeholder}
        value={new Date()}
        onChange={() => {}}
      />
    )
  }
);

/**
 * Variant: Single Date Input
 */
figma.connect(
  DateInput,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATE_INPUT_SINGLE_NODE_ID',
  {
    variant: { 'Range Mode': false },
    example: () => <DateInput value={new Date()} onChange={() => {}} />
  }
);

/**
 * Variant: Date Range Input
 */
figma.connect(
  DateInput,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATE_INPUT_RANGE_NODE_ID',
  {
    variant: { 'Range Mode': true },
    example: () => (
      <DateInput isRange value={[new Date(), new Date()]} onChange={() => {}} />
    )
  }
);

/**
 * Variant: Disabled Date Input
 */
figma.connect(
  DateInput,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATE_INPUT_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => <DateInput disabled value={new Date()} onChange={() => {}} />
  }
);

/**
 * Variant: Error State Date Input
 */
figma.connect(
  DateInput,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATE_INPUT_ERROR_NODE_ID',
  {
    variant: { State: 'Error' },
    example: () => <DateInput error value={new Date()} onChange={() => {}} />
  }
);
