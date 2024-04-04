export interface DrawerTheme {
  base: string;
  header: {
    base: string;
    text: string;
  };
  content: string;
  disablePadding: string;
  closeButton: {
    base: string;
    headerless: string;
  };
  positions: {
    top: string;
    end: string;
    bottom: string;
    start: string;
  };
}

const baseTheme: DrawerTheme = {
  base: 'fixed overflow-y-auto overflow-x-hidden',
  header: {
    base: 'flex items-center justify-between px-8 py-5 text-3xl font-bold',
    text: 'flex-1 m-0'
  },
  content: 'px-8 py-5',
  disablePadding: 'p-0',
  closeButton: {
    base: 'opacity-80 h-auto w-auto min-w-[auto] min-h-[auto] cursor-pointer text-base p-0 border-0 focus:outline-none',
    headerless: 'absolute right-5 top-5'
  },
  positions: {
    top: 'w-full inset-x-0 top-0',
    end: 'h-full inset-y-0 right-0',
    bottom: 'w-full inset-x-0 bottom-0',
    start: 'h-full inset-y-0 left-0'
  }
};

export const drawerTheme: DrawerTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-background-level4 text-typography'].join(' ')
};

export const legacyDrawerTheme: DrawerTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'bg-[var(--drawer-background)] text-[var(--drawer-color)]'
  ].join(' '),
  closeButton: {
    ...baseTheme.closeButton,
    base: [baseTheme.closeButton.base, 'text-[var(--drawer-color)]'].join(' ')
  }
};
