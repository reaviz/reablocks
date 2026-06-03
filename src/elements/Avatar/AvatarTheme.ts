export interface AvatarTheme {
  /** CSS class applied to the root avatar element. */
  base: string;
  /** CSS class applied when the avatar is rounded. */
  rounded: string;
}

export const avatarTheme: AvatarTheme = {
  base: 'flex justify-center items-center bg-cover bg-center font-bold text-white',
  rounded: 'rounded-[50%]'
};
