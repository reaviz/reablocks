import {
  darkButtonTheme,
  lightButtonTheme,
  ButtonTheme
} from '../../../elements/Button/ButtonTheme';

export interface ReaBlocksComponents {
  button: string;
}

export interface ReaBlocksTheme {
  components: {
    button: ButtonTheme;
    // select: ReaBlockSelectTheme;
  };
}

export const lightTheme: ReaBlocksTheme = {
  components: {
    button: lightButtonTheme
  }
};

export const darkTheme: ReaBlocksTheme = {
  components: {
    button: darkButtonTheme
  }
};
