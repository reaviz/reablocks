import { Button, IconButton } from '@/elements';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { cn, GlobalOverlay, useComponentTheme } from '@/utils';
import { motion } from 'framer-motion';
import { NotificationDialogTheme } from './NotificationDialogTheme';

import CloseIcon from '@/assets/icons/close.svg?react';
import InfoIcon from '@/assets/icons/info.svg?react';
import CheckIcon from '@/assets/icons/check_circle.svg?react';
import ErrorIcon from '@/assets/icons/error_circle.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';

export type NotificationDialogPlacement =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right';

export interface NotificationDialogProps extends PropsWithChildren {
  /**
   * The CSS class name for the root element of the component.
   */
  className?: string;

  /**
   * Dialog position relatively the screen
   */
  placement?: NotificationDialogPlacement;

  /**
   * Color variant for the notification dialog.
   */
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';

  /**
   * If true, the notification dialog is open.
   */
  open: boolean;

  /**
   * The header of the notification dialog.
   */
  header: string | ReactNode;

  /**
   * The footer of the notification dialog.
   */
  footer?: string | ReactNode;

  /**
   * The text of the submit button.
   */
  submitButtonText?: string;

  /**
   * The text of the cancel button.
   */
  cancelButtonText?: string;

  /**
   * Theme for the NotificationDialog.
   */
  theme?: NotificationDialogTheme;

  /**
   * Callback called when the notification dialog is closed.
   */
  onClose?: () => void;

  /**
   * Callback called when the user submit notification dialog.
   */
  onSubmit?: () => void;

  /**
   * Callback called when the user decline notification dialog.
   */
  onCancel?: () => void;
}

const ICONS_MAP = {
  default: <InfoIcon />,
  success: <CheckIcon />,
  error: <ErrorIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />
};

export const NotificationDialog: FC<NotificationDialogProps> = ({
  className,
  open,
  variant = 'default',
  placement = 'bottom-right',
  header,
  footer,
  children,
  submitButtonText = 'Yes',
  cancelButtonText = 'No',
  theme: customTheme,
  onClose,
  onSubmit,
  onCancel
}) => {
  const theme: NotificationDialogTheme = useComponentTheme(
    'notificationDialog',
    customTheme
  );

  return (
    <GlobalOverlay open={open} hasBackdrop={false}>
      {() => (
        <div
          className={cn('fixed', {
            'top-0 left-1/2 -translate-x-1/2': placement === 'top',
            'top-0 right-0': placement === 'top-right',
            'top-0 left-0': placement === 'top-left',
            'bottom-0 left-1/2 -translate-x-1/2': placement === 'bottom',
            'bottom-0 right-0': placement === 'bottom-right',
            'bottom-0 left-0': placement === 'bottom-left'
          })}
        >
          <motion.div
            className={cn(
              'flex flex-col gap-4',
              theme.base,
              theme[variant],
              className
            )}
            initial={{
              opacity: 0,
              y: placement.startsWith('top') ? -200 : 200,
              scale: 0.5
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          >
            <div className="flex flex-row justify-between items-center">
              {typeof header === 'string' ? (
                <header className={theme.header.base}>
                  <span
                    className={cn(
                      theme.header.icon,
                      theme.header[variant].icon
                    )}
                  >
                    {ICONS_MAP[variant]}
                  </span>
                  <span
                    className={cn(
                      theme.header.text,
                      theme.header[variant].text
                    )}
                  >
                    {header}
                  </span>
                </header>
              ) : (
                header
              )}
              <IconButton
                className={theme.header.closeIcon}
                variant="text"
                size="small"
                onClick={onClose}
              >
                <CloseIcon height={16} width={16} />
              </IconButton>
            </div>
            <div className={theme.body}>{children}</div>
            {!footer ? (
              <footer className={theme.footer}>
                <Button
                  className={cn('px-0', {
                    'text-primary': variant === 'default' || variant === 'info',
                    'text-success': variant === 'success',
                    'text-warning': variant === 'warning',
                    'text-error light:border-error/20': variant === 'error'
                  })}
                  variant="text"
                  onClick={onSubmit}
                >
                  {submitButtonText}
                </Button>
                <Button
                  className="px-0"
                  variant="text"
                  color="secondary"
                  onClick={onCancel}
                >
                  {cancelButtonText}
                </Button>
              </footer>
            ) : (
              footer
            )}
          </motion.div>
        </div>
      )}
    </GlobalOverlay>
  );
};
