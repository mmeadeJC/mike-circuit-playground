import{d,_ as u,r as v,a0 as f}from"./iframe-DSI7I_YQ.js";import"./RichText.vue-DARNTLdh.js";import{_ as h}from"./ToastNotification.vue-TFXX3DYm.js";import{_ as m}from"./ServerDialogPhase01-DgSF3K63.js";import{v as S}from"./mockData-BgyvNFPM.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DG2ZpNkF.js";import"./index-CZjsJVeR.js";import"./index-Ck3k_J8K.js";import"./index-16iY2v2i.js";import"./index-Cg08wAe5.js";import"./index-BuxjV2Ka.js";import"./index-BfO8N2P2.js";import"./index-Cm1NVGCj.js";import"./index-ZhWAdK_X.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-CwTDpyKH.js";import"./useContainer-fllqqkML.js";import"./InformationCircleIcon-Cz23V1it.js";import"./FlagIcon-Bax3lVf6.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./index-BuLOyT5f.js";import"./index-Ck6lw9mO.js";import"./index-BxkuIoyf.js";import"./index-CbI5Nc1U.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-B2CuMtSM.js";import"./index-CD_7J42F.js";import"./index-EU9vbBWi.js";import"./index-DsdYTbg9.js";import"./index-CxxjhJ-R.js";import"./index-Cz6kxq3w.js";import"./index-BF3dm58r.js";import"./FormField.vue-DvIDnTXZ.js";import"./ChevronRightIcon-vzjO-UCf.js";import"./CommandLineIcon-Bs9Wraq9.js";import"./index-D6mY1Y8s.js";import"./ArrowRightStartOnRectangleIcon-CiAc9VBg.js";import"./ArrowTopRightOnSquareIcon-C_EktnJD.js";import"./RocketLaunchIcon-Dsyb3UQf.js";import"./HomeIcon-CQmrqHE7.js";import"./UserIcon-CSW82trP.js";import"./UsersIcon-OEvGzjDd.js";import"./UserGroupIcon-DeF3nAvb.js";import"./ClipboardDocumentListIcon-BaP2rSiE.js";import"./ClipboardDocumentCheckIcon-ByZb5sDi.js";import"./CpuChipIcon-DEbsRDHr.js";import"./ShieldCheckIcon-nGYAINf2.js";import"./Cog6ToothIcon-CsHyeCNP.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
