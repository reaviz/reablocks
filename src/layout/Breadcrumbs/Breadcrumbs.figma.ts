// url=https://www.figma.com/design/UNsSJCvXTCFNkEJgNEeAfS/Unify-DS-MK_2.0-CORE?node-id=8777-863&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

const items = instance
  .findConnectedInstances(
    node =>
      node.hasCodeConnect() &&
      (node as any).codeConnectId?.() === 'breadcrumb-item',
    { traverseInstances: true }
  )
  .reverse()
  .flatMap(item => (item as any).executeTemplate().example);

export default {
  example: figma.code`
    <Breadcrumbs>
      <BreadcrumbList>
        ${items}
      </BreadcrumbList>
    </Breadcrumbs>
  `,
  imports: ['import { Breadcrumbs, BreadcrumbList } from "layout/Breadcrumbs"'],
  id: 'breadcrumb-group'
};
