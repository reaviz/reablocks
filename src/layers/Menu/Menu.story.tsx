import React, { Fragment, useRef, useState } from 'react';
import { Card } from '../../layout/Card';
import { List, ListItem } from '../../layout/List';
import { Menu } from './Menu';
import { NestedMenu } from './NestedMenu';
import { useMenu } from './useMenu';
import { Button } from '../../elements/Button';

export default {
  title: 'Components/Layers/Menu',
  component: Menu,
  subComponents: {
    NestedMenu
  }
};

export const Unstyled = () => {
  const { toggleOpen, ref, Menu: MenuComponent } = useMenu();

  return (
    <Fragment>
      <Button type="button" ref={ref} onClick={toggleOpen}>
        Open
      </Button>
      <MenuComponent style={{ background: 'var(--slate-50+0)' }}>
        <p>Unstyled Menu</p>
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
      <Button type="button" ref={ref} onClick={toggleOpen}>
        Open
      </Button>
      <MenuComponent style={{ background: 'var(--slate-500)' }}>
        <h5 style={{ margin: 4 }}>My Menu</h5>
        <div role="list">
          <div role="listitem" style={itemStyle}>
            1
          </div>
          <NestedMenu
            label="2"
            style={itemStyle}
            menuStyle={{ background: 'var(--slate-500)', marginLeft: 4 }}
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
            menuStyle={{ background: 'var(--slate-500)', marginLeft: 4 }}
          >
            <div role="listitem" style={itemStyle}>
              3.1
            </div>
            <NestedMenu
              label="3.2"
              style={itemStyle}
              menuStyle={{ background: 'var(--slate-500)', marginLeft: 4 }}
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
      <Button
        type="button"
        ref={ref}
        onClick={toggleOpen}
        style={{ width: '300px' }}
      >
        Open
      </Button>
      <MenuComponent style={{ background: 'var(--slate-500)' }} autoWidth>
        <Card disablePadding>
          <List>
            <ListItem>Menu Item 1</ListItem>
            <ListItem>Menu Item 2</ListItem>
            <ListItem>Menu Item 3</ListItem>
            <ListItem>Menu Item 4</ListItem>
          </List>
        </Card>
      </MenuComponent>
    </Fragment>
  );
};

export const AutoWidthModifiers = () => {
  const { toggleOpen, ref, Menu: MenuComponent } = useMenu();

  return (
    <Fragment>
      <Button
        type="button"
        ref={ref}
        onClick={toggleOpen}
        style={{ width: '300px' }}
      >
        Open
      </Button>
      <MenuComponent
        style={{ background: 'var(--slate-500)' }}
        autoWidth
        modifiers={{ offset: { offset: '-100, 25' } }}
      >
        <Card disablePadding>
          <List>
            <ListItem>Menu Item 1</ListItem>
            <ListItem>Menu Item 2</ListItem>
            <ListItem>Menu Item 3</ListItem>
            <ListItem>Menu Item 4</ListItem>
          </List>
        </Card>
      </MenuComponent>
    </Fragment>
  );
};

export const Simple = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <>
      <Button type="button" ref={buttonRef} onClick={() => setOpen(!open)}>
        Open
      </Button>
      <Menu open={open} onClose={() => setOpen(false)} reference={buttonRef}>
        <Card disablePadding>
          <List>
            <ListItem start={<Icon />}>Menu Item 1</ListItem>
            <ListItem start={<Icon />}>Menu Item 2</ListItem>
            <ListItem start={<Icon />}>Menu Item 3</ListItem>
            <ListItem start={<Icon />}>Menu Item 4</ListItem>
          </List>
        </Card>
      </Menu>
    </>
  );
};

export const Selectable = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <>
      <Button type="button" ref={buttonRef} onClick={() => setOpen(!open)}>
        Open
      </Button>
      <Menu open={open} onClose={() => setOpen(false)} reference={buttonRef}>
        <Card disablePadding>
          <List>
            <ListItem start={<Icon />} onClick={() => console.log('1')}>
              Menu Item 1
            </ListItem>
            <ListItem start={<Icon />} onClick={() => console.log('2')}>
              Menu Item 2
            </ListItem>
            <ListItem start={<Icon />} onClick={() => console.log('3')}>
              Menu Item 3
            </ListItem>
            <ListItem start={<Icon />} onClick={() => console.log('4')}>
              Menu Item 4
            </ListItem>
          </List>
        </Card>
      </Menu>
    </>
  );
};

const Icon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.05037 2.43562C7.47505 1.70912 8.52499 1.70912 8.94967 2.43562L10.5591 5.18886L13.7314 5.81912C14.5791 5.98756 14.9104 7.02301 14.3178 7.65222L12.1512 9.95255L12.5125 13.0632C12.6106 13.9079 11.7541 14.5397 10.976 14.1966L8.00002 12.8845L5.02399 14.1966C4.24592 14.5397 3.38946 13.9079 3.48756 13.0632L3.84882 9.95255L1.68228 7.65222C1.08968 7.02301 1.42092 5.98756 2.26868 5.81912L5.44095 5.18886L7.05037 2.43562ZM8.00002 3.1889L6.34068 6.02753C6.25403 6.17577 6.10802 6.27978 5.93961 6.31324L2.67965 6.96093L4.9138 9.33306C5.03517 9.46193 5.09343 9.63781 5.07301 9.81365L4.69969 13.0282L7.75796 11.6797C7.91217 11.6117 8.08787 11.6117 8.24208 11.6797L11.3003 13.0282L10.927 9.81365C10.9066 9.63781 10.9649 9.46193 11.0862 9.33306L13.3204 6.96093L10.0604 6.31324C9.89202 6.27978 9.74601 6.17577 9.65936 6.02753L8.00002 3.1889Z"
      fill="#CACBD0"
    />
  </svg>
);
