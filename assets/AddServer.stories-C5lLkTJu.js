import{d,_ as u,r as v,a0 as f}from"./iframe-BFKWv3KJ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as h}from"./ToastNotification.vue-ChdY2GMO.js";import{_ as m}from"./ServerDialogPhase01-CkVJiTib.js";import{v as S}from"./mockData-CMO8nWrt.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ueKwlAjZ.js";import"./index-BoZ1l_-u.js";import"./index-DUVhZ73h.js";import"./index-BXYT2gRT.js";import"./index-BMkyGRgX.js";import"./index-2n8eVSrk.js";import"./index--0ujXtkk.js";import"./index-h_LiPJ46.js";import"./index-ZhWAdK_X.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./useContainer-BRiKvAwH.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./FlagIcon-DzsTOg3n.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./index-DynKogrQ.js";import"./index-CiP5ygH7.js";import"./index-CG-J9OXr.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-CuXoLfeA.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-D77ELRyA.js";import"./index-D_AG_8rG.js";import"./index-TlXkjPb8.js";import"./index-BVT3NVWy.js";import"./FormField.vue-CsyFfyrv.js";import"./ChevronRightIcon-DUJGUktX.js";import"./CommandLineIcon-C_kbsQBp.js";import"./index-CaoDn_b_.js";import"./ArrowRightStartOnRectangleIcon-B1SaEZKF.js";import"./ArrowTopRightOnSquareIcon-P9gMEZmv.js";import"./RocketLaunchIcon-CoLGueqR.js";import"./HomeIcon-TceTBPbm.js";import"./UserIcon-CrDAGwP1.js";import"./UsersIcon-BlDUqua-.js";import"./UserGroupIcon-DHcrWHdF.js";import"./ClipboardDocumentListIcon--U-psXCG.js";import"./ClipboardDocumentCheckIcon-D4o5FMXS.js";import"./CpuChipIcon-CERMgrl8.js";import"./ShieldCheckIcon-CQlKNWxZ.js";import"./Cog6ToothIcon-CLTd3td9.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
