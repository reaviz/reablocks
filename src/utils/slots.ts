import { Children, isValidElement, ReactNode } from 'react';

/**
 * Check if children contain any components with matching display names
 */
export function hasSlotComponents(
  children: ReactNode,
  slotNames: string[]
): boolean {
  let hasSlots = false;

  Children.forEach(children, child => {
    if (isValidElement(child)) {
      const displayName =
        (child.type as any)?.displayName || (child.type as any)?.name || '';
      if (slotNames.includes(displayName)) {
        hasSlots = true;
      }
    }
  });

  return hasSlots;
}

/**
 * Extract slot components from children by display name
 */
export function extractSlots<T extends Record<string, ReactNode>>(
  children: ReactNode,
  slotNameToKey: Record<string, keyof T>
): T & { other: ReactNode[] } {
  const slots: Record<string, ReactNode> = {};
  const other: ReactNode[] = [];

  // Initialize all slots to null
  Object.values(slotNameToKey).forEach(key => {
    slots[key as string] = null;
  });

  Children.forEach(children, child => {
    if (isValidElement(child)) {
      const displayName =
        (child.type as any)?.displayName || (child.type as any)?.name || '';

      const slotKey = slotNameToKey[displayName];
      if (slotKey) {
        slots[slotKey as string] = child;
      } else {
        other.push(child);
      }
    } else if (child != null) {
      other.push(child);
    }
  });

  return { ...slots, other } as T & { other: ReactNode[] };
}
