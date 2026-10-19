import{r as a}from"./iframe-CJNlUSJO.js";import{s}from"./index-CB0U-vya.js";import"./RichText.vue-CLPxRa2P.js";import{_ as d}from"./FormField.vue-DokXCbml.js";import{f as p}from"./policyMigrationComponentConstants-CxSeqGmW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AIzoT1ks.js";import"./index-Bc3avc-P.js";import"./index-BbdJTiks.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./InformationCircleIcon-Dnjq95z-.js";import"./ShieldCheckIcon-BkfH9kvS.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select Button",component:s,parameters:{layout:"padded"}},e={name:"System update mode",render:()=>({components:{FormField:d,PvSelectButton:s},setup(){return{systemUpdateMode:a("scheduled"),systemUpdateModeOptions:p}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="System update mode">
          <template #default="{ inputId }">
            <PvSelectButton
              :id="inputId"
              v-model="systemUpdateMode"
              :options="systemUpdateModeOptions"
              optionLabel="label"
              optionValue="value"
              :allowEmpty="false"
            />
          </template>
        </FormField>
      </div>
    `})};var t,o,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'System update mode',
  render: () => ({
    components: {
      FormField,
      PvSelectButton: SelectButton
    },
    setup() {
      const systemUpdateMode = ref('scheduled');
      return {
        systemUpdateMode,
        systemUpdateModeOptions
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="System update mode">
          <template #default="{ inputId }">
            <PvSelectButton
              :id="inputId"
              v-model="systemUpdateMode"
              :options="systemUpdateModeOptions"
              optionLabel="label"
              optionValue="value"
              :allowEmpty="false"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const B=["SystemUpdateMode"];export{e as SystemUpdateMode,B as __namedExportsOrder,x as default};
