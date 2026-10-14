import{r as a}from"./iframe-8Q3g4suX.js";import{s}from"./index-CkKvLbcv.js";import{_ as o}from"./CollapsiblePanel.vue-CmNp5iUc.js";import"./RichText.vue-C1Ty82RV.js";import{_ as i}from"./FormField.vue-DPg-U9jM.js";import{r as p}from"./Cog6ToothIcon-cxmEYFc7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-OJfjCxM5.js";import"./index-ZhWAdK_X.js";import"./index-M73h-aNz.js";import"./index-C19gJH8S.js";import"./index-DpCZYySO.js";import"./index-BMCZJFM3.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./index-Ck7ewAP5.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Settings Panel",component:o,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:o,FormField:i,PvInputText:s,Cog6ToothIcon:p},setup(){return{settingValue:a("Example setting value")}},template:`
      <div class="max-w-3xl">
        <CollapsiblePanel header="Settings">
          <template #titleicon="iconProps">
            <Cog6ToothIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <FormField label="Example setting">
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="settingValue" class="w-full" />
              </template>
            </FormField>
            <p class="text-body-sm text-neutral-subtle m-0">
              Policy-specific settings render inside this panel on each Canvas page.
            </p>
          </div>
        </CollapsiblePanel>
      </div>
    `})};var t,n,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CollapsiblePanel,
      FormField,
      PvInputText: InputText,
      Cog6ToothIcon
    },
    setup() {
      const settingValue = ref('Example setting value');
      return {
        settingValue
      };
    },
    template: \`
      <div class="max-w-3xl">
        <CollapsiblePanel header="Settings">
          <template #titleicon="iconProps">
            <Cog6ToothIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <FormField label="Example setting">
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="settingValue" class="w-full" />
              </template>
            </FormField>
            <p class="text-body-sm text-neutral-subtle m-0">
              Policy-specific settings render inside this panel on each Canvas page.
            </p>
          </div>
        </CollapsiblePanel>
      </div>
    \`
  })
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,j as default};
