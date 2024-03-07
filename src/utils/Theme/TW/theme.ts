import {
  darkButtonTheme,
  lightButtonTheme,
  ButtonTheme,
  CommandPaletteTheme,
  lightCommandPaletteTheme,
  darkCommandPaletteTheme
} from '../../../elements';
import {
  darkInputTheme,
  darkRadioTheme,
  darkRangeTheme,
  darkSelectTheme,
  darkToggleTheme,
  InputTheme,
  lightInputTheme,
  lightRadioTheme,
  lightRangeTheme,
  lightSelectTheme,
  lightToggleTheme,
  RadioTheme,
  RangeTheme,
  SelectTheme,
  ToggleTheme
} from '../../../form';
import {
  CalendarTheme,
  darkCalendarTheme,
  lightCalendarTheme
} from '../../../form/Calendar/CalendarTheme';
import {
  CalendarRangeTheme,
  darkCalendarRangeTheme,
  lightCalendarRangeTheme
} from '../../../form/Calendar/CalendarRangeTheme';
import {
  darkDialogHeaderTheme,
  darkDialogTheme,
  darkDrawerTheme,
  darkMenuTheme,
  darkNotificationTheme,
  darkTooltipTheme,
  DialogHeaderTheme,
  DialogTheme,
  DrawerTheme,
  lightDialogHeaderTheme,
  lightDialogTheme,
  lightDrawerTheme,
  lightMenuTheme,
  lightNotificationTheme,
  lightTooltipTheme,
  MenuTheme,
  NotificationTheme,
  TooltipTheme
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
    calendarRange: CalendarRangeTheme;
    commandPalette: CommandPaletteTheme;
    typography: TypographyTheme;
    radio: RadioTheme;
    range: RangeTheme;
    toggle: ToggleTheme;
    tooltip: TooltipTheme;
  };
}

export const lightTheme: ReablocksTheme = {
  components: {
    button: lightButtonTheme,
    chip: lightChipTheme,
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
    calendarRange: lightCalendarRangeTheme,
    commandPalette: lightCommandPaletteTheme,
    typography: lightTypographyTheme,
    radio: lightRadioTheme,
    range: lightRangeTheme,
    toggle: lightToggleTheme,
    tooltip: lightTooltipTheme
  }
};

export const darkTheme: ReablocksTheme = {
  components: {
    button: darkButtonTheme,
    chip: darkChipTheme,
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
    calendarRange: darkCalendarRangeTheme,
    commandPalette: darkCommandPaletteTheme,
    typography: darkTypographyTheme,
    radio: darkRadioTheme,
    range: darkRangeTheme,
    toggle: darkToggleTheme,
    tooltip: darkTooltipTheme
  }
};
