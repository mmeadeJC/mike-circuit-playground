import{s as i}from"./index-BdLVtuk9.js";import{_ as n}from"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as a}from"./ToastNotification.vue-Dge3NKiz.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dn8u2qjp.js";import"./index-Bpd14J7o.js";import"./index-MzEPBPaO.js";import"./index-DRA9vNfv.js";import"./index-BdbLeFxC.js";import"./useContainer-Bc2j6_Ia.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./FlagIcon-CTBX6-CL.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./ExclamationCircleIcon-BfS8hW09.js";const D={title:"Circuit DS/Components/ToastNotification",component:a,tags:["autodocs"]},o={render:()=>({components:{ToastNotification:a,Button:i},setup(){const e=n();return{showSuccess:()=>{e.add({severity:"success",summary:"Success",detail:"Operation completed",life:3e3})},showInfo:()=>{e.add({severity:"info",summary:"Info",detail:"Informational message",life:3e3})},showWarn:()=>{e.add({severity:"warn",summary:"Warning",detail:"Please review",life:3e3})},showError:()=>{e.add({severity:"error",summary:"Error",detail:"Something went wrong",life:3e3})},showSecondary:()=>{e.add({severity:"secondary",summary:"Secondary",detail:"Secondary message",life:3e3})}}},template:`
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
