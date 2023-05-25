import React from 'react';
import classNames from 'classnames';
import getInitials from 'name-initials';
import stc from 'string-to-color';
import css from './Avatar.module.css';

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
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ name, src, color, size, rounded, className, ...rest }, ref) => {
    const fontSize = size * 0.4;

    return (
      <div
        {...rest}
        className={classNames(css.avatar, className, {
          [css.rounded]: rounded
        })}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          fontSize: `${fontSize}px`,
          backgroundImage: src ? `url(${src})` : 'none',
          backgroundColor: src ? 'transparent' : color || stc(name || '')
        }}
        ref={ref}
      >
        {!src && name && <span>{getInitials(name)}</span>}
      </div>
    );
  }
);

Avatar.defaultProps = {
  size: 24,
  rounded: true
};
