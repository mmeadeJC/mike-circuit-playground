# Policy Management — Circuit Migration Component Inventory

Circuit DS components used in each Storybook **Canvas** page under **Projects → Mike's Playground → Policy Management - Circuit Migration → Canvas**.

Source: imports in `*.stories.ts` files in this directory. PrimeVue primitives listed separately — they are Circuit DS PT-styled components imported from `primevue/*`.

Regenerate: `npm run inventory:policy-migration` (or automatically while Storybook is running via `npm run storybook`). Also published in Storybook as **Component Inventory** via `ComponentInventory.stories.ts`.

---

## Shared baseline (all 21 pages)

Every migration page includes these components. They are omitted from the per-page "extras" columns below.

### Page shell

| Region | Component | Import |
|---|---|---|
| Left navigation | `AppNavigation` | `@jumpcloud/circuit/components` |
| Top bar | `AdminTopBar` (imported as `TopBar`) | `@/components/AdminTopBar.vue` |
| Page header | `PageHeader` | `@jumpcloud/circuit/components` |
| Unsaved changes | `PageSaveBar` | `@jumpcloud/circuit/components` |

### Content structure

| Region | Component | Import |
|---|---|---|
| Device Policy panel | `CollapsiblePanel` | `@jumpcloud/circuit/components` |
| Settings panel | `CollapsiblePanel` | `@jumpcloud/circuit/components` |
| Field labels / validation | `FormField` | `@jumpcloud/circuit/components` |
| Helper / KB links | `LinkText` | `@jumpcloud/circuit/components` |
| Policy type tag + subtitle divider | `Tag`, `Divider` | `primevue/tag`, `primevue/divider` |
| Policy name + notes | `InputText`, `Textarea` | `primevue/inputtext`, `primevue/textarea` |

### Layout

- **19 pages** use `DetailPageLayout` (main column + sidebar).
- **2 pages** use `ConfigPageLayout` (single column, no sidebar): **Policy Details Tab**, **Advanced: Custom Registry Keys**.

---

## Summary — page-specific components

Components beyond the shared baseline on each page.

| Page | Layout | Extra Circuit | Extra PrimeVue | Local / other |
|---|---|---|---|---|
| Allow Activation Lock | `DetailPageLayout` | — | — | — |
| Application Restriction | `DetailPageLayout` | `MessageNotification` | `Button`, `IconField`, `InputIcon`, `Select` | — |
| Bluetooth Configuration | `DetailPageLayout` | `CheckboxWithLabel`, `MessageNotification` | `Button` | `v-tooltip` directive |
| Custom MDM (OMA-URI) | `DetailPageLayout` | `MessageNotification` | `Button`, `Select` | — |
| Custom Payload | `DetailPageLayout` | `CopyButton` | `Button` | `v-tooltip` directive |
| Advanced: Custom Registry Keys | `ConfigPageLayout` | — | `Button`, `Select` | — |
| FileVault 2 | `DetailPageLayout` | `CheckboxWithLabel`, `MessageNotification` | `Button` | `v-tooltip` directive |
| FileVault Tutorial Modal | `DetailPageLayout` | `CheckboxWithLabel`, `MessageNotification` | `Button`, `Dialog` | `v-tooltip` directive |
| Google Chrome Browser Force-Installed Extension List | `DetailPageLayout` | `CheckboxWithLabel`, `MessageNotification` | `Button` | `v-tooltip` directive |
| Install Certificate | `DetailPageLayout` | — | `Button`, `Select` | `CircuitFileUpload` |
| Kiosk Mode | `DetailPageLayout` | `RadioButtonWithLabel` | `Button`, `MultiSelect`, `Select`, `SelectButton` | — |
| MDM Custom Configuration Profile | `DetailPageLayout` | `CheckboxWithLabel`, `CopyButton` | — | `CircuitFileUpload` |
| MS Edge Extensions | `DetailPageLayout` | `CheckboxWithLabel`, `MessageNotification`, `RadioButtonWithLabel` | — | `v-tooltip` directive |
| Policy Details Tab | `ConfigPageLayout` | — | `Button`, `Select` | — |
| Recovery Lock | `DetailPageLayout` | `CheckboxWithLabel`, `MessageNotification`, `RadioButtonWithLabel` | — | — |
| Schedule Restart | `DetailPageLayout` | `DatePicker`, `MessageNotification` | `InputGroup`, `InputGroupAddon`, `Select` | — |
| Single App Mode | `DetailPageLayout` | `CheckboxWithLabel`, `Paginator`, `RadioButtonWithLabel` | `Button`, `Dialog`, `IconField`, `InputIcon`, `RadioButton` | — |
| Software Update Enforcement | `DetailPageLayout` | `DatePicker` | `InputGroup`, `InputGroupAddon`, `MultiSelect` | — |
| Supervised iOS Restrictions | `DetailPageLayout` | `CheckboxWithLabel` | — | `v-tooltip` directive |
| System Update | `DetailPageLayout` | `DatePicker` | `Button`, `InputGroup`, `InputGroupAddon`, `SelectButton` | `v-tooltip` directive |
| WiFi Configuration | `DetailPageLayout` | `CheckboxWithLabel`, `Password` | `Button`, `Select` | `v-tooltip` directive |

---

## Per-page detail

### Allow Activation Lock

- **Story file:** `AllowActivationLock.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Allow Activation Lock`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### Application Restriction

- **Story file:** `ApplicationRestriction.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Application Restriction`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `IconField`
- `InputIcon`
- `InputText`
- `Select`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### Bluetooth Configuration

- **Story file:** `BluetoothConfiguration.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Bluetooth Configuration`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

**Directives:**

- `v-tooltip` — used on checkbox/info icons

---

### Custom MDM (OMA-URI)

- **Story file:** `CustomMdmOmaUri.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Custom MDM (OMA-URI)`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `Select`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### Custom Payload

- **Story file:** `CustomPayload.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Custom Payload`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `CopyButton`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

**Directives:**

- `v-tooltip` — used on checkbox/info icons

---

### Advanced: Custom Registry Keys

- **Story file:** `CustomRegistryKeys.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Advanced: Custom Registry Keys`
- **Layout:** `ConfigPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `ConfigPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `Select`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### FileVault 2

- **Story file:** `FileVault2.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/FileVault 2`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

**Directives:**

- `v-tooltip` — used on checkbox/info icons

---

### FileVault Tutorial Modal

- **Story file:** `FileVaultTutorialModal.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/FileVault Tutorial Modal`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Dialog`
- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

**Directives:**

- `v-tooltip` — used on checkbox/info icons

---

### Google Chrome Browser Force-Installed Extension List

- **Story file:** `GoogleChromeForceInstalledExtensionList.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Google Chrome Browser Force-Installed Extension List`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

**Directives:**

- `v-tooltip` — used on checkbox/info icons

---

### Install Certificate

- **Story file:** `InstallCertificate.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Install Certificate`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `Select`
- `Tag`
- `Textarea`

**Playground local:**

- `CircuitFileUpload` (`@/components/`)
- `TopBar` (`@/components/`)

---

### Kiosk Mode

- **Story file:** `KioskMode.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Kiosk Mode`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`
- `RadioButtonWithLabel`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `MultiSelect`
- `Select`
- `SelectButton`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### MDM Custom Configuration Profile

- **Story file:** `MdmCustomConfigurationProfile.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/MDM Custom Configuration Profile`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `CopyButton`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `CircuitFileUpload` (`@/components/`)
- `TopBar` (`@/components/`)

---

### MS Edge Extensions

- **Story file:** `MsEdgeExtensions.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/MS Edge Extensions`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`
- `RadioButtonWithLabel`

**PrimeVue primitives** (`primevue/*`):

- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

**Directives:**

- `v-tooltip` — used on checkbox/info icons

---

### Policy Details Tab

- **Story file:** `PolicyDetailsTab.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Policy Details Tab`
- **Layout:** `ConfigPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `ConfigPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `Select`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### Recovery Lock

- **Story file:** `RecoveryLock.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Recovery Lock`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`
- `RadioButtonWithLabel`

**PrimeVue primitives** (`primevue/*`):

- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### Schedule Restart

- **Story file:** `ScheduleRestart.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Schedule Restart`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `DatePicker`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Divider`
- `InputGroup`
- `InputGroupAddon`
- `InputText`
- `Select`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### Single App Mode

- **Story file:** `SingleAppMode.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Single App Mode`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `PageHeader`
- `PageSaveBar`
- `Paginator`
- `RadioButtonWithLabel`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Dialog`
- `Divider`
- `IconField`
- `InputIcon`
- `InputText`
- `RadioButton`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### Software Update Enforcement

- **Story file:** `SoftwareUpdateEnforcement.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Software Update Enforcement`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `DatePicker`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Divider`
- `InputGroup`
- `InputGroupAddon`
- `InputText`
- `MultiSelect`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

---

### Supervised iOS Restrictions

- **Story file:** `SupervisedIosRestrictions.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Supervised iOS Restrictions`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Divider`
- `InputText`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

**Directives:**

- `v-tooltip` — used on checkbox/info icons

---

### System Update

- **Story file:** `SystemUpdate.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/System Update`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CollapsiblePanel`
- `DatePicker`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputGroup`
- `InputGroupAddon`
- `InputText`
- `SelectButton`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

**Directives:**

- `v-tooltip` — used on checkbox/info icons

---

### WiFi Configuration

- **Story file:** `WiFiConfiguration.stories.ts`
- **Storybook path:** `Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/WiFi Configuration`
- **Layout:** `DetailPageLayout`

**Circuit custom** (`@jumpcloud/circuit/components`):

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `PageHeader`
- `PageSaveBar`
- `Password`

**PrimeVue primitives** (`primevue/*`):

- `Button`
- `Divider`
- `InputText`
- `Select`
- `Tag`
- `Textarea`

**Playground local:**

- `TopBar` (`@/components/`)

**Directives:**

- `v-tooltip` — used on checkbox/info icons

---

## Master component list

All components used anywhere in this folder.

### Circuit custom (15)

- `AppNavigation`
- `CheckboxWithLabel`
- `CollapsiblePanel`
- `ConfigPageLayout`
- `CopyButton`
- `DatePicker`
- `DetailPageLayout`
- `FormField`
- `LinkText`
- `MessageNotification`
- `PageHeader`
- `PageSaveBar`
- `Paginator`
- `Password`
- `RadioButtonWithLabel`

### PrimeVue primitives (14)

- `Button`
- `Dialog`
- `Divider`
- `IconField`
- `InputGroup`
- `InputGroupAddon`
- `InputIcon`
- `InputText`
- `MultiSelect`
- `RadioButton`
- `Select`
- `SelectButton`
- `Tag`
- `Textarea`

### Playground local (2)

- `CircuitFileUpload`
- `TopBar`

### Directives

- `v-tooltip` — 9 pages (checkbox/info icon tooltips)

### Not used in this folder

- `DataTable`
- `KeyValue`
- `ToggleSwitch`
- `SeverityDialog`
- `Stepper`
- `SelectWithSlots`
- `ActionsToolbar`
- `FilterModal`

---

## Maintenance

```bash
# Generate once
npm run inventory:policy-migration

# Watch for story changes (also runs automatically with npm run storybook)
npm run inventory:policy-migration:watch
```