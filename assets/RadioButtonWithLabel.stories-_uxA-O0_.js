import{r as i}from"./iframe-DnhA1Jsm.js";import"./RichText.vue-BuoexALv.js";import{_ as a}from"./RadioButtonWithLabel.vue-CRTzEgjq.js";import{k as n}from"./policyMigrationComponentConstants-BSeo4Py0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUtpmYFH.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-DwERWXoD.js";import"./index-ZhWAdK_X.js";import"./ShieldCheckIcon-G-yjo0m6.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Radio Button With Label",component:a,parameters:{layout:"padded"}},e={name:"App type selection",render:()=>({components:{RadioButtonWithLabel:a},setup(){return{appType:i("company-added"),kioskAppTypeOptions:n}},template:`
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
