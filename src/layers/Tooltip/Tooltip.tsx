import React, {
  FC,
  useState,
  useRef,
  useEffect,
  ReactNode,
  useCallback
} from 'react';
import classNames from 'classnames';
import {
  Placement,
  ReferenceObject,
  ConnectedOverlay,
  TriggerTypes
} from 'rdk';
import { motion } from 'framer-motion';
import { useTooltipState } from './useTooltipState';
import css from './Tooltip.module.css';

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
  content: any;

  /**
   * Reference of the tooltip to align to.
   */
  reference?: ReferenceObject | HTMLElement | any;

  /**
   * Popperjs placement.
   */
  placement: Placement;

  /**
   * Delay before showing tooltip.
   */
  enterDelay: number;

  /**
   * Delay before closing tooltip.
   */
  leaveDelay: number;

  /**
   * Popperjs modifiers.
   */
  modifiers?: any;

  /**
   * External setter for visibility.
   */
  visible: boolean;

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
  trigger: TriggerTypes[] | TriggerTypes;

  /**
   * Whether the tooltip is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the tooltip should move with the cursor or not.
   */
  followCursor?: boolean;

  /**
   * Add pointer events or not.
   */
  pointerEvents?: string;

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
}

export const Tooltip: FC<Partial<TooltipProps>> = ({
  className,
  children,
  content,
  triggerClassName,
  disabled,
  enterDelay,
  leaveDelay,
  placement,
  trigger,
  visible,
  followCursor,
  closeOnClick,
  closeOnEscape,
  closeOnBodyClick,
  pointerEvents,
  isPopover,
  onOpen,
  onClose,
  ...rest
}) => {
  const { addTooltip, deactivateTooltip, deactivateAllTooltips } =
    useTooltipState();

  const [internalVisible, setInternalVisible] = useState<boolean>(visible);
  const timeout = useRef<any | null>(null);
  const mounted = useRef<boolean>(false);
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

  const handleClose = useCallback(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      deactivateTooltip(ref.current, isPopover);
      onClose?.();
    }, leaveDelay);
  }, [deactivateTooltip, isPopover, onClose, leaveDelay]);

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

  return (
    <ConnectedOverlay
      {...rest}
      placement={placement}
      trigger={trigger}
      followCursor={followCursor}
      triggerClassName={triggerClassName}
      portalClassName={classNames({
        [css.disablePointer]: pointerEvents === 'none'
      })}
      open={internalVisible}
      closeOnBodyClick={closeOnBodyClick}
      closeOnEscape={closeOnEscape}
      content={() => {
        const contentChildren =
          typeof content === 'function' ? content() : content;

        if (!contentChildren) {
          return null;
        }

        return (
          <motion.div
            onMouseOver={() => {
              if (!isPopover) {
                clearTimeout(timeout.current);
              }
            }}
            onMouseLeave={() => {
              if (!isPopover) {
                handleClose();
              }
            }}
            className={classNames(css.tooltip, className)}
            initial={{
              opacity: 0,
              scale: 0.3,
              transition: {
                when: 'beforeChildren'
              }
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                when: 'beforeChildren'
              }
            }}
            exit={{ opacity: 0, scale: 0.3 }}
            onClick={() => {
              if (closeOnClick) {
                deactivateAllTooltips(isPopover);
              }
            }}
          >
            {contentChildren}
          </motion.div>
        );
      }}
      onOpen={() => {
        clearTimeout(timeout.current);
        if (!internalVisible) {
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
          handleClose();
        }
      }}
    >
      {children}
    </ConnectedOverlay>
  );
};

Tooltip.defaultProps = {
  disabled: false,
  enterDelay: 0,
  leaveDelay: 200,
  placement: 'top',
  trigger: 'hover',
  visible: false,
  followCursor: false,
  closeOnClick: false,
  closeOnEscape: true,
  closeOnBodyClick: true,
  pointerEvents: 'none'
};
