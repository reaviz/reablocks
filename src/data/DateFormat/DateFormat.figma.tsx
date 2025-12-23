import React from 'react';
import figma from '@figma/code-connect';
import { DateFormat } from './DateFormat';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the DateFormat component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  DateFormat,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATEFORMAT_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      format: figma.enum('Format', {
        Short: 'MM/dd/yy',
        Long: 'MMMM dd, yyyy',
        'With Time': 'MM/dd/yy hh:mm:ss a',
        ISO: 'yyyy-MM-dd',
        Full: 'EEEE, MMMM dd, yyyy'
      }),
      fromNow: figma.boolean('Relative Time'),
      allowToggle: figma.boolean('Allow Toggle'),
      includeSeconds: figma.boolean('Include Seconds'),
      addSuffix: figma.boolean('Add Suffix'),
      emptyMessage: figma.string('Empty Message')
    },
    example: props => (
      <DateFormat
        date={new Date()}
        format={props.format}
        fromNow={props.fromNow}
        allowToggle={props.allowToggle}
        includeSeconds={props.includeSeconds}
        addSuffix={props.addSuffix}
        emptyMessage={props.emptyMessage}
      />
    )
  }
);

/**
 * Variant: Absolute date (short format)
 */
figma.connect(
  DateFormat,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATEFORMAT_SHORT_NODE_ID',
  {
    variant: { Format: 'Short', 'Relative Time': false },
    example: () => <DateFormat date={new Date()} format="MM/dd/yy" />
  }
);

/**
 * Variant: Absolute date (long format)
 */
figma.connect(
  DateFormat,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATEFORMAT_LONG_NODE_ID',
  {
    variant: { Format: 'Long', 'Relative Time': false },
    example: () => <DateFormat date={new Date()} format="MMMM dd, yyyy" />
  }
);

/**
 * Variant: Absolute date with time
 */
figma.connect(
  DateFormat,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATEFORMAT_DATETIME_NODE_ID',
  {
    variant: { Format: 'With Time' },
    example: () => <DateFormat date={new Date()} format="MM/dd/yy hh:mm:ss a" />
  }
);

/**
 * Variant: Relative time (from now)
 */
figma.connect(
  DateFormat,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATEFORMAT_RELATIVE_NODE_ID',
  {
    variant: { 'Relative Time': true },
    example: () => <DateFormat date={new Date()} fromNow />
  }
);

/**
 * Variant: Relative time with toggle
 */
figma.connect(
  DateFormat,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATEFORMAT_TOGGLE_NODE_ID',
  {
    variant: { 'Relative Time': true, 'Allow Toggle': true },
    example: () => (
      <DateFormat date={new Date()} fromNow allowToggle cacheKey="example" />
    )
  }
);

/**
 * Variant: ISO format
 */
figma.connect(
  DateFormat,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATEFORMAT_ISO_NODE_ID',
  {
    variant: { Format: 'ISO' },
    example: () => <DateFormat date={new Date()} format="yyyy-MM-dd" />
  }
);

/**
 * Variant: Full format with day name
 */
figma.connect(
  DateFormat,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATEFORMAT_FULL_NODE_ID',
  {
    variant: { Format: 'Full' },
    example: () => <DateFormat date={new Date()} format="EEEE, MMMM dd, yyyy" />
  }
);

/**
 * Variant: Empty state
 */
figma.connect(
  DateFormat,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATEFORMAT_EMPTY_NODE_ID',
  {
    variant: { State: 'Empty' },
    example: () => <DateFormat date={null} emptyMessage="No date available" />
  }
);
