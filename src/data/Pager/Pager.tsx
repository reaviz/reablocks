import React, { FC, Fragment, ReactNode, useCallback } from 'react';
import { Button } from '@/elements';
import { Stack } from '@/layout';
import { Text } from '@/typography';
import { Pluralize } from '@/data/Pluralize';
import EndArrow from './assets/arrow-end.svg?react';
import NextArrow from './assets/arrow-next.svg?react';
import PreviousArrow from './assets/arrow-previous.svg?react';
import StartArrow from './assets/arrow-start.svg?react';
import { FUZZY_RANGE, getItemsRange, getPageRange } from './utils';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { PagerTheme } from './PagerTheme';

export interface PagerProps {
  /**
   * The class name to add to the pager.
   */
  className?: string;

  /**
   * The class name to add to the page buttons.
   */
  pageClassName?: string;

  /**
   * The class name for the active page button.
   */
  activePageClassName?: string;

  /**
   * The class name to add to the pages container.
   */
  pagesContainerClassName?: string;

  /**
   * The current page number.
   */
  page: number;

  /**
   * The number of items per page.
   */
  size: number;

  /**
   * The total number of items.
   */
  total: number;

  /**
   * The React node or string to use for the previous arrow.
   */
  previousArrow?: ReactNode | string;

  /**
   * The React node or string to use for the next arrow.
   */
  nextArrow?: ReactNode | string;

  /**
   * The React node or string to use for the start arrow.
   */
  startArrow?: ReactNode | string;

  /**
   * The React node or string to use for the end arrow.
   */
  endArrow?: ReactNode | string;

  /**
   * A callback function that is called when the page changes.
   */
  onPageChange?: (page: number) => void;

  /**
   * The type of table data for the pager to display.
   */
  displayMode?: 'pages' | 'items' | 'all';

  /**
   * The theme for the Pager.
   */
  theme?: PagerTheme;
}

export const Pager: FC<PagerProps> = ({
  className,
  pageClassName,
  activePageClassName,
  pagesContainerClassName,
  page,
  size,
  total,
  startArrow = <StartArrow />,
  endArrow = <EndArrow />,
  previousArrow = <PreviousArrow />,
  nextArrow = <NextArrow />,
  onPageChange,
  displayMode = 'pages',
  theme: customTheme
}) => {
  const pageCount = Math.ceil(total / size);
  const canPrevious = page !== 0;
  const canNext = page < pageCount - 1;
  const [startPage, endPage] = getPageRange(page, pageCount - 1);
  const [startItem, endItem] = getItemsRange(page, size, total);
  const theme = useComponentTheme('pager', customTheme);

  const previousPage = useCallback(() => {
    if (canPrevious) {
      onPageChange?.(page - 1);
    } else {
      onPageChange?.(0);
    }
  }, [canPrevious, page, onPageChange]);

  const nextPage = useCallback(() => {
    if (canNext) {
      onPageChange?.(page + 1);
    } else {
      onPageChange?.(pageCount - 1);
    }
  }, [canNext, page, onPageChange, pageCount]);

  if (pageCount === 1) {
    return null;
  }

  return (
    <div className={twMerge(theme.base, className)}>
      {(displayMode === 'items' || displayMode === 'all') && (
        <div className={theme.pagerDisplayItems}>
          {pageCount === 1 && total > 0 && (
            <Text>
              Showing {total === 1 ? total : `all ${total.toLocaleString()}`}{' '}
              <Pluralize count={total} singular="item" showCount={false} />
            </Text>
          )}
          {pageCount > 1 && (
            <Stack dense>
              <Text>
                {startItem.toLocaleString()}-{endItem.toLocaleString()} of{' '}
                <Pluralize count={total} singular="item" />
              </Text>
            </Stack>
          )}
        </div>
      )}
      {startArrow && (
        <Button
          className={twMerge(theme.control, theme.firstPage)}
          variant="text"
          size="small"
          disablePadding
          title="First Page"
          onClick={() => onPageChange?.(0)}
          disabled={!canPrevious}
        >
          {startArrow}
        </Button>
      )}
      <Button
        className={twMerge(theme.control, theme.prevPage)}
        variant="text"
        size="small"
        disablePadding
        title="Previous page"
        onClick={previousPage}
        disabled={!canPrevious}
      >
        {previousArrow}
      </Button>
      {(displayMode === 'pages' || displayMode === 'all') && (
        <div className={twMerge(theme.pages.base, pagesContainerClassName)}>
          {startPage >= 2 && (
            <div className={twMerge(theme.ellipsis)}>&nbsp;...</div>
          )}
          {[...Array(pageCount)].map((_, i) => (
            <Fragment key={i}>
              {i >= startPage && i <= endPage && (
                <Button
                  variant="text"
                  size="small"
                  disabled={page === i}
                  title={`Page ${(i + 1).toLocaleString()}`}
                  className={twMerge(
                    theme.pages.page.base,
                    page === i &&
                      (activePageClassName || theme.pages.page.active),
                    pageClassName
                  )}
                  onClick={() => onPageChange?.(i)}
                >
                  {(i + 1).toLocaleString()}
                </Button>
              )}
            </Fragment>
          ))}
          {endPage <= pageCount - FUZZY_RANGE && (
            <div className={twMerge(theme.ellipsis)}>...&nbsp;</div>
          )}
        </div>
      )}
      <Button
        className={twMerge(theme.control, theme.nextPage)}
        variant="text"
        title="Next Page"
        size="small"
        disablePadding
        onClick={nextPage}
        disabled={!canNext}
      >
        {nextArrow}
      </Button>
      {endArrow && (
        <Button
          className={twMerge(theme.control, theme.lastPage)}
          size="small"
          title="Last Page"
          disablePadding
          variant="text"
          onClick={() => onPageChange?.(pageCount - 1)}
          disabled={!canNext}
        >
          {endArrow}
        </Button>
      )}
    </div>
  );
};
