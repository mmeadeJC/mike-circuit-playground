import{r as i}from"./iframe-DuzLv9Pd.js";import"./RichText.vue-D4MvUk45.js";import{_ as a}from"./FormField.vue-CblrQISo.js";import{_ as s}from"./Password.vue-_KFYnsXO.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./EyeIcon-DZdtwtTn.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-CGiVUquh.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-ZhWAdK_X.js";import"./index-Brczh--H.js";import"./index-DL1Pt7bO.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-DY4Fqf02.js";import"./index-Br2-aBVM.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Password",component:s,parameters:{layout:"padded"}},r={render:()=>({components:{FormField:a,Password:s},setup(){return{wifiPassword:i("")}},template:`
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
