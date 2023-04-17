import React, { createContext, useContext } from 'react';
import classNames from 'classnames';
import styles from './Grid.module.css';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  rowSpacing?: number;
  columnSpacing?: number;
}

interface GridContextType {
  rowSpacing: number;
  columnSpacing: number;
}

const GridContext = createContext<GridContextType>({
  rowSpacing: 0,
  columnSpacing: 0
});

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, className, rowSpacing, columnSpacing, ...otherProps }, ref) => {
    const parentGridContext = useContext(GridContext);
    const actualRowSpacing =
      rowSpacing !== undefined ? rowSpacing : parentGridContext.rowSpacing;
    const actualColumnSpacing =
      columnSpacing !== undefined
        ? columnSpacing
        : parentGridContext.columnSpacing;

    const gridClasses = classNames(styles.grid, className);
    const gridStyle = {
      marginLeft: `${-actualColumnSpacing / 2}px`,
      marginRight: `${-actualColumnSpacing / 2}px`
    };

    const rowStyle = {
      marginTop: `${actualRowSpacing / 2}px`,
      marginBottom: `${actualRowSpacing / 2}px`
    };

    const childrenWithRowSpacing = React.Children.map(children, child =>
      React.cloneElement(child as React.ReactElement, { style: rowStyle })
    );

    return (
      <GridContext.Provider
        value={{
          rowSpacing: actualRowSpacing,
          columnSpacing: actualColumnSpacing
        }}
      >
        <div
          className={gridClasses}
          style={gridStyle}
          ref={ref}
          {...otherProps}
        >
          {childrenWithRowSpacing}
        </div>
      </GridContext.Provider>
    );
  }
);
