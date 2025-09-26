import React from 'react';

import { Tab } from './Tab';
import { TabList } from './TabList';
import { TabPanel } from './TabPanel';
import { Tabs } from './Tabs';

export default {
  title: 'Components/Layout/Tabs',
  components: Tabs,
  subComponents: {
    TabList,
    Tab,
    TabPanel,
  },
};

const Icon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.05037 2.43562C7.47505 1.70912 8.52499 1.70912 8.94967 2.43562L10.5591 5.18886L13.7314 5.81912C14.5791 5.98756 14.9104 7.02301 14.3178 7.65222L12.1512 9.95255L12.5125 13.0632C12.6106 13.9079 11.7541 14.5397 10.976 14.1966L8.00002 12.8845L5.02399 14.1966C4.24592 14.5397 3.38946 13.9079 3.48756 13.0632L3.84882 9.95255L1.68228 7.65222C1.08968 7.02301 1.42092 5.98756 2.26868 5.81912L5.44095 5.18886L7.05037 2.43562ZM8.00002 3.1889L6.34068 6.02753C6.25403 6.17577 6.10802 6.27978 5.93961 6.31324L2.67965 6.96093L4.9138 9.33306C5.03517 9.46193 5.09343 9.63781 5.07301 9.81365L4.69969 13.0282L7.75796 11.6797C7.91217 11.6117 8.08787 11.6117 8.24208 11.6797L11.3003 13.0282L10.927 9.81365C10.9066 9.63781 10.9649 9.46193 11.0862 9.33306L13.3204 6.96093L10.0604 6.31324C9.89202 6.27978 9.74601 6.17577 9.65936 6.02753L8.00002 3.1889Z"
      fill="currentColor"
    />
  </svg>
);

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
  <div className="flex flex-col gap-12">
    <Tabs variant="primary">
      <TabList>
        <Tab start={<Icon />}>Tab 1</Tab>
        <Tab start={<Icon />}>Tab 2</Tab>
        <Tab start={<Icon />}>Tab 3</Tab>
        <Tab start={<Icon />} disabled>
          Tab 4
        </Tab>
      </TabList>
      <TabPanel>This is content for primary tab 1</TabPanel>
      <TabPanel>This is content for primary tab 2</TabPanel>
      <TabPanel>This is content for primary tab 3</TabPanel>
    </Tabs>
    <Tabs variant="secondary">
      <TabList>
        <Tab start={<Icon />}>Tab 1</Tab>
        <Tab start={<Icon />}>Tab 2</Tab>
        <Tab start={<Icon />}>Tab 3</Tab>
        <Tab start={<Icon />} disabled>
          Tab 4
        </Tab>
      </TabList>
      <TabPanel>This is content for secondary tab 1</TabPanel>
      <TabPanel>This is content for secondary tab 2</TabPanel>
      <TabPanel>This is content for secondary tab 3</TabPanel>
    </Tabs>
    <Tabs variant="outlined">
      <TabList>
        <Tab start={<Icon />}>Tab 1</Tab>
        <Tab start={<Icon />}>Tab 2</Tab>
        <Tab start={<Icon />}>Tab 3</Tab>
        <Tab start={<Icon />} disabled>
          Tab 4
        </Tab>
      </TabList>
      <TabPanel>This is content for outlined tab 1</TabPanel>
      <TabPanel>This is content for outlined tab 2</TabPanel>
      <TabPanel>This is content for outlined tab 3</TabPanel>
    </Tabs>
    <Tabs variant="text">
      <TabList>
        <Tab start={<Icon />}>Tab 1</Tab>
        <Tab start={<Icon />}>Tab 2</Tab>
        <Tab start={<Icon />}>Tab 3</Tab>
        <Tab start={<Icon />} disabled>
          Tab 4
        </Tab>
      </TabList>
      <TabPanel>This is content for text tab 1</TabPanel>
      <TabPanel>This is content for text tab 2</TabPanel>
      <TabPanel>This is content for text tab 3</TabPanel>
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
