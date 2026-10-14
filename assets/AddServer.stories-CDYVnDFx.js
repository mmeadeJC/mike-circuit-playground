import{d,_ as u,r as v,a0 as f}from"./iframe-C6YxvgI9.js";import"./RichText.vue-h6zLaVtH.js";import{_ as h}from"./ToastNotification.vue-BEx5buiT.js";import{_ as m}from"./ServerDialogPhase01-D5jKB7rV.js";import{v as S}from"./mockData-BEYIwFVK.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYFcnOai.js";import"./index-eKE_C28L.js";import"./index-AqntUfTj.js";import"./index-DT3_wyj-.js";import"./index-BnKDY8uA.js";import"./index-BTBx138D.js";import"./index-DJBHbLMX.js";import"./index-BxytmV1x.js";import"./index-ZhWAdK_X.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-DhNdrOGc.js";import"./useContainer-w-xfgTus.js";import"./InformationCircleIcon-BY7njxzn.js";import"./FlagIcon-FVNvSbUv.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./index-CJZ03RY2.js";import"./index-DLF1yM0N.js";import"./index-DqUJJtw3.js";import"./index-Dp_YoHvc.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-Ch3Q-vZV.js";import"./index-BimTu2-D.js";import"./index-ZSh15SJz.js";import"./index-B8A-AHQI.js";import"./index-1UUbJVrK.js";import"./index-CZUO3voq.js";import"./index-BhaHS2dW.js";import"./FormField.vue-BTAWN9Np.js";import"./ChevronRightIcon-DYx_DqJa.js";import"./CommandLineIcon-COGtHxUL.js";import"./index-C24-u6em.js";import"./ArrowRightStartOnRectangleIcon-DKKidjNO.js";import"./ArrowTopRightOnSquareIcon-Cgq2sJub.js";import"./RocketLaunchIcon-6D8sm1LH.js";import"./HomeIcon-C13KMEnf.js";import"./UserIcon-4wtVhT1W.js";import"./UsersIcon-C5hMjpAO.js";import"./UserGroupIcon-BvSX4X8P.js";import"./ClipboardDocumentListIcon-lODL2qZu.js";import"./ClipboardDocumentCheckIcon-BTD2-XPO.js";import"./CpuChipIcon-C8YSMOmc.js";import"./ShieldCheckIcon-cVyPPREN.js";import"./Cog6ToothIcon-DmdqmVoL.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
