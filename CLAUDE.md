# Circuit Playground — Claude Rules

> **Circuit DS Version: 0.0.133**

## Project Stack

- Vue 3 + Vite + TypeScript + Tailwind CSS
- Circuit DS (`@jumpcloud/circuit`) — custom components + PrimeVue passthrough theme
- Storybook v10 for component documentation
- Stories live in `src/stories/`, local components in `src/components/`

---

## ⛔ NEVER USE RAW PRIMEVUE DIRECTLY

Circuit DS provides ALL UI components in two forms:

1. **Custom components** — Circuit-built wrappers. Import from `@jumpcloud/circuit/components`.
2. **Primitives (PT-styled)** — PrimeVue components Circuit owns and styles via passthrough. Import from `primevue/*` — but ONLY the approved list below.

**If a Circuit custom wrapper exists for a PrimeVue component, importing PrimeVue directly is FORBIDDEN.**

---

## 1. Typography — Circuit Tokens Only

Never use `text-base`, `text-2xl`, arbitrary `text-[14px]`, custom `leading-*`, or inline `font-size`.

```html
<!-- ❌ WRONG -->
<h1 class="text-2xl font-semibold">Title</h1>

<!-- ✅ CORRECT -->
<h1 class="text-heading-2">Title</h1>
<p class="text-body-md">Body</p>
```

Find all tokens: `node_modules/@jumpcloud/circuit/dist/tailwind/index.cjs` → `fontSize` keys.

---

## 2. Colors — Circuit Tokens Only

Never use hex (`text-[#0f202f]`), rgba, raw Tailwind palette (`text-gray-500`, `bg-white`), or inline color styles.

```html
<!-- ❌ WRONG -->
<div class="bg-white text-[#0f202f] border-[#e7e9ea]">

<!-- ✅ CORRECT -->
<div class="bg-neutral-surface text-neutral-base border-neutral-default_solid">
```

Find all tokens: `node_modules/@jumpcloud/circuit/dist/tailwind/index.cjs` → `colors` keys.

---

## 3. Circuit Custom Components

Import from `@jumpcloud/circuit/components`. **Never import the PrimeVue equivalent when a Circuit wrapper exists.**

```ts
import {
  CollapsiblePanel, MessageNotification, CheckboxWithLabel,
  DataTable, DataTableToolbar, DataTableCellText, DataTableCellLink,
  FormField, ActionsToolbar, ToggleSwitch, RadioButtonWithLabel,
  SelectWithSlots, PageHeader, PageSection, PageSaveBar,
  KeyValue, AppNavigation, SeverityDialog, Stepper, RichText,
  DetailPageLayout, ListPageLayout, ConfigPageLayout, DashboardPageLayout,
} from '@jumpcloud/circuit/components';
```

| Circuit Component | Replaces / Notes |
|---|---|
| `CollapsiblePanel` | `Panel` — use full slot pattern (Section 7) |
| `CardButton` | Clickable card with `#leading` / `#trailing` slots |
| `MessageNotification` | `Message` — use `title` + `detail` props |
| `ToastNotification` | `Toast` — requires `ToastService`, one per app |
| `CheckboxWithLabel` | `Checkbox` — use when label is needed |
| `RadioButtonWithLabel` | `RadioButton` — use when label is needed |
| `ToggleSwitch` | Toggle switch |
| `FormField` | Form field wrapper — always bind `inputId` to input `:id` |
| `Password` | Password input with toggle visibility |
| `InputOtp` | OTP input |
| `SelectWithSlots` | `Select` — use when `#icon` or `#footer` slot needed |
| `DataTable` | PrimeVue DataTable+Column — use `columns` prop + `markRaw()` |
| `DataTableToolbar` | Always inside `DataTable`'s `#toolbar` slot |
| `ActionsToolbar` | Bulk actions bar — always absolutely positioned floating |
| `Paginator` | Circuit-styled paginator |
| `SavedViewsDropdown` | Saved views in DataTableToolbar |
| `ColumnConfigDropdown` | Column config in DataTableToolbar |
| `ExportDropdown` | Export in DataTableToolbar |
| `Dropdown` | Flexible dropdown with custom trigger slot |
| `FilterModal` | Filter modal (see Section 10 for when NOT to use it) |
| `FilterField` | Individual filter field inside FilterModal |
| `FilterButton` | Button to open filters |
| `FilterChip` | Active filter chip |
| `AppNavigation` | App-level left sidebar navigation |
| `PageHeader` | Page-level chrome — title, tabs, breadcrumbs, `#actions` |
| `PageSection` | In-content section header (see Section 8) |
| `PageSaveBar` | Sticky save/discard bar for editable pages (see Section 9) |
| `KeyValue` | Every label+value pair on the page (see Section 8) |
| `DetailPageLayout` | Detail/overview pages with optional sidebar |
| `ListPageLayout` | Full-width list/table pages |
| `ConfigPageLayout` | Config/settings pages |
| `DashboardPageLayout` | Dashboard pages with widgets |
| `SeverityDialog` | Destructive action dialogs (see Section 11) |
| `Stepper` | Multi-step workflows (see Section 12) |
| `RichText` | Renders markdown-like strings safely |
| `Chip` | Key-value chip, removable |
| `CopyButton` | Copy to clipboard button |
| `ProgressSpinner` | Spinner — sizes: `small`, `default`, `large` |
| `LinkText` | Styled link text |
| `DatePicker` | Date / date-range picker input |
| `RuleBuilder` | Visual rule/condition builder |
| `DataTableCellAction` | DataTable cell — action button |
| `DataTableCellChips` | DataTable cell — chip list |
| `DataTableCellSelect` | DataTable cell — inline select |
| `DataTableCellTags` | DataTable cell — tag list |
| `DataTableCellToggle` | DataTable cell — toggle switch |
| `SaveViewPanel` | Inline panel for saving a view name |
| `AIAgentToolbar` | AI agent toolbar chrome |
| `AiAgentButton` | Trigger button for the AI agent |
| `AiInputChat` | Chat input for AI agent |
| `AiSidebar` | AI agent sidebar panel |
| `AiSidebarItem` | Item row inside AiSidebar |
| `TourGuideManager` | Manages product tour steps |
| `TourGuideTooltip` | Tooltip used by TourGuideManager |

---

## 4. Approved PrimeVue Primitives

**Only these PrimeVue imports are allowed.** They ARE Circuit DS components — Circuit owns and styles them via passthrough (PT).

```ts
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';      // only when no #icon/#footer slot needed
import MultiSelect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
import Checkbox from 'primevue/checkbox';  // only when no label needed
import RadioButton from 'primevue/radiobutton'; // only when no label needed
import RadioButtonGroup from 'primevue/radiobuttongroup';
import Tag from 'primevue/tag';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Divider from 'primevue/divider';
import Drawer from 'primevue/drawer';
import Popover from 'primevue/popover';
import Menu from 'primevue/menu';
import TieredMenu from 'primevue/tieredmenu';
import Skeleton from 'primevue/skeleton';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
// Tabs
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
// Tooltip is a directive
// v-tooltip.top="'Text'"
```

If a PrimeVue component is **not** in this list and has no Circuit custom wrapper → **ask the user before using it**.

Verify: `node_modules/@jumpcloud/circuit/dist/src/primevue-primitives/` — if a `.js` file exists, it's Circuit DS.

---

## 5. Icons

```ts
import { IconName } from '@jumpcloud/icons';
import { IconName } from '@heroicons/vue/24/outline';
```

---

## 6. IconField + InputIcon — Mandatory Pattern

When an input needs a leading or trailing icon, **always** use `IconField` + `InputIcon`. Never use absolute/relative positioning.

```html
<!-- Leading icon -->
<IconField>
  <InputIcon><MagnifyingGlassIcon /></InputIcon>
  <InputText placeholder="Search..." />
</IconField>

<!-- Trailing icon -->
<IconField>
  <InputText placeholder="Search..." />
  <InputIcon><XMarkIcon /></InputIcon>
</IconField>
```

- Place the icon **bare** inside `InputIcon` — no sizing classes. PT handles sizing.
- Do NOT add `class="w-full"` to `IconField`.
- `InputGroup`/`InputGroupAddon` is for prefix/suffix addons (e.g. `$`, `https://`), not icons inside the field.

---

## 7. CollapsiblePanel — Mandatory Slot Pattern

**Never** use the default +/− toggle icon. Always provide `#toggleicon` with `ChevronRightIcon`.

```html
<CollapsiblePanel v-model:collapsed="collapsed" toggleable header="Panel Header">
  <template #titleicon="iconProps">
    <FolderIcon :class="iconProps.class" />
  </template>
  <template #toggleicon="iconProps">
    <ChevronRightIcon :class="iconProps.class" />
  </template>
  <template #actions>
    <CopyButton :text="someText" size="small" />
  </template>
  <p>Panel content here.</p>
</CollapsiblePanel>
```

| Slot | Required | Usage |
|---|---|---|
| `#toggleicon` | **Yes** (when `toggleable`) | Always `<ChevronRightIcon :class="iconProps.class" />` |
| `#titleicon` | **Yes** | Leading icon. Always pass `iconProps.class`. |
| `#actions` | Optional | Right-aligned header buttons — always `size="small"`. Use `Button` not `<a>`. |

**Two-column form inside CollapsiblePanel:**
```html
<div class="grid grid-cols-2 gap-x-6 gap-y-4">
  <FormField label="First Name">
    <template #default="{ inputId }">
      <InputText :id="inputId" v-model="firstName" class="w-full" />
    </template>
  </FormField>
  <FormField label="Description" class="col-span-2">
    <template #default="{ inputId }">
      <Textarea :id="inputId" v-model="desc" class="w-full" />
    </template>
  </FormField>
</div>
```

---

## 8. PageSection & KeyValue

### PageSection — Section headers inside the content area

Use for **titled blocks inside the page body** — not the global page title (`PageHeader`).

```html
<PageSection title="General Settings">
  <template #subtitle>
    <span class="text-body-xs text-neutral-muted">Supporting text</span>
  </template>
  <template #actions>
    <Button label="Edit" severity="secondary" variant="outlined" size="small" />
  </template>
  <!-- body content in default slot -->
</PageSection>
```

### KeyValue — Every label+value pair

Use for **every** key/value readout on the page (main content, sidebar, panels). Never build custom two-column label/value layouts.

```html
<KeyValue label="Operating System" value="macOS 15.3 Sequoia" />
<KeyValue label="Status" value="Active" :icon="CheckCircleIcon" icon-color="text-success-base" />
<KeyValue label="Serial Number" :value="serial ?? undefined" />
```

> **Note:** Circuit DS exports this as `KeyValue`. The local file `src/components/DetailsKeyValue.vue` re-exports `KeyValue` for backward compatibility — always import `KeyValue` from `@jumpcloud/circuit/components` in new code.

---

## 9. PageSaveBar — Editable Pages

Any page where the user edits settings or forms that should be persisted **MUST** use `PageSaveBar`. Never build a custom sticky Save/Cancel footer.

```html
<PageSaveBar
  :visible="isDirty"
  :saving="isSaving"
  :saved="showSavedConfirmation"
  message="You have unsaved changes"
  @save="handleSave"
  @discard="handleDiscard"
/>
```

**Wiring rules:**
1. **Baseline** — snapshot of last saved values on load/save.
2. **Dirty** — `isDirty = currentValues !== baseline`. Show bar only when dirty.
3. **Save** — persist → update baseline → dirty clears → bar hides.
4. **Discard** — copy baseline back into form fields → dirty clears → bar hides.

---

## 10. DataTable — List Page Mandatory Pattern

Every list/table page MUST follow this exact structure:

```html
<div class="flex flex-col h-full relative">
  <DataTable
    :data="currentPageData"
    :columns="columns"
    :loading="loading"
    selection-mode="multiple"
    v-model:selection="selection"
    :paginator="true"
    :rows="rows"
    :first="first"
    :total-records="totalRecords"
    :lazy="true"
    scrollable
    scroll-height="flex"
    @row-click="handleRowClick"
  >
    <template #toolbar>
      <DataTableToolbar
        add-button-label="Add Item"
        search-placeholder="Search..."
        :active-filters="activeFilterChips"
        @add="handleAdd"
        @search="handleSearch"
        @filter="openFilterDialog"
        @filter-remove="removeFilterChip"
        @clear-all="clearAllFilters"
      />
    </template>
    <template #empty><!-- filtered empty state --></template>
    <template #initialEmpty><!-- no data at all --></template>
  </DataTable>

  <!-- ActionsToolbar — floating, absolute -->
  <Transition enter-active-class="transition-all duration-200 ease-out" ...>
    <div v-if="selection.length > 0" class="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
      <ActionsToolbar :actions="bulkActions" :selected-items="selection" @action="handleBulkAction" @close="selection = []" />
    </div>
  </Transition>

  <!-- Filter dialog — see Section 10b -->
</div>
```

**Key rules:**
- `DataTableToolbar` → **always** inside `DataTable`'s `#toolbar` slot, never a sibling.
- `ActionsToolbar` → **always** `absolute bottom-16 left-1/2 -translate-x-1/2 z-10` wrapped in `<Transition>`.
- Container → must have `class="flex flex-col h-full relative"`.
- Always use `markRaw()` for column components.
- Primary "Add" button → use `DataTableToolbar`'s `add-button-label` prop, not a separate button in `PageHeader`.
- Toolbar events are `@filter`, `@filter-remove`, `@clear-all` — not `@clear-filters` or `@remove-filter`.

### 10a. DataTableToolbar Slot Names

| Slot | Position | Use For |
|---|---|---|
| `#saved-views` | Left group — after search, before Filter | Record counts, labels, custom inline content ("filter slot") |
| `#column-config` | Right group | Custom column config content |
| `#export` | Right group — rightmost | Custom export content |
| `#below-toolbar` | Below toolbar row | Full-width content below toolbar |

### 10b. Filter Dialog Pattern

**Never use `FilterModal` from Circuit DS.** Always use `Dialog` + `FormField` with draft/applied state:

```ts
// Applied state (drives filtering + chip display)
const appliedUsers = ref<string[]>([]);

// Draft state (edited in dialog)
const draftUsers = ref<string[]>([]);

function openFilterDialog() {
  draftUsers.value = [...appliedUsers.value];
  showFilterDialog.value = true;
}
function applyFilters() {
  appliedUsers.value = [...draftUsers.value];
  showFilterDialog.value = false;
}
```

```html
<Dialog :visible="showFilterDialog" :draggable="false" modal header="Apply filters" :style="{ width: '560px' }" @update:visible="!$event && cancelFilterDialog()">
  <template #closeicon><XMarkIcon /></template>
  <div class="flex flex-col gap-md">
    <FormField label="User">
      <template #default="{ inputId }">
        <MultiSelect :id="inputId" v-model="draftUsers" :options="userOptions" class="w-full" />
      </template>
    </FormField>
  </div>
  <template #footer>
    <div class="flex items-center flex-1 min-w-0">
      <span class="text-body-sm text-neutral-subtle">{{ count }} filters applied</span>
    </div>
    <div class="flex gap-sm shrink-0">
      <Button label="Cancel" severity="secondary" variant="text" @click="cancelFilterDialog" />
      <Button label="Clear All" severity="secondary" variant="outlined" @click="clearDraftFilters" />
      <Button label="Apply" @click="applyFilters" />
    </div>
  </template>
</Dialog>
```

**Footer:** left div uses `flex-1 min-w-0` (NOT `w-full`), right div uses `shrink-0`. This prevents button wrapping.

**Filter chips — grouped per filter type** (one chip per filter, not one per value):
```ts
const activeFilterChips = computed(() => {
  const chips = [];
  if (appliedUsers.value.length > 0)
    chips.push({ id: 'user', key: 'User', operator: 'is', value: formatGroupedValues(appliedUsers.value) });
  return chips;
});

function formatGroupedValues(values: string[], max = 2): string {
  if (values.length <= max) return values.join(', ');
  return `${values.slice(0, max).join(', ')}, +${values.length - max}`;
}

function removeFilterChip(chip: { id?: string }) {
  if (chip.id === 'user') appliedUsers.value = [];
}
```

---

## 11. Dialog — Circuit DS Primitive

```ts
import Dialog from 'primevue/dialog';
```

Every Dialog MUST have: `v-model:visible`, `modal`, `:draggable="false"`, `header`.

```html
<Dialog v-model:visible="showDialog" :draggable="false" modal header="Dialog Header" :style="{ width: '560px' }">
  <template #closeicon><XMarkIcon /></template>
  <!-- body content -->
  <template #footer>
    <div class="flex items-center w-full"><!-- optional left content --></div>
    <div class="flex gap-sm">
      <Button label="Cancel" severity="secondary" variant="text" @click="showDialog = false" />
      <Button label="Save" />
    </div>
  </template>
</Dialog>
```

Common widths: `480px` (simple), `560px` (multi-field), `600–720px` (complex).

### SeverityDialog — Destructive Actions

Use instead of building custom confirmation dialogs.

| Level | Use Case | Safeguards |
|---|---|---|
| `sev1` | Standard confirmations | Action + Cancel buttons |
| `sev2` | Critical actions with impact | Message banner + Action + Cancel |
| `sev3` | Irreversible destructive actions | Banner + confirmation input and/or acknowledgement checkbox |

```html
<SeverityDialog
  v-model:visible="visible"
  dialogTitle="Delete Resource"
  variant="sev3"
  messageTitle="Irreversible Action"
  messageContent="This cannot be undone."
  dialogContent="This will **permanently** delete all data."
  :confirmationValue="'DELETE'"
  confirmationText="To proceed, enter <value>."
  actionText="Delete"
  cancelText="Cancel"
  @action="handleDelete"
  @cancel="visible = false"
/>
```

---

## 12. Stepper — Multi-Step Workflows

```ts
import { Stepper } from '@jumpcloud/circuit/components';
import type { StepDefinition } from '@jumpcloud/circuit/components';
```

```html
<Stepper :steps="steps" v-model:value="activeStep" @cancel="handleCancel" @save="handleSave">
  <template #step-1><!-- step 1 content --></template>
  <template #step-2><!-- step 2 content --></template>
</Stepper>
```

Steps use `v-model:value` with string values. Content goes in `#step-{value}` slots. Use `linear` for sequential-only, `nextDisabled` to block progression.

---

## 13. Page Layouts

All layouts come from `@jumpcloud/circuit/components`. **Never** import from `src/components/layout/page-layouts/` — those files re-export from Circuit; import from Circuit directly.

| Layout | Use When |
|---|---|
| `DetailPageLayout` | Detail/overview pages, optional `#sidebar` slot, `maxWidth` prop |
| `ListPageLayout` | Full-width list/table pages, optional `#sidebar` slot |
| `ConfigPageLayout` | Config/settings pages with forms, optional `#sidebar` slot, `maxWidth` prop |
| `DashboardPageLayout` | Dashboard/widgets pages, optional `#sidebar` slot, `maxWidth` prop |

When embedding inside a page shell, override size: `class="w-full! h-full!"`.

---

## 14. Page Shell — Standard Structure

Every page uses this shell:

```html
<div class="flex h-screen overflow-hidden">
  <AppNavigation :menuItems="menuItems" :profileMenuItems="profileMenuItems" :collapsible="true" :topNavToggle="true" />
  <div class="flex-1 flex flex-col min-w-0 overflow-auto">
    <AdminTopBar />       <!-- or <UserTopBar /> for user portal -->
    <PageHeader title="Page Title" />
    <!-- layout component here -->
  </div>
</div>
```

### Top Bar Components (local — not from Circuit)

| Component | File | Use When |
|---|---|---|
| `AdminTopBar` | `src/components/AdminTopBar.vue` | Admin console: search, shortcut tag, icon actions, AI assistant |
| `UserTopBar` | `src/components/UserTopBar.vue` | User portal: thin bar with external links only |

**AdminTopBar props:**

| Prop | Type | Default |
|---|---|---|
| `showBackButton` | `boolean` | `false` |
| `backButtonLabel` | `string` | `'Back'` |
| `searchPlaceholder` | `string` | `'Search User, Devices, Apps, etc...'` |

Back button must call `router.back()`. Label should match the previous page title.

**UserTopBar props:** `adminPortalHref`, `learnMoreHref`, `adminPortalLabel`, `learnMoreLabel`.

---

## 15. Select (Raw Primitive) — Filter Icon & Width

When using raw `Select` (e.g. for `#option` slot that `SelectWithSlots` doesn't forward):

```html
<Select v-model="selected" :options="options" filter class="w-full!">
  <template #filtericon>
    <MagnifyingGlassIcon />  <!-- bare, no sizing classes -->
  </template>
  <template #option="{ option }">...</template>
  <template #value="slotProps">
    <span class="text-body-md text-field-base">{{ slotProps.value?.name }}</span>
  </template>
</Select>
```

- `#filtericon` is **required** when `filter` prop is used — the PrimeVue default doesn't match Circuit DS.
- Use `class="w-full!"` (with `!`) to override PT's fixed `w-63.5` width.
- Option/value text: `text-body-md`. Selected value color: `text-field-base`. Placeholder: `text-field-placeholder`.

---

## 16. Pre-Implementation Checklist

Before writing any UI code:

1. Look up current Circuit typography tokens from the Tailwind preset.
2. Look up current Circuit color tokens from the Tailwind preset.
3. Check `@jumpcloud/circuit/components` exports first for a custom component.
4. If no custom component, check `primevue-primitives/` for a PT-styled primitive.
5. If implementing from Figma, use Figma MCP `get_code_connect_map` + `get_design_context` first.
6. If no matching component exists, **ask the user** before creating a new one.
7. Destructive actions → `SeverityDialog`.
8. Multi-step workflows → `Stepper`.
9. Editable pages with saved state → `PageSaveBar` (baseline/dirty/save/discard).
10. Titled blocks inside page body → `PageSection`.
11. Label+value pairs anywhere → `KeyValue`.
12. List pages → DataTable mandatory pattern (Section 10).
