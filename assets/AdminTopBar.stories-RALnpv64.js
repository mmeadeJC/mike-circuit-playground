import{_ as e}from"./AdminTopBar-CApat_qI.js";import"./iframe-DuzLv9Pd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./index-CWdSX-TA.js";import"./index-D3QA_pcE.js";import"./index-Di5n2FZb.js";import"./AiAgentButton.vue-BwR0d7yG.js";import"./index-BQabsSYQ.js";import"./RichText.vue-D4MvUk45.js";import"./ArrowLeftIcon-BrTKOOsg.js";import"./FlagIcon-CcLmoULS.js";const S={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Admin Top Bar",component:e,parameters:{layout:"fullscreen"}},n={name:"Default",render:()=>({components:{TopBar:e},template:`
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
