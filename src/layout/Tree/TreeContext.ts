import { ReactNode, createContext, useContext } from 'react';

export interface TreeContextProps {
  /**
   * A custom icon to be used for collapsed nodes.
   */
  collapsedIcon?: any;

  /**
   * A custom icon to be used for expanded nodes.
   */
  expandedIcon?: any;
}

export const TreeContext = createContext<TreeContextProps>({
  collapsedIcon: null,
  expandedIcon: null
});
