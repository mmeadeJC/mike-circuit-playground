import{d as n,r as m}from"./iframe-CJNlUSJO.js";import{s as l}from"./index-CzaTbvQ5.js";import{_ as o}from"./ServerDeleteConfirmDialog-DcD7j-u5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BP13dlUd.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-C_WDvV0g.js";import"./index-ZhWAdK_X.js";import"./index-AIzoT1ks.js";import"./RichText.vue-CLPxRa2P.js";import"./SeverityDialog.vue-BTVb5b9d.js";import"./index-Cpp0aXdO.js";import"./index-Do-nvtb2.js";import"./index-CcTHBmI2.js";import"./index-B_P4GBGL.js";import"./index-D-nSq33G.js";import"./index-DqMC5tMH.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./CheckboxWithLabel.vue-B3I6fX3T.js";import"./index-Btd800F5.js";import"./index-BBDD1QfU.js";import"./index-CMPzMs76.js";import"./MessageNotification.vue-C83opUOC.js";import"./index-BGmcZnfZ.js";import"./InformationCircleIcon-Dnjq95z-.js";import"./FlagIcon-xEoXMcNx.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./useContainer-B_1ygOmR.js";const L={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation",component:o,parameters:{layout:"centered"}},e={name:"Dialog (banner + details)",render:()=>n({components:{ServerDeleteConfirmDialog:o,Button:l},setup(){return{visible:m(!1)}},template:`
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
