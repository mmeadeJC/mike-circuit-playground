import{d as n,r as m}from"./iframe-D7BbHDbG.js";import{s as l}from"./index-BKr2PyJj.js";import{_ as o}from"./ServerDeleteConfirmDialog-DOwajSJQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./RichText.vue-1XZLRn0K.js";import"./SeverityDialog.vue-CyqIzXRV.js";import"./index-DBWVCl5L.js";import"./index-0gxlrFf7.js";import"./index-DHnCHi6v.js";import"./index-BDr-K8Vc.js";import"./index-CCeEX0h1.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./CheckboxWithLabel.vue-DmVEARZq.js";import"./index-CL0m3nvY.js";import"./index-BaidBBYU.js";import"./index-bbso60R8.js";import"./MessageNotification.vue-CXd-EBo7.js";import"./index-CkmisnA9.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./FlagIcon-BljeC-Dg.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./useContainer-D49SELwj.js";const L={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation",component:o,parameters:{layout:"centered"}},e={name:"Dialog (banner + details)",render:()=>n({components:{ServerDeleteConfirmDialog:o,Button:l},setup(){return{visible:m(!1)}},template:`
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
