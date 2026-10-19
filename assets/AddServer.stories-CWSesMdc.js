import{d,_ as u,r as v,a0 as f}from"./iframe-CJNlUSJO.js";import"./RichText.vue-CLPxRa2P.js";import{_ as h}from"./ToastNotification.vue-R5cmrMJu.js";import{_ as m}from"./ServerDialogPhase01-DN6GmI8V.js";import{v as S}from"./mockData-BsVqpDJ5.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAgzwdNj.js";import"./index-B_P4GBGL.js";import"./index-BbdJTiks.js";import"./index-BBDD1QfU.js";import"./index-I2lZVOjH.js";import"./index-Do-nvtb2.js";import"./index-DnvcML7u.js";import"./index-AIzoT1ks.js";import"./index-ZhWAdK_X.js";import"./index-CzaTbvQ5.js";import"./index-BP13dlUd.js";import"./index-C_WDvV0g.js";import"./useContainer-B_1ygOmR.js";import"./InformationCircleIcon-Dnjq95z-.js";import"./FlagIcon-xEoXMcNx.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./index-Cpp0aXdO.js";import"./index-CcTHBmI2.js";import"./index-D-nSq33G.js";import"./index-DqMC5tMH.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-CK3JQGnr.js";import"./index-TgrN5p_g.js";import"./index-CtMg5eIS.js";import"./index-DNoP2_Hj.js";import"./index-DMJeGYfZ.js";import"./index-87h8nido.js";import"./index-CB0U-vya.js";import"./FormField.vue-DokXCbml.js";import"./ChevronRightIcon-9Bjzgkk8.js";import"./CommandLineIcon-BlUqAMc5.js";import"./index-Bb-Am5iU.js";import"./ArrowRightStartOnRectangleIcon-CLCUEpzv.js";import"./ArrowTopRightOnSquareIcon-Cd_6qSPk.js";import"./RocketLaunchIcon-MP9dRmf5.js";import"./HomeIcon-DGihxR32.js";import"./UserIcon-B9-rHRsZ.js";import"./UsersIcon-oaPeND-z.js";import"./UserGroupIcon-C-0WA-Ss.js";import"./ClipboardDocumentListIcon-HkPtUXlJ.js";import"./ClipboardDocumentCheckIcon-DA2PjPuu.js";import"./CpuChipIcon-7isR4Woi.js";import"./ShieldCheckIcon-BkfH9kvS.js";import"./Cog6ToothIcon-BCMOD4VN.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
        <div class="h-screen bg-neutral-surface_alt">
          <ToastNotification />
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="add"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="onCreate"
          />
        </div>
      `})};var r,o,i,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Add Server',
  render: () => defineComponent({
    components: {
      ServerDialogPhase01,
      ToastNotification
    },
    setup() {
      const visible = ref(true);
      const toast = useToast();
      const serverForm = reactive<Phase01ServerFormState>({
        prefix: '',
        name: '',
        url: '',
        authStyle: 'OAuth',
        apiDocumentationUrl: '',
        oauthClientId: '',
        oauthScope: ''
      });
      function onCreate() {
        visible.value = false;
        pushServerCreatedToast(m => toast.add(m));
      }
      return {
        visible,
        serverForm,
        phase01AuthStyleOptions,
        onCreate
      };
    },
    template: \`
        <div class="h-screen bg-neutral-surface_alt">
          <ToastNotification />
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="add"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="onCreate"
          />
        </div>
      \`
  })
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source},description:{story:"Interactive add-server flow (catalog app, custom app, OAuth advanced).",...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.description}}};const ye=["AddServer"];export{e as AddServer,ye as __namedExportsOrder,be as default};
