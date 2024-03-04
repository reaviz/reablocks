import {
  darkButtonTheme,
  lightButtonTheme,
  ButtonTheme
} from '../../../elements';
import {
  darkSelectTheme,
  lightSelectTheme,
  SelectTheme
} from '../../../form/Select/SelectTheme';

export interface ReaBlocksTheme {
  components: {
    button: ButtonTheme;
    select: SelectTheme;
  };
}

export const lightTheme: ReaBlocksTheme = {
  components: {
    button: lightButtonTheme,
    select: lightSelectTheme
  }
};

export const darkTheme: ReaBlocksTheme = {
  components: {
    button: darkButtonTheme,
    select: darkSelectTheme
  }
};
