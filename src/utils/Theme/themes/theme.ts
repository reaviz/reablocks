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
  SkeletonTheme,
  skeletonTheme,
  NavigationTheme,
  navigationTheme
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
  FieldTheme,
  CollapseTheme,
  fieldTheme,
  collapseTheme,
  dividerTheme,
  treeTheme,
  DividerTheme,
  TabsTheme,
  tabsTheme,
  TreeTheme,
  CardTheme,
  cardTheme,
  listTheme,
  ListTheme,
  JsonTreeTheme,
  jsonTreeTheme,
  breadcrumbsTheme,
  BreadcrumbsTheme,
  StepperTheme,
  stepperTheme
} from '@/layout';

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

import { TypographyTheme, typographyTheme } from '@/typography';

export interface ReablocksTheme {
  components: {
    avatar: AvatarTheme;
    avatarGroup: AvatarGroupTheme;
    arrow: ArrowTheme;
    badge: BadgeTheme;
    button: ButtonTheme;
    field: FieldTheme;
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
    card: CardTheme;
    kbd: KbdTheme;
    notification: NotificationTheme;
    navigation: NavigationTheme;
    input: InputTheme;
    dateInput: DateInputTheme;
    calendar: CalendarTheme;
    calendarRange: CalendarRangeTheme;
    commandPalette: CommandPaletteTheme;
    collapse: CollapseTheme;
    textarea: TextareaTheme;
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
    skeleton: SkeletonTheme;
    typography: TypographyTheme;
  };
}

export const theme: ReablocksTheme = {
  components: {
    avatar: avatarTheme,
    avatarGroup: avatarGroupTheme,
    arrow: arrowTheme,
    badge: badgeTheme,
    button: buttonTheme,
    field: fieldTheme,
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
    card: cardTheme,
    kbd: kbdTheme,
    notification: notificationTheme,
    navigation: navigationTheme,
    input: inputTheme,
    dateInput: dateInputTheme,
    calendar: calendarTheme,
    calendarRange: calendarRangeTheme,
    commandPalette: commandPaletteTheme,
    collapse: collapseTheme,
    textarea: textareaTheme,
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
    backdrop: backdropTheme,
    skeleton: skeletonTheme,
    typography: typographyTheme
  }
};
