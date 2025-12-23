import React from 'react';
import figma from '@figma/code-connect';
import { Tree } from './Tree';
import { TreeNode } from './TreeNode';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Tree component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Tree,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TREE_NODE_ID',
  {
    example: () => (
      <Tree>
        <TreeNode label="Parent 1" expanded>
          <TreeNode label="Child 1.1" />
          <TreeNode label="Child 1.2" />
        </TreeNode>
        <TreeNode label="Parent 2" expanded>
          <TreeNode label="Child 2.1" />
          <TreeNode label="Child 2.2" expanded>
            <TreeNode label="Grandchild 2.2.1" />
            <TreeNode label="Grandchild 2.2.2" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="Parent 3" />
      </Tree>
    )
  }
);

/**
 * Variant: Simple Tree
 */
figma.connect(
  Tree,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TREE_SIMPLE_NODE_ID',
  {
    variant: { Type: 'Simple' },
    example: () => (
      <Tree>
        <TreeNode label="Folder 1" expanded>
          <TreeNode label="File 1.1" />
          <TreeNode label="File 1.2" />
        </TreeNode>
        <TreeNode label="Folder 2">
          <TreeNode label="File 2.1" />
        </TreeNode>
      </Tree>
    )
  }
);

/**
 * Variant: Collapsed Tree
 */
figma.connect(
  Tree,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TREE_COLLAPSED_NODE_ID',
  {
    variant: { State: 'Collapsed' },
    example: () => (
      <Tree>
        <TreeNode label="Folder 1">
          <TreeNode label="File 1.1" />
          <TreeNode label="File 1.2" />
        </TreeNode>
        <TreeNode label="Folder 2">
          <TreeNode label="File 2.1" />
        </TreeNode>
      </Tree>
    )
  }
);

/**
 * Variant: Expanded Tree
 */
figma.connect(
  Tree,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TREE_EXPANDED_NODE_ID',
  {
    variant: { State: 'Expanded' },
    example: () => (
      <Tree>
        <TreeNode label="Root" expanded>
          <TreeNode label="Level 1" expanded>
            <TreeNode label="Level 2" expanded>
              <TreeNode label="Level 3 Leaf" />
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </Tree>
    )
  }
);

/**
 * Variant: File System Tree
 */
figma.connect(
  Tree,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TREE_FILE_SYSTEM_NODE_ID',
  {
    variant: { Type: 'File System' },
    example: () => (
      <Tree>
        <TreeNode label="src" expanded>
          <TreeNode label="components" expanded>
            <TreeNode label="Button.tsx" />
            <TreeNode label="Input.tsx" />
          </TreeNode>
          <TreeNode label="utils" expanded>
            <TreeNode label="helpers.ts" />
          </TreeNode>
          <TreeNode label="index.ts" />
        </TreeNode>
        <TreeNode label="public">
          <TreeNode label="images" />
          <TreeNode label="styles" />
        </TreeNode>
      </Tree>
    )
  }
);

/**
 * Variant: Tree with Disabled Nodes
 */
figma.connect(
  Tree,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TREE_DISABLED_NODE_ID',
  {
    variant: { 'Has Disabled': true },
    example: () => (
      <Tree>
        <TreeNode label="Available Folder" expanded>
          <TreeNode label="Available File" />
          <TreeNode label="Disabled File" disabled />
        </TreeNode>
        <TreeNode label="Disabled Folder" disabled>
          <TreeNode label="Child" />
        </TreeNode>
      </Tree>
    )
  }
);
