import{s}from"./index-CwS7Mw-8.js";import{r as o}from"./iframe-DSI7I_YQ.js";import"./index-16iY2v2i.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-Byho_yNF.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-ZhWAdK_X.js";import"./preload-helper-Dp1pzeXC.js";const _={title:"Circuit DS/Components/Checkbox",component:s,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},binary:{control:"boolean"}}},t={render:e=>({components:{Checkbox:s},setup(){const r=o(!1);return{args:e,checked:r}},template:'<Checkbox v-bind="args" v-model="checked" :binary="true" aria-label="Accept terms" />'}),args:{}},a={render:e=>({components:{Checkbox:s},setup(){const r=o(!0);return{args:e,checked:r}},template:'<Checkbox v-bind="args" v-model="checked" :binary="true" aria-label="Accept terms" />'}),args:{}},c={render:e=>({components:{Checkbox:s},setup(){const r=o(!1);return{args:e,checked:r}},template:'<Checkbox v-bind="args" v-model="checked" :binary="true" aria-label="Accept terms" />'}),args:{disabled:!0}};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: '<Checkbox v-bind="args" v-model="checked" :binary="true" aria-label="Accept terms" />'
  }),
  args: {}
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,i,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(true);
      return {
        args,
        checked
      };
    },
    template: '<Checkbox v-bind="args" v-model="checked" :binary="true" aria-label="Accept terms" />'
  }),
  args: {}
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var b,u,h;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(false);
      return {
        args,
        checked
      };
    },
    template: '<Checkbox v-bind="args" v-model="checked" :binary="true" aria-label="Accept terms" />'
  }),
  args: {
    disabled: true
  }
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const E=["Default","Checked","Disabled"];export{a as Checked,t as Default,c as Disabled,E as __namedExportsOrder,_ as default};
