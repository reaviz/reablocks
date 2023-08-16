import { useState } from 'react';
import { Pager } from './Pager';

export default {
  title: 'Components/Data/Pager',
  component: Pager
};

export const Basic = () => {
  const [page, setPage] = useState<number>(0);

  return <Pager page={page} size={10} total={100} onPageChange={setPage} />;
};
