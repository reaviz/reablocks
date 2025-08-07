import { useState } from 'react';
import { Chip } from './Chip';
import { Stack } from '@/layout';
import { ChipTheme, chipTheme } from '@/elements';

export default {
  title: 'Components/Elements/Chip',
  component: Chip
};

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <div style={{ display: 'flex', gap: 10 }}>
      <Chip start={<DemoIcon />}>Default</Chip>
      <Chip color="primary" start={<DemoIcon />}>
        Primary
      </Chip>
      <Chip color="secondary" start={<DemoIcon />}>
        Secondary
      </Chip>
      <Chip color="error" start={<DemoIcon />}>
        Error
      </Chip>
      <Chip color="success" start={<DemoIcon />}>
        Success
      </Chip>
      <Chip color="warning" start={<DemoIcon />}>
        Warning
      </Chip>
      <Chip color="info" start={<DemoIcon />}>
        Info
      </Chip>
    </div>
    <div style={{ display: 'flex', gap: 10 }}>
      <Chip variant="outline" start={<DemoIcon />}>
        Default
      </Chip>
      <Chip variant="outline" color="primary" start={<DemoIcon />}>
        Primary
      </Chip>
      <Chip variant="outline" color="secondary" start={<DemoIcon />}>
        Secondary
      </Chip>
      <Chip variant="outline" color="error" start={<DemoIcon />}>
        Error
      </Chip>
      <Chip variant="outline" color="success" start={<DemoIcon />}>
        Success
      </Chip>
      <Chip variant="outline" color="warning" start={<DemoIcon />}>
        Warning
      </Chip>
      <Chip variant="outline" color="info" start={<DemoIcon />}>
        Info
      </Chip>
    </div>
    <div style={{ display: 'flex', gap: 10 }}>
      <Chip variant="subtle">Default</Chip>
      <Chip variant="subtle" color="primary" start={<DemoIcon />}>
        Primary
      </Chip>
      <Chip variant="subtle" color="secondary">
        {' '}
        start={<DemoIcon />}Secondary
      </Chip>
      <Chip variant="subtle" color="error" start={<DemoIcon />}>
        Error
      </Chip>
      <Chip variant="subtle" color="success" start={<DemoIcon />}>
        Success
      </Chip>
      <Chip variant="subtle" color="warning" start={<DemoIcon />}>
        Warning
      </Chip>
      <Chip variant="subtle" color="info" start={<DemoIcon />}>
        Info
      </Chip>
    </div>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Chip size="small">Small</Chip>
    <Chip>Medium</Chip>
    <Chip size="large">Large</Chip>
  </div>
);

export const Adornment = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Chip start={<DemoIcon />}>Icon</Chip>
    <Chip end={<DemoIcon />}>Icon</Chip>
    <Chip start={'$'} end={<DemoIcon />}>
      Icon
    </Chip>
  </div>
);

export const StartAdornment = () => <Chip start={<DemoIcon />}>Icon</Chip>;

export const EndAdornment = () => <Chip end={<DemoIcon />}>Icon</Chip>;

export const StartEndAdornment = () => (
  <Chip start={'$'} end={<DemoIcon />}>
    Icon
  </Chip>
);

export const Variants = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Chip variant="filled">Filled</Chip>
    <Chip variant="outline">Outline</Chip>
  </div>
);

export const Selectable = () => {
  const [IsFilledSelected, setIsFilledSelected] = useState(false);
  const [isOutlineSelected, setIsOutlineSelected] = useState(false);

  return (
    <Stack>
      <Chip
        onClick={() => setIsFilledSelected(!IsFilledSelected)}
        selected={IsFilledSelected}
      >
        Selectable
      </Chip>
      <Chip
        variant="outline"
        onClick={() => setIsOutlineSelected(!isOutlineSelected)}
        selected={isOutlineSelected}
      >
        Selectable
      </Chip>
    </Stack>
  );
};

export const Disabled = () => (
  <Stack>
    <Chip disabled>Selectable</Chip>
    <Chip variant="outline" disabled>
      Selectable
    </Chip>
  </Stack>
);

const DemoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.05037 2.43562C7.47505 1.70912 8.52499 1.70912 8.94967 2.43562L10.5591 5.18886L13.7314 5.81912C14.5791 5.98756 14.9104 7.02301 14.3178 7.65222L12.1512 9.95255L12.5125 13.0632C12.6106 13.9079 11.7541 14.5397 10.976 14.1966L8.00002 12.8845L5.02399 14.1966C4.24592 14.5397 3.38946 13.9079 3.48756 13.0632L3.84882 9.95255L1.68228 7.65222C1.08968 7.02301 1.42092 5.98756 2.26868 5.81912L5.44095 5.18886L7.05037 2.43562ZM8.00002 3.1889L6.34068 6.02753C6.25403 6.17577 6.10802 6.27978 5.93961 6.31324L2.67965 6.96093L4.9138 9.33306C5.03517 9.46193 5.09343 9.63781 5.07301 9.81365L4.69969 13.0282L7.75796 11.6797C7.91217 11.6117 8.08787 11.6117 8.24208 11.6797L11.3003 13.0282L10.927 9.81365C10.9066 9.63781 10.9649 9.46193 11.0862 9.33306L13.3204 6.96093L10.0604 6.31324C9.89202 6.27978 9.74601 6.17577 9.65936 6.02753L8.00002 3.1889Z"
    />
  </svg>
);

export const CustomTheme = () => {
  const customTheme: ChipTheme = {
    ...chipTheme,
    base: `${chipTheme.base} rounded-full`,
    colors: {
      ...chipTheme?.colors,
      secondary: {
        ...chipTheme.colors.secondary,
        variants: {
          ...chipTheme.colors.secondary.variants,
          filled: `${chipTheme?.colors?.secondary?.variants?.filled} dark:bg-gray-100 light:bg-gray-900 text-panel`
        }
      },
      info: {
        ...chipTheme.colors.info,
        variants: {
          ...chipTheme.colors.info.variants,
          filled: `${chipTheme?.colors?.info?.variants?.filled} text-text-primary bg-info/10 border-info`
        }
      },
      error: {
        ...chipTheme.colors.error,
        variants: {
          ...chipTheme.colors.error.variants,
          filled: `${chipTheme?.colors?.error?.variants?.filled} text-text-primary bg-error/10 border-error`
        }
      },
      warning: {
        ...chipTheme.colors.warning,
        variants: {
          ...chipTheme.colors.warning.variants,
          filled: `${chipTheme?.colors?.warning?.variants?.filled} text-text-primary bg-warning/10 border-warning`
        }
      },
      success: {
        ...chipTheme.colors.success,
        variants: {
          ...chipTheme.colors.success.variants,
          filled: `${chipTheme?.colors?.success?.variants?.filled} text-text-primary bg-success/10 border-success`
        }
      }
    }
  };

  return (
    <Stack>
      <Chip theme={customTheme}>Default</Chip>
      <Chip theme={customTheme} color="primary">
        Primary
      </Chip>
      <Chip theme={customTheme} color="secondary">
        Secondary
      </Chip>
      <Chip theme={customTheme} color="error">
        Error
      </Chip>
      <Chip theme={customTheme} color="success">
        Success
      </Chip>
      <Chip theme={customTheme} color="warning">
        Warning
      </Chip>
      <Chip theme={customTheme} color="info">
        Info
      </Chip>
    </Stack>
  );
};
