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

export const treeTheme: TreeTheme = {
  base: 'relative m-0 p-0 list-none',
  tree: 'border pt-1 pb-1 px-3 border-solid border-transparent',
  arrow:
    'size-4.5 p-1 transition-colors text-json-tree-color-asset-resting hover:text-json-tree-color-asset-hover',
  node: {
    base: 'pt-2 m-0 list-style-none first:pt-0 last:pb-0',
    collapsed: '-rotate-90',
    disabled: 'opacity-40',
    leaf: 'pl-5.5',
    label: 'flex items-center',
    button: {
      base: 'min-w-[auto] min-h-[auto] size-auto transition-transform duration-100 ease-in-out ml-0 mr-1 my-0 p-0',
      icon: 'align-middle block h-2 w-2 m-0.5'
    }
  },
  nodeBlock: 'flex items-center',
  subtree: 'relative ml-5 mr-0 mt-1 mb-0 p-0'
};
