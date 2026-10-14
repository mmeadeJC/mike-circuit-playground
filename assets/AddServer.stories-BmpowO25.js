import{d,_ as u,r as v,a0 as f}from"./iframe-BF79XtSp.js";import"./RichText.vue-CqGWfsH6.js";import{_ as h}from"./ToastNotification.vue-yI2C2t_m.js";import{_ as m}from"./ServerDialogPhase01-B44r5B2j.js";import{v as S}from"./mockData-DCPRTQhH.js";import{p as A}from"./serverCreateToasts-CcgQHUV3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-3ArnCpZB.js";import"./index-PuebpjLD.js";import"./index-Du18TKou.js";import"./index-CR4bzIFl.js";import"./index-dcWUga6b.js";import"./index-Dtk_BLuX.js";import"./index-DckzHriz.js";import"./index-BVIEBy36.js";import"./index-ZhWAdK_X.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-xyLKPl8B.js";import"./useContainer-CrNDtG4W.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./FlagIcon-Bi-xPCPe.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./index-LSIY3ybW.js";import"./index-ADEA_n6J.js";import"./index-K7HfYiQs.js";import"./index-BkZv6EbR.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-DMx2X42p.js";import"./index-DIEiO-G_.js";import"./index-BCK9IpMv.js";import"./index-lST1gP85.js";import"./index-bqWkeg_n.js";import"./index-D6ZVkPAC.js";import"./index-Br5QgYsP.js";import"./FormField.vue-C69YWs2P.js";import"./ChevronRightIcon-Ds2oc56S.js";import"./CommandLineIcon-D7zOx_l8.js";import"./index-vX2hHYrt.js";import"./ArrowRightStartOnRectangleIcon-m3mkNkcV.js";import"./ArrowTopRightOnSquareIcon-Bb4rBF4d.js";import"./RocketLaunchIcon-BqMZlamx.js";import"./HomeIcon-CRuA8H2X.js";import"./UserIcon-KpILDYI2.js";import"./UsersIcon-mPqKsBT7.js";import"./UserGroupIcon-odcgopw8.js";import"./ClipboardDocumentListIcon-C1vC7p4N.js";import"./ClipboardDocumentCheckIcon-Hd-7WFS2.js";import"./CpuChipIcon-C8H0NY6t.js";import"./ShieldCheckIcon-xpQZCNU8.js";import"./Cog6ToothIcon-xFudfeaO.js";const be={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server",component:m,parameters:{layout:"fullscreen"}},e={name:"Add Server",render:()=>d({components:{ServerDialogPhase01:m,ToastNotification:h},setup(){const t=v(!0),p=u(),n=f({prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});function l(){t.value=!1,A(c=>p.add(c))}return{visible:t,serverForm:n,phase01AuthStyleOptions:S,onCreate:l}},template:`
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
