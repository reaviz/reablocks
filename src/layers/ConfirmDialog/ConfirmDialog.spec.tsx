import { describe, test, expect } from 'vitest';
import React, { ReactNode } from 'react';
import { ConfirmDialogActions } from './ConfirmDialogActions';

// Slot detection — mirrors the runtime check in ConfirmDialog that decides
// whether to render the default footer or the user's custom actions.
describe('ConfirmDialog Slot Components', () => {
  test('ConfirmDialogActions has correct displayName', () => {
    expect(ConfirmDialogActions.displayName).toBe('ConfirmDialogActions');
  });
});

describe('ConfirmDialog Slot Detection', () => {
  const SLOT_NAMES = ['ConfirmDialogActions'];

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

  test('should detect ConfirmDialogActions slot', () => {
    const children = <ConfirmDialogActions>actions</ConfirmDialogActions>;
    expect(hasSlotComponents(children)).toBe(true);
  });

  test('should detect ConfirmDialogActions slot in an array', () => {
    const children = [
      <ConfirmDialogActions key="actions">actions</ConfirmDialogActions>
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
    expect(hasSlotComponents('Just a string')).toBe(false);
  });

  test('should not detect null/undefined children as slots', () => {
    expect(hasSlotComponents(null)).toBe(false);
    expect(hasSlotComponents(undefined)).toBe(false);
  });
});
