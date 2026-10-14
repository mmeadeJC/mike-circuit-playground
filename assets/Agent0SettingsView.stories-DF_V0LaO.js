import{d as l,r as e}from"./iframe-BFKWv3KJ.js";import{_ as s}from"./Agent0SettingsView-CfZLt0vB.js";import{l as c,d as u}from"./mockData-CMO8nWrt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-Mg-B1dgW.js";import"./index-BVT3NVWy.js";import"./RichText.vue-vrSf4OCs.js";import"./FormField.vue-CsyFfyrv.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./EyeIcon-DOU3t9h_.js";import"./ConfigPageLayout.vue-CDf30mXH.js";import"./BasePageLayout.vue-DTEUtrED.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PageSection.vue-DIKvuyLr.js";import"./TrashIcon-DjM9Jqnc.js";import"./index-CaoDn_b_.js";import"./ArrowRightStartOnRectangleIcon-B1SaEZKF.js";import"./ArrowTopRightOnSquareIcon-P9gMEZmv.js";import"./RocketLaunchIcon-CoLGueqR.js";import"./HomeIcon-TceTBPbm.js";import"./UserIcon-CrDAGwP1.js";import"./UsersIcon-BlDUqua-.js";import"./UserGroupIcon-DHcrWHdF.js";import"./CommandLineIcon-C_kbsQBp.js";import"./ClipboardDocumentListIcon--U-psXCG.js";import"./ClipboardDocumentCheckIcon-D4o5FMXS.js";import"./CpuChipIcon-CERMgrl8.js";import"./ShieldCheckIcon-CQlKNWxZ.js";import"./Cog6ToothIcon-CLTd3td9.js";const ie={title:"AI Gateway - Burak/Admin Portal/Concept Parts",component:s,parameters:{layout:"fullscreen"}},t={name:"Settings",render:()=>l({components:{Agent0SettingsView:s},setup(){const p=e("bedrock"),n=e(""),m=e(!1),d=e("anthropic.claude-sonnet-4-5-20250929-v1:0"),a=e([...u]);return{selectedProvider:p,apiKey:n,apiKeyVisible:m,modelId:d,instructions:a,llmProviders:c}},template:`
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
