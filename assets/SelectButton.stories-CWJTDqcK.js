import{r as a}from"./iframe-600w3n4H.js";import{s}from"./index-BZWznq43.js";import"./RichText.vue-CqDMFobT.js";import{_ as d}from"./FormField.vue-9Bh63gOi.js";import{f as p}from"./policyMigrationComponentConstants-By4Q4wXb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DQaWMASi.js";import"./index-CD70s4gz.js";import"./index-DtTXIm-l.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./ShieldCheckIcon-BytxG3nK.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select Button",component:s,parameters:{layout:"padded"}},e={name:"System update mode",render:()=>({components:{FormField:d,PvSelectButton:s},setup(){return{systemUpdateMode:a("scheduled"),systemUpdateModeOptions:p}},template:`
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
