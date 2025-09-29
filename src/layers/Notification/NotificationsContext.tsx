import type React from 'react';
import { createContext } from 'react';

import type { NotificationVariantTheme } from '@/layers';

export interface NotificationOptions {
  title?: string | React.JSX.Element | React.JSX.Element[];
  body?: string | React.JSX.Element | React.JSX.Element[];
  timeout?: number;
  showClose?: boolean;
  variant?: keyof NotificationVariantTheme;
  className?: string;
  icon?: string | React.JSX.Element | React.JSX.Element[];
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
