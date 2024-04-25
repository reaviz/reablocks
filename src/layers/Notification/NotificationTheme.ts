export interface NotificationTheme {
  container: string;
  positions: string;
  notification: {
    base: string;
    variants: {
      success: {
        base: string;
        icon?: string;
      };
      error: {
        base: string;
        icon?: string;
      };
      warning: {
        base: string;
        icon?: string;
      };
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
    base: 'flex relative text-base min-w-[400px] rounded-sm mb-2.5 py-2 px-4',
    variants: {
      success: {
        base: 'bg-success/10 border border-success',
        icon: 'text-success h-4 w-4'
      },
      error: {
        base: 'bg-error/10 border border-error',
        icon: 'text-error h-4 w-4'
      },
      warning: {
        base: 'bg-warning/10 border border-warning',
        icon: 'text-warning h-4 w-4'
      }
    },
    content: 'inline-flex items-start flex-1 flex-col justify-center',
    header: 'text-base flex gap-2 items-center',
    closeContainer: 'inline-flex items-center',
    closeButton: 'cursor-pointer text-sm font-semibold opacity-70 m-0 border-0',
    body: 'opacity-70 text-sm mt-1'
  }
};

export const notificationTheme: NotificationTheme = {
  ...baseTheme,
  notification: {
    ...baseTheme.notification,
    base: [
      baseTheme.notification.base,
      'bg-panel text-panel-content border-panel-accent border'
    ].join(' '),
    closeButton: [
      baseTheme.notification.closeButton,
      'text-slate-300 hover:text-slate-400'
    ].join(' ')
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
      ...baseTheme.notification.variants,
      success: {
        base: [
          baseTheme.notification.variants.success,
          'text-[var(--notification-color-success)]'
        ].join(' ')
      },
      error: {
        base: [
          baseTheme.notification.variants.error,
          'text-[var(--notification-color-error)]'
        ].join(' ')
      },
      warning: {
        base: [
          baseTheme.notification.variants.error,
          'text-[var(--notification-color-warning)]'
        ].join(' ')
      }
    }
  }
};
