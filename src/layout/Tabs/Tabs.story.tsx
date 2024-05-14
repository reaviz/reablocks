import React from 'react';
import { Tabs } from './Tabs';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

export default {
  title: 'Components/Layout/Tabs',
  components: Tabs,
  subComponents: {
    TabList,
    Tab,
    TabPanel
  }
};

export const Simple = () => (
  <Tabs>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanel>Tab 1 Content</TabPanel>
    <TabPanel>Tab 2 Content</TabPanel>
    <TabPanel>Tab 3 Content</TabPanel>
  </Tabs>
);

export const Variants = () => (
  <div className="flex flex-col gap-12 bg-panel p-40">
    <Tabs variant="primary">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>This is content for primary tab 1</TabPanel>
      <TabPanel>This is content for primary tab 2</TabPanel>
      <TabPanel>This is content for primary tab 3</TabPanel>
    </Tabs>
    <Tabs variant="secondary">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>This is content for secondary tab 1</TabPanel>
      <TabPanel>This is content for secondary tab 2</TabPanel>
      <TabPanel>This is content for secondary tab 3</TabPanel>
    </Tabs>
    <Tabs variant="tertiary">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>This is content for secondary tab 1</TabPanel>
      <TabPanel>This is content for secondary tab 2</TabPanel>
      <TabPanel>This is content for secondary tab 3</TabPanel>
    </Tabs>
  </div>
);

export const Sizes = () => (
  <div className="flex flex-col gap-12">
    <Tabs size="small">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>This is content for small tab 1</TabPanel>
      <TabPanel>This is content for small tab 2</TabPanel>
      <TabPanel>This is content for small tab 3</TabPanel>
    </Tabs>
    <Tabs size="medium">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>This is content for medium tab 1</TabPanel>
      <TabPanel>This is content for medium tab 2</TabPanel>
      <TabPanel>This is content for medium tab 3</TabPanel>
    </Tabs>
    <Tabs size="large">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanel>This is content for large tab 1</TabPanel>
      <TabPanel>This is content for large tab 2</TabPanel>
      <TabPanel>This is content for large tab 3</TabPanel>
    </Tabs>
  </div>
);

export const DefaultIndex = () => (
  <Tabs defaultIndex={1}>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanel>Tab 1 Content</TabPanel>
    <TabPanel>Tab 2 Content</TabPanel>
    <TabPanel>Tab 3 Content</TabPanel>
  </Tabs>
);

export const DefaultSelection = () => (
  <Tabs selectedIndex={2}>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanel>Tab 1 Content</TabPanel>
    <TabPanel>Tab 2 Content</TabPanel>
    <TabPanel>Tab 3 Content</TabPanel>
  </Tabs>
);

export const Disabled = () => (
  <Tabs>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab disabled>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanel>Tab 1 Content</TabPanel>
    <TabPanel>Tab 2 Content</TabPanel>
    <TabPanel>Tab 3 Content</TabPanel>
  </Tabs>
);

export const Rtl = () => (
  <Tabs direction="rtl" style={{ width: 500 }}>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab disabled>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanel>Tab 1 Content</TabPanel>
    <TabPanel>Tab 2 Content</TabPanel>
    <TabPanel>Tab 3 Content</TabPanel>
  </Tabs>
);
