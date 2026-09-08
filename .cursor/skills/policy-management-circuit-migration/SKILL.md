---
name: policy-management-circuit-migration
description: Builds Policy Management Circuit DS migration Storybook pages under Mike's Playground. Use when creating or updating policy detail/config stories, migrating legacy policy UI to Circuit DS, wiring Policy Management back navigation, or matching the Policy Management - Circuit Migration story patterns.
---

# Policy Management — Circuit Migration Stories

Create Storybook pages that migrate legacy Policy Management detail views to Circuit DS. Match existing stories in `src/stories/projects/mikes-playground/policy-management-circuit-migration/`.

## When to use

- New policy type page under **Projects/Mike's Playground/Policy Management - Circuit Migration**
- Updating an existing migration story to match Circuit DS rules
- Wiring back navigation to the legacy **Policy Management** list story

## File location & naming

| Item | Convention |
|------|------------|
| Directory | `src/stories/projects/mikes-playground/policy-management-circuit-migration/` |
| File | `{PolicyName}.stories.ts` (PascalCase, no spaces) |
| Story title | `"Projects/Mike's Playground/Policy Management - Circuit Migration/{Display Name}"` |
| Component name | `{PolicyName}Page` via `defineComponent` |

**Reference stories:** `PolicyDetailsTab`, `FileVault2`, `WiFiConfiguration`, `GoogleChromeForceInstalledExtensionList`, `CustomMdmOmaUri`, `FileVaultTutorialModal`

Legacy screenshots (when available): `exports/` at repo root.

---

## Required shell

Every migration page uses this structure:

```html
<div class="flex h-screen overflow-hidden">
  <AppNavigation ... activeItem="device management" :collapsible="true" :topNavToggle="true" />
  <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
    <TopBar showBackButton backButtonLabel="Policy Management" @back="goToPolicyManagement" />
    <PageHeader title="..." :icon="shieldIcon" :tabs="detailTabs" :activeTab="activeTab" @update:activeTab="activeTab = $event">
      <!-- Device tag + subtitle -->
    </PageHeader>
    <div class="flex-1 overflow-auto bg-neutral-surface min-h-0">
      <!-- layout when activeTab === 'details' -->
      <!-- placeholder for other tabs -->
    </div>
    <PageSaveBar ... />
  </div>
</div>
```

### Imports

- Circuit: `AppNavigation`, `PageHeader`, `CollapsiblePanel`, `FormField`, `PageSaveBar`, layout (`ConfigPageLayout` or `DetailPageLayout`), etc. from `@jumpcloud/circuit/components`
- Top bar: `import TopBar from '@/components/AdminTopBar.vue'`
- Storybook nav: `import { linkTo } from '@storybook/addon-links'`
- PrimeVue primitives only from approved list (Button, Tag, InputText, Select, Divider, …)

Copy `menuItems` and `profileMenuItems` from an existing migration story — do not invent new nav.

### Meta export

```ts
const meta: Meta<typeof MyPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/My Policy",
  component: MyPage,
  parameters: { layout: 'fullscreen' },
};
export default meta;
export const Default: Story = {};
```

---

## Back navigation (mandatory)

Wire the TopBar back button to the legacy Policy Management list story:

```ts
goToPolicyManagement: linkTo(
  "Projects/Mike's Playground/User Scoped Policies/Pages/Policy Management",
  'Default',
),
```

```html
<TopBar
  showBackButton
  backButtonLabel="Policy Management"
  @back="goToPolicyManagement"
/>
```

---

## PageHeader

Standard policy detail header:

- **Title:** policy display name (from legacy)
- **Icon:** `shieldIcon: markRaw(ShieldCheckIcon)`
- **Tabs:** `detailTabs` — Details, Policy Groups, Device Groups, Devices
- **Subtitle:** `Device` or `User` `Tag` (severity `accent-purple`, `ComputerDesktopIcon`) + vertical `Divider` + helper text:
  > Configure the policy below, then select the target groups or devices to apply it.

Only implement **Details** tab content. Other tabs use a centered placeholder:

```html
<div v-else class="flex flex-col items-center justify-center h-full gap-sm text-neutral-subtle p-md">
  <span class="text-body-md">{{ activeTabLabel }}</span>
  <span class="text-body-sm">Binding content is not included in this Details tab exploration.</span>
</div>
```

---

## Layout choice

| Layout | Use when |
|--------|----------|
| `ConfigPageLayout` | Single column, no sidebar (e.g. Policy Details Tab) — `class="w-full! h-full!"` `maxWidth="1024"` |
| `DetailPageLayout` | Main content + sidebar (e.g. FileVault, WiFi) — `class="w-full! min-h-full"` `max-width="1440"` `:show-sidebar="true"` |

Import layouts from `@jumpcloud/circuit/components`, not local re-exports.

---

## Content panels

### Windows Device Policy (always first)

`CollapsiblePanel` with `#titleicon` → `ShieldCheckIcon`. Contains:

- Policy Name (`InputText`)
- Policy Notes (`Textarea`, placeholder "Add notes about this policy")
- Policy Description / Behavior / Activation — read-only `text-body-md-bold` headings + `text-body-md text-neutral-subtle` body (copy verbatim from legacy)

### Settings (second panel)

`CollapsiblePanel` with `#titleicon` → `Cog6ToothIcon`. Policy-specific fields here.

**CollapsiblePanel rules:** always provide `#titleicon`. Use `#toggleicon` with `ChevronRightIcon` when `toggleable`.

### Dynamic rows

Use incrementing `id` for add/remove lists (registry keys, CA thumbprints, extensions). Keep at least one row when removing the last item.

### Conditional fields

Use computed flags (e.g. `isEnterpriseSecurity`) and `v-if` blocks. Match legacy field visibility exactly.

---

## Sidebar (`DetailPageLayout`)

Common patterns:

- `MessageNotification` (info) + `LinkText` "Learn more"
- Platform metadata (Windows/macOS minimum version, supported editions)

**Stacked label + value in sidebar:** `KeyValue` renders horizontally in wide sidebars. For stacked layout use manual flex-col:

```html
<div class="flex flex-col gap-xs w-full">
  <span class="text-body-md-semi-bold text-neutral-base">Minimum Supported Version</span>
  <p class="text-body-md text-neutral-base m-0">{{ value }}</p>
</div>
```

---

## PageSaveBar (editable pages)

All migration pages with editable fields **must** use `PageSaveBar`:

```html
<PageSaveBar
  :visible="isDirty"
  :saving="isSaving"
  :saved="showSavedConfirmation"
  message="You have unsaved changes"
  saveLabel="Save Policy"
  discardLabel="Cancel"
  @save="handleSave"
  @discard="handleDiscard"
/>
```

Place as sibling inside the `relative` column wrapper (after scroll area, not inside layout).

### Baseline / dirty pattern

```ts
const baseline = ref({ /* snapshot of initial/saved values */ });

const isDirty = computed(() => /* deep compare current vs baseline */);

watch(isDirty, (dirty) => { if (dirty) showSavedConfirmation.value = false; });

function handleDiscard() { /* copy baseline back into refs */ }
async function handleSave() {
  isSaving.value = true;
  await new Promise((r) => setTimeout(r, 600)); // mock persist
  baseline.value = { /* current values */ };
  isSaving.value = false;
  showSavedConfirmation.value = true;
  setTimeout(() => { showSavedConfirmation.value = false; }, 2000);
}
```

---

## Scroll clearance for PageSaveBar

When long Settings content can be covered by the fixed save bar:

1. Wrap main column content in `flex flex-col gap-md pb-32`
2. Add a spacer **below the last panel**, **outside** the card border — not inside `CollapsiblePanel`:

```html
</CollapsiblePanel>
<div class="h-36 shrink-0" aria-hidden="true" />
```

Do **not** put empty space inside the Settings card body.

---

## Legacy fidelity

- Copy notification/message text **verbatim** from legacy screenshots
- Preserve link placement (e.g. KB Article on its own line with external-link icon)
- Use `MessageNotification` + `LinkText` for info banners; `CheckboxWithLabel` info icons via `v-tooltip.top`
- Match field labels, defaults, and helper text from legacy

---

## Checklist

```
- [ ] File in policy-management-circuit-migration/
- [ ] Story title under Policy Management - Circuit Migration
- [ ] fullscreen layout parameter
- [ ] TopBar back → Policy Management via linkTo
- [ ] PageHeader with Device or User tag + standard subtitle
- [ ] ConfigPageLayout or DetailPageLayout (from Circuit)
- [ ] Windows Device Policy + Settings panels
- [ ] PageSaveBar with baseline/dirty/save/discard
- [ ] Spacer below last panel if save bar overlaps content
- [ ] Circuit DS components only (no raw PrimeVue when wrapper exists)
- [ ] Non-Details tabs show placeholder
```

## Additional resources

- Circuit DS rules: `.cursor/rules/circuit-design-system.mdc`
- Page shell / TopBar: `.cursor/rules/admin-portal-navigation.mdc`, `.cursor/rules/top-bar-component.mdc`
- Legacy list story: `src/stories/projects/user-scoped-policies/pages/UserScopedPolicies.stories.ts`
