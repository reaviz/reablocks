import { MutableRefObject, RefObject, useEffect } from 'react';

interface ExitListenerOptions {
  /**
   * A ref object pointing to the target element that the hook should
   * observe for click outside and escape key events.
   */
  ref: RefObject<HTMLElement | null> | MutableRefObject<HTMLElement>;

  /**
   * An optional boolean to enable or disable the event listeners.
   * When set to true (default), the event listeners are active.
   */
  open?: boolean;

  /**
   * An optional callback function that is called when a click
   * event occurs outside the target element.
   */
  onClickOutside?: (event: MouseEvent) => void;

  /**
   * An optional callback function that is called
   * when the 'Escape' key is pressed.
   */
  onEscape?: (event: KeyboardEvent) => void;
}

/**
 * Hook to listen for click outside and escape key events.
 */
export const useExitListener = ({
  ref,
  open = true,
  onClickOutside,
  onEscape
}: ExitListenerOptions) => {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside?.(event as MouseEvent);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onEscape?.(event);
      }
    };

    if (onClickOutside) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);
    }

    if (onEscape) {
      document.addEventListener('keydown', handleKey);
    }

    return () => {
      if (onClickOutside) {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
      }

      if (onEscape) {
        document.removeEventListener('keydown', handleKey);
      }
    };
  }, [ref, onClickOutside, onEscape, open]);
};
