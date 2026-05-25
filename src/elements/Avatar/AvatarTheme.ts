export interface AvatarTheme {
  /** CSS class applied to the root avatar element. */
  base: string;
  /** CSS class applied when the avatar is rounded. */
  rounded: string;
}

const baseTheme: AvatarTheme = {
  base: 'flex justify-center items-center bg-cover bg-center font-bold',
  rounded: 'rounded-[50%]'
};

export const avatarTheme: AvatarTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-white'].join(' ')
};
