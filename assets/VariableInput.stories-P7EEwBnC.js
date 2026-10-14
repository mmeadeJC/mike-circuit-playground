import{r as p}from"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as d}from"./FormField.vue-DPg-U9jM.js";import{_ as t}from"./VariableInput-zyO8fPBO.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-Us1_uPk3.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-DTiFh52L.js";import"./index-7zypbFVM.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-dop1ZQf9.js";import"./policyVariablesCatalog-BVqTmgPp.js";const q={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Variable Input",component:t,parameters:{layout:"padded"}},e={name:"Single line",render:()=>({components:{FormField:d,VariableInput:t},setup(){return{value:p("{device.model}-{device.serialNumber}")}},template:`
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
