import {
  TypographyColor,
  TypographySize,
  TypographyTheme,
  TypographyWeight
} from '@/typography/TypographyTheme';
import { cn, useComponentTheme } from '@/utils';
import React, {
  FC,
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren
} from 'react';

const COMPONENTS_MAP: Record<string, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h6',
  h6: 'h6',
  body: 'span',
  label: 'label',
  button: 'span',
  monospace: 'span'
};

export interface TypographyProps
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {
  className?: string;
  color?: keyof TypographyColor;
  variant?: keyof TypographyTheme['variant'];
  size?: keyof TypographySize;
  weight?: keyof TypographyWeight;
  theme?: TypographyTheme;
}

export const Typography: FC<TypographyProps> = ({
  children,
  color = 'primary',
  variant = 'body',
  size = 'medium',
  weight = 'regular',
  theme: customTheme,
  className,
  ...rest
}) => {
  const theme: TypographyTheme = useComponentTheme('typography', customTheme);

  const Component = COMPONENTS_MAP[variant] as unknown as FunctionComponent<
    HTMLAttributes<HTMLElement>
  >;

  return (
    <Component
      {...rest}
      className={cn(
        theme?.base,
        theme?.variant?.[variant]?.base,
        theme?.variant?.[variant]?.size?.[size],
        theme?.color?.[color],
        theme?.weight?.[weight],
        className
      )}
    >
      {children}
    </Component>
  );
};
