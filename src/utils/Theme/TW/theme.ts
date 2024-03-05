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
} from '../../../layout';
import { darkListTheme, lightListTheme, ListTheme } from '../../../layout';
import { darkStackTheme, lightStackTheme, StackTheme } from '../../../layout';
import {
  darkVerticalSpacerTheme,
  lightVerticalSpacerTheme,
  VerticalSpacerTheme
} from '../../../layout';
import { CardTheme, darkCardTheme, lightCardTheme } from '../../../layout';
import {
  darkTypographyTheme,
  lightTypographyTheme,
  TypographyTheme
} from '../../../typography';

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
    card: CardTheme;
    verticalSpacer: VerticalSpacerTheme;
    typographyTheme: TypographyTheme;
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
    stack: lightStackTheme,
    card: lightCardTheme,
    verticalSpacer: lightVerticalSpacerTheme,
    typographyTheme: lightTypographyTheme
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
    stack: darkStackTheme,
    card: darkCardTheme,
    verticalSpacer: darkVerticalSpacerTheme,
    typographyTheme: darkTypographyTheme
  }
};
