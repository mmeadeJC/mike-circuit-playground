import{d as n,r as m}from"./iframe-CrzTiCu6.js";import{s as l}from"./index-DGRV0ejT.js";import{_ as o}from"./ServerDeleteConfirmDialog-DWlkP7lT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-br2uRJO8.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./RichText.vue-Bo-7vQsj.js";import"./SeverityDialog.vue-DAxLSjJw.js";import"./index-CXMkhyA-.js";import"./index-DHkFNkeW.js";import"./index-BaGPKY7N.js";import"./index-Bli4s4Lb.js";import"./index-DUgv6TgD.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./CheckboxWithLabel.vue-BCoIi1Rw.js";import"./index-B5AAKPzU.js";import"./index-B9HYPvme.js";import"./index-DBMnBcxB.js";import"./MessageNotification.vue-D2EvCuUd.js";import"./index-DB_TaPch.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./FlagIcon-DgAIV7Qg.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./useContainer-V_XjkKmd.js";const L={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation",component:o,parameters:{layout:"centered"}},e={name:"Dialog (banner + details)",render:()=>n({components:{ServerDeleteConfirmDialog:o,Button:l},setup(){return{visible:m(!1)}},template:`
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
