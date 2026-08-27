import{s as i}from"./index-awHdwFoC.js";import{_ as n}from"./iframe--pVyazG9.js";import"./RichText.vue-BtNuFzRg.js";import{_ as a}from"./ToastNotification.vue-BeL3-PYc.js";import"./index-6pJfhDGj.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-Ck1qSbo1.js";import"./index-ZhWAdK_X.js";import"./index-DgH38Tqr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DqIV57X_.js";import"./index-DDTNvhH8.js";import"./index-BlXOQGTr.js";import"./index-CtElKYVw.js";import"./index-uGbhYqvO.js";import"./useContainer-BCUrt0t4.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./FlagIcon-n-8lc86R.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";const D={title:"Circuit DS/Components/ToastNotification",component:a,tags:["autodocs"]},o={render:()=>({components:{ToastNotification:a,Button:i},setup(){const e=n();return{showSuccess:()=>{e.add({severity:"success",summary:"Success",detail:"Operation completed",life:3e3})},showInfo:()=>{e.add({severity:"info",summary:"Info",detail:"Informational message",life:3e3})},showWarn:()=>{e.add({severity:"warn",summary:"Warning",detail:"Please review",life:3e3})},showError:()=>{e.add({severity:"error",summary:"Error",detail:"Something went wrong",life:3e3})},showSecondary:()=>{e.add({severity:"secondary",summary:"Secondary",detail:"Secondary message",life:3e3})}}},template:`
      <div>
        <ToastNotification />
        <div class="flex flex-wrap gap-sm">
          <Button label="Success" severity="success" @click="showSuccess" />
          <Button label="Info" severity="info" @click="showInfo" />
          <Button label="Warn" severity="warn" @click="showWarn" />
          <Button label="Error" severity="danger" @click="showError" />
          <Button label="Secondary" severity="secondary" @click="showSecondary" />
        </div>
      </div>
    `}),args:{}};var s,r,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ToastNotification,
      Button
    },
    setup() {
      const toast = useToast();
      const showSuccess = () => {
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Operation completed',
          life: 3000
        });
      };
      const showInfo = () => {
        toast.add({
          severity: 'info',
          summary: 'Info',
          detail: 'Informational message',
          life: 3000
        });
      };
      const showWarn = () => {
        toast.add({
          severity: 'warn',
          summary: 'Warning',
          detail: 'Please review',
          life: 3000
        });
      };
      const showError = () => {
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
          life: 3000
        });
      };
      const showSecondary = () => {
        toast.add({
          severity: 'secondary',
          summary: 'Secondary',
          detail: 'Secondary message',
          life: 3000
        });
      };
      return {
        showSuccess,
        showInfo,
        showWarn,
        showError,
        showSecondary
      };
    },
    template: \`
      <div>
        <ToastNotification />
        <div class="flex flex-wrap gap-sm">
          <Button label="Success" severity="success" @click="showSuccess" />
          <Button label="Info" severity="info" @click="showInfo" />
          <Button label="Warn" severity="warn" @click="showWarn" />
          <Button label="Error" severity="danger" @click="showError" />
          <Button label="Secondary" severity="secondary" @click="showSecondary" />
        </div>
      </div>
    \`
  }),
  args: {}
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const j=["AllSeverities"];export{o as AllSeverities,j as __namedExportsOrder,D as default};
