import"./iframe-600w3n4H.js";import{_ as s}from"./CopyButton.vue-D-9LhzIN.js";import"./RichText.vue-CqDMFobT.js";import{s as r}from"./policyMigrationComponentConstants-By4Q4wXb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./Square2StackIcon-HzFD5fRm.js";import"./ShieldCheckIcon-BytxG3nK.js";const b={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Actions/Copy Button",component:s,parameters:{layout:"padded"}},e={render:()=>({components:{CopyButton:s},setup(){return{samplePolicyPayload:r}},template:`
      <div class="flex items-center gap-sm max-w-3xl">
        <code class="flex-1 truncate rounded-sm bg-neutral-surface px-sm py-xs text-body-sm text-neutral-base">
          {{ samplePolicyPayload }}
        </code>
        <CopyButton :text="samplePolicyPayload" size="small" />
      </div>
    `})};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CopyButton
    },
    setup() {
      return {
        samplePolicyPayload
      };
    },
    template: \`
      <div class="flex items-center gap-sm max-w-3xl">
        <code class="flex-1 truncate rounded-sm bg-neutral-surface px-sm py-xs text-body-sm text-neutral-base">
          {{ samplePolicyPayload }}
        </code>
        <CopyButton :text="samplePolicyPayload" size="small" />
      </div>
    \`
  })
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,b as default};
