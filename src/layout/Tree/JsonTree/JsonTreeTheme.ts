export interface JsonTreeTheme {
  node: {
    label: string;
    value: string;
    count: string;
  };
}

const baseTheme: JsonTreeTheme = {
  node: {
    label: 'font-mono opacity-70',
    value: '',
    count: ''
  }
};
