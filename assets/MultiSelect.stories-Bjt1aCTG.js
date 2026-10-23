import{r as i}from"./iframe-CrzTiCu6.js";import{s as n}from"./index-BgpC02hC.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as s}from"./FormField.vue-CTr1UxJM.js";import{d as a}from"./policyMigrationComponentConstants-Jlo0urnD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B9HYPvme.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-BAK6AhQo.js";import"./index-DRWkJ3r7.js";import"./index-br2uRJO8.js";import"./index-DHkFNkeW.js";import"./index-B5AAKPzU.js";import"./index-DBMnBcxB.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-ZhWAdK_X.js";import"./index-CJ65Gie5.js";import"./index-DQmrvgOu.js";import"./index-B-mFHERX.js";import"./index-DhP11m7K.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-CyFmKK29.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./ShieldCheckIcon-CwbvLCk-.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
