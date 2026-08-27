import{d as l,r as e}from"./iframe-e359xqcE.js";import{_ as s}from"./Agent0SettingsView-D8vF5d_c.js";import{l as c,d as u}from"./mockData-DdkQ6TJx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-C8Trrx-R.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-BAE9PsyO.js";import"./index-C4r0EfiV.js";import"./RichText.vue-DSFy4cWp.js";import"./FormField.vue-X6cJp_-2.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./EyeIcon-CEoyLAXD.js";import"./ConfigPageLayout.vue-BIjfHLKw.js";import"./BasePageLayout.vue-CIy2WbCv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PageSection.vue-C0XULDUz.js";import"./TrashIcon-D83dzVWN.js";import"./index-Bn8GZArD.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";import"./ShieldCheckIcon-C8LDGAuf.js";import"./Cog6ToothIcon-B_W-iGDU.js";const ie={title:"AI Gateway - Burak/Admin Portal/Concept Parts",component:s,parameters:{layout:"fullscreen"}},t={name:"Settings",render:()=>l({components:{Agent0SettingsView:s},setup(){const p=e("bedrock"),n=e(""),m=e(!1),d=e("anthropic.claude-sonnet-4-5-20250929-v1:0"),a=e([...u]);return{selectedProvider:p,apiKey:n,apiKeyVisible:m,modelId:d,instructions:a,llmProviders:c}},template:`
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
