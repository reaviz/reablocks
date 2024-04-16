import React, { FC } from 'react';
import { Tree } from '../Tree';
import { JsonTreeNode } from './JsonTreeNode';
import { parseJsonTree } from './utils';

export interface JsonTreeProps {
  data: { [key: string]: any };
  showAll?: boolean;
  showAllLimit?: number;
  showAllThreshold?: number;
  showCount?: boolean;
  showEmpty?: boolean;
  ellipsisText?: boolean;
  ellipsisTextLength?: number;
  expandDepth?: number;
  className?: string;
}

export const JsonTree: FC<JsonTreeProps> = ({
  data,
  className,
  expandDepth,
  ...rest
}) => {
  const tree = parseJsonTree({ data });

  return (
    <div tabIndex={-1}>
      <Tree className={className} {...rest}>
        <JsonTreeNode
          key={`node-${tree.id}`}
          depth={1}
          data={tree}
          expandDepth={expandDepth}
        />
      </Tree>
    </div>
  );
};

JsonTree.defaultProps = {
  showAll: false,
  showAllLimit: 10,
  showAllThreshold: 5,
  showCount: true,
  showEmpty: true,
  ellipsisText: true,
  ellipsisTextLength: 150,
  expandDepth: 2
};
