export interface AvatarTheme {
  base: string;
  rounded: string;
}

const baseTheme: AvatarTheme = {
  base: 'flex justify-center items-center bg-cover bg-center font-bold',
  rounded: 'rounded-[50%]'
};

export const lightAvatarTheme: AvatarTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-black'].join(' ')
};

export const darkAvatarTheme: AvatarTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-white'].join(' ')
};

export const cssVarsAvatarTheme: AvatarTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'text-[var(--avatar-initials-color)] border-[var(--avatar-border)]'
  ].join(' ')
};
