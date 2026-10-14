import{r as p}from"./iframe-600w3n4H.js";import"./RichText.vue-CqDMFobT.js";import{_ as d}from"./FormField.vue-9Bh63gOi.js";import{_ as t}from"./VariableInput-Dazo81Nf.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-DosJGK4C.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-B_FT7YyE.js";import"./index-CC9FbOuz.js";import"./index-DBXXhGgD.js";import"./index-DtheA9qo.js";import"./index-DOGY-w59.js";import"./policyVariablesCatalog-4VNIFoW1.js";const q={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Variable Input",component:t,parameters:{layout:"padded"}},e={name:"Single line",render:()=>({components:{FormField:d,VariableInput:t},setup(){return{value:p("{device.model}-{device.serialNumber}")}},template:`
      <div class="max-w-2xl">
        <FormField label="Device name">
          <template #default="{ inputId }">
            <VariableInput :id="inputId" v-model="value" placeholder="Enter a value or insert a variable" />
          </template>
        </FormField>
      </div>
    `})},r={render:()=>({components:{FormField:d,VariableInput:t},setup(){return{value:p("")}},template:`
      <div class="max-w-2xl">
        <FormField label="Value">
          <template #default="{ inputId }">
            <VariableInput :id="inputId" v-model="value" multiline :rows="3" />
          </template>
        </FormField>
      </div>
    `})};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Single line',
  render: () => ({
    components: {
      FormField,
      VariableInput
    },
    setup() {
      const value = ref('{device.model}-{device.serialNumber}');
      return {
        value
      };
    },
    template: \`
      <div class="max-w-2xl">
        <FormField label="Device name">
          <template #default="{ inputId }">
            <VariableInput :id="inputId" v-model="value" placeholder="Enter a value or insert a variable" />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,o,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FormField,
      VariableInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div class="max-w-2xl">
        <FormField label="Value">
          <template #default="{ inputId }">
            <VariableInput :id="inputId" v-model="value" multiline :rows="3" />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const z=["SingleLine","Multiline"];export{r as Multiline,e as SingleLine,z as __namedExportsOrder,q as default};
