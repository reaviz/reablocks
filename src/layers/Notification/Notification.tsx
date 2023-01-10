import React, { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NotificationOptions } from './NotificationsContext';
import { motion } from 'framer-motion';
import css from './Notification.module.css';

export interface NotificationProps extends NotificationOptions {
  id: number;
  component?: ReactNode;
  onClose: (id: number) => void;
}

export const Notification: FC<NotificationProps> = ({
  id,
  title,
  showClose,
  body,
  timeout,
  className,
  variant,
  component,
  onClose
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
          className={classNames(css.notification, className, {
            [css.default]: variant === 'default',
            [css.error]: variant === 'error',
            [css.success]: variant === 'success',
            [css.warning]: variant === 'warning'
          })}
        >
          <div className={css.content}>
            {title && <div className={css.header}>{title}</div>}
            {body && (
              <div className={css.body}>
                {typeof body === 'string' ? (
                  <span dangerouslySetInnerHTML={{ __html: body } as any} />
                ) : (
                  body
                )}
              </div>
            )}
          </div>
          <div className={css.close}>
            {showClose && (
              <button
                type="button"
                className={css.closeButton}
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
