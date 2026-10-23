import{r as p}from"./iframe-CrzTiCu6.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as d}from"./FormField.vue-CTr1UxJM.js";import{_ as t}from"./VariableInput-Dxskn0U1.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-B-mFHERX.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-CdmNXZp5.js";import"./index-BaGPKY7N.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-OmJKRl9c.js";import"./policyVariablesCatalog-C2V2S2HT.js";const q={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Variable Input",component:t,parameters:{layout:"padded"}},e={name:"Single line",render:()=>({components:{FormField:d,VariableInput:t},setup(){return{value:p("{device.model}-{device.serialNumber}")}},template:`
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
