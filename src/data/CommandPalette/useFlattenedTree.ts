import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  RefObject,
  useRef,
  useState,
  useEffect
} from 'react';

export const DATA_ATTRIBUTE_INDEX = 'keyboard_index';

export interface FocusableElement {
  ref: RefObject<HTMLElement>;
  onClick: (() => void) | undefined;
}

export const useFlattenedTree = (
  children: ReactNode,
  selectedIndex: number,
  onSelectedIndexChange: (index: number) => void
) => {
  const itemsRef = useRef<HTMLElement[]>([]);
  const [flattenedTree, setFlattenedTree] = useState<ReactNode[]>([]);

  function flattenChildren(nodes: ReactNode) {
    const result: ReactNode[] = [];

    Children.forEach(nodes, (child: ReactNode, index) => {
      if (isValidElement(child)) {
        // @ts-ignore
        if (child.type.displayName === 'CommandPaletteSection') {
          result.push(
            cloneElement(child, {
              children: flattenChildren(child.props.children),
              index
            })
          );
          // @ts-ignore
        } else if (child.type.displayName === 'CommandPaletteItem') {
          const index = itemsRef.current.length;

          const clone = cloneElement(child, {
            // NOTE: This isn't working for some reason
            ref: (ref: HTMLElement | null) => (itemsRef.current[index] = ref),
            active: index === selectedIndex,
            onClick: () => onSelectedIndexChange?.(index),
            [DATA_ATTRIBUTE_INDEX]: index
          });

          // NOTE: This is a temp hack
          itemsRef.current[index] = clone as any;

          result.push(clone);
        } else {
          result.push(child);
        }
      }
    });

    return result;
  }

  useEffect(() => {
    itemsRef.current = [];
    setFlattenedTree(flattenChildren(children));
  }, [children, selectedIndex]);

  return {
    flattenedTree,
    itemsRef
  };
};
