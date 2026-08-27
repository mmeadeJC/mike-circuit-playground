import{r as s}from"./iframe-wHZiWscM.js";import"./RichText.vue-CHGMbC98.js";import{_ as n}from"./RadioButtonWithLabel.vue-CJ5_9OSV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Btj4TG0i.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-_YupRtQ5.js";import"./index-ZhWAdK_X.js";const A={title:"Circuit DS/Components/RadioButtonWithLabel",component:n,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},a={render:e=>({components:{RadioButtonWithLabel:n},setup(){const t=s(null);return{args:e,selected:t}},template:`
      <RadioButtonWithLabel v-model="selected" value="option1" v-bind="args">
        <template #label>Option 1</template>
      </RadioButtonWithLabel>
    `}),args:{}},o={render:e=>({components:{RadioButtonWithLabel:n},setup(){const t=s(null);return{args:e,selected:t}},template:`
      <RadioButtonWithLabel v-model="selected" value="option1" v-bind="args">
        <template #label>Enable two-factor authentication</template>
        <template #description>Add an extra layer of security to your account.</template>
      </RadioButtonWithLabel>
    `}),args:{}},l={render:e=>({components:{RadioButtonWithLabel:n},setup(){const t=s("option1");return{args:e,selected:t}},template:`
      <RadioButtonWithLabel v-model="selected" value="option1" disabled v-bind="args">
        <template #label>This option is disabled</template>
        <template #description>You cannot change this setting.</template>
      </RadioButtonWithLabel>
    `}),args:{}},i={render:e=>({components:{RadioButtonWithLabel:n},setup(){const t=s(null);return{args:e,selected:t}},template:`
      <div class="flex flex-col gap-4">
        <RadioButtonWithLabel v-model="selected" value="a" v-bind="args">
          <template #label>Option A</template>
        </RadioButtonWithLabel>
        <RadioButtonWithLabel v-model="selected" value="b" v-bind="args">
          <template #label>Option B</template>
        </RadioButtonWithLabel>
        <RadioButtonWithLabel v-model="selected" value="c" v-bind="args">
          <template #label>Option C</template>
        </RadioButtonWithLabel>
      </div>
    `}),args:{}};var r,d,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RadioButtonWithLabel
    },
    setup() {
      const selected = ref<string | null>(null);
      return {
        args,
        selected
      };
    },
    template: \`
      <RadioButtonWithLabel v-model="selected" value="option1" v-bind="args">
        <template #label>Option 1</template>
      </RadioButtonWithLabel>
    \`
  }),
  args: {}
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RadioButtonWithLabel
    },
    setup() {
      const selected = ref<string | null>(null);
      return {
        args,
        selected
      };
    },
    template: \`
      <RadioButtonWithLabel v-model="selected" value="option1" v-bind="args">
        <template #label>Enable two-factor authentication</template>
        <template #description>Add an extra layer of security to your account.</template>
      </RadioButtonWithLabel>
    \`
  }),
  args: {}
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,g,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RadioButtonWithLabel
    },
    setup() {
      const selected = ref<string | null>('option1');
      return {
        args,
        selected
      };
    },
    template: \`
      <RadioButtonWithLabel v-model="selected" value="option1" disabled v-bind="args">
        <template #label>This option is disabled</template>
        <template #description>You cannot change this setting.</template>
      </RadioButtonWithLabel>
    \`
  }),
  args: {}
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,B,R;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RadioButtonWithLabel
    },
    setup() {
      const selected = ref<string | null>(null);
      return {
        args,
        selected
      };
    },
    template: \`
      <div class="flex flex-col gap-4">
        <RadioButtonWithLabel v-model="selected" value="a" v-bind="args">
          <template #label>Option A</template>
        </RadioButtonWithLabel>
        <RadioButtonWithLabel v-model="selected" value="b" v-bind="args">
          <template #label>Option B</template>
        </RadioButtonWithLabel>
        <RadioButtonWithLabel v-model="selected" value="c" v-bind="args">
          <template #label>Option C</template>
        </RadioButtonWithLabel>
      </div>
    \`
  }),
  args: {}
}`,...(R=(B=i.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const C=["Default","WithDescription","Disabled","RadioGroup"];export{a as Default,l as Disabled,i as RadioGroup,o as WithDescription,C as __namedExportsOrder,A as default};
