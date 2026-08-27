import{r as d}from"./iframe--pVyazG9.js";import"./RichText.vue-BtNuFzRg.js";import{_ as l}from"./FormField.vue-DAGeh7uF.js";import{_ as a}from"./Password.vue-CF_oNas1.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./EyeIcon-_XjitPcg.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-CtElKYVw.js";import"./index-mLzRhsCG.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-ZhWAdK_X.js";import"./index-Cr53P9D2.js";import"./index-DDTNvhH8.js";import"./index-awHdwFoC.js";import"./index-6pJfhDGj.js";import"./index-Ck1qSbo1.js";import"./index-DgH38Tqr.js";const K={title:"Circuit DS/Components/Password",component:a,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},invalid:{control:"boolean"}}},t={render:e=>({components:{Password:a,FormField:l},setup(){const r=d("");return{args:e,value:r}},template:`
      <FormField label="Password">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" toggleMask v-bind="args" />
        </template>
      </FormField>
    `}),args:{}},n={render:e=>({components:{Password:a,FormField:l},setup(){const r=d("");return{args:e,value:r}},template:`
      <FormField label="Password">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" placeholder="Enter password" toggleMask v-bind="args" />
        </template>
      </FormField>
    `}),args:{}},s={render:e=>({components:{Password:a,FormField:l},setup(){const r=d("secret123");return{args:e,value:r}},template:`
      <FormField label="Password">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" placeholder="Enter password" toggleMask disabled v-bind="args" />
        </template>
      </FormField>
    `}),args:{}},o={render:e=>({components:{Password:a,FormField:l},setup(){const r=d("short");return{args:e,value:r}},template:`
      <FormField label="Password" :invalid="true" invalidText="Password must be at least 8 characters">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" placeholder="Enter password" toggleMask invalid v-bind="args" />
        </template>
      </FormField>
    `}),args:{}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Password,
      FormField
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <FormField label="Password">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" toggleMask v-bind="args" />
        </template>
      </FormField>
    \`
  }),
  args: {}
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,c,F;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Password,
      FormField
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <FormField label="Password">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" placeholder="Enter password" toggleMask v-bind="args" />
        </template>
      </FormField>
    \`
  }),
  args: {}
}`,...(F=(c=n.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};var g,v,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Password,
      FormField
    },
    setup() {
      const value = ref('secret123');
      return {
        args,
        value
      };
    },
    template: \`
      <FormField label="Password">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" placeholder="Enter password" toggleMask disabled v-bind="args" />
        </template>
      </FormField>
    \`
  }),
  args: {}
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var P,I,b;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Password,
      FormField
    },
    setup() {
      const value = ref('short');
      return {
        args,
        value
      };
    },
    template: \`
      <FormField label="Password" :invalid="true" invalidText="Password must be at least 8 characters">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" placeholder="Enter password" toggleMask invalid v-bind="args" />
        </template>
      </FormField>
    \`
  }),
  args: {}
}`,...(b=(I=o.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const L=["Default","WithPlaceholder","Disabled","Invalid"];export{t as Default,s as Disabled,o as Invalid,n as WithPlaceholder,L as __namedExportsOrder,K as default};
