import { cn, extendComponentTheme } from '@/utils';
import { useState } from 'react';
import { Chip } from './Chip';
import { Stack } from '@/layout';
import { Button, ChipTheme, chipTheme } from '@/elements';

export default {
  title: 'Components/Elements/Chip/Tag type',
  component: Chip
};

export const Colors = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Chip type="tag" variant="outline">
      Default
    </Chip>
    <Chip type="tag" variant="outline" color="primary" start={<DemoIcon />}>
      Primary
    </Chip>
    <Chip type="tag" variant="outline" color="secondary" start={<DemoIcon />}>
      Secondary
    </Chip>
    <Chip type="tag" variant="outline" color="error" start={<DemoIcon />}>
      Error
    </Chip>
    <Chip type="tag" variant="outline" color="success" start={<DemoIcon />}>
      Success
    </Chip>
    <Chip type="tag" variant="outline" color="warning" start={<DemoIcon />}>
      Warning
    </Chip>
    <Chip type="tag" variant="outline" color="info" start={<DemoIcon />}>
      Info
    </Chip>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Chip start={<DemoIcon />} type="tag" variant="outline" size="small">
      Small
    </Chip>
    <Chip start={<DemoIcon />} type="tag" variant="outline">
      Medium
    </Chip>
    <Chip start={<DemoIcon />} type="tag" variant="outline" size="large">
      Large
    </Chip>
  </div>
);

export const Adornment = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Chip type="tag" variant="outline" start={<DemoIcon />}>
      Icon
    </Chip>
    <Chip type="tag" variant="outline" end={<DemoIcon />}>
      Icon
    </Chip>
    <Chip type="tag" variant="outline" start={'$'} end={<DemoIcon />}>
      Icon
    </Chip>
  </div>
);

export const StartAdornment = () => (
  <Chip type="tag" variant="outline" start={<DemoIcon />}>
    Icon
  </Chip>
);

export const EndAdornment = () => (
  <Chip type="tag" variant="outline" end={<DemoIcon />}>
    Icon
  </Chip>
);

export const StartEndAdornment = () => (
  <Chip type="tag" variant="outline" start={'$'} end={<DemoIcon />}>
    Icon
  </Chip>
);

export const Selectable = () => {
  const [isDefaultSelected, setIsDefaultSelected] = useState(false);
  const [isPrimarySelected, setIsPrimarySelected] = useState(false);
  const [isSecondarySelected, setIsSecondarySelected] = useState(false);
  const [isSuccessSelected, setIsSuccessSelected] = useState(false);
  const [isWarningSelected, setIsWarningSelected] = useState(false);
  const [isErrorSelected, setIsErrorSelected] = useState(false);
  const [isInfoSelected, setIsInfoSelected] = useState(false);

  return (
    <Stack>
      <Chip
        type="tag"
        variant="outline"
        onClick={() => setIsDefaultSelected(!isDefaultSelected)}
        selected={isDefaultSelected}
        start={<DemoIcon />}
      >
        Default
      </Chip>
      <Chip
        type="tag"
        variant="outline"
        color="primary"
        onClick={() => setIsPrimarySelected(!isPrimarySelected)}
        selected={isPrimarySelected}
        start={<DemoIcon />}
      >
        Primary
      </Chip>
      <Chip
        type="tag"
        variant="outline"
        color="secondary"
        onClick={() => setIsSecondarySelected(!isSecondarySelected)}
        selected={isSecondarySelected}
        start={<DemoIcon />}
      >
        Secondary
      </Chip>
      <Chip
        type="tag"
        variant="outline"
        color="success"
        onClick={() => setIsSuccessSelected(!isSuccessSelected)}
        selected={isSuccessSelected}
        start={<DemoIcon />}
      >
        Success
      </Chip>
      <Chip
        type="tag"
        variant="outline"
        color="warning"
        onClick={() => setIsWarningSelected(!isWarningSelected)}
        selected={isWarningSelected}
        start={<DemoIcon />}
      >
        Warning
      </Chip>
      <Chip
        type="tag"
        variant="outline"
        color="error"
        onClick={() => setIsErrorSelected(!isErrorSelected)}
        selected={isErrorSelected}
        start={<DemoIcon />}
      >
        Error
      </Chip>
      <Chip
        type="tag"
        variant="outline"
        color="info"
        onClick={() => setIsInfoSelected(!isInfoSelected)}
        selected={isInfoSelected}
        start={<DemoIcon />}
      >
        Info
      </Chip>
    </Stack>
  );
};

export const Closable = () => {
  const [hidden, setHidden] = useState(false);

  if (hidden)
    return (
      <Button size="small" onClick={() => setHidden(false)}>
        Show
      </Button>
    );

  return (
    <Chip
      start={<DemoIcon />}
      type="tag"
      variant="outline"
      color="primary"
      onClose={() => setHidden(true)}
    >
      Closable
    </Chip>
  );
};
export const Disabled = () => (
  <Stack direction="column">
    <Stack>
      <Chip start={<DemoIcon />} type="tag" variant="outline" disabled>
        Default
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="primary"
        disabled
      >
        Primary
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="secondary"
        disabled
      >
        Secondary
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="success"
        disabled
      >
        Success
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="warning"
        disabled
      >
        Warning
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="error"
        disabled
      >
        Error
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="info"
        disabled
      >
        Info
      </Chip>
    </Stack>
    <Stack>
      <Chip start={<DemoIcon />} type="tag" variant="outline" disabled selected>
        Default
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="primary"
        disabled
        selected
      >
        Primary
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="secondary"
        disabled
        selected
      >
        Secondary
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="success"
        disabled
        selected
      >
        Success
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="warning"
        disabled
        selected
      >
        Warning
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="error"
        disabled
        selected
      >
        Error
      </Chip>
      <Chip
        start={<DemoIcon />}
        type="tag"
        variant="outline"
        color="info"
        disabled
        selected
      >
        Info
      </Chip>
    </Stack>
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
  const customTheme = extendComponentTheme<ChipTheme>(
    chipTheme,
    {
      types: {
        tag: {
          colors: {
            default: {
              variants: {
                outline: {
                  base: 'bg-neutrals-kyber-crystal-a-200'
                }
              }
            },
            primary: {
              variants: {
                outline: {
                  base: 'bg-blue-hyperstream-600'
                }
              }
            },
            secondary: {
              variants: {
                outline: {
                  base: 'bg-teal-sunspark-oasis-a-600'
                }
              }
            },
            success: {
              variants: {
                outline: {
                  base: 'bg-green-emerald-saber-a-600'
                }
              }
            },
            error: {
              variants: {
                outline: {
                  base: 'bg-pink-mew-mode-600'
                }
              }
            },
            warning: {
              variants: {
                outline: {
                  base: 'bg-orange-sunstreak-a-600'
                }
              }
            },
            info: {
              variants: {
                outline: {
                  base: 'bg-purple-nexus-a-600'
                }
              }
            }
          }
        }
      }
    },
    (source, target) => {
      if (typeof source === 'string' && typeof target === 'string') {
        return cn(source, target);
      }
      return undefined;
    }
  );

  return (
    <Stack>
      <Chip type="tag" variant="outline" theme={customTheme}>
        Default
      </Chip>
      <Chip type="tag" variant="outline" theme={customTheme} color="primary">
        Primary
      </Chip>
      <Chip type="tag" variant="outline" theme={customTheme} color="secondary">
        Secondary
      </Chip>
      <Chip type="tag" variant="outline" theme={customTheme} color="error">
        Error
      </Chip>
      <Chip type="tag" variant="outline" theme={customTheme} color="success">
        Success
      </Chip>
      <Chip type="tag" variant="outline" theme={customTheme} color="warning">
        Warning
      </Chip>
      <Chip type="tag" variant="outline" theme={customTheme} color="info">
        Info
      </Chip>
    </Stack>
  );
};
