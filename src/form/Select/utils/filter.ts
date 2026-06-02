import type { SelectOptionProps } from '@/form/Select/SelectOption';

export const filterOptionsByKeyword = (
  options: SelectOptionProps[],
  keyword: string
): SelectOptionProps[] => {
  if (!keyword) return options;
  const q = keyword.toLowerCase();
  return options.filter(o => {
    const childText =
      typeof o.children === 'string' || typeof o.children === 'number'
        ? String(o.children)
        : '';
    return (
      childText.toLowerCase().includes(q) ||
      (o.group ?? '').toLowerCase().includes(q)
    );
  });
};
