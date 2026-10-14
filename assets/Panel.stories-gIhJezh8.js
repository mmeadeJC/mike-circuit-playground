import{s as a}from"./index-CCIVz5jE.js";import"./index-DdAbza1U.js";import"./index-BMkyGRgX.js";import"./iframe-BFKWv3KJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUVhZ73h.js";import"./index-Dn4n97fu.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";const D={title:"Circuit DS/Components/Panel",component:a,tags:["autodocs"],argTypes:{header:{control:"text"},toggleable:{control:"boolean"}}},e={render:r=>({components:{Panel:a},setup(){return{args:r}},template:`
      <Panel v-bind="args">
        <p>Panel content goes here.</p>
      </Panel>
    `}),args:{header:"Panel Header"}},n={render:r=>({components:{Panel:a},setup(){return{args:r}},template:`
      <Panel v-bind="args">
        <p>This panel can be collapsed.</p>
      </Panel>
    `}),args:{header:"Toggleable Panel",toggleable:!0}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Panel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Panel v-bind="args">
        <p>Panel content goes here.</p>
      </Panel>
    \`
  }),
  args: {
    header: 'Panel Header'
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Panel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Panel v-bind="args">
        <p>This panel can be collapsed.</p>
      </Panel>
    \`
  }),
  args: {
    header: 'Toggleable Panel',
    toggleable: true
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const S=["Default","Toggleable"];export{e as Default,n as Toggleable,S as __namedExportsOrder,D as default};
