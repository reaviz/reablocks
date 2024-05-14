import React, { FC } from 'react';
import { cn } from '@/utils';

export const BreadcrumbItem: FC<React.LiHTMLAttributes<HTMLLIElement>> = ({
  className,
  ...rest
}) => <li className={cn('flex gap-2 items-center', className)} {...rest} />;
