import"./iframe-e359xqcE.js";import"./RichText.vue-DSFy4cWp.js";import{_ as l}from"./LinkText.vue-CAkZt6Z4.js";import{_ as n}from"./MessageNotification.vue-C0yM77Od.js";import{s as p,a as c}from"./policyMigrationComponentConstants-D7TbH3zR.js";import"./preload-helper-Dp1pzeXC.js";import"./ArrowRightIcon-LWeHu1Pb.js";import"./index-CLgHIt31.js";import"./index-SNTWOJlm.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-DGdP0FUD.js";import"./index-ZhWAdK_X.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-BxhYpKxH.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./FlagIcon-ebJhzkK-.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ShieldCheckIcon-C8LDGAuf.js";const P={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Feedback/Message Notification",component:n,parameters:{layout:"padded"}},e={name:"Sidebar info banner",render:()=>({components:{MessageNotification:n,LinkText:l},template:`
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
