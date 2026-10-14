import"./iframe-DnhA1Jsm.js";import"./RichText.vue-BuoexALv.js";import{_ as l}from"./LinkText.vue-h4sX1MNH.js";import{_ as n}from"./MessageNotification.vue-Bm_HYzbz.js";import{b as p,c}from"./policyMigrationComponentConstants-BSeo4Py0.js";import"./preload-helper-Dp1pzeXC.js";import"./ArrowRightIcon-18DcXMgP.js";import"./index-Dn80zYY1.js";import"./index-l3Tk4em_.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-B5xbJtC5.js";import"./index-ZhWAdK_X.js";import"./index-BNbdGjQ1.js";import"./index-lNUZEIRs.js";import"./index-BugbG7pm.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./FlagIcon-DCH0qEhv.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ShieldCheckIcon-G-yjo0m6.js";const P={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Feedback/Message Notification",component:n,parameters:{layout:"padded"}},e={name:"Sidebar info banner",render:()=>({components:{MessageNotification:n,LinkText:l},template:`
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
