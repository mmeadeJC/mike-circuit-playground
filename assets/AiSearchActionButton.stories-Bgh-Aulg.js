import{_ as a}from"./AiSearchActionButton-DNePlm_w.js";import"./iframe-D7BbHDbG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";const _={title:"Projects/sena-playground/AI Search Dialog/Parts/AI Search Action Button",component:a,parameters:{layout:"fullscreen"}};function s(n,g="bg-neutral-surface"){return`
    <div class="flex min-h-[120px] items-center justify-center ${g} px-md py-xl">
      <div class="w-full max-w-[560px] flex justify-center">
        ${n}
      </div>
    </div>
  `}const e={name:"Default",render:n=>({components:{AiSearchActionButton:a},setup(){return{args:n}},template:s('<AiSearchActionButton v-bind="args" />')}),args:{}},t={name:"Disabled",render:n=>({components:{AiSearchActionButton:a},setup(){return{args:n}},template:s('<AiSearchActionButton v-bind="args" />')}),args:{disabled:!0}},r={name:"Long label",render:n=>({components:{AiSearchActionButton:a},setup(){return{args:n}},template:s('<AiSearchActionButton v-bind="args" />')}),args:{label:"Open in AI Assistant with a longer label to test layout"}};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Default',
  render: args => ({
    components: {
      AiSearchActionButton
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<AiSearchActionButton v-bind="args" />\`)
  }),
  args: {}
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Disabled',
  render: args => ({
    components: {
      AiSearchActionButton
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<AiSearchActionButton v-bind="args" />\`)
  }),
  args: {
    disabled: true
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,A;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Long label',
  render: args => ({
    components: {
      AiSearchActionButton
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<AiSearchActionButton v-bind="args" />\`)
  }),
  args: {
    label: 'Open in AI Assistant with a longer label to test layout'
  }
}`,...(A=(d=r.parameters)==null?void 0:d.docs)==null?void 0:A.source}}};const w=["Default","Disabled","LongLabel"];export{e as Default,t as Disabled,r as LongLabel,w as __namedExportsOrder,_ as default};
