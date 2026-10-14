import{d,_ as u,r as v,a0 as f}from"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as h}from"./ToastNotification.vue-Dge3NKiz.js";import{_ as m}from"./ServerDialogPhase01-C4DpVdK-.js";import{v as S}from"./mockData-B40J5FIn.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dn8u2qjp.js";import"./index-Bpd14J7o.js";import"./index-OJfjCxM5.js";import"./index-MzEPBPaO.js";import"./index-DpCZYySO.js";import"./index-DRA9vNfv.js";import"./index-BdbLeFxC.js";import"./index-Ck7ewAP5.js";import"./index-ZhWAdK_X.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./useContainer-Bc2j6_Ia.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./FlagIcon-CTBX6-CL.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./index-DswaKqI5.js";import"./index-7zypbFVM.js";import"./index-BB_hCnE-.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-DGY9u_rI.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-Us1_uPk3.js";import"./index-BL2_KjjI.js";import"./index-cFQtYIhg.js";import"./index-XuKMVLs3.js";import"./FormField.vue-DPg-U9jM.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./CommandLineIcon-4Js_OSQE.js";import"./index-DPUoOQbX.js";import"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import"./RocketLaunchIcon-BJK4NMZ4.js";import"./HomeIcon-yFRUSV7Z.js";import"./UserIcon-ShjzaHpT.js";import"./UsersIcon-Z2ifx08k.js";import"./UserGroupIcon-Ciz8NLc5.js";import"./ClipboardDocumentListIcon-CnTg33RY.js";import"./ClipboardDocumentCheckIcon--weNKert.js";import"./CpuChipIcon-DVt0p-5v.js";import"./ShieldCheckIcon-W0AJus9F.js";import"./Cog6ToothIcon-cxmEYFc7.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
