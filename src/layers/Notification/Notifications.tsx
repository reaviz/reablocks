import { AnimatePresence, motion } from 'motion/react';
import type { FC, JSXElementConstructor, ReactNode } from 'react';
import React, { Fragment, useCallback, useMemo, useState } from 'react';

import CheckCircleIcon from '@/assets/icons/check_circle.svg?react';
import ErrorCircleIcon from '@/assets/icons/error_circle.svg?react';
import InfoIcon from '@/assets/icons/info.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';
import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';

import { Notification } from './Notification';
import type { NotificationOptions } from './NotificationsContext';
import { NotificationsContext } from './NotificationsContext';
import type {
  NotificationTheme,
  NotificationVariantTheme,
} from './NotificationTheme';

export interface NotificationComponentProps {
  message: string;
  variant: keyof NotificationVariantTheme;
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
    [variant in keyof NotificationVariantTheme]?: JSXElementConstructor<NotificationComponentProps>;
  };
  icons?: {
    [variant in keyof NotificationVariantTheme]?:
      | string
      | React.JSX.Element
      | React.JSX.Element[];
  };
  theme?: NotificationTheme;
}

// Hacky way to track unique versions of a notification
let nextId = 0;

export const Notifications: FC<NotificationsProps> = ({
  children,
  limit = 10,
  timeout = 4000,
  showClose = true,
  className,
  preventFlooding = true,
  components,
  icons = {
    default: <InfoIcon />,
    success: <CheckCircleIcon />,
    warning: <WarningIcon />,
    error: <ErrorCircleIcon />,
    info: <InfoIcon />,
  },
  theme: customTheme,
}) => {
  const [notifications, setNotifications] = useState<any[]>([]);

  const clearNotification = useCallback(
    (id: number) => setNotifications(notifications.filter(n => n.id !== id)),
    [notifications],
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
          icon: icons?.default,
          showClose,
          ...options,
        };

        const sorted = [obj, ...notifications];

        // Clear old notifications if we hit limit
        if (sorted.length > limit) {
          sorted.pop();
        }

        return sorted;
      });
    },
    [icons?.default, limit, preventFlooding, showClose, timeout],
  );

  const notifyError = useCallback(
    (title: string, options: NotificationOptions = {}) =>
      notify(title, {
        variant: 'error',
        icon: icons?.error,
        ...options,
      }),
    [icons?.error, notify],
  );

  const notifyWarning = useCallback(
    (title: string, options: NotificationOptions = {}) =>
      notify(title, { variant: 'warning', icon: icons?.warning, ...options }),
    [icons?.warning, notify],
  );

  const notifySuccess = useCallback(
    (title: string, options: NotificationOptions = {}) =>
      notify(title, {
        variant: 'success',
        icon: icons?.success,
        ...options,
      }),
    [icons?.success, notify],
  );

  const notifyInfo = useCallback(
    (title: string, options: NotificationOptions = {}) =>
      notify(title, { variant: 'info', icon: icons?.info, ...options }),
    [icons?.info, notify],
  );

  const values = useMemo(
    () => ({
      notify,
      notifyError,
      notifyWarning,
      notifySuccess,
      notifyInfo,
      clearNotification,
      clearAllNotifications,
    }),
    [
      clearNotification,
      clearAllNotifications,
      notify,
      notifyError,
      notifySuccess,
      notifyWarning,
      notifyInfo,
    ],
  );

  const theme: NotificationTheme = useComponentTheme(
    'notification',
    customTheme,
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
