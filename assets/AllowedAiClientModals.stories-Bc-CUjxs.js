import{d as s,r as m}from"./iframe-e359xqcE.js";import{_ as p,a as c}from"./EditAllowedAiClientModal-CDkXZbp0.js";import{b as u}from"./mockData-DdkQ6TJx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CWO9Utw3.js";import"./index-SNTWOJlm.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-BOWouLqF.js";import"./index-WY88b_Bj.js";import"./index-B2ZM6yJv.js";import"./index-CTBTSs98.js";import"./index-B2MD1nhU.js";import"./index-DG2lsddg.js";import"./index-T5BskalJ.js";import"./index-D72zYeEF.js";import"./index-C8Trrx-R.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-CgskNI-h.js";import"./index-C4r0EfiV.js";import"./index-BAE9PsyO.js";import"./RichText.vue-DSFy4cWp.js";import"./FormField.vue-X6cJp_-2.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import"./index-Bn8GZArD.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";import"./ShieldCheckIcon-C8LDGAuf.js";import"./Cog6ToothIcon-B_W-iGDU.js";const se={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Allowed AI Clients/Add allowed origin",parameters:{layout:"fullscreen",docs:{description:{component:"Single CSF keeps a stable sidebar group and predictable story IDs under\n`.../allowed-ai-clients-add-allowed-origin--add|edit`.\nIf Storybook shows “couldn’t find story after HMR”, do a full reload — IDs change when `title` changes."}}}},e={name:"Add",render:()=>s({components:{AddAllowedAiClientModal:p},setup(){return{visible:m(!0)}},template:`
        <div class="min-h-screen bg-neutral-surface p-md">
          <AddAllowedAiClientModal v-model:visible="visible" />
        </div>
      `})},i={name:"Edit",render:()=>s({components:{EditAllowedAiClientModal:c},setup(){return{visible:m(!0),editingEntry:u[0]}},template:`
        <div class="min-h-screen bg-neutral-surface p-md">
          <EditAllowedAiClientModal v-model:visible="visible" :editing-entry="editingEntry" />
        </div>
      `})};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Add',
  render: () => defineComponent({
    components: {
      AddAllowedAiClientModal
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
        <div class="min-h-screen bg-neutral-surface p-md">
          <AddAllowedAiClientModal v-model:visible="visible" />
        </div>
      \`
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var n,d,l;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Edit',
  render: () => defineComponent({
    components: {
      EditAllowedAiClientModal
    },
    setup() {
      const visible = ref(true);
      return {
        visible,
        editingEntry: allowedAiClientsData[0]
      };
    },
    template: \`
        <div class="min-h-screen bg-neutral-surface p-md">
          <EditAllowedAiClientModal v-model:visible="visible" :editing-entry="editingEntry" />
        </div>
      \`
  })
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const me=["Add","Edit"];export{e as Add,i as Edit,me as __namedExportsOrder,se as default};
