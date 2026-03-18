import { Children } from 'react';
import { SelectOption } from '@/form/Select/SelectOption';

export function createOptions(children) {
  const arr = Children.toArray(children);
  return arr
    .filter((child: any) => child.type?.name === SelectOption.name)
    .map((child: any) => child.props);
}
