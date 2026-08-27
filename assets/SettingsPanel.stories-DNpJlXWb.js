import{r as a}from"./iframe-DSI7I_YQ.js";import{s}from"./index-CbI5Nc1U.js";import{_ as o}from"./CollapsiblePanel.vue-CpFXaJ2N.js";import"./RichText.vue-DARNTLdh.js";import{_ as i}from"./FormField.vue-DvIDnTXZ.js";import{r as p}from"./Cog6ToothIcon-CsHyeCNP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-Ck3k_J8K.js";import"./index-ZhWAdK_X.js";import"./index-BI_elqOn.js";import"./index-Byho_yNF.js";import"./index-Cg08wAe5.js";import"./index-hJTrF4vo.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-CwTDpyKH.js";import"./index-Cm1NVGCj.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./InformationCircleIcon-Cz23V1it.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Settings Panel",component:o,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:o,FormField:i,PvInputText:s,Cog6ToothIcon:p},setup(){return{settingValue:a("Example setting value")}},template:`
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
