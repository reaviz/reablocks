import React from 'react';
import figma from '@figma/code-connect';
import { Tabs } from './Tabs';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Tabs component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Tabs,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TABS_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      selectedIndex: figma.string('Selected Index'),
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary'
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),
      direction: figma.enum('Direction', {
        LTR: 'ltr',
        RTL: 'rtl'
      })
    },
    example: props => (
      <Tabs
        selectedIndex={parseInt(props.selectedIndex) || 0}
        variant={props.variant}
        size={props.size}
        direction={props.direction}
      >
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanel>Content for Tab 1</TabPanel>
        <TabPanel>Content for Tab 2</TabPanel>
        <TabPanel>Content for Tab 3</TabPanel>
      </Tabs>
    )
  }
);

/**
 * Variant: Primary Tabs
 */
figma.connect(
  Tabs,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TABS_PRIMARY_NODE_ID',
  {
    variant: { Variant: 'Primary' },
    example: () => (
      <Tabs variant="primary">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Details</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanel>Overview content</TabPanel>
        <TabPanel>Details content</TabPanel>
        <TabPanel>Settings content</TabPanel>
      </Tabs>
    )
  }
);

/**
 * Variant: Secondary Tabs
 */
figma.connect(
  Tabs,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TABS_SECONDARY_NODE_ID',
  {
    variant: { Variant: 'Secondary' },
    example: () => (
      <Tabs variant="secondary">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </Tabs>
    )
  }
);

/**
 * Variant: Small Tabs
 */
figma.connect(
  Tabs,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TABS_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => (
      <Tabs size="small">
        <TabList>
          <Tab>Small Tab 1</Tab>
          <Tab>Small Tab 2</Tab>
          <Tab>Small Tab 3</Tab>
        </TabList>
        <TabPanel>Content for small tab 1</TabPanel>
        <TabPanel>Content for small tab 2</TabPanel>
        <TabPanel>Content for small tab 3</TabPanel>
      </Tabs>
    )
  }
);

/**
 * Variant: Large Tabs
 */
figma.connect(
  Tabs,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TABS_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => (
      <Tabs size="large">
        <TabList>
          <Tab>Large Tab 1</Tab>
          <Tab>Large Tab 2</Tab>
          <Tab>Large Tab 3</Tab>
        </TabList>
        <TabPanel>Content for large tab 1</TabPanel>
        <TabPanel>Content for large tab 2</TabPanel>
        <TabPanel>Content for large tab 3</TabPanel>
      </Tabs>
    )
  }
);

/**
 * Variant: Tabs with Default Selected
 */
figma.connect(
  Tabs,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TABS_DEFAULT_SELECTED_NODE_ID',
  {
    variant: { 'Has Default': true },
    example: () => (
      <Tabs defaultIndex={1}>
        <TabList>
          <Tab>First</Tab>
          <Tab>Second (Selected)</Tab>
          <Tab>Third</Tab>
        </TabList>
        <TabPanel>First panel</TabPanel>
        <TabPanel>Second panel (shown by default)</TabPanel>
        <TabPanel>Third panel</TabPanel>
      </Tabs>
    )
  }
);
