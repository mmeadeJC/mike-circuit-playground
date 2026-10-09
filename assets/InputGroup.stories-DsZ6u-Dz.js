import{s as e}from"./index-SPiWSgbj.js";import{s as o}from"./index-CVW7GHQV.js";import{s as u}from"./index-I-4AEmq6.js";import"./index-CR_NoeiN.js";import"./iframe-DMCY07cZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-ZhWAdK_X.js";const S={title:"Circuit DS/Components/InputGroup",component:e,tags:["autodocs"]},r={render:n=>({components:{InputGroup:e,InputGroupAddon:o,InputText:u},setup(){return{args:n}},template:`
      <InputGroup v-bind="args">
        <InputGroupAddon aria-hidden="true">$</InputGroupAddon>
        <InputText placeholder="Amount" aria-label="Amount in dollars" />
        <InputGroupAddon aria-hidden="true">.00</InputGroupAddon>
      </InputGroup>
    `})},t={render:n=>({components:{InputGroup:e,InputGroupAddon:o,InputText:u},setup(){return{args:n}},template:`
      <InputGroup v-bind="args">
        <InputGroupAddon>
          <i class="pi pi-user" aria-hidden="true"></i>
        </InputGroupAddon>
        <InputText placeholder="Username" aria-label="Username" />
      </InputGroup>
    `})},p={render:n=>({components:{InputGroup:e,InputGroupAddon:o,InputText:u},setup(){return{args:n}},template:`
      <InputGroup v-bind="args">
        <InputGroupAddon aria-hidden="true">https://</InputGroupAddon>
        <InputText placeholder="domain.com" aria-label="Domain name" />
      </InputGroup>
    `})};var a,d,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputGroup,
      InputGroupAddon,
      InputText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <InputGroup v-bind="args">
        <InputGroupAddon aria-hidden="true">$</InputGroupAddon>
        <InputText placeholder="Amount" aria-label="Amount in dollars" />
        <InputGroupAddon aria-hidden="true">.00</InputGroupAddon>
      </InputGroup>
    \`
  })
}`,...(s=(d=r.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var i,m,I;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputGroup,
      InputGroupAddon,
      InputText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <InputGroup v-bind="args">
        <InputGroupAddon>
          <i class="pi pi-user" aria-hidden="true"></i>
        </InputGroupAddon>
        <InputText placeholder="Username" aria-label="Username" />
      </InputGroup>
    \`
  })
}`,...(I=(m=t.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var c,l,G;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputGroup,
      InputGroupAddon,
      InputText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <InputGroup v-bind="args">
        <InputGroupAddon aria-hidden="true">https://</InputGroupAddon>
        <InputText placeholder="domain.com" aria-label="Domain name" />
      </InputGroup>
    \`
  })
}`,...(G=(l=p.parameters)==null?void 0:l.docs)==null?void 0:G.source}}};const U=["WithAddonText","WithAddonIcon","WithPrefix"];export{t as WithAddonIcon,r as WithAddonText,p as WithPrefix,U as __namedExportsOrder,S as default};
