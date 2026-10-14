import{d as p,r as a,a0 as n}from"./iframe-8Q3g4suX.js";import{_ as o}from"./ServerDialogPhase01-C4DpVdK-.js";import{v as l}from"./mockData-B40J5FIn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DswaKqI5.js";import"./index-DRA9vNfv.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-7zypbFVM.js";import"./index-Bpd14J7o.js";import"./index-BB_hCnE-.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-DGY9u_rI.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-Us1_uPk3.js";import"./index-BL2_KjjI.js";import"./index-cFQtYIhg.js";import"./index-XuKMVLs3.js";import"./RichText.vue-C1Ty82RV.js";import"./FormField.vue-DPg-U9jM.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./CommandLineIcon-4Js_OSQE.js";import"./index-DPUoOQbX.js";import"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import"./RocketLaunchIcon-BJK4NMZ4.js";import"./HomeIcon-yFRUSV7Z.js";import"./UserIcon-ShjzaHpT.js";import"./UsersIcon-Z2ifx08k.js";import"./UserGroupIcon-Ciz8NLc5.js";import"./ClipboardDocumentListIcon-CnTg33RY.js";import"./ClipboardDocumentCheckIcon--weNKert.js";import"./CpuChipIcon-DVt0p-5v.js";import"./ShieldCheckIcon-W0AJus9F.js";import"./Cog6ToothIcon-cxmEYFc7.js";const me={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:o,parameters:{layout:"fullscreen"}},e={name:"Edit Server (GitHub)",render:()=>p({components:{ServerDialogPhase01:o},setup(){const m=a(!0),s=n({prefix:"GITHUB",name:"Github",url:"https://api.githubcopilot.com/mcp/",authStyle:"API Token",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});return{visible:m,serverForm:s,phase01AuthStyleOptions:l}},template:`
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
