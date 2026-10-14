import{r as i}from"./iframe-C6YxvgI9.js";import{s as n}from"./index-Dh_AZRb-.js";import"./RichText.vue-h6zLaVtH.js";import{_ as s}from"./FormField.vue-BTAWN9Np.js";import{d as a}from"./policyMigrationComponentConstants-D9sxqnnN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DT3_wyj-.js";import"./index-BnKDY8uA.js";import"./index-AqntUfTj.js";import"./index-BimTu2-D.js";import"./index-ZSh15SJz.js";import"./index-0tFSCsg7.js";import"./index-BTBx138D.js";import"./index-B91snyJO.js";import"./index-WUqO2RC_.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-ZhWAdK_X.js";import"./index-VIQgHCAc.js";import"./index-DJBHbLMX.js";import"./index-B8A-AHQI.js";import"./index-Dp_YoHvc.js";import"./index-1UUbJVrK.js";import"./index-eKE_C28L.js";import"./index-BxytmV1x.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./InformationCircleIcon-BY7njxzn.js";import"./ShieldCheckIcon-cVyPPREN.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
