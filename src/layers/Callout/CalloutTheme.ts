export interface CalloutTheme {
  /** CSS classes applied to the root callout container, including per-variant styles. */
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
  /** CSS classes applied to the callout icon, including per-variant styles. */
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
  /** CSS class applied to the callout text content. */
  text: string;
}

export const calloutTheme: CalloutTheme = {
  base: {
    common: 'flex items-center gap-2.5 px-4 py-3 border-b',
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
