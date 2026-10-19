import{r as i}from"./iframe-CJNlUSJO.js";import"./RichText.vue-CLPxRa2P.js";import{_ as a}from"./RadioButtonWithLabel.vue-B5TE1nFg.js";import{k as n}from"./policyMigrationComponentConstants-CxSeqGmW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DJ8ZCC17.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-BbdJTiks.js";import"./index-ZhWAdK_X.js";import"./ShieldCheckIcon-BkfH9kvS.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Radio Button With Label",component:a,parameters:{layout:"padded"}},e={name:"App type selection",render:()=>({components:{RadioButtonWithLabel:a},setup(){return{appType:i("company-added"),kioskAppTypeOptions:n}},template:`
      <div class="max-w-3xl flex flex-col gap-sm">
        <RadioButtonWithLabel
          v-for="option in kioskAppTypeOptions"
          :key="option.value"
          v-model="appType"
          :value="option.value"
          name="app-type"
          :inputId="'app-type-' + option.value"
        >
          <template #label>{{ option.label }}</template>
        </RadioButtonWithLabel>
      </div>
    `})};var t,p,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'App type selection',
  render: () => ({
    components: {
      RadioButtonWithLabel
    },
    setup() {
      const appType = ref('company-added');
      return {
        appType,
        kioskAppTypeOptions
      };
    },
    template: \`
      <div class="max-w-3xl flex flex-col gap-sm">
        <RadioButtonWithLabel
          v-for="option in kioskAppTypeOptions"
          :key="option.value"
          v-model="appType"
          :value="option.value"
          name="app-type"
          :inputId="'app-type-' + option.value"
        >
          <template #label>{{ option.label }}</template>
        </RadioButtonWithLabel>
      </div>
    \`
  })
}`,...(o=(p=e.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,x as default};
