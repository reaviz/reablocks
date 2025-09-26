export interface AvatarGroupTheme {
  base: string;
  avatar: string;
  overflow: string;
}

export const avatarGroupTheme: AvatarGroupTheme = {
  base: 'flex items-center text-avatar-colors-text-resting',
  avatar: '-ml-2.5',
  overflow: 'ml-[5px]',
};
