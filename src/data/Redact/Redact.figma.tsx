import React from 'react';
import figma from '@figma/code-connect';
import { Redact } from './Redact';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Redact component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Redact,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=REDACT_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      value: figma.string('Sensitive Content'),
      allowToggle: figma.boolean('Allow Toggle'),
      compactLength: figma.enum('Compact Length', {
        '4': 4,
        '8': 8,
        '12': 12,
        '16': 16
      }),
      character: figma.enum('Mask Character', {
        Asterisk: '*',
        Bullet: '•',
        Hash: '#',
        Dash: '-'
      })
    },
    example: props => (
      <Redact
        value={props.value}
        allowToggle={props.allowToggle}
        compactLength={props.compactLength}
        character={props.character}
      />
    )
  }
);

/**
 * Variant: Basic redacted text (toggleable)
 */
figma.connect(
  Redact,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=REDACT_BASIC_NODE_ID',
  {
    variant: { Type: 'Default' },
    example: () => <Redact value="secret-api-key-12345" />
  }
);

/**
 * Variant: Non-toggleable redacted text
 */
figma.connect(
  Redact,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=REDACT_STATIC_NODE_ID',
  {
    variant: { 'Allow Toggle': false },
    example: () => (
      <Redact value="confidential-data-abc123" allowToggle={false} />
    )
  }
);

/**
 * Variant: Compact redaction
 */
figma.connect(
  Redact,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=REDACT_COMPACT_NODE_ID',
  {
    variant: { Length: 'Compact' },
    example: () => <Redact value="password123456789" compactLength={4} />
  }
);

/**
 * Variant: Custom mask character (bullet)
 */
figma.connect(
  Redact,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=REDACT_BULLET_NODE_ID',
  {
    variant: { 'Mask Character': 'Bullet' },
    example: () => <Redact value="sensitive-information" character="•" />
  }
);
