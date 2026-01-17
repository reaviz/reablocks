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

export const defaultDialogTheme: DialogTheme = {
  base: 'justify-center items-center flex pointer-events-none top-0 left-0 w-full h-full fixed will-change-transform will-change-opacity',
  inner:
    'flex flex-col box-border outline-0 pointer-events-auto overflow-auto max-w-[80vw] max-h-[80vh] bg-panel text-text-primary border border-panel-accent rounded-sm shadow-2xl',
  content: 'p-[20px] flex-auto overflow-auto',
  footer: 'flex p-[20px] pb-[10px]',
  header: {
    base: 'flex justify-between pt-[20px] px-[20px] pb-[10px]',
    text: 'flex-1 m-0 p-0 inline-flex text-3xl font-bold',
    closeButton:
      'p-0 m-0 ml-[15px] opacity-80 h-auto w-auto inline-flex bg-none border-none cursor-pointer items-center text-[16px] focus:outline-hidden text-text-primary'
  }
};

export const unifyDialogTheme: DialogTheme = {
  base: 'justify-center items-center flex pointer-events-none top-0 left-0 size-full fixed',
  inner: `
      flex flex-col box-border outline-0 pointer-events-auto overflow-auto max-w-[80vw] max-h-[80vh] rounded-(--notifications-details-corner-radius-primary) border backdrop-blur-lg
      border-stroke-brand-base bg-background-neutral-canvas-base
    `,
  content: 'p-4 flex-auto overflow-auto text-content-text-on-color-light-dark',
  footer: 'flex flex-row-reverse gap-2 p-4',
  header: {
    base: 'flex justify-between p-4',
    text: 'flex-1 m-0 p-0 inline-flex text-lg leading-6 font-bold text-content-text-on-color-light-dark',
    closeButton: `
      p-0 m-0 ml-[15px] size-auto inline-flex bg-none border-none cursor-pointer items-center text-[16px] focus:outline-hidden
      text-color-content-assets-neutral-base
    `
  }
};
