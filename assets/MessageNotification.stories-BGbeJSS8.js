import{s as C}from"./index-CKnS-nTZ.js";import"./iframe-e359xqcE.js";import"./RichText.vue-DSFy4cWp.js";import{_ as z}from"./MessageNotification.vue-C0yM77Od.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CLgHIt31.js";import"./index-SNTWOJlm.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./FlagIcon-ebJhzkK-.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./ExclamationCircleIcon-GWGlLrqG.js";const $={title:"Circuit DS/Components/MessageNotification",component:z,tags:["autodocs"]},e={args:{severity:"success",detail:"Success message"}},s={args:{severity:"info",detail:"Info message"}},r={args:{severity:"warn",detail:"Warning message"}},a={args:{severity:"error",detail:"Error message"}},t={args:{severity:"secondary",detail:"Secondary message"}},o={args:{title:"Message Title",detail:"Message detail content goes here.",severity:"info"}},n={render:A=>({components:{MessageNotification:z,Button:C},setup(){return{args:A}},template:`
      <MessageNotification severity="info" detail="This message includes an action button." v-bind="args">
        <template #button>
          <Button label="Action" size="small" variant="outlined" severity="secondary" />
        </template>
      </MessageNotification>
    `}),args:{}},i={args:{severity:"info",detail:"This message cannot be dismissed.",closable:!1}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    detail: 'Success message'
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    detail: 'Info message'
  }
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,y,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    severity: 'warn',
    detail: 'Warning message'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,S,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    detail: 'Error message'
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var M,h,N;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    severity: 'secondary',
    detail: 'Secondary message'
  }
}`,...(N=(h=t.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var T,W,B;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Message Title',
    detail: 'Message detail content goes here.',
    severity: 'info'
  }
}`,...(B=(W=o.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,_,I;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MessageNotification,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <MessageNotification severity="info" detail="This message includes an action button." v-bind="args">
        <template #button>
          <Button label="Action" size="small" variant="outlined" severity="secondary" />
        </template>
      </MessageNotification>
    \`
  }),
  args: {}
}`,...(I=(_=n.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var D,w,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    detail: 'This message cannot be dismissed.',
    closable: false
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const ee=["Success","Info","Warning","Error","Secondary","WithTitle","WithButton","NonDismissible"];export{a as Error,s as Info,i as NonDismissible,t as Secondary,e as Success,r as Warning,n as WithButton,o as WithTitle,ee as __namedExportsOrder,$ as default};
