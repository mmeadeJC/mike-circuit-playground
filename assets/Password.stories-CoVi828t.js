import{r as i}from"./iframe-BFKWv3KJ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as a}from"./FormField.vue-CsyFfyrv.js";import{_ as s}from"./Password.vue-U7sxn7Sp.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./EyeIcon-DOU3t9h_.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-2n8eVSrk.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-ZhWAdK_X.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./index-h_LiPJ46.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Password",component:s,parameters:{layout:"padded"}},r={render:()=>({components:{FormField:a,Password:s},setup(){return{wifiPassword:i("")}},template:`
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
