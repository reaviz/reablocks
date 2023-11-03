import { Button } from './Button';

export default {
  title: 'Components/Elements/Button',
  component: Button
};

export const Variants = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Button variant="filled">Filled</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="text">Text</Button>
  </div>
);

export const Colors = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
    <Button disabled>Disabled</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);

const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="white"
    viewBox="0 0 16 16"
  >
    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
  </svg>
);

export const WithIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Button size="small" startAdornment={<BellIcon />}>
      Start Icon
    </Button>
    <Button size="small" endAdornment={<BellIcon />}>
      End Icon
    </Button>
    <Button size="medium" startAdornment={<BellIcon />}>
      Start Icon
    </Button>
    <Button size="medium" endAdornment={<BellIcon />}>
      End Icon
    </Button>
    <Button size="large" startAdornment={<BellIcon />}>
      Start Icon
    </Button>
    <Button size="large" endAdornment={<BellIcon />}>
      End Icon
    </Button>
  </div>
);
