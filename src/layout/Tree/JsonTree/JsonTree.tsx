import React, { FC } from 'react';
import { Tree } from '@/layout/Tree/Tree';
import { JsonTreeNode } from './JsonTreeNode';
import { parseJsonTree } from './utils';

export interface JsonTreeProps {
  /**
   * The data to be rendered as a JSON tree.
   */
  data: { [key: string]: any };

  /**
   * If true, all nodes in the JSON tree will be expanded by default.
   */
  showAll?: boolean;

  /**
   * The limit for the number of nodes to show when `showAll` is true.
   */
  showAllLimit?: number;

  /**
   * If true, the count of child nodes will be shown next to each node.
   */
  showCount?: boolean;

  /**
   * If true, empty nodes will be shown in the JSON tree.
   */
  showEmpty?: boolean;

  /**
   * If true, long text in nodes will be truncated and replaced with an ellipsis.
   */
  ellipsisText?: boolean;

  /**
   * The maximum length of text in a node before it is truncated and replaced with an ellipsis.
   */
  ellipsisTextLength?: number;

  /**
   * The depth at which the JSON tree nodes should be expanded by default.
   */
  expandDepth?: number;

  /**
   * The CSS class name to be applied to the JSON tree.
   */
  className?: string;
}

export const JsonTree: FC<JsonTreeProps> = ({
  data,
  className,
  expandDepth = 2,
  showEmpty = true,
  showCount = true,
  showAll = false,
  showAllLimit = 10,
  ellipsisText = true,
  ellipsisTextLength = 150,
  ...rest
}) => {
  const tree = parseJsonTree({ data, showEmpty });

  return (
    <div tabIndex={-1}>
      <Tree className={className} {...rest}>
        <JsonTreeNode
          key={`node-${tree.id}`}
          depth={1}
          data={tree}
          showEmpty={showEmpty}
          showCount={showCount}
          expandDepth={expandDepth}
          ellipsisText={ellipsisText}
          ellipsisTextLength={ellipsisTextLength}
          showAll={showAll}
          showAllLimit={showAllLimit}
        />
      </Tree>
    </div>
  );
};
