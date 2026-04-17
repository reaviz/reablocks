import {
  type DateFormatTheme,
  defaultDateFormatTheme
} from '@/data/DateFormat/DateFormatTheme';
import {
  defaultEllipsisTheme,
  type EllipsisTheme
} from '@/data/Ellipsis/EllipsisTheme';
import { defaultPagerTheme, type PagerTheme } from '@/data/Pager/PagerTheme';
import {
  defaultRedactTheme,
  type RedactTheme
} from '@/data/Redact/RedactTheme';
import { defaultSortTheme, type SortTheme } from '@/data/Sort/SortTheme';
import {
  type AvatarTheme,
  defaultAvatarTheme
} from '@/elements/Avatar/AvatarTheme';
import {
  type AvatarGroupTheme,
  defaultAvatarGroupTheme
} from '@/elements/AvatarGroup/AvatarGroupTheme';
import {
  type BadgeTheme,
  defaultBadgeTheme
} from '@/elements/Badge/BadgeTheme';
import {
  type ButtonTheme,
  defaultButtonTheme
} from '@/elements/Button/ButtonTheme';
import { type ChipTheme, defaultChipTheme } from '@/elements/Chip/ChipTheme';
import {
  type CommandPaletteTheme,
  defaultCommandPaletteTheme
} from '@/elements/CommandPalette/CommandPaletteTheme';
import { defaultKbdTheme, type KbdTheme } from '@/elements/Kbd/KbdTheme';
import {
  defaultDotsLoaderTheme,
  type DotsLoaderTheme
} from '@/elements/Loader/DotsLoaderTheme';
import {
  defaultNavigationTheme,
  type NavigationTheme
} from '@/elements/Navigation/NavigationTheme';
import {
  defaultSkeletonTheme,
  type SkeletonTheme
} from '@/elements/Skeleton/SkeletonTheme';
import {
  type CalendarRangeTheme,
  defaultCalendarRangeTheme
} from '@/form/Calendar/CalendarRangeTheme';
import {
  type CalendarTheme,
  defaultCalendarTheme
} from '@/form/Calendar/CalendarTheme';
import {
  type CheckboxTheme,
  defaultCheckboxTheme
} from '@/form/Checkbox/CheckboxTheme';
import type { DateInputTheme } from '@/form/DateInput/DateInputTheme';
import { defaultDateInputTheme } from '@/form/DateInput/DateInputTheme';
import { defaultInputTheme, type InputTheme } from '@/form/Input/InputTheme';
import { defaultRadioTheme, type RadioTheme } from '@/form/Radio/RadioTheme';
import { defaultRangeTheme, type RangeTheme } from '@/form/Range/RangeTheme';
import {
  defaultSelectTheme,
  type SelectTheme
} from '@/form/Select/SelectTheme';
import type { TextareaTheme } from '@/form/Textarea/TextareaTheme';
import { defaultTextareaTheme } from '@/form/Textarea/TextareaTheme';
import {
  defaultToggleTheme,
  type ToggleTheme
} from '@/form/Toggle/ToggleTheme';
import {
  type BackdropTheme,
  defaultBackdropTheme
} from '@/layers/Backdrop/BackdropTheme';
import {
  type CalloutTheme,
  defaultCalloutTheme
} from '@/layers/Callout/CalloutTheme';
import {
  type ContextMenuTheme,
  defaultContextMenuTheme
} from '@/layers/ContextMenu/ContextMenuTheme';
import {
  defaultDialogTheme,
  type DialogTheme
} from '@/layers/Dialog/DialogTheme';
import {
  defaultDrawerTheme,
  type DrawerTheme
} from '@/layers/Drawer/DrawerTheme';
import { defaultMenuTheme, type MenuTheme } from '@/layers/Menu/MenuTheme';
import {
  defaultNotificationTheme,
  type NotificationTheme
} from '@/layers/Notification/NotificationTheme';
import {
  defaultPopoverTheme,
  type PopoverTheme
} from '@/layers/Popover/PopoverTheme';
import {
  defaultTooltipTheme,
  type TooltipTheme
} from '@/layers/Tooltip/TooltipTheme';
import {
  type BreadcrumbsTheme,
  defaultBreadcrumbsTheme
} from '@/layout/Breadcrumbs/BreadcrumbsTheme';
import { type CardTheme, defaultCardTheme } from '@/layout/Card/CardTheme';
import {
  type CollapseTheme,
  defaultCollapseTheme
} from '@/layout/Collapse/CollapseTheme';
import {
  defaultDividerTheme,
  type DividerTheme
} from '@/layout/Divider/DividerTheme';
import { defaultFieldTheme, FieldTheme } from '@/layout/Field/FieldTheme';
import { defaultListTheme, type ListTheme } from '@/layout/List/ListTheme';
import {
  defaultStepperTheme,
  type StepperTheme
} from '@/layout/Stepper/StepperTheme';
import { defaultTabsTheme, type TabsTheme } from '@/layout/Tabs/TabsTheme';
import {
  defaultJsonTreeTheme,
  type JsonTreeTheme
} from '@/layout/Tree/JsonTree/JsonTreeTheme';
import { defaultTreeTheme, type TreeTheme } from '@/layout/Tree/TreeTheme';
import { defaultTypographyTheme, TypographyTheme } from '@/typography';

export interface ReablocksTheme {
  components: {
    avatar: AvatarTheme;
    avatarGroup: AvatarGroupTheme;
    badge: BadgeTheme;
    button: ButtonTheme;
    chip: ChipTheme;
    contextMenu: ContextMenuTheme;
    checkbox: CheckboxTheme;
    dateFormat: DateFormatTheme;
    dialog: DialogTheme;
    divider: DividerTheme;
    dotsLoader: DotsLoaderTheme;
    drawer: DrawerTheme;
    ellipsis: EllipsisTheme;
    field: FieldTheme;
    select: SelectTheme;
    list: ListTheme;
    menu: MenuTheme;
    sort: SortTheme;
    card: CardTheme;
    kbd: KbdTheme;
    notification: NotificationTheme;
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
    navigation: NavigationTheme;
    skeleton: SkeletonTheme;
    typography: TypographyTheme;
  };
}

export const theme: ReablocksTheme = {
  components: {
    avatar: defaultAvatarTheme,
    avatarGroup: defaultAvatarGroupTheme,
    backdrop: defaultBackdropTheme,
    badge: defaultBadgeTheme,
    breadcrumbs: defaultBreadcrumbsTheme,
    button: defaultButtonTheme,
    calendar: defaultCalendarTheme,
    calendarRange: defaultCalendarRangeTheme,
    card: defaultCardTheme,
    callout: defaultCalloutTheme,
    checkbox: defaultCheckboxTheme,
    chip: defaultChipTheme,
    contextMenu: defaultContextMenuTheme,
    commandPalette: defaultCommandPaletteTheme,
    collapse: defaultCollapseTheme,
    dateFormat: defaultDateFormatTheme,
    dateInput: defaultDateInputTheme,
    dialog: defaultDialogTheme,
    divider: defaultDividerTheme,
    dotsLoader: defaultDotsLoaderTheme,
    drawer: defaultDrawerTheme,
    ellipsis: defaultEllipsisTheme,
    field: defaultFieldTheme,
    input: defaultInputTheme,
    jsonTree: defaultJsonTreeTheme,
    kbd: defaultKbdTheme,
    list: defaultListTheme,
    menu: defaultMenuTheme,
    notification: defaultNotificationTheme,
    navigation: defaultNavigationTheme,
    pager: defaultPagerTheme,
    popover: defaultPopoverTheme,
    radio: defaultRadioTheme,
    range: defaultRangeTheme,
    redact: defaultRedactTheme,
    sort: defaultSortTheme,
    select: defaultSelectTheme,
    stepper: defaultStepperTheme,
    tabs: defaultTabsTheme,
    textarea: defaultTextareaTheme,
    toggle: defaultToggleTheme,
    tooltip: defaultTooltipTheme,
    tree: defaultTreeTheme,
    skeleton: defaultSkeletonTheme,
    typography: defaultTypographyTheme
  }
};
