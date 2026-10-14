import{r as a}from"./iframe-BF79XtSp.js";import{s}from"./index-Br5QgYsP.js";import"./RichText.vue-CqGWfsH6.js";import{_ as d}from"./FormField.vue-C69YWs2P.js";import{f as p}from"./policyMigrationComponentConstants-BIkg6p9Q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BVIEBy36.js";import"./index-DyMCnse6.js";import"./index-Du18TKou.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./ShieldCheckIcon-xpQZCNU8.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select Button",component:s,parameters:{layout:"padded"}},e={name:"System update mode",render:()=>({components:{FormField:d,PvSelectButton:s},setup(){return{systemUpdateMode:a("scheduled"),systemUpdateModeOptions:p}},template:`
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
