import{d as l,r as e}from"./iframe-CJNlUSJO.js";import{_ as s}from"./Agent0SettingsView-CYIhmOjZ.js";import{l as c,d as u}from"./mockData-BsVqpDJ5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CzaTbvQ5.js";import"./index-BP13dlUd.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-C_WDvV0g.js";import"./index-ZhWAdK_X.js";import"./index-AIzoT1ks.js";import"./index-DqMC5tMH.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-Dv8f6L-g.js";import"./index-CB0U-vya.js";import"./RichText.vue-CLPxRa2P.js";import"./FormField.vue-DokXCbml.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./InformationCircleIcon-Dnjq95z-.js";import"./EyeIcon-mgzepyF5.js";import"./ConfigPageLayout.vue-DE5QEzeo.js";import"./BasePageLayout.vue-BfMxOwFg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PageSection.vue-CeW1yWE4.js";import"./TrashIcon-v0EM-4lq.js";import"./index-Bb-Am5iU.js";import"./ArrowRightStartOnRectangleIcon-CLCUEpzv.js";import"./ArrowTopRightOnSquareIcon-Cd_6qSPk.js";import"./RocketLaunchIcon-MP9dRmf5.js";import"./HomeIcon-DGihxR32.js";import"./UserIcon-B9-rHRsZ.js";import"./UsersIcon-oaPeND-z.js";import"./UserGroupIcon-C-0WA-Ss.js";import"./CommandLineIcon-BlUqAMc5.js";import"./ClipboardDocumentListIcon-HkPtUXlJ.js";import"./ClipboardDocumentCheckIcon-DA2PjPuu.js";import"./CpuChipIcon-7isR4Woi.js";import"./ShieldCheckIcon-BkfH9kvS.js";import"./Cog6ToothIcon-BCMOD4VN.js";const ie={title:"AI Gateway - Burak/Admin Portal/Concept Parts",component:s,parameters:{layout:"fullscreen"}},t={name:"Settings",render:()=>l({components:{Agent0SettingsView:s},setup(){const p=e("bedrock"),n=e(""),m=e(!1),d=e("anthropic.claude-sonnet-4-5-20250929-v1:0"),a=e([...u]);return{selectedProvider:p,apiKey:n,apiKeyVisible:m,modelId:d,instructions:a,llmProviders:c}},template:`
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
