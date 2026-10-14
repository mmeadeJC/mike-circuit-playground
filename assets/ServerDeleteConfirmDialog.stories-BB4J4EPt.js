import{d as n,r as m}from"./iframe-600w3n4H.js";import{s as l}from"./index-DAcoo9Zi.js";import{_ as o}from"./ServerDeleteConfirmDialog-DLogJDxp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./RichText.vue-CqDMFobT.js";import"./SeverityDialog.vue-_qbtizbh.js";import"./index-eDcuTK2L.js";import"./index-CTl3vUKN.js";import"./index-CC9FbOuz.js";import"./index-DtheA9qo.js";import"./index-Cy7FONXb.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./CheckboxWithLabel.vue-BmE_SJFg.js";import"./index-DyPrYXuB.js";import"./index-CtvYIbWm.js";import"./index-B3TfiOtM.js";import"./MessageNotification.vue-mnj1Yhnk.js";import"./index-BXs8LW6R.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./FlagIcon-Ba3Do2-9.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./useContainer-KG6QsGJY.js";const L={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation",component:o,parameters:{layout:"centered"}},e={name:"Dialog (banner + details)",render:()=>n({components:{ServerDeleteConfirmDialog:o,Button:l},setup(){return{visible:m(!1)}},template:`
        <div class="flex flex-col items-center gap-md p-lg">
          <Button label="Open delete confirmation" @click="visible = true" />
          <ServerDeleteConfirmDialog
            v-model:visible="visible"
            server-name="GitHub"
            @confirm="visible = false"
            @cancel="visible = false"
          />
        </div>
      `})};var r,i,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Dialog (banner + details)',
  render: () => defineComponent({
    components: {
      ServerDeleteConfirmDialog,
      Button
    },
    setup() {
      const visible = ref(false);
      return {
        visible
      };
    },
    template: \`
        <div class="flex flex-col items-center gap-md p-lg">
          <Button label="Open delete confirmation" @click="visible = true" />
          <ServerDeleteConfirmDialog
            v-model:visible="visible"
            server-name="GitHub"
            @confirm="visible = false"
            @cancel="visible = false"
          />
        </div>
      \`
  })
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,L as default};
