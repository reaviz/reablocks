export interface NavigationBarTheme {
  base: string;
  top: string;
  navigation: string;
  bottom: string;
}

export const navigationBarTheme: NavigationBarTheme = {
  base: `
    flex flex-col h-full w-full p-4 border-r gap-4
    bg-navigation-colors-background-container-base border-navigation-colors-stroke-container-base
  `,
  top: 'pt-4',
  navigation: 'flex-1 flex flex-col gap-2',
  bottom: ''
};
