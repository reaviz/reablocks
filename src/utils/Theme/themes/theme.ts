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
  ChipTheme
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
  DateInputTheme,
  dateInputTheme
} from '@/form';

import {
  ContextMenuTheme,
  contextMenuTheme,
  dialogTheme,
  drawerTheme,
  menuTheme,
  notificationTheme,
  popoverTheme,
  tooltipTheme,
  DialogTheme,
  DrawerTheme,
  MenuTheme,
  NotificationTheme,
  PopoverTheme,
  TooltipTheme,
  CalloutTheme,
  calloutTheme,
  BackdropTheme,
  backdropTheme
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
  verticalSpacerTheme,
  VerticalSpacerTheme,
  CardTheme,
  cardTheme,
  listTheme,
  ListTheme,
  stackTheme,
  StackTheme,
  JsonTreeTheme,
  jsonTreeTheme,
  breadcrumbsTheme,
  BreadcrumbsTheme,
  StepperTheme,
  stepperTheme
} from '@/layout';

import {
  typographyTheme,
  TypographyTheme,
  typographyThemeDeprecated,
  TypographyThemeDeprecated
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
  dateFormatTheme
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
    dateInput: DateInputTheme;
    calendar: CalendarTheme;
    calendarRange: CalendarRangeTheme;
    commandPalette: CommandPaletteTheme;
    collapse: CollapseTheme;
    textarea: TextareaTheme;
    typography_deprecated: TypographyThemeDeprecated;
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
    stepper: StepperTheme;
    callout: CalloutTheme;
    backdrop: BackdropTheme;
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
    dateInput: dateInputTheme,
    calendar: calendarTheme,
    calendarRange: calendarRangeTheme,
    commandPalette: commandPaletteTheme,
    collapse: collapseTheme,
    textarea: textareaTheme,
    typography_deprecated: typographyThemeDeprecated,
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
    breadcrumbs: breadcrumbsTheme,
    stepper: stepperTheme,
    callout: calloutTheme,
    backdrop: backdropTheme
  }
};
