import type { FC, LiHTMLAttributes } from 'react';
import React from 'react';

import { cn } from '@/utils';

interface BreadcrumbItemProps extends LiHTMLAttributes<HTMLLIElement> {
  className?: string;
}

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  className,
  ...rest
}) => <li className={cn('flex gap-2 items-center', className)} {...rest} />;
