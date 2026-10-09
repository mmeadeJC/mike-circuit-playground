import{d as s,r as m}from"./iframe-DMCY07cZ.js";import{_ as p,a as c}from"./EditAllowedAiClientModal-C4nEQ6Li.js";import{b as u}from"./mockData-C-t2Sxxt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-zhnW7dfa.js";import"./index-CIjxQS-N.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-C8jYejGu.js";import"./index-DA5-wtQK.js";import"./index-Csz9fdiB.js";import"./index-ZhWAdK_X.js";import"./index-Bx337-gk.js";import"./index-P6ICO6ZA.js";import"./index-0Q9rnkj1.js";import"./index-DykeBKWR.js";import"./index-CNtARqCh.js";import"./index-D3MAoQAU.js";import"./index-CAIS5x6K.js";import"./index-BKI-cOV2.js";import"./index-4qDJp6e0.js";import"./index-I-4AEmq6.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-8ifyCe0e.js";import"./index-B3Ml9Y1m.js";import"./index-EyMdbmxj.js";import"./RichText.vue-CvF5yRyM.js";import"./FormField.vue-C1zJRe6K.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";import"./allowedAiClientOriginKindLabels-Dea6AHHq.js";import"./index-C0Jx-WGa.js";import"./ArrowRightStartOnRectangleIcon-Bka7PvIm.js";import"./ArrowTopRightOnSquareIcon-CIGo4dDp.js";import"./RocketLaunchIcon-DVslXB5O.js";import"./HomeIcon-C9EV1fIu.js";import"./UserIcon-BoI2bMct.js";import"./UsersIcon-DP4kMeWO.js";import"./UserGroupIcon-Bogo_ozG.js";import"./CommandLineIcon-oW993rHf.js";import"./ClipboardDocumentListIcon-BMJdaMuG.js";import"./ClipboardDocumentCheckIcon-C2qlzy0s.js";import"./CpuChipIcon-xpUfEw0F.js";import"./ShieldCheckIcon-DN84MN1N.js";import"./Cog6ToothIcon-B22lkUCe.js";const se={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Allowed AI Clients/Add allowed origin",parameters:{layout:"fullscreen",docs:{description:{component:"Single CSF keeps a stable sidebar group and predictable story IDs under\n`.../allowed-ai-clients-add-allowed-origin--add|edit`.\nIf Storybook shows “couldn’t find story after HMR”, do a full reload — IDs change when `title` changes."}}}},e={name:"Add",render:()=>s({components:{AddAllowedAiClientModal:p},setup(){return{visible:m(!0)}},template:`
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
