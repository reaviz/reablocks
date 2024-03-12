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
