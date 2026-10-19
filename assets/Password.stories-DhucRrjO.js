import{r as i}from"./iframe-CJNlUSJO.js";import"./RichText.vue-CLPxRa2P.js";import{_ as a}from"./FormField.vue-DokXCbml.js";import{_ as s}from"./Password.vue-dxh_nft2.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./InformationCircleIcon-Dnjq95z-.js";import"./EyeIcon-mgzepyF5.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-Do-nvtb2.js";import"./index-DqMC5tMH.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-ZhWAdK_X.js";import"./index-DMJeGYfZ.js";import"./index-B_P4GBGL.js";import"./index-CzaTbvQ5.js";import"./index-BP13dlUd.js";import"./index-C_WDvV0g.js";import"./index-AIzoT1ks.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Password",component:s,parameters:{layout:"padded"}},r={render:()=>({components:{FormField:a,Password:s},setup(){return{wifiPassword:i("")}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Password">
          <template #default="{ inputId }">
            <Password
              :inputId="inputId"
              v-model="wifiPassword"
              toggleMask
              class="w-full"
            />
          </template>
        </FormField>
      </div>
    `})};var o,t,e;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FormField,
      Password
    },
    setup() {
      const wifiPassword = ref('');
      return {
        wifiPassword
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Password">
          <template #default="{ inputId }">
            <Password
              :inputId="inputId"
              v-model="wifiPassword"
              toggleMask
              class="w-full"
            />
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(e=(t=r.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,O as default};
