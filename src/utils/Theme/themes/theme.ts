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
  legacyArrowTheme,
  legacyBadgeTheme,
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
  legacySelectTheme,
  legacyCalendarTheme,
  legacyCalendarRangeTheme,
  legacyRadioTheme,
  legacyRangeTheme,
  legacyToggleTheme,
  DateInputTheme,
  dateInputTheme,
  legacyDateInputTheme
} from '@/form';

import {
  ContextMenuTheme,
  legacyContextMenuTheme,
  legacyDrawerTheme,
  legacyMenuTheme,
  legacyNotificationTheme,
  legacyPopoverTheme,
  legacyTooltipTheme,
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
  legacyCalloutTheme,
  BackdropTheme,
  backdropTheme,
  legacyBackdropTheme
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
  legacyBreadcrumbTheme,
  StepperTheme,
  stepperTheme,
  legacyStepperTheme
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
import { DeepPartial } from 'react-hook-form';

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

export const legacyThemeVars: DeepPartial<ReablocksTheme> = {
  components: {
    arrow: legacyArrowTheme,
    badge: legacyBadgeTheme,
    chip: legacyChipTheme,
    contextMenu: legacyContextMenuTheme,
    dateFormat: legacyDateFormatTheme,
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
    dateInput: legacyDateInputTheme,
    calendar: legacyCalendarTheme,
    calendarRange: legacyCalendarRangeTheme,
    commandPalette: legacyCommandPaletteTheme,
    collapse: legacyCollapseTheme,
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
    breadcrumbs: legacyBreadcrumbTheme,
    stepper: legacyStepperTheme,
    callout: legacyCalloutTheme,
    backdrop: legacyBackdropTheme
  }
};
