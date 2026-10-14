import{r as a}from"./iframe-BFKWv3KJ.js";import{s}from"./index-BVT3NVWy.js";import"./RichText.vue-vrSf4OCs.js";import{_ as d}from"./FormField.vue-CsyFfyrv.js";import{f as p}from"./policyMigrationComponentConstants-BMFlZuaS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-h_LiPJ46.js";import"./index-HEPxPyLV.js";import"./index-DUVhZ73h.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./ShieldCheckIcon-CQlKNWxZ.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select Button",component:s,parameters:{layout:"padded"}},e={name:"System update mode",render:()=>({components:{FormField:d,PvSelectButton:s},setup(){return{systemUpdateMode:a("scheduled"),systemUpdateModeOptions:p}},template:`
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
