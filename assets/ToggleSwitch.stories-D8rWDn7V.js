import{r as s}from"./iframe-e359xqcE.js";import"./RichText.vue-DSFy4cWp.js";import{_ as t}from"./ToggleSwitch.vue-9n0ypcdx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BtrtblyE.js";import"./index-DgftoVju.js";import"./index-ZhWAdK_X.js";const y={title:"Circuit DS/Components/ToggleSwitch",component:t,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},r={render:e=>({components:{ToggleSwitch:t},setup(){const n=s(!1);return{args:e,checked:n}},template:`
      <ToggleSwitch v-model="checked" aria-label="Toggle option" v-bind="args" />
    `}),args:{}},o={render:e=>({components:{ToggleSwitch:t},setup(){const n=s(!1);return{args:e,checked:n}},template:`
      <ToggleSwitch v-model="checked" label="Enable notifications" v-bind="args" />
    `}),args:{}},a={render:e=>({components:{ToggleSwitch:t},setup(){const n=s(!1);return{args:e,checked:n}},template:`
      <ToggleSwitch
        v-model="checked"
        label="Enable notifications"
        description="When enabled, you will receive email notifications"
        v-bind="args"
      />
    `}),args:{}},c={render:e=>({components:{ToggleSwitch:t},setup(){const n=s(!0);return{args:e,checked:n}},template:`
      <ToggleSwitch
        v-model="checked"
        label="Disabled toggle"
        description="This toggle cannot be changed"
        disabled
        v-bind="args"
      />
    `}),args:{}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ToggleSwitch
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: \`
      <ToggleSwitch v-model="checked" aria-label="Toggle option" v-bind="args" />
    \`
  }),
  args: {}
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,p,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ToggleSwitch
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: \`
      <ToggleSwitch v-model="checked" label="Enable notifications" v-bind="args" />
    \`
  }),
  args: {}
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,u,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ToggleSwitch
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: \`
      <ToggleSwitch
        v-model="checked"
        label="Enable notifications"
        description="When enabled, you will receive email notifications"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,S,T;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ToggleSwitch
    },
    setup() {
      const checked = ref(true);
      return {
        args,
        checked
      };
    },
    template: \`
      <ToggleSwitch
        v-model="checked"
        label="Disabled toggle"
        description="This toggle cannot be changed"
        disabled
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const x=["Default","WithLabel","WithDescription","Disabled"];export{r as Default,c as Disabled,a as WithDescription,o as WithLabel,x as __namedExportsOrder,y as default};
