export interface DialogHeaderTheme {
  base: string;
  text: string;
  closeButton: string;
}

const baseTheme: DialogHeaderTheme = {
  base: 'flex justify-between pt-[20px] px-[20px] pb-[10px]',
  text: 'flex-1 m-0 p-0 inline-flex',
  closeButton:
    'p-0 m-0 ml-[15px] opacity-80 h-auto w-auto inline-flex bg-none border-none cursor-pointer items-center text-white text-[16px] focus:outline-none'
};

export const lightDialogHeaderTheme: DialogHeaderTheme = {
  ...baseTheme
};

export const darkDialogHeaderTheme: DialogHeaderTheme = {
  ...baseTheme
};
