export interface TreeTheme {
  /** CSS class applied to the root tree container. */
  base: string;
  /** CSS class applied to the tree element. */
  tree: string;
  /** CSS class applied to the expand/collapse arrow icon. */
  arrow: string;
  /** Class names applied to each tree node and its parts. */
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
  /** CSS class applied to the block wrapping a node and its toggle. */
  nodeBlock: string;
  /** CSS class applied to a nested subtree under a node. */
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

export const treeTheme: TreeTheme = {
  ...baseTheme,
  arrow: [baseTheme.arrow, 'fill-text-primary'].join(' '),
  node: {
    ...baseTheme.node,
    base: [baseTheme.node.base, 'text-text-primary'].join(' '),
    button: {
      ...baseTheme.node.button,
      icon: [baseTheme.node.button.icon, 'fill-text-primary'].join(' ')
    }
  }
};
