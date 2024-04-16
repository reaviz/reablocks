export interface JsonTreeTheme {
  node: {
    base: string;
    label: string;
    value: string;
    delimiter: string;
    symbol: string;
    count: string;
  };
}

export const jsonTreeTheme: JsonTreeTheme = {
  node: {
    label: 'font-mono text-anakiwa',
    delimiter: 'pr-1',
    symbol: 'px-1 opacity-50 font-mono',
    value: '',
    count: 'opacity-50'
  }
};
