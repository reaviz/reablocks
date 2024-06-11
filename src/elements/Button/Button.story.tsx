import { Button } from './Button';
import {
  extendTheme,
  PartialReablocksTheme
} from '../../utils/Theme/themes/extendTheme';
import { ThemeProvider } from '../../utils/Theme/ThemeProvider';
import { theme } from '../../utils/Theme/themes/theme';

export default {
  title: 'Components/Elements/Button',
  component: Button
};

export const Variants = () => (
  <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
    <div style={{ display: 'flex', gap: 10 }}>
      <Button variant="filled" color="default">
        Filled
      </Button>
      <Button variant="filled" color="primary">
        Filled
      </Button>
      <Button variant="filled" color="secondary">
        Filled
      </Button>
      <Button variant="filled" color="success">
        Filled
      </Button>
      <Button variant="filled" color="warning">
        Filled
      </Button>
      <Button variant="filled" color="error">
        Filled
      </Button>
      <Button variant="filled" disabled>
        Filled
      </Button>
    </div>
    <div style={{ display: 'flex', gap: 10 }}>
      <Button variant="outline" color="default">
        Outline
      </Button>
      <Button variant="outline" color="primary">
        Outline
      </Button>
      <Button variant="outline" color="secondary">
        Outline
      </Button>
      <Button variant="outline" color="success">
        Outline
      </Button>
      <Button variant="outline" color="warning">
        Outline
      </Button>
      <Button variant="outline" color="error">
        Outline
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
    </div>
    <div style={{ display: 'flex', gap: 10 }}>
      <Button variant="text" color="default">
        Text
      </Button>
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="text" color="secondary">
        Text
      </Button>
      <Button variant="text" color="success">
        Text
      </Button>
      <Button variant="text" color="warning">
        Text
      </Button>
      <Button variant="text" color="error">
        Text
      </Button>
      <Button variant="text" disabled>
        Text
      </Button>
    </div>
  </div>
);

export const Colors = () => (
  <div className="light:bg-white p-24" style={{ display: 'flex', gap: 10 }}>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
    <Button disabled>Disabled</Button>
  </div>
);

export const TextColors = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Button variant="text">Default</Button>
    <Button variant="text" color="primary">
      Primary
    </Button>
    <Button variant="text" color="secondary">
      Secondary
    </Button>
    <Button variant="text" color="success">
      Success
    </Button>
    <Button variant="text" color="warning">
      Warning
    </Button>
    <Button variant="text" color="error">
      Error
    </Button>
    <Button variant="text" disabled>
      Disabled
    </Button>
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Button variant="filled" disabled>
      Filled
    </Button>
    <Button variant="outline" disabled>
      Outline
    </Button>
    <Button variant="text" disabled>
      Text
    </Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);

export const FullWidth = () => (
  <div
    style={{ display: 'flex', width: '400px', alignItems: 'center', gap: 10 }}
  >
    <Button fullWidth>Full Width</Button>
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

export const CustomTheme = () => {
  const customTheme: PartialReablocksTheme = {
    components: {
      button: {
        base: 'bg-lime-600 text-gray-300',
        sizes: {
          small: 'p-2',
          medium: 'p-3',
          large: 'p-4'
        },
        colors: {
          default: {
            filled: 'bg-lime-600 hover:bg-lime-700',
            outline: 'border-lime-600',
            text: 'text-gray-300'
          }
        }
      }
    }
  };

  return (
    <ThemeProvider theme={extendTheme(theme, customTheme)}>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button variant="filled">Filled</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
    </ThemeProvider>
  );
};

export const Gradients = () => {
  const customTheme: PartialReablocksTheme = {
    components: {
      button: {
        colors: {
          primary: {
            filled:
              'bg-button-gradient hover:bg-button-gradient-hover light:bg-button-gradient-light light:hover:bg-button-gradient-hover-light'
          },
          secondary: {
            filled: [
              'bg-transparent',
              'bg-[linear-gradient(283deg,_#E6E6F0_0%,_#E6E6F000_100%)]',
              'hover:bg-[linear-gradient(283deg,_#E6E6F0_0%,_#E6E6F033_100%)]',
              'light:bg-[linear-gradient(283deg,_#E6E6F0_0%,_#E6E6F000_100%)]',
              'light:hover:bg-[linear-gradient(283deg,_#E6E6F0_0%,_#E6E6F033_100%)]',
              'text-black'
            ].join(' ')
          },
          success: {
            filled: [
              'bg-transparent',
              'bg-[linear-gradient(103deg,_#469D1D00_0%,_#469D1D_100%)]',
              'hover:bg-[linear-gradient(103deg,_#80CE5B33_0%,_#80CE5B_100%)]'
            ].join(' ')
          },
          warning: {
            filled: [
              'bg-transparent',
              'bg-[linear-gradient(103deg,_#CB6E0000_0%,_#CB6E00_100%)]',
              'hover:bg-[linear-gradient(103deg,_#F8A34033_0%,_#F8A340_100%)]'
            ].join(' ')
          },
          error: {
            filled: [
              'bg-transparent',
              'bg-[linear-gradient(103deg,_#B7000600_0%,_#B70006_100%)]',
              'hover:bg-[linear-gradient(103deg,#F7BFC133_0%,_#E84045_100%)]'
            ].join(' ')
          }
        }
      }
    }
  };

  return (
    <ThemeProvider theme={extendTheme(theme, customTheme)}>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button variant="filled" color="primary">
          Primary
        </Button>
        <Button variant="filled" color="secondary">
          Secondary
        </Button>
        <Button variant="filled" color="success">
          Success
        </Button>
        <Button variant="filled" color="warning">
          Warning
        </Button>
        <Button variant="filled" color="error">
          Error
        </Button>
      </div>
    </ThemeProvider>
  );
};
