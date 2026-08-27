import{d as s,r as m}from"./iframe-wHZiWscM.js";import{_ as p,a as c}from"./EditAllowedAiClientModal-5yhOSdK_.js";import{b as u}from"./mockData-Kk33s5oK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-_1pOB8MI.js";import"./index-DG2sTEJu.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-sD1-d5gW.js";import"./index-DuolNdSU.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-DSxjRmh5.js";import"./index-Box4ManB.js";import"./index-0sOqJRIv.js";import"./index-B52hguGd.js";import"./index-BsadxdHP.js";import"./index-CK8YOc-s.js";import"./index-OomjoOn0.js";import"./index-B9GWGLe7.js";import"./index-BZ44v4AP.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-B0f83xA1.js";import"./index-QsK0X07t.js";import"./index-DvptmZO3.js";import"./RichText.vue-CHGMbC98.js";import"./FormField.vue-Di73I2_d.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./InformationCircleIcon-DZ4ah18T.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import"./index-Andb7bwO.js";import"./ArrowRightStartOnRectangleIcon-CLdR-YKA.js";import"./ArrowTopRightOnSquareIcon-Di75X2M6.js";import"./RocketLaunchIcon-CNdx9WZl.js";import"./HomeIcon-5r_QbQOS.js";import"./UserIcon-BeF8Hyvt.js";import"./UsersIcon-DnG2W9uG.js";import"./UserGroupIcon-BLdtu9b8.js";import"./CommandLineIcon-8W_LRzjZ.js";import"./ClipboardDocumentListIcon-zSNh2cWZ.js";import"./ClipboardDocumentCheckIcon-B9O-4nOP.js";import"./CpuChipIcon-D7soRAGz.js";import"./ShieldCheckIcon-XJT-0kMA.js";import"./Cog6ToothIcon-CpmE-KkZ.js";const se={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Allowed AI Clients/Add allowed origin",parameters:{layout:"fullscreen",docs:{description:{component:"Single CSF keeps a stable sidebar group and predictable story IDs under\n`.../allowed-ai-clients-add-allowed-origin--add|edit`.\nIf Storybook shows “couldn’t find story after HMR”, do a full reload — IDs change when `title` changes."}}}},e={name:"Add",render:()=>s({components:{AddAllowedAiClientModal:p},setup(){return{visible:m(!0)}},template:`
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
