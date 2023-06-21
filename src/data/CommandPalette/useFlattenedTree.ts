import {
  createRef,
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  RefObject
} from 'react';
import { CommandPaletteItem } from './CommandPaletteItem';

export interface FocusableElement {
  ref: RefObject<HTMLElement>;
  onClick: (() => void) | undefined;
}

export const useFlattenedTree = (children: ReactNode) => {
  const flattenedTree: FocusableElement[] = [];
  Children.forEach(children, child => {
    if (isValidElement(child)) {
      if (child.type === CommandPaletteItem) {
        const ref = createRef<HTMLElement>();
        flattenedTree.push({ ref, onClick: child.props.onClick });
        child = cloneElement(child, { ref });
      } else if (child.props && child.props.children) {
        child = cloneElement(child, {
          children: useFlattenedTree(child.props.children)
        });
      }
    }
  });
  return flattenedTree;
};
