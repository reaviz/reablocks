import {
  darkButtonTheme,
  lightButtonTheme,
  ReaBlocksButtonTheme
} from '../../../elements/Button/DarkButtonTheme';

export interface ReaBlocksComponents {
  button: string;
}

export interface ReaBlocksTheme {
  components: {
    button: ReaBlocksButtonTheme;
    // select: ReaBlockSelectTheme;
  };
}

export const lightTheme: ReaBlocksTheme = {
  components: {
    button: lightButtonTheme
  }
};

export const theme: ReaBlocksTheme = {
  components: {
    button: darkButtonTheme
  }
};
