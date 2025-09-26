export interface NotificationVariantTheme {
  default: {
    base: string;
    icon?: string;
  };
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
  info: {
    base: string;
    icon?: string;
  };
}

export interface NotificationTheme {
  container: string;
  positions: string;
  notification: {
    base: string;
    variants: NotificationVariantTheme;
    header: string;
    content: string;
    body: string;
    closeContainer: string;
    action: string;
    closeButton: string;
  };
}

export const notificationTheme: NotificationTheme = {
  container: '',
  positions:
    'fixed z-9998 h-auto -translate-x-2/4 mb-1 px-24 py-0 left-2/4 bottom-0',
  notification: {
    base: `
          flex relative text-sm min-w-[400px] rounded-(--notifications-details-corner-radius-primary)
          mb-2.5 p-(--notifications-details-vertical-padding-standard-sm) border backdrop-blur-xl transition-colors
          border-notifications-colors-stroke-neutral-resting hover:border-notifications-colors-stroke-neutral-hover
          bg-notifications-colors-background-neutral-resting hover:bg-notifications-colors-background-neutral-hover
        `,
    variants: {
      default: {
        base: '',
      },
      success: {
        base: `
          border-notifications-colors-stroke-success-resting hover:border-notifications-colors-stroke-success-hover
          bg-notifications-colors-background-success-resting hover:bg-notifications-colors-background-success-hover
        `,
        icon: 'text-notifications-colors-assets-success-resting size-(--notifications-details-asset-size-base)',
      },
      error: {
        base: `
          border-notifications-colors-stroke-error-resting hover:border-notifications-colors-stroke-error-hover
          bg-notifications-colors-background-error-resting hover:bg-notifications-colors-background-error-hover
        `,
        icon: 'text-notifications-colors-assets-destructive-resting size-(--notifications-details-asset-size-base)',
      },
      warning: {
        base: `
          border-notifications-colors-stroke-warning-resting hover:border-notifications-colors-stroke-warning-hover
          bg-notifications-colors-background-warning-resting hover:bg-notifications-colors-background-warning-hover
        `,
        icon: 'text-notifications-colors-assets-warning-static size-(--notifications-details-asset-size-base)',
      },
      info: {
        base: `
          border-notifications-colors-stroke-info-resting hover:border-notifications-colors-stroke-info-hover
          bg-notifications-colors-background-info-resting hover:bg-notifications-colors-background-info-hover
        `,
        icon: 'text-notifications-colors-assets-info-resting size-(--notifications-details-asset-size-base)',
      },
    },
    content: 'inline-flex items-start flex-1 flex-col justify-center',
    header:
      'text-sm flex gap-(--notifications-details-space-between-standard-sm) items-center text-notifications-colors-text-title-resting',
    closeContainer: 'inline-flex items-center',
    action:
      'ml-auto mr-(--notifications-details-space-between-standard-sm) items-center flex',
    closeButton: `
      size-(--notifications-details-asset-size-compact) cursor-pointer text-xs font-semibold
      m-0 border-0 text-notifications-colors-assets-normal-resting hover:opacity-70 transition-opacity
    `,
    body: 'text-xxs mt-(--notifications-details-space-between-standard-sm) text-notifications-colors-text-normal-resting',
  },
};
