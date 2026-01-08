import { describe, test, expect } from 'vitest';
import React, { ReactNode } from 'react';
import { DrawerHeader } from './DrawerHeader';
import { DrawerContent } from './DrawerContent';
import { DrawerFooter } from './DrawerFooter';

// Test that displayNames are set correctly for slot detection
describe('Drawer Slot Components', () => {
  describe('displayName', () => {
    test('DrawerHeader has correct displayName', () => {
      expect(DrawerHeader.displayName).toBe('DrawerHeader');
    });

    test('DrawerContent has correct displayName', () => {
      expect(DrawerContent.displayName).toBe('DrawerContent');
    });

    test('DrawerFooter has correct displayName', () => {
      expect(DrawerFooter.displayName).toBe('DrawerFooter');
    });
  });
});

// Test slot detection logic - using arrays since React.Children.forEach
// flattens fragments in real component usage
describe('Drawer Slot Detection', () => {
  const SLOT_NAMES = ['DrawerHeader', 'DrawerContent', 'DrawerFooter'];

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

  test('should detect DrawerHeader slot', () => {
    const children = <DrawerHeader>Title</DrawerHeader>;
    expect(hasSlotComponents(children)).toBe(true);
  });

  test('should detect DrawerContent slot', () => {
    const children = <DrawerContent>Content</DrawerContent>;
    expect(hasSlotComponents(children)).toBe(true);
  });

  test('should detect DrawerFooter slot', () => {
    const children = <DrawerFooter>Footer</DrawerFooter>;
    expect(hasSlotComponents(children)).toBe(true);
  });

  test('should detect multiple slots in array', () => {
    const children = [
      <DrawerHeader key="header">Title</DrawerHeader>,
      <DrawerContent key="content">Content</DrawerContent>,
      <DrawerFooter key="footer">Footer</DrawerFooter>
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
      <DrawerHeader key="header">Title</DrawerHeader>,
      <span key="span">Regular span</span>
    ];
    expect(hasSlotComponents(children)).toBe(true);
  });
});

// Test slot extraction logic
describe('Drawer Slot Extraction', () => {
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
          case 'DrawerHeader':
            slots.header = child;
            break;
          case 'DrawerContent':
            slots.content = child;
            break;
          case 'DrawerFooter':
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
      <DrawerHeader key="header">Title</DrawerHeader>,
      <DrawerContent key="content">Content</DrawerContent>
    ];
    const slots = extractSlots(children);
    expect(slots.header).not.toBeNull();
    expect(slots.content).not.toBeNull();
    expect(slots.footer).toBeNull();
  });

  test('should extract all slots', () => {
    const children = [
      <DrawerHeader key="header">Title</DrawerHeader>,
      <DrawerContent key="content">Content</DrawerContent>,
      <DrawerFooter key="footer">Footer</DrawerFooter>
    ];
    const slots = extractSlots(children);
    expect(slots.header).not.toBeNull();
    expect(slots.content).not.toBeNull();
    expect(slots.footer).not.toBeNull();
    expect(slots.other).toHaveLength(0);
  });

  test('should extract non-slot elements to other', () => {
    const children = [
      <DrawerHeader key="header">Title</DrawerHeader>,
      <div key="div">Custom element</div>,
      <DrawerContent key="content">Content</DrawerContent>
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
    const children = <DrawerHeader>Title</DrawerHeader>;
    const slots = extractSlots(children);
    expect(slots.header).not.toBeNull();
    expect(slots.content).toBeNull();
  });
});
