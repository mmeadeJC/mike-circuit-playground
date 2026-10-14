import{r as i}from"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as a}from"./RadioButtonWithLabel.vue-DnjhRrN8.js";import{k as n}from"./policyMigrationComponentConstants-CIoCNzJF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D8_kzb1y.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-OJfjCxM5.js";import"./index-ZhWAdK_X.js";import"./ShieldCheckIcon-W0AJus9F.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Radio Button With Label",component:a,parameters:{layout:"padded"}},e={name:"App type selection",render:()=>({components:{RadioButtonWithLabel:a},setup(){return{appType:i("company-added"),kioskAppTypeOptions:n}},template:`
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
