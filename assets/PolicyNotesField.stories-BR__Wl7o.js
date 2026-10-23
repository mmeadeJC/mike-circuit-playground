import{r as a}from"./iframe-DuzLv9Pd.js";import{s as n}from"./index-BnPtWTiX.js";import"./RichText.vue-D4MvUk45.js";import{_ as l}from"./FormField.vue-CblrQISo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-BuiD5gzs.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";const N={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Notes Field",component:l,parameters:{layout:"padded"}},e={render:()=>({components:{FormField:l,PvTextarea:n},setup(){return{policyNotes:a("")}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Policy Notes" class="w-full">
          <template #default="{ inputId }">
            <PvTextarea
              :id="inputId"
              v-model="policyNotes"
              rows="3"
              autoResize
              class="w-full"
              placeholder="Add notes about this policy"
            />
          </template>
        </FormField>
      </div>
    `})};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FormField,
      PvTextarea: Textarea
    },
    setup() {
      const policyNotes = ref('');
      return {
        policyNotes
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Policy Notes" class="w-full">
          <template #default="{ inputId }">
            <PvTextarea
              :id="inputId"
              v-model="policyNotes"
              rows="3"
              autoResize
              class="w-full"
              placeholder="Add notes about this policy"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,N as default};
