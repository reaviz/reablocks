// url=https://www.figma.com/design/UNsSJCvXTCFNkEJgNEeAfS/Unify-DS-MK_2.0-CORE?node-id=6459-9854&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
  Sm: 24, // var(--avatar-details-size-container-sm)
  'Md (Base)': 32, // var(--avatar-details-size-container-md)
  Lg: 48, // var(--avatar-details-size-container-lg)
  Xl: 80 // var(--avatar-details-size-container-xl)
});

const isText = instance.getEnum('Type', { Initials: true });
const text = instance.getString('Text');

export default {
  example: figma.code`<Avatar size={${size}} ${isText ? `name="${text}"` : ''} />`,
  imports: ['import { Avatar } from "elements/Avatar"'],
  id: 'avatar'
};
