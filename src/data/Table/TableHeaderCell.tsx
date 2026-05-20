import React, {
  CSSProperties,
  ComponentType,
  forwardRef,
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  RefObject,
  TouchEvent,
  useCallback,
  useEffect,
  useRef
} from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TableTheme } from './TableTheme';
import { useTableContext } from './TableContext';
import { Sort, type SortDirection } from '@/data/Sort';

export type { SortDirection };

/**
 * Width used as the starting baseline for resize when the column has no
 * width set anywhere (no `width` prop, no entry in `columnWidths`, and no
 * rendered DOM size yet).
 */
export const DEFAULT_COLUMN_WIDTH = 160;

const SORT_ARIA: Record<
  NonNullable<SortDirection>,
  'ascending' | 'descending'
> = {
  asc: 'ascending',
  desc: 'descending'
};

export interface TableHeaderCellProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onClick'
> {
  /**
   * Column identifier. Required to bind to the Table's column-width state
   * (resizing, controlled widths). Body cells with the same `columnId` will
   * follow this column's resolved width.
   */
  columnId?: string;

  /**
   * Horizontal alignment of the cell contents.
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Fixed pixel width for the cell when no value is present in the Table's
   * `columnWidths` map. When omitted, the cell flexes to fill remaining space.
   */
  width?: number;

  /**
   * Minimum pixel width. Honored during drag-to-resize.
   */
  minWidth?: number;

  /**
   * Maximum pixel width. Honored during drag-to-resize.
   */
  maxWidth?: number;

  /**
   * Truncate overflowing label text with an ellipsis. Off by default so
   * non-text children (icons, checkboxes, custom layouts) render as-is.
   */
  truncate?: boolean;

  /**
   * Override the Table's `resizable` setting for this column. Use
   * `resizable={false}` to opt out (typical for the last column).
   */
  resizable?: boolean;

  /**
   * Marks the header as interactive for sorting. Renders the `<Sort>`
   * component as the click/keyboard affordance and indicator.
   */
  sortable?: boolean;

  /**
   * Current sort direction. `null` or omitted means unsorted.
   */
  sortDirection?: SortDirection;

  /**
   * Override the sort indicator's directional icon. Passed straight to
   * `<Sort icon>`. Only used when `sortable` is true.
   */
  sortIcon?: ComponentType<{ className?: string }>;

  /**
   * Icon shown in the unsorted state (when `sortDirection` is `null`).
   * Passed straight to `<Sort neutralIcon>`. Without this, no indicator
   * renders when the column is not actively sorted.
   */
  sortNeutralIcon?: ComponentType<{ className?: string }>;

  /**
   * Whether this column is currently being dragged. Applies the "dragging"
   * theme slot (dimmed appearance). Combine with the standard HTML `draggable`
   * attribute and HTML5 drag-and-drop handlers for column reordering.
   */
  dragging?: boolean;

  /**
   * Whether the header is disabled.
   */
  disabled?: boolean;

  /**
   * Callback invoked when the user toggles sorting on this column. Receives
   * the next direction (asc → desc → null → asc).
   */
  onSort?: (next: SortDirection) => void;

  /**
   * Standard click handler. Body cells don't trigger sorting — use `onSort`
   * for that.
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;

  /**
   * Theme override for this slot.
   */
  theme?: TableTheme;
}

const isDraggable = (value: unknown): boolean =>
  value === true || value === 'true';

export const TableHeaderCell = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableHeaderCellProps>
>(
  (
    {
      columnId,
      align = 'left',
      width,
      minWidth,
      maxWidth,
      truncate = false,
      resizable,
      sortable = false,
      sortDirection = null,
      sortIcon,
      sortNeutralIcon,
      dragging = false,
      disabled = false,
      onSort,
      onClick,
      draggable,
      className,
      style,
      theme: customTheme,
      children,
      ...rest
    },
    ref
  ) => {
    const ctx = useTableContext();
    const fallbackTheme: TableTheme = useComponentTheme('table', customTheme);
    const theme = ctx?.theme ?? fallbackTheme;
    const size = ctx?.size ?? 'base';
    const elRef = useRef<HTMLDivElement | null>(null);
    const cleanupRef = useRef<(() => void) | null>(null);

    // Tear down any in-flight resize listeners if the cell unmounts mid-drag.
    useEffect(
      () => () => {
        cleanupRef.current?.();
        cleanupRef.current = null;
      },
      []
    );

    const ctxWidth =
      columnId != null && ctx && ctx.columnWidths[columnId] != null
        ? ctx.columnWidths[columnId]
        : undefined;
    const resolvedWidth = ctxWidth ?? width;

    const flexStyle: CSSProperties =
      resolvedWidth != null
        ? { flex: `0 0 ${resolvedWidth}px`, width: `${resolvedWidth}px` }
        : { flex: '1 1 0', minWidth: 0 };
    if (minWidth != null) flexStyle.minWidth = `${minWidth}px`;
    if (maxWidth != null) flexStyle.maxWidth = `${maxWidth}px`;

    const canResize = !!ctx && columnId != null && (resizable ?? ctx.resizable);

    const handleResizeStart = useCallback(
      (event: MouseEvent<HTMLSpanElement> | TouchEvent<HTMLSpanElement>) => {
        if (!canResize || !ctx || columnId == null) return;
        event.preventDefault();
        event.stopPropagation();
        const startX =
          'touches' in event ? event.touches[0].clientX : event.clientX;
        const startWidth =
          ctxWidth ??
          width ??
          elRef.current?.getBoundingClientRect().width ??
          DEFAULT_COLUMN_WIDTH;

        ctx.setResizingColumnId(columnId);

        const onPointerMove = (clientX: number) => {
          let next = startWidth + (clientX - startX);
          if (minWidth != null) next = Math.max(minWidth, next);
          if (maxWidth != null) next = Math.min(maxWidth, next);
          next = Math.max(40, next);
          ctx.setColumnWidth(columnId, next);
        };
        const onMouseMove = (mv: globalThis.MouseEvent) =>
          onPointerMove(mv.clientX);
        const onTouchMove = (mv: globalThis.TouchEvent) =>
          onPointerMove(mv.touches[0].clientX);
        const cleanup = () => {
          ctx.setResizingColumnId(null);
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', cleanup);
          document.removeEventListener('touchmove', onTouchMove);
          document.removeEventListener('touchend', cleanup);
          cleanupRef.current = null;
        };
        cleanupRef.current = cleanup;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', cleanup);
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', cleanup);
      },
      [canResize, ctx, columnId, ctxWidth, width, minWidth, maxWidth]
    );

    const ariaSort = sortable
      ? sortDirection != null
        ? SORT_ARIA[sortDirection]
        : 'none'
      : undefined;

    const draggableActive = isDraggable(draggable);

    const setRef = useCallback(
      (node: HTMLDivElement | null) => {
        elRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as RefObject<HTMLDivElement | null>).current = node;
      },
      [ref]
    );

    const label = truncate ? (
      <span className="truncate w-full">{children}</span>
    ) : (
      children
    );

    return (
      <div
        ref={setRef}
        role="columnheader"
        aria-sort={ariaSort}
        aria-disabled={disabled || undefined}
        draggable={draggable}
        onClick={disabled ? undefined : onClick}
        style={{ ...flexStyle, ...style }}
        className={cn(
          theme.header.cell.base,
          theme.header.cell.size[size],
          theme.header.cell.align[align],
          draggableActive && !disabled && theme.header.cell.draggable,
          dragging && theme.header.cell.dragging,
          disabled && theme.header.cell.disabled,
          className,
          'relative flex items-center min-w-0'
        )}
        {...rest}
      >
        {sortable ? (
          <Sort
            direction={sortDirection ?? undefined}
            onSort={disabled ? undefined : onSort}
            disabled={disabled}
            icon={sortIcon}
            neutralIcon={sortNeutralIcon}
            className={cn(
              'flex-1 min-w-0',
              !disabled && theme.header.cell.sortable,
              !!sortDirection && theme.header.cell.sorted
            )}
          >
            {label}
          </Sort>
        ) : (
          label
        )}
        {canResize && (
          <span
            onMouseDown={handleResizeStart}
            onTouchStart={handleResizeStart}
            className={cn(
              theme.header.cell.resizeHandle.base,
              ctx?.resizingColumnId === columnId
                ? theme.header.cell.resizeHandle.active
                : theme.header.cell.resizeHandle.hover
            )}
            aria-hidden="true"
          />
        )}
      </div>
    );
  }
);

TableHeaderCell.displayName = 'TableHeaderCell';
