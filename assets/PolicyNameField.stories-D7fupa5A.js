import{r as a}from"./iframe-wHZiWscM.js";import{s as n}from"./index-BZ44v4AP.js";import"./RichText.vue-CHGMbC98.js";import{_ as r}from"./FormField.vue-Di73I2_d.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-_YupRtQ5.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./InformationCircleIcon-DZ4ah18T.js";const N={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Name Field",component:r,parameters:{layout:"padded"}},e={render:()=>({components:{FormField:r,PvInputText:n},setup(){return{policyName:a("FileVault 2")}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Policy Name" class="w-full">
          <template #default="{ inputId }">
            <PvInputText :id="inputId" v-model="policyName" class="w-full" />
          </template>
        </FormField>
      </div>
    `})};var t,l,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FormField,
      PvInputText: InputText
    },
    setup() {
      const policyName = ref('FileVault 2');
      return {
        policyName
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Policy Name" class="w-full">
          <template #default="{ inputId }">
            <PvInputText :id="inputId" v-model="policyName" class="w-full" />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,N as default};
