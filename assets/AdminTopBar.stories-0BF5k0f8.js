import{_ as e}from"./AdminTopBar-CfXfPgGc.js";import"./iframe-600w3n4H.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-CePK2PS1.js";import"./index-DA9jvc7b.js";import"./index-BPN10FIB.js";import"./AiAgentButton.vue-CCmXcEc5.js";import"./index-Dl3ThDuu.js";import"./RichText.vue-CqDMFobT.js";import"./ArrowLeftIcon-DfsnWOy5.js";import"./FlagIcon-Ba3Do2-9.js";const S={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Admin Top Bar",component:e,parameters:{layout:"fullscreen"}},n={name:"Default",render:()=>({components:{TopBar:e},template:`
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
