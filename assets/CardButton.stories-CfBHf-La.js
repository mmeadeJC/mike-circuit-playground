import{m as G,r as U}from"./iframe-e359xqcE.js";import{_ as e}from"./CardButton.vue-DoXk5TaR.js";import"./RichText.vue-DSFy4cWp.js";import{r as T}from"./ArrowRightIcon-LWeHu1Pb.js";import{r as _}from"./KeyIcon-BX1iCR_j.js";import{r as K}from"./ComputerDesktopIcon-CZ49U3bB.js";import{r as O}from"./UserGroupIcon-E0lAPvKK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgftoVju.js";const q={title:"Circuit DS/Components/CardButton",component:e,tags:["autodocs"],argTypes:{title:{control:"text"},content:{control:"text"},clickable:{control:"boolean"},size:{control:"select",options:["default","small"]}}},r={render:n=>({components:{CardButton:e},setup(){const t=U(!1);return{args:n,clicked:t,onClick:()=>{t.value=!0}}},template:`
      <div>
        <CardButton
          title="Manage Users"
          content="Add, edit, and remove users from your organization."
          @click="onClick"
        />
        <p v-if="clicked" class="mt-2 text-body-sm text-neutral-subtle">Card was clicked.</p>
      </div>
    `}),args:{}},o={render:n=>({components:{CardButton:e,KeyIcon:_,ArrowRightIcon:T},setup(){return{args:n,onClick:()=>{}}},template:`
      <CardButton
        title="SSO Configuration"
        content="Configure single sign-on for your applications."
        @click="onClick"
      >
        <template #leading>
          <KeyIcon class="w-6 h-6 text-neutral-subtle" />
        </template>
        <template #trailing>
          <ArrowRightIcon class="w-5 h-5 text-neutral-subtle" />
        </template>
      </CardButton>
    `}),args:{}},a={render:n=>({components:{CardButton:e},setup(){return{args:n,onClick:()=>{}}},template:`
      <CardButton
        content="This card has no title, only content."
        @click="onClick"
      />
    `}),args:{}},c={render:n=>({components:{CardButton:e,UserGroupIcon:O,ComputerDesktopIcon:K},setup(){return{args:n,onClick:()=>{}}},template:`
      <CardButton
        title="Device Groups"
        @click="onClick"
      >
        <template #leading>
          <UserGroupIcon class="w-6 h-6 text-neutral-subtle" />
        </template>
        <template #trailing>
          <ComputerDesktopIcon class="w-5 h-5 text-neutral-subtle" />
        </template>
      </CardButton>
    `}),args:{}},s={render:n=>({components:{CardButton:e},setup(){const t=G(T);return{args:n,ArrowRightIconRaw:t,onClick:()=>{}}},template:`
      <CardButton
        title="View Details"
        content="Click to view full details."
        :trailingIcon="ArrowRightIconRaw"
        @click="onClick"
      />
    `}),args:{}},l={render:n=>({components:{CardButton:e},setup(){return{args:n,onClick:()=>{}}},template:`
      <CardButton
        title="Compact Card"
        content="Small size variant."
        size="small"
        @click="onClick"
      />
    `}),args:{}},i={render:n=>({components:{CardButton:e},setup(){return{args:n}},template:`
      <CardButton
        title="Read-only Card"
        content="This card is not clickable (clickable=false)."
        :clickable="false"
      />
    `}),args:{}};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CardButton
    },
    setup() {
      const clicked = ref(false);
      const onClick = () => {
        clicked.value = true;
      };
      return {
        args,
        clicked,
        onClick
      };
    },
    template: \`
      <div>
        <CardButton
          title="Manage Users"
          content="Add, edit, and remove users from your organization."
          @click="onClick"
        />
        <p v-if="clicked" class="mt-2 text-body-sm text-neutral-subtle">Card was clicked.</p>
      </div>
    \`
  }),
  args: {}
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,C,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CardButton,
      KeyIcon,
      ArrowRightIcon
    },
    setup() {
      const onClick = () => {};
      return {
        args,
        onClick
      };
    },
    template: \`
      <CardButton
        title="SSO Configuration"
        content="Configure single sign-on for your applications."
        @click="onClick"
      >
        <template #leading>
          <KeyIcon class="w-6 h-6 text-neutral-subtle" />
        </template>
        <template #trailing>
          <ArrowRightIcon class="w-5 h-5 text-neutral-subtle" />
        </template>
      </CardButton>
    \`
  }),
  args: {}
}`,...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var k,B,h;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CardButton
    },
    setup() {
      const onClick = () => {};
      return {
        args,
        onClick
      };
    },
    template: \`
      <CardButton
        content="This card has no title, only content."
        @click="onClick"
      />
    \`
  }),
  args: {}
}`,...(h=(B=a.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var f,w,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CardButton,
      UserGroupIcon,
      ComputerDesktopIcon
    },
    setup() {
      const onClick = () => {};
      return {
        args,
        onClick
      };
    },
    template: \`
      <CardButton
        title="Device Groups"
        @click="onClick"
      >
        <template #leading>
          <UserGroupIcon class="w-6 h-6 text-neutral-subtle" />
        </template>
        <template #trailing>
          <ComputerDesktopIcon class="w-5 h-5 text-neutral-subtle" />
        </template>
      </CardButton>
    \`
  }),
  args: {}
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var b,R,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CardButton
    },
    setup() {
      const ArrowRightIconRaw = markRaw(ArrowRightIcon);
      const onClick = () => {};
      return {
        args,
        ArrowRightIconRaw,
        onClick
      };
    },
    template: \`
      <CardButton
        title="View Details"
        content="Click to view full details."
        :trailingIcon="ArrowRightIconRaw"
        @click="onClick"
      />
    \`
  }),
  args: {}
}`,...(S=(R=s.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var v,x,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CardButton
    },
    setup() {
      const onClick = () => {};
      return {
        args,
        onClick
      };
    },
    template: \`
      <CardButton
        title="Compact Card"
        content="Small size variant."
        size="small"
        @click="onClick"
      />
    \`
  }),
  args: {}
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var A,D,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CardButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <CardButton
        title="Read-only Card"
        content="This card is not clickable (clickable=false)."
        :clickable="false"
      />
    \`
  }),
  args: {}
}`,...(z=(D=i.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const F=["Default","WithLeadingAndTrailing","WithoutHeader","WithoutContent","WithTrailingIconProp","SmallSize","NonClickable"];export{r as Default,i as NonClickable,l as SmallSize,o as WithLeadingAndTrailing,s as WithTrailingIconProp,c as WithoutContent,a as WithoutHeader,F as __namedExportsOrder,q as default};
