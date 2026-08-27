import{r as n}from"./iframe-DSI7I_YQ.js";import{s as r}from"./index-CsSMY8xR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-Ck3k_J8K.js";import"./index-ZhWAdK_X.js";const E={title:"Circuit DS/Components/Textarea",component:r,tags:["autodocs"]},t={render:e=>({components:{Textarea:r},setup(){const a=n("");return{args:e,value:a}},template:'<Textarea v-bind="args" v-model="value" class="w-full max-w-[300px]" />'}),args:{placeholder:"Enter text...",rows:4,ariaLabel:"Text area"}},s={render:e=>({components:{Textarea:r},setup(){const a=n("");return{args:e,value:a}},template:'<Textarea v-bind="args" v-model="value" size="small" class="w-full max-w-[300px]" />'}),args:{placeholder:"Small textarea",rows:3,ariaLabel:"Small text area"}},l={render:e=>({components:{Textarea:r},setup(){const a=n("Disabled textarea content");return{args:e,value:a}},template:'<Textarea v-bind="args" v-model="value" class="w-full max-w-[300px]" />'}),args:{disabled:!0,rows:4,ariaLabel:"Disabled text area"}},o={render:e=>({components:{Textarea:r},setup(){const a=n("Invalid input");return{args:e,value:a}},template:'<Textarea v-bind="args" v-model="value" class="w-full max-w-[300px]" />'}),args:{invalid:!0,rows:4,ariaLabel:"Invalid text area"}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: '<Textarea v-bind="args" v-model="value" class="w-full max-w-[300px]" />'
  }),
  args: {
    placeholder: 'Enter text...',
    rows: 4,
    ariaLabel: 'Text area'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,d,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: '<Textarea v-bind="args" v-model="value" size="small" class="w-full max-w-[300px]" />'
  }),
  args: {
    placeholder: 'Small textarea',
    rows: 3,
    ariaLabel: 'Small text area'
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var x,v,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      const value = ref('Disabled textarea content');
      return {
        args,
        value
      };
    },
    template: '<Textarea v-bind="args" v-model="value" class="w-full max-w-[300px]" />'
  }),
  args: {
    disabled: true,
    rows: 4,
    ariaLabel: 'Disabled text area'
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,w,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      const value = ref('Invalid input');
      return {
        args,
        value
      };
    },
    template: '<Textarea v-bind="args" v-model="value" class="w-full max-w-[300px]" />'
  }),
  args: {
    invalid: true,
    rows: 4,
    ariaLabel: 'Invalid text area'
  }
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const C=["Default","SmallSize","Disabled","Invalid"];export{t as Default,l as Disabled,o as Invalid,s as SmallSize,C as __namedExportsOrder,E as default};
