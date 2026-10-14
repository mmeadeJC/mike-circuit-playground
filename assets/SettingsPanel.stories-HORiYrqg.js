import{r as a}from"./iframe-BF79XtSp.js";import{s}from"./index-BkZv6EbR.js";import{_ as o}from"./CollapsiblePanel.vue-CWXrCyIT.js";import"./RichText.vue-CqGWfsH6.js";import{_ as i}from"./FormField.vue-C69YWs2P.js";import{r as p}from"./Cog6ToothIcon-xFudfeaO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-Du18TKou.js";import"./index-ZhWAdK_X.js";import"./index-tnvvo6Sb.js";import"./index-NvGJIH0G.js";import"./index-dcWUga6b.js";import"./index-DkPTkS_b.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-xyLKPl8B.js";import"./index-BVIEBy36.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Settings Panel",component:o,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:o,FormField:i,PvInputText:s,Cog6ToothIcon:p},setup(){return{settingValue:a("Example setting value")}},template:`
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
