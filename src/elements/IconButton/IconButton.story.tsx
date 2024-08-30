import { IconButton } from './IconButton';
import { Stack } from '../../layout';
import {
  extendTheme,
  PartialReablocksTheme
} from '../../utils/Theme/themes/extendTheme';
import { ThemeProvider } from '../../utils/Theme/ThemeProvider';
import { theme } from '../../utils/Theme/themes/theme';

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

export const ColorsBackground = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium" variant="filled">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="success">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="warning">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" color="error">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="filled" disabled>
      <BellIcon />
    </IconButton>
  </div>
);

export const ColorsIcons = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium" variant="text">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="success">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="warning">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" color="error">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="text" disabled>
      <BellIcon />
    </IconButton>
  </div>
);

export const ColorsOutline = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <IconButton size="medium" variant="outline">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="primary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="secondary">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="success">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="warning">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" color="error">
      <BellIcon />
    </IconButton>
    <IconButton size="medium" variant="outline" disabled>
      <BellIcon />
    </IconButton>
  </div>
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
  </div>
);

export const Square = () => {
  const iconTheme: PartialReablocksTheme = {
    components: {
      button: {
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
