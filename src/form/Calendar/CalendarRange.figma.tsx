import React from 'react';
import figma from '@figma/code-connect';
import { CalendarRange } from './CalendarRange';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the CalendarRange component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  CalendarRange,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_RANGE_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      disabled: figma.enum('State', {
        Disabled: true
      }),
      monthsToDisplay: figma.enum('Months Displayed', {
        One: 1,
        Two: 2,
        Three: 3
      }),
      direction: figma.enum('Direction', {
        Past: 'past',
        Future: 'future'
      }),
      showDayOfWeek: figma.boolean('Show Day of Week')
    },
    example: props => (
      <CalendarRange
        disabled={props.disabled}
        monthsToDisplay={props.monthsToDisplay}
        direction={props.direction}
        showDayOfWeek={props.showDayOfWeek}
      />
    )
  }
);

/**
 * Variant: Two Month Range Calendar
 */
figma.connect(
  CalendarRange,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_RANGE_TWO_NODE_ID',
  {
    variant: { 'Months Displayed': 'Two' },
    example: () => <CalendarRange monthsToDisplay={2} showDayOfWeek />
  }
);

/**
 * Variant: Three Month Range Calendar
 */
figma.connect(
  CalendarRange,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_RANGE_THREE_NODE_ID',
  {
    variant: { 'Months Displayed': 'Three' },
    example: () => <CalendarRange monthsToDisplay={3} showDayOfWeek />
  }
);

/**
 * Variant: Past Direction Calendar
 */
figma.connect(
  CalendarRange,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_RANGE_PAST_NODE_ID',
  {
    variant: { Direction: 'Past' },
    example: () => (
      <CalendarRange monthsToDisplay={2} direction="past" showDayOfWeek />
    )
  }
);

/**
 * Variant: Disabled Range Calendar
 */
figma.connect(
  CalendarRange,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_RANGE_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => <CalendarRange disabled monthsToDisplay={2} showDayOfWeek />
  }
);
