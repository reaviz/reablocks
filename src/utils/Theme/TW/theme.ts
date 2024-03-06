import {
  darkButtonTheme,
  lightButtonTheme,
  ButtonTheme
} from '../../../elements';
import {
  darkInputTheme,
  darkSelectTheme,
  InputTheme,
  lightInputTheme,
  lightSelectTheme,
  SelectTheme
} from '../../../form';
import {
  darkDialogHeaderTheme,
  darkDialogTheme,
  darkMenuTheme,
  darkNotificationTheme,
  DialogHeaderTheme,
  DialogTheme,
  lightDialogHeaderTheme,
  lightDialogTheme,
  lightMenuTheme,
  lightNotificationTheme,
  MenuTheme,
  NotificationTheme
} from '../../../layers';
import {
  darkDividerTheme,
  DividerTheme,
  lightDividerTheme
} from '../../../layout';
import {
  darkVerticalSpacerTheme,
  lightVerticalSpacerTheme,
  VerticalSpacerTheme,
  CardTheme,
  darkCardTheme,
  lightCardTheme,
  darkListTheme,
  lightListTheme,
  ListTheme,
  darkStackTheme,
  lightStackTheme,
  StackTheme
} from '../../../layout';
import {
  darkTypographyTheme,
  lightTypographyTheme,
  TypographyTheme
} from '../../../typography';
import {
  darkChipTheme,
  lightChipTheme,
  ChipTheme
} from '../../../elements/Chip/ChipTheme';

export interface ReablocksTheme {
  components: {
    button: ButtonTheme;
    chip: ChipTheme;
    dialog: DialogTheme;
    dialogHeader: DialogHeaderTheme;
    divider: DividerTheme;
    select: SelectTheme;
    list: ListTheme;
    menu: MenuTheme;
    stack: StackTheme;
    card: CardTheme;
    verticalSpacer: VerticalSpacerTheme;
    notification: NotificationTheme;
    input: InputTheme;
    typographyTheme: TypographyTheme;
  };
}

export const lightTheme: ReablocksTheme = {
  components: {
    button: lightButtonTheme,
    chip: lightChipTheme,
    dialog: lightDialogTheme,
    dialogHeader: lightDialogHeaderTheme,
    divider: lightDividerTheme,
    select: lightSelectTheme,
    list: lightListTheme,
    menu: lightMenuTheme,
    stack: lightStackTheme,
    card: lightCardTheme,
    verticalSpacer: lightVerticalSpacerTheme,
    notification: lightNotificationTheme,
    input: lightInputTheme,
    typographyTheme: lightTypographyTheme
  }
};

export const darkTheme: ReablocksTheme = {
  components: {
    button: darkButtonTheme,
    chip: darkChipTheme,
    dialog: darkDialogTheme,
    dialogHeader: darkDialogHeaderTheme,
    divider: darkDividerTheme,
    select: darkSelectTheme,
    list: darkListTheme,
    menu: darkMenuTheme,
    stack: darkStackTheme,
    card: darkCardTheme,
    verticalSpacer: darkVerticalSpacerTheme,
    notification: darkNotificationTheme,
    input: darkInputTheme,
    typographyTheme: darkTypographyTheme
  }
};