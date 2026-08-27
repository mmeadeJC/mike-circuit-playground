import{d as i,r as n,a0 as p}from"./iframe-DSI7I_YQ.js";import{_ as a}from"./ServerDialogPhase01-DgSF3K63.js";import{v as l}from"./mockData-BgyvNFPM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BuLOyT5f.js";import"./index-BuxjV2Ka.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./index-Ck6lw9mO.js";import"./index-CZjsJVeR.js";import"./index-BxkuIoyf.js";import"./index-CbI5Nc1U.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-B2CuMtSM.js";import"./index-16iY2v2i.js";import"./index-CD_7J42F.js";import"./index-EU9vbBWi.js";import"./index-DsdYTbg9.js";import"./index-CxxjhJ-R.js";import"./index-Cz6kxq3w.js";import"./index-BF3dm58r.js";import"./RichText.vue-DARNTLdh.js";import"./FormField.vue-DvIDnTXZ.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./InformationCircleIcon-Cz23V1it.js";import"./ChevronRightIcon-vzjO-UCf.js";import"./CommandLineIcon-Bs9Wraq9.js";import"./index-D6mY1Y8s.js";import"./ArrowRightStartOnRectangleIcon-CiAc9VBg.js";import"./ArrowTopRightOnSquareIcon-C_EktnJD.js";import"./RocketLaunchIcon-Dsyb3UQf.js";import"./HomeIcon-CQmrqHE7.js";import"./UserIcon-CSW82trP.js";import"./UsersIcon-OEvGzjDd.js";import"./UserGroupIcon-DeF3nAvb.js";import"./ClipboardDocumentListIcon-BaP2rSiE.js";import"./ClipboardDocumentCheckIcon-ByZb5sDi.js";import"./CpuChipIcon-DEbsRDHr.js";import"./ShieldCheckIcon-nGYAINf2.js";import"./Cog6ToothIcon-CsHyeCNP.js";const ue={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server/States",component:a,parameters:{layout:"fullscreen"}};function y(){return{prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""}}const r={name:"Initial state",render:()=>i({components:{ServerDialogPhase01:a},setup(){const e=n(!0),t=p(y());return{visible:e,serverForm:t,phase01AuthStyleOptions:l}},template:`
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="add"
            add-flow-preset="initial"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      `})},s={name:"App selected state",render:()=>i({components:{ServerDialogPhase01:a},setup(){const e=n(!0),t=p(y());return{visible:e,serverForm:t,phase01AuthStyleOptions:l}},template:`
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="add"
            add-flow-preset="stripe"
            add-flow-seed-mcp-url="https://mcp.stripe.com/v1"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      `})},o={name:"Custom app selected state",render:()=>i({components:{ServerDialogPhase01:a},setup(){const e=n(!0),t=p({prefix:"ACME",name:"Internal tools MCP",url:"https://mcp.internal.example.com/mcp",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""});return{visible:e,serverForm:t,phase01AuthStyleOptions:l}},template:`
        <div class="h-screen bg-neutral-surface_alt">
          <ServerDialogPhase01
            v-model:visible="visible"
            mode="add"
            add-flow-preset="custom"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      `})};var m,c,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Initial state',
  render: () => defineComponent({
    components: {
      ServerDialogPhase01
    },
    setup() {
      const visible = ref(true);
      const serverForm = reactive<Phase01ServerFormState>(emptyForm());
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
            mode="add"
            add-flow-preset="initial"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      \`
  })
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var d,u,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'App selected state',
  render: () => defineComponent({
    components: {
      ServerDialogPhase01
    },
    setup() {
      const visible = ref(true);
      const serverForm = reactive<Phase01ServerFormState>(emptyForm());
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
            mode="add"
            add-flow-preset="stripe"
            add-flow-seed-mcp-url="https://mcp.stripe.com/v1"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      \`
  })
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,S,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Custom app selected state',
  render: () => defineComponent({
    components: {
      ServerDialogPhase01
    },
    setup() {
      const visible = ref(true);
      const serverForm = reactive<Phase01ServerFormState>({
        prefix: 'ACME',
        name: 'Internal tools MCP',
        url: 'https://mcp.internal.example.com/mcp',
        authStyle: 'OAuth',
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
            mode="add"
            add-flow-preset="custom"
            :server-form="serverForm"
            :auth-style-options="phase01AuthStyleOptions"
            @cancel="visible = false"
            @create="visible = false"
          />
        </div>
      \`
  })
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const he=["InitialState","AppSelectedState","CustomAppSelectedState"];export{s as AppSelectedState,o as CustomAppSelectedState,r as InitialState,he as __namedExportsOrder,ue as default};
