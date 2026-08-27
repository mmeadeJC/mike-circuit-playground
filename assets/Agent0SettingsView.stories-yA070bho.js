import{d as l,r as e}from"./iframe-DSI7I_YQ.js";import{_ as s}from"./Agent0SettingsView-UWcaII8D.js";import{l as c,d as u}from"./mockData-BgyvNFPM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./index-CbI5Nc1U.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-CsSMY8xR.js";import"./index-BF3dm58r.js";import"./RichText.vue-DARNTLdh.js";import"./FormField.vue-DvIDnTXZ.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./InformationCircleIcon-Cz23V1it.js";import"./EyeIcon-CgTh71dA.js";import"./ConfigPageLayout.vue-mHsT-DwW.js";import"./BasePageLayout.vue-x6vCfDbO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PageSection.vue-BzhdqP23.js";import"./TrashIcon-BHjh44dq.js";import"./index-D6mY1Y8s.js";import"./ArrowRightStartOnRectangleIcon-CiAc9VBg.js";import"./ArrowTopRightOnSquareIcon-C_EktnJD.js";import"./RocketLaunchIcon-Dsyb3UQf.js";import"./HomeIcon-CQmrqHE7.js";import"./UserIcon-CSW82trP.js";import"./UsersIcon-OEvGzjDd.js";import"./UserGroupIcon-DeF3nAvb.js";import"./CommandLineIcon-Bs9Wraq9.js";import"./ClipboardDocumentListIcon-BaP2rSiE.js";import"./ClipboardDocumentCheckIcon-ByZb5sDi.js";import"./CpuChipIcon-DEbsRDHr.js";import"./ShieldCheckIcon-nGYAINf2.js";import"./Cog6ToothIcon-CsHyeCNP.js";const ie={title:"AI Gateway - Burak/Admin Portal/Concept Parts",component:s,parameters:{layout:"fullscreen"}},t={name:"Settings",render:()=>l({components:{Agent0SettingsView:s},setup(){const p=e("bedrock"),n=e(""),m=e(!1),d=e("anthropic.claude-sonnet-4-5-20250929-v1:0"),a=e([...u]);return{selectedProvider:p,apiKey:n,apiKeyVisible:m,modelId:d,instructions:a,llmProviders:c}},template:`
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
