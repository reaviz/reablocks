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

export const defaultStepperTheme: StepperTheme = {
  base: 'grid grid-cols-[min-content_1fr] gap-x-3',
  step: {
    base: {
      common: 'border-l border-solid border-panel-accent translate-x-1/2',
      dot: '',
      circle: ''
    },
    marker: {
      base: 'rounded-full w-[9px] h-[9px] bg-surface',
      container: {
        common:
          'w-max pt-1 pb-0.5 backdrop-blur-md -translate-x-[calc(50%+0.5px)]',
        dot: '',
        circle: ''
      },
      active: 'bg-info',
      label: {
        base: 'flex flex-row items-center gap-1 border border-solid border-surface px-3 py-1 rounded-[20px]',
        active: 'border-info bg-info-background'
      }
    },
    active: 'border-primary',
    content: 'pb-6'
  }
};

export const unifyStepperTheme: StepperTheme = {
  base: 'grid grid-cols-[min-content_1fr] gap-x-3',
  step: {
    base: {
      common: 'border-l border-solid border-stroke-neutral-2 translate-x-1/2',
      dot: 'mt-4',
      circle: 'mt-10'
    },
    marker: {
      base: 'rounded-full w-2.5 h-2.5 bg-content-assets-neutral-3',
      container: {
        common:
          'text-content-text-on-color-light-dark w-max relative bg-transparent -translate-x-[calc(50%+0.5px)]',
        dot: '-top-3',
        circle: '-top-8.5'
      },
      active: 'border border-stroke-brand-1 bg-background-brand-base',
      label: {
        base: 'flex flex-row items-center gap-1 border border-content-assets-neutral-3 px-3 py-1 rounded-[20px]',
        active: 'border-stroke-brand-1 bg-background-brand-5'
      }
    },
    active: 'border-stroke-brand-1',
    content: 'pb-6'
  }
};
