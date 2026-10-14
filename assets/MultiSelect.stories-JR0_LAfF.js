import{r as i}from"./iframe-DnhA1Jsm.js";import{s as n}from"./index-BkS1dZYY.js";import"./RichText.vue-BuoexALv.js";import{_ as s}from"./FormField.vue-mRh6rdEv.js";import{d as a}from"./policyMigrationComponentConstants-BSeo4Py0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNm818yJ.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-DSiULD1o.js";import"./index-Ch682guI.js";import"./index-lNUZEIRs.js";import"./index-l3Tk4em_.js";import"./index-BNIcB7B5.js";import"./index-DA6MtJit.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-ZhWAdK_X.js";import"./index-BiaoWc9A.js";import"./index-qDFe3kWE.js";import"./index-BI9VwZ0A.js";import"./index-DKDggJZ4.js";import"./index-C3dwEfyt.js";import"./index-BFiFYGtt.js";import"./index-B5xbJtC5.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./ShieldCheckIcon-G-yjo0m6.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
