import{d as p,r as a,a0 as n}from"./iframe--pVyazG9.js";import{_ as o}from"./ServerDialogPhase01-B8DoiwSc.js";import{v as l}from"./mockData-XDQr9OOC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BFHwi_tq.js";import"./index-CtElKYVw.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-awHdwFoC.js";import"./index-6pJfhDGj.js";import"./index-Ck1qSbo1.js";import"./index-ZhWAdK_X.js";import"./index-DgH38Tqr.js";import"./index-By2lxUOL.js";import"./index-DDTNvhH8.js";import"./index-BUzjRe-W.js";import"./index-mLzRhsCG.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-V_KBkFc6.js";import"./index-BlXOQGTr.js";import"./index-B-BOOr65.js";import"./index-DaGsjZDs.js";import"./index-BWGkmJ0o.js";import"./index-Cr53P9D2.js";import"./index-B2GG8oKH.js";import"./index-BHfnk6xR.js";import"./RichText.vue-BtNuFzRg.js";import"./FormField.vue-DAGeh7uF.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./ChevronRightIcon-Bvh2VZdW.js";import"./CommandLineIcon-DpVPf4B3.js";import"./index-C10Cm2bV.js";import"./ArrowRightStartOnRectangleIcon-hGdjTmS_.js";import"./ArrowTopRightOnSquareIcon-dGbNogk4.js";import"./RocketLaunchIcon-EZqtAKN2.js";import"./HomeIcon-BIUhWVpo.js";import"./UserIcon-BxZQM_YX.js";import"./UsersIcon-DQhrqsfm.js";import"./UserGroupIcon-DtFhSmsY.js";import"./ClipboardDocumentListIcon-wBneEAPl.js";import"./ClipboardDocumentCheckIcon-D6uiJ4ly.js";import"./CpuChipIcon-DjhQRX8j.js";import"./ShieldCheckIcon-DcBYyFbD.js";import"./Cog6ToothIcon-LI9RgjlE.js";const me={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:o,parameters:{layout:"fullscreen"}},e={name:"Edit Server (GitHub)",render:()=>p({components:{ServerDialogPhase01:o},setup(){const m=a(!0),s=n({prefix:"GITHUB",name:"Github",url:"https://api.githubcopilot.com/mcp/",authStyle:"API Token",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});return{visible:m,serverForm:s,phase01AuthStyleOptions:l}},template:`
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
