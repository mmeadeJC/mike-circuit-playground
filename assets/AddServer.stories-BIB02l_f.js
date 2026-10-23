import{d,_ as u,r as v,a0 as f}from"./iframe-CrzTiCu6.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as h}from"./ToastNotification.vue-Cpl2XT5u.js";import{_ as m}from"./ServerDialogPhase01-qrFoIxJS.js";import{v as S}from"./mockData-C1zsvOf2.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ih_wqrWF.js";import"./index-Bli4s4Lb.js";import"./index-DpHaaPKG.js";import"./index-B9HYPvme.js";import"./index-n-Vy3yQf.js";import"./index-DHkFNkeW.js";import"./index-DQmrvgOu.js";import"./index-CyFmKK29.js";import"./index-ZhWAdK_X.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-BtHZjdl_.js";import"./useContainer-V_XjkKmd.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./FlagIcon-DgAIV7Qg.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./index-CXMkhyA-.js";import"./index-BaGPKY7N.js";import"./index-DUgv6TgD.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-Cp7GERer.js";import"./index-BAK6AhQo.js";import"./index-DRWkJ3r7.js";import"./index-B-mFHERX.js";import"./index-ukZ37hHN.js";import"./index-3NCE7FTh.js";import"./index-C5-zlbJW.js";import"./FormField.vue-CTr1UxJM.js";import"./ChevronRightIcon-BtziqKKH.js";import"./CommandLineIcon-vFXJRXVY.js";import"./index-CjqWYhin.js";import"./ArrowRightStartOnRectangleIcon-CBJnXu54.js";import"./ArrowTopRightOnSquareIcon-DS4hPvi9.js";import"./RocketLaunchIcon-CAzmE-6h.js";import"./HomeIcon-BQPM_8Qu.js";import"./UserIcon-Bri6dvnd.js";import"./UsersIcon-DqHPfoZY.js";import"./UserGroupIcon-B6yu2ODb.js";import"./ClipboardDocumentListIcon-yzE7qRAt.js";import"./ClipboardDocumentCheckIcon-CDO3bo_W.js";import"./CpuChipIcon-Df3nujkA.js";import"./ShieldCheckIcon-CwbvLCk-.js";import"./Cog6ToothIcon-BNOeg4eV.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
