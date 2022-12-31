import { List } from './List';
import { ListItem } from './ListItem';

export default {
  title: 'Layout/List',
  component: List,
  subcomponents: {
    ListItem
  }
};

export const Simple = () => (
  <List style={{ width: '150px' }}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

export const Dense = () => (
  <List style={{ width: '150px' }}>
    <ListItem dense>Item 1</ListItem>
    <ListItem dense>Item 2</ListItem>
    <ListItem dense>Item 3</ListItem>
  </List>
);

export const Active = () => (
  <List style={{ width: '150px' }}>
    <ListItem active>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

export const Disabled = () => (
  <List style={{ width: '150px' }}>
    <ListItem disabled>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

export const Clickable = () => (
  <List style={{ width: '150px' }}>
    <ListItem disabled onClick={() => console.log('item 1')}>
      Item 1
    </ListItem>
    <ListItem onClick={() => console.log('item 2')}>Item 2</ListItem>
    <ListItem onClick={() => console.log('item 3')}>Item 3</ListItem>
  </List>
);
