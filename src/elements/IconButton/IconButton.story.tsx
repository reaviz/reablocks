import { Stack } from '../../layout';
import { ThemeProvider } from '../../utils/Theme/ThemeProvider';
import type { PartialReablocksTheme } from '../../utils/Theme/themes/extendTheme';
import { extendTheme } from '../../utils/Theme/themes/extendTheme';
import { theme } from '../../utils/Theme/themes/theme';
import { IconButton } from './IconButton';

export default {
  title: 'Components/Elements/IconButton',
  component: IconButton
};

const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
  </svg>
);

export const Variants = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="ghost">
      <BellIcon />
    </IconButton>
  </div>
);

export const Sizes = () => (
  <Stack>
    <IconButton size="small">
      <BellIcon />
    </IconButton>
    <IconButton size="medium">
      <BellIcon />
    </IconButton>
    <IconButton size="large">
      <BellIcon />
    </IconButton>
  </Stack>
);

export const ColorsFilled = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium" variant="filled" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="destructive">
      <BellIcon />
    </IconButton>
  </div>
);

export const ColorsOutline = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium" variant="outline" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="destructive">
      <BellIcon />
    </IconButton>
  </div>
);

export const ColorsText = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium" variant="text" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="destructive">
      <BellIcon />
    </IconButton>
  </div>
);

export const ColorsGhost = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium" variant="ghost" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="ghost" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="ghost" color="destructive">
      <BellIcon />
    </IconButton>
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton disabled size="medium" variant="filled">
      <BellIcon />
    </IconButton>
    <IconButton disabled size="medium" variant="outline">
      <BellIcon />
    </IconButton>
    <IconButton disabled size="medium" variant="text">
      <BellIcon />
    </IconButton>
    <IconButton disabled size="medium" variant="ghost">
      <BellIcon />
    </IconButton>
  </div>
);

export const Custom = () => {
  const iconTheme: PartialReablocksTheme = {
    components: {
      button: {
        colors: {
          primary: {
            filled:
              'bg-pink-plasma-circuit-400 hover:bg-pink-plasma-circuit-600'
          }
        },
        iconSizes: {
          small: 'p-1',
          medium: 'p-2',
          large: 'p-2.5'
        }
      }
    }
  };
  return (
    <ThemeProvider theme={extendTheme(theme, iconTheme)}>
      <Stack>
        <IconButton size="small">
          <BellIcon />
        </IconButton>
        <IconButton size="medium">
          <BellIcon />
        </IconButton>
        <IconButton size="large">
          <BellIcon />
        </IconButton>
      </Stack>
    </ThemeProvider>
  );
};
