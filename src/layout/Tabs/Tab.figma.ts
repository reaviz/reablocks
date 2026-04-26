// url=https://www.figma.com/design/UNsSJCvXTCFNkEJgNEeAfS/Unify-DS-MK_2.0-CORE?node-id=8414-5458&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

const text = instance.getString('Tab Label');
const disabled = instance.getEnum('State', { Disabled: true });
const showIcon = instance.getBoolean('Show Icon');
const icon = instance.findInstance('Icon')?.executeTemplate()?.example;

export default {
  example: figma.code`<Tab${disabled ? figma.code` disabled` : ''}>${showIcon && icon ? figma.code`${icon}` : ''}${text}</Tab>`,
  id: 'tab'
};
