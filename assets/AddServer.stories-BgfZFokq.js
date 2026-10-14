import{d,_ as u,r as v,a0 as f}from"./iframe-600w3n4H.js";import"./RichText.vue-CqDMFobT.js";import{_ as h}from"./ToastNotification.vue-KOmmawu8.js";import{_ as m}from"./ServerDialogPhase01-I8RgFH9b.js";import{v as S}from"./mockData-fbvw1-A_.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-_E3Jg-.js";import"./index-DtheA9qo.js";import"./index-DtTXIm-l.js";import"./index-CtvYIbWm.js";import"./index-CY9iazAI.js";import"./index-CTl3vUKN.js";import"./index-DcxJnJl9.js";import"./index-DQaWMASi.js";import"./index-ZhWAdK_X.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-DknECv7p.js";import"./useContainer-KG6QsGJY.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./FlagIcon-Ba3Do2-9.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./index-eDcuTK2L.js";import"./index-CC9FbOuz.js";import"./index-Cy7FONXb.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-BuAmHxBs.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-DosJGK4C.js";import"./index-DBXXhGgD.js";import"./index-DA9jvc7b.js";import"./index-BZWznq43.js";import"./FormField.vue-9Bh63gOi.js";import"./ChevronRightIcon-BF9RliU4.js";import"./CommandLineIcon-BHverfhZ.js";import"./index-BPN10FIB.js";import"./ArrowRightStartOnRectangleIcon-Docb568Z.js";import"./ArrowTopRightOnSquareIcon-D1DflJJw.js";import"./RocketLaunchIcon-C0UcLMmT.js";import"./HomeIcon-DzFCrQek.js";import"./UserIcon-BnMpn0XC.js";import"./UsersIcon-BAek990o.js";import"./UserGroupIcon-BAYPParn.js";import"./ClipboardDocumentListIcon-DJ3dp-pS.js";import"./ClipboardDocumentCheckIcon-fhZeORzP.js";import"./CpuChipIcon-DHk9P2K6.js";import"./ShieldCheckIcon-BytxG3nK.js";import"./Cog6ToothIcon-DHjR5ucD.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
