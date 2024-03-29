import React, {
  Fragment,
  FC,
  ReactNode,
  useState,
  useCallback,
  useMemo,
  JSXElementConstructor
} from 'react';
import { Notification } from './Notification';
import {
  NotificationOptions,
  NotificationsContext,
  NotificationVariants
} from './NotificationsContext';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { NotificationTheme } from './NotificationTheme';
import { useComponentTheme } from '../../utils';

export interface NotificationComponentProps {
  message: string;
  variant: NotificationVariants;
  onClose?: () => void;
}

export interface NotificationsProps {
  limit?: number;
  timeout?: number;
  showClose?: boolean;
  preventFlooding?: boolean;
  children?: ReactNode;
  className?: string;
  components?: {
    [variant in NotificationVariants]?: JSXElementConstructor<NotificationComponentProps>;
  };
  theme?: NotificationTheme;
}

// Hacky way to track unique versions of a notification
let nextId = 0;

export const Notifications: FC<NotificationsProps> = ({
  children,
  limit,
  timeout,
  showClose,
  className,
  preventFlooding,
  components,
  theme: customTheme
}) => {
  const [notifications, setNotifications] = useState<any[]>([]);

  const clearNotification = useCallback(
    (id: number) => setNotifications(notifications.filter(n => n.id !== id)),
    [notifications]
  );

  const clearAllNotifications = useCallback(() => setNotifications([]), []);

  const notify = useCallback(
    (title: string, options: NotificationOptions = {}) => {
      setNotifications(notifications => {
        // If we are flooded with the same message over and over,
        // don't add more of the same type. Mainly used for error use cases.
        if (preventFlooding && notifications.find(n => n.title === title)) {
          return notifications;
        }

        const id = nextId++;

        const obj = {
          title,
          id,
          variant: 'default',
          timeout,
          showClose,
          ...options
        };

        const sorted = [obj, ...notifications];

        // Clear old notifications if we hit limit
        if (sorted.length > limit) {
          sorted.pop();
        }

        return sorted;
      });
    },
    [limit, preventFlooding, showClose, timeout]
  );

  const notifyError = useCallback(
    (title: string, options: NotificationOptions = {}) =>
      notify(title, { ...options, variant: 'error' }),
    [notify]
  );

  const notifyWarning = useCallback(
    (title: string, options: NotificationOptions = {}) =>
      notify(title, { ...options, variant: 'warning' }),
    [notify]
  );

  const notifySuccess = useCallback(
    (title: string, options: NotificationOptions = {}) =>
      notify(title, { ...options, variant: 'success' }),
    [notify]
  );

  const values = useMemo(
    () => ({
      notify,
      notifyError,
      notifyWarning,
      notifySuccess,
      clearNotification,
      clearAllNotifications
    }),
    [
      clearNotification,
      clearAllNotifications,
      notify,
      notifyError,
      notifySuccess,
      notifyWarning
    ]
  );

  const theme: NotificationTheme = useComponentTheme(
    'notification',
    customTheme
  );

  return (
    <Fragment>
      <NotificationsContext.Provider value={values}>
        {children}
      </NotificationsContext.Provider>
      <div className={theme.container}>
        <div className={theme.positions}>
          <AnimatePresence>
            {!!notifications.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {notifications.map(n => {
                  if (components?.[n.variant]) {
                    const CustomNotification = components?.[n.variant];
                    return (
                      <Notification
                        {...n}
                        component={
                          <CustomNotification
                            message={n.title}
                            variant={n.variant}
                            onClose={() => clearNotification(n.id)}
                          />
                        }
                        showClose={false}
                        key={n.id}
                        onClose={clearNotification}
                      />
                    );
                  }

                  return (
                    <Notification
                      {...n}
                      key={n.id}
                      className={twMerge(className, n.className)}
                      onClose={clearNotification}
                    />
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Fragment>
  );
};

Notifications.defaultProps = {
  limit: 10,
  timeout: 4000,
  showClose: true,
  preventFlooding: true
};
