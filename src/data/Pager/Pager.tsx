import React, { FC, Fragment, ReactNode, useCallback } from 'react';
import classNames from 'classnames';
import { Button } from '../../elements/Button';
import { FUZZY_RANGE, getPageRange } from './utils';

import { ReactComponent as PreviousArrow } from './assets/arrow-previous.svg';
import { ReactComponent as NextArrow } from './assets/arrow-next.svg';
import { ReactComponent as StartArrow } from './assets/arrow-start.svg';
import { ReactComponent as EndArrow } from './assets/arrow-end.svg';

import css from './Pager.module.css';

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
}

export const Pager: FC<PagerProps> = ({
  className,
  pageClassName,
  page,
  size,
  total,
  startArrow,
  endArrow,
  previousArrow,
  nextArrow,
  onPageChange
}) => {
  const pageCount = Math.ceil(total / size);
  const canPrevious = page !== 0;
  const canNext = page < pageCount - 1;
  const [startPage, endPage] = getPageRange(page, pageCount - 1);

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
    <div className={classNames(css.pager, className)}>
      <Button
        variant="text"
        size="small"
        disablePadding
        title="First Page"
        onClick={() => onPageChange?.(0)}
        disabled={!canPrevious}
      >
        {startArrow}
      </Button>
      <Button
        variant="text"
        size="small"
        disablePadding
        title="Previous page"
        onClick={previousPage}
        disabled={!canPrevious}
      >
        {previousArrow}
      </Button>
      {startPage >= 2 && <div className={css.overflow}>&nbsp;...</div>}
      {[...Array(pageCount)].map((_, i) => (
        <Fragment key={i}>
          {i >= startPage && i <= endPage && (
            <Button
              variant="text"
              size="small"
              disabled={page === i}
              title={`Page ${i + 1}`}
              className={classNames(
                css.page,
                {
                  [css.active]: page === i
                },
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
        <div className={css.overflow}>...&nbsp;</div>
      )}
      <Button
        variant="text"
        title="Next Page"
        size="small"
        disablePadding
        onClick={nextPage}
        disabled={!canNext}
      >
        {nextArrow}
      </Button>
      <Button
        size="small"
        title="Last Page"
        disablePadding
        variant="text"
        onClick={() => onPageChange?.(pageCount - 1)}
        disabled={!canNext}
      >
        {endArrow}
      </Button>
    </div>
  );
};

Pager.defaultProps = {
  previousArrow: <PreviousArrow />,
  nextArrow: <NextArrow />,
  startArrow: <StartArrow />,
  endArrow: <EndArrow />
};
