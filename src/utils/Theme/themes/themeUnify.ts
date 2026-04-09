import { unifyDateFormatTheme } from '@/data/DateFormat/DateFormatTheme';
import { unifyEllipsisTheme } from '@/data/Ellipsis/EllipsisTheme';
import { unifyPagerTheme } from '@/data/Pager/PagerTheme';
import { unifyRedactTheme } from '@/data/Redact/RedactTheme';
import { unifySortTheme } from '@/data/Sort/SortTheme';
import { unifyAvatarTheme } from '@/elements/Avatar/AvatarTheme';
import { unifyAvatarGroupTheme } from '@/elements/AvatarGroup/AvatarGroupTheme';
import { unifyBadgeTheme } from '@/elements/Badge/BadgeTheme';
import { unifyButtonTheme } from '@/elements/Button/ButtonTheme';
import { unifyChipTheme } from '@/elements/Chip/ChipTheme';
import { unifyCommandPaletteTheme } from '@/elements/CommandPalette/CommandPaletteTheme';
import { unifyKbdTheme } from '@/elements/Kbd/KbdTheme';
import { unifyDotsLoaderTheme } from '@/elements/Loader/DotsLoaderTheme';
import { unifyNavigationTheme } from '@/elements/Navigation/NavigationTheme';
import { unifySkeletonTheme } from '@/elements/Skeleton/SkeletonTheme';
import { unifyCalendarRangeTheme } from '@/form/Calendar/CalendarRangeTheme';
import { unifyCalendarTheme } from '@/form/Calendar/CalendarTheme';
import { unifyCheckboxTheme } from '@/form/Checkbox/CheckboxTheme';
import { unifyDateInputTheme } from '@/form/DateInput/DateInputTheme';
import { unifyInputTheme } from '@/form/Input/InputTheme';
import { unifyRadioTheme } from '@/form/Radio/RadioTheme';
import { unifyRangeTheme } from '@/form/Range/RangeTheme';
import { unifySelectTheme } from '@/form/Select/SelectTheme';
import { unifyTextareaTheme } from '@/form/Textarea/TextareaTheme';
import { unifyToggleTheme } from '@/form/Toggle/ToggleTheme';
import { unifyBackdropTheme } from '@/layers/Backdrop/BackdropTheme';
import { unifyCalloutTheme } from '@/layers/Callout/CalloutTheme';
import { unifyContextMenuTheme } from '@/layers/ContextMenu/ContextMenuTheme';
import { unifyDialogTheme } from '@/layers/Dialog/DialogTheme';
import { unifyDrawerTheme } from '@/layers/Drawer/DrawerTheme';
import { unifyMenuTheme } from '@/layers/Menu/MenuTheme';
import { unifyNotificationTheme } from '@/layers/Notification/NotificationTheme';
import { unifyPopoverTheme } from '@/layers/Popover/PopoverTheme';
import { unifyTooltipTheme } from '@/layers/Tooltip/TooltipTheme';
import { unifyBreadcrumbsTheme } from '@/layout/Breadcrumbs/BreadcrumbsTheme';
import { unifyCardTheme } from '@/layout/Card/CardTheme';
import { unifyCollapseTheme } from '@/layout/Collapse/CollapseTheme';
import { unifyDividerTheme } from '@/layout/Divider/DividerTheme';
import { unifyListTheme } from '@/layout/List/ListTheme';
import { unifyStepperTheme } from '@/layout/Stepper/StepperTheme';
import { unifyTabsTheme } from '@/layout/Tabs/TabsTheme';
import { unifyJsonTreeTheme } from '@/layout/Tree/JsonTree/JsonTreeTheme';
import { unifyTreeTheme } from '@/layout/Tree/TreeTheme';
import { unifyFieldTheme } from '@/layout/Field/FieldTheme';
import { unifyTypographyTheme } from '@/typography';

import type { ReablocksTheme } from './themeDefault';

/**
 * Unify Design System theme.
 *
 * This theme uses Unify Design System tokens and styling.
 * Pass it as the base theme to ThemeProvider:
 *
 * @example
 * ```tsx
 * import { ThemeProvider, themeUnify } from 'reablocks';
 *
 * <ThemeProvider overrides={themeUnify}>
 *   <App />
 * </ThemeProvider>
 * ```
 *
 * NOTE: This theme relies on Unify CSS custom properties being defined.
 * Make sure to import the Unify CSS (`reablocks/unify.css`) in your application.
 */
export const themeUnify: ReablocksTheme = {
  components: {
    avatar: unifyAvatarTheme,
    avatarGroup: unifyAvatarGroupTheme,
    backdrop: unifyBackdropTheme,
    badge: unifyBadgeTheme,
    breadcrumbs: unifyBreadcrumbsTheme,
    button: unifyButtonTheme,
    calendar: unifyCalendarTheme,
    calendarRange: unifyCalendarRangeTheme,
    card: unifyCardTheme,
    callout: unifyCalloutTheme,
    checkbox: unifyCheckboxTheme,
    chip: unifyChipTheme,
    contextMenu: unifyContextMenuTheme,
    commandPalette: unifyCommandPaletteTheme,
    collapse: unifyCollapseTheme,
    dateFormat: unifyDateFormatTheme,
    dateInput: unifyDateInputTheme,
    dialog: unifyDialogTheme,
    divider: unifyDividerTheme,
    dotsLoader: unifyDotsLoaderTheme,
    drawer: unifyDrawerTheme,
    ellipsis: unifyEllipsisTheme,
    field: unifyFieldTheme,
    input: unifyInputTheme,
    jsonTree: unifyJsonTreeTheme,
    kbd: unifyKbdTheme,
    list: unifyListTheme,
    menu: unifyMenuTheme,
    navigation: unifyNavigationTheme,
    notification: unifyNotificationTheme,
    pager: unifyPagerTheme,
    popover: unifyPopoverTheme,
    radio: unifyRadioTheme,
    range: unifyRangeTheme,
    redact: unifyRedactTheme,
    sort: unifySortTheme,
    select: unifySelectTheme,
    stepper: unifyStepperTheme,
    tabs: unifyTabsTheme,
    textarea: unifyTextareaTheme,
    toggle: unifyToggleTheme,
    tooltip: unifyTooltipTheme,
    tree: unifyTreeTheme,
    skeleton: unifySkeletonTheme,
    typography: unifyTypographyTheme
  }
};
