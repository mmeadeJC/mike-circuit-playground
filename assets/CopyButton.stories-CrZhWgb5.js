import"./iframe-C6YxvgI9.js";import{_ as s}from"./CopyButton.vue-NglXp9wD.js";import"./RichText.vue-h6zLaVtH.js";import{s as r}from"./policyMigrationComponentConstants-D9sxqnnN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-BnKDY8uA.js";import"./index-AqntUfTj.js";import"./index-DhNdrOGc.js";import"./index-ZhWAdK_X.js";import"./index-BxytmV1x.js";import"./Square2StackIcon-BC37BvYR.js";import"./ShieldCheckIcon-cVyPPREN.js";const b={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Actions/Copy Button",component:s,parameters:{layout:"padded"}},e={render:()=>({components:{CopyButton:s},setup(){return{samplePolicyPayload:r}},template:`
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
