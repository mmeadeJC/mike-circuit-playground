import"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as l}from"./LinkText.vue-DvAjr8lK.js";import{_ as n}from"./MessageNotification.vue-Cpg8Rucu.js";import{b as p,c}from"./policyMigrationComponentConstants-CIoCNzJF.js";import"./preload-helper-Dp1pzeXC.js";import"./ArrowRightIcon-BXY2Zswv.js";import"./index-CXQWPAyu.js";import"./index-DRA9vNfv.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-Ck7ewAP5.js";import"./index-ZhWAdK_X.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./FlagIcon-CTBX6-CL.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ShieldCheckIcon-W0AJus9F.js";const P={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Feedback/Message Notification",component:n,parameters:{layout:"padded"}},e={name:"Sidebar info banner",render:()=>({components:{MessageNotification:n,LinkText:l},template:`
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
