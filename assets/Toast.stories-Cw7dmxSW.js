import{s as a}from"./index-BAgzwdNj.js";import{s as i}from"./index-CzaTbvQ5.js";import{_ as n}from"./iframe-CJNlUSJO.js";import"./index-B_P4GBGL.js";import"./index-BbdJTiks.js";import"./index-BBDD1QfU.js";import"./index-I2lZVOjH.js";import"./index-Do-nvtb2.js";import"./index-DnvcML7u.js";import"./index-AIzoT1ks.js";import"./index-ZhWAdK_X.js";import"./index-BP13dlUd.js";import"./index-C_WDvV0g.js";import"./preload-helper-Dp1pzeXC.js";const k={title:"Circuit DS/Components/Toast",component:a,tags:["autodocs"]},e={render:()=>({components:{Toast:a,Button:i},setup(){const s=n();return{showSuccess:()=>{s.add({severity:"success",summary:"Success",detail:"Operation completed",life:3e3})},showInfo:()=>{s.add({severity:"info",summary:"Info",detail:"Informational message",life:3e3})},showWarn:()=>{s.add({severity:"warn",summary:"Warning",detail:"Please review",life:3e3})},showError:()=>{s.add({severity:"error",summary:"Error",detail:"Something went wrong",life:3e3})}}},template:`
      <div>
        <Toast />
        <div class="flex gap-2">
          <Button label="Success" severity="success" @click="showSuccess" />
          <Button label="Info" severity="info" @click="showInfo" />
          <Button label="Warn" severity="warn" @click="showWarn" />
          <Button label="Error" severity="danger" @click="showError" />
        </div>
      </div>
    `})};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toast,
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
      return {
        showSuccess,
        showInfo,
        showWarn,
        showError
      };
    },
    template: \`
      <div>
        <Toast />
        <div class="flex gap-2">
          <Button label="Success" severity="success" @click="showSuccess" />
          <Button label="Info" severity="info" @click="showInfo" />
          <Button label="Warn" severity="warn" @click="showWarn" />
          <Button label="Error" severity="danger" @click="showError" />
        </div>
      </div>
    \`
  })
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,k as default};
