export interface StepperTheme {
  base: string;
  step: {
    base: string;
    marker: {
      container: string;
      base: string;
      active: string;
      labeled: {
        base: string;
        active: string;
      };
    };
    active: string;
  };
}

export const stepperTheme: StepperTheme = {
  base: '',
  step: {
    base: 'flex flex-row gap-3 items-start pb-4 border-l border-solid border-panel-accent',
    marker: {
      container:
        'w-max pt-1.5 pb-0.5 backdrop-blur-md -translate-x-[calc(50%+0.5px)]',
      base: 'rounded-full w-[9px] h-[9px] bg-surface',
      active: 'bg-info',
      labeled: {
        base: 'flex flex-row items-center gap-1 border border-solid border-secondary px-3 py-1 rounded-[20px]',
        active: 'border-info bg-info-background'
      }
    },
    active: 'border-primary'
  }
};

export const legacyStepperTheme: StepperTheme = stepperTheme;
