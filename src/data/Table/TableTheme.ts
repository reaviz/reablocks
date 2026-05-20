export interface TableTheme {
  base: string;
  header: {
    base: string;
    row: string;
    cell: {
      base: string;
      sortable: string;
      sorted: string;
      draggable: string;
      dragging: string;
      disabled: string;
      align: {
        left: string;
        center: string;
        right: string;
      };
      size: {
        base: string;
        condensed: string;
      };
      resizeHandle: {
        base: string;
        hover: string;
        active: string;
      };
    };
  };
  body: {
    base: string;
    row: {
      base: string;
      selected: string;
      disabled: string;
      clickable: string;
    };
    cell: {
      base: string;
      truncate: string;
      align: {
        left: string;
        center: string;
        right: string;
      };
      size: {
        base: string;
        condensed: string;
      };
    };
    expand: {
      base: string;
    };
    expandCell: {
      icon: string;
    };
  };
  footer: {
    base: string;
  };
}

/**
 * Cosmetic theme tokens only. Load-bearing structural classes (flex, sizing,
 * overflow) are applied by the components themselves so a user theme override
 * can't accidentally collapse the layout.
 */
export const tableTheme: TableTheme = {
  base: 'text-text-primary',
  header: {
    base: '',
    row: 'bg-panel-accent text-text-primary',
    cell: {
      base: 'font-semibold whitespace-nowrap select-none text-sm text-text-primary',
      sortable:
        'cursor-pointer text-text-primary transition-colors hover:text-text-secondary',
      sorted: 'text-text-primary',
      draggable:
        'cursor-grab active:cursor-grabbing transition-colors hover:bg-panel/40',
      dragging: 'opacity-40',
      disabled: 'opacity-50 cursor-not-allowed',
      align: {
        left: 'justify-start text-left',
        center: 'justify-center text-center',
        right: 'justify-end text-right'
      },
      size: {
        base: 'px-4 h-11 text-sm',
        condensed: 'px-3 h-9 text-xs'
      },
      resizeHandle: {
        base: 'absolute top-0 -right-1 h-full w-2 cursor-col-resize select-none touch-none z-10 before:absolute before:right-1 before:top-1 before:bottom-1 before:w-px before:rounded-full before:bg-panel before:opacity-30 before:transition-all before:duration-150',
        hover: 'hover:before:opacity-60 hover:before:w-px',
        active: 'before:opacity-100 before:w-px'
      }
    }
  },
  body: {
    base: '',
    row: {
      base: 'transition-colors my-1 hover:bg-panel-accent/30 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-panel-accent/40 last:after:hidden',
      selected: 'bg-primary/10 hover:bg-primary/15',
      disabled: 'opacity-50 pointer-events-none',
      clickable: 'cursor-pointer'
    },
    cell: {
      base: 'text-text-primary',
      truncate: 'truncate',
      align: {
        left: 'justify-start text-left',
        center: 'justify-center text-center',
        right: 'justify-end text-right'
      },
      size: {
        base: 'px-4 h-14 text-sm',
        condensed: 'px-3 h-12 text-xs'
      }
    },
    expand: {
      base: 'border-b border-panel-accent/40'
    },
    expandCell: {
      icon: 'inline-flex text-text-secondary'
    }
  },
  footer: {
    base: ''
  }
};
