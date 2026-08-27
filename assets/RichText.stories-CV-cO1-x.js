import"./iframe-DSI7I_YQ.js";import{_ as e}from"./RichText.vue-DARNTLdh.js";import"./preload-helper-Dp1pzeXC.js";const F={title:"Circuit DS/Components/RichText",component:e,tags:["autodocs"],argTypes:{content:{control:"text"},tag:{control:"text"},wrapLines:{control:"boolean"}}},t={render:n=>({components:{RichText:e},setup(){return{args:n}},template:`
      <RichText content="This is **bold** text" v-bind="args" />
    `}),args:{}},r={render:n=>({components:{RichText:e},setup(){return{args:n}},template:`
      <RichText content="This is *italic* text" v-bind="args" />
    `}),args:{}},s={render:n=>({components:{RichText:e},setup(){return{args:n}},template:'\n      <RichText content="Use the `markRaw()` function" v-bind="args" />\n    '}),args:{}},a={render:n=>({components:{RichText:e},setup(){return{args:n}},template:`
      <RichText content="Visit [Example](https://example.com)" v-bind="args" />
    `}),args:{}},o={render:n=>({components:{RichText:e},setup(){return{args:n}},template:'\n      <RichText content="This is **bold**, *italic*, `code`, and a [link](https://example.com)" v-bind="args" />\n    '}),args:{}},c={render:n=>({components:{RichText:e},setup(){return{args:n,content:"First paragraph with **bold** text.\n\nSecond paragraph with *italic* and `code`."}},template:`
      <RichText
        tag="div"
        :wrapLines="true"
        :content="content"
        v-bind="args"
      />
    `}),args:{}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RichText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <RichText content="This is **bold** text" v-bind="args" />
    \`
  }),
  args: {}
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RichText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <RichText content="This is *italic* text" v-bind="args" />
    \`
  }),
  args: {}
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var l,h,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RichText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <RichText content="Use the \\\`markRaw()\\\` function" v-bind="args" />
    \`
  }),
  args: {}
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,R,b;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RichText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <RichText content="Visit [Example](https://example.com)" v-bind="args" />
    \`
  }),
  args: {}
}`,...(b=(R=a.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var v,w,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RichText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <RichText content="This is **bold**, *italic*, \\\`code\\\`, and a [link](https://example.com)" v-bind="args" />
    \`
  }),
  args: {}
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var L,k,C;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RichText
    },
    setup() {
      const content = 'First paragraph with **bold** text.\\n\\nSecond paragraph with *italic* and \`code\`.';
      return {
        args,
        content
      };
    },
    template: \`
      <RichText
        tag="div"
        :wrapLines="true"
        :content="content"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const I=["Bold","Italic","Code","Link","Combined","MultiLine"];export{t as Bold,s as Code,o as Combined,r as Italic,a as Link,c as MultiLine,I as __namedExportsOrder,F as default};
