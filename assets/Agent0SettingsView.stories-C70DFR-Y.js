import{d as l,r as e}from"./iframe-DuzLv9Pd.js";import{_ as s}from"./Agent0SettingsView-R-zqv2KK.js";import{l as c,d as u}from"./mockData-DdtCyTwi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-BnPtWTiX.js";import"./index-SNXtFHNq.js";import"./RichText.vue-D4MvUk45.js";import"./FormField.vue-CblrQISo.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./EyeIcon-DZdtwtTn.js";import"./ConfigPageLayout.vue-Zp0FrbcB.js";import"./BasePageLayout.vue-DVNcPgxb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PageSection.vue-D7dWPH84.js";import"./TrashIcon-Cf9pvfv2.js";import"./index-Di5n2FZb.js";import"./ArrowRightStartOnRectangleIcon-D4g3cMin.js";import"./ArrowTopRightOnSquareIcon-vQx7CBJY.js";import"./RocketLaunchIcon-Cvc1Zpa7.js";import"./HomeIcon-B8gBiWKx.js";import"./UserIcon-CtiZzZ2X.js";import"./UsersIcon-BT-W7sF-.js";import"./UserGroupIcon-CWdxV-oE.js";import"./CommandLineIcon-BD5MFUQg.js";import"./ClipboardDocumentListIcon-CjFMn6dO.js";import"./ClipboardDocumentCheckIcon-k7_FGCzy.js";import"./CpuChipIcon-BBHeqCE_.js";import"./ShieldCheckIcon-BpS1grCD.js";import"./Cog6ToothIcon-bwwfqrlO.js";const ie={title:"AI Gateway - Burak/Admin Portal/Concept Parts",component:s,parameters:{layout:"fullscreen"}},t={name:"Settings",render:()=>l({components:{Agent0SettingsView:s},setup(){const p=e("bedrock"),n=e(""),m=e(!1),d=e("anthropic.claude-sonnet-4-5-20250929-v1:0"),a=e([...u]);return{selectedProvider:p,apiKey:n,apiKeyVisible:m,modelId:d,instructions:a,llmProviders:c}},template:`
        <Agent0SettingsView
          :selectedProvider="selectedProvider"
          :apiKey="apiKey"
          :apiKeyVisible="apiKeyVisible"
          :modelId="modelId"
          :instructions="instructions"
          :llmProviders="llmProviders"
          @update:selectedProvider="selectedProvider = $event"
          @update:apiKey="apiKey = $event"
          @update:apiKeyVisible="apiKeyVisible = $event"
          @update:modelId="modelId = $event"
          @update:instructions="instructions = $event"
        />
      `})};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Settings',
  render: () => defineComponent({
    components: {
      Agent0SettingsView
    },
    setup() {
      const selectedProvider = ref('bedrock');
      const apiKey = ref('');
      const apiKeyVisible = ref(false);
      const modelId = ref('anthropic.claude-sonnet-4-5-20250929-v1:0');
      const instructions = ref([...defaultInstructions]);
      return {
        selectedProvider,
        apiKey,
        apiKeyVisible,
        modelId,
        instructions,
        llmProviders
      };
    },
    template: \`
        <Agent0SettingsView
          :selectedProvider="selectedProvider"
          :apiKey="apiKey"
          :apiKeyVisible="apiKeyVisible"
          :modelId="modelId"
          :instructions="instructions"
          :llmProviders="llmProviders"
          @update:selectedProvider="selectedProvider = $event"
          @update:apiKey="apiKey = $event"
          @update:apiKeyVisible="apiKeyVisible = $event"
          @update:modelId="modelId = $event"
          @update:instructions="instructions = $event"
        />
      \`
  })
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const re=["Settings"];export{t as Settings,re as __namedExportsOrder,ie as default};
