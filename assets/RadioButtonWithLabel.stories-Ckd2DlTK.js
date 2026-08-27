import{r as i}from"./iframe-D7BbHDbG.js";import"./RichText.vue-1XZLRn0K.js";import{_ as a}from"./RadioButtonWithLabel.vue-DUZ-C-BV.js";import{k as n}from"./policyMigrationComponentConstants-BCnQhr6a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1PNgIuf3.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-oNdbppoo.js";import"./index-ZhWAdK_X.js";import"./ShieldCheckIcon-BY_KE66K.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Radio Button With Label",component:a,parameters:{layout:"padded"}},e={name:"App type selection",render:()=>({components:{RadioButtonWithLabel:a},setup(){return{appType:i("company-added"),kioskAppTypeOptions:n}},template:`
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
