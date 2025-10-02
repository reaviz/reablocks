import React, {
  Children,
  cloneElement,
  FC,
  forwardRef,
  InputHTMLAttributes,
  isValidElement,
  LegacyRef,
  useRef
} from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { ListTheme } from './ListTheme';

export type ListProps = InputHTMLAttributes<HTMLDivElement> & {
  /**
   * Theme for the List.
   */
  theme?: ListTheme;
};

export interface ListRef {
  /**
   * Reference to the list element.
   */
  ref?: LegacyRef<HTMLDivElement>;
}

export const List: FC<ListProps & ListRef> = forwardRef<
  HTMLDivElement,
  ListProps
>(({ className, children, theme: customTheme, ...rest }, ref) => {
  const theme: ListTheme = useComponentTheme('list', customTheme);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Remove the first invisible item when navigating with keyboard is started
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      containerRef.current
        ?.querySelector<HTMLElement>('[data-first-item="true"]')
        ?.remove();
    }
    const focusableItems = Array.from(
      containerRef.current?.querySelectorAll<HTMLElement>(
        '[tabindex]:not(.disabled)'
      ) || []
    );
    const currentIndex = focusableItems.indexOf(
      document.activeElement as HTMLElement
    );

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % focusableItems.length;
      focusableItems[nextIndex]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex =
        (currentIndex - 1 + focusableItems.length) % focusableItems.length;
      focusableItems[prevIndex]?.focus();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      (document.activeElement as HTMLElement)?.click();
    }
  };

  const focusableChildren = Children.map(children, child =>
    isValidElement(child) ? cloneElement(child, { tabIndex: 0 }) : child
  );

  const setRef = (node: HTMLDivElement) => {
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
    containerRef.current = node;
  };

  return (
    <div ref={setRef} onKeyDown={handleKeyDown}>
      {/* First invisible item which takes focus for correct keyboard navigation*/}
      <div data-first-item="true" tabIndex={0} />
      <div {...rest} role="list" className={twMerge(theme.base, className)}>
        {focusableChildren}
      </div>
    </div>
  );
});
