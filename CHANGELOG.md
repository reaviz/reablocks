# Master
- [feature] Navigation component #342

# 10.0.0-beta.3 - 5/5/26
- [feature] Ability to pass start/end for Tab component #341
- [fix] DeepPartial export #340

# 10.0.0-beta.2 - 4/9/26
- misc fixes 

# 10.0.0-beta.1 - 3/17/26

## Breaking Changes

### Typography: Complete Rewrite
The old typography components have been removed and replaced with semantic HTML wrappers.

**Removed components:**
- `PageTitle` — use `H1` instead
- `PrimaryHeading` — use `H2` instead
- `SecondaryHeading` — use `H3` instead
- `SmallHeading` — use `H4` instead
- `Sub` — use `H5` instead
- `Text` — use `P`, `Small`, or `Muted` instead

**New components:** `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `BlockQuote`, `Lead`, `Large`, `Small`, `Muted`

**Theme shape changed:**
```
// Before
typography: { base, text: { thin, bold, ... }, variant: { default, mono }, colors: { ... }, sub, smallHeading, ... }

// After
typography: { h1, h2, h3, h4, h5, h6, p, blockquote, lead, large, small, muted }
```

The old props `color`, `variant`, `fontStyle`, and `disableMargins` are gone — use `className` or theme customization.

### Layout: Block renamed to Field, Stack and VerticalSpacer removed
- `Block` → renamed to `Field`. Update all imports: `BlockProps` → `FieldProps`, `BlockTheme` → `FieldTheme`, `blockTheme` → `fieldTheme`
- `Stack` — removed entirely. Replace with `<div className="flex items-center gap-2.5">` or similar Tailwind flex classes
- `VerticalSpacer` — removed entirely. Replace with `<div className="h-2.5">` or equivalent Tailwind spacing

The `block` key in `ReablocksTheme.components` is now `field`.

### Legacy Themes: All Removed
All `legacy*Theme` exports and the `legacyThemeVars` object have been removed. If you were using CSS variable-based theming via `legacyThemeVars`, you must migrate to the Tailwind-based `theme` export.

Removed exports include: `legacyFieldTheme`, `legacyButtonTheme`, `legacyInputTheme`, `legacySelectTheme`, `legacyDialogTheme`, `legacyDrawerTheme`, `legacyTooltipTheme`, `legacyCalendarTheme`, `legacyCheckboxTheme`, `legacyRadioTheme`, `legacyToggleTheme`, `legacyCardTheme`, `legacyTabsTheme`, `legacyTreeTheme`, `legacyListTheme`, `legacyMenuTheme`, `legacyNotificationTheme`, `legacyPopoverTheme`, `legacyTypographyTheme`, and all others.

### Button: Adornment Props Renamed
- `startAdornment` → `start`
- `endAdornment` → `end`

Types narrowed from `any` to `React.ReactNode`.

### Input: Deprecated Adornment Props Removed
- `startAdornment` and `endAdornment` props removed (were already deprecated)
- Use `start` and `end` props instead

### Select: Theme Restructured
- `SelectInputTheme.prefix` → `selectedValue`
- `SelectInputTheme.suffix` → `actions` (with sub-keys: `container`, `button`, `refresh`, `close`, `expand`, `loader`)
- `SelectInputTheme.single.prefix` → `single.selectedValue`
- `SelectInputTheme.multiple.prefix` → `multiple.selectedValue`
- `inputPrefix` prop removed from `SelectOption`

### DotsLoader/Breadcrumbs: Theme Export Renames
- `legacyLoaderTheme` → `legacyDotsLoaderTheme` (removed with legacy cleanup)
- `legacyBreadcrumbTheme` → `legacyBreadcrumbsTheme` (removed with legacy cleanup)

## New Features

### Field: Hint and Error Support
- [feature] New `hint` prop — displays guidance text below the input
- [feature] New `error` prop (`boolean | ReactNode`) — displays error message below input, replaces hint when present
- [feature] New theme keys: `hint`, `error`, `errorState`, `horizontal.content`
- [feature] Error messages include `role="alert"` for accessibility
- [feature] Horizontal layout correctly stacks input + hint/error beneath the label

### Select: Start/End Adornments
- [feature] `Select` and `SelectInput` now support `start` and `end` props for prefix/suffix adornments
- [feature] New `adornment: { start, end }` keys in `SelectInputTheme`

### Utilities
- [feature] New `cn()` utility — combines `classnames` + `tailwind-merge` in one call, exported publicly
- [feature] `H5` and `H6` heading components added

### Infrastructure
- [chore] Playwright visual regression testing for Storybook components
- [chore] Improved Calendar accessibility with `aria-label` on navigation buttons
- [chore] Calendar sub-components (`CalendarDays`, `CalendarMonths`, `CalendarYears`, `CalendarTimes`) now exported

## Bug Fixes
- [fix] Calendar exports corrected
- [fix] Shadow token extraction for themes
- [fix] Group hover classes added to Tailwind config
- [fix] Pager theme now includes `flex items-center gap-1` in `itemsDisplay`
- [fix] Duplicate CommandPalette export removed

## Migration Guide

### Step 1: Typography
```tsx
// Before
import { PageTitle, PrimaryHeading, SecondaryHeading, SmallHeading, Text } from 'reablocks';
<PageTitle>Title</PageTitle>
<PrimaryHeading>Heading</PrimaryHeading>
<Text fontStyle="bold" color="primary">Bold text</Text>

// After
import { H1, H2, P, Small, Muted } from 'reablocks';
<H1>Title</H1>
<H2>Heading</H2>
<P className="font-bold text-primary">Bold text</P>
```

### Step 2: Layout
```tsx
// Before
import { Block, Stack, VerticalSpacer } from 'reablocks';
<Block label="Name"><Input /></Block>
<Stack direction="row"><Button /><Button /></Stack>
<VerticalSpacer space="md" />

// After
import { Field } from 'reablocks';
<Field label="Name"><Input /></Field>
<div className="flex flex-row items-center gap-2.5"><Button /><Button /></div>
<div className="h-2.5" />
```

### Step 3: Button Adornments
```tsx
// Before
<Button startAdornment={<Icon />}>Click</Button>

// After
<Button start={<Icon />}>Click</Button>
```

### Step 4: Input Adornments
```tsx
// Before
<Input startAdornment={<Icon />} endAdornment={<Icon />} />

// After
<Input start={<Icon />} end={<Icon />} />
```

### Step 5: Legacy Themes
```tsx
// Before
import { ThemeProvider, legacyThemeVars } from 'reablocks';
<ThemeProvider theme={legacyThemeVars}>...</ThemeProvider>

// After — use the Tailwind-based theme
import { ThemeProvider, theme } from 'reablocks';
<ThemeProvider theme={theme}>...</ThemeProvider>
```

### Step 6: Theme Customization
```tsx
// Before
const custom = {
  components: {
    block: { ... },
    stack: { ... },
  }
};

// After
const custom = {
  components: {
    field: { ... },
    // stack removed — no theme needed, use Tailwind classes directly
  }
};
```

### Step 7: Select Theme
```tsx
// Before — custom select theme
const selectTheme = {
  input: { prefix: '...', suffix: '...' }
};

// After
const selectTheme = {
  input: { selectedValue: '...', actions: { container: '...', button: '...' } }
};
```

# 9.4.1 - 2/17/26
- [fix] Improve accessibility across form, layer, and overlay components

# 9.4.0 - 1/8/26
- [feature] Add Dialog/Drawer header/content/footer slots for better compat

# 9.3.0 - 10/22/25
- [chore] Skeleton loading component with theme support, animation, and predefined variants

# 9.2.2 - 10/14/25
- [chore] Replace vulnerable @marko19907/string-to-color with secure custom implementation #312

# 9.2.1 - 9/11/25
- [fix] Add return to clone element to add ability use values from overridden fn #308

# 9.2.1 - 9/4/25
- [chore] Align approach to configure animation for Dialog and Drawer #306

# 9.2.0 - 9/3/25
- [feature] Add ability to define custom animation #305

# 9.1.4 - 9/1/25
- [feature] Add ability to disable animation for Menu, Collapse, Toggle, Tooltip #304

# 9.1.3 - 7/21/25
- [chore] Fix stories & use newest style #297

# 9.1.2 - 7/17/25
- [chore] Update stories to newest style & small fixes #296

# 9.1.1 - 6/19/25
- [fix] Fix issue with global scroll when time select #295

# 9.1.0 - 6/18/25
- [feature] Add ability to use date preset for Calendar and DateInput #294

# 9.0.7 - 6/12/25
- [feature] Add time selection to Calendar #293

# 9.0.6 - 4/15/25
- [fix] Fix shift hotkey text in Kbd #292

# 9.0.5 - 4/14/25
- [fix] Do not unselect option when paste already selected value #291

# 9.0.4 - 4/09/25
- [fix] Fixed classes merge issue for TabList component

- # 9.0.3 - 4/09/25
- [fix] Fixed classes merge issue for Dialog component 

# 9.0.2 - 4/07/25
- [fix] Fix syntax errors in class names that cause an error when using prebuilt styles without tailwind 

# 9.0.1 - 4/03/25
- [feature] Expose close method from NestedMenu component via ref

# 9.0.0 - 3/21/25
- [feature] Migration to Tailwind 4

# 9.0.0-beta.2 - 3/18/25
- [feature] Tailwind 4 Upgrade

# 8.7.12 - 3/11/25
- [fix] Fix Range slider in Drawer #282

# 8.7.11 - 3/4/25
- [feature] Add clear event to select & reset search in clear

# 8.7.10 - 2/28/25
- [feature] add clearOnBlur flag to control select input behavior

# 8.7.9 - 2/20/25
- [improvement] Update framer

# 8.7.8 - 2/20/25
- [improvement] Add ability to customize create option for Select

# 8.7.7 - 2/14/25
- [improvement] Update framer

# 8.7.6 - 2/3/25
- [fix] Update ctrl-keys version

# 8.7.5 - 1/28/25
- [fix] Update ctrl-keys import #272

# 8.7.4 - 1/16/25
- [improvement] Upgrade framer #272

# 8.7.3 - 11/1/24
- [fix] fix disabled option for select #266

# 8.7.2
- [fix] Add initial state for checkbox #265

# 8.7.1
- [fix] Put back default Dialog animation (#264)

# 8.7.0
- [feature] add show on single page prop to Pager
- [feature] Add Drawer custom animations #262

# 8.6.0 - 10/23/24
- [feature] Add custom animation to Dialog #261
- [fix] fix incorrect classname for calendar date range arrows #260
- [fix] handle 0 value durations #259

# 8.5.5
- [fix] fix json tree node alignment #258

# 8.5.4
- [fix] fix type for debounce input #257

# 8.5.3
- [improvement] add ability to independently control icon button sizes with theme

# 8.5.2
- [fix] improve ellipsis sizing in real world

# 8.5.1
- [fix] fix mesasure not firing on ellispsis

# 8.5.0
- [feature] add ability to pass `lines` to ellsisps for line clamping

# 8.4.7 - 8/12/24
- [fix] Fix ref for textarea

# 8.4.6 - 8/9/24
- [improvement] Move Backdrop to TW theme #253

# 8.4.5 - 8/9/24
- [fix] Add "use client" for ThemeProvider #252

# 8.4.4 - 7/30/24
- [improvement] Added format of the date displayed in the calendar header
- 
# 8.4.3 - 7/25/24
- [improvement] allow wildcards on theme hook

# 8.4.2 - 7/24/24
- [improvement] Update pager custom theme story

# 8.4.1 - 7/18/24
- [fix] Fix theming types for custom variants, colors, sizes in Button component

# 8.4.0 - 7/18/24
- [fix] Fix `showAll` and `showAllLimit` for JSON Tree #245

# 8.3.0 - 7/18/24
- [improvement] Add containerClassName to Select #244
- [feature] Allow theming visibleRange for pager #243

# 8.2.0 - 7/18/24
- [feature] add async filtering for select

# 8.1.4 - 7/12/24
- [chore] minor confirm dialog improvements

# 8.1.3 - 7/12/24
- [chore] improve confirm dialog api

# 8.1.2 - 7/12/24
- [chore] improve stories of confirm dialog

# 8.1.1 - 7/12/24
- [fix] fix export of confirmation dialog

# 8.1.0 - 7/12/24
- [feature] add confirm dialog

# 8.0.5 - 7/11/24
- [fix] Fix theming types for custom variants in Chip theme

# 8.0.4 - 7/8/24
- [feature] Allow ReactNode type as label for checkbox #238
- [fix] Fix checking "is the day in range" #237

# 8.0.3 - 6/24/24
- [chore] Update ctrl-keys dependency #236

# 8.0.2 - 6/21/24
- [fix] Update floating position on resize #235

# 8.0.1 - 6/20/24
- [chore] Add aria-label for close buttons on Dialog and Drawer component

# 8.0.0 - 6/20/24
- [breaking] Move and consolidate panel and surface content tokens ([migration](https://reablocks.dev/docs/getting-started/migration#migrating-from-7x-to-8x))
- [chore] Remove unused surface disabled token

# 7.13.4 - 6/12/24
- [fix] Fix applying z-index to portal #231

# 7.13.3 - 6/12/24
- [fix] Fix tooltip position after scroll #230

# 7.13.2 - 6/12/24
- [fix] Add missing null check #229

# 7.13.1 - 6/12/24
- [fix] Add supporting virtual element via FloatingUI #228

# 7.13.0 - 6/12/24
- [improvement] Update popper.js to floating ui #227

# 7.12.0 - 6/11/24
- [feature] Add Callout component #225

# 7.11.0 - 6/5/24
- [feature] Add root rendering option to JsonTree #224

# 7.10.1 - 6/5/24
- [chore] export css from package

# 7.10.0 - 5/31/24
- [improvement] Update lib to generate doc #222
- [improvement] Updates theme for Tooltip, List, Dialog #221
- [improvement] Update gradient for input #220
- [improvement] Update theme for Calendar component #218

# 7.9.7 - 5/29/24
- [fix] fix paths for types

# 7.9.6 - 5/29/24
- [chore] remove typedoc build, fix select story

# 7.9.5 - 5/29/24
- [chore] remove typedoc build
- [chore] fix storybook story build

# 7.9.5 - 5/29/24
- [chore] testing typedoc build
 
# 7.9.4 - 5/28/24
- [fix] improve select theme
- [fix] make tooltip `content` optional for reaviz fix

# 7.9.3 - 5/27/24
- [fix] fix adding new item for creatable Select with disabled menu 

# 7.9.2 - 5/23/24
- [fix] fix date input exports

# 7.9.1 - 5/23/24
- [feature] DateInput component
- [feature] Expand variants/sizes to allow for dynamic

# 7.8.1 - 5/23/24
- [feat] Add Profile blocks

# 7.8.0 - 5/22/24
- [feature] Add ability to extend colors in component themes #211 
- [feature] Add Account profile block #210 

# 7.7.4 - 5/22/24
- [chore] use json tree instead of syntax highlighter

# 7.7.3 - 5/21/24
- [chore] tweak stepper blocks

# 7.7.2 - 5/21/24
- [feature] add stepper blocks

# 7.7.1 - 5/21/24
- [fix] fix stepper export

# 7.7.0 - 5/21/24
- [feature] add stepper component
- [chore] upgrade storybook

# 7.6.19 - 5/20/24
- [fix] Fix DeletableChip theme #204
- [improvement] Replace/remove inexistant text-xs classes #201

# 7.6.18 - 5/17/24
- [improvement] Add role to Toggle component
- [improvement] Match font size for Select and Input

# 7.6.17 - 5/17/24
- [chore] add typedocs to dist

# 7.6.16 - 5/17/24
- [fix] Fix svg properties names #198
- [chore] Move color palette to separate file #197

# 7.6.15 - 5/16/24
- [fix] Fix radio story #195

# 7.6.14 - 5/16/24
- [improvement] Improve blocks responsivenes #194
- [fix] Fix some blocks styling #193
- [fix] Fix MFA block logo #191
- [fix] Fix MFA QR code #190
- [feat] update theme for radio button  #187

# 7.6.13 - 5/16/24
- [chore] move back block stories

# 7.6.12 - 5/16/24
- [chore] improve Component types & docs blocks

# 7.6.11 - 5/15/24
- [fix] fix inline input with null values

# 7.6.10 - 5/15/24
- [chore] redo inline input to be simple solution

# 7.6.9 - 5/15/24
- [chore] fix range story

# 7.6.8 - 5/15/24
- [chore] fix type

# 7.6.7 - 5/15/24
- [chore] fix block story style issue

# 7.6.6 - 5/15/24
- [chore] fix block story style issue

# 7.6.5 - 5/15/24
- [chore] add stories for blocks

# 7.6.4 - 5/14/24
- [chore] fix storybook stories

# 7.6.3 - 5/14/24
- [chore] fix storybook stories

# 7.6.2 - 5/14/24
- [chore] remove lodash from stories

# 7.6.1 - 5/14/24
- [chore] copy blocks to dist folder

# 7.6.0 - 5/13/24
- [feature] breadcrumbs component

# 7.5.7 - 5/13/24
- [chore] autogen prop types

# 7.5.6 - 5/13/24
- [fix] improve range styles
- [chore] autogen prop types

# 7.5.5 - 5/13/24
- [chore] change stories export format

# 7.5.4 - 5/13/24
- [chore] change stories export format

# 7.5.3 - 5/13/24
- [fix] Update button theme
- [fix] Update secondary colors
- [chore] Remove unused dateFormat from CalendarRange
- [chore] export stories directory

# 7.5.2 - 5/8/24
- [chore] add storybook stories to dist
- [chore] migrate @reaviz/ctrl-keys to ctrl-keys 1.0.2

# 7.5.1 - 5/1/24
- [fix] onBlur call for Input component #164

# 7.5.0 - 4/30/24
- [feat] Create/Select option(s) onPaste event #162

# 7.4.9 - 4/30/24
- [fix] nextjs proof

# 7.4.8 - 4/30/24
- [improvement] update chip theme #159
- [fix] nextjs proof

# 7.4.7 - 4/26/24
- [improvement] Update chip theme #151

# 7.3.7 - 4/26/24
- [feat] Open/Close menu callbacks #158
- [feat] Update Notification #157
- [feat] Add login blocks including light mode #156

# 7.3.6 - 4/25/24
- [fix] update ref to be an input element #155
- [feat] Add Tab sizes #153
- [feat] Add Avatar outline variant #152
