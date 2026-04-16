import React, {
  FC,
  useState,
  useRef,
  useEffect,
  useMemo,
  ReactNode
} from 'react';
import { ConnectedOverlay, TriggerTypes } from '@/utils/Overlay';
import { Modifiers, Placement, ReferenceObject } from '@/utils/Position';
import { motion, MotionNodeAnimationOptions } from 'motion/react';
import {
  arrow as arrowMiddleware,
  offset,
  flip,
  shift,
  limitShift
} from '@floating-ui/react';
import { useTooltipState } from './useTooltipState';
import { TooltipTheme } from './TooltipTheme';
import { cn, useComponentTheme } from '@/utils';

const ARROW_STATIC_SIDE: Record<string, string> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};

export interface TooltipProps {
  /**
   * Content to wrap.
   */
  children?: ReactNode;

  /**
   * Close on any click.
   */
  closeOnClick?: boolean;

  /**
   * Close when the body is clicked.
   */
  closeOnBodyClick?: boolean;

  /**
   * Close when escape key is triggered.
   */
  closeOnEscape?: boolean;

  /**
   * Content for the tooltip.
   */
  content?: any;

  /**
   * Reference of the tooltip to align to.
   */
  reference?: ReferenceObject | HTMLElement | any;

  /**
   * floating-ui placement.
   */
  placement?: Placement;

  /**
   * Delay before showing tooltip.
   */
  enterDelay?: number;

  /**
   * Delay before closing tooltip.
   */
  leaveDelay?: number;

  /**
   * floating-ui modifiers.
   */
  modifiers?: Modifiers;

  /**
   * External setter for visibility.
   */
  visible?: boolean;

  /**
   * Additional CSS classnames.
   */
  className?: string;

  /**
   * CSS Classname for the tooltip container ( ie. the thing that the tooltip is bound to ).
   */
  triggerClassName?: string;

  /**
   * How the tooltip will be triggered.
   */
  trigger?: TriggerTypes[] | TriggerTypes;

  /**
   * Whether the tooltip is disabled.
   */
  disabled?: boolean;

  /**
   * @deprecated Use animation configuration instead.
   * Whether the tooltip is animated.
   */
  animated?: boolean;

  /**
   * Animation configuration for the tooltip.
   */
  animation?: MotionNodeAnimationOptions;

  /**
   * Whether the tooltip should move with the cursor or not.
   */
  followCursor?: boolean;

  /**
   * Add pointer events or not. Usually not for tooltips.
   */
  pointerEvents?: string;

  /**
   * Whether to show an arrow pointing from the tooltip to the trigger element.
   */
  showArrow?: boolean;

  /**
   * Differentiator for popovers to be handled separate from tooltips
   */
  isPopover?: boolean;

  /**
   * Tooltip was opened.
   */
  onOpen?(): void;

  /**
   * Tooltip was closed.
   */
  onClose?(): void;

  /**
   * Theme for the tooltip.
   */
  theme?: TooltipTheme;
}

export const Tooltip: FC<TooltipProps> = ({
  className,
  children,
  content,
  triggerClassName,
  disabled = false,
  enterDelay = 0,
  leaveDelay = 200,
  placement = 'top',
  trigger = 'hover',
  animated = true,
  animation,
  visible = false,
  followCursor = false,
  closeOnClick = false,
  closeOnEscape = true,
  closeOnBodyClick = true,
  pointerEvents = 'none',
  showArrow = false,
  modifiers,
  isPopover,
  onOpen,
  onClose,
  theme: customTheme,
  ...rest
}) => {
  const { addTooltip, deactivateTooltip, deactivateAllTooltips } =
    useTooltipState();

  const [internalVisible, setInternalVisible] = useState<boolean>(visible);
  const timeout = useRef<any | null>(null);
  const mounted = useRef<boolean>(false);
  const arrowRef = useRef<HTMLElement | null>(null);
  const arrowDataRef = useRef<{
    x?: number;
    y?: number;
    placement: string;
  } | null>(null);

  const effectiveModifiers = useMemo(() => {
    if (!showArrow) return modifiers;
    const base = modifiers || [flip(), shift({ limiter: limitShift() })];
    return [
      offset(8),
      ...base,
      arrowMiddleware({ element: arrowRef, padding: 8 }),
      {
        name: 'arrowCapture',
        fn(state: any) {
          arrowDataRef.current = {
            x: state.middlewareData.arrow?.x,
            y: state.middlewareData.arrow?.y,
            placement: state.placement
          };
          return {};
        }
      }
    ];
  }, [showArrow, modifiers]);

  const ref = useRef<(setter: boolean, isPop?: boolean) => boolean>(
    (vis, isPop) => {
      // Since Popovers use the Tooltip component and they share state, need to differentiate between
      // Popovers and Tooltips so one does not deactivate the other
      if (isPop === isPopover) {
        setInternalVisible(vis);
      }

      // Return whether the ref's state was updated
      return isPop === isPopover;
    }
  );

  useEffect(() => {
    // componentDidUpdateLogic style logic
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setInternalVisible(visible);
    }

    const curRef = ref.current;
    const timer = timeout.current;
    return () => {
      clearTimeout(timer);
      deactivateTooltip(curRef, isPopover);
    };
  }, [deactivateTooltip, isPopover, visible]);

  const theme: TooltipTheme = useComponentTheme('tooltip', customTheme);

  return (
    <ConnectedOverlay
      {...rest}
      placement={placement}
      trigger={trigger}
      followCursor={followCursor}
      triggerClassName={triggerClassName}
      portalClassName={pointerEvents === 'none' && theme.disablePointer}
      open={internalVisible}
      closeOnBodyClick={closeOnBodyClick}
      closeOnEscape={closeOnEscape}
      modifiers={effectiveModifiers}
      content={() => {
        const contentChildren =
          typeof content === 'function' ? content() : content;

        if (!contentChildren) {
          return null;
        }

        return (
          <motion.div
            role={isPopover ? undefined : 'tooltip'}
            className={cn(theme.base, showArrow && 'relative', className)}
            {...(animation
              ? animation
              : {
                  transition: { duration: animated ? 0.3 : 0 },
                  initial: {
                    opacity: 0,
                    scale: 0.3,
                    transition: {
                      when: 'beforeChildren',
                      duration: animated ? 0.3 : 0
                    }
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      when: 'beforeChildren',
                      duration: animated ? 0.3 : 0
                    }
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.3,
                    transition: {
                      when: 'beforeChildren',
                      duration: animated ? 0.3 : 0
                    }
                  }
                })}
            onClick={() => {
              if (closeOnClick) {
                deactivateAllTooltips(isPopover);
              }
            }}
          >
            {contentChildren}
            {showArrow &&
              (() => {
                const data = arrowDataRef.current;
                const side =
                  data?.placement?.split('-')[0] ?? placement.split('-')[0];
                const staticSide = ARROW_STATIC_SIDE[side];
                return (
                  <div
                    ref={arrowRef as React.Ref<HTMLDivElement>}
                    className={theme.arrow}
                    style={{
                      position: 'absolute',
                      visibility: data ? 'visible' : 'hidden',
                      left: data?.x != null ? data.x : '',
                      top: data?.y != null ? data.y : '',
                      [staticSide]: -4
                    }}
                  />
                );
              })()}
          </motion.div>
        );
      }}
      onOpen={() => {
        if (!internalVisible) {
          clearTimeout(timeout.current);
          timeout.current = setTimeout(() => {
            if (!disabled) {
              deactivateAllTooltips(isPopover);
              setInternalVisible(true);
              addTooltip(ref.current);
              onOpen?.();
            }
          }, enterDelay);
        }
      }}
      onClose={e => {
        if (
          e?.nativeEvent?.type !== 'click' ||
          (e?.nativeEvent?.type === 'click' && closeOnClick)
        ) {
          clearTimeout(timeout.current);
          timeout.current = setTimeout(() => {
            deactivateTooltip(ref.current, isPopover);
            onClose?.();
          }, leaveDelay);
        }
      }}
    >
      {children}
    </ConnectedOverlay>
  );
};
