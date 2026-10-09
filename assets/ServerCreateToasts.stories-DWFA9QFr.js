import{d as n,_ as c}from"./iframe-DMCY07cZ.js";import{s as d}from"./index-C8jYejGu.js";import"./RichText.vue-CvF5yRyM.js";import{_ as i}from"./ToastNotification.vue-BOH0sqgz.js";import{p as l,a as m,b as p,c as u}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DA5-wtQK.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-Csz9fdiB.js";import"./index-ZhWAdK_X.js";import"./index-Bx337-gk.js";import"./index-Cl11YM6v.js";import"./index-0Q9rnkj1.js";import"./index-D3MAoQAU.js";import"./index-CIjxQS-N.js";import"./index-DYGVLXAt.js";import"./useContainer-DfxTB2r_.js";import"./InformationCircleIcon-49K75x1E.js";import"./FlagIcon-C-dB14Ld.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./ExclamationCircleIcon-0G5GZbYV.js";const J={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Server create toasts",parameters:{layout:"fullscreen"}},s={name:"Success and error messages",render:()=>n({components:{ToastNotification:i,Button:d},setup(){const t=c();return{showCreated:()=>l(e=>t.add(e)),showSaved:()=>m(e=>t.add(e)),showDeleted:()=>p(e=>t.add(e)),showError:()=>u(e=>t.add(e))}},template:`
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
