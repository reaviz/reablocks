export interface CalloutTheme {
  base: {
    common: string;
    variant: {
      default: string;
      success: string;
      error: string;
      warning: string;
      info: string;
      [key: string]: string;
    };
  };
  icon: {
    common: string;
    variant: {
      default: string;
      success: string;
      error: string;
      warning: string;
      info: string;
      [key: string]: string;
    };
  };
  text: string;
}

export const calloutTheme: CalloutTheme = {
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

export const legacyCalloutTheme: CalloutTheme = calloutTheme;
