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

export const lightAvatarGroupTheme: AvatarGroupTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-black'].join(' ')
};

export const darkAvatarGroupTheme: AvatarGroupTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-white'].join(' ')
};

export const cssVarsAvatarGroupTheme: AvatarGroupTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'text-[var(--avatar-initials-color)] border-[var(--avatar-border)]'
  ].join(' ')
};
