import{d as s,r as m}from"./iframe-CrzTiCu6.js";import{_ as p,a as c}from"./EditAllowedAiClientModal-DWGluDqb.js";import{b as u}from"./mockData-C1zsvOf2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CXMkhyA-.js";import"./index-DHkFNkeW.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-BaGPKY7N.js";import"./index-Bli4s4Lb.js";import"./index-DUgv6TgD.js";import"./index-Cp7GERer.js";import"./index-B9HYPvme.js";import"./index-BAK6AhQo.js";import"./index-DRWkJ3r7.js";import"./index-B-mFHERX.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-ukZ37hHN.js";import"./index-C5-zlbJW.js";import"./index-OmJKRl9c.js";import"./RichText.vue-Bo-7vQsj.js";import"./FormField.vue-CTr1UxJM.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./allowedAiClientOriginKindLabels-DhjafCXw.js";import"./index-CjqWYhin.js";import"./ArrowRightStartOnRectangleIcon-CBJnXu54.js";import"./ArrowTopRightOnSquareIcon-DS4hPvi9.js";import"./RocketLaunchIcon-CAzmE-6h.js";import"./HomeIcon-BQPM_8Qu.js";import"./UserIcon-Bri6dvnd.js";import"./UsersIcon-DqHPfoZY.js";import"./UserGroupIcon-B6yu2ODb.js";import"./CommandLineIcon-vFXJRXVY.js";import"./ClipboardDocumentListIcon-yzE7qRAt.js";import"./ClipboardDocumentCheckIcon-CDO3bo_W.js";import"./CpuChipIcon-Df3nujkA.js";import"./ShieldCheckIcon-CwbvLCk-.js";import"./Cog6ToothIcon-BNOeg4eV.js";const se={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Allowed AI Clients/Add allowed origin",parameters:{layout:"fullscreen",docs:{description:{component:"Single CSF keeps a stable sidebar group and predictable story IDs under\n`.../allowed-ai-clients-add-allowed-origin--add|edit`.\nIf Storybook shows “couldn’t find story after HMR”, do a full reload — IDs change when `title` changes."}}}},e={name:"Add",render:()=>s({components:{AddAllowedAiClientModal:p},setup(){return{visible:m(!0)}},template:`
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
