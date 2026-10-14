import{d as n,r as m}from"./iframe-BFKWv3KJ.js";import{s as l}from"./index-CtfEZ-mH.js";import{_ as o}from"./ServerDeleteConfirmDialog-R6TQZf5x.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./RichText.vue-vrSf4OCs.js";import"./SeverityDialog.vue-tMinSkIj.js";import"./index-DynKogrQ.js";import"./index-2n8eVSrk.js";import"./index-CiP5ygH7.js";import"./index-BoZ1l_-u.js";import"./index-CG-J9OXr.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./CheckboxWithLabel.vue-BFy88Znm.js";import"./index-D6YUBXg4.js";import"./index-BXYT2gRT.js";import"./index-DdAbza1U.js";import"./MessageNotification.vue-Mb9RLQam.js";import"./index-1hqM6AZA.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./FlagIcon-DzsTOg3n.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./useContainer-BRiKvAwH.js";const L={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation",component:o,parameters:{layout:"centered"}},e={name:"Dialog (banner + details)",render:()=>n({components:{ServerDeleteConfirmDialog:o,Button:l},setup(){return{visible:m(!1)}},template:`
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
