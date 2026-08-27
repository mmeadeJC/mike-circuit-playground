import{m as i}from"./iframe-D7BbHDbG.js";import{_ as n}from"./Chip.vue-DWhIPt7n.js";import"./RichText.vue-1XZLRn0K.js";import{r as J}from"./ServerIcon-B4IdHuYf.js";import{r as V}from"./TagIcon-BF-j-Hji.js";import{r as $}from"./UserIcon-DRjp4_6R.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Blxf5QWh.js";import"./index-BmNQnOBp.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-ZhWAdK_X.js";const X={title:"Circuit DS/Components/Chip",component:n,tags:["autodocs"]},r={render:e=>({components:{Chip:n},setup(){return{args:e,UserIcon:i($)}},template:`
      <Chip
        chipKey="User"
        value="John Doe"
        :icon="UserIcon"
        v-bind="args"
      />
    `}),args:{}},o={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip
        chipKey="Status"
        value="Active"
        v-bind="args"
      />
    `}),args:{}},a={render:e=>({components:{Chip:n},setup(){return{args:e,onRemove:()=>{console.log("Chip removed")}}},template:`
      <Chip
        chipKey="Tag"
        value="Removable"
        removable
        @remove="onRemove"
        v-bind="args"
      />
    `}),args:{}},s={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip
        chipKey="Size"
        value="Compact"
        size="compact"
        v-bind="args"
      />
    `}),args:{}},t={render:e=>({components:{Chip:n},setup(){return{args:e,TagIcon:i(V)}},template:`
      <Chip
        chipKey="Important"
        :icon="TagIcon"
        v-bind="args"
      />
    `}),args:{}},p={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip
        value="Active"
        v-bind="args"
      />
    `}),args:{}},c={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip
        chipKey="Status"
        value="Disabled"
        disabled
        v-bind="args"
      />
    `}),args:{}},m={render:e=>({components:{Chip:n},setup(){return{args:e,onRemove:()=>{console.log("Compact chip removed")},ServerIcon:i(J)}},template:`
      <Chip
        chipKey="Server"
        value="Compact & Removable"
        :icon="ServerIcon"
        size="compact"
        removable
        @remove="onRemove"
        v-bind="args"
      />
    `}),args:{}};var u,d,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args,
        UserIcon: markRaw(UserIcon)
      };
    },
    template: \`
      <Chip
        chipKey="User"
        value="John Doe"
        :icon="UserIcon"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(v=(d=r.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var l,g,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip
        chipKey="Status"
        value="Active"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,b,R;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      const onRemove = () => {
        console.log('Chip removed');
      };
      return {
        args,
        onRemove
      };
    },
    template: \`
      <Chip
        chipKey="Tag"
        value="Removable"
        removable
        @remove="onRemove"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(R=(b=a.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var S,I,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip
        chipKey="Size"
        value="Compact"
        size="compact"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(y=(I=s.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var K,z,f;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args,
        TagIcon: markRaw(TagIcon)
      };
    },
    template: \`
      <Chip
        chipKey="Important"
        :icon="TagIcon"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(f=(z=t.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var D,T,U;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip
        value="Active"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(U=(T=p.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var O,_,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip
        chipKey="Status"
        value="Disabled"
        disabled
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var w,A,W;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      const onRemove = () => {
        console.log('Compact chip removed');
      };
      return {
        args,
        onRemove,
        ServerIcon: markRaw(ServerIcon)
      };
    },
    template: \`
      <Chip
        chipKey="Server"
        value="Compact & Removable"
        :icon="ServerIcon"
        size="compact"
        removable
        @remove="onRemove"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const Y=["WithIcon","WithoutIcon","Removable","CompactSize","KeyOnly","ValueOnly","Disabled","CompactRemovable"];export{m as CompactRemovable,s as CompactSize,c as Disabled,t as KeyOnly,a as Removable,p as ValueOnly,r as WithIcon,o as WithoutIcon,Y as __namedExportsOrder,X as default};
