import{r as i}from"./iframe-DSI7I_YQ.js";import"./RichText.vue-DARNTLdh.js";import{P as r}from"./PageSaveBar.vue-CPLAYq51.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./useContainer-fllqqkML.js";import"./PencilSquareIcon-sxctLZ_v.js";import"./CheckIcon-DO40XkyB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Actions/Page Save Bar",component:r,parameters:{layout:"fullscreen"}},e={name:"Unsaved changes",render:()=>({components:{PageSaveBar:r},setup(){const n=i(!1),s=i(!1);async function m(){n.value=!0,await new Promise(g=>setTimeout(g,600)),n.value=!1,s.value=!0}function u(){s.value=!1}return{isSaving:n,showSavedConfirmation:s,handleSave:m,handleDiscard:u}},template:`
      <div class="relative h-48 bg-neutral-surface">
        <PageSaveBar
          :visible="true"
          :saving="isSaving"
          :saved="showSavedConfirmation"
          message="You have unsaved changes"
          saveLabel="Save Policy"
          discardLabel="Cancel"
          @save="handleSave"
          @discard="handleDiscard"
        />
      </div>
    `})},a={name:"Saved confirmation",render:()=>({components:{PageSaveBar:r},template:`
      <div class="relative h-48 bg-neutral-surface">
        <PageSaveBar
          :visible="true"
          :saved="true"
          message="You have unsaved changes"
          saveLabel="Save Policy"
          discardLabel="Cancel"
        />
      </div>
    `})};var o,t,v;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Unsaved changes',
  render: () => ({
    components: {
      PageSaveBar
    },
    setup() {
      const isSaving = ref(false);
      const showSavedConfirmation = ref(false);
      async function handleSave() {
        isSaving.value = true;
        await new Promise(resolve => setTimeout(resolve, 600));
        isSaving.value = false;
        showSavedConfirmation.value = true;
      }
      function handleDiscard() {
        showSavedConfirmation.value = false;
      }
      return {
        isSaving,
        showSavedConfirmation,
        handleSave,
        handleDiscard
      };
    },
    template: \`
      <div class="relative h-48 bg-neutral-surface">
        <PageSaveBar
          :visible="true"
          :saving="isSaving"
          :saved="showSavedConfirmation"
          message="You have unsaved changes"
          saveLabel="Save Policy"
          discardLabel="Cancel"
          @save="handleSave"
          @discard="handleDiscard"
        />
      </div>
    \`
  })
}`,...(v=(t=e.parameters)==null?void 0:t.docs)==null?void 0:v.source}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Saved confirmation',
  render: () => ({
    components: {
      PageSaveBar
    },
    template: \`
      <div class="relative h-48 bg-neutral-surface">
        <PageSaveBar
          :visible="true"
          :saved="true"
          message="You have unsaved changes"
          saveLabel="Save Policy"
          discardLabel="Cancel"
        />
      </div>
    \`
  })
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const T=["UnsavedChanges","SavedConfirmation"];export{a as SavedConfirmation,e as UnsavedChanges,T as __namedExportsOrder,x as default};
