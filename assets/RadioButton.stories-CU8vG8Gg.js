import{s as a}from"./index-DQv4vshS.js";import{r as s}from"./iframe--pVyazG9.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-iMZkGNHR.js";import"./index-ZhWAdK_X.js";import"./preload-helper-Dp1pzeXC.js";const f={title:"Circuit DS/Components/RadioButton",component:a,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},e={render:i=>({components:{RadioButton:a},setup(){const l=s("option1");return{args:i,selected:l}},template:`
      <div class="flex gap-4">
        <div class="flex items-center gap-2">
          <RadioButton v-bind="args" inputId="opt1" value="option1" v-model="selected" />
          <label for="opt1">Option 1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-bind="args" inputId="opt2" value="option2" v-model="selected" />
          <label for="opt2">Option 2</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-bind="args" inputId="opt3" value="option3" v-model="selected" />
          <label for="opt3">Option 3</label>
        </div>
      </div>
    `}),args:{}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RadioButton
    },
    setup() {
      const selected = ref('option1');
      return {
        args,
        selected
      };
    },
    template: \`
      <div class="flex gap-4">
        <div class="flex items-center gap-2">
          <RadioButton v-bind="args" inputId="opt1" value="option1" v-model="selected" />
          <label for="opt1">Option 1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-bind="args" inputId="opt2" value="option2" v-model="selected" />
          <label for="opt2">Option 2</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-bind="args" inputId="opt3" value="option3" v-model="selected" />
          <label for="opt3">Option 3</label>
        </div>
      </div>
    \`
  }),
  args: {}
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,f as default};
