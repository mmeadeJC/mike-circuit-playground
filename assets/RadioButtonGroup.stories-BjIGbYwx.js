import{s as a}from"./index-CJLJWbi1.js";import{s as u}from"./index-DQv4vshS.js";import{r as c}from"./iframe--pVyazG9.js";import"./index-BX6qIScn.js";import"./index-iMZkGNHR.js";import"./index-DlTQV9NJ.js";import"./index-ZhWAdK_X.js";import"./preload-helper-Dp1pzeXC.js";const R={title:"Circuit DS/Components/RadioButtonGroup",component:a,tags:["autodocs"]},t={render:o=>({components:{RadioButtonGroup:a,RadioButton:u},setup(){const n=c("option1");return{args:o,selected:n}},template:`
      <RadioButtonGroup v-bind="args" v-model="selected">
        <div class="flex flex-col gap-md">
          <div class="flex items-center gap-sm">
            <RadioButton inputId="opt1" value="option1" />
            <label for="opt1" class="text-body-md">Option 1</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="opt2" value="option2" />
            <label for="opt2" class="text-body-md">Option 2</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="opt3" value="option3" />
            <label for="opt3" class="text-body-md">Option 3</label>
          </div>
        </div>
      </RadioButtonGroup>
    `})},e={render:o=>({components:{RadioButtonGroup:a,RadioButton:u},setup(){const n=c("daily");return{args:o,selected:n}},template:`
      <RadioButtonGroup v-bind="args" v-model="selected">
        <div class="flex items-center gap-lg">
          <div class="flex items-center gap-sm">
            <RadioButton inputId="daily" value="daily" />
            <label for="daily" class="text-body-md">Daily</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="weekly" value="weekly" />
            <label for="weekly" class="text-body-md">Weekly</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="monthly" value="monthly" />
            <label for="monthly" class="text-body-md">Monthly</label>
          </div>
        </div>
      </RadioButtonGroup>
    `})};var l,s,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RadioButtonGroup,
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
      <RadioButtonGroup v-bind="args" v-model="selected">
        <div class="flex flex-col gap-md">
          <div class="flex items-center gap-sm">
            <RadioButton inputId="opt1" value="option1" />
            <label for="opt1" class="text-body-md">Option 1</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="opt2" value="option2" />
            <label for="opt2" class="text-body-md">Option 2</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="opt3" value="option3" />
            <label for="opt3" class="text-body-md">Option 3</label>
          </div>
        </div>
      </RadioButtonGroup>
    \`
  })
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,r,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RadioButtonGroup,
      RadioButton
    },
    setup() {
      const selected = ref('daily');
      return {
        args,
        selected
      };
    },
    template: \`
      <RadioButtonGroup v-bind="args" v-model="selected">
        <div class="flex items-center gap-lg">
          <div class="flex items-center gap-sm">
            <RadioButton inputId="daily" value="daily" />
            <label for="daily" class="text-body-md">Daily</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="weekly" value="weekly" />
            <label for="weekly" class="text-body-md">Weekly</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="monthly" value="monthly" />
            <label for="monthly" class="text-body-md">Monthly</label>
          </div>
        </div>
      </RadioButtonGroup>
    \`
  })
}`,...(p=(r=e.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const G=["Default","Horizontal"];export{t as Default,e as Horizontal,G as __namedExportsOrder,R as default};
