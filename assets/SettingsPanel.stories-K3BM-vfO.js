import{r as a}from"./iframe-BFKWv3KJ.js";import{s}from"./index-2rr2RyNS.js";import{_ as o}from"./CollapsiblePanel.vue-DkCKI-zZ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as i}from"./FormField.vue-CsyFfyrv.js";import{r as p}from"./Cog6ToothIcon-CLTd3td9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-DUVhZ73h.js";import"./index-ZhWAdK_X.js";import"./index-CCIVz5jE.js";import"./index-DdAbza1U.js";import"./index-BMkyGRgX.js";import"./index-Dn4n97fu.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./index-h_LiPJ46.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Settings Panel",component:o,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:o,FormField:i,PvInputText:s,Cog6ToothIcon:p},setup(){return{settingValue:a("Example setting value")}},template:`
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
