import{s as i}from"./index-BKr2PyJj.js";import{_ as n}from"./iframe-D7BbHDbG.js";import"./RichText.vue-1XZLRn0K.js";import{_ as a}from"./ToastNotification.vue-t70NaZi-.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CidY9ReQ.js";import"./index-BDr-K8Vc.js";import"./index-BaidBBYU.js";import"./index-0gxlrFf7.js";import"./index-BmNQnOBp.js";import"./useContainer-D49SELwj.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./FlagIcon-BljeC-Dg.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./ExclamationCircleIcon-CLIjVPIb.js";const D={title:"Circuit DS/Components/ToastNotification",component:a,tags:["autodocs"]},o={render:()=>({components:{ToastNotification:a,Button:i},setup(){const e=n();return{showSuccess:()=>{e.add({severity:"success",summary:"Success",detail:"Operation completed",life:3e3})},showInfo:()=>{e.add({severity:"info",summary:"Info",detail:"Informational message",life:3e3})},showWarn:()=>{e.add({severity:"warn",summary:"Warning",detail:"Please review",life:3e3})},showError:()=>{e.add({severity:"error",summary:"Error",detail:"Something went wrong",life:3e3})},showSecondary:()=>{e.add({severity:"secondary",summary:"Secondary",detail:"Secondary message",life:3e3})}}},template:`
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
