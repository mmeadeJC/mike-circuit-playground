import{v as D,r}from"./iframe-e359xqcE.js";import{s as t}from"./index-C8Trrx-R.js";import{s as F,a as L}from"./index-D72zYeEF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-DgftoVju.js";import"./index-ZhWAdK_X.js";const $={title:"Circuit DS/Components/InputText",component:t,tags:["autodocs"]},n={render:e=>({components:{InputText:t},setup(){const a=r("");return{args:e,value:a}},template:'<InputText v-bind="args" v-model="value" class="w-full max-w-[200px]" />'}),args:{placeholder:"Enter text...",ariaLabel:"Text input"}},s={render:e=>({components:{InputText:t},setup(){const a=r("");return{args:e,value:a}},template:'<InputText v-bind="args" v-model="value" size="small" class="w-full max-w-[200px]" />'}),args:{placeholder:"Small input",ariaLabel:"Small text input"}},l={render:e=>({components:{InputText:t},setup(){const a=r("Disabled input");return{args:e,value:a}},template:'<InputText v-bind="args" v-model="value" class="w-full max-w-[200px]" />'}),args:{disabled:!0,ariaLabel:"Disabled text input"}},o={render:e=>({components:{InputText:t},setup(){const a=r("Invalid input");return{args:e,value:a}},template:'<InputText v-bind="args" v-model="value" class="w-full max-w-[200px]" />'}),args:{invalid:!0,ariaLabel:"Invalid text input"}},p={render:e=>({components:{InputText:t,IconField:L,InputIcon:F,MagnifyingGlassIcon:D},setup(){const a=r("");return{args:e,value:a}},template:`
      <IconField class="w-full max-w-[200px]">
        <InputIcon>
          <MagnifyingGlassIcon class="size-4" aria-hidden="true" />
        </InputIcon>
        <InputText v-bind="args" v-model="value" placeholder="Search..." aria-label="Search" />
      </IconField>
    `}),args:{}};var u,i,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputText
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: '<InputText v-bind="args" v-model="value" class="w-full max-w-[200px]" />'
  }),
  args: {
    placeholder: 'Enter text...',
    ariaLabel: 'Text input'
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputText
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: '<InputText v-bind="args" v-model="value" size="small" class="w-full max-w-[200px]" />'
  }),
  args: {
    placeholder: 'Small input',
    ariaLabel: 'Small text input'
  }
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var x,I,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputText
    },
    setup() {
      const value = ref('Disabled input');
      return {
        args,
        value
      };
    },
    template: '<InputText v-bind="args" v-model="value" class="w-full max-w-[200px]" />'
  }),
  args: {
    disabled: true,
    ariaLabel: 'Disabled text input'
  }
}`,...(g=(I=l.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var b,f,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputText
    },
    setup() {
      const value = ref('Invalid input');
      return {
        args,
        value
      };
    },
    template: '<InputText v-bind="args" v-model="value" class="w-full max-w-[200px]" />'
  }),
  args: {
    invalid: true,
    ariaLabel: 'Invalid text input'
  }
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var w,S,h;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputText,
      IconField,
      InputIcon,
      MagnifyingGlassIcon
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <IconField class="w-full max-w-[200px]">
        <InputIcon>
          <MagnifyingGlassIcon class="size-4" aria-hidden="true" />
        </InputIcon>
        <InputText v-bind="args" v-model="value" placeholder="Search..." aria-label="Search" />
      </IconField>
    \`
  }),
  args: {}
}`,...(h=(S=p.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const O=["Default","SmallSize","Disabled","Invalid","WithIconField"];export{n as Default,l as Disabled,o as Invalid,s as SmallSize,p as WithIconField,O as __namedExportsOrder,$ as default};
