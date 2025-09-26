const PAGE_COUNT = 6;
export const FUZZY_RANGE = 3;

/**
 * Get the range of pages to show in the pager.
 */
export function getPageRange(page: number, totalPages: number) {
  let startPage = Math.max(page - FUZZY_RANGE, 0);
  let endPage = Math.min(page + FUZZY_RANGE, totalPages);

  if (startPage === 0 && endPage !== totalPages) {
    endPage = startPage + PAGE_COUNT;
  } else if (endPage === totalPages && startPage !== 0) {
    startPage = endPage - PAGE_COUNT;
  }

  return [startPage, endPage];
}

export function getItemsRange(
  page: number,
  perPage: number,
  totalItems: number,
) {
  const startItem = page * perPage + 1;
  const endOfPage = (page + 1) * perPage;
  const endItem = Math.min(endOfPage, totalItems);

  return [startItem, endItem];
}
