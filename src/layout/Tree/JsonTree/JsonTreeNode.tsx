import React, { FC, useCallback } from 'react';
import { TreeNode } from '../TreeNode';
import { JsonTreeData } from './utils';
import { useComponentTheme } from '../../../utils/Theme/hooks';
import { JsonTreeTheme } from './JsonTreeTheme';
import { twMerge } from 'tailwind-merge';
import { Ellipsis } from '../../../data/Ellipsis';

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
   * The depth of the JSON tree node. This is typically used for indentation purposes.
   */
  depth?: number;

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
  ellipsisText,
  ellipsisTextLength,
  theme: customTheme
}) => {
  const theme = useComponentTheme('jsonTree', customTheme);
  const type = data.type;

  const renderExpandableNode = useCallback(() => {
    const label = type === 'array' ? 'items' : 'keys';
    const symbol = type === 'array' ? '[]' : '{}';
    return (
      <>
        <span className={twMerge(theme.node.label)}>{data.label}</span>
        <span className={twMerge(theme.node.symbol)}>{symbol}</span>
        <span className={twMerge(theme.node.count)}>
          {`(${data.data.length.toLocaleString()} ${label})`}
        </span>
      </>
    );
  }, [data, theme, type]);

  const renderPrimativeNode = useCallback(() => {
    const ellipsis = type === 'string' && ellipsisText;
    return (
      <>
        <span className={twMerge(theme.node.label)}>{data.label}</span>
        <span className={twMerge(theme.node.delimiter)}>:</span>
        <span className={twMerge(theme.node.value)}>
          {ellipsis ? (
            <Ellipsis value={data.data} limit={ellipsisTextLength} />
          ) : (
            data.data
          )}
        </span>
      </>
    );
  }, [data, ellipsisText, ellipsisTextLength, theme, type]);

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
      {(data.type === 'array' || data.type === 'object') && (
        <>
          {data.data.map(item => (
            <JsonTreeNode
              key={item.id}
              data={item}
              depth={depth + 1}
              expandDepth={expandDepth}
              type={item.type}
              ellipsisText={ellipsisText}
              ellipsisTextLength={ellipsisTextLength}
            />
          ))}
        </>
      )}
    </TreeNode>
  );
};
