import React, { FC, LegacyRef, forwardRef, useMemo } from 'react';
import getInitials from 'name-initials';
import { generateColor } from '@marko19907/string-to-color';
import { cn, useComponentTheme } from '@/utils';
import { AvatarTheme } from './AvatarTheme';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The name of the person.
   */
  name?: string;

  /**
   * The URL of the avatar image.
   */
  src?: string;

  /**
   * The size of the avatar.
   */
  size?: number;

  /**
   * Style variant for the avatar.
   */
  variant?: 'filled' | 'outline';

  /**
   * Style type for the avatar.
   */
  type?: 'colored' | 'monochrome';

  /**
   * Whether the avatar is rounded.
   */
  rounded?: boolean;

  /**
   * Color override for the avatar.
   */
  color?: string;

  /**
   * Whether the avatar is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the avatar is able to interact.
   */
  interactable?: boolean;

  /**
   * Custom color options for the color generator.
   */
  colorOptions?: {
    saturation: number;
    lightness: number;
    alpha: number;
  };

  /**
   * Theme for the Avatar.
   */
  theme?: AvatarTheme;
}

export interface AvatarRef {
  /**
   * Reference to the root div element.
   */
  ref?: LegacyRef<HTMLDivElement>;
}

export const Avatar: FC<AvatarProps> & AvatarRef = forwardRef<
  HTMLDivElement,
  AvatarProps
>(
  (
    {
      name,
      src,
      color,
      size = 24,
      variant = 'filled',
      type = 'colored',
      rounded = true,
      className,
      colorOptions,
      disabled,
      interactable,
      theme: customTheme,
      ...rest
    },
    ref
  ) => {
    const fontSize = size * 0.4;

    const initials = useMemo(() => getInitials(name || ''), [name]);

    const backgroundColor = useMemo(() => {
      if (src) {
        return 'transparent';
      }

      if (color) {
        return color;
      }

      return generateColor(name || '', colorOptions);
    }, [color, name, src, colorOptions]);

    const theme: AvatarTheme = useComponentTheme('avatar', customTheme);
    const themeVariant = src ? 'outline' : variant;

    return (
      <div
        {...rest}
        className={cn(
          theme.base,
          theme[themeVariant].base,
          theme[type].base,
          {
            'cursor-pointer': interactable,
            [theme.rounded]: rounded,
            [theme.disabled]: disabled,
            [theme[themeVariant].focused]: interactable,
            [theme[themeVariant].hovered]: interactable,
            [theme[themeVariant].disabled]: disabled,
            [theme[type].focused]: interactable,
            [theme[type].hovered]: interactable,
            [theme[type].disabled]: disabled
          },
          className
        )}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          fontSize: `${fontSize}px`,
          backgroundImage: src ? `url(${src})` : 'none',
          ...(type === 'colored' && !disabled ? { backgroundColor } : {})
        }}
        ref={ref}
      >
        {!src && name && <span>{initials}</span>}
      </div>
    );
  }
);
