import{d as s,r as m}from"./iframe-D7BbHDbG.js";import{_ as p,a as c}from"./EditAllowedAiClientModal-CAxzlicu.js";import{b as u}from"./mockData-CmBXhQsJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DBWVCl5L.js";import"./index-0gxlrFf7.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./index-DHnCHi6v.js";import"./index-BDr-K8Vc.js";import"./index-CCeEX0h1.js";import"./index-XbhyUeFS.js";import"./index-BaidBBYU.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-CiXhdmRB.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-DSpYqzCj.js";import"./index-DlBYujXT.js";import"./index-C2zOs5JV.js";import"./RichText.vue-1XZLRn0K.js";import"./FormField.vue-BiV6ZEgt.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import"./index-CKmPII1G.js";import"./ArrowRightStartOnRectangleIcon-B91pfFJz.js";import"./ArrowTopRightOnSquareIcon-_aQH2B8X.js";import"./RocketLaunchIcon-BIuD1oEk.js";import"./HomeIcon-XZc1Dfyu.js";import"./UserIcon-DRjp4_6R.js";import"./UsersIcon-BbZ6Qpdm.js";import"./UserGroupIcon-Ctmauh4_.js";import"./CommandLineIcon-CWVZZFIo.js";import"./ClipboardDocumentListIcon-DLWg2TFY.js";import"./ClipboardDocumentCheckIcon-B9tp8omi.js";import"./CpuChipIcon-BPQeLsIA.js";import"./ShieldCheckIcon-BY_KE66K.js";import"./Cog6ToothIcon-DbA3VXm8.js";const se={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Allowed AI Clients/Add allowed origin",parameters:{layout:"fullscreen",docs:{description:{component:"Single CSF keeps a stable sidebar group and predictable story IDs under\n`.../allowed-ai-clients-add-allowed-origin--add|edit`.\nIf Storybook shows “couldn’t find story after HMR”, do a full reload — IDs change when `title` changes."}}}},e={name:"Add",render:()=>s({components:{AddAllowedAiClientModal:p},setup(){return{visible:m(!0)}},template:`
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
