import{d as p,r as a,a0 as n}from"./iframe-DMCY07cZ.js";import{_ as o}from"./ServerDialogPhase01-BJHhpYRD.js";import{v as l}from"./mockData-C-t2Sxxt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-zhnW7dfa.js";import"./index-CIjxQS-N.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-C8jYejGu.js";import"./index-DA5-wtQK.js";import"./index-Csz9fdiB.js";import"./index-ZhWAdK_X.js";import"./index-Bx337-gk.js";import"./index-P6ICO6ZA.js";import"./index-0Q9rnkj1.js";import"./index-DykeBKWR.js";import"./index-I-4AEmq6.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-CNtARqCh.js";import"./index-D3MAoQAU.js";import"./index-CAIS5x6K.js";import"./index-BKI-cOV2.js";import"./index-4qDJp6e0.js";import"./index-8ifyCe0e.js";import"./index-DdjEjPWB.js";import"./index-B3Ml9Y1m.js";import"./RichText.vue-CvF5yRyM.js";import"./FormField.vue-C1zJRe6K.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";import"./ChevronRightIcon-0prVeiSQ.js";import"./CommandLineIcon-oW993rHf.js";import"./index-C0Jx-WGa.js";import"./ArrowRightStartOnRectangleIcon-Bka7PvIm.js";import"./ArrowTopRightOnSquareIcon-CIGo4dDp.js";import"./RocketLaunchIcon-DVslXB5O.js";import"./HomeIcon-C9EV1fIu.js";import"./UserIcon-BoI2bMct.js";import"./UsersIcon-DP4kMeWO.js";import"./UserGroupIcon-Bogo_ozG.js";import"./ClipboardDocumentListIcon-BMJdaMuG.js";import"./ClipboardDocumentCheckIcon-C2qlzy0s.js";import"./CpuChipIcon-xpUfEw0F.js";import"./ShieldCheckIcon-DN84MN1N.js";import"./Cog6ToothIcon-B22lkUCe.js";const me={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:o,parameters:{layout:"fullscreen"}},e={name:"Edit Server (GitHub)",render:()=>p({components:{ServerDialogPhase01:o},setup(){const m=a(!0),s=n({prefix:"GITHUB",name:"Github",url:"https://api.githubcopilot.com/mcp/",authStyle:"API Token",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});return{visible:m,serverForm:s,phase01AuthStyleOptions:l}},template:`
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
