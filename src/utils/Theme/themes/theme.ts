import type {
  DateFormatTheme,
  EllipsisTheme,
  PagerTheme,
  RedactTheme,
  SortTheme
} from '@/data';
import { dateFormatTheme } from '@/data/DateFormat/DateFormatTheme';
import { ellipsisTheme } from '@/data/Ellipsis/EllipsisTheme';
import { pagerTheme } from '@/data/Pager/PagerTheme';
import { redactTheme } from '@/data/Redact/RedactTheme';
import { sortTheme } from '@/data/Sort/SortTheme';
import {
  type ArrowTheme,
  type AvatarGroupTheme,
  type AvatarTheme,
  type BadgeTheme,
  type ButtonTheme,
  type ChipTheme,
  type CommandPaletteTheme,
  type DotsLoaderTheme,
  type KbdTheme,
  type NavigationTheme
} from '@/elements';
import { arrowTheme } from '@/elements/Arrow/ArrowTheme';
import { avatarTheme } from '@/elements/Avatar/AvatarTheme';
import { avatarGroupTheme } from '@/elements/AvatarGroup/AvatarGroupTheme';
import { badgeTheme } from '@/elements/Badge/BadgeTheme';
import { buttonTheme } from '@/elements/Button/ButtonTheme';
import { chipTheme } from '@/elements/Chip/ChipTheme';
import { commandPaletteTheme } from '@/elements/CommandPalette/CommandPaletteTheme';
import { kbdTheme } from '@/elements/Kbd/KbdTheme';
import { dotsLoaderTheme } from '@/elements/Loader/DotsLoaderTheme';
import { navigationTheme } from '@/elements/Navigation/NavigationTheme';
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
  ToggleTheme
} from '@/form';
import { calendarRangeTheme } from '@/form/Calendar/CalendarRangeTheme';
import { calendarTheme } from '@/form/Calendar/CalendarTheme';
import { checkboxTheme } from '@/form/Checkbox/CheckboxTheme';
import { dateInputTheme } from '@/form/DateInput/DateInputTheme';
import { inputTheme } from '@/form/Input/InputTheme';
import { radioTheme } from '@/form/Radio/RadioTheme';
import { rangeTheme } from '@/form/Range/RangeTheme';
import { selectTheme } from '@/form/Select/SelectTheme';
import { textareaTheme } from '@/form/Textarea/TextareaTheme';
import { toggleTheme } from '@/form/Toggle/ToggleTheme';
import type {
  BackdropTheme,
  CalloutTheme,
  ContextMenuTheme,
  DialogTheme,
  DrawerTheme,
  MenuTheme,
  NotificationTheme,
  PopoverTheme,
  TooltipTheme
} from '@/layers';
import { backdropTheme } from '@/layers/Backdrop/BackdropTheme';
import { calloutTheme } from '@/layers/Callout/CalloutTheme';
import { contextMenuTheme } from '@/layers/ContextMenu/ContextMenuTheme';
import { dialogTheme } from '@/layers/Dialog/DialogTheme';
import { drawerTheme } from '@/layers/Drawer/DrawerTheme';
import { menuTheme } from '@/layers/Menu/MenuTheme';
import { notificationTheme } from '@/layers/Notification/NotificationTheme';
import { popoverTheme } from '@/layers/Popover/PopoverTheme';
import { tooltipTheme } from '@/layers/Tooltip/TooltipTheme';
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
  VerticalSpacerTheme
} from '@/layout';
import { blockTheme } from '@/layout/Block/BlockTheme';
import { breadcrumbsTheme } from '@/layout/Breadcrumbs/BreadcrumbsTheme';
import { cardTheme } from '@/layout/Card/CardTheme';
import { collapseTheme } from '@/layout/Collapse/CollapseTheme';
import { dividerTheme } from '@/layout/Divider/DividerTheme';
import { listTheme } from '@/layout/List/ListTheme';
import { stackTheme } from '@/layout/Stack/StackTheme';
import { stepperTheme } from '@/layout/Stepper/StepperTheme';
import { tabsTheme } from '@/layout/Tabs/TabsTheme';
import { jsonTreeTheme } from '@/layout/Tree/JsonTree/JsonTreeTheme';
import { treeTheme } from '@/layout/Tree/TreeTheme';
import { verticalSpacerTheme } from '@/layout/VerticalSpacer/VerticalSpacerTheme';
import type { TypographyTheme, TypographyThemeDeprecated } from '@/typography';
import { typographyTheme } from '@/typography/TypographyTheme';
import { typographyThemeDeprecated } from '@/typography/TypographyThemeDeprecated';

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
    navigation: navigationTheme
  }
};
