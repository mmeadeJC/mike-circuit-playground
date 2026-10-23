import{r as i}from"./iframe-DuzLv9Pd.js";import{s as n}from"./index-CLqqXC_P.js";import"./RichText.vue-D4MvUk45.js";import{_ as s}from"./FormField.vue-CblrQISo.js";import{d as a}from"./policyMigrationComponentConstants-DKtyczDC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D5zH4fN4.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-b5e0TYx1.js";import"./index-CWlqIe1B.js";import"./index-B-toZiH_.js";import"./index-CGiVUquh.js";import"./index-DnaDt85i.js";import"./index-CFtktJtS.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-ZhWAdK_X.js";import"./index-BcWNlClR.js";import"./index-BemneOh4.js";import"./index-CjiEPaTZ.js";import"./index-BXhsDisi.js";import"./index-Brczh--H.js";import"./index-DL1Pt7bO.js";import"./index-Br2-aBVM.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./ShieldCheckIcon-BpS1grCD.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
