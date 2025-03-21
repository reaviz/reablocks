export interface EllipsisTheme {
  dots: string;
}

const baseTheme: EllipsisTheme = {
  dots: 'cursor-pointer opacity-50 text-[unset] p-0 border-[none] outline-hidden'
};

export const ellipsisTheme: EllipsisTheme = {
  ...baseTheme
};

export const legacyEllipsisTheme: EllipsisTheme = {
  ...baseTheme
};
