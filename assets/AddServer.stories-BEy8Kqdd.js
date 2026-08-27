import{d,_ as u,r as v,a0 as f}from"./iframe-e359xqcE.js";import"./RichText.vue-DSFy4cWp.js";import{_ as h}from"./ToastNotification.vue-QpJP4Bv3.js";import{_ as m}from"./ServerDialogPhase01-D85Z1xCj.js";import{v as S}from"./mockData-DdkQ6TJx.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwxvxIOP.js";import"./index-WY88b_Bj.js";import"./index-DgftoVju.js";import"./index-B2MD1nhU.js";import"./index-5GyuQi88.js";import"./index-SNTWOJlm.js";import"./index-YE3wsXmc.js";import"./index-DGdP0FUD.js";import"./index-ZhWAdK_X.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-BxhYpKxH.js";import"./useContainer-DGxftqyG.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./FlagIcon-ebJhzkK-.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./index-CWO9Utw3.js";import"./index-BOWouLqF.js";import"./index-B2ZM6yJv.js";import"./index-C8Trrx-R.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-CTBTSs98.js";import"./index-DG2lsddg.js";import"./index-T5BskalJ.js";import"./index-D72zYeEF.js";import"./index-CgskNI-h.js";import"./index-BLqIZ8v0.js";import"./index-C4r0EfiV.js";import"./FormField.vue-X6cJp_-2.js";import"./ChevronRightIcon-atQJRe2P.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./index-Bn8GZArD.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";import"./ShieldCheckIcon-C8LDGAuf.js";import"./Cog6ToothIcon-B_W-iGDU.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
