import{d as n,r as m}from"./iframe-DMCY07cZ.js";import{s as l}from"./index-C8jYejGu.js";import{_ as o}from"./ServerDeleteConfirmDialog-BFBNdDJY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DA5-wtQK.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-Csz9fdiB.js";import"./index-ZhWAdK_X.js";import"./index-Bx337-gk.js";import"./RichText.vue-CvF5yRyM.js";import"./SeverityDialog.vue-BC_uxLq3.js";import"./index-zhnW7dfa.js";import"./index-CIjxQS-N.js";import"./index-P6ICO6ZA.js";import"./index-0Q9rnkj1.js";import"./index-DykeBKWR.js";import"./index-I-4AEmq6.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./CheckboxWithLabel.vue-CXSPPhJR.js";import"./index-BFdQe0__.js";import"./index-D3MAoQAU.js";import"./index-BEZAFdmF.js";import"./MessageNotification.vue-C0aqcNlm.js";import"./index-DZkWerPt.js";import"./InformationCircleIcon-49K75x1E.js";import"./FlagIcon-C-dB14Ld.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./useContainer-DfxTB2r_.js";const L={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation",component:o,parameters:{layout:"centered"}},e={name:"Dialog (banner + details)",render:()=>n({components:{ServerDeleteConfirmDialog:o,Button:l},setup(){return{visible:m(!1)}},template:`
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
