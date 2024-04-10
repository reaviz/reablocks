export interface NotificationTheme {
  container: string;
  positions: string;
  notification: {
    base: string;
    variants: {
      success: string;
      error: string;
      warning: string;
    };
    header: string;
    content: string;
    body: string;
    closeContainer: string;
    closeButton: string;
  };
}

const baseTheme: NotificationTheme = {
  container: '',
  positions:
    'fixed z-[9998] h-auto -translate-x-2/4 mb-1 px-24 py-0 left-2/4 bottom-0',
  notification: {
    base: 'flex relative text-base min-w-[400px] min-h-12 rounded mb-2.5 p-2.5',
    variants: {
      success: '',
      error: '',
      warning: ''
    },
    content:
      'inline-flex items-start flex-1 flex-col justify-center px-2.5 py-1',
    header: 'text-lg',
    closeContainer: 'inline-flex items-center',
    closeButton:
      'cursor-pointer text-sm font-semibold opacity-70 m-0 px-2.5 py-1 border-0',
    body: 'opacity-70 text-sm mt-1'
  }
};

export const notificationTheme: NotificationTheme = {
  ...baseTheme,
  notification: {
    ...baseTheme.notification,
    base: [
      baseTheme.notification.base,
      'bg-surface text-surface-content border-surface-accent border-solid'
    ].join(' '),
    closeButton: [
      baseTheme.notification.closeButton,
      'text-slate-300 hover:text-slate-400'
    ].join(' '),
    variants: {
      success: [baseTheme.notification.variants.success, 'text-success'].join(
        ' '
      ),
      error: [baseTheme.notification.variants.error, 'text-error'].join(' '),
      warning: [baseTheme.notification.variants.error, 'text-warning'].join(' ')
    }
  }
};

export const legacyNotificationTheme: NotificationTheme = {
  ...baseTheme,
  notification: {
    ...baseTheme.notification,
    base: [
      baseTheme.notification.base,
      'bg-[var(--notification-background)] border-[var(--notification-border)] text-[var(--notification-color)]'
    ].join(' '),
    closeButton: [
      baseTheme.notification.closeButton,
      'text-[var(--color-on-notification)]'
    ].join(' '),
    body: [
      baseTheme.notification.body,
      'text-[var(--color-on-notification)]'
    ].join(' '),
    variants: {
      success: [
        baseTheme.notification.variants.success,
        'text-[var(--notification-color-success)]'
      ].join(' '),
      error: [
        baseTheme.notification.variants.error,
        'text-[var(--notification-color-error)]'
      ].join(' '),
      warning: [
        baseTheme.notification.variants.error,
        'text-[var(--notification-color-warning)]'
      ].join(' ')
    }
  }
};
