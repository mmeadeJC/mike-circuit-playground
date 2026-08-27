import{_ as t}from"./AiSearchFooter-CwW-opZv.js";import"./iframe-D7BbHDbG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./AiSearchActionButton-DNePlm_w.js";import"./ArrowTopRightOnSquareIcon-_aQH2B8X.js";import"./ArrowDownTrayIcon-BZdF9POM.js";const _={title:"Projects/sena-playground/AI Search Dialog/Parts/AI Search Footer",component:t,parameters:{layout:"fullscreen"}};function c(e,d="bg-neutral-base"){return`
    <div class="flex min-h-[200px] justify-center ${d} px-md py-xl">
      <div class="w-full max-w-[560px]">
        ${e}
      </div>
    </div>
  `}const r={name:"Default",render:e=>({components:{AiSearchFooter:t},setup(){return{args:e}},template:c('<AiSearchFooter v-bind="args" variant="default" />')})},a={name:"AI-mode",render:e=>({components:{AiSearchFooter:t},setup(){return{args:e}},template:c('<AiSearchFooter v-bind="args" variant="ai-mode" />')})};var n,o,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Default',
  render: args => ({
    components: {
      AiSearchFooter
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<AiSearchFooter v-bind="args" variant="default" />\`)
  })
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'AI-mode',
  render: args => ({
    components: {
      AiSearchFooter
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<AiSearchFooter v-bind="args" variant="ai-mode" />\`)
  })
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const I=["Default","AiMode"];export{a as AiMode,r as Default,I as __namedExportsOrder,_ as default};
