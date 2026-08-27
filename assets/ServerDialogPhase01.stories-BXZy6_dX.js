import{d as p,r as a,a0 as n}from"./iframe-wHZiWscM.js";import{_ as o}from"./ServerDialogPhase01-tWro5_ba.js";import{v as l}from"./mockData-Kk33s5oK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-_1pOB8MI.js";import"./index-DG2sTEJu.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-sD1-d5gW.js";import"./index-DuolNdSU.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-DSxjRmh5.js";import"./index-Box4ManB.js";import"./index-0sOqJRIv.js";import"./index-BZ44v4AP.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-B52hguGd.js";import"./index-BsadxdHP.js";import"./index-CK8YOc-s.js";import"./index-OomjoOn0.js";import"./index-B9GWGLe7.js";import"./index-B0f83xA1.js";import"./index-cu68_uPv.js";import"./index-QsK0X07t.js";import"./RichText.vue-CHGMbC98.js";import"./FormField.vue-Di73I2_d.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./InformationCircleIcon-DZ4ah18T.js";import"./ChevronRightIcon-CCd9mxHV.js";import"./CommandLineIcon-8W_LRzjZ.js";import"./index-Andb7bwO.js";import"./ArrowRightStartOnRectangleIcon-CLdR-YKA.js";import"./ArrowTopRightOnSquareIcon-Di75X2M6.js";import"./RocketLaunchIcon-CNdx9WZl.js";import"./HomeIcon-5r_QbQOS.js";import"./UserIcon-BeF8Hyvt.js";import"./UsersIcon-DnG2W9uG.js";import"./UserGroupIcon-BLdtu9b8.js";import"./ClipboardDocumentListIcon-zSNh2cWZ.js";import"./ClipboardDocumentCheckIcon-B9O-4nOP.js";import"./CpuChipIcon-D7soRAGz.js";import"./ShieldCheckIcon-XJT-0kMA.js";import"./Cog6ToothIcon-CpmE-KkZ.js";const me={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:o,parameters:{layout:"fullscreen"}},e={name:"Edit Server (GitHub)",render:()=>p({components:{ServerDialogPhase01:o},setup(){const m=a(!0),s=n({prefix:"GITHUB",name:"Github",url:"https://api.githubcopilot.com/mcp/",authStyle:"API Token",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});return{visible:m,serverForm:s,phase01AuthStyleOptions:l}},template:`
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="edit"
            editing-server-slug="github"
            editing-server-name="Github"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @save="visible = false"
          />
        </div>
      `})};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Edit Server (GitHub)',
  render: () => defineComponent({
    components: {
      ServerDialogPhase01
    },
    setup() {
      const visible = ref(true);
      const serverForm = reactive<Phase01ServerFormState>({
        prefix: 'GITHUB',
        name: 'Github',
        url: 'https://api.githubcopilot.com/mcp/',
        authStyle: 'API Token',
        apiDocumentationUrl: '',
        oauthClientId: '',
        oauthScope: ''
      });
      return {
        visible,
        serverForm,
        phase01AuthStyleOptions
      };
    },
    template: \`
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="edit"
            editing-server-slug="github"
            editing-server-name="Github"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @save="visible = false"
          />
        </div>
      \`
  })
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const se=["EditServerGithub"];export{e as EditServerGithub,se as __namedExportsOrder,me as default};
