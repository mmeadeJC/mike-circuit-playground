import{r as p}from"./iframe-BFKWv3KJ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as d}from"./FormField.vue-CsyFfyrv.js";import{_ as t}from"./VariableInput-DMmbAv_S.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-D77ELRyA.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-BECXr3Nj.js";import"./index-CiP5ygH7.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-Mg-B1dgW.js";import"./policyVariablesCatalog-Dr2zlifE.js";const q={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Variable Input",component:t,parameters:{layout:"padded"}},e={name:"Single line",render:()=>({components:{FormField:d,VariableInput:t},setup(){return{value:p("{device.model}-{device.serialNumber}")}},template:`
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
