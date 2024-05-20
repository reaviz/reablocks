import {
  buttonTheme,
  ButtonTheme,
  CommandPaletteTheme,
  commandPaletteTheme,
  AvatarTheme,
  avatarTheme,
  KbdTheme,
  kbdTheme,
  AvatarGroupTheme,
  avatarGroupTheme,
  BadgeTheme,
  badgeTheme,
  DotsLoaderTheme,
  dotsLoaderTheme,
  ArrowTheme,
  arrowTheme,
  chipTheme,
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
} from '@/elements';

import {
  CheckboxTheme,
  checkboxTheme,
  inputTheme,
  radioTheme,
  rangeTheme,
  selectTheme,
  textareaTheme,
  toggleTheme,
  InputTheme,
  RadioTheme,
  RangeTheme,
  SelectTheme,
  TextareaTheme,
  ToggleTheme,
  CalendarTheme,
  calendarTheme,
  CalendarRangeTheme,
  calendarRangeTheme,
  legacyCheckboxTheme,
  legacySelectTheme,
  legacyInputTheme,
  legacyCalendarTheme,
  legacyCalendarRangeTheme,
  legacyTextareaTheme,
  legacyRadioTheme,
  legacyRangeTheme,
  legacyToggleTheme
} from '@/form';

import {
  ContextMenuTheme,
  legacyContextMenuTheme,
  legacyDialogTheme,
  legacyDrawerTheme,
  legacyMenuTheme,
  legacyNotificationTheme,
  legacyPopoverTheme,
  legacyTooltipTheme,
  contextMenuTheme,
  dialogTheme,
  notificationDialogTheme,
  legacyNotificationDialogTheme,
  drawerTheme,
  menuTheme,
  notificationTheme,
  popoverTheme,
  tooltipTheme,
  DialogTheme,
  NotificationDialogTheme,
  DrawerTheme,
  MenuTheme,
  NotificationTheme,
  PopoverTheme,
  TooltipTheme
} from '@/layers';

import {
  BlockTheme,
  CollapseTheme,
  blockTheme,
  collapseTheme,
  dividerTheme,
  treeTheme,
  DividerTheme,
  TabsTheme,
  tabsTheme,
  TreeTheme,
  legacyBlockTheme,
  legacyListTheme,
  verticalSpacerTheme,
  VerticalSpacerTheme,
  CardTheme,
  cardTheme,
  listTheme,
  ListTheme,
  stackTheme,
  StackTheme,
  legacyStackTheme,
  legacyCardTheme,
  legacyVerticalSpacerTheme,
  legacyCollapseTheme,
  legacyTreeTheme,
  legacyTabsTheme,
  legacyDividerTheme,
  JsonTreeTheme,
  jsonTreeTheme,
  legacyJsonTreeTheme,
  breadcrumbsTheme,
  BreadcrumbsTheme,
  legacyBreadcrumbTheme
} from '@/layout';

import {
  legacyTypographyTheme,
  typographyTheme,
  TypographyTheme
} from '@/typography';

import {
  ellipsisTheme,
  EllipsisTheme,
  PagerTheme,
  pagerTheme,
  RedactTheme,
  redactTheme,
  SortTheme,
  sortTheme,
  DateFormatTheme,
  dateFormatTheme,
  legacyDateFormatTheme,
  legacyEllipsisTheme,
  legacySortTheme,
  legacyRedactTheme,
  legacyPagerTheme
} from '@/data';

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
    notificationDialog: NotificationDialogTheme;
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
    jsonTree: JsonTreeTheme;
    popover: PopoverTheme;
    pager: PagerTheme;
    tabs: TabsTheme;
    breadcrumbs: BreadcrumbsTheme;
  };
}

export const theme: ReablocksTheme = {
  components: {
    avatar: avatarTheme,
    avatarGroup: avatarGroupTheme,
    arrow: arrowTheme,
    badge: badgeTheme,
    button: buttonTheme,
    block: blockTheme,
    chip: chipTheme,
    contextMenu: contextMenuTheme,
    checkbox: checkboxTheme,
    dateFormat: dateFormatTheme,
    dialog: dialogTheme,
    notificationDialog: notificationDialogTheme,
    divider: dividerTheme,
    dotsLoader: dotsLoaderTheme,
    drawer: drawerTheme,
    ellipsis: ellipsisTheme,
    select: selectTheme,
    list: listTheme,
    menu: menuTheme,
    sort: sortTheme,
    stack: stackTheme,
    card: cardTheme,
    kbd: kbdTheme,
    verticalSpacer: verticalSpacerTheme,
    notification: notificationTheme,
    input: inputTheme,
    calendar: calendarTheme,
    calendarRange: calendarRangeTheme,
    commandPalette: commandPaletteTheme,
    collapse: collapseTheme,
    textarea: textareaTheme,
    typography: typographyTheme,
    radio: radioTheme,
    range: rangeTheme,
    redact: redactTheme,
    toggle: toggleTheme,
    tooltip: tooltipTheme,
    tree: treeTheme,
    popover: popoverTheme,
    pager: pagerTheme,
    tabs: tabsTheme,
    jsonTree: jsonTreeTheme,
    breadcrumbs: breadcrumbsTheme
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
    notificationDialog: legacyNotificationDialogTheme,
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
    tabs: legacyTabsTheme,
    jsonTree: legacyJsonTreeTheme,
    breadcrumbs: legacyBreadcrumbTheme
  }
};
