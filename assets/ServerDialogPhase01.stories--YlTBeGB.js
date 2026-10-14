import{d as p,r as a,a0 as n}from"./iframe-BF79XtSp.js";import{_ as o}from"./ServerDialogPhase01-B44r5B2j.js";import{v as l}from"./mockData-DCPRTQhH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LSIY3ybW.js";import"./index-Dtk_BLuX.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-xyLKPl8B.js";import"./index-ZhWAdK_X.js";import"./index-BVIEBy36.js";import"./index-ADEA_n6J.js";import"./index-PuebpjLD.js";import"./index-K7HfYiQs.js";import"./index-BkZv6EbR.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-DMx2X42p.js";import"./index-CR4bzIFl.js";import"./index-DIEiO-G_.js";import"./index-BCK9IpMv.js";import"./index-lST1gP85.js";import"./index-bqWkeg_n.js";import"./index-D6ZVkPAC.js";import"./index-Br5QgYsP.js";import"./RichText.vue-CqGWfsH6.js";import"./FormField.vue-C69YWs2P.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./ChevronRightIcon-Ds2oc56S.js";import"./CommandLineIcon-D7zOx_l8.js";import"./index-vX2hHYrt.js";import"./ArrowRightStartOnRectangleIcon-m3mkNkcV.js";import"./ArrowTopRightOnSquareIcon-Bb4rBF4d.js";import"./RocketLaunchIcon-BqMZlamx.js";import"./HomeIcon-CRuA8H2X.js";import"./UserIcon-KpILDYI2.js";import"./UsersIcon-mPqKsBT7.js";import"./UserGroupIcon-odcgopw8.js";import"./ClipboardDocumentListIcon-C1vC7p4N.js";import"./ClipboardDocumentCheckIcon-Hd-7WFS2.js";import"./CpuChipIcon-C8H0NY6t.js";import"./ShieldCheckIcon-xpQZCNU8.js";import"./Cog6ToothIcon-xFudfeaO.js";const me={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:o,parameters:{layout:"fullscreen"}},e={name:"Edit Server (GitHub)",render:()=>p({components:{ServerDialogPhase01:o},setup(){const m=a(!0),s=n({prefix:"GITHUB",name:"Github",url:"https://api.githubcopilot.com/mcp/",authStyle:"API Token",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});return{visible:m,serverForm:s,phase01AuthStyleOptions:l}},template:`
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
