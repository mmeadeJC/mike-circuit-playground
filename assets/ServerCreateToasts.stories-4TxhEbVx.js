import{d as n,_ as c}from"./iframe-DSI7I_YQ.js";import{s as d}from"./index-DdDMkWFP.js";import"./RichText.vue-DARNTLdh.js";import{_ as i}from"./ToastNotification.vue-TFXX3DYm.js";import{p as l,a as m,b as p,c as u}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./index-DG2ZpNkF.js";import"./index-CZjsJVeR.js";import"./index-16iY2v2i.js";import"./index-BuxjV2Ka.js";import"./index-BfO8N2P2.js";import"./useContainer-fllqqkML.js";import"./InformationCircleIcon-Cz23V1it.js";import"./FlagIcon-Bax3lVf6.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./ExclamationCircleIcon-BCZOshDp.js";const J={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Server create toasts",parameters:{layout:"fullscreen"}},s={name:"Success and error messages",render:()=>n({components:{ToastNotification:i,Button:d},setup(){const t=c();return{showCreated:()=>l(e=>t.add(e)),showSaved:()=>m(e=>t.add(e)),showDeleted:()=>p(e=>t.add(e)),showError:()=>u(e=>t.add(e))}},template:`
        <div class="flex min-h-screen flex-col items-center justify-center gap-md bg-neutral-surface p-lg">
          <ToastNotification />
          <div class="flex flex-wrap justify-center gap-sm">
            <Button label="Server created" severity="success" @click="showCreated" />
            <Button label="Server saved" severity="success" @click="showSaved" />
            <Button label="Server deleted" severity="success" @click="showDeleted" />
            <Button label="Create failed" severity="danger" @click="showError" />
          </div>
        </div>
      `})};var r,o,a;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Success and error messages',
  render: () => defineComponent({
    components: {
      ToastNotification,
      Button
    },
    setup() {
      const toast = useToast();
      const showCreated = () => pushServerCreatedToast(m => toast.add(m));
      const showSaved = () => pushServerSavedToast(m => toast.add(m));
      const showDeleted = () => pushServerDeletedToast(m => toast.add(m));
      const showError = () => pushServerCreateFailedToast(m => toast.add(m));
      return {
        showCreated,
        showSaved,
        showDeleted,
        showError
      };
    },
    template: \`
        <div class="flex min-h-screen flex-col items-center justify-center gap-md bg-neutral-surface p-lg">
          <ToastNotification />
          <div class="flex flex-wrap justify-center gap-sm">
            <Button label="Server created" severity="success" @click="showCreated" />
            <Button label="Server saved" severity="success" @click="showSaved" />
            <Button label="Server deleted" severity="success" @click="showDeleted" />
            <Button label="Create failed" severity="danger" @click="showError" />
          </div>
        </div>
      \`
  })
}`,...(a=(o=s.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const K=["SuccessAndErrorDemo"];export{s as SuccessAndErrorDemo,K as __namedExportsOrder,J as default};
