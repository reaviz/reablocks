export interface AvatarGroupTheme {
  /** CSS class applied to the root avatar group container. */
  base: string;
  /** CSS class applied to each avatar within the group. */
  avatar: string;
  /** CSS class applied to the overflow indicator showing remaining avatars. */
  overflow: string;
}

export const avatarGroupTheme: AvatarGroupTheme = {
  base: 'flex items-center text-text-primary',
  avatar: '-ml-2.5',
  overflow: 'ml-[5px]'
};
