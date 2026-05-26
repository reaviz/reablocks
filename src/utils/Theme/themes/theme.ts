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
  /** Theme overrides applied to each Reablocks component. */
  components: {
    /** Theme applied to the Avatar component. */
    avatar: AvatarTheme;
    /** Theme applied to the AvatarGroup component. */
    avatarGroup: AvatarGroupTheme;
    /** Theme applied to the Arrow component. */
    arrow: ArrowTheme;
    /** Theme applied to the Badge component. */
    badge: BadgeTheme;
    /** Theme applied to the Button component. */
    button: ButtonTheme;
    /** Theme applied to the Field component. */
    field: FieldTheme;
    /** Theme applied to the Chip component. */
    chip: ChipTheme;
    /** Theme applied to the ContextMenu component. */
    contextMenu: ContextMenuTheme;
    /** Theme applied to the Checkbox component. */
    checkbox: CheckboxTheme;
    /** Theme applied to the DateFormat component. */
    dateFormat: DateFormatTheme;
    /** Theme applied to the Dialog component. */
    dialog: DialogTheme;
    /** Theme applied to the Divider component. */
    divider: DividerTheme;
    /** Theme applied to the DotsLoader component. */
    dotsLoader: DotsLoaderTheme;
    /** Theme applied to the Drawer component. */
    drawer: DrawerTheme;
    /** Theme applied to the Ellipsis component. */
    ellipsis: EllipsisTheme;
    /** Theme applied to the Select component. */
    select: SelectTheme;
    /** Theme applied to the List component. */
    list: ListTheme;
    /** Theme applied to the Menu component. */
    menu: MenuTheme;
    /** Theme applied to the Sort component. */
    sort: SortTheme;
    /** Theme applied to the Card component. */
    card: CardTheme;
    /** Theme applied to the Kbd component. */
    kbd: KbdTheme;
    /** Theme applied to the Notification component. */
    notification: NotificationTheme;
    /** Theme applied to the Navigation component. */
    navigation: NavigationTheme;
    /** Theme applied to the Input component. */
    input: InputTheme;
    /** Theme applied to the DateInput component. */
    dateInput: DateInputTheme;
    /** Theme applied to the Calendar component. */
    calendar: CalendarTheme;
    /** Theme applied to the CalendarRange component. */
    calendarRange: CalendarRangeTheme;
    /** Theme applied to the CommandPalette component. */
    commandPalette: CommandPaletteTheme;
    /** Theme applied to the Collapse component. */
    collapse: CollapseTheme;
    /** Theme applied to the Textarea component. */
    textarea: TextareaTheme;
    /** Theme applied to the Radio component. */
    radio: RadioTheme;
    /** Theme applied to the Range component. */
    range: RangeTheme;
    /** Theme applied to the Redact component. */
    redact: RedactTheme;
    /** Theme applied to the Toggle component. */
    toggle: ToggleTheme;
    /** Theme applied to the Tooltip component. */
    tooltip: TooltipTheme;
    /** Theme applied to the Tree component. */
    tree: TreeTheme;
    /** Theme applied to the JsonTree component. */
    jsonTree: JsonTreeTheme;
    /** Theme applied to the Popover component. */
    popover: PopoverTheme;
    /** Theme applied to the Pager component. */
    pager: PagerTheme;
    /** Theme applied to the Tabs component. */
    tabs: TabsTheme;
    /** Theme applied to the Breadcrumbs component. */
    breadcrumbs: BreadcrumbsTheme;
    /** Theme applied to the Stepper component. */
    stepper: StepperTheme;
    /** Theme applied to the Callout component. */
    callout: CalloutTheme;
    /** Theme applied to the Backdrop component. */
    backdrop: BackdropTheme;
    /** Theme applied to the Skeleton component. */
    skeleton: SkeletonTheme;
    /** Theme applied to the typography components. */
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
