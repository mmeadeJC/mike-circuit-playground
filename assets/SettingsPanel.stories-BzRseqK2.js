import{r as a}from"./iframe-wHZiWscM.js";import{s}from"./index-BZ44v4AP.js";import{_ as o}from"./CollapsiblePanel.vue-CyXpgIN2.js";import"./RichText.vue-CHGMbC98.js";import{_ as i}from"./FormField.vue-Di73I2_d.js";import{r as p}from"./Cog6ToothIcon-CpmE-KkZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-_YupRtQ5.js";import"./index-ZhWAdK_X.js";import"./index-tXLQuD6N.js";import"./index-Bx3ApnQM.js";import"./index-D_4jZi02.js";import"./index-Cho0WR5H.js";import"./index-sD1-d5gW.js";import"./index-DuolNdSU.js";import"./index-5yBlAq5O.js";import"./index-DhULWF8q.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./InformationCircleIcon-DZ4ah18T.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Settings Panel",component:o,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:o,FormField:i,PvInputText:s,Cog6ToothIcon:p},setup(){return{settingValue:a("Example setting value")}},template:`
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
