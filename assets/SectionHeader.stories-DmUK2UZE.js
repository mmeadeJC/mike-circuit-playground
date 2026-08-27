import{_ as t}from"./SectionHeader-B01_4CSN.js";import"./iframe--pVyazG9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-awHdwFoC.js";import"./index-6pJfhDGj.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-Ck1qSbo1.js";import"./index-ZhWAdK_X.js";import"./index-DgH38Tqr.js";import"./index-C10Cm2bV.js";import"./HandThumbUpIcon-iNGDaoi1.js";const j={title:"Projects/sena-playground/AI Search Dialog/Parts/Section Header",component:t,parameters:{layout:"padded"}},s={name:"With icon and feedback",render:e=>({components:{SectionHeader:t},setup(){return{args:e}},template:`
      <div class="w-full max-w-xl">
        <SectionHeader v-bind="args" />
      </div>
    `}),args:{title:"Recent searches",showIcon:!0,showFeedback:!0}},a={name:"Without icon",render:e=>({components:{SectionHeader:t},setup(){return{args:e}},template:`
      <div class="w-full max-w-xl">
        <SectionHeader v-bind="args" />
      </div>
    `}),args:{title:"Recent searches",showIcon:!1,showFeedback:!0}},o={name:"With icon, no feedback",render:e=>({components:{SectionHeader:t},setup(){return{args:e}},template:`
      <div class="w-full max-w-xl">
        <SectionHeader v-bind="args" />
      </div>
    `}),args:{title:"Recent searches",showIcon:!0,showFeedback:!1}},r={name:"Feedback — text variant, pressed toggles solid icon",render:e=>({components:{SectionHeader:t},setup(){return{args:e}},template:`
      <div class="w-full max-w-xl">
        <p class="text-body-sm text-neutral-subtle mb-2">Click thumbs to toggle pressed state (outline / solid).</p>
        <SectionHeader v-bind="args" />
      </div>
    `}),args:{title:"AI Result",showIcon:!0,showFeedback:!0}},c={name:"Narrow width — feedback wraps",render:e=>({components:{SectionHeader:t},setup(){return{args:e}},template:`
      <div class="w-full max-w-48 border border-neutral-default_solid rounded-sm">
        <SectionHeader v-bind="args" />
      </div>
    `}),args:{title:"Recent searches",showIcon:!0,showFeedback:!0}};var n,d,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'With icon and feedback',
  render: args => ({
    components: {
      SectionHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-xl">
        <SectionHeader v-bind="args" />
      </div>
    \`
  }),
  args: {
    title: 'Recent searches',
    showIcon: true,
    showFeedback: true
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,u,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Without icon',
  render: args => ({
    components: {
      SectionHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-xl">
        <SectionHeader v-bind="args" />
      </div>
    \`
  }),
  args: {
    title: 'Recent searches',
    showIcon: false,
    showFeedback: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,b,w;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'With icon, no feedback',
  render: args => ({
    components: {
      SectionHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-xl">
        <SectionHeader v-bind="args" />
      </div>
    \`
  }),
  args: {
    title: 'Recent searches',
    showIcon: true,
    showFeedback: false
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var g,h,v,k,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Feedback — text variant, pressed toggles solid icon',
  render: args => ({
    components: {
      SectionHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-xl">
        <p class="text-body-sm text-neutral-subtle mb-2">Click thumbs to toggle pressed state (outline / solid).</p>
        <SectionHeader v-bind="args" />
      </div>
    \`
  }),
  args: {
    title: 'AI Result',
    showIcon: true,
    showFeedback: true
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Text-variant feedback buttons; click toggles outline ↔ solid icon per button.",...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.description}}};var S,f,H;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Narrow width — feedback wraps',
  render: args => ({
    components: {
      SectionHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-48 border border-neutral-default_solid rounded-sm">
        <SectionHeader v-bind="args" />
      </div>
    \`
  }),
  args: {
    title: 'Recent searches',
    showIcon: true,
    showFeedback: true
  }
}`,...(H=(f=c.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};const D=["WithIconAndFeedback","WithoutIcon","WithIconNoFeedback","FeedbackTextButtonsPressed","NarrowWidthFeedbackWraps"];export{r as FeedbackTextButtonsPressed,c as NarrowWidthFeedbackWraps,s as WithIconAndFeedback,o as WithIconNoFeedback,a as WithoutIcon,D as __namedExportsOrder,j as default};
