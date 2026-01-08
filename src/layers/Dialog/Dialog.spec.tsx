import type { ReactNode } from 'react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';

// Test that displayNames are set correctly for slot detection
describe('Dialog Slot Components', () => {
  describe('displayName', () => {
    test('DialogHeader has correct displayName', () => {
      expect(DialogHeader.displayName).toBe('DialogHeader');
    });

    test('DialogContent has correct displayName', () => {
      expect(DialogContent.displayName).toBe('DialogContent');
    });

    test('DialogFooter has correct displayName', () => {
      expect(DialogFooter.displayName).toBe('DialogFooter');
    });
  });
});

// Test slot detection logic - using arrays since React.Children.forEach
// flattens fragments in real component usage
describe('Slot Detection', () => {
  const SLOT_NAMES = ['DialogHeader', 'DialogContent', 'DialogFooter'];

  function hasSlotComponents(children: ReactNode): boolean {
    let hasSlots = false;

    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        const displayName =
          (child.type as any)?.displayName || (child.type as any)?.name || '';
        if (SLOT_NAMES.includes(displayName)) {
          hasSlots = true;
        }
      }
    });

    return hasSlots;
  }

  test('should detect DialogHeader slot', () => {
    const children = <DialogHeader>Title</DialogHeader>;
    expect(hasSlotComponents(children)).toBe(true);
  });

  test('should detect DialogContent slot', () => {
    const children = <DialogContent>Content</DialogContent>;
    expect(hasSlotComponents(children)).toBe(true);
  });

  test('should detect DialogFooter slot', () => {
    const children = <DialogFooter>Footer</DialogFooter>;
    expect(hasSlotComponents(children)).toBe(true);
  });

  test('should detect multiple slots in array', () => {
    const children = [
      <DialogHeader key="header">Title</DialogHeader>,
      <DialogContent key="content">Content</DialogContent>,
      <DialogFooter key="footer">Footer</DialogFooter>
    ];
    expect(hasSlotComponents(children)).toBe(true);
  });

  test('should not detect regular elements as slots', () => {
    const children = [
      <div key="div">Regular div</div>,
      <span key="span">Regular span</span>
    ];
    expect(hasSlotComponents(children)).toBe(false);
  });

  test('should not detect text nodes as slots', () => {
    const children = 'Just a string';
    expect(hasSlotComponents(children)).toBe(false);
  });

  test('should handle mixed content', () => {
    const children = [
      <div key="div">Regular div</div>,
      <DialogHeader key="header">Title</DialogHeader>,
      <span key="span">Regular span</span>
    ];
    expect(hasSlotComponents(children)).toBe(true);
  });
});

// Test slot extraction logic
describe('Slot Extraction', () => {
  function extractSlots(children: ReactNode): {
    header: ReactNode;
    content: ReactNode;
    footer: ReactNode;
    other: ReactNode[];
  } {
    const slots: {
      header: ReactNode;
      content: ReactNode;
      footer: ReactNode;
      other: ReactNode[];
    } = {
      header: null,
      content: null,
      footer: null,
      other: []
    };

    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        const displayName =
          (child.type as any)?.displayName || (child.type as any)?.name || '';

        switch (displayName) {
          case 'DialogHeader':
            slots.header = child;
            break;
          case 'DialogContent':
            slots.content = child;
            break;
          case 'DialogFooter':
            slots.footer = child;
            break;
          default:
            slots.other.push(child);
        }
      } else if (child != null) {
        slots.other.push(child);
      }
    });

    return slots;
  }

  test('should extract header slot', () => {
    const children = [
      <DialogHeader key="header">Title</DialogHeader>,
      <DialogContent key="content">Content</DialogContent>
    ];
    const slots = extractSlots(children);
    expect(slots.header).not.toBeNull();
    expect(slots.content).not.toBeNull();
    expect(slots.footer).toBeNull();
  });

  test('should extract all slots', () => {
    const children = [
      <DialogHeader key="header">Title</DialogHeader>,
      <DialogContent key="content">Content</DialogContent>,
      <DialogFooter key="footer">Footer</DialogFooter>
    ];
    const slots = extractSlots(children);
    expect(slots.header).not.toBeNull();
    expect(slots.content).not.toBeNull();
    expect(slots.footer).not.toBeNull();
    expect(slots.other).toHaveLength(0);
  });

  test('should extract non-slot elements to other', () => {
    const children = [
      <DialogHeader key="header">Title</DialogHeader>,
      <div key="div">Custom element</div>,
      <DialogContent key="content">Content</DialogContent>
    ];
    const slots = extractSlots(children);
    expect(slots.header).not.toBeNull();
    expect(slots.content).not.toBeNull();
    expect(slots.other).toHaveLength(1);
  });

  test('should handle empty children', () => {
    const slots = extractSlots(null);
    expect(slots.header).toBeNull();
    expect(slots.content).toBeNull();
    expect(slots.footer).toBeNull();
    expect(slots.other).toHaveLength(0);
  });

  test('should handle single slot without array', () => {
    const children = <DialogHeader>Title</DialogHeader>;
    const slots = extractSlots(children);
    expect(slots.header).not.toBeNull();
    expect(slots.content).toBeNull();
  });
});
