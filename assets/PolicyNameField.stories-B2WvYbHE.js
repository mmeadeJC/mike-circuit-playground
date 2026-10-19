import{r as a}from"./iframe-CJNlUSJO.js";import{s as n}from"./index-DqMC5tMH.js";import"./RichText.vue-CLPxRa2P.js";import{_ as r}from"./FormField.vue-DokXCbml.js";import"./preload-helper-Dp1pzeXC.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-BbdJTiks.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./InformationCircleIcon-Dnjq95z-.js";const N={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Name Field",component:r,parameters:{layout:"padded"}},e={render:()=>({components:{FormField:r,PvInputText:n},setup(){return{policyName:a("FileVault 2")}},template:`
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
