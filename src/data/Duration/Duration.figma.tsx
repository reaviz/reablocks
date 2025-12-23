import React from 'react';
import figma from '@figma/code-connect';
import { Duration } from './Duration';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Duration component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Duration,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DURATION_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      value: figma.enum('Duration', {
        Milliseconds: 500,
        Seconds: 5000,
        Minutes: 120000,
        Hours: 3600000,
        Days: 86400000
      }),
      emptyValue: figma.string('Empty Value'),
      zeroValue: figma.string('Zero Value')
    },
    example: props => (
      <Duration
        value={props.value}
        emptyValue={props.emptyValue}
        zeroValue={props.zeroValue}
      />
    )
  }
);

/**
 * Variant: Milliseconds
 */
figma.connect(
  Duration,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DURATION_MS_NODE_ID',
  {
    variant: { Duration: 'Milliseconds' },
    example: () => <Duration value={750} />
  }
);

/**
 * Variant: Seconds
 */
figma.connect(
  Duration,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DURATION_SECONDS_NODE_ID',
  {
    variant: { Duration: 'Seconds' },
    example: () => <Duration value={15000} />
  }
);

/**
 * Variant: Minutes
 */
figma.connect(
  Duration,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DURATION_MINUTES_NODE_ID',
  {
    variant: { Duration: 'Minutes' },
    example: () => <Duration value={300000} />
  }
);

/**
 * Variant: Hours
 */
figma.connect(
  Duration,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DURATION_HOURS_NODE_ID',
  {
    variant: { Duration: 'Hours' },
    example: () => <Duration value={7200000} />
  }
);

/**
 * Variant: Days
 */
figma.connect(
  Duration,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DURATION_DAYS_NODE_ID',
  {
    variant: { Duration: 'Days' },
    example: () => <Duration value={172800000} />
  }
);

/**
 * Variant: Zero duration
 */
figma.connect(
  Duration,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DURATION_ZERO_NODE_ID',
  {
    variant: { State: 'Zero' },
    example: () => <Duration value={0} />
  }
);

/**
 * Variant: Empty state
 */
figma.connect(
  Duration,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DURATION_EMPTY_NODE_ID',
  {
    variant: { State: 'Empty' },
    example: () => <Duration value={null} emptyValue="No duration" />
  }
);
