import{_ as e}from"./AdminTopBar-Ck-Dv7za.js";import"./iframe-8Q3g4suX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-BEvLtaLX.js";import"./index-cFQtYIhg.js";import"./index-DPUoOQbX.js";import"./AiAgentButton.vue-hSAdW1Kt.js";import"./index-MkGR21B_.js";import"./RichText.vue-C1Ty82RV.js";import"./ArrowLeftIcon-CzirQB4t.js";import"./FlagIcon-CTBX6-CL.js";const S={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Admin Top Bar",component:e,parameters:{layout:"fullscreen"}},n={name:"Default",render:()=>({components:{TopBar:e},template:`
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
