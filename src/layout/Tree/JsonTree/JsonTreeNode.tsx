import React, { FC, useCallback, useMemo } from 'react';
import { TreeNode } from '@/layout/Tree/TreeNode';
import { JsonTreeData } from './utils';
import { useComponentTheme } from '@/utils/Theme/hooks';
import { JsonTreeTheme } from './JsonTreeTheme';
import { twMerge } from 'tailwind-merge';
import { Ellipsis } from '@/data/Ellipsis';
import { useInfinityList } from '@/data/InfinityList';

export interface JsonTreeNodeProps {
  /**
   * The data to be rendered as a JSON tree.
   */
  data?: JsonTreeData;

  /**
   * The CSS class name to be applied to the JSON tree node.
   */
  className?: string;

  /**
   * If true, the count of child nodes will be shown next to each node.
   */
  showCount?: boolean;

  /**
   * If true, empty nodes will be shown in the JSON tree.
   */
  showEmpty?: boolean;

  /**
   * The depth of the JSON tree node. This is typically used for indentation purposes.
   */
  depth?: number;

  /**
   * If true, all nodes in the JSON tree will be expanded by default.
   */
  showAll?: boolean;

  /**
   * The limit for the number of nodes to show when `showAll` is false.
   */
  showAllLimit?: number;

  /**
   * The depth at which the JSON tree nodes should be expanded by default.
   */
  expandDepth?: number;

  /**
   * Theme for the Json Tree
   */
  theme?: JsonTreeTheme;

  /**
   * If true, long text in nodes will be truncated and replaced with an ellipsis.
   */
  ellipsisText?: boolean;

  /**
   * The maximum length of text in a node before it is truncated and replaced with an ellipsis.
   */
  ellipsisTextLength?: number;
}

export const JsonTreeNode: FC<JsonTreeNodeProps> = ({
  depth,
  data,
  expandDepth,
  className,
  showCount,
  showEmpty,
  showAll,
  showAllLimit,
  ellipsisText,
  ellipsisTextLength,
  theme: customTheme
}) => {
  const theme = useComponentTheme('jsonTree', customTheme);
  const type = data.type;
  const isList = type === 'array' || type === 'object';
  const {
    data: listData,
    hasMore,
    showNext
  } = useInfinityList({
    items: isList ? data.data : [],
    size: showAll ? Infinity : showAllLimit,
    threshold: 3,
    nextSize: Infinity
  });

  const renderExpandableNode = useCallback(() => {
    const label = type === 'array' ? 'items' : 'keys';
    const symbol = type === 'array' ? '[]' : '{}';

    return (
      <>
        <span className={twMerge(theme.node.label)}>{data.label}</span>
        <span className={twMerge(theme.node.symbol)}>{symbol}</span>
        {showCount && (
          <span className={twMerge(theme.node.count)}>
            {`(${data.data.length.toLocaleString()} ${label})`}
          </span>
        )}
      </>
    );
  }, [data, theme, type, showCount]);

  const renderPrimativeNode = useCallback(() => {
    const ellipsis = type === 'string' && ellipsisText;
    const showDelimeter = data.label !== null && data.label !== undefined;
    const isEmpty = data.data === null || data.data === undefined;
    const isEmptyString = data.data === '';
    let valueLabel = data.data?.toString();
    if (showEmpty) {
      if (isEmptyString) {
        valueLabel = '""';
      } else if (isEmpty) {
        valueLabel = 'null';
      }
    }

    if (!showEmpty && (isEmpty || isEmptyString)) {
      return null;
    }

    return (
      <>
        <span className={twMerge(theme.node.label)}>{data.label}</span>
        {showDelimeter && (
          <span className={twMerge(theme.node.delimiter)}>:</span>
        )}
        <span className={twMerge(theme.node.value)}>
          {ellipsis && !isEmptyString ? (
            <Ellipsis value={data.data} limit={ellipsisTextLength} />
          ) : (
            valueLabel
          )}
        </span>
      </>
    );
  }, [data, showEmpty, ellipsisText, ellipsisTextLength, theme, type]);

  const isNestedData = useMemo(
    () => data.type === 'array' || data.type === 'object',
    [data.type]
  );
  const isNestedDataEmpty = useMemo(() => {
    if (isNestedData) {
      return data.type === 'array'
        ? data.data.length === 0
        : Object.keys(data.data).length === 0;
    }

    return false;
  }, [data.data, data.type, isNestedData]);

  if (!showEmpty && isNestedDataEmpty) {
    return null;
  }

  return (
    <TreeNode
      className={className}
      expanded={depth < expandDepth}
      label={
        <>
          {type === 'array' || type === 'object'
            ? renderExpandableNode()
            : renderPrimativeNode()}
        </>
      }
    >
      {isNestedData && !isNestedDataEmpty && (
        <>
          {listData.map(item => (
            <JsonTreeNode
              key={item.id}
              data={item}
              depth={depth + 1}
              expandDepth={expandDepth}
              type={item.type}
              ellipsisText={ellipsisText}
              ellipsisTextLength={ellipsisTextLength}
              showCount={showCount}
              showEmpty={showEmpty}
              showAll={showAll}
              showAllLimit={showAllLimit}
            />
          ))}
        </>
      )}
      {isList && hasMore && (
        <span className={twMerge(theme.pager)} onClick={() => showNext()}>
          Show all
        </span>
      )}
    </TreeNode>
  );
};
