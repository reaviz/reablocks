import React from 'react';
import { Tree } from './Tree';
import { TreeNode } from './TreeNode';

export default {
  title: 'Components/Layout/Tree',
  components: Tree,
  subcomponents: {
    TreeNode
  }
};

export const Simple = () => (
  <Tree>
    <TreeNode label="1" />
    <TreeNode label="2">
      <TreeNode label="2.1" />
      <TreeNode label="2.2">
        <TreeNode label="2.2.1" />
        <TreeNode label="2.2.2" />
        <TreeNode label="2.2.3" />
      </TreeNode>
      <TreeNode label="2.3">
        <TreeNode label="2.3.1" />
        <TreeNode label="2.3.2" />
      </TreeNode>
    </TreeNode>
    <TreeNode label="3" />
    <TreeNode label="4" />
  </Tree>
);

export const Expanded = () => (
  <Tree>
    <TreeNode label="1" />
    <TreeNode label="2" expanded={true}>
      <TreeNode label="2.1" />
      <TreeNode label="2.2" expanded={true}>
        <TreeNode label="2.2.1" />
        <TreeNode label="2.2.2" />
        <TreeNode label="2.2.3" />
      </TreeNode>
      <TreeNode label="2.3" expanded={true} disabled={true}>
        <TreeNode label="2.3.1" />
        <TreeNode label="2.3.2" />
      </TreeNode>
    </TreeNode>
    <TreeNode label="3" />
    <TreeNode label="4" />
  </Tree>
);
