import React, { createContext } from 'react';

export type NotificationVariants =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export interface NotificationOptions {
  title?: string | React.JSX.Element | React.JSX.Element[];
  body?: string | React.JSX.Element | React.JSX.Element[];
  timeout?: number;
  showClose?: boolean;
  variant?: NotificationVariants;
  className?: string;
}

export interface NotificationsContextValue {
  /**
   * Create a new notification.
   */
  notify(title: string, options?: NotificationOptions): void;

  /**
   * Create a new error notification.
   */
  notifyError(title: string, options?: NotificationOptions): void;

  /**
   * Create a warning notification.
   */
  notifyWarning(title: string, options?: NotificationOptions): void;

  /**
   * Create a success notification.
   */
  notifySuccess(title: string, options?: NotificationOptions): void;

  /**
   * Create an info notification.
   */
  notifyInfo(title: string, options?: NotificationOptions): void;

  /**
   * Clear a specific notification.
   */
  clearNotification(id: number): void;

  /**
   * Clear all notifications.
   */
  clearAllNotifications(): void;
}

export const NotificationsContext = createContext<NotificationsContextValue>({
  notify: () => undefined,
  notifyError: () => undefined,
  notifyWarning: () => undefined,
  notifySuccess: () => undefined,
  notifyInfo: () => undefined,
  clearNotification: () => undefined,
  clearAllNotifications: () => undefined
});
