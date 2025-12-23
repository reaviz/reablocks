import React from 'react';
import figma from '@figma/code-connect';
import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the RadioGroup component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  RadioGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RADIO_GROUP_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      selectedValue: figma.string('Selected Value')
    },
    example: props => (
      <RadioGroup selectedValue={props.selectedValue} onChange={() => {}}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    )
  }
);

/**
 * Variant: Vertical Radio Group
 */
figma.connect(
  RadioGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RADIO_GROUP_VERTICAL_NODE_ID',
  {
    variant: { Orientation: 'Vertical' },
    example: () => (
      <RadioGroup selectedValue="option1" onChange={() => {}}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    )
  }
);

/**
 * Variant: Horizontal Radio Group
 */
figma.connect(
  RadioGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RADIO_GROUP_HORIZONTAL_NODE_ID',
  {
    variant: { Orientation: 'Horizontal' },
    example: () => (
      <RadioGroup
        selectedValue="option1"
        onChange={() => {}}
        className="flex flex-row gap-4"
      >
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    )
  }
);
