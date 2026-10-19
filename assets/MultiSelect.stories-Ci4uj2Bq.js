import{r as i}from"./iframe-CJNlUSJO.js";import{s as n}from"./index-BCZY3Z-Y.js";import"./RichText.vue-CLPxRa2P.js";import{_ as s}from"./FormField.vue-DokXCbml.js";import{d as a}from"./policyMigrationComponentConstants-CxSeqGmW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BBDD1QfU.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-TgrN5p_g.js";import"./index-CtMg5eIS.js";import"./index-BP13dlUd.js";import"./index-Do-nvtb2.js";import"./index-Btd800F5.js";import"./index-CMPzMs76.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-ZhWAdK_X.js";import"./index-BsZ9r3ps.js";import"./index-DnvcML7u.js";import"./index-DNoP2_Hj.js";import"./index-DqMC5tMH.js";import"./index-DMJeGYfZ.js";import"./index-B_P4GBGL.js";import"./index-AIzoT1ks.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./InformationCircleIcon-Dnjq95z-.js";import"./ShieldCheckIcon-BkfH9kvS.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
