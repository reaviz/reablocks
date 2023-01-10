import React, { Fragment } from 'react';
import { Menu } from './Menu';
import { NestedMenu } from './NestedMenu';
import { useMenu } from './useMenu';

export default {
  title: 'Components/Layers/Menu',
  component: Menu,
  subComponents: {
    NestedMenu
  }
};

export const Simple = () => {
  const { toggleOpen, ref, Menu: MenuComponent } = useMenu();

  return (
    <Fragment>
      <button type="button" ref={ref} onClick={toggleOpen}>
        Open
      </button>
      <MenuComponent style={{ background: 'white' }}>
        <h3>My Menu</h3>
        <ul>
          <li>Austin</li>
          <li>Mark</li>
          <li>Jack</li>
        </ul>
      </MenuComponent>
    </Fragment>
  );
};

export const Nested = () => {
  const { toggleOpen, ref, Menu: MenuComponent } = useMenu({ open: true });
  const itemStyle = { padding: 5, borderBottom: 'solid 1px black' };

  return (
    <Fragment>
      <button type="button" ref={ref} onClick={toggleOpen}>
        Open
      </button>
      <MenuComponent style={{ background: 'white' }}>
        <h3 style={{ margin: 0 }}>My Menu</h3>
        <div role="list">
          <div role="listitem" style={itemStyle}>
            1
          </div>
          <NestedMenu
            label="2"
            style={itemStyle}
            menuStyle={{ background: 'white' }}
          >
            <div role="listitem" style={itemStyle}>
              2.1
            </div>
            <div role="listitem" style={itemStyle}>
              2.2
            </div>
            <div role="listitem" style={itemStyle}>
              2.3
            </div>
            <div role="listitem" style={itemStyle}>
              2.4
            </div>
          </NestedMenu>
          <NestedMenu
            label="3"
            style={itemStyle}
            menuStyle={{ background: 'white' }}
          >
            <div role="listitem" style={itemStyle}>
              3.1
            </div>
            <NestedMenu
              label="3.2"
              style={itemStyle}
              menuStyle={{ background: 'white' }}
            >
              <div role="listitem" style={itemStyle}>
                3.2.1
              </div>
              <div role="listitem" style={itemStyle}>
                3.2.2
              </div>
              <div role="listitem" style={itemStyle}>
                3.2.3
              </div>
              <div role="listitem" style={itemStyle}>
                3.2.4
              </div>
            </NestedMenu>
            <div role="listitem" style={itemStyle}>
              3.3
            </div>
          </NestedMenu>
          <div role="listitem" style={itemStyle}>
            4
          </div>
        </div>
      </MenuComponent>
    </Fragment>
  );
};

export const AutoWidth = () => {
  const { toggleOpen, ref, Menu: MenuComponent } = useMenu();

  return (
    <Fragment>
      <button
        type="button"
        ref={ref}
        onClick={toggleOpen}
        style={{ width: '300px' }}
      >
        Open
      </button>
      <MenuComponent style={{ background: 'white' }} autoWidth>
        <h3>My Menu</h3>
        <ul>
          <li>Austin</li>
          <li>Mark</li>
          <li>Jack</li>
        </ul>
      </MenuComponent>
    </Fragment>
  );
};

export const AutoWidthWithModifiers = () => {
  const { toggleOpen, ref, Menu: MenuComponent } = useMenu();

  return (
    <Fragment>
      <button
        type="button"
        ref={ref}
        onClick={toggleOpen}
        style={{ width: '300px' }}
      >
        Open
      </button>
      <MenuComponent
        style={{ background: 'white' }}
        autoWidth
        modifiers={{ offset: { offset: '-100, 25' } }}
      >
        <h3>My Menu</h3>
        <ul>
          <li>Austin</li>
          <li>Mark</li>
          <li>Jack</li>
        </ul>
      </MenuComponent>
    </Fragment>
  );
};
