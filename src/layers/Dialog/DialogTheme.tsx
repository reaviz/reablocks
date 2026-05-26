export interface DialogTheme {
  /** CSS class applied to the root dialog container. */
  base: string;
  /** CSS class applied to the dialog's inner panel. */
  inner: string;
  /** CSS class applied to the dialog content area. */
  content: string;
  /** CSS class applied to the dialog footer. */
  footer: string;
  /** CSS classes applied to the dialog header and its parts. */
  header: {
    base: string;
    text: string;
    closeButton: string;
  };
}

export const dialogTheme: DialogTheme = {
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
