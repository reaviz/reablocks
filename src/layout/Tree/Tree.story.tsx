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

const SmileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="14"
    height="14"
    viewBox="0 0 30 30"
  >
    <path
      d="M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27 C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 20.534692 5 25 9.4653079 25 15 C 25 20.534692 20.534692 25 15 25 C 9.4653079 25 5 20.534692 5 15 C 5 9.4653079 9.4653079 5 15 5 z M 10.5 13 A 1.5 1.5 0 0 0 9 14.5 A 1.5 1.5 0 0 0 10.5 16 A 1.5 1.5 0 0 0 12 14.5 A 1.5 1.5 0 0 0 10.5 13 z M 19.5 13 A 1.5 1.5 0 0 0 18 14.5 A 1.5 1.5 0 0 0 19.5 16 A 1.5 1.5 0 0 0 21 14.5 A 1.5 1.5 0 0 0 19.5 13 z M 11.994141 18.992188 A 1.0001 1.0001 0 0 0 11.474609 20.808594 C 12.278916 21.393119 13.483333 22 15 22 C 16.516667 22 17.721548 21.393632 18.525391 20.808594 A 1.0002946 1.0002946 0 1 0 17.347656 19.191406 C 16.777499 19.606368 15.983333 20 15 20 C 14.016667 20 13.222084 19.606881 12.650391 19.191406 A 1.0001 1.0001 0 0 0 12.09375 18.992188 A 1.0001 1.0001 0 0 0 11.994141 18.992188 z"
      fill="white"
    ></path>
  </svg>
);

const FrownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="14"
    height="14"
    viewBox="0 0 30 30"
  >
    <path
      d="M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27 C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 20.534692 5 25 9.4653079 25 15 C 25 20.534692 20.534692 25 15 25 C 9.4653079 25 5 20.534692 5 15 C 5 9.4653079 9.4653079 5 15 5 z M 10.5 13 A 1.5 1.5 0 0 0 9 14.5 A 1.5 1.5 0 0 0 10.5 16 A 1.5 1.5 0 0 0 12 14.5 A 1.5 1.5 0 0 0 10.5 13 z M 19.5 13 A 1.5 1.5 0 0 0 18 14.5 A 1.5 1.5 0 0 0 19.5 16 A 1.5 1.5 0 0 0 21 14.5 A 1.5 1.5 0 0 0 19.5 13 z M 15 18 C 13.483333 18 12.278452 18.606368 11.474609 19.191406 A 1.0002946 1.0002946 0 0 0 12.652344 20.808594 C 13.222501 20.393632 14.016667 20 15 20 C 15.983333 20 16.777499 20.393632 17.347656 20.808594 A 1.0002946 1.0002946 0 1 0 18.525391 19.191406 C 17.721548 18.606368 16.516667 18 15 18 z"
      fill="white"
    ></path>
  </svg>
);

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

export const CustomArrow = () => (
  <Tree expandedIcon={<SmileIcon />} collapsedIcon={<FrownIcon />}>
    <TreeNode label="1" />
    <TreeNode label="2" expanded={true}>
      <TreeNode label="2.1" />
      <TreeNode label="2.2" expanded={false}>
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
