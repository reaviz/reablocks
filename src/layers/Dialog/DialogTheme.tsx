export interface DialogTheme {
  base: string;
  inner: string;
  content: string;
  footer: string;
  header: {
    base: string;
    text: string;
    closeButton: string;
  };
}

const baseTheme: DialogTheme = {
  base: 'justify-center items-center flex pointer-events-none top-0 left-0 w-full h-full fixed will-change-transform will-change-opacity',
  inner:
    'flex flex-col box-border outline-0 pointer-events-auto overflow-auto max-w-[80vw] max-h-[80vh]',
  content: 'p-[20px] flex-auto overflow-auto',
  footer: 'flex p-[20px] pb-[10px]',
  header: {
    base: 'flex justify-between pt-[20px] px-[20px] pb-[10px]',
    text: 'flex-1 m-0 p-0 inline-flex text-3xl font-bold',
    closeButton:
      'p-0 m-0 ml-[15px] opacity-80 h-auto w-auto inline-flex bg-none border-none cursor-pointer items-center text-[16px] focus:outline-none'
  }
};

export const dialogTheme: DialogTheme = {
  ...baseTheme,
  inner: [
    baseTheme.inner,
    'bg-panel text-panel-content border border-panel-accent rounded shadow-2xl'
  ].join(' '),
  header: {
    ...baseTheme.header,
    closeButton: [baseTheme.header.closeButton, 'text-panel-content'].join(' ')
  }
};

export const legacyDialogTheme: DialogTheme = {
  ...baseTheme,
  inner: [
    baseTheme.inner,
    'bg-[var(--dialog-background)] text-[var(--dialog-color)]'
  ].join(' ')
};
