import"./iframe-BF79XtSp.js";import{_ as s}from"./CopyButton.vue-DQa5JtXY.js";import"./RichText.vue-CqGWfsH6.js";import{s as r}from"./policyMigrationComponentConstants-BIkg6p9Q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-xyLKPl8B.js";import"./index-ZhWAdK_X.js";import"./index-BVIEBy36.js";import"./Square2StackIcon-DAlcuERQ.js";import"./ShieldCheckIcon-xpQZCNU8.js";const b={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Actions/Copy Button",component:s,parameters:{layout:"padded"}},e={render:()=>({components:{CopyButton:s},setup(){return{samplePolicyPayload:r}},template:`
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
