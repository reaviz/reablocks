import {
  darkButtonTheme,
  lightButtonTheme,
  ButtonTheme
} from '../../../elements/Button/DarkButtonTheme';
import {
  darkDividerTheme,
  DividerTheme,
  lightDividerTheme
} from '../../../layout/Divider/DividerTheme';

export interface ReaBlocksComponents {
  button: string;
  divider?: string;
}

export interface ReaBlocksTheme {
  components: {
    button: ButtonTheme;
    divider?: DividerTheme;
    // select: ReaBlockSelectTheme;
  };
}

export const lightTheme: ReaBlocksTheme = {
  components: {
    button: lightButtonTheme,
    divider: lightDividerTheme
  }
};

export const darkTheme: ReaBlocksTheme = {
  components: {
    button: darkButtonTheme,
    divider: darkDividerTheme
  }
};
