export interface AvatarGroupTheme {
  base: string;
  avatar: string;
  overflow: string;
}

const baseTheme: AvatarGroupTheme = {
  base: 'flex items-center',
  avatar: '-ml-2.5',
  overflow: 'ml-[5px]'
};

export const avatarGroupTheme: AvatarGroupTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-text-content-primary'].join(' ')
};

export const legacyAvatarGroupTheme: AvatarGroupTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'text-[var(--avatar-initials-color)] border-[var(--avatar-border)]'
  ].join(' ')
};
