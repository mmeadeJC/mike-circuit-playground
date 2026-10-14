import{r as d}from"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as l}from"./FormField.vue-DPg-U9jM.js";import{_ as a}from"./Password.vue-chmVbzOv.js";import"./preload-helper-Dp1pzeXC.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./EyeIcon-DNiNViaw.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-DRA9vNfv.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-ZhWAdK_X.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./index-Ck7ewAP5.js";const K={title:"Circuit DS/Components/Password",component:a,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},invalid:{control:"boolean"}}},t={render:e=>({components:{Password:a,FormField:l},setup(){const r=d("");return{args:e,value:r}},template:`
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
