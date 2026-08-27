import{s}from"./index-2F9klpTw.js";import"./index-DG2sTEJu.js";import"./index-D_4jZi02.js";import"./iframe-wHZiWscM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-_YupRtQ5.js";import"./index-DhULWF8q.js";import"./index-ZhWAdK_X.js";const x={title:"Circuit DS/Components/Message",component:s,tags:["autodocs"],argTypes:{severity:{control:"select",options:["success","info","warn","error","secondary","contrast"]},closable:{control:"boolean"}}},r={render:e=>({components:{Message:s},setup(){return{args:e}},template:'<Message v-bind="args">This is an informational message.</Message>'}),args:{severity:"info"}},a={render:e=>({components:{Message:s},setup(){return{args:e}},template:'<Message v-bind="args">Operation completed successfully.</Message>'}),args:{severity:"success"}},o={render:e=>({components:{Message:s},setup(){return{args:e}},template:'<Message v-bind="args">Please review before proceeding.</Message>'}),args:{severity:"warn"}},t={render:e=>({components:{Message:s},setup(){return{args:e}},template:'<Message v-bind="args">An error occurred.</Message>'}),args:{severity:"error"}};var n,c,g;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Message
    },
    setup() {
      return {
        args
      };
    },
    template: '<Message v-bind="args">This is an informational message.</Message>'
  }),
  args: {
    severity: 'info'
  }
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,i,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Message
    },
    setup() {
      return {
        args
      };
    },
    template: '<Message v-bind="args">Operation completed successfully.</Message>'
  }),
  args: {
    severity: 'success'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,d,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Message
    },
    setup() {
      return {
        args
      };
    },
    template: '<Message v-bind="args">Please review before proceeding.</Message>'
  }),
  args: {
    severity: 'warn'
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var M,v,f;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Message
    },
    setup() {
      return {
        args
      };
    },
    template: '<Message v-bind="args">An error occurred.</Message>'
  }),
  args: {
    severity: 'error'
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const A=["Info","Success","Warning","Error"];export{t as Error,r as Info,a as Success,o as Warning,A as __namedExportsOrder,x as default};
