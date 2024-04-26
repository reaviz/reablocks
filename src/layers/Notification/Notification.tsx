import React, { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import { NotificationOptions } from './NotificationsContext';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { NotificationTheme } from './NotificationTheme';
import { useComponentTheme } from '../../utils';

export interface NotificationProps extends NotificationOptions {
  id: number;
  component?: ReactNode;
  onClose: (id: number) => void;
  theme?: NotificationTheme;
}

export const Notification: FC<NotificationProps> = ({
  id,
  title,
  showClose,
  body,
  timeout,
  className,
  variant,
  icon,
  action,
  component,
  onClose,
  theme: customTheme
}) => {
  const timeoutRef = useRef<any | null>(null);

  const clearTimer = useCallback(() => clearTimeout(timeoutRef.current), []);

  const startTimer = useCallback(() => {
    clearTimer();
    timeoutRef.current = setTimeout(() => onClose?.(id), timeout);
  }, [id, timeout, onClose, clearTimer]);

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [clearTimer, startTimer]);

  const theme: NotificationTheme = useComponentTheme(
    'notification',
    customTheme
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
    >
      {component}
      {!component && (
        <div
          className={twMerge(
            theme.notification?.base,
            theme.notification?.variants?.[variant]?.base,
            className
          )}
        >
          <div className={theme.notification?.content}>
            {title && (
              <div className={theme.notification.header}>
                {icon && (
                  <div
                    className={theme.notification?.variants?.[variant]?.icon}
                  >
                    {icon}
                  </div>
                )}
                {title}
              </div>
            )}
            {body && (
              <div className={theme.notification.body}>
                {typeof body === 'string' ? (
                  <span dangerouslySetInnerHTML={{ __html: body } as any} />
                ) : (
                  body
                )}
              </div>
            )}
          </div>
          {action && <div className={theme.notification.action}>{action}</div>}
          <div className={theme.notification?.closeContainer}>
            {showClose && (
              <button
                type="button"
                className={theme.notification?.closeButton}
                onClick={() => onClose?.(id)}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};
