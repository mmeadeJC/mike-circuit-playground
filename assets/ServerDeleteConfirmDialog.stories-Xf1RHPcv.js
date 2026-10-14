import{d as n,r as m}from"./iframe-C6YxvgI9.js";import{s as l}from"./index-DNf9RvZr.js";import{_ as o}from"./ServerDeleteConfirmDialog-BP9kRNmL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-0tFSCsg7.js";import"./index-BnKDY8uA.js";import"./index-AqntUfTj.js";import"./index-DhNdrOGc.js";import"./index-ZhWAdK_X.js";import"./index-BxytmV1x.js";import"./RichText.vue-h6zLaVtH.js";import"./SeverityDialog.vue-CHIFdcky.js";import"./index-CJZ03RY2.js";import"./index-BTBx138D.js";import"./index-DLF1yM0N.js";import"./index-eKE_C28L.js";import"./index-DqUJJtw3.js";import"./index-Dp_YoHvc.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./CheckboxWithLabel.vue-CdCpAZFa.js";import"./index-B91snyJO.js";import"./index-DT3_wyj-.js";import"./index-WUqO2RC_.js";import"./MessageNotification.vue-BaGQb2DK.js";import"./index-rF62C8m_.js";import"./InformationCircleIcon-BY7njxzn.js";import"./FlagIcon-FVNvSbUv.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./useContainer-w-xfgTus.js";const L={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation",component:o,parameters:{layout:"centered"}},e={name:"Dialog (banner + details)",render:()=>n({components:{ServerDeleteConfirmDialog:o,Button:l},setup(){return{visible:m(!1)}},template:`
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
