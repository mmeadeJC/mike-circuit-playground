import{r as p}from"./iframe-BF79XtSp.js";import"./RichText.vue-CqGWfsH6.js";import{_ as d}from"./FormField.vue-C69YWs2P.js";import{_ as t}from"./VariableInput-CjoTKn_R.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-xyLKPl8B.js";import"./index-ZhWAdK_X.js";import"./index-BVIEBy36.js";import"./index-lST1gP85.js";import"./index-BkZv6EbR.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-DHPhN9oC.js";import"./index-ADEA_n6J.js";import"./index-bqWkeg_n.js";import"./index-PuebpjLD.js";import"./index-mj-WlYOT.js";import"./policyVariablesCatalog-BqfD_pEh.js";const q={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Variable Input",component:t,parameters:{layout:"padded"}},e={name:"Single line",render:()=>({components:{FormField:d,VariableInput:t},setup(){return{value:p("{device.model}-{device.serialNumber}")}},template:`
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
