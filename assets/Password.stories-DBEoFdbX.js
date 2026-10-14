import{r as i}from"./iframe-600w3n4H.js";import"./RichText.vue-CqDMFobT.js";import{_ as a}from"./FormField.vue-9Bh63gOi.js";import{_ as s}from"./Password.vue-BDbKqZnb.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./EyeIcon-BZIzJ2Hw.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-CTl3vUKN.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-ZhWAdK_X.js";import"./index-DBXXhGgD.js";import"./index-DtheA9qo.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-DknECv7p.js";import"./index-DQaWMASi.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Password",component:s,parameters:{layout:"padded"}},r={render:()=>({components:{FormField:a,Password:s},setup(){return{wifiPassword:i("")}},template:`
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
