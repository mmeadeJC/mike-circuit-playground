import{r as i}from"./iframe-BF79XtSp.js";import{s as n}from"./index-U54BmgOn.js";import"./RichText.vue-CqGWfsH6.js";import{_ as s}from"./FormField.vue-C69YWs2P.js";import{d as a}from"./policyMigrationComponentConstants-BIkg6p9Q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CR4bzIFl.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-DIEiO-G_.js";import"./index-BCK9IpMv.js";import"./index-DTZ-8UWl.js";import"./index-Dtk_BLuX.js";import"./index-P-Yy9vDb.js";import"./index-NvGJIH0G.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-ZhWAdK_X.js";import"./index-D43yMZyM.js";import"./index-DckzHriz.js";import"./index-lST1gP85.js";import"./index-BkZv6EbR.js";import"./index-bqWkeg_n.js";import"./index-PuebpjLD.js";import"./index-BVIEBy36.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./ShieldCheckIcon-xpQZCNU8.js";const B={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",component:n,parameters:{layout:"padded"}},e={name:"Target OS versions",render:()=>({components:{FormField:s,PvMultiSelect:n},setup(){return{targetOsVersion:i([]),targetOsVersionOptions:a}},template:`
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
