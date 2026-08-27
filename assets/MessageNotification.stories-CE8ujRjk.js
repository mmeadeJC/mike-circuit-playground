import"./iframe-DSI7I_YQ.js";import"./RichText.vue-DARNTLdh.js";import{_ as l}from"./LinkText.vue-la98-pF0.js";import{_ as n}from"./MessageNotification.vue-BE22wqTr.js";import{s as p,a as c}from"./policyMigrationComponentConstants-DJ6Cg_qF.js";import"./preload-helper-Dp1pzeXC.js";import"./ArrowRightIcon-sh-7-hR7.js";import"./index-ClwU8wgs.js";import"./index-BuxjV2Ka.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-Cm1NVGCj.js";import"./index-ZhWAdK_X.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-CwTDpyKH.js";import"./InformationCircleIcon-Cz23V1it.js";import"./FlagIcon-Bax3lVf6.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ShieldCheckIcon-nGYAINf2.js";const P={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Feedback/Message Notification",component:n,parameters:{layout:"padded"}},e={name:"Sidebar info banner",render:()=>({components:{MessageNotification:n,LinkText:l},template:`
      <div class="w-72">
        <MessageNotification
          severity="info"
          :title="sampleSidebarMessageTitle"
          :detail="sampleSidebarMessageDetail"
        >
          <template #button>
            <LinkText label="Learn more" href="#" target="_blank" />
          </template>
        </MessageNotification>
      </div>
    `,setup(){return{sampleSidebarMessageTitle:c,sampleSidebarMessageDetail:p}}})},t={name:"MDM enrollment info",render:()=>({components:{MessageNotification:n,LinkText:l},template:`
      <div class="w-72">
        <MessageNotification
          severity="info"
          detail="JumpCloud MDM enrollment for macOS 11.0+"
        >
          <template #button>
            <LinkText label="Learn more" href="#" target="_blank" />
          </template>
        </MessageNotification>
      </div>
    `})};var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Sidebar info banner',
  render: () => ({
    components: {
      MessageNotification,
      LinkText
    },
    template: \`
      <div class="w-72">
        <MessageNotification
          severity="info"
          :title="sampleSidebarMessageTitle"
          :detail="sampleSidebarMessageDetail"
        >
          <template #button>
            <LinkText label="Learn more" href="#" target="_blank" />
          </template>
        </MessageNotification>
      </div>
    \`,
    setup() {
      return {
        sampleSidebarMessageTitle,
        sampleSidebarMessageDetail
      };
    }
  })
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var r,s,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'MDM enrollment info',
  render: () => ({
    components: {
      MessageNotification,
      LinkText
    },
    template: \`
      <div class="w-72">
        <MessageNotification
          severity="info"
          detail="JumpCloud MDM enrollment for macOS 11.0+"
        >
          <template #button>
            <LinkText label="Learn more" href="#" target="_blank" />
          </template>
        </MessageNotification>
      </div>
    \`
  })
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const J=["SidebarInfo","EnrollmentInfo"];export{t as EnrollmentInfo,e as SidebarInfo,J as __namedExportsOrder,P as default};
