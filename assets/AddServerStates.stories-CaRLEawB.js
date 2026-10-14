import{d as i,r as n,a0 as p}from"./iframe-8Q3g4suX.js";import{_ as a}from"./ServerDialogPhase01-C4DpVdK-.js";import{v as l}from"./mockData-B40J5FIn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DswaKqI5.js";import"./index-DRA9vNfv.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-7zypbFVM.js";import"./index-Bpd14J7o.js";import"./index-BB_hCnE-.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-DGY9u_rI.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-Us1_uPk3.js";import"./index-BL2_KjjI.js";import"./index-cFQtYIhg.js";import"./index-XuKMVLs3.js";import"./RichText.vue-C1Ty82RV.js";import"./FormField.vue-DPg-U9jM.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./CommandLineIcon-4Js_OSQE.js";import"./index-DPUoOQbX.js";import"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import"./RocketLaunchIcon-BJK4NMZ4.js";import"./HomeIcon-yFRUSV7Z.js";import"./UserIcon-ShjzaHpT.js";import"./UsersIcon-Z2ifx08k.js";import"./UserGroupIcon-Ciz8NLc5.js";import"./ClipboardDocumentListIcon-CnTg33RY.js";import"./ClipboardDocumentCheckIcon--weNKert.js";import"./CpuChipIcon-DVt0p-5v.js";import"./ShieldCheckIcon-W0AJus9F.js";import"./Cog6ToothIcon-cxmEYFc7.js";const ue={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server/States",component:a,parameters:{layout:"fullscreen"}};function y(){return{prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""}}const r={name:"Initial state",render:()=>i({components:{ServerDialogPhase01:a},setup(){const e=n(!0),t=p(y());return{visible:e,serverForm:t,phase01AuthStyleOptions:l}},template:`
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
