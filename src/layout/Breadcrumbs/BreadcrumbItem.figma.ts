// url=https://www.figma.com/design/UNsSJCvXTCFNkEJgNEeAfS/Unify-DS-MK_2.0-CORE?node-id=6568-4036&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

const text = instance.getString('Text');
const chevronIcon = instance.getBoolean('Chevron Icon');
const isSelected = instance.getEnum('State', { Selected: true });
// const showLeadIcon = instance.getBoolean('Lead Icon');
const leadIcon = instance.findInstance('Lead Icon')?.executeTemplate()?.example;

export default {
  example: figma.code`
    <BreadcrumbItem>
      ${
        isSelected
          ? figma.code`<BreadcrumbPage>${leadIcon}${text}</BreadcrumbPage>`
          : figma.code`<BreadcrumbLink href="#">${leadIcon}${text}</BreadcrumbLink>`
      }
    </BreadcrumbItem>${
      !isSelected && chevronIcon
        ? figma.code`
    <BreadcrumbSeparator />`
        : ''
    }
  `,
  imports: [
    'import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "layout/Breadcrumbs"'
  ],
  id: 'breadcrumb-item'
};
