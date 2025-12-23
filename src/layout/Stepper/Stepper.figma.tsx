import React from 'react';
import figma from '@figma/code-connect';
import { Stepper } from './Stepper';
import { Step } from './Step';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Stepper component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Stepper,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STEPPER_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      activeStep: figma.string('Active Step'),
      variant: figma.enum('Variant', {
        Default: 'default',
        Numbered: 'numbered'
      }),
      continuous: figma.boolean('Continuous'),
      animated: figma.boolean('Animated')
    },
    example: props => (
      <Stepper
        activeStep={parseInt(props.activeStep) || 0}
        variant={props.variant}
        continuous={props.continuous}
        animated={props.animated}
      >
        <Step>Step 1 content</Step>
        <Step>Step 2 content</Step>
        <Step>Step 3 content</Step>
      </Stepper>
    )
  }
);

/**
 * Variant: Default Stepper (Dots)
 */
figma.connect(
  Stepper,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STEPPER_DEFAULT_NODE_ID',
  {
    variant: { Variant: 'Default' },
    example: () => (
      <Stepper activeStep={1} variant="default">
        <Step>First step completed</Step>
        <Step>Current step in progress</Step>
        <Step>Future step pending</Step>
      </Stepper>
    )
  }
);

/**
 * Variant: Numbered Stepper
 */
figma.connect(
  Stepper,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STEPPER_NUMBERED_NODE_ID',
  {
    variant: { Variant: 'Numbered' },
    example: () => (
      <Stepper activeStep={2} variant="numbered">
        <Step>Step 1: Account Information</Step>
        <Step>Step 2: Payment Details</Step>
        <Step>Step 3: Confirmation</Step>
      </Stepper>
    )
  }
);

/**
 * Variant: Labeled Stepper
 */
figma.connect(
  Stepper,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STEPPER_LABELED_NODE_ID',
  {
    variant: { 'Has Labels': true },
    example: () => (
      <Stepper activeStep={1}>
        <Step label="Setup">Configure your settings</Step>
        <Step label="Review">Review your choices</Step>
        <Step label="Complete">Finish setup</Step>
      </Stepper>
    )
  }
);

/**
 * Variant: Continuous Stepper
 */
figma.connect(
  Stepper,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STEPPER_CONTINUOUS_NODE_ID',
  {
    variant: { Continuous: true },
    example: () => (
      <Stepper activeStep={1} continuous>
        <Step>Step 1</Step>
        <Step>Step 2</Step>
        <Step>Step 3</Step>
      </Stepper>
    )
  }
);

/**
 * Variant: Animated Stepper
 */
figma.connect(
  Stepper,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STEPPER_ANIMATED_NODE_ID',
  {
    variant: { Animated: true },
    example: () => (
      <Stepper activeStep={2} animated>
        <Step>Introduction</Step>
        <Step>Configuration</Step>
        <Step>Summary</Step>
        <Step>Done</Step>
      </Stepper>
    )
  }
);
