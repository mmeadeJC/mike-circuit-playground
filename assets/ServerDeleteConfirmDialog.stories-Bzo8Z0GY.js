import{d as n,r as m}from"./iframe-DSI7I_YQ.js";import{s as l}from"./index-DdDMkWFP.js";import{_ as o}from"./ServerDeleteConfirmDialog-yDuemhG0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./RichText.vue-DARNTLdh.js";import"./SeverityDialog.vue-j-kX_Aa3.js";import"./index-BuLOyT5f.js";import"./index-BuxjV2Ka.js";import"./index-Ck6lw9mO.js";import"./index-CZjsJVeR.js";import"./index-BxkuIoyf.js";import"./index-CbI5Nc1U.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./CheckboxWithLabel.vue-DGxWw3fq.js";import"./index-CwS7Mw-8.js";import"./index-16iY2v2i.js";import"./index-Byho_yNF.js";import"./MessageNotification.vue-BE22wqTr.js";import"./index-ClwU8wgs.js";import"./InformationCircleIcon-Cz23V1it.js";import"./FlagIcon-Bax3lVf6.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./useContainer-fllqqkML.js";const L={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation",component:o,parameters:{layout:"centered"}},e={name:"Dialog (banner + details)",render:()=>n({components:{ServerDeleteConfirmDialog:o,Button:l},setup(){return{visible:m(!1)}},template:`
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
