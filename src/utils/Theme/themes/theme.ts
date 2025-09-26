import type {
  DateFormatTheme,
  EllipsisTheme,
  PagerTheme,
  RedactTheme,
  SortTheme,
} from '@/data';
import {
  dateFormatTheme,
  ellipsisTheme,
  pagerTheme,
  redactTheme,
  sortTheme,
} from '@/data';
import type {
  ArrowTheme,
  AvatarGroupTheme,
  AvatarTheme,
  BadgeTheme,
  ButtonTheme,
  ChipTheme,
  CommandPaletteTheme,
  DotsLoaderTheme,
  KbdTheme,
  NavigationTheme,
} from '@/elements';
import {
  arrowTheme,
  avatarGroupTheme,
  avatarTheme,
  badgeTheme,
  buttonTheme,
  chipTheme,
  commandPaletteTheme,
  dotsLoaderTheme,
  kbdTheme,
  navigationTheme,
} from '@/elements';
import type {
  CalendarRangeTheme,
  CalendarTheme,
  CheckboxTheme,
  DateInputTheme,
  InputTheme,
  RadioTheme,
  RangeTheme,
  SelectTheme,
  TextareaTheme,
  ToggleTheme,
} from '@/form';
import {
  calendarRangeTheme,
  calendarTheme,
  checkboxTheme,
  dateInputTheme,
  inputTheme,
  radioTheme,
  rangeTheme,
  selectTheme,
  textareaTheme,
  toggleTheme,
} from '@/form';
import type {
  BackdropTheme,
  CalloutTheme,
  ContextMenuTheme,
  DialogTheme,
  DrawerTheme,
  MenuTheme,
  NotificationTheme,
  PopoverTheme,
  TooltipTheme,
} from '@/layers';
import {
  backdropTheme,
  calloutTheme,
  contextMenuTheme,
  dialogTheme,
  drawerTheme,
  menuTheme,
  notificationTheme,
  popoverTheme,
  tooltipTheme,
} from '@/layers';
import type {
  BlockTheme,
  BreadcrumbsTheme,
  CardTheme,
  CollapseTheme,
  DividerTheme,
  JsonTreeTheme,
  ListTheme,
  StackTheme,
  StepperTheme,
  TabsTheme,
  TreeTheme,
  VerticalSpacerTheme,
} from '@/layout';
import {
  blockTheme,
  breadcrumbsTheme,
  cardTheme,
  collapseTheme,
  dividerTheme,
  jsonTreeTheme,
  listTheme,
  stackTheme,
  stepperTheme,
  tabsTheme,
  treeTheme,
  verticalSpacerTheme,
} from '@/layout';
import type { TypographyTheme, TypographyThemeDeprecated } from '@/typography';
import { typographyTheme, typographyThemeDeprecated } from '@/typography';

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
    navigation: NavigationTheme;
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
    backdrop: backdropTheme,
    navigation: navigationTheme,
  },
};
