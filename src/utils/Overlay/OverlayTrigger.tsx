import React, { useCallback, forwardRef, FC, LegacyRef } from 'react';

export type TriggerTypes = 'hover' | 'click' | 'contextmenu' | 'focus' | 'key';

export interface OverlayTriggerEvent {
  type: TriggerTypes;
  nativeEvent: any;
}

export interface OverlayTriggerProps {
  /**
   * The children to be rendered within the overlay trigger.
   */
  children?: any;

  /**
   * The CSS class name to be applied to the overlay trigger.
   */
  className?: string;

  /**
   * The type of element that will be used as the overlay trigger.
   */
  elementType?: any;

  /**
   * The type(s) of event(s) that will trigger the overlay. Can be a single trigger type or an array of trigger types.
   */
  trigger: TriggerTypes | TriggerTypes[];

  /**
   * A function that is called when the overlay is opened. It receives an object of type OverlayTriggerEvent as an argument.
   */
  onOpen?: (event: OverlayTriggerEvent) => void;

  /**
   * A function that is called when the overlay is closed. It receives an object of type OverlayTriggerEvent as an argument.
   */
  onClose?: (event: OverlayTriggerEvent) => void;
}

export const OverlayTrigger: FC<
  OverlayTriggerProps & {
    ref: LegacyRef<HTMLSpanElement>;
  }
> = forwardRef(
  (
    {
      children,
      className,
      elementType = 'span',
      trigger = ['click'],
      onOpen = () => undefined,
      onClose = () => undefined
    },
    ref
  ) => {
    const hasTrigger = useCallback(
      (type: TriggerTypes) => {
        if (Array.isArray(trigger)) {
          return trigger.includes(type);
        } else {
          return type === trigger;
        }
      },
      [trigger]
    );

    const onFocus = useCallback(
      event => {
        if (hasTrigger('focus')) {
          onOpen({ type: 'focus', nativeEvent: event });
        }
      },
      [onOpen, hasTrigger]
    );

    const onBlur = useCallback(
      event => {
        if (hasTrigger('focus')) {
          onClose({ type: 'focus', nativeEvent: event });
        }
      },
      [onClose, hasTrigger]
    );

    const onMouseEnter = useCallback(
      event => {
        if (hasTrigger('hover')) {
          onOpen({ type: 'hover', nativeEvent: event });
        }
      },
      [onOpen, hasTrigger]
    );

    const onMouseLeave = useCallback(
      event => {
        if (hasTrigger('hover')) {
          onClose({ type: 'hover', nativeEvent: event });
        }
      },
      [onClose, hasTrigger]
    );

    const onClick = useCallback(
      event => {
        if (hasTrigger('click')) {
          onOpen({ type: 'click', nativeEvent: event });
        }

        // Kill the tooltip on click if its not a click listener
        if (!hasTrigger('click')) {
          onClose({ type: 'hover', nativeEvent: event });
        }
      },
      [onOpen, onClose, hasTrigger]
    );

    const onContextMenu = useCallback(
      event => {
        if (hasTrigger('contextmenu')) {
          event.preventDefault();
          onOpen({ type: 'contextmenu', nativeEvent: event });
        }
      },
      [onOpen]
    );

    const tabIndex = hasTrigger('focus') ? -1 : undefined;
    const Component = elementType;

    return (
      <Component
        ref={ref}
        tabIndex={tabIndex}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        onContextMenu={onContextMenu}
        className={className}
      >
        {children}
      </Component>
    );
  }
);
