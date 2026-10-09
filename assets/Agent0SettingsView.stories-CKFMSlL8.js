import{d as l,r as e}from"./iframe-DMCY07cZ.js";import{_ as s}from"./Agent0SettingsView-DOPCzezX.js";import{l as c,d as u}from"./mockData-C-t2Sxxt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C8jYejGu.js";import"./index-DA5-wtQK.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-Csz9fdiB.js";import"./index-ZhWAdK_X.js";import"./index-Bx337-gk.js";import"./index-I-4AEmq6.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-EyMdbmxj.js";import"./index-B3Ml9Y1m.js";import"./RichText.vue-CvF5yRyM.js";import"./FormField.vue-C1zJRe6K.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";import"./EyeIcon-DSZ8qNEf.js";import"./ConfigPageLayout.vue-DW30f_pj.js";import"./BasePageLayout.vue-D2fYOqvl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PageSection.vue-7S4k-bD_.js";import"./TrashIcon-CYdu5C6V.js";import"./index-C0Jx-WGa.js";import"./ArrowRightStartOnRectangleIcon-Bka7PvIm.js";import"./ArrowTopRightOnSquareIcon-CIGo4dDp.js";import"./RocketLaunchIcon-DVslXB5O.js";import"./HomeIcon-C9EV1fIu.js";import"./UserIcon-BoI2bMct.js";import"./UsersIcon-DP4kMeWO.js";import"./UserGroupIcon-Bogo_ozG.js";import"./CommandLineIcon-oW993rHf.js";import"./ClipboardDocumentListIcon-BMJdaMuG.js";import"./ClipboardDocumentCheckIcon-C2qlzy0s.js";import"./CpuChipIcon-xpUfEw0F.js";import"./ShieldCheckIcon-DN84MN1N.js";import"./Cog6ToothIcon-B22lkUCe.js";const ie={title:"AI Gateway - Burak/Admin Portal/Concept Parts",component:s,parameters:{layout:"fullscreen"}},t={name:"Settings",render:()=>l({components:{Agent0SettingsView:s},setup(){const p=e("bedrock"),n=e(""),m=e(!1),d=e("anthropic.claude-sonnet-4-5-20250929-v1:0"),a=e([...u]);return{selectedProvider:p,apiKey:n,apiKeyVisible:m,modelId:d,instructions:a,llmProviders:c}},template:`
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
