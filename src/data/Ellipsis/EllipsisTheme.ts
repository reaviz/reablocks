export interface EllipsisTheme {
  dots: string;
}

export const defaultEllipsisTheme: EllipsisTheme = {
  dots: ''
};

export const unifyEllipsisTheme: EllipsisTheme = {
  dots: 'cursor-pointer opacity-50 text-[unset] p-0 border-[none] outline-hidden'
};
