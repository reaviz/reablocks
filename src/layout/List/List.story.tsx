import { List } from './List';
import { ListHeader } from './ListHeader';
import { ListItem } from './ListItem';

export default {
  title: 'Components/Layout/List',
  component: List,
  subcomponents: {
    ListItem,
    ListHeader
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

export const WithHeader = () => (
  <List style={{ width: '150px' }}>
    <ListHeader>List of things</ListHeader>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

const Icon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.05037 2.43562C7.47505 1.70912 8.52499 1.70912 8.94967 2.43562L10.5591 5.18886L13.7314 5.81912C14.5791 5.98756 14.9104 7.02301 14.3178 7.65222L12.1512 9.95255L12.5125 13.0632C12.6106 13.9079 11.7541 14.5397 10.976 14.1966L8.00002 12.8845L5.02399 14.1966C4.24592 14.5397 3.38946 13.9079 3.48756 13.0632L3.84882 9.95255L1.68228 7.65222C1.08968 7.02301 1.42092 5.98756 2.26868 5.81912L5.44095 5.18886L7.05037 2.43562ZM8.00002 3.1889L6.34068 6.02753C6.25403 6.17577 6.10802 6.27978 5.93961 6.31324L2.67965 6.96093L4.9138 9.33306C5.03517 9.46193 5.09343 9.63781 5.07301 9.81365L4.69969 13.0282L7.75796 11.6797C7.91217 11.6117 8.08787 11.6117 8.24208 11.6797L11.3003 13.0282L10.927 9.81365C10.9066 9.63781 10.9649 9.46193 11.0862 9.33306L13.3204 6.96093L10.0604 6.31324C9.89202 6.27978 9.74601 6.17577 9.65936 6.02753L8.00002 3.1889Z"
      fill="#CACBD0"
    />
  </svg>
);

export const StartEnd = () => (
  <List style={{ width: '200px' }}>
    <ListItem disabled start={<Icon />} end={<button>...</button>}>
      Item 1 (disabled)
    </ListItem>
    <ListItem start={<Icon />} end={<button>...</button>}>
      Item 2
    </ListItem>
    <ListItem active start={<Icon />} end={<button>...</button>}>
      Item 3 (active)
    </ListItem>
    <ListItem start={<Icon />} end={<button>...</button>}>
      Item 4
    </ListItem>
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
