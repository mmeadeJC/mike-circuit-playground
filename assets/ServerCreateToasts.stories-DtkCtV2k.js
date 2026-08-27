import{d as n,_ as c}from"./iframe--pVyazG9.js";import{s as d}from"./index-awHdwFoC.js";import"./RichText.vue-BtNuFzRg.js";import{_ as i}from"./ToastNotification.vue-BeL3-PYc.js";import{p as l,a as m,b as p,c as u}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6pJfhDGj.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-Ck1qSbo1.js";import"./index-ZhWAdK_X.js";import"./index-DgH38Tqr.js";import"./index-DqIV57X_.js";import"./index-DDTNvhH8.js";import"./index-BlXOQGTr.js";import"./index-CtElKYVw.js";import"./index-uGbhYqvO.js";import"./useContainer-BCUrt0t4.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./FlagIcon-n-8lc86R.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";const J={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Server create toasts",parameters:{layout:"fullscreen"}},s={name:"Success and error messages",render:()=>n({components:{ToastNotification:i,Button:d},setup(){const t=c();return{showCreated:()=>l(e=>t.add(e)),showSaved:()=>m(e=>t.add(e)),showDeleted:()=>p(e=>t.add(e)),showError:()=>u(e=>t.add(e))}},template:`
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
