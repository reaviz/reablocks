import {
  darkButtonTheme,
  lightButtonTheme,
  ButtonTheme
} from '../../../elements/Button/ButtonTheme';
import {
  darkDividerTheme,
  DividerTheme,
  lightDividerTheme
} from '../../../layout/Divider/DividerTheme';
import {
  darkListTheme,
  lightListTheme,
  ListTheme
} from '../../../layout/List/ListTheme';

export interface ReaBlocksComponents {
  button: string;
  divider?: string;
  list?: string;
}

export interface ReaBlocksTheme {
  components: {
    button: ButtonTheme;
    divider?: DividerTheme;
    list?: ListTheme;
    // select: ReaBlockSelectTheme;
  };
}

export const lightTheme: ReaBlocksTheme = {
  components: {
    button: lightButtonTheme,
    divider: lightDividerTheme,
    list: lightListTheme
  }
};

export const darkTheme: ReaBlocksTheme = {
  components: {
    button: darkButtonTheme,
    divider: darkDividerTheme,
    list: darkListTheme
  }
};
