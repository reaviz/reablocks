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
  darkArrowTheme,
  darkChipTheme,
  lightChipTheme,
  ChipTheme,
  legacyAvatarTheme,
  legacyAvatarGroupTheme,
  legacyArrowTheme,
  legacyBadgeTheme,
  legacyButtonTheme,
  legacyChipTheme,
  legacyLoaderTheme,
  legacyKbdTheme,
  legacyCommandPaletteTheme
} from '../../../elements';

import {
  CheckboxTheme,
  darkCheckboxTheme,
  darkInputTheme,
  darkRadioTheme,
  darkRangeTheme,
  darkSelectTheme,
  darkTextareaTheme,
  darkToggleTheme,
  InputTheme,
  lightCheckboxTheme,
  lightInputTheme,
  lightRadioTheme,
  lightRangeTheme,
  lightSelectTheme,
  lightTextareaTheme,
  lightToggleTheme,
  RadioTheme,
  RangeTheme,
  SelectTheme,
  TextareaTheme,
  ToggleTheme,
  CalendarTheme,
  darkCalendarTheme,
  lightCalendarTheme,
  CalendarRangeTheme,
  darkCalendarRangeTheme,
  lightCalendarRangeTheme,
  legacyCheckboxTheme,
  legacySelectTheme,
  legacyInputTheme,
  legacyCalendarTheme,
  legacyCalendarRangeTheme,
  legacyTextareaTheme,
  legacyRadioTheme,
  legacyRangeTheme,
  legacyToggleTheme
} from '../../../form';

import {
  ContextMenuTheme,
  legacyContextMenuTheme,
  legacyDialogTheme,
  legacyDrawerTheme,
  legacyMenuTheme,
  legacyNotificationTheme,
  legacyPopoverTheme,
  legacyTooltipTheme,
  darkContextMenuTheme,
  darkDialogTheme,
  darkDrawerTheme,
  darkMenuTheme,
  darkNotificationTheme,
  darkPopoverTheme,
  darkTooltipTheme,
  DialogTheme,
  DrawerTheme,
  lightContextMenuTheme,
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
  BlockTheme,
  CollapseTheme,
  darkBlockTheme,
  darkCollapseTheme,
  darkDividerTheme,
  darkTreeTheme,
  DividerTheme,
  lightBlockTheme,
  lightCollapseTheme,
  lightDividerTheme,
  lightTreeTheme,
  TabsTheme,
  darkTabsTheme,
  lightTabsTheme,
  TreeTheme,
  legacyBlockTheme,
  legacyListTheme,
  legacyStackTheme,
  legacyCardTheme,
  legacyVerticalSpacerTheme,
  legacyCollapseTheme,
  legacyTreeTheme,
  legacyTabsTheme,
  legacyDividerTheme
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
  legacyTypographyTheme,
  darkTypographyTheme,
  lightTypographyTheme,
  TypographyTheme
} from '../../../typography';

import {
  darkEllipsisTheme,
  EllipsisTheme,
  lightEllipsisTheme,
  PagerTheme,
  darkPagerTheme,
  lightPagerTheme,
  RedactTheme,
  lightRedactTheme,
  darkRedactTheme,
  SortTheme,
  lightSortTheme,
  darkSortTheme,
  DateFormatTheme,
  lightDateFormatTheme,
  darkDateFormatTheme,
  legacyDateFormatTheme,
  legacyEllipsisTheme,
  legacySortTheme,
  legacyRedactTheme,
  legacyPagerTheme
} from '../../../data';

export interface ReablocksTheme {
  components: {
    avatar: AvatarTheme;
    avatarGroup: AvatarGroupTheme;
    arrow: ArrowTheme;
    badge: BadgeTheme;
    button: ButtonTheme;
    block: BlockTheme;
    chip: ChipTheme;
    contextMenu: ContextMenuTheme;
    checkbox: CheckboxTheme;
    dateFormat: DateFormatTheme;
    dialog: DialogTheme;
    divider: DividerTheme;
    dotsLoader: DotsLoaderTheme;
    drawer: DrawerTheme;
    ellipsis: EllipsisTheme;
    select: SelectTheme;
    list: ListTheme;
    menu: MenuTheme;
    sort: SortTheme;
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
    textarea: TextareaTheme;
    typography: TypographyTheme;
    radio: RadioTheme;
    range: RangeTheme;
    redact: RedactTheme;
    toggle: ToggleTheme;
    tooltip: TooltipTheme;
    tree: TreeTheme;
    popover: PopoverTheme;
    pager: PagerTheme;
    tabs: TabsTheme;
  };
}

export const lightTheme: ReablocksTheme = {
  components: {
    avatar: lightAvatarTheme,
    avatarGroup: lightAvatarGroupTheme,
    arrow: lightArrowTheme,
    badge: lightBadgeTheme,
    button: lightButtonTheme,
    block: lightBlockTheme,
    chip: lightChipTheme,
    contextMenu: lightContextMenuTheme,
    checkbox: lightCheckboxTheme,
    dateFormat: lightDateFormatTheme,
    dialog: lightDialogTheme,
    divider: lightDividerTheme,
    dotsLoader: lightDotsLoaderTheme,
    drawer: lightDrawerTheme,
    ellipsis: lightEllipsisTheme,
    select: lightSelectTheme,
    list: lightListTheme,
    menu: lightMenuTheme,
    sort: lightSortTheme,
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
    textarea: lightTextareaTheme,
    typography: lightTypographyTheme,
    radio: lightRadioTheme,
    range: lightRangeTheme,
    redact: lightRedactTheme,
    toggle: lightToggleTheme,
    tooltip: lightTooltipTheme,
    tree: lightTreeTheme,
    popover: lightPopoverTheme,
    pager: lightPagerTheme,
    tabs: lightTabsTheme
  }
};

export const darkTheme: ReablocksTheme = {
  components: {
    avatar: darkAvatarTheme,
    avatarGroup: darkAvatarGroupTheme,
    arrow: darkArrowTheme,
    badge: darkBadgeTheme,
    button: darkButtonTheme,
    block: darkBlockTheme,
    chip: darkChipTheme,
    contextMenu: darkContextMenuTheme,
    checkbox: darkCheckboxTheme,
    dateFormat: darkDateFormatTheme,
    dialog: darkDialogTheme,
    divider: darkDividerTheme,
    dotsLoader: darkDotsLoaderTheme,
    drawer: darkDrawerTheme,
    ellipsis: darkEllipsisTheme,
    select: darkSelectTheme,
    list: darkListTheme,
    menu: darkMenuTheme,
    sort: darkSortTheme,
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
    textarea: darkTextareaTheme,
    typography: darkTypographyTheme,
    radio: darkRadioTheme,
    range: darkRangeTheme,
    redact: darkRedactTheme,
    toggle: darkToggleTheme,
    tooltip: darkTooltipTheme,
    tree: darkTreeTheme,
    popover: darkPopoverTheme,
    pager: darkPagerTheme,
    tabs: darkTabsTheme
  }
};

export const legacyThemeVars: ReablocksTheme = {
  components: {
    avatar: legacyAvatarTheme,
    avatarGroup: legacyAvatarGroupTheme,
    arrow: legacyArrowTheme,
    badge: legacyBadgeTheme,
    button: legacyButtonTheme,
    block: legacyBlockTheme,
    chip: legacyChipTheme,
    contextMenu: legacyContextMenuTheme,
    checkbox: legacyCheckboxTheme,
    dateFormat: legacyDateFormatTheme,
    dialog: legacyDialogTheme,
    divider: legacyDividerTheme,
    dotsLoader: legacyLoaderTheme,
    drawer: legacyDrawerTheme,
    ellipsis: legacyEllipsisTheme,
    select: legacySelectTheme,
    list: legacyListTheme,
    menu: legacyMenuTheme,
    sort: legacySortTheme,
    stack: legacyStackTheme,
    card: legacyCardTheme,
    kbd: legacyKbdTheme,
    verticalSpacer: legacyVerticalSpacerTheme,
    notification: legacyNotificationTheme,
    input: legacyInputTheme,
    calendar: legacyCalendarTheme,
    calendarRange: legacyCalendarRangeTheme,
    commandPalette: legacyCommandPaletteTheme,
    collapse: legacyCollapseTheme,
    textarea: legacyTextareaTheme,
    typography: legacyTypographyTheme,
    radio: legacyRadioTheme,
    range: legacyRangeTheme,
    redact: legacyRedactTheme,
    toggle: legacyToggleTheme,
    tooltip: legacyTooltipTheme,
    tree: legacyTreeTheme,
    popover: legacyPopoverTheme,
    pager: legacyPagerTheme,
    tabs: legacyTabsTheme
  }
};
