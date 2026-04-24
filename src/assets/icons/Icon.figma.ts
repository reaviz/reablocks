// TODO: replace with the Figma node URL for the Icon component
// url=https://www.figma.com/design/UNsSJCvXTCFNkEJgNEeAfS/Unify-DS-MK_2.0-CORE?node-id=6369-27702&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

const rawName = instance.getPropertyValue('Variant') as string;

const componentName = rawName
  .split(/[-_\s]+/)
  .map(part => part.charAt(0).toUpperCase() + part.slice(1))
  .join('');

const importStmt = `import ${componentName} from "assets/icons/${rawName}.svg"`;

export default {
  example: figma.code`<${componentName} />`,
  imports: [importStmt],
  id: 'icon'
};
