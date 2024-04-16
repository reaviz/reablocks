import React, { FC, PropsWithChildren, useCallback } from 'react';
import { TreeNode } from '../TreeNode';

export interface JsonTreeNodeProps extends PropsWithChildren {
  data?: any;
  className?: string;
  index?: number;
  depth?: number;
  expandDepth?: number;
  type?: string;
}

export const JsonTreeNode: FC<JsonTreeNodeProps> = ({
  depth,
  children,
  type,
  expandDepth
}) => {
  const renderExpandableNode = useCallback(() => {
    return <div>hi</div>;
  }, []);

  const renderPrimativeNode = useCallback(() => {
    return <div>hi</div>;
  }, []);

  return (
    <TreeNode
      expanded={depth < expandDepth}
      label={
        <span>
          {type === 'array' || type === 'object'
            ? renderExpandableNode()
            : renderPrimativeNode()}
        </span>
      }
    >
      {children}
    </TreeNode>
  );
};
