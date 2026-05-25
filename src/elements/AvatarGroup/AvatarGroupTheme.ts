export interface AvatarGroupTheme {
  /** CSS class applied to the root avatar group container. */
  base: string;
  /** CSS class applied to each avatar within the group. */
  avatar: string;
  /** CSS class applied to the overflow indicator showing remaining avatars. */
  overflow: string;
}

const baseTheme: AvatarGroupTheme = {
  base: 'flex items-center',
  avatar: '-ml-2.5',
  overflow: 'ml-[5px]'
};

export const avatarGroupTheme: AvatarGroupTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-text-primary'].join(' ')
};
