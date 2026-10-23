import{r as a}from"./iframe-DuzLv9Pd.js";import{s as n}from"./index-BXhsDisi.js";import"./RichText.vue-D4MvUk45.js";import{_ as r}from"./FormField.vue-CblrQISo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-BuiD5gzs.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";const N={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Name Field",component:r,parameters:{layout:"padded"}},e={render:()=>({components:{FormField:r,PvInputText:n},setup(){return{policyName:a("FileVault 2")}},template:`
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
