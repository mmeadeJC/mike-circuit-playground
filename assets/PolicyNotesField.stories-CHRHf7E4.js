import{r as a}from"./iframe-D7BbHDbG.js";import{s as n}from"./index-C2zOs5JV.js";import"./RichText.vue-1XZLRn0K.js";import{_ as l}from"./FormField.vue-BiV6ZEgt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-oNdbppoo.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";const N={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Notes Field",component:l,parameters:{layout:"padded"}},e={render:()=>({components:{FormField:l,PvTextarea:n},setup(){return{policyNotes:a("")}},template:`
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
