import{d,_ as u,r as v,a0 as f}from"./iframe-D7BbHDbG.js";import"./RichText.vue-1XZLRn0K.js";import{_ as h}from"./ToastNotification.vue-t70NaZi-.js";import{_ as m}from"./ServerDialogPhase01-BoWkY7sv.js";import{v as S}from"./mockData-CmBXhQsJ.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CidY9ReQ.js";import"./index-BDr-K8Vc.js";import"./index-oNdbppoo.js";import"./index-BaidBBYU.js";import"./index-BKtZXsJ2.js";import"./index-0gxlrFf7.js";import"./index-BmNQnOBp.js";import"./index-1reqc7Wl.js";import"./index-ZhWAdK_X.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BCWryaxY.js";import"./useContainer-D49SELwj.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./FlagIcon-BljeC-Dg.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./index-DBWVCl5L.js";import"./index-DHnCHi6v.js";import"./index-CCeEX0h1.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-XbhyUeFS.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-CiXhdmRB.js";import"./index-DSpYqzCj.js";import"./index-D-Q9u-0k.js";import"./index-DlBYujXT.js";import"./FormField.vue-BiV6ZEgt.js";import"./ChevronRightIcon-BrFzWSch.js";import"./CommandLineIcon-CWVZZFIo.js";import"./index-CKmPII1G.js";import"./ArrowRightStartOnRectangleIcon-B91pfFJz.js";import"./ArrowTopRightOnSquareIcon-_aQH2B8X.js";import"./RocketLaunchIcon-BIuD1oEk.js";import"./HomeIcon-XZc1Dfyu.js";import"./UserIcon-DRjp4_6R.js";import"./UsersIcon-BbZ6Qpdm.js";import"./UserGroupIcon-Ctmauh4_.js";import"./ClipboardDocumentListIcon-DLWg2TFY.js";import"./ClipboardDocumentCheckIcon-B9tp8omi.js";import"./CpuChipIcon-BPQeLsIA.js";import"./ShieldCheckIcon-BY_KE66K.js";import"./Cog6ToothIcon-DbA3VXm8.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
