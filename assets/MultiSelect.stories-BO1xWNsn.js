import{r as i}from"./iframe-BFKWv3KJ.js";import{s as n}from"./index-CIkrppRN.js";import"./RichText.vue-vrSf4OCs.js";import{_ as s}from"./FormField.vue-CsyFfyrv.js";import{d as a}from"./policyMigrationComponentConstants-BMFlZuaS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXYT2gRT.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-CfbpxYVU.js";import"./index-2n8eVSrk.js";import"./index-D6YUBXg4.js";import"./index-DdAbza1U.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-ZhWAdK_X.js";import"./index-D7_QFsMT.js";import"./index--0ujXtkk.js";import"./index-D77ELRyA.js";import"./index-2rr2RyNS.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-h_LiPJ46.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./ShieldCheckIcon-CQlKNWxZ.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Target OS version">
          <template #default="{ inputId }">
            <PvMultiSelect
              :id="inputId"
              v-model="targetOsVersion"
              :options="targetOsVersionOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select OS versions"
              :maxSelectedLabels="2"
              class="w-full"
            />
          </template>
        </FormField>
      </div>
    `})};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Target OS versions',
  render: () => ({
    components: {
      FormField,
      PvMultiSelect: MultiSelect
    },
    setup() {
      const targetOsVersion = ref<string[]>([]);
      return {
        targetOsVersion,
        targetOsVersionOptions
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Target OS version">
          <template #default="{ inputId }">
            <PvMultiSelect
              :id="inputId"
              v-model="targetOsVersion"
              :options="targetOsVersionOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select OS versions"
              :maxSelectedLabels="2"
              class="w-full"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const D=["TargetOsVersions"];export{e as TargetOsVersions,D as __namedExportsOrder,B as default};
