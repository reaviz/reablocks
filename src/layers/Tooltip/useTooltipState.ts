import { useEffect, useState } from 'react';

/**
 * Creates a global state singleton.
 */
const createStateHook = () => {
  let tooltips: ((setter: boolean, isPopover?: boolean) => boolean)[] = [];

  function addTooltip(newTip: any) {
    tooltips = [...tooltips, newTip];
  }

  function deactivateTooltip(tooltip, isPopover?: boolean) {
    const idx = tooltips.indexOf(tooltip);
    if (idx > -1) {
      const tip = tooltips[idx];
      const shouldRemove = tip(false, isPopover);
      if (shouldRemove) {
        tooltips.splice(idx, 1);
      }
    }
  }

  function deactivateAllTooltips(isPopover?: boolean) {
    const newTooltips = [];

    tooltips.forEach(ref => {
      const shouldRemvoe = ref(false, isPopover);

      if (!shouldRemvoe) {
        newTooltips.push(ref);
      }
    });

    tooltips = [...newTooltips];
  }

  return () => {
    const [state, setState] = useState<any[]>([]);

    useEffect(() => {
      setState(tooltips);
    }, []);

    return {
      tooltips: state,
      deactivateAllTooltips,
      deactivateTooltip,
      addTooltip
    };
  };
};

export const useTooltipState = createStateHook();
