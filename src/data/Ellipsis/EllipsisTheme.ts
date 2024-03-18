export interface EllipsisTheme {
  dots: string;
}

const baseTheme: EllipsisTheme = {
  dots: 'cursor-pointer opacity-50 text-[unset] p-0 border-[none] outline-none'
};

export const lightEllipsisTheme: EllipsisTheme = {
  ...baseTheme
};

export const darkEllipsisTheme: EllipsisTheme = {
  ...baseTheme
};

export const legacyEllipsisTheme: EllipsisTheme = {
  ...baseTheme
};
