export interface JsonTreeTheme {
  node: {
    label: string;
    value: string;
    delimiter: string;
    symbol: string;
    count: string;
  };
  pager: string;
}

export const jsonTreeTheme: JsonTreeTheme = {
  node: {
    label:
      'font-mono text-xs font-normal text-json-tree-color-text-primary-resting',
    delimiter: 'pr-1 text-xs font-normal',
    symbol: 'px-1 opacity-50 font-mono text-xs font-normal',
    value: 'text-json-tree-color-text-secondary-resting text-xs font-normal',
    count: 'opacity-50',
  },
  pager: 'opacity-50 cursor-pointer pl-4',
};
