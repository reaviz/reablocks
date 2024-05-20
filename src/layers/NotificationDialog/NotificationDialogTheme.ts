export interface NotificationDialogTheme {
  base: string;
  header: {
    base: string;
    closeIcon: string;
    icon: string;
    text: string;
    default: {
      icon: string;
      text: string;
    };
    success: {
      icon: string;
      text: string;
    };
    error: {
      icon: string;
      text: string;
    };
    warning: {
      icon: string;
      text: string;
    };
    info: {
      icon: string;
      text: string;
    };
  };
  body: string;
  footer: string;
  success: string;
  error: string;
  warning: string;
  info: string;
}

const baseTheme: Partial<NotificationDialogTheme> = {
  base: 'w-[400px] m-2 p-6 rounded border border-solid',
  header: {
    base: 'flex flex-row items-center gap-2',
    icon: '[&_svg]:w-[24px] [&_svg]:h-[24px]',
    text: '',
    closeIcon: 'p-0',
    default: {
      icon: '',
      text: ''
    },
    success: {
      icon: '',
      text: ''
    },
    error: {
      icon: '',
      text: ''
    },
    warning: {
      icon: '',
      text: ''
    },
    info: {
      icon: '',
      text: ''
    }
  },
  body: '',
  footer: 'flex flex-row gap-4',
  success: '',
  error: '',
  warning: '',
  info: ''
};

export const notificationDialogTheme: NotificationDialogTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'border-secondary bg-panel'].join(' '),
  header: {
    base: baseTheme.header.base,
    icon: baseTheme.header.icon,
    text: 'text-base font-bold',
    closeIcon: baseTheme.header.closeIcon,
    default: {
      icon: 'text-gray-300 light:text-secondary-active',
      text: 'text-panel-content'
    },
    success: {
      icon: 'text-success',
      text: ''
    },
    error: {
      icon: 'text-error light:border-error/20',
      text: ''
    },
    warning: {
      icon: 'text-warning',
      text: ''
    },
    info: {
      icon: 'text-info',
      text: ''
    }
  },
  footer: baseTheme.footer,
  body: 'text-panel-secondary-content',
  default: 'border-panel-accent',
  success: 'border-success bg-success-background',
  error: 'border-error bg-error-background light:border-error/20',
  warning: 'border-warning bg-warning-background',
  info: 'border-info bg-info-background'
};

export const legacyNotificationDialogTheme: NotificationDialogTheme =
  notificationDialogTheme;
