import { cn } from '@/utils';

import { ThemeProvider } from '../../utils/Theme/ThemeProvider';
import type { PartialReablocksTheme } from '../../utils/Theme/themes/extendTheme';
import { extendTheme } from '../../utils/Theme/themes/extendTheme';
import { theme } from '../../utils/Theme/themes/theme';
import { Button } from './Button';

export default {
  title: 'Components/Elements/Button',
  component: Button,
};

export const Variants = () => (
  <div className="flex items-center gap-2">
    <Button variant="filled" color="primary">
      Filled
    </Button>
    <Button variant="outline" color="primary">
      Outline
    </Button>
    <Button variant="text" color="primary">
      Text
    </Button>
    <Button variant="ghost" color="primary">
      Ghost
    </Button>
  </div>
);

export const Colors = () => (
  <div className="grid grid-cols-4 gap-2">
    <div>Filled</div>
    <Button color="primary" variant="filled" startAdornment={<BellIcon />}>
      Primary
    </Button>
    <Button color="secondary" variant="filled" startAdornment={<BellIcon />}>
      Secondary
    </Button>
    <Button color="destructive" variant="filled" startAdornment={<BellIcon />}>
      Destructive
    </Button>
    <div>Outlined</div>
    <Button color="primary" variant="outline" startAdornment={<BellIcon />}>
      Primary
    </Button>
    <Button color="secondary" variant="outline" startAdornment={<BellIcon />}>
      Secondary
    </Button>
    <Button color="destructive" variant="outline" startAdornment={<BellIcon />}>
      Destructive
    </Button>
    <div>Text</div>
    <Button color="primary" variant="text" startAdornment={<BellIcon />}>
      Primary
    </Button>
    <Button color="secondary" variant="text" startAdornment={<BellIcon />}>
      Secondary
    </Button>
    <Button color="destructive" variant="text" startAdornment={<BellIcon />}>
      Destructive
    </Button>
    <div>Ghost</div>
    <Button color="primary" variant="ghost" startAdornment={<BellIcon />}>
      Primary
    </Button>
    <Button color="secondary" variant="ghost" startAdornment={<BellIcon />}>
      Secondary
    </Button>
    <Button color="destructive" variant="ghost" startAdornment={<BellIcon />}>
      Destructive
    </Button>
  </div>
);

export const Disabled = () => (
  <div className="p-24 flex gap-2 flex-row">
    <div className="flex flex-col gap-2">
      <Button
        disabled
        color="primary"
        variant="filled"
        startAdornment={<BellIcon />}
      >
        Primary
      </Button>
      <Button
        disabled
        color="primary"
        variant="outline"
        startAdornment={<BellIcon />}
      >
        Primary
      </Button>
      <Button
        disabled
        color="primary"
        variant="text"
        startAdornment={<BellIcon />}
      >
        Primary
      </Button>
      <Button
        disabled
        color="primary"
        variant="ghost"
        startAdornment={<BellIcon />}
      >
        Primary
      </Button>
    </div>
    <div className="flex flex-col gap-2">
      <Button
        disabled
        color="secondary"
        variant="filled"
        startAdornment={<BellIcon />}
      >
        Secondary
      </Button>
      <Button
        disabled
        color="secondary"
        variant="outline"
        startAdornment={<BellIcon />}
      >
        Secondary
      </Button>
      <Button
        disabled
        color="secondary"
        variant="text"
        startAdornment={<BellIcon />}
      >
        Secondary
      </Button>
      <Button
        disabled
        color="secondary"
        variant="ghost"
        startAdornment={<BellIcon />}
      >
        Secondary
      </Button>
    </div>
    <div className="flex flex-col gap-2">
      <Button
        disabled
        color="destructive"
        variant="filled"
        startAdornment={<BellIcon />}
      >
        Destructive
      </Button>
      <Button
        disabled
        color="destructive"
        variant="outline"
        startAdornment={<BellIcon />}
      >
        Destructive
      </Button>
      <Button
        disabled
        color="destructive"
        variant="text"
        startAdornment={<BellIcon />}
      >
        Destructive
      </Button>
      <Button
        disabled
        color="destructive"
        variant="ghost"
        startAdornment={<BellIcon />}
      >
        Destructive
      </Button>
    </div>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Button color="primary" size="small" startAdornment={<BellIcon />}>
      Small
    </Button>
    <Button color="primary" size="medium" startAdornment={<BellIcon />}>
      Medium
    </Button>
    <Button color="primary" size="large" startAdornment={<BellIcon />}>
      Large
    </Button>
  </div>
);

export const FullWidth = () => (
  <div className="flex w-[400px] items-center gap-2">
    <Button color="primary" fullWidth>
      Full Width
    </Button>
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
        base: 'transition-colors text-neutrals-pure-white-dnt-900',
        sizes: {
          small: 'p-2',
          medium: 'p-3',
          large: 'p-4',
        },
        colors: {
          primary: {
            filled: 'bg-green-ion-sprout-500 hover:bg-green-ion-sprout-700',
            outline: 'border-green-ion-sprout-600',
            text: 'text-neutrals-pure-white-dnt-900',
          },
        },
      },
    },
  };

  return (
    <ThemeProvider
      theme={extendTheme(theme, customTheme, (source, target) => {
        if (typeof source === 'string' && typeof target === 'string') {
          return cn(source, target);
        }
        return undefined;
      })}
    >
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

export const CustomColor = () => {
  const customTheme: PartialReablocksTheme = {
    components: {
      button: {
        colors: {
          gradient: {
            filled:
              'bg-linear-to-r from-blue-skybolt-a-500 to-blue-hyperstream-500',
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={extendTheme(theme, customTheme)}>
      <Button color="gradient">Gradient</Button>
    </ThemeProvider>
  );
};

export const CustomVariant = () => {
  const customTheme: PartialReablocksTheme = {
    components: {
      button: {
        variants: {
          gradient: 'border rounded-lg',
        },
        colors: {
          primary: {
            gradient:
              'bg-linear-to-r from-blue-skybolt-a-500 to-blue-hyperstream-500 border-blue-hyperstream-500',
          },
          secondary: {
            gradient:
              'bg-linear-to-r from-pink-plasma-circuit-500 to-purple-fuchsia-a-500 border-pink-plasma-circuit-500',
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={extendTheme(theme, customTheme)}>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button variant="gradient" color="primary">
          Gradient - Default
        </Button>
        <Button variant="gradient" color="secondary">
          Gradient - Primary
        </Button>
      </div>
    </ThemeProvider>
  );
};

export const CustomSize = () => {
  const customTheme: PartialReablocksTheme = {
    components: {
      button: {
        sizes: {
          xsmall: 'text-xxs px-1 py-0.5',
          xlarge: 'text-xl px-6 py-3',
        },
      },
    },
  };

  return (
    <ThemeProvider theme={extendTheme(theme, customTheme)}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <Button size="xsmall">xsmall</Button>
        <Button size="xlarge">xlarge</Button>
      </div>
    </ThemeProvider>
  );
};
