export interface NavigationBarTheme {
  base: string;
  direction: {
    horizontal: string;
    vertical: string;
  };
  start: string;
  navigation: string;
  end: string;
}

export const navigationBarTheme: NavigationBarTheme = {
  base: `
    flex h-full w-full p-4 border-r gap-4
    bg-navigation-colors-background-container-base border-navigation-colors-stroke-container-base
  `,
  direction: {
    vertical: 'flex-col ',
    horizontal: 'flex-row border-none pb-0'
  },
  start: 'pt-4',
  navigation: 'flex-1 flex flex-col gap-2',
  end: ''
};
