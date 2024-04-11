import React, { useCallback, forwardRef, Ref, FC } from 'react';

export type TriggerTypes = 'hover' | 'click' | 'contextmenu' | 'focus' | 'key';

export interface OverlayTriggerEvent {
  type: TriggerTypes;
  nativeEvent: any;
}

export interface OverlayTriggerProps {
  children?: any;
  className?: string;
  elementType?: any;
  trigger: TriggerTypes | TriggerTypes[];
  onOpen?: (event: OverlayTriggerEvent) => void;
  onClose?: (event: OverlayTriggerEvent) => void;
}

export const OverlayTrigger: FC<
  OverlayTriggerProps & {
    ref: Ref<HTMLSpanElement>;
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
