import{s as i}from"./index-sD1-d5gW.js";import{_ as n}from"./iframe-wHZiWscM.js";import"./RichText.vue-CHGMbC98.js";import{_ as a}from"./ToastNotification.vue-C3kFK0h3.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wgSmeS_B.js";import"./index-Box4ManB.js";import"./index-BsadxdHP.js";import"./index-DG2sTEJu.js";import"./index-BUW6mAnI.js";import"./useContainer-Bxg-bmhf.js";import"./InformationCircleIcon-DZ4ah18T.js";import"./FlagIcon-DIzDNC3I.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./ExclamationCircleIcon-EhF7PbwK.js";const D={title:"Circuit DS/Components/ToastNotification",component:a,tags:["autodocs"]},o={render:()=>({components:{ToastNotification:a,Button:i},setup(){const e=n();return{showSuccess:()=>{e.add({severity:"success",summary:"Success",detail:"Operation completed",life:3e3})},showInfo:()=>{e.add({severity:"info",summary:"Info",detail:"Informational message",life:3e3})},showWarn:()=>{e.add({severity:"warn",summary:"Warning",detail:"Please review",life:3e3})},showError:()=>{e.add({severity:"error",summary:"Error",detail:"Something went wrong",life:3e3})},showSecondary:()=>{e.add({severity:"secondary",summary:"Secondary",detail:"Secondary message",life:3e3})}}},template:`
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
