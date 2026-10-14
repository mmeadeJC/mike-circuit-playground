import{r as a}from"./iframe-600w3n4H.js";import{s as p}from"./index-Bu8ekTSX.js";import"./RichText.vue-CqDMFobT.js";import{_ as s}from"./FormField.vue-9Bh63gOi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-DtTXIm-l.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";const I={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Form Field",component:s,parameters:{layout:"padded"}},e={name:"With help text",render:()=>({components:{FormField:s,PvInputText:p},setup(){return{bypassCount:a("0")}},template:`
      <div class="w-full max-w-3xl">
        <FormField
          label="Bypass attempts before prompt"
          helpText="Number of times a user can bypass FileVault before being required to enable it."
          class="w-full"
        >
          <template #default="{ inputId }">
            <PvInputText :id="inputId" v-model="bypassCount" class="w-full" />
          </template>
        </FormField>
      </div>
    `})};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'With help text',
  render: () => ({
    components: {
      FormField,
      PvInputText: InputText
    },
    setup() {
      const bypassCount = ref('0');
      return {
        bypassCount
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField
          label="Bypass attempts before prompt"
          helpText="Number of times a user can bypass FileVault before being required to enable it."
          class="w-full"
        >
          <template #default="{ inputId }">
            <PvInputText :id="inputId" v-model="bypassCount" class="w-full" />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const T=["WithHelpText"];export{e as WithHelpText,T as __namedExportsOrder,I as default};
