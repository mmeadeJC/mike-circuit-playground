import{r as a}from"./iframe-600w3n4H.js";import{s as n}from"./index-Bu8ekTSX.js";import"./RichText.vue-CqDMFobT.js";import{_ as r}from"./FormField.vue-9Bh63gOi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-DtTXIm-l.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";const N={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Name Field",component:r,parameters:{layout:"padded"}},e={render:()=>({components:{FormField:r,PvInputText:n},setup(){return{policyName:a("FileVault 2")}},template:`
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
