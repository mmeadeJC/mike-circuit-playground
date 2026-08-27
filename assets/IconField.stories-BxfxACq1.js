import{s as l,a as t}from"./index-DsdYTbg9.js";import{s as d}from"./index-CbI5Nc1U.js";import"./index-Ck3k_J8K.js";import"./iframe-DSI7I_YQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-ZhWAdK_X.js";const b={title:"Circuit DS/Components/IconField",component:t,tags:["autodocs"]},n={render:r=>({components:{IconField:t,InputIcon:l,InputText:d},setup(){return{args:r}},template:`
      <IconField v-bind="args">
        <InputIcon class="pi pi-search" aria-hidden="true" />
        <InputText placeholder="Search..." aria-label="Search" />
      </IconField>
    `})},e={render:r=>({components:{IconField:t,InputIcon:l,InputText:d},setup(){return{args:r}},template:`
      <IconField v-bind="args" iconPosition="right">
        <InputText placeholder="Enter value..." aria-label="Enter value" />
        <InputIcon class="pi pi-spin pi-spinner" aria-hidden="true" />
      </IconField>
    `})};var a,o,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IconField,
      InputIcon,
      InputText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <IconField v-bind="args">
        <InputIcon class="pi pi-search" aria-hidden="true" />
        <InputText placeholder="Search..." aria-label="Search" />
      </IconField>
    \`
  })
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,c,s;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IconField,
      InputIcon,
      InputText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <IconField v-bind="args" iconPosition="right">
        <InputText placeholder="Enter value..." aria-label="Enter value" />
        <InputIcon class="pi pi-spin pi-spinner" aria-hidden="true" />
      </IconField>
    \`
  })
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const v=["LeadingIcon","TrailingIcon"];export{n as LeadingIcon,e as TrailingIcon,v as __namedExportsOrder,b as default};
