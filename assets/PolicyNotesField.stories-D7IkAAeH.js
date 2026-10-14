import{r as a}from"./iframe-600w3n4H.js";import{s as n}from"./index-DOGY-w59.js";import"./RichText.vue-CqDMFobT.js";import{_ as l}from"./FormField.vue-9Bh63gOi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-DtTXIm-l.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";const N={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Notes Field",component:l,parameters:{layout:"padded"}},e={render:()=>({components:{FormField:l,PvTextarea:n},setup(){return{policyNotes:a("")}},template:`
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
