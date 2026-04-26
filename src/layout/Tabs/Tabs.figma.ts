// url=https://www.figma.com/design/UNsSJCvXTCFNkEJgNEeAfS/Unify-DS-MK_2.0-CORE?node-id=8777-805&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

const tabInstances = instance
  .findConnectedInstances(
    node => node.hasCodeConnect() && (node as any).codeConnectId?.() === 'tab',
    { traverseInstances: true }
  )
  .reverse();

// Variant and Size live on the Tab component in Figma, but are parent-level
// in Reablocks. Read them off the first Tab and lift up to <Tabs>.
const firstTab = tabInstances[0] as any;
const variant = firstTab?.getEnum('Variant', {
  Contained: 'primary',
  Underline: 'secondary',
  Outline: 'outlined',
  'Text Only': 'text'
});
const isLarge = firstTab?.getEnum('Size', { Lg: true });

const tabs = tabInstances.flatMap(
  item => (item as any).executeTemplate().example
);

export default {
  example: figma.code`
    <Tabs variant="${variant}"${isLarge ? figma.code` size="large"` : ''}>
      <TabList>
        ${tabs}
      </TabList>
    </Tabs>
  `,
  imports: ['import { Tabs, TabList } from "layout/Tabs"'],
  id: 'tabs'
};
