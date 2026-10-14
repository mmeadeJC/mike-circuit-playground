import{d as p,r as a,a0 as n}from"./iframe-BFKWv3KJ.js";import{_ as o}from"./ServerDialogPhase01-CkVJiTib.js";import{v as l}from"./mockData-CMO8nWrt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DynKogrQ.js";import"./index-2n8eVSrk.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-CiP5ygH7.js";import"./index-BoZ1l_-u.js";import"./index-CG-J9OXr.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-CuXoLfeA.js";import"./index-BXYT2gRT.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-D77ELRyA.js";import"./index-D_AG_8rG.js";import"./index-TlXkjPb8.js";import"./index-BVT3NVWy.js";import"./RichText.vue-vrSf4OCs.js";import"./FormField.vue-CsyFfyrv.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./ChevronRightIcon-DUJGUktX.js";import"./CommandLineIcon-C_kbsQBp.js";import"./index-CaoDn_b_.js";import"./ArrowRightStartOnRectangleIcon-B1SaEZKF.js";import"./ArrowTopRightOnSquareIcon-P9gMEZmv.js";import"./RocketLaunchIcon-CoLGueqR.js";import"./HomeIcon-TceTBPbm.js";import"./UserIcon-CrDAGwP1.js";import"./UsersIcon-BlDUqua-.js";import"./UserGroupIcon-DHcrWHdF.js";import"./ClipboardDocumentListIcon--U-psXCG.js";import"./ClipboardDocumentCheckIcon-D4o5FMXS.js";import"./CpuChipIcon-CERMgrl8.js";import"./ShieldCheckIcon-CQlKNWxZ.js";import"./Cog6ToothIcon-CLTd3td9.js";const me={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:o,parameters:{layout:"fullscreen"}},e={name:"Edit Server (GitHub)",render:()=>p({components:{ServerDialogPhase01:o},setup(){const m=a(!0),s=n({prefix:"GITHUB",name:"Github",url:"https://api.githubcopilot.com/mcp/",authStyle:"API Token",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});return{visible:m,serverForm:s,phase01AuthStyleOptions:l}},template:`
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
