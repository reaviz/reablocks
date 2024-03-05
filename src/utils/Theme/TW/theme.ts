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
  darkDialogHeaderTheme,
  darkDialogTheme,
  darkMenuTheme,
  DialogHeaderTheme,
  DialogTheme,
  lightDialogHeaderTheme,
  lightDialogTheme,
  lightMenuTheme,
  MenuTheme
} from '../../../layers';
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
import {
  darkStackTheme,
  lightStackTheme,
  StackTheme
} from '../../../layout/Stack/StackTheme';

export interface ReablocksTheme {
  components: {
    button: ButtonTheme;
    dialog: DialogTheme;
    dialogHeader: DialogHeaderTheme;
    divider: DividerTheme;
    select: SelectTheme;
    list: ListTheme;
    menu: MenuTheme;
    stack: StackTheme;
  };
}

export const lightTheme: ReablocksTheme = {
  components: {
    button: lightButtonTheme,
    dialog: lightDialogTheme,
    dialogHeader: lightDialogHeaderTheme,
    divider: lightDividerTheme,
    select: lightSelectTheme,
    list: lightListTheme,
    menu: lightMenuTheme,
    stack: lightStackTheme
  }
};

export const darkTheme: ReablocksTheme = {
  components: {
    button: darkButtonTheme,
    dialog: darkDialogTheme,
    dialogHeader: darkDialogHeaderTheme,
    divider: darkDividerTheme,
    select: darkSelectTheme,
    list: darkListTheme,
    menu: darkMenuTheme,
    stack: darkStackTheme
  }
};
