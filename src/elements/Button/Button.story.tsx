import { Button } from './Button';

export default {
  title: 'Components/Elements/Button',
  component: Button
};

export const Variants = () => (
  <>
    <Button variant="filled">Filled</Button>
    {'  '}
    <Button variant="outline" color="secondary">
      Outline
    </Button>
    {'  '}
    <Button variant="text" color="primary">
      Text
    </Button>
  </>
);

export const Colors = () => (
  <>
    <Button color="primary">Primary</Button>
    {'  '}
    <Button color="secondary">Secondary</Button>
    {'  '}
    <Button color="error">Error</Button>
  </>
);

export const Sizes = () => (
  <>
    <Button size="small">Small</Button>
    {'  '}
    <Button size="medium">Medium</Button>
    {'  '}
    <Button size="large">Large</Button>
  </>
);
