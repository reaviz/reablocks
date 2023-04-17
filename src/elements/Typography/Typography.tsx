import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Typography.module.css';

export interface TypographyProps {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'error';
}

export interface TitleProps extends TypographyProps {
  //
}

export interface SubtitleProps extends TypographyProps {
  //
}

export interface TextProps extends TypographyProps {
  //
}

export const Title = forwardRef(
  (
    { children, color = 'default' }: TitleProps,
    ref: React.Ref<HTMLHeadingElement>
  ) => (
    <h1 ref={ref} className={classNames(styles.title, styles[color])}>
      {children}
    </h1>
  )
);

export const Subtitle = forwardRef(
  (
    { children, color = 'default' }: SubtitleProps,
    ref: React.Ref<HTMLHeadingElement>
  ) => (
    <h2 ref={ref} className={classNames(styles.subtitle, styles[color])}>
      {children}
    </h2>
  )
);

export const Text = forwardRef(
  (
    { children, color = 'default' }: TextProps,
    ref: React.Ref<HTMLParagraphElement>
  ) => (
    <p ref={ref} className={classNames(styles.text, styles[color])}>
      {children}
    </p>
  )
);
