export interface StepperTheme {
  base: string;
  step: {
    base: {
      common: string;
      dot: string;
      circle: string;
    };
    marker: {
      container: {
        common: string;
        dot: string;
        circle: string;
      };
      base: string;
      active: string;
      label: {
        base: string;
        active: string;
      };
    };
    active: string;
    content: string;
  };
}

export const stepperTheme: StepperTheme = {
  base: 'grid grid-cols-[min-content_1fr] gap-x-3',
  step: {
    base: {
      common:
        'border-l border-solid border-buttons-colors-core-icon-outline-stroke-resting translate-x-1/2',
      dot: 'mt-4',
      circle: 'mt-10'
    },
    marker: {
      base: 'rounded-full w-2.5 h-2.5 bg-tags-colors-brand-assets-close-base',
      container: {
        common:
          'text-badges-colors-outline-brand-text-default w-max relative bg-transparent -translate-x-[calc(50%+0.5px)]',
        dot: '-top-3',
        circle: '-top-8.5'
      },
      active:
        'border border-badges-colors-outline-brand-stroke-default bg-badges-colors-solid-brand-background-standard',
      label: {
        base: 'flex flex-row items-center gap-1 border border-tags-colors-brand-assets-close-base px-3 py-1 rounded-[20px]',
        active:
          'border-badges-colors-outline-brand-stroke-default bg-badges-colors-outline-brand-background-standard'
      }
    },
    active: 'border-badges-colors-outline-brand-stroke-default',
    content: 'pb-6'
  }
};

export const legacyStepperTheme: StepperTheme = stepperTheme;
