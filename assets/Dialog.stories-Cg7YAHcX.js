import{v as n,j as d,r as t}from"./iframe-C6YxvgI9.js";import{s as o}from"./index-CJZ03RY2.js";import{s as c}from"./index-DNf9RvZr.js";import{s as m,a as v}from"./index-B8A-AHQI.js";import{s as u}from"./index-Dp_YoHvc.js";import{s as f}from"./index-CvIohtEI.js";import{a as b}from"./policyMigrationComponentConstants-D9sxqnnN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BTBx138D.js";import"./index-BnKDY8uA.js";import"./index-AqntUfTj.js";import"./index-DLF1yM0N.js";import"./index-eKE_C28L.js";import"./index-BxytmV1x.js";import"./index-DqUJJtw3.js";import"./index-ZhWAdK_X.js";import"./index-0tFSCsg7.js";import"./index-DhNdrOGc.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./ShieldCheckIcon-cVyPPREN.js";const L={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Overlays/Dialog",component:o,parameters:{layout:"padded"}},e={name:"App selection modal",render:()=>({components:{PvDialog:o,PvButton:c,PvIconField:v,PvInputIcon:m,PvInputText:u,PvRadioButton:f,XMarkIcon:d,MagnifyingGlassIcon:n},setup(){const s=t(!0),r=t(""),p=t("1");return{visible:s,searchQuery:r,selectedAppId:p,sampleAppList:b}},template:`
      <div>
        <PvButton label="Open dialog" @click="visible = true" />

        <PvDialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Search and Select Application"
          :style="{ width: '720px' }"
        >
          <template #closeicon><XMarkIcon /></template>

          <div class="flex flex-col gap-md">
            <PvIconField>
              <PvInputIcon>
                <MagnifyingGlassIcon />
              </PvInputIcon>
              <PvInputText
                v-model="searchQuery"
                placeholder="Search"
                class="w-full"
              />
            </PvIconField>

            <div class="overflow-hidden rounded-sm border border-neutral-default_solid">
              <div
                v-for="app in sampleAppList.slice(0, 4)"
                :key="app.id"
                class="flex items-center gap-sm px-md min-h-10 border-b border-neutral-default_solid last:border-b-0 cursor-pointer hover:bg-neutral-surface"
                @click="selectedAppId = app.id"
              >
                <PvRadioButton
                  v-model="selectedAppId"
                  :inputId="'dialog-app-' + app.id"
                  name="dialog-app-select"
                  :value="app.id"
                  class="shrink-0"
                />
                <label
                  :for="'dialog-app-' + app.id"
                  class="flex-1 cursor-pointer text-body-md text-neutral-base m-0"
                >
                  {{ app.name }}
                </label>
              </div>
            </div>
          </div>

          <template #footer>
            <div class="flex items-center flex-1 min-w-0"></div>
            <div class="flex gap-sm shrink-0">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <PvButton label="Select" @click="visible = false" />
            </div>
          </template>
        </PvDialog>
      </div>
    `})};var a,l,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'App selection modal',
  render: () => ({
    components: {
      PvDialog: Dialog,
      PvButton: Button,
      PvIconField: IconField,
      PvInputIcon: InputIcon,
      PvInputText: InputText,
      PvRadioButton: RadioButton,
      XMarkIcon,
      MagnifyingGlassIcon
    },
    setup() {
      const visible = ref(true);
      const searchQuery = ref('');
      const selectedAppId = ref('1');
      return {
        visible,
        searchQuery,
        selectedAppId,
        sampleAppList
      };
    },
    template: \`
      <div>
        <PvButton label="Open dialog" @click="visible = true" />

        <PvDialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Search and Select Application"
          :style="{ width: '720px' }"
        >
          <template #closeicon><XMarkIcon /></template>

          <div class="flex flex-col gap-md">
            <PvIconField>
              <PvInputIcon>
                <MagnifyingGlassIcon />
              </PvInputIcon>
              <PvInputText
                v-model="searchQuery"
                placeholder="Search"
                class="w-full"
              />
            </PvIconField>

            <div class="overflow-hidden rounded-sm border border-neutral-default_solid">
              <div
                v-for="app in sampleAppList.slice(0, 4)"
                :key="app.id"
                class="flex items-center gap-sm px-md min-h-10 border-b border-neutral-default_solid last:border-b-0 cursor-pointer hover:bg-neutral-surface"
                @click="selectedAppId = app.id"
              >
                <PvRadioButton
                  v-model="selectedAppId"
                  :inputId="'dialog-app-' + app.id"
                  name="dialog-app-select"
                  :value="app.id"
                  class="shrink-0"
                />
                <label
                  :for="'dialog-app-' + app.id"
                  class="flex-1 cursor-pointer text-body-md text-neutral-base m-0"
                >
                  {{ app.name }}
                </label>
              </div>
            </div>
          </div>

          <template #footer>
            <div class="flex items-center flex-1 min-w-0"></div>
            <div class="flex gap-sm shrink-0">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <PvButton label="Select" @click="visible = false" />
            </div>
          </template>
        </PvDialog>
      </div>
    \`
  })
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const O=["AppSelection"];export{e as AppSelection,O as __namedExportsOrder,L as default};
