import{d,_ as u,r as v,a0 as f}from"./iframe-wHZiWscM.js";import"./RichText.vue-CHGMbC98.js";import{_ as h}from"./ToastNotification.vue-C3kFK0h3.js";import{_ as m}from"./ServerDialogPhase01-tWro5_ba.js";import{v as S}from"./mockData-Kk33s5oK.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-wgSmeS_B.js";import"./index-Box4ManB.js";import"./index-_YupRtQ5.js";import"./index-BsadxdHP.js";import"./index-D_4jZi02.js";import"./index-DG2sTEJu.js";import"./index-BUW6mAnI.js";import"./index-DhULWF8q.js";import"./index-ZhWAdK_X.js";import"./index-sD1-d5gW.js";import"./index-DuolNdSU.js";import"./index-5yBlAq5O.js";import"./useContainer-Bxg-bmhf.js";import"./InformationCircleIcon-DZ4ah18T.js";import"./FlagIcon-DIzDNC3I.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./index-_1pOB8MI.js";import"./index-DSxjRmh5.js";import"./index-0sOqJRIv.js";import"./index-BZ44v4AP.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-B52hguGd.js";import"./index-CK8YOc-s.js";import"./index-OomjoOn0.js";import"./index-B9GWGLe7.js";import"./index-B0f83xA1.js";import"./index-cu68_uPv.js";import"./index-QsK0X07t.js";import"./FormField.vue-Di73I2_d.js";import"./ChevronRightIcon-CCd9mxHV.js";import"./CommandLineIcon-8W_LRzjZ.js";import"./index-Andb7bwO.js";import"./ArrowRightStartOnRectangleIcon-CLdR-YKA.js";import"./ArrowTopRightOnSquareIcon-Di75X2M6.js";import"./RocketLaunchIcon-CNdx9WZl.js";import"./HomeIcon-5r_QbQOS.js";import"./UserIcon-BeF8Hyvt.js";import"./UsersIcon-DnG2W9uG.js";import"./UserGroupIcon-BLdtu9b8.js";import"./ClipboardDocumentListIcon-zSNh2cWZ.js";import"./ClipboardDocumentCheckIcon-B9O-4nOP.js";import"./CpuChipIcon-D7soRAGz.js";import"./ShieldCheckIcon-XJT-0kMA.js";import"./Cog6ToothIcon-CpmE-KkZ.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
