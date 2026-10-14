import{r as i}from"./iframe-600w3n4H.js";import{s as n}from"./index-DVtMRYBu.js";import"./RichText.vue-CqDMFobT.js";import{_ as s}from"./FormField.vue-9Bh63gOi.js";import{d as a}from"./policyMigrationComponentConstants-By4Q4wXb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtvYIbWm.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-BzHAkJ03.js";import"./index-CTl3vUKN.js";import"./index-DyPrYXuB.js";import"./index-B3TfiOtM.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-ZhWAdK_X.js";import"./index-v8PIUxlP.js";import"./index-DcxJnJl9.js";import"./index-DosJGK4C.js";import"./index-Bu8ekTSX.js";import"./index-DBXXhGgD.js";import"./index-DtheA9qo.js";import"./index-DQaWMASi.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./ShieldCheckIcon-BytxG3nK.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
