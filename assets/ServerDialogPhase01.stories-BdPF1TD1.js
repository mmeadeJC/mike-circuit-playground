import{d as p,r as a,a0 as n}from"./iframe-DnhA1Jsm.js";import{_ as o}from"./ServerDialogPhase01-GDBxiD_H.js";import{v as l}from"./mockData-b0eNLKnq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CkUOowPH.js";import"./index-l3Tk4em_.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-BNbdGjQ1.js";import"./index-lNUZEIRs.js";import"./index-BugbG7pm.js";import"./index-ZhWAdK_X.js";import"./index-B5xbJtC5.js";import"./index-BB-DZxHZ.js";import"./index-BFiFYGtt.js";import"./index-TOe8dN6-.js";import"./index-DKDggJZ4.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-C6XQ6gRS.js";import"./index-DNm818yJ.js";import"./index-DSiULD1o.js";import"./index-Ch682guI.js";import"./index-BI9VwZ0A.js";import"./index-C3dwEfyt.js";import"./index-2F2whbl-.js";import"./index-DqjS6dfD.js";import"./RichText.vue-BuoexALv.js";import"./FormField.vue-mRh6rdEv.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./ChevronRightIcon-CdbfjCjO.js";import"./CommandLineIcon-Cd6VMgHQ.js";import"./index-DuIWmi4D.js";import"./ArrowRightStartOnRectangleIcon-C5SXaVic.js";import"./ArrowTopRightOnSquareIcon-Ckxu5vwN.js";import"./RocketLaunchIcon-Cg97E9Fb.js";import"./HomeIcon-BdJrXd2e.js";import"./UserIcon-LyJC13E2.js";import"./UsersIcon-BgQFsP7F.js";import"./UserGroupIcon-BLOMZMFj.js";import"./ClipboardDocumentListIcon-BS5yXvdP.js";import"./ClipboardDocumentCheckIcon-CNnPmtk7.js";import"./CpuChipIcon-CuTYvC40.js";import"./ShieldCheckIcon-G-yjo0m6.js";import"./Cog6ToothIcon-CUj-fz1K.js";const me={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:o,parameters:{layout:"fullscreen"}},e={name:"Edit Server (GitHub)",render:()=>p({components:{ServerDialogPhase01:o},setup(){const m=a(!0),s=n({prefix:"GITHUB",name:"Github",url:"https://api.githubcopilot.com/mcp/",authStyle:"API Token",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});return{visible:m,serverForm:s,phase01AuthStyleOptions:l}},template:`
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="edit"
            editing-server-slug="github"
            editing-server-name="Github"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @save="visible = false"
          />
        </div>
      `})};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Edit Server (GitHub)',
  render: () => defineComponent({
    components: {
      ServerDialogPhase01
    },
    setup() {
      const visible = ref(true);
      const serverForm = reactive<Phase01ServerFormState>({
        prefix: 'GITHUB',
        name: 'Github',
        url: 'https://api.githubcopilot.com/mcp/',
        authStyle: 'API Token',
        apiDocumentationUrl: '',
        oauthClientId: '',
        oauthScope: ''
      });
      return {
        visible,
        serverForm,
        phase01AuthStyleOptions
      };
    },
    template: \`
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="edit"
            editing-server-slug="github"
            editing-server-name="Github"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @save="visible = false"
          />
        </div>
      \`
  })
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const se=["EditServerGithub"];export{e as EditServerGithub,se as __namedExportsOrder,me as default};
