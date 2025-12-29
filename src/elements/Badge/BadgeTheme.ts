export interface BadgeColorTheme {
  default: string;
  primary: string;
  secondary: string;
  error: string;
  [key: string]: string;
}

export interface BadgePlacementTheme {
  'top-start': string;
  'top-end': string;
  'bottom-start': string;
  'bottom-end': string;
}

export interface BadgeTheme {
  base: string;
  disableMargins: string;
  badge: string;
  position: string;
  colors: BadgeColorTheme;
  positions: BadgePlacementTheme;
}

export const badgeTheme: BadgeTheme = {
  base: 'relative inline-flex align-middle shrink-0 mx-2 my-0',
  disableMargins: 'm-0',
  badge: `flex flex-row flex-wrap justify-center content-center items-center absolute box-border
   leading-none text-xs p-1.5 w-[18px] h-[18px] z-1 rounded-[50%] pointer-events-none `,
  position: 'translate-x-2/4 -translate-y-2/4 origin-[100%_0%] right-0 top-0',
  positions: {
    'top-start':
      'top-0 left-0 -translate-x-2/4 -translate-y-2/4 origin-[0%_0%]',
    'top-end':
      'top-0 right-0 translate-x-2/4 -translate-y-2/4 origin-[100%_0%]',
    'bottom-start':
      'bottom-0 left-0 -translate-x-2/4 translate-y-2/4 origin-[0%_100%]',
    'bottom-end':
      'bottom-0 right-0 translate-x-2/4 translate-y-2/4 origin-[100%_100%]'
  },
  colors: {
    default: 'bg-background-neutral-raised-base text-content-text-inverse-base',
    primary: 'bg-background-brand-base text-content-text-inverse-base',
    secondary: 'bg-background-neutral-raised-3 text-content-text-inverse-base',
    error: 'bg-background-semantic-error-base text-content-text-inverse-base'
  }
};
