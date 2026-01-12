export interface CalloutVariantTheme {
  default: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  [key: string]: string;
}

export interface CalloutTheme {
  base: {
    common: string;
    variant: CalloutVariantTheme;
  };
  icon: {
    common: string;
    variant: CalloutVariantTheme;
  };
  text: string;
}

export const defaultCalloutTheme: CalloutTheme = {
  base: {
    common: 'px-4 py-3 border-b',
    variant: {
      default: 'bg-panel-background border-panel-accent',
      success: 'bg-success-background border-success',
      error: 'bg-error-background border-error',
      warning: 'bg-warning-background border-warning',
      info: 'bg-info-background border-info'
    }
  },
  icon: {
    common: '',
    variant: {
      default: '',
      success: 'text-success',
      error: 'text-error',
      warning: 'text-warning',
      info: 'text-info'
    }
  },
  text: 'text-base'
};

export const unifyCalloutTheme: CalloutTheme = {
  base: {
    common: 'px-4 py-3 border-b',
    variant: {
      default:
        'bg-notifications-colors-background-neutral-resting border-notifications-colors-stroke-neutral-resting',
      success:
        'bg-notifications-colors-background-success-resting border-notifications-colors-stroke-success-resting',
      error:
        'bg-notifications-colors-background-error-resting border-notifications-colors-stroke-error-resting',
      warning:
        'bg-notifications-colors-background-warning-resting border-notifications-colors-stroke-warning-resting',
      info: 'bg-notifications-colors-background-info-resting border-notifications-colors-stroke-info-resting'
    }
  },
  icon: {
    common: '',
    variant: {
      default: 'text-notifications-colors-assets-neutral-resting',
      success: 'text-notifications-colors-assets-success-resting',
      error: 'text-notifications-colors-assets-destructive-resting',
      warning: 'text-notifications-colors-assets-warning-static',
      info: 'text-notifications-colors-assets-info-resting'
    }
  },
  text: 'text-notifications-colors-text-title-resting'
};
