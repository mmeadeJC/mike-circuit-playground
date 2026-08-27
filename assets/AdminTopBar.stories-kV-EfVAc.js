import{_ as e}from"./AdminTopBar-C1_aql48.js";import"./iframe-e359xqcE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-B6YXkmJR.js";import"./index-BLqIZ8v0.js";import"./index-Bn8GZArD.js";import"./AiAgentButton.vue-CPHfaCtk.js";import"./index-MDUUAlov.js";import"./RichText.vue-DSFy4cWp.js";import"./ArrowLeftIcon-Bj_NG_K1.js";import"./FlagIcon-ebJhzkK-.js";const S={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Admin Top Bar",component:e,parameters:{layout:"fullscreen"}},n={name:"Default",render:()=>({components:{TopBar:e},template:`
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
