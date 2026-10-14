import{d as p,r as a,a0 as n}from"./iframe-600w3n4H.js";import{_ as o}from"./ServerDialogPhase01-I8RgFH9b.js";import{v as l}from"./mockData-fbvw1-A_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-eDcuTK2L.js";import"./index-CTl3vUKN.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-CC9FbOuz.js";import"./index-DtheA9qo.js";import"./index-Cy7FONXb.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-BuAmHxBs.js";import"./index-CtvYIbWm.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-DosJGK4C.js";import"./index-DBXXhGgD.js";import"./index-DA9jvc7b.js";import"./index-BZWznq43.js";import"./RichText.vue-CqDMFobT.js";import"./FormField.vue-9Bh63gOi.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./ChevronRightIcon-BF9RliU4.js";import"./CommandLineIcon-BHverfhZ.js";import"./index-BPN10FIB.js";import"./ArrowRightStartOnRectangleIcon-Docb568Z.js";import"./ArrowTopRightOnSquareIcon-D1DflJJw.js";import"./RocketLaunchIcon-C0UcLMmT.js";import"./HomeIcon-DzFCrQek.js";import"./UserIcon-BnMpn0XC.js";import"./UsersIcon-BAek990o.js";import"./UserGroupIcon-BAYPParn.js";import"./ClipboardDocumentListIcon-DJ3dp-pS.js";import"./ClipboardDocumentCheckIcon-fhZeORzP.js";import"./CpuChipIcon-DHk9P2K6.js";import"./ShieldCheckIcon-BytxG3nK.js";import"./Cog6ToothIcon-DHjR5ucD.js";const me={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:o,parameters:{layout:"fullscreen"}},e={name:"Edit Server (GitHub)",render:()=>p({components:{ServerDialogPhase01:o},setup(){const m=a(!0),s=n({prefix:"GITHUB",name:"Github",url:"https://api.githubcopilot.com/mcp/",authStyle:"API Token",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});return{visible:m,serverForm:s,phase01AuthStyleOptions:l}},template:`
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
