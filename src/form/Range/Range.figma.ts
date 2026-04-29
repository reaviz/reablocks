// url=https://www.figma.com/design/UNsSJCvXTCFNkEJgNEeAfS/Unify-DS-MK_2.0-CORE?node-id=8464-3998&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

const isDouble = instance.getEnum('Type', { Double: true });
const disabled = instance.getBoolean('Disabled?');

export default {
  example: isDouble
    ? figma.code`<RangeDouble${disabled ? figma.code` disabled` : ''} />`
    : figma.code`<RangeSingle${disabled ? figma.code` disabled` : ''} />`,
  imports: [
    isDouble
      ? 'import { RangeDouble } from "form/Range"'
      : 'import { RangeSingle } from "form/Range"'
  ],
  id: 'range'
};
