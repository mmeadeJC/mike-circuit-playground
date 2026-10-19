import{_ as e}from"./AdminTopBar-BIysc9Tr.js";import"./iframe-CJNlUSJO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CzaTbvQ5.js";import"./index-BP13dlUd.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-C_WDvV0g.js";import"./index-ZhWAdK_X.js";import"./index-AIzoT1ks.js";import"./index-G7cLCde7.js";import"./index-87h8nido.js";import"./index-Bb-Am5iU.js";import"./AiAgentButton.vue-BVYZC-a5.js";import"./index-4T4mPLxV.js";import"./RichText.vue-CLPxRa2P.js";import"./ArrowLeftIcon-ZppuD48h.js";import"./FlagIcon-xEoXMcNx.js";const S={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Admin Top Bar",component:e,parameters:{layout:"fullscreen"}},n={name:"Default",render:()=>({components:{TopBar:e},template:`
      <div class="bg-neutral-surface">
        <TopBar />
      </div>
    `})},t={name:"With back button",render:()=>({components:{TopBar:e},setup(){function i(){}return{handleBack:i}},template:`
      <div class="bg-neutral-surface">
        <TopBar
          showBackButton
          backButtonLabel="Windows"
          @back="handleBack"
        />
      </div>
    `})};var a,r,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Default',
  render: () => ({
    components: {
      TopBar
    },
    template: \`
      <div class="bg-neutral-surface">
        <TopBar />
      </div>
    \`
  })
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var s,c,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'With back button',
  render: () => ({
    components: {
      TopBar
    },
    setup() {
      function handleBack() {
        // Storybook preview only
      }
      return {
        handleBack
      };
    },
    template: \`
      <div class="bg-neutral-surface">
        <TopBar
          showBackButton
          backButtonLabel="Windows"
          @back="handleBack"
        />
      </div>
    \`
  })
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const M=["Default","WithBackButton"];export{n as Default,t as WithBackButton,M as __namedExportsOrder,S as default};
