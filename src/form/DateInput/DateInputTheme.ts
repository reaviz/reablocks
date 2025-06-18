export interface DateInputTheme {
  preset: {
    list: string;
    option: {
      base: string;
      active: string;
    };
  };
}

export const dateInputTheme: DateInputTheme = {
  preset: {
    list: 'w-full border border-panel-accent',
    option: {
      base: 'hover:bg-vulcan hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary',
      active: 'bg-vulcan hover:text-mystic'
    }
  }
};

export const legacyDateInputTheme: DateInputTheme = dateInputTheme;
