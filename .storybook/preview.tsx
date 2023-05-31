import { ThemeProvider, darkTheme } from '../src/utils/Theme';
import theme from './theme';

const withProvider = (Story, context) => (
  <ThemeProvider value={darkTheme}>
    <Story {...context} />
  </ThemeProvider>
);

const preview = {
  decorators: [withProvider],
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
    docs: {
      theme
    }
  }
};

export default preview;