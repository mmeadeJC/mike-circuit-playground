import{r as i}from"./iframe-D7BbHDbG.js";import{s as n}from"./index-DZLl4wby.js";import"./RichText.vue-1XZLRn0K.js";import{_ as s}from"./FormField.vue-BiV6ZEgt.js";import{d as a}from"./policyMigrationComponentConstants-BCnQhr6a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BaidBBYU.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-5dj8dpAI.js";import"./index-0gxlrFf7.js";import"./index-CL0m3nvY.js";import"./index-bbso60R8.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-ZhWAdK_X.js";import"./index-Blxf5QWh.js";import"./index-BmNQnOBp.js";import"./index-CiXhdmRB.js";import"./index-DCVTeUli.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";import"./index-1reqc7Wl.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./ShieldCheckIcon-BY_KE66K.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
