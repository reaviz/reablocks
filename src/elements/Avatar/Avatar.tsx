import React, { useMemo } from 'react';
import getInitials from 'name-initials';
import { generateColor } from '@marko19907/string-to-color';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../utils';
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
   * Whether the avatar is rounded.
   */
  rounded?: boolean;

  /**
   * Color override for the avatar.
   */
  color?: string;

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

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      name,
      src,
      color,
      size,
      rounded,
      className,
      colorOptions,
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

    return (
      <div
        {...rest}
        className={twMerge(theme.base, rounded && theme.rounded, className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          fontSize: `${fontSize}px`,
          backgroundImage: src ? `url(${src})` : 'none',
          backgroundColor
        }}
        ref={ref}
      >
        {!src && name && <span>{initials}</span>}
      </div>
    );
  }
);

Avatar.defaultProps = {
  size: 24,
  rounded: true
};
