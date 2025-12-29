import React from 'react';
import figma from '@figma/code-connect';
import { Select } from './Select';
import { SelectOption } from './SelectOption';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Select component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Select,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SELECT_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),
      disabled: figma.enum('State', {
        Disabled: true
      }),
      error: figma.enum('State', {
        Error: true
      }),
      multiple: figma.boolean('Multiple'),
      clearable: figma.boolean('Clearable'),
      filterable: figma.boolean('Filterable'),
      placeholder: figma.string('Placeholder')
    },
    example: props => (
      <Select
        size={props.size}
        disabled={props.disabled}
        error={props.error}
        multiple={props.multiple}
        clearable={props.clearable}
        filterable={props.filterable}
        placeholder={props.placeholder}
      >
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </Select>
    )
  }
);

/**
 * Variant: Single Select
 */
figma.connect(
  Select,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SELECT_SINGLE_NODE_ID',
  {
    variant: { Multiple: false },
    example: () => (
      <Select placeholder="Select an option">
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </Select>
    )
  }
);

/**
 * Variant: Multi Select
 */
figma.connect(
  Select,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SELECT_MULTI_NODE_ID',
  {
    variant: { Multiple: true },
    example: () => (
      <Select multiple placeholder="Select options">
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </Select>
    )
  }
);

/**
 * Variant: Searchable/Filterable Select
 */
figma.connect(
  Select,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SELECT_FILTERABLE_NODE_ID',
  {
    variant: { Filterable: true },
    example: () => (
      <Select filterable placeholder="Search and select">
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </Select>
    )
  }
);

/**
 * Variant: Disabled Select
 */
figma.connect(
  Select,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SELECT_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => (
      <Select disabled placeholder="Disabled select">
        <SelectOption value="option1">Option 1</SelectOption>
      </Select>
    )
  }
);

/**
 * Variant: Error State Select
 */
figma.connect(
  Select,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SELECT_ERROR_NODE_ID',
  {
    variant: { State: 'Error' },
    example: () => (
      <Select error placeholder="Invalid selection">
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
      </Select>
    )
  }
);
