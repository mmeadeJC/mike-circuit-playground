import{r as i}from"./iframe-DMCY07cZ.js";import{s as n}from"./index-DilifcX3.js";import"./RichText.vue-CvF5yRyM.js";import{_ as s}from"./FormField.vue-C1zJRe6K.js";import{d as a}from"./policyMigrationComponentConstants-DQDXAvZh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D3MAoQAU.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-CAIS5x6K.js";import"./index-BKI-cOV2.js";import"./index-DA5-wtQK.js";import"./index-CIjxQS-N.js";import"./index-BFdQe0__.js";import"./index-BEZAFdmF.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-ZhWAdK_X.js";import"./index-CubICyzx.js";import"./index-DYGVLXAt.js";import"./index-4qDJp6e0.js";import"./index-I-4AEmq6.js";import"./index-8ifyCe0e.js";import"./index-0Q9rnkj1.js";import"./index-Bx337-gk.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";import"./ShieldCheckIcon-DN84MN1N.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
