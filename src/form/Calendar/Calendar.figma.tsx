import React from 'react';
import figma from '@figma/code-connect';
import { Calendar } from './Calendar';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Calendar component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Calendar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      disabled: figma.enum('State', {
        Disabled: true
      }),
      isRange: figma.boolean('Range Mode'),
      showTime: figma.boolean('Show Time'),
      showDayOfWeek: figma.boolean('Show Day of Week'),
      showToday: figma.boolean('Highlight Today'),
      is12HourCycle: figma.boolean('12 Hour Format')
    },
    example: props => (
      <Calendar
        disabled={props.disabled}
        isRange={props.isRange}
        showTime={props.showTime}
        showDayOfWeek={props.showDayOfWeek}
        showToday={props.showToday}
        is12HourCycle={props.is12HourCycle}
      />
    )
  }
);

/**
 * Variant: Single Date Calendar
 */
figma.connect(
  Calendar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_SINGLE_NODE_ID',
  {
    variant: { 'Range Mode': false },
    example: () => <Calendar showDayOfWeek />
  }
);

/**
 * Variant: Date Range Calendar
 */
figma.connect(
  Calendar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_RANGE_NODE_ID',
  {
    variant: { 'Range Mode': true },
    example: () => <Calendar isRange showDayOfWeek />
  }
);

/**
 * Variant: Calendar with Time Picker
 */
figma.connect(
  Calendar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_TIME_NODE_ID',
  {
    variant: { 'Show Time': true },
    example: () => <Calendar showTime showDayOfWeek />
  }
);

/**
 * Variant: Disabled Calendar
 */
figma.connect(
  Calendar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALENDAR_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => <Calendar disabled showDayOfWeek />
  }
);
