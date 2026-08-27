import{d,_ as u,r as v,a0 as f}from"./iframe--pVyazG9.js";import"./RichText.vue-BtNuFzRg.js";import{_ as h}from"./ToastNotification.vue-BeL3-PYc.js";import{_ as m}from"./ServerDialogPhase01-B8DoiwSc.js";import{v as S}from"./mockData-XDQr9OOC.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DqIV57X_.js";import"./index-DDTNvhH8.js";import"./index-iMZkGNHR.js";import"./index-BlXOQGTr.js";import"./index-BiPL9L3R.js";import"./index-CtElKYVw.js";import"./index-uGbhYqvO.js";import"./index-DgH38Tqr.js";import"./index-ZhWAdK_X.js";import"./index-awHdwFoC.js";import"./index-6pJfhDGj.js";import"./index-Ck1qSbo1.js";import"./useContainer-BCUrt0t4.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./FlagIcon-n-8lc86R.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";import"./index-BFHwi_tq.js";import"./index-By2lxUOL.js";import"./index-BUzjRe-W.js";import"./index-mLzRhsCG.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-V_KBkFc6.js";import"./index-B-BOOr65.js";import"./index-DaGsjZDs.js";import"./index-BWGkmJ0o.js";import"./index-Cr53P9D2.js";import"./index-B2GG8oKH.js";import"./index-BHfnk6xR.js";import"./FormField.vue-DAGeh7uF.js";import"./ChevronRightIcon-Bvh2VZdW.js";import"./CommandLineIcon-DpVPf4B3.js";import"./index-C10Cm2bV.js";import"./ArrowRightStartOnRectangleIcon-hGdjTmS_.js";import"./ArrowTopRightOnSquareIcon-dGbNogk4.js";import"./RocketLaunchIcon-EZqtAKN2.js";import"./HomeIcon-BIUhWVpo.js";import"./UserIcon-BxZQM_YX.js";import"./UsersIcon-DQhrqsfm.js";import"./UserGroupIcon-DtFhSmsY.js";import"./ClipboardDocumentListIcon-wBneEAPl.js";import"./ClipboardDocumentCheckIcon-D6uiJ4ly.js";import"./CpuChipIcon-DjhQRX8j.js";import"./ShieldCheckIcon-DcBYyFbD.js";import"./Cog6ToothIcon-LI9RgjlE.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
