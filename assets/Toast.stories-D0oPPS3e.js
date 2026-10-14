import{s as a}from"./index-3ArnCpZB.js";import{s as i}from"./index-DR5Ktjtn.js";import{_ as n}from"./iframe-BF79XtSp.js";import"./index-PuebpjLD.js";import"./index-Du18TKou.js";import"./index-CR4bzIFl.js";import"./index-dcWUga6b.js";import"./index-Dtk_BLuX.js";import"./index-DckzHriz.js";import"./index-BVIEBy36.js";import"./index-ZhWAdK_X.js";import"./index-DTZ-8UWl.js";import"./index-xyLKPl8B.js";import"./preload-helper-Dp1pzeXC.js";const k={title:"Circuit DS/Components/Toast",component:a,tags:["autodocs"]},e={render:()=>({components:{Toast:a,Button:i},setup(){const s=n();return{showSuccess:()=>{s.add({severity:"success",summary:"Success",detail:"Operation completed",life:3e3})},showInfo:()=>{s.add({severity:"info",summary:"Info",detail:"Informational message",life:3e3})},showWarn:()=>{s.add({severity:"warn",summary:"Warning",detail:"Please review",life:3e3})},showError:()=>{s.add({severity:"error",summary:"Error",detail:"Something went wrong",life:3e3})}}},template:`
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
