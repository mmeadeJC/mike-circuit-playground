import{r as i}from"./iframe-8Q3g4suX.js";import{s as n}from"./index-C_dd-9yx.js";import"./RichText.vue-C1Ty82RV.js";import{_ as s}from"./FormField.vue-DPg-U9jM.js";import{d as a}from"./policyMigrationComponentConstants-CIoCNzJF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-MzEPBPaO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-BLMVtjtO.js";import"./index-DRA9vNfv.js";import"./index-B6YgWt2p.js";import"./index-C19gJH8S.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-ZhWAdK_X.js";import"./index-CN297qaa.js";import"./index-BdbLeFxC.js";import"./index-Us1_uPk3.js";import"./index-CkKvLbcv.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-Ck7ewAP5.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./ShieldCheckIcon-W0AJus9F.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
