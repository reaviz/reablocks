export interface BadgeTheme {
  base: string;
  disableMargins: string;
  badge: string;
  position: string;
  colors: {
    default: string;
    primary: string;
    secondary: string;
    error: string;
    [key: string]: string;
  };
  positions: {
    'top-start': string;
    'top-end': string;
    'bottom-start': string;
    'bottom-end': string;
  };
}

const baseTheme: Partial<BadgeTheme> = {
  base: 'relative inline-flex align-middle shrink-0 mx-2 my-0',
  disableMargins: 'm-0',
  badge: `flex flex-row flex-wrap justify-center content-center items-center absolute box-border
   leading-none text-sm p-1.5 w-[18px] h-[18px] z-[1] rounded-[50%] pointer-events-none `,
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
  }
};

export const badgeTheme: BadgeTheme = {
  base: baseTheme.base,
  disableMargins: baseTheme.disableMargins,
  badge: baseTheme.badge,
  position: baseTheme.position,
  positions: baseTheme.positions,
  colors: {
    default: 'bg-white text-black',
    primary: 'bg-primary text-surface-content',
    secondary: 'bg-secondary text-surface-content',
    error: 'bg-error text-surface-content'
  }
};

export const legacyBadgeTheme: BadgeTheme = {
  base: baseTheme.base,
  disableMargins: baseTheme.disableMargins,
  badge: [
    baseTheme.badge,
    'p-[var(--spacing-xs)] rounded-[var(--badge-border-radius)] text-[var(--font-size-sm)]'
  ].join(' '),
  position: baseTheme.position,
  positions: baseTheme.positions,
  colors: {
    default:
      'bg-[var(--badge-color-background-default)] text-[var(--badge-color-default)]',
    primary:
      'bg-[var(--badge-color-background-primary)] text-[var(--badge-color-primary)]',
    secondary:
      'bg-[var(--badge-color-background-secondary)] text-[var(--badge-color-secondary)]',
    error:
      'bg-[var(--badge-color-background-error)] text-[var(--badge-color-error)]'
  }
};
