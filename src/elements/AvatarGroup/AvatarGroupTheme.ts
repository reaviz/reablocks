export interface AvatarGroupTheme {
  base: string;
  avatar: string;
  overflow: string;
}

const baseAvatarGroupTheme: AvatarGroupTheme = {
  base: 'flex items-center',
  avatar: '-ml-2.5',
  overflow: 'ml-[5px]'
};

export const defaultAvatarGroupTheme: AvatarGroupTheme = baseAvatarGroupTheme;

export const unifyAvatarGroupTheme: AvatarGroupTheme = baseAvatarGroupTheme;
