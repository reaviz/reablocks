export interface StepperTheme {
  base: string;
  step: {
    base: string;
    marker: {
      container: string;
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
    base: 'border-l border-solid border-panel-accent translate-x-1/2',
    marker: {
      base: 'rounded-full w-[9px] h-[9px] bg-surface',
      container:
        'w-max pt-1 pb-0.5 backdrop-blur-md -translate-x-[calc(50%+0.5px)]',
      active: 'bg-info',
      label: {
        base: 'flex flex-row items-center gap-1 border border-solid border-secondary px-3 py-1 rounded-[20px]',
        active: 'border-info bg-info-background'
      }
    },
    active: 'border-primary',
    content: 'pb-6'
  }
};

export const legacyStepperTheme: StepperTheme = stepperTheme;
