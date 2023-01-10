import { createContext } from 'react';

export type NotificationVariants = 'default' | 'success' | 'warning' | 'error';

export interface NotificationOptions {
  title?: string | JSX.Element | JSX.Element[];
  body?: string | JSX.Element | JSX.Element[];
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
  clearNotification: () => undefined,
  clearAllNotifications: () => undefined
});
