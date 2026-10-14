import{d as i,r as n,a0 as p}from"./iframe-C6YxvgI9.js";import{_ as a}from"./ServerDialogPhase01-D5jKB7rV.js";import{v as l}from"./mockData-BEYIwFVK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CJZ03RY2.js";import"./index-BTBx138D.js";import"./index-BnKDY8uA.js";import"./index-AqntUfTj.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-DhNdrOGc.js";import"./index-ZhWAdK_X.js";import"./index-BxytmV1x.js";import"./index-DLF1yM0N.js";import"./index-eKE_C28L.js";import"./index-DqUJJtw3.js";import"./index-Dp_YoHvc.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-Ch3Q-vZV.js";import"./index-DT3_wyj-.js";import"./index-BimTu2-D.js";import"./index-ZSh15SJz.js";import"./index-B8A-AHQI.js";import"./index-1UUbJVrK.js";import"./index-CZUO3voq.js";import"./index-BhaHS2dW.js";import"./RichText.vue-h6zLaVtH.js";import"./FormField.vue-BTAWN9Np.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./InformationCircleIcon-BY7njxzn.js";import"./ChevronRightIcon-DYx_DqJa.js";import"./CommandLineIcon-COGtHxUL.js";import"./index-C24-u6em.js";import"./ArrowRightStartOnRectangleIcon-DKKidjNO.js";import"./ArrowTopRightOnSquareIcon-Cgq2sJub.js";import"./RocketLaunchIcon-6D8sm1LH.js";import"./HomeIcon-C13KMEnf.js";import"./UserIcon-4wtVhT1W.js";import"./UsersIcon-C5hMjpAO.js";import"./UserGroupIcon-BvSX4X8P.js";import"./ClipboardDocumentListIcon-lODL2qZu.js";import"./ClipboardDocumentCheckIcon-BTD2-XPO.js";import"./CpuChipIcon-C8YSMOmc.js";import"./ShieldCheckIcon-cVyPPREN.js";import"./Cog6ToothIcon-DmdqmVoL.js";const ue={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server/States",component:a,parameters:{layout:"fullscreen"}};function y(){return{prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""}}const r={name:"Initial state",render:()=>i({components:{ServerDialogPhase01:a},setup(){const e=n(!0),t=p(y());return{visible:e,serverForm:t,phase01AuthStyleOptions:l}},template:`
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
