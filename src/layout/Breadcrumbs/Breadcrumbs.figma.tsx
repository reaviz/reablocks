import React from 'react';
import figma from '@figma/code-connect';
import { Breadcrumbs } from './Breadcrumbs';
import { BreadcrumbList } from './BreadcrumbList';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbLink } from './BreadcrumbLink';
import { BreadcrumbPage } from './BreadcrumbPage';
import { BreadcrumbSeparator } from './BreadcrumbSeparator';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Breadcrumbs component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Breadcrumbs,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BREADCRUMBS_NODE_ID',
  {
    example: () => (
      <Breadcrumbs>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    )
  }
);

/**
 * Variant: Simple Breadcrumbs (2 levels)
 */
figma.connect(
  Breadcrumbs,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BREADCRUMBS_SIMPLE_NODE_ID',
  {
    variant: { Levels: '2' },
    example: () => (
      <Breadcrumbs>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    )
  }
);

/**
 * Variant: Complex Breadcrumbs (4 levels)
 */
figma.connect(
  Breadcrumbs,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BREADCRUMBS_COMPLEX_NODE_ID',
  {
    variant: { Levels: '4' },
    example: () => (
      <Breadcrumbs>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/category">Category</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/subcategory">Subcategory</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    )
  }
);
