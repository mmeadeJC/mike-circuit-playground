import"./iframe--pVyazG9.js";import"./RichText.vue-BtNuFzRg.js";import{_ as l}from"./LinkText.vue-BKb948uI.js";import{_ as n}from"./MessageNotification.vue-BIaLRi4B.js";import{s as p,a as c}from"./policyMigrationComponentConstants-Ds8GoRRb.js";import"./preload-helper-Dp1pzeXC.js";import"./ArrowRightIcon-DFyskfUp.js";import"./index-LWk9cYfp.js";import"./index-CtElKYVw.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-DgH38Tqr.js";import"./index-ZhWAdK_X.js";import"./index-awHdwFoC.js";import"./index-6pJfhDGj.js";import"./index-Ck1qSbo1.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./FlagIcon-n-8lc86R.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";import"./ShieldCheckIcon-DcBYyFbD.js";const P={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Feedback/Message Notification",component:n,parameters:{layout:"padded"}},e={name:"Sidebar info banner",render:()=>({components:{MessageNotification:n,LinkText:l},template:`
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
