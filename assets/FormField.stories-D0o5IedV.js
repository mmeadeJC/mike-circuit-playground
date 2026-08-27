import{r as l}from"./iframe-e359xqcE.js";import{s as r}from"./index-C8Trrx-R.js";import"./RichText.vue-DSFy4cWp.js";import{_ as n}from"./FormField.vue-X6cJp_-2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-DgftoVju.js";import"./index-ZhWAdK_X.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./InformationCircleIcon-DBsCv4X8.js";const P={title:"Circuit DS/Components/FormField",component:n,tags:["autodocs"]},a={render:e=>({components:{FormField:n,InputText:r},setup(){const t=l("");return{args:e,value:t}},template:`
      <FormField label="Field Label" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `}),args:{}},p={render:e=>({components:{FormField:n,InputText:r},setup(){const t=l("");return{args:e,value:t}},template:`
      <FormField label="Field Label" labelTooltip="Tooltip content" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `}),args:{}},s={render:e=>({components:{FormField:n,InputText:r},setup(){const t=l("");return{args:e,value:t}},template:`
      <FormField label="Field Label" helpText="Help text content" helpTextSeverity="default" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `}),args:{}},o={render:e=>({components:{FormField:n,InputText:r},setup(){const t=l("");return{args:e,value:t}},template:`
      <FormField label="Field Label" helpText="Error!" helpTextSeverity="error" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `}),args:{}},i={render:e=>({components:{FormField:n,InputText:r},setup(){const t=l("");return{args:e,value:t}},template:`
      <FormField label="Field Label" required v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    `}),args:{}},d={render:e=>({components:{FormField:n,InputText:r},setup(){const t=l(""),L=l(""),H=l(""),_=l(""),q=l("");return{args:e,valDefault:t,valInfo:L,valWarning:H,valSuccess:_,valError:q}},template:`
      <div class="flex flex-wrap gap-6">
        <FormField label="Default" helpText="Default help text" helpTextSeverity="default" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valDefault" class="w-full" />
          </template>
        </FormField>
        <FormField label="Info" helpText="Info help text" helpTextSeverity="info" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valInfo" class="w-full" />
          </template>
        </FormField>
        <FormField label="Warning" helpText="Warning help text" helpTextSeverity="warning" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valWarning" class="w-full" />
          </template>
        </FormField>
        <FormField label="Success" helpText="Success help text" helpTextSeverity="success" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valSuccess" class="w-full" />
          </template>
        </FormField>
        <FormField label="Error" helpText="Error help text" helpTextSeverity="error" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valError" class="w-full" />
          </template>
        </FormField>
      </div>
    `}),args:{}};var u,m,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FormField,
      InputText
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <FormField label="Field Label" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    \`
  }),
  args: {}
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var F,v,x;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FormField,
      InputText
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <FormField label="Field Label" labelTooltip="Tooltip content" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    \`
  }),
  args: {}
}`,...(x=(v=p.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,I,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FormField,
      InputText
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <FormField label="Field Label" helpText="Help text content" helpTextSeverity="default" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    \`
  }),
  args: {}
}`,...(T=(I=s.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FormField,
      InputText
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <FormField label="Field Label" helpText="Error!" helpTextSeverity="error" v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    \`
  }),
  args: {}
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,S,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FormField,
      InputText
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <FormField label="Field Label" required v-bind="args">
        <template #default="{ inputId }">
          <InputText :id="inputId" v-model="value" class="w-full" />
        </template>
      </FormField>
    \`
  }),
  args: {}
}`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var y,E,D;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FormField,
      InputText
    },
    setup() {
      const valDefault = ref('');
      const valInfo = ref('');
      const valWarning = ref('');
      const valSuccess = ref('');
      const valError = ref('');
      return {
        args,
        valDefault,
        valInfo,
        valWarning,
        valSuccess,
        valError
      };
    },
    template: \`
      <div class="flex flex-wrap gap-6">
        <FormField label="Default" helpText="Default help text" helpTextSeverity="default" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valDefault" class="w-full" />
          </template>
        </FormField>
        <FormField label="Info" helpText="Info help text" helpTextSeverity="info" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valInfo" class="w-full" />
          </template>
        </FormField>
        <FormField label="Warning" helpText="Warning help text" helpTextSeverity="warning" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valWarning" class="w-full" />
          </template>
        </FormField>
        <FormField label="Success" helpText="Success help text" helpTextSeverity="success" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valSuccess" class="w-full" />
          </template>
        </FormField>
        <FormField label="Error" helpText="Error help text" helpTextSeverity="error" class="min-w-[200px]">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="valError" class="w-full" />
          </template>
        </FormField>
      </div>
    \`
  }),
  args: {}
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const Q=["Default","WithTooltip","WithHelpText","WithErrorHelpText","Required","AllSeverities"];export{d as AllSeverities,a as Default,i as Required,o as WithErrorHelpText,s as WithHelpText,p as WithTooltip,Q as __namedExportsOrder,P as default};
