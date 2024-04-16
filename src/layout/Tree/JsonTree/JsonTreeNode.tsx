import React, { FC, useCallback } from 'react';
import { TreeNode } from '../TreeNode';
import { JsonTreeData } from './utils';

export interface JsonTreeNodeProps {
  data?: JsonTreeData;
  className?: string;
  depth?: number;
  expandDepth?: number;
}

export const JsonTreeNode: FC<JsonTreeNodeProps> = ({
  depth,
  data,
  expandDepth
}) => {
  const type = data.type;

  const renderExpandableNode = useCallback(() => {
    const label = type === 'array' ? 'items' : 'keys';
    return (
      <span>
        <span className="font-mono opacity-70">{data.label}</span>
        <span>{` (${data.data.length.toLocaleString()} ${label})`}</span>
      </span>
    );
  }, [data]);

  const renderPrimativeNode = useCallback(() => {
    return (
      <span>
        <span className="font-mono opacity-70">{data.label}</span>
        <span>{`: ${data.data}`}</span>
      </span>
    );
  }, [data]);

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
      {(data.type === 'array' || data.type === 'object') && (
        <>
          {data.data.map(item => (
            <JsonTreeNode
              key={item.id}
              data={item}
              depth={depth + 1}
              expandDepth={expandDepth}
              type={item.type}
            />
          ))}
        </>
      )}
    </TreeNode>
  );
};
