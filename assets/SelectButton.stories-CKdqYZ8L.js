import{r as l}from"./iframe-wHZiWscM.js";import{s as t}from"./index-QsK0X07t.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DhULWF8q.js";import"./index-8Q6wweZ5.js";import"./index-_YupRtQ5.js";import"./index-ZhWAdK_X.js";const V={title:"Circuit DS/Components/SelectButton",component:t,tags:["autodocs"]},u=[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}],r={render:e=>({components:{SelectButton:t},setup(){const n=l(1);return{args:e,value:n}},template:`
      <SelectButton v-bind="args" v-model="value" />
    `}),args:{options:u}},a={render:e=>({components:{SelectButton:t},setup(){const n=l(1);return{args:e,value:n}},template:`
      <SelectButton v-bind="args" v-model="value" size="small" />
    `}),args:{options:u}},o={render:e=>({components:{SelectButton:t},setup(){const n=l([1]);return{args:e,value:n}},template:`
      <SelectButton v-bind="args" v-model="value" :multiple="true" />
    `}),args:{options:u}},s={render:e=>({components:{SelectButton:t},setup(){const n=l(1);return{args:e,value:n}},template:`
      <div class="px-6 py-3 border-b border-neutral-default_solid">
        <SelectButton v-bind="args" v-model="value" />
      </div>
    `}),args:{options:u}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectButton
    },
    setup() {
      const value = ref(1);
      return {
        args,
        value
      };
    },
    template: \`
      <SelectButton v-bind="args" v-model="value" />
    \`
  }),
  args: {
    options
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,i,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectButton
    },
    setup() {
      const value = ref(1);
      return {
        args,
        value
      };
    },
    template: \`
      <SelectButton v-bind="args" v-model="value" size="small" />
    \`
  }),
  args: {
    options
  }
}`,...(v=(i=a.parameters)==null?void 0:i.docs)==null?void 0:v.source}}};var g,S,B;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectButton
    },
    setup() {
      const value = ref([1]);
      return {
        args,
        value
      };
    },
    template: \`
      <SelectButton v-bind="args" v-model="value" :multiple="true" />
    \`
  }),
  args: {
    options
  }
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var b,f,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectButton
    },
    setup() {
      const value = ref(1);
      return {
        args,
        value
      };
    },
    template: \`
      <div class="px-6 py-3 border-b border-neutral-default_solid">
        <SelectButton v-bind="args" v-model="value" />
      </div>
    \`
  }),
  args: {
    options
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const E=["Default","SmallSize","Multiple","BarVariant"];export{s as BarVariant,r as Default,o as Multiple,a as SmallSize,E as __namedExportsOrder,V as default};
