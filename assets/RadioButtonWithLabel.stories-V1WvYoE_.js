import{r as i}from"./iframe-C6YxvgI9.js";import"./RichText.vue-h6zLaVtH.js";import{_ as a}from"./RadioButtonWithLabel.vue-BayhfOmm.js";import{k as n}from"./policyMigrationComponentConstants-D9sxqnnN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CvIohtEI.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-AqntUfTj.js";import"./index-ZhWAdK_X.js";import"./ShieldCheckIcon-cVyPPREN.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Radio Button With Label",component:a,parameters:{layout:"padded"}},e={name:"App type selection",render:()=>({components:{RadioButtonWithLabel:a},setup(){return{appType:i("company-added"),kioskAppTypeOptions:n}},template:`
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
