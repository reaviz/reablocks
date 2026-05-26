import React, { createContext } from 'react';

export type NotificationVariants =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export interface NotificationOptions {
  /** Title of the notification. */
  title?: string | React.JSX.Element | React.JSX.Element[];
  /** Body content of the notification. */
  body?: string | React.JSX.Element | React.JSX.Element[];
  /** Time in milliseconds before the notification auto-dismisses. */
  timeout?: number;
  /** Whether to show the close button. */
  showClose?: boolean;
  /** Variant style of the notification. */
  variant?: NotificationVariants;
  /** Additional class name applied to the notification. */
  className?: string;
  /** Icon displayed in the notification. */
  icon?: string | React.JSX.Element | React.JSX.Element[];
  /** Action content displayed in the notification. */
  action?: string | React.JSX.Element | React.JSX.Element[];
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
