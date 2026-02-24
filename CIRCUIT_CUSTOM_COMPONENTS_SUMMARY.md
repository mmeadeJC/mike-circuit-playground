# Circuit Custom Components — Comprehensive Summary

This document summarizes all custom components from the Circuit DS documentation at `/Users/burak.basci/Development/jumpcloud-common-ui/packages/circuit/docs/custom-components/`.

---

## 1. ActionMenu

**Description:** A custom menu component that wraps PrimeVue's Menu with a props-based API. Supports grouping, icons with severity colors, external links, and automatic label truncation with tooltips.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ActionMenuItem[]` | Required | Array of menu items to display |
| `popup` | `boolean` | `true` | Whether the menu is displayed as a popup |
| `menuClass` | `string` | `''` | Additional CSS class for the menu container |

### ActionMenuItem Interface
- `id`: string (required)
- `label`: string (required)
- `icon?`: Component (Hero Icon)
- `iconSeverity?`: 'default' \| 'danger' \| 'warning' \| 'success' \| 'info'
- `group?`: string
- `groupOrder?`: number
- `isExternal?`: boolean
- `url?`: string
- `disabled?`: boolean
- `command?`: Function

### Events
| Event | Payload | Description |
|-------|---------|-------------|
| `select` | `(item: ActionMenuItem, event: Event)` | Emitted when a menu item is clicked |
| `show` | - | Emitted when the menu is shown |
| `hide` | - | Emitted when the menu is hidden |

### Methods (via ref)
- `toggle(event: Event)` — Toggle menu visibility
- `show(event: Event)` — Show the menu
- `hide()` — Hide the menu

### Slots
None documented.

### Usage Notes
- Use `menu.value?.toggle(event)` with a trigger button; pass the click event to position the menu
- Long labels are truncated with ellipsis and show tooltip on hover
- External links open in new tab and show external icon

---

## 2. ActionsToolbar

**Description:** Displays bulk actions for selected items in a data table. Shows up to 4 action buttons directly, with additional actions in a popover menu. Selected items can be displayed in an expandable list.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `actions` | `Action[]` | `[]` | Array of actions. Max 4 shown directly, rest in popover |
| `selectedItems` | `SelectedItem[]` | `[]` | Selected items. Component hides when empty |

### Action Interface
- `id`: string, `label`: string

### SelectedItem Interface
- `id`: string, `label`: string, `description`: string

### Events
| Event | Payload | Description |
|-------|---------|-------------|
| `action` | `action: Action` | Emitted when an action button is clicked |
| `deselect` | `item: SelectedItem` | Emitted when a selected item is unchecked |
| `close` | - | Emitted when close button is clicked (clear all) |

### Slots
None documented.

### Usage Notes
- **Automatically hides when `selectedItems` is empty** — use v-model or reactive props
- First 4 actions shown as buttons; rest in "..." popover menu
- "X Selected" button toggles visibility of selected items list

---

## 3. AiAgentButton

**Description:** Specialized button with gradient background and AI agent icon for AI-related actions. Built on PrimeVue Button.

### Props
See [PrimeVue Button Docs](https://primevue.org/button/#api.button.props)

### Emits
See [PrimeVue Button Docs](https://primevue.org/button/#api.button.emits)

### Slots
None documented.

---

## 4. AppNavigation

**Description:** Sidebar navigation with collapsible menu items, sub-navigation, and profile menu. Built on PrimeVue TieredMenu.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `MenuItemType[]` | Required | Array of navigation menu items |
| `profileMenuItems` | `MenuItemType[]` | `undefined` | Profile menu items |
| `activeItem` | `string` | `undefined` | Label of currently active menu item |
| `collapsible` | `boolean` | `true` | Whether navigation can be collapsed |
| `topNavToggle` | `boolean` | Required | Whether top nav toggle is enabled |

### MenuItemType
- `label`, `leftIcon`, `rightIcon`, `count`, `isNew`, `tags`, `items`, `separator`, `itemType`, `name`, `initials`, `email`, `visible`

### Events
| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `(item: ProcessedMenuItemType)` | Emitted when menu item is clicked |
| `navigation-toggle` | `()` | Emitted when navigation is toggled |

### Slots
| Slot | Props | Description |
|------|-------|-------------|
| `logo` | `{ class }` | Custom logo. Renders only when nav is open |
| `topnav-action-buttons` | - | Action buttons. **Only rendered on mobile/tablet** |
| `custom-component` | `{ isNavOpen }` | Custom component in nav area |
| `custom-text` | - | Custom text in footer (when nav open) |

### Usage Notes
- `topnav-action-buttons` slot is **only rendered on smaller screens** (mobile/tablet)
- Use `markRaw()` for icon components in menu items

---

## 5. CardButton

**Description:** Clickable card with hover states and icon support.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Card title |
| `content` | `string` | `undefined` | Card content/description |
| `clickable` | `boolean` | `true` | Whether card responds to clicks |
| `trailingIcon` | `FunctionalComponent` | `undefined` | Icon after title |
| `size` | `'default' \| 'small'` | `'default'` | Size variant |

### Events
| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Emitted when card is clicked (if clickable) |

### Slots
| Slot | Description |
|------|-------------|
| `leading` | Content before title (icons, checkboxes, etc.) |
| `title` | Custom title content |
| `trailing` | Content after title (overrides trailingIcon prop) |
| `default` | Custom content |

---

## 6. CheckboxWithLabel

**Description:** Checkbox with standardized label styling. Built on PrimeVue Checkbox.

### Props
See [PrimeVue Checkbox Docs](https://primevue.org/checkbox/#api.checkbox.props)

### Emits
See [PrimeVue Checkbox Docs](https://primevue.org/checkbox/#api.checkbox.emits)

### Slots
| Slot | Props | Required |
|------|-------|----------|
| `label` | none | **required** |
| `description` | none | optional |

---

## 7. Chip

**Description:** Key-value chip with optional icon and removal. Built on PrimeVue Chip.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `FunctionalComponent` | `undefined` | Heroicons icon |
| `chipKey` | `string` | `undefined` | Key text (bold) |
| `value` | `string` | `undefined` | Value text |
| `size` | `'default' \| 'compact'` | `'default'` | Size variant |
| `removable` | `boolean` | `false` | Whether chip can be removed |
| `disabled` | `boolean` | `false` | Disabled state |

### Events
| Event | Payload | Description |
|-------|---------|-------------|
| `remove` | `()` | Emitted when chip is removed |

---

## 8. CollapsiblePanel

**Description:** Panel with optional toggle. Built on PrimeVue Panel.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `header` | `string` | - | Header text |
| `collapsed` | `boolean` | `false` | Whether collapsed |
| `toggleable` | `boolean` | `false` | User can toggle |
| `clickable` | `boolean` | `false` | Entire panel clickable with hover |

Also inherits [PrimeVue Panel props](https://primevue.org/panel/#api.panel.props).

### Events
| Event | Payload | Description |
|-------|---------|-------------|
| `update:collapsed` | `(value: boolean)` | When collapsed state changes |
| `click` | `(event: MouseEvent)` | When panel is clicked |

### Slots
| Slot | Props | Description |
|------|-------|-------------|
| `toggleicon` | `{ class, collapsed }` | Custom toggle icon |
| `titleicon` | `{ class, collapsed }` | Custom title icon |
| `actions` | - | Action buttons in header |

### Usage Notes
- Use `v-model:collapsed` for programmatic control
- Add `toggleable` for user-toggleable panels
- Use separate `<p>` tags for multiple paragraphs

---

## 9. DataTable

**Description:** Styled data table. Built on PrimeVue DataTable. Uses `columns` prop array instead of `<Column>` children.

### Key Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Record<string, unknown>[]` | `[]` | **Required** data array |
| `columns` | `DataTableColumn[]` | `[]` | Column definitions |
| `card` | `boolean` | `false` | Show as card (shadow, rounded) |
| `size` | `'default' \| 'small'` | `'default'` | Row height variant |
| `expander` | `boolean` | `false` | Show expander column |
| `selectionMode` | `'single' \| 'multiple'` | - | Row selection |
| `paginator` | `boolean` | `false` | Show pagination |
| `rows` | `number` | `10` | Rows per page |
| `first` | `number` | `0` | First record index |
| `loading` | `boolean` | - | Loading state (skeleton rows) |

### DataTableColumn
- `field`, `header`, `sortable`, `width`, `frozen`, `component`, `componentProps` (static or function)

### Events
- `update:first`, `update:rows`, `pageChange`, `update:selection`, `sort`, `rowClick`

### Slots
| Slot | Props | Description |
|------|-------|-------------|
| `expansion` | `{ data, index }` | Expanded row content (when expander=true) |

### Usage Notes
- Use `markRaw()` for column components
- `componentProps` can be `(slotProps) => ({ ... })` for dynamic props
- `@rowClick` is **not** emitted when click is on `<a>` or `<button>`
- `width` on headers = minWidth (can grow); on body = min+max (respects constraint)
- `fr` units don't work (HTML tables, not CSS Grid)

---

## 10. DataTableCells (DataTableCellText, DataTableCellLink, DataTableCellToken, DataTableCellButton)

### DataTableCellText
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string \| number \| boolean` | `''` | Text content |
| `description` | `string` | `undefined` | Description below label |
| `icon` | `FunctionalComponent` | `undefined` | 16px icon |
| `iconProps` | `IconProps` | `undefined` | Icon props |
| `image` | `string` | `undefined` | 28x28 image URL |
| `imageAlt` | `string` | `undefined` | Image alt |
| `size` | `'default' \| 'small'` | inherited | Size variant |

**Small size:** Only label and label+icon; no image/description.

### DataTableCellLink
Same as Text + `href`, `target`. Emits `click`.

### DataTableCellToken
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'Status' \| 'Tags' \| 'Chips'` | `'Status'` | Token type |
| `statusLabel` | `string` | `'Active'` | For Status type |
| `tags` | `TagItem[] \| string[]` | `[]` | For Tags type |
| `maxVisibleTags` | `number` | `3` | Max visible before overflow |
| `chips` | `ChipItem[] \| string[]` | `[]` | For Chips type |
| `maxVisibleChips` | `number` | `3` | Max visible chips |
| `size` | `'default' \| 'small'` | inherited | Size variant |

### DataTableCellButton
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'Button' \| 'Button Group' \| 'More Button' \| 'Button & More'` | `'Button'` | Button type |
| `iconButtons` | `IconButtonItem[]` | `[]` | Icon button items |
| `maxVisibleIconButtons` | `number` | `3` | Before overflow |
| `actionButtons` | `ActionButtonItem[]` | `[]` | Action button items |
| `hasLine` | `boolean` | `true` | Bottom border |
| `size` | `'default' \| 'small'` | inherited | Size variant |

**Events:** `icon-button-click`, `more-icon-buttons-click`, `action-button-click`, `more-action-buttons-click`

---

## 11. DataTableToolbar

**Description:** Comprehensive toolbar for data tables: search, filters, views, actions. Responsive layout. Integrated SavedViewsDropdown, ColumnConfigDropdown, ExportDropdown.

### Key Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | `false` | Skeleton loaders, disable interactions |
| `size` | `'default' \| 'small'` | `'default'` | Toolbar size |
| `showAddButton` | `boolean` | `true` | Add button |
| `addButtonLabel` | `string` | `'Add'` | Add button label |
| `searchPlaceholder` | `string` | `'Search'` | Search placeholder |
| `showFilterButton` | `boolean` | `true` | Filter button |
| `showRefreshButton` | `boolean` | `true` | Refresh button |
| `showColumnsButton` | `boolean` | `true` | Columns button |
| `showDownloadButton` | `boolean` | `true` | Download button |
| `showSaveViewButton` | `boolean` | `false` | Save View button |
| `savedViews` | `SavedView[]` | `[]` | Saved views |
| `defaultViews` | `SavedView[]` | `[]` | Default views |
| `selectedViewId` | `string \| number \| null` | `null` | Selected view |
| `columns` | `ColumnConfig[]` | `[]` | Column config |
| `exportOptions` | `ExportOption[]` | `[]` | Export options |
| `activeFilters` | `ActiveFilter[]` | `undefined` | Active filters for chip strip |
| `maxVisibleFilters` | `number` | `5` | Max filter chips before "+N" |
| `showSaveViewPanel` | `boolean` | `false` | Save View panel visible |
| `sortOptions` | `SortOption[]` | `undefined` | Sort options for Save View |
| `visibleColumnsCount` | `number` | `0` | Visible columns count |

### Events
- General: `add`, `search`, `filter`, `refresh`, `filter-remove`, `clear-all`, `save-view`, `save-view-submit`, `save-view-cancel`
- Views: `view-select`, `view-favorite`, `view-unfavorite`, `view-edit`, `view-delete`, `add-new-view`
- Columns: `column-visibility-change`, `column-move`, `hide-all-columns`, `show-all-columns`
- Export: `export-select`

### Slots
| Slot | Description |
|------|-------------|
| `saved-views` | Replace default saved view dropdown |
| `column-config` | Replace default columns button |
| `export` | Replace default download button |

### Usage Notes
- **Primary Add button MUST be on DataTableToolbar** when toolbar exists — not in PageHeader
- PageHeader `#actions` is for secondary/contextual actions only
- Provide `savedViews`, `columns`, `exportOptions` to enable integrated dropdowns; otherwise falls back to simple buttons

---

## 12. Dropdown

**Description:** Flexible dropdown menu with Button as trigger. Supports flat/grouped options, search, custom trigger.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Button label |
| `icon` | `Component` | - | Icon component |
| `iconPosition` | `'left' \| 'right'` | `'right'` | Icon position |
| `iconOnly` | `boolean` | `false` | Icon-only mode |
| `severity` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Button color |
| `variant` | `'text' \| 'outlined'` | - | Button variant |
| `size` | `'small'` | - | Button size |
| `disabled` | `boolean` | `false` | Disabled |
| `options` | `DropdownOption[]` | - | Flat options |
| `groupedOptions` | `DropdownOptionGroup[]` | - | Grouped options |
| `filter` | `boolean` | `false` | Search input |
| `filterPlaceholder` | `string` | `'Search...'` | Search placeholder |
| `showChevron` | `boolean` | `true` | Chevron icon |
| `placement` | `'bottom' \| 'top' \| 'auto'` | `'auto'` | Placement |
| `alignment` | `'left' \| 'right' \| 'auto'` | `'auto'` | Alignment |
| `menuWidth` | `string` | `'200px'` | Menu width |
| `isOpen` | `boolean` | - | v-model open state |
| `isOptionsTruncated` | `boolean` | `true` | Truncate option text |
| `keepOpen` | `boolean` | `false` | Keep open after selection |

### Events
- `select`, `open`, `close`, `update:isOpen`

### Slots
| Slot | Props | Description |
|------|-------|-------------|
| `trigger` | `{ isOpen, toggleDropdown, openDropdown, closeDropdown, disabled }` | Custom trigger |

---

## 13. FilterChip

**Description:** Chip for active filters with key, operator, value. Vertical dividers between segments.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `chipKey` | `string` | `''` | Key/field name |
| `operator` | `string` | `''` | Operator (e.g. 'is', 'contains') |
| `value` | `string` | `''` | Filter value |
| `size` | `'default' \| 'small'` | `'default'` | Size |
| `removable` | `boolean` | `true` | Can remove |
| `disabled` | `boolean` | `false` | Disabled |

### Events
| Event | Payload | Description |
|-------|---------|-------------|
| `remove` | `()` | When remove clicked |

### Usage Notes
- Differs from Chip: no icon, has operator, has dividers
- Use for active filter display in DataTableToolbar

---

## 14. FilterModal

**Description:** Filter dialog for data tables. Basic (non-removable) and additional (removable) filters. Multiple filter types.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visible` | `boolean` | `false` | v-model:visible |
| `basicFilters` | `FilterConfig[]` | `[]` | Non-removable filters |
| `additionalFilters` | `FilterConfig[]` | `[]` | Removable filters (from dropdown) |
| `appliedFilters` | `AppliedFilter[]` | `[]` | Current applied values |

### Filter Types
- `text` — Text input + operator
- `singleSelect` — Radio buttons (2–3 options)
- `multiSelect` — Checkboxes (2–3 options)
- `singleSelectDropdown` — Dropdown (4+ options)
- `multiSelectDropdown` — Multi-select dropdown (4+ options)

### Events
- `update:visible`, `apply`, `cancel`, `clear-all`

### Usage Notes
- Apply button disabled until changes made
- Filter count in footer
- Additional filters: searchable dropdown, added filters hidden from dropdown

---

## 15. FormField

**Description:** Form field wrapper with label, tooltip, help text, validation severity.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Field label |
| `labelTooltip` | `string \| undefined` | `undefined` | Tooltip text |
| `helpText` | `string \| undefined` | `undefined` | Help text below input |
| `helpTextSeverity` | `'default' \| 'info' \| 'warning' \| 'error' \| 'success'` | `'default'` | Help text severity |
| `required` | `boolean` | - | Required indicator |

### Slots
| Slot | Props | Description |
|------|-------|-------------|
| default | `{ inputId }` | Form input. **Bind inputId to input for accessibility** |

---

## 16. icons.md

**Description:** Documentation for icon libraries.

- **JumpCloud Icons:** `import { AccessIcon } from '@jumpcloud/icons'`
- **HeroIcons:** `import { HomeIcon } from '@heroicons/vue/24/outline'`

---

## 17. InputOtp

**Description:** OTP input with digit layouts. Built on PrimeVue InputOtp.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `digit` | `'4' \| '6' \| '3-3'` | `'4'` | Layout; `3-3` = 6 inputs with separator |
| `modelValue` | `string` | `''` | OTP value |
| `size` | `'default' \| 'small'` | `'default'` | Size |
| `disabled` | `boolean` | `false` | Disabled |
| `readonly` | `boolean` | `false` | Readonly |
| `invalid` | `boolean` | `false` | Error styling |
| `name` | `string` | `''` | Name attribute |
| `tabindex` | `number` | `0` | Tab order |

### Events
- `update:modelValue`

---

## 18. MessageNotification

**Description:** Message/inline notification. Built on PrimeVue Message. Use `title` and `detail` props.

### Props (Circuit-specific)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string?` | `undefined` | Message title |
| `showIcon` | `boolean` | `true` | Show severity icon |

Also inherits PrimeVue Message props.

### Slots
| Slot | Description |
|------|-------------|
| `button` | Area for action button |

---

## 19. Paginator

**Description:** Pagination component. Built on PrimeVue Paginator.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `totalRecords` | `number` | **required** | Total records |
| `size` | `'default' \| 'small'` | `'default'` | Size |
| `rows` | `number` | `10` | Rows per page |
| `pageLinkSize` | `number` | `5` | Page links to show |
| `showRowsPerPageOptions` | `boolean` | `true` | Rows dropdown |
| `rowsPerPageOptions` | `RowsPerPageOption[]` | default | Dropdown options |
| `first` | `number` | `0` | First record index |
| `isMobile` | `boolean` | `false` | Mobile layout |
| `showPageReport` | `boolean` | `true` | Page report |
| `pageReportTemplate` | `string` | `'{first} to {last} of {totalRecords}'` | Report template |

### Events
- `pageChange`, `update:rows`, `update:first`

---

## 20. PageHeader

**Description:** Page title area with optional subtitle, icon, actions, tabs.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Title text |
| `subtitleText` | `string` | `undefined` | Plain text subtitle (overrides slot) |
| `icon` | `FunctionalComponent` | `undefined` | Icon next to title |
| `dropdownItems` | `DropdownOption[]` | `undefined` | Default actions dropdown |
| `tabs` | `PageHeaderTabItem[]` | `[]` | Tabs under header |
| `activeTab` | `string \| number` | `undefined` | Active tab |
| `tabsScrollable` | `boolean` | `false` | Scrollable tabs |
| `tabsWithPadding` | `boolean` | `true` | Tab bar padding |

### Events
- `dropdown-select`, `update:activeTab`

### Slots
| Slot | Description |
|------|-------------|
| `subtitle` | Custom subtitle (when subtitleText not provided) |
| `actions` | Custom right content (when dropdownItems not provided) |

### Usage Notes
- **Container-query breakpoint:** Actions wrap below title when container < 768px (`@3xl`)
- Do NOT put primary Add button in PageHeader when DataTableToolbar exists

---

## 21. Password

**Description:** Password input with custom toggle mask. Built on PrimeVue Password.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `toggleMask` | `boolean` | `true` | Show/hide toggle |
| `size` | `'default' \| 'small'` | `'default'` | Size |
| `disabled` | `boolean` | `false` | Disabled |
| `invalid` | `boolean` | `false` | Error styling |
| `modelValue` | `string` | `''` | Value |
| `inputId` | `string` | `undefined` | For FormField accessibility |
| `placeholder` | `string` | `undefined` | Placeholder |
| + PrimeVue Password props | - | - | - |

### Slots
- `header`, `footer`, `content`, `icon`, `default`

### Events
- `update:model-value`, `value-change`, `change`

---

## 22. ProgressSpinner

**Description:** Spinner with size props. Built on PrimeVue ProgressSpinner.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `16 \| 20 \| 24 \| 32 \| 40` | `32` | Size in pixels |
| `ariaLabel` | `string` | `'Loading'` | Screen reader label |

---

## 23. RadioButtonWithLabel

**Description:** Radio button with standardized label. Built on PrimeVue RadioButton.

### Props
See [PrimeVue RadioButton Docs](https://primevue.org/radiobutton/#api.radiobutton.props)

### Emits
See [PrimeVue RadioButton Docs](https://primevue.org/radiobutton/#api.radiobutton.emits)

### Slots
| Slot | Required |
|------|----------|
| `label` | **required** |
| `description` | optional |

---

## 24. SelectWithSlots

**Description:** Select with `icon` and `footer` slots. Built on PrimeVue Select.

### Props
See [PrimeVue Select Docs](https://primevue.org/select/#api.select.props)

### Emits
See [PrimeVue Select Docs](https://primevue.org/select/#api.select.emits)

### Slots
| Slot | Props | Description |
|------|-------|-------------|
| `icon` | `{ iconClass }` | Icon on trigger |
| `footer` | - | Footer in select menu |

---

## 25. ToastNotification

**Description:** Toast messages. Built on PrimeVue Toast. Use ToastService.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `group` | `string` | `undefined` | Join toasts by group |

### Usage Notes
- **One per app** in global, always-mounted location
- `app.use(ToastService)` required
- Use `useToast()` from `primevue/usetoast` to add toasts

---

## 26. ToggleSwitch

**Description:** Toggle switch with optional label/description. Built on PrimeVue ToggleSwitch.

### Props (Circuit-specific)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text |
| `description` | `string` | `undefined` | Description below label |

+ PrimeVue ToggleSwitch props.

### Usage Notes
- When no label, provide `aria-label` for accessibility

---

## 27. ToolbarDropdowns (SavedViewsDropdown, ColumnConfigDropdown, ExportDropdown)

### SavedViewsDropdown
- **Props:** `savedViews`, `defaultViews`, `selectedViewId`, `searchPlaceholder`, `defaultViewsLabel`, `showAddNewView`, `addNewViewLabel`, `disabled`
- **Events:** `select`, `search`, `favorite`, `unfavorite`, `edit`, `delete`, `add-new-view`, `open`, `close`
- **Slot:** `trigger` — `{ isOpen, toggle }`

### ColumnConfigDropdown
- **Props:** `columns`, `maxFixedColumns`, `minFixedColumns`, `searchPlaceholder`, `disabled`, `showLabel`, `size`
- **Events:** `visibility-change`, `column-move`, `order-change`, `hide-all`, `show-all`, `search`, `open`, `close`
- **Note:** Default columns (`isDefault: true`) cannot be moved to hidden

### ExportDropdown
- **Props:** `options`, `disabled`
- **Events:** `select`, `open`, `close`
- **ExportOption:** `id`, `label`, `disabled`, `isExternal`, `group`, `groupOrder`

---

## 28. TourGuide

**Description:** Interactive tour system. Highlights elements, shows tooltips. Step-by-step navigation, custom content, lifecycle hooks.

### TourGuideManager Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `TourGuideStep[]` | `[]` | Tour steps |
| `autoStart` | `boolean` | `false` | Auto-start on mount |
| `showOverlay` | `boolean` | `true` | Dimming overlay |
| `allowSkip` | `boolean` | `true` | Allow skip |
| `highlightPadding` | `number` | `0` | Padding around highlight |
| `labels` | `TourGuideLabels` | - | Button labels |
| `allowInteractions` | `boolean` | `false` | Interact during tour |
| `viewportMargin` | `number` | `24` | Tooltip margin |
| `scrollToView` | `boolean` | `true` | Auto-scroll target |
| `tooltip` | `TourGuideTooltipCustomization` | - | Tooltip config |
| `teleportTarget` | `string` | `'body'` | Teleport target |

### TourGuideStep
- `id`, `title`, `content`, `component`, `componentProps`, `target`, `tooltipTarget`, `direction`, `offsetX`, `offsetY`, `radius`, `showAction`, `skipLabel`, `nextLabel`, `prevLabel`, `finishLabel`, `tooltip`
- Hooks: `beforeShow`, `afterShow`, `beforeHide`, `onBackButtonClick`, `onNextButtonClick`

### Events
- `start`, `complete`, `skip`, `step-change`

### Slots
- `default`, `header`, `content`, `skip-button`, `progress`, `actions` — all receive `{ step, stepIndex, currentStep, totalSteps }` + action handlers where relevant

### Methods (ref)
- `startTourGuide()`, `nextStep()`, `previousStep()`, `skipTourGuide()`, `finishTourGuide()`

### Composable
- `useTourGuide()` — `tourGuideState`, `startTourGuide`, `completeStep`, `finishTourGuide`, `resetTourGuide`, `isStepCompleted`

---

## SaveViewPanel (standalone)

**Props:** `mode`, `viewName`, `isPrivate`, `sortOptions`, `sortField`, `sortOrder`, `filters`, `visibleColumnsCount`  
**Events:** `save`, `cancel`, `filter-click`, `column-config`, `clear-filters`

---

# Components NOT in circuit-design-system.mdc Rule File

The following Circuit custom components are **documented** but **NOT listed** in the playground's `circuit-design-system.mdc` rule file:

| Component | Description |
|-----------|-------------|
| **ActionMenu** | Props-based menu with grouping, icons, external links |
| **ActionsToolbar** | Bulk actions for selected table rows |
| **AiAgentButton** | AI-themed gradient button |
| **TourGuide** / **TourGuideManager** | Interactive product tour |
| **useTourGuide** | Composable for tour state |

**Note:** `FilterField` and `FilterButton` are in the rule file but do not have dedicated docs. The docs describe FilterModal, FilterChip, and a Filter Button pattern (Button + FilterModal). FilterField may be internal to FilterModal.

---

# Key Usage Patterns & Gotchas

1. **DataTableToolbar Add Button:** Primary "Add" MUST be on the toolbar, not in PageHeader, when both exist.

2. **ActionMenu:** Use `menu.value?.toggle(event)` with trigger; pass click event for positioning.

3. **ActionsToolbar:** Hides automatically when `selectedItems` is empty.

4. **AppNavigation:** `topnav-action-buttons` slot only renders on mobile/tablet.

5. **FormField:** Always bind `inputId` from default slot to the input for accessibility.

6. **DataTable:** Use `markRaw()` for column components. `@rowClick` not emitted for clicks on links/buttons.

7. **DataTable width:** Headers use minWidth (can grow); body cells use min+max. `fr` units don't work.

8. **DataTableCellText/Link:** Small size supports only label and label+icon; no image/description.

9. **FilterModal:** Apply button disabled until changes. Additional filters removable via dropdown.

10. **ToastNotification:** Requires `ToastService`; one instance per app; use `useToast()` to add.

11. **PageHeader:** Actions wrap below title when container < 768px (container query).

12. **ColumnConfigDropdown:** Default columns (`isDefault: true`) cannot be moved to hidden.

13. **Password:** Use `inputId` when inside FormField for label association.

14. **ToggleSwitch:** Provide `aria-label` when used without label.

15. **SelectWithSlots:** Use when Select needs icon or footer; reduces boilerplate vs base Select.
