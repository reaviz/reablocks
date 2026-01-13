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
  type ArrowTheme,
  defaultArrowTheme
} from '@/elements/Arrow/ArrowTheme';
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
import { type BlockTheme, defaultBlockTheme } from '@/layout/Block/BlockTheme';
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
import { defaultListTheme, type ListTheme } from '@/layout/List/ListTheme';
import { defaultStackTheme, type StackTheme } from '@/layout/Stack/StackTheme';
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
import {
  defaultVerticalSpacerTheme,
  type VerticalSpacerTheme
} from '@/layout/VerticalSpacer/VerticalSpacerTheme';
import {
  defaultTypographyTheme,
  type TypographyTheme
} from '@/typography/TypographyTheme';
import {
  defaultTypographyThemeDeprecated,
  type TypographyThemeDeprecated
} from '@/typography/TypographyThemeDeprecated';

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
    skeleton: SkeletonTheme;
  };
}

export const theme: ReablocksTheme = {
  components: {
    avatar: defaultAvatarTheme,
    avatarGroup: defaultAvatarGroupTheme,
    arrow: defaultArrowTheme,
    backdrop: defaultBackdropTheme,
    badge: defaultBadgeTheme,
    block: defaultBlockTheme,
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
    stack: defaultStackTheme,
    stepper: defaultStepperTheme,
    tabs: defaultTabsTheme,
    textarea: defaultTextareaTheme,
    toggle: defaultToggleTheme,
    tooltip: defaultTooltipTheme,
    tree: defaultTreeTheme,
    typography: defaultTypographyTheme,
    typography_deprecated: defaultTypographyThemeDeprecated,
    verticalSpacer: defaultVerticalSpacerTheme,
    skeleton: defaultSkeletonTheme
  }
};
