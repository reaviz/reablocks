export interface TreeTheme {
  base: string;
  tree: string;
  arrow: string;
  node: {
    base: string;
    collapsed: string;
    disabled: string;
    leaf: string;
    label: string;
    button: {
      base: string;
      icon: string;
    };
  };
  nodeBlock: string;
  subtree: string;
}

const baseTheme: TreeTheme = {
  base: 'relative m-0 p-0 list-none',
  tree: 'border pt-1 pb-1 px-3 border-solid border-transparent',
  arrow: 'w-3 h-3',
  node: {
    base: 'pt-0.5 m-0 list-style-none first:pt-0 last:pb-0',
    collapsed: '-rotate-90',
    disabled: 'opacity-60',
    leaf: 'pl-4',
    label: '',
    button: {
      base: 'min-w-[auto] min-h-[auto] w-auto h-auto transition-transform duration-100 ease-in-out ml-0 mr-1 my-0 p-0',
      icon: 'align-middle block h-2 w-2 m-0.5'
    }
  },
  nodeBlock: 'flex items-center',
  subtree: 'relative ml-5 mr-0 mt-1 mb-0 p-0'
};

export const darkTreeTheme: TreeTheme = {
  ...baseTheme,
  arrow: [baseTheme.arrow, 'fill-typography'].join(' '),
  node: {
    ...baseTheme.node,
    base: [baseTheme.node.base, 'text-typography'].join(' '),
    button: {
      ...baseTheme.node.button,
      icon: [baseTheme.node.button.icon, 'fill-typography'].join(' ')
    }
  }
};

export const legacyTreeTheme: TreeTheme = {
  ...baseTheme,
  node: {
    ...baseTheme.node,
    button: {
      ...baseTheme.node.button,
      icon: [baseTheme.node.button.icon, 'fill-[var(--white)]'].join(' ')
    }
  }
};
