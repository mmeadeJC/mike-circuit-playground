import"./iframe-8Q3g4suX.js";import{_ as s}from"./CopyButton.vue-DO6yJ__l.js";import"./RichText.vue-C1Ty82RV.js";import{s as r}from"./policyMigrationComponentConstants-CIoCNzJF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./Square2StackIcon-DHwFocGV.js";import"./ShieldCheckIcon-W0AJus9F.js";const b={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Actions/Copy Button",component:s,parameters:{layout:"padded"}},e={render:()=>({components:{CopyButton:s},setup(){return{samplePolicyPayload:r}},template:`
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
