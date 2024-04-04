import { useState } from 'react';
import { Pager } from './Pager';

export default {
  title: 'Components/Data/Pager',
  component: Pager
};

export const ShowPages = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <Pager
      page={page}
      size={10}
      total={100}
      onPageChange={setPage}
      displayMode="pages"
    />
  );
};

export const ShowItems = () => {
  const [page, setPage] = useState<number>(1);

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
  const [page, setPage] = useState<number>(1);

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
