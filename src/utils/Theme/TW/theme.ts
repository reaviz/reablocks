import {
  darkButtonTheme,
  lightButtonTheme,
  ButtonTheme,
  CommandPaletteTheme,
  lightCommandPaletteTheme,
  darkCommandPaletteTheme,
  AvatarTheme,
  lightAvatarTheme,
  darkAvatarTheme,
  KbdTheme,
  lightKbdTheme,
  darkKbdTheme,
  AvatarGroupTheme,
  lightAvatarGroupTheme,
  darkAvatarGroupTheme,
  lightBadgeTheme,
  BadgeTheme,
  darkBadgeTheme,
  DotsLoaderTheme,
  lightDotsLoaderTheme,
  darkDotsLoaderTheme,
  ArrowTheme,
  lightArrowTheme,
  darkArrowTheme
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
  ContextMenuTheme,
  darkContextMenuTheme,
  darkDialogHeaderTheme,
  darkDialogTheme,
  darkDrawerTheme,
  darkMenuTheme,
  darkNotificationTheme,
  darkPopoverTheme,
  darkTooltipTheme,
  DialogHeaderTheme,
  DialogTheme,
  DrawerTheme,
  lightContextMenuTheme,
  lightDialogHeaderTheme,
  lightDialogTheme,
  lightDrawerTheme,
  lightMenuTheme,
  lightNotificationTheme,
  lightPopoverTheme,
  lightTooltipTheme,
  MenuTheme,
  NotificationTheme,
  PopoverTheme,
  TooltipTheme
} from '../../../layers';
import {
  CollapseTheme,
  darkCollapseTheme,
  darkDividerTheme,
  darkTreeTheme,
  DividerTheme,
  lightCollapseTheme,
  lightDividerTheme,
  lightTreeTheme,
  TreeTheme
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
import {
  darkEllipsisTheme,
  EllipsisTheme,
  lightEllipsisTheme,
  PagerTheme,
  darkPagerTheme,
  lightPagerTheme,
  RedactTheme,
  lightRedactTheme,
  darkRedactTheme
} from '../../../data';

export interface ReablocksTheme {
  components: {
    avatar: AvatarTheme;
    avatarGroup: AvatarGroupTheme;
    arrow: ArrowTheme;
    badge: BadgeTheme;
    button: ButtonTheme;
    chip: ChipTheme;
    contextMenu: ContextMenuTheme;
    dialog: DialogTheme;
    dialogHeader: DialogHeaderTheme;
    divider: DividerTheme;
    dotsLoader: DotsLoaderTheme;
    drawer: DrawerTheme;
    ellipsis: EllipsisTheme;
    select: SelectTheme;
    list: ListTheme;
    menu: MenuTheme;
    stack: StackTheme;
    card: CardTheme;
    kbd: KbdTheme;
    verticalSpacer: VerticalSpacerTheme;
    notification: NotificationTheme;
    input: InputTheme;
    calendar: CalendarTheme;
    calendarRange: CalendarRangeTheme;
    commandPalette: CommandPaletteTheme;
    collapse: CollapseTheme;
    typography: TypographyTheme;
    radio: RadioTheme;
    range: RangeTheme;
    redact: RedactTheme;
    toggle: ToggleTheme;
    tooltip: TooltipTheme;
    tree: TreeTheme;
    popover: PopoverTheme;
    pager: PagerTheme;
  };
}

export const lightTheme: ReablocksTheme = {
  components: {
    avatar: lightAvatarTheme,
    avatarGroup: lightAvatarGroupTheme,
    arrow: lightArrowTheme,
    badge: lightBadgeTheme,
    button: lightButtonTheme,
    chip: lightChipTheme,
    contextMenu: lightContextMenuTheme,
    dialog: lightDialogTheme,
    dialogHeader: lightDialogHeaderTheme,
    divider: lightDividerTheme,
    dotsLoader: lightDotsLoaderTheme,
    drawer: lightDrawerTheme,
    ellipsis: lightEllipsisTheme,
    select: lightSelectTheme,
    list: lightListTheme,
    menu: lightMenuTheme,
    stack: lightStackTheme,
    card: lightCardTheme,
    kbd: lightKbdTheme,
    verticalSpacer: lightVerticalSpacerTheme,
    notification: lightNotificationTheme,
    input: lightInputTheme,
    calendar: lightCalendarTheme,
    calendarRange: lightCalendarRangeTheme,
    commandPalette: lightCommandPaletteTheme,
    collapse: lightCollapseTheme,
    typography: lightTypographyTheme,
    radio: lightRadioTheme,
    range: lightRangeTheme,
    redact: lightRedactTheme,
    toggle: lightToggleTheme,
    tooltip: lightTooltipTheme,
    tree: lightTreeTheme,
    popover: lightPopoverTheme,
    pager: lightPagerTheme
  }
};

export const darkTheme: ReablocksTheme = {
  components: {
    avatar: darkAvatarTheme,
    avatarGroup: darkAvatarGroupTheme,
    arrow: darkArrowTheme,
    badge: darkBadgeTheme,
    button: darkButtonTheme,
    chip: darkChipTheme,
    contextMenu: darkContextMenuTheme,
    dialog: darkDialogTheme,
    dialogHeader: darkDialogHeaderTheme,
    divider: darkDividerTheme,
    dotsLoader: darkDotsLoaderTheme,
    drawer: darkDrawerTheme,
    ellipsis: darkEllipsisTheme,
    select: darkSelectTheme,
    list: darkListTheme,
    menu: darkMenuTheme,
    stack: darkStackTheme,
    card: darkCardTheme,
    kbd: darkKbdTheme,
    verticalSpacer: darkVerticalSpacerTheme,
    notification: darkNotificationTheme,
    input: darkInputTheme,
    calendar: darkCalendarTheme,
    calendarRange: darkCalendarRangeTheme,
    commandPalette: darkCommandPaletteTheme,
    collapse: darkCollapseTheme,
    typography: darkTypographyTheme,
    radio: darkRadioTheme,
    range: darkRangeTheme,
    redact: darkRedactTheme,
    toggle: darkToggleTheme,
    tooltip: darkTooltipTheme,
    tree: darkTreeTheme,
    popover: darkPopoverTheme,
    pager: darkPagerTheme
  }
};
