import{d,_ as u,r as v,a0 as f}from"./iframe-DuzLv9Pd.js";import"./RichText.vue-D4MvUk45.js";import{_ as h}from"./ToastNotification.vue-OjPysTn3.js";import{_ as m}from"./ServerDialogPhase01-BWY_BAb_.js";import{v as S}from"./mockData-DdtCyTwi.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BDIUOGvX.js";import"./index-DL1Pt7bO.js";import"./index-BuiD5gzs.js";import"./index-D5zH4fN4.js";import"./index-CPNNQ3fD.js";import"./index-CGiVUquh.js";import"./index-BemneOh4.js";import"./index-Br2-aBVM.js";import"./index-ZhWAdK_X.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-DY4Fqf02.js";import"./useContainer-Do_p2hLC.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./FlagIcon-CcLmoULS.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./index-DlU_MYIi.js";import"./index-b0ySB-5C.js";import"./index-DOizLEho.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-CEiioRpE.js";import"./index-b5e0TYx1.js";import"./index-CWlqIe1B.js";import"./index-CjiEPaTZ.js";import"./index-Brczh--H.js";import"./index-D3QA_pcE.js";import"./index-SNXtFHNq.js";import"./FormField.vue-CblrQISo.js";import"./ChevronRightIcon-RLkhG38k.js";import"./CommandLineIcon-BD5MFUQg.js";import"./index-Di5n2FZb.js";import"./ArrowRightStartOnRectangleIcon-D4g3cMin.js";import"./ArrowTopRightOnSquareIcon-vQx7CBJY.js";import"./RocketLaunchIcon-Cvc1Zpa7.js";import"./HomeIcon-B8gBiWKx.js";import"./UserIcon-CtiZzZ2X.js";import"./UsersIcon-BT-W7sF-.js";import"./UserGroupIcon-CWdxV-oE.js";import"./ClipboardDocumentListIcon-CjFMn6dO.js";import"./ClipboardDocumentCheckIcon-k7_FGCzy.js";import"./CpuChipIcon-BBHeqCE_.js";import"./ShieldCheckIcon-BpS1grCD.js";import"./Cog6ToothIcon-bwwfqrlO.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
