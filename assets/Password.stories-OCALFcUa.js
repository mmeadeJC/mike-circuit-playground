import{r as i}from"./iframe-BF79XtSp.js";import"./RichText.vue-CqGWfsH6.js";import{_ as a}from"./FormField.vue-C69YWs2P.js";import{_ as s}from"./Password.vue-Cuu4TDVB.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./EyeIcon-DVodujmo.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-Dtk_BLuX.js";import"./index-BkZv6EbR.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-ZhWAdK_X.js";import"./index-bqWkeg_n.js";import"./index-PuebpjLD.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-xyLKPl8B.js";import"./index-BVIEBy36.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Password",component:s,parameters:{layout:"padded"}},r={render:()=>({components:{FormField:a,Password:s},setup(){return{wifiPassword:i("")}},template:`
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
