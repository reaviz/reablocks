import {
  darkButtonTheme,
  lightButtonTheme,
  ButtonTheme
} from '../../../elements';
import {
  darkInputTheme,
  darkRadioTheme,
  darkSelectTheme,
  InputTheme,
  lightInputTheme,
  lightRadioTheme,
  lightSelectTheme,
  SelectTheme
} from '../../../form';
import {
  CalendarTheme,
  darkCalendarTheme,
  lightCalendarTheme
} from '../../../form/Calendar/CalendarTheme';
import {
  darkDialogHeaderTheme,
  darkDialogTheme,
  darkDrawerTheme,
  darkMenuTheme,
  darkNotificationTheme,
  DialogHeaderTheme,
  DialogTheme,
  DrawerTheme,
  lightDialogHeaderTheme,
  lightDialogTheme,
  lightDrawerTheme,
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

export interface ReablocksTheme {
  components: {
    button: ButtonTheme;
    dialog: DialogTheme;
    dialogHeader: DialogHeaderTheme;
    divider: DividerTheme;
    drawer: DrawerTheme;
    select: SelectTheme;
    list: ListTheme;
    menu: MenuTheme;
    stack: StackTheme;
    card: CardTheme;
    verticalSpacer: VerticalSpacerTheme;
    notification: NotificationTheme;
    input: InputTheme;
    calendar: CalendarTheme;
    typography: TypographyTheme;
  };
}

export const lightTheme: ReablocksTheme = {
  components: {
    button: lightButtonTheme,
    dialog: lightDialogTheme,
    dialogHeader: lightDialogHeaderTheme,
    divider: lightDividerTheme,
    drawer: lightDrawerTheme,
    select: lightSelectTheme,
    list: lightListTheme,
    menu: lightMenuTheme,
    stack: lightStackTheme,
    card: lightCardTheme,
    verticalSpacer: lightVerticalSpacerTheme,
    notification: lightNotificationTheme,
    input: lightInputTheme,
    calendar: lightCalendarTheme,
    typography: lightTypographyTheme,
    radio: lightRadioTheme
  }
};

export const darkTheme: ReablocksTheme = {
  components: {
    button: darkButtonTheme,
    dialog: darkDialogTheme,
    dialogHeader: darkDialogHeaderTheme,
    divider: darkDividerTheme,
    drawer: darkDrawerTheme,
    select: darkSelectTheme,
    list: darkListTheme,
    menu: darkMenuTheme,
    stack: darkStackTheme,
    card: darkCardTheme,
    verticalSpacer: darkVerticalSpacerTheme,
    notification: darkNotificationTheme,
    input: darkInputTheme,
    calendar: darkCalendarTheme,
    typography: darkTypographyTheme,
    radio: darkRadioTheme
  }
};
