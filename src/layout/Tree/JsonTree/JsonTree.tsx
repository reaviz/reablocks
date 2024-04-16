import React, { FC } from 'react';
import { Tree } from '../Tree';
import { JsonTreeNode } from './JsonTreeNode';

export interface JsonTreeProps {
  data: { [key: string]: any };
  root?: boolean;
  allowCopy?: boolean;
  showAll?: boolean;
  showAllLimit?: number;
  showAllThreshold?: number;
  showCount: boolean;
  showEmpty: boolean;
  ellipsisText?: boolean;
  ellipsisTextLength?: number;
  expandDepth: number;
  className?: string;
}

export const JsonTree: FC<JsonTreeProps> = ({
  data,
  root,
  className,
  ...rest
}) => {
  return (
    <div tabIndex={-1}>
      <Tree className={className} {...rest}>
        {root && <JsonTreeNode index={0} depth={1} />}
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
  expandDepth: 2,
  root: true
};
