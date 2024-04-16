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
    label: 'font-mono text-anakiwa light:text-blue-500',
    delimiter: 'pr-1',
    symbol: 'px-1 opacity-50 font-mono',
    value: '',
    count: 'opacity-50'
  },
  pager: 'opacity-50 cursor-pointer pl-4'
};

export const legacyJsonTreeTheme: JsonTreeTheme = {
  ...jsonTreeTheme
};
