export interface AvatarTheme {
  base: string;
  rounded: string;
  outline: {
    base: string;
    disabled: string;
    focused: string;
    hovered: string;
  };
  filled: {
    base: string;
    disabled: string;
    focused: string;
    hovered: string;
  };
  colored: {
    base: string;
    disabled: string;
    focused: string;
    hovered: string;
  };
  disabled: string;
}

const baseTheme: AvatarTheme = {
  base: 'flex justify-center items-center bg-cover bg-center font-bold',
  rounded: 'rounded-[50%]',
  outline: {
    base: 'border border-solid',
    focused: '',
    hovered: '',
    disabled: ''
  },
  filled: {
    base: 'border border-solid border-transparent',
    focused: '',
    hovered: '',
    disabled: ''
  },
  colored: {
    base: 'border border-solid border-transparent',
    focused: '',
    hovered: '',
    disabled: ''
  },
  disabled: 'border border-solid'
};

export const avatarTheme: AvatarTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'text-waterloo text-gray-400 light:text-gray-600 focus:outline-none'
  ].join(' '),
  outline: {
    base: [
      baseTheme.outline.base,
      'bg-black border-gray-700 light:border-gray-200 light:bg-gray-100'
    ].join(' '),
    hovered: [
      baseTheme.outline.focused,
      'hover:border-blue-400 light:hover:border-blue-400'
    ].join(' '),
    focused: [
      baseTheme.outline.hovered,
      'focus:border-blue-500 light:focus:border-blue-500'
    ].join(' '),
    disabled: [
      baseTheme.outline.disabled,
      'text-gray-300/40 light:bg-gray-100 light:border-gray-400'
    ].join(' ')
  },
  filled: {
    base: [baseTheme.filled.base, 'bg-gray-700 light:bg-gray-200'].join(' '),
    hovered: [
      baseTheme.outline.focused,
      'hover:border-blue-400 light:hover:border-blue-400'
    ].join(' '),
    focused: [
      baseTheme.outline.hovered,
      'focus:border-blue-500 light:focus:border-blue-500'
    ].join(' '),
    disabled: [
      baseTheme.filled.disabled,
      'bg-gray-600 light:bg-gray-100 light:border-gray-100 text-gray-300/40'
    ].join(' ')
  },
  colored: {
    base: [baseTheme.colored.base, 'text-secondary light:text-gray-100'].join(
      ' '
    ),
    hovered: [
      baseTheme.outline.focused,
      'hover:border-blue-400 light:hover:border-blue-400'
    ].join(' '),
    focused: [
      baseTheme.outline.hovered,
      'focus:border-blue-500 light:focus:border-blue-500'
    ].join(' '),
    disabled: [
      baseTheme.colored.disabled,
      'bg-gray-600 light:bg-gray-100 light:border-gray-100 text-gray-300/40'
    ].join(' ')
  },
  disabled: [
    baseTheme.disabled,
    'cursor-not-allowed border-gray-600 light:border-gray-400 light:text-gray-400'
  ].join(' ')
};

export const legacyAvatarTheme: AvatarTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'text-[var(--avatar-initials-color)] [border:_var(--avatar-border)]'
  ].join(' ')
};
