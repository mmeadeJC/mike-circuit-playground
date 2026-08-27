import{r as a}from"./iframe-DSI7I_YQ.js";import{s as n}from"./index-CsSMY8xR.js";import"./RichText.vue-DARNTLdh.js";import{_ as l}from"./FormField.vue-DvIDnTXZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-Ck3k_J8K.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./InformationCircleIcon-Cz23V1it.js";const N={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Notes Field",component:l,parameters:{layout:"padded"}},e={render:()=>({components:{FormField:l,PvTextarea:n},setup(){return{policyNotes:a("")}},template:`
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
