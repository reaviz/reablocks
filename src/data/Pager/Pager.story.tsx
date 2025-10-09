import { useState } from 'react';

import { Pager } from '@/data';
import { pagerTheme } from '@/data';

export default {
  title: 'Components/Data/Pager',
  component: Pager
};

export const ShowPages = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <Pager
      page={page}
      size={10}
      total={100}
      onPageChange={setPage}
      displayMode="all"
      startArrow={null}
      endArrow={null}
    />
  );
};

export const ShowItems = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <Pager
      page={page}
      size={10}
      total={100}
      onPageChange={setPage}
      displayMode="items"
    />
  );
};

export const ShowAll = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <Pager
      page={page}
      size={10}
      total={100}
      onPageChange={setPage}
      displayMode="all"
    />
  );
};

export const CustomTheme = () => {
  const [page, setPage] = useState<number>(0);
  const customTheme = pagerTheme;
  customTheme.itemsDisplay = 'text-slate-500';
  customTheme.showPageRange =
    "text-blue-400 font-bold before:content-['Showing_'] before:text-slate-500 before:font-normal";
  customTheme.totalCount = 'text-blue-400 font-bold';

  return (
    <Pager
      theme={customTheme}
      page={page}
      size={10}
      total={100}
      onPageChange={setPage}
      displayMode="all"
    />
  );
};
