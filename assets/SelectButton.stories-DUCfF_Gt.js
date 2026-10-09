import{r as a}from"./iframe-DMCY07cZ.js";import{s}from"./index-B3Ml9Y1m.js";import"./RichText.vue-CvF5yRyM.js";import{_ as d}from"./FormField.vue-C1zJRe6K.js";import{f as p}from"./policyMigrationComponentConstants-DQDXAvZh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bx337-gk.js";import"./index-DBPbF2tz.js";import"./index-CR_NoeiN.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";import"./ShieldCheckIcon-DN84MN1N.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select Button",component:s,parameters:{layout:"padded"}},e={name:"System update mode",render:()=>({components:{FormField:d,PvSelectButton:s},setup(){return{systemUpdateMode:a("scheduled"),systemUpdateModeOptions:p}},template:`
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
