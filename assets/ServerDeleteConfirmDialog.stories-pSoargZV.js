import{d as n,r as m}from"./iframe-DuzLv9Pd.js";import{s as l}from"./index-J_Bj38AC.js";import{_ as o}from"./ServerDeleteConfirmDialog-DG4-hwTZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-toZiH_.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./RichText.vue-D4MvUk45.js";import"./SeverityDialog.vue-Bjby2zaJ.js";import"./index-DlU_MYIi.js";import"./index-CGiVUquh.js";import"./index-b0ySB-5C.js";import"./index-DL1Pt7bO.js";import"./index-DOizLEho.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./CheckboxWithLabel.vue-DoqDZu3R.js";import"./index-DnaDt85i.js";import"./index-D5zH4fN4.js";import"./index-CFtktJtS.js";import"./MessageNotification.vue-gttcx1zG.js";import"./index-2kR38mcb.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./FlagIcon-CcLmoULS.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./useContainer-Do_p2hLC.js";const L={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation",component:o,parameters:{layout:"centered"}},e={name:"Dialog (banner + details)",render:()=>n({components:{ServerDeleteConfirmDialog:o,Button:l},setup(){return{visible:m(!1)}},template:`
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
