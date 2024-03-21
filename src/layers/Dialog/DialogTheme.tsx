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
    'flex flex-col box-border outline-0 pointer-events-auto overflow-auto max-w-[80vw] max-h-[80vw]',
  content: 'p-[20px] flex-auto overflow-auto',
  footer: 'flex p-[20px] pb-[10px]',
  header: {
    base: 'flex justify-between pt-[20px] px-[20px] pb-[10px]',
    text: 'flex-1 m-0 p-0 inline-flex text-3xl font-bold',
    closeButton:
      'p-0 m-0 ml-[15px] opacity-80 h-auto w-auto inline-flex bg-none border-none cursor-pointer items-center text-white text-[16px] focus:outline-none'
  }
};

export const lightDialogTheme: DialogTheme = {
  ...baseTheme,
  inner: [baseTheme.inner, 'bg-light-background text-black'].join(' ')
};

export const darkDialogTheme: DialogTheme = {
  ...baseTheme,
  inner: [baseTheme.inner, 'bg-dark-background text-white'].join(' ')
};

export const legacyDialogTheme: DialogTheme = {
  ...baseTheme,
  inner: [
    baseTheme.inner,
    'bg-[var(--dialog-background)] text-[var(--dialog-color)]'
  ].join(' ')
};
