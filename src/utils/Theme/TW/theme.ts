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
import {
  darkDividerTheme,
  DividerTheme,
  lightDividerTheme
} from '../../../layout/Divider/DividerTheme';

export interface ReablocksTheme {
  components: {
    button: ButtonTheme;
    divider: DividerTheme;
    select: SelectTheme;
  };
}

export const lightTheme: ReablocksTheme = {
  components: {
    button: lightButtonTheme,
    divider: lightDividerTheme,
    select: lightSelectTheme
  }
};

export const darkTheme: ReablocksTheme = {
  components: {
    button: darkButtonTheme,
    divider: darkDividerTheme,
    select: darkSelectTheme
  }
};
