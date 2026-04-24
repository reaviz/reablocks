// url=https://www.figma.com/design/UNsSJCvXTCFNkEJgNEeAfS/Unify-DS-MK_2.0-CORE?node-id=6377-484&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

const children = instance.getString('Text');
const destructive = instance.getBoolean('Destructive');
const isLink = instance.getEnum('Type', { Link: true });
const isIcon = instance.getEnum('Type', { Icon: true });
const disabled = instance.getEnum('State', { Disabled: true });

const showLeadIcon = instance.getBoolean('Show Lead Icon');
const leadIcon = instance.findInstance('Lead Icon')?.executeTemplate()?.example;

const showTrailIcon = instance.getBoolean('Show Trail Icon');
const trailIcon = instance
  .findInstance('Trail Icon')
  ?.executeTemplate()?.example;

const variant = isLink
  ? 'text'
  : destructive
    ? 'filled'
    : instance.getEnum('Variant', {
        Primary: 'filled',
        Secondary: 'filled',
        Outline: 'outline',
        Ghost: 'ghost'
      });

const color = destructive
  ? 'destructive'
  : instance.getEnum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary',
      Outline: 'primary',
      Ghost: 'primary'
    });

const size = instance.getEnum('Size', {
  Sm: 'small',
  Md: 'medium',
  'Lg (Base)': 'large',
  Xs: 'xsmall'
});

export default {
  example: isIcon
    ? figma.code`
    <IconButton size="${size}" variant="${variant}" color="${color}"${disabled ? figma.code` disabled` : ''}>
      ${leadIcon ?? trailIcon}
    </IconButton>
  `
    : figma.code`
    <Button size="${size}" variant="${variant}" color="${color}"${showLeadIcon && leadIcon ? figma.code` start={${leadIcon}}` : ''}${showTrailIcon && trailIcon ? figma.code` end={${trailIcon}}` : ''}${disabled ? figma.code` disabled` : ''}>
      ${children}
    </Button>
  `,
  imports: [
    isIcon
      ? 'import { IconButton } from "elements/IconButton"'
      : 'import { Button } from "elements/Button"'
  ],
  id: 'button'
};
