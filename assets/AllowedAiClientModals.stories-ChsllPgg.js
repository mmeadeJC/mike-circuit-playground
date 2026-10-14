import{d as s,r as m}from"./iframe-DnhA1Jsm.js";import{_ as p,a as c}from"./EditAllowedAiClientModal-gTYcW-SZ.js";import{b as u}from"./mockData-b0eNLKnq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CkUOowPH.js";import"./index-l3Tk4em_.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-BNbdGjQ1.js";import"./index-lNUZEIRs.js";import"./index-BugbG7pm.js";import"./index-ZhWAdK_X.js";import"./index-B5xbJtC5.js";import"./index-BB-DZxHZ.js";import"./index-BFiFYGtt.js";import"./index-TOe8dN6-.js";import"./index-C6XQ6gRS.js";import"./index-DNm818yJ.js";import"./index-DSiULD1o.js";import"./index-Ch682guI.js";import"./index-BI9VwZ0A.js";import"./index-DKDggJZ4.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-C3dwEfyt.js";import"./index-DqjS6dfD.js";import"./index-d5NeXY8j.js";import"./RichText.vue-BuoexALv.js";import"./FormField.vue-mRh6rdEv.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./allowedAiClientOriginKindLabels-Cm7__m1T.js";import"./index-DuIWmi4D.js";import"./ArrowRightStartOnRectangleIcon-C5SXaVic.js";import"./ArrowTopRightOnSquareIcon-Ckxu5vwN.js";import"./RocketLaunchIcon-Cg97E9Fb.js";import"./HomeIcon-BdJrXd2e.js";import"./UserIcon-LyJC13E2.js";import"./UsersIcon-BgQFsP7F.js";import"./UserGroupIcon-BLOMZMFj.js";import"./CommandLineIcon-Cd6VMgHQ.js";import"./ClipboardDocumentListIcon-BS5yXvdP.js";import"./ClipboardDocumentCheckIcon-CNnPmtk7.js";import"./CpuChipIcon-CuTYvC40.js";import"./ShieldCheckIcon-G-yjo0m6.js";import"./Cog6ToothIcon-CUj-fz1K.js";const se={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Allowed AI Clients/Add allowed origin",parameters:{layout:"fullscreen",docs:{description:{component:"Single CSF keeps a stable sidebar group and predictable story IDs under\n`.../allowed-ai-clients-add-allowed-origin--add|edit`.\nIf Storybook shows “couldn’t find story after HMR”, do a full reload — IDs change when `title` changes."}}}},e={name:"Add",render:()=>s({components:{AddAllowedAiClientModal:p},setup(){return{visible:m(!0)}},template:`
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
