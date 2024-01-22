import React, {
  FC,
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo
} from 'react';
import classNames from 'classnames';
import { formatRelative, getInterval } from './relative';
import { safeFormat } from './formatting';
import css from './DateFormat.module.css';

export interface DateFormatProps {
  /**
   * Allow the user to toggle between relative and absolute time.
   */
  allowToggle?: boolean;

  /**
   * The cache key to use for storing the user's preference.
   */
  cacheKey?: string;

  /**
   * The date to format.
   */
  date?: Date | null | number | string;

  /**
   * The format to use.
   */
  format?: string;

  /**
   * Whether to use relative time.
   */
  fromNow?: boolean;

  /**
   * Whether to add a suffix to the relative time.
   */
  addSuffix?: boolean;

  /**
   * Additional CSS class names to use.
   */
  className?: string;

  /**
   * Whether to include seconds in the relative time.
   */
  includeSeconds?: boolean;

  /**
   * The message to display when the date is empty. Default is "N/A".
   */
  emptyMessage?: string;
}

export const DateFormat: FC<DateFormatProps> = ({
  allowToggle,
  cacheKey,
  className,
  format,
  emptyMessage,
  includeSeconds,
  addSuffix,
  fromNow,
  date
}) => {
  const [cache, setCache] = useState<string | null>(
    window.localStorage.getItem(`DATES_${cacheKey}`) || null
  );

  useEffect(() => {
    if (cacheKey) {
      window.localStorage.setItem(`DATES_${cacheKey}`, cache);
    }
  }, [cache, cacheKey]);

  let should = fromNow;
  if (cacheKey && cache) {
    should = cache === 'true';
  }

  const [isRelative, setIsRelative] = useState<boolean>(should as boolean);
  const timeout = useRef<any | null>(null);
  const { dateObj, formatted, relative } = useMemo(
    () => safeFormat(date, { format, includeSeconds, addSuffix }),
    [addSuffix, date, format, includeSeconds]
  );
  const [curRelative, setCurRelative] = useState<string>(relative);

  const onToggle = useCallback(
    event => {
      if (allowToggle) {
        event.preventDefault();
        event.stopPropagation();

        const next = !isRelative;
        setIsRelative(next);

        if (cacheKey) {
          setCache(`${next}`);
        }
      }
    },
    [allowToggle, cacheKey, isRelative, setCache]
  );

  const updateTime = useCallback(() => {
    if (isRelative) {
      clearTimeout(timeout.current);

      const interval = getInterval(dateObj);
      if (interval > 0) {
        timeout.current = setTimeout(() => {
          setCurRelative(
            formatRelative(dateObj, { includeSeconds, addSuffix })
          );

          updateTime();
        }, interval);
      }
    }
  }, [isRelative, dateObj, includeSeconds, addSuffix]);

  useEffect(() => {
    updateTime();

    const cur = timeout.current;
    return () => clearTimeout(cur);
  });

  if (!date) {
    return <>{emptyMessage}</>;
  }

  return (
    <time
      title={allowToggle ? 'Toggle relative / absolute time' : undefined}
      role="button"
      className={classNames(className, { [css.btn]: allowToggle })}
      onClick={onToggle}
    >
      {isRelative ? curRelative : formatted}
    </time>
  );
};

DateFormat.defaultProps = {
  format: 'MM/dd/yy hh:mm:ss a',
  includeSeconds: false,
  allowToggle: false,
  addSuffix: true,
  emptyMessage: 'N/A'
};
