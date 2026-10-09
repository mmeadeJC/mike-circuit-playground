import{r as d}from"./iframe-DMCY07cZ.js";import"./RichText.vue-CvF5yRyM.js";import{_ as l}from"./FormField.vue-C1zJRe6K.js";import{_ as a}from"./Password.vue-CjYar9UT.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";import"./EyeIcon-DSZ8qNEf.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-CIjxQS-N.js";import"./index-I-4AEmq6.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-ZhWAdK_X.js";import"./index-8ifyCe0e.js";import"./index-0Q9rnkj1.js";import"./index-C8jYejGu.js";import"./index-DA5-wtQK.js";import"./index-Csz9fdiB.js";import"./index-Bx337-gk.js";const K={title:"Circuit DS/Components/Password",component:a,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},invalid:{control:"boolean"}}},t={render:e=>({components:{Password:a,FormField:l},setup(){const r=d("");return{args:e,value:r}},template:`
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
