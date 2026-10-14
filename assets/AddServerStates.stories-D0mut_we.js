import{d as i,r as n,a0 as p}from"./iframe-600w3n4H.js";import{_ as a}from"./ServerDialogPhase01-I8RgFH9b.js";import{v as l}from"./mockData-fbvw1-A_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-eDcuTK2L.js";import"./index-CTl3vUKN.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-CC9FbOuz.js";import"./index-DtheA9qo.js";import"./index-Cy7FONXb.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-BuAmHxBs.js";import"./index-CtvYIbWm.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-DosJGK4C.js";import"./index-DBXXhGgD.js";import"./index-DA9jvc7b.js";import"./index-BZWznq43.js";import"./RichText.vue-CqDMFobT.js";import"./FormField.vue-9Bh63gOi.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./ChevronRightIcon-BF9RliU4.js";import"./CommandLineIcon-BHverfhZ.js";import"./index-BPN10FIB.js";import"./ArrowRightStartOnRectangleIcon-Docb568Z.js";import"./ArrowTopRightOnSquareIcon-D1DflJJw.js";import"./RocketLaunchIcon-C0UcLMmT.js";import"./HomeIcon-DzFCrQek.js";import"./UserIcon-BnMpn0XC.js";import"./UsersIcon-BAek990o.js";import"./UserGroupIcon-BAYPParn.js";import"./ClipboardDocumentListIcon-DJ3dp-pS.js";import"./ClipboardDocumentCheckIcon-fhZeORzP.js";import"./CpuChipIcon-DHk9P2K6.js";import"./ShieldCheckIcon-BytxG3nK.js";import"./Cog6ToothIcon-DHjR5ucD.js";const ue={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server/States",component:a,parameters:{layout:"fullscreen"}};function y(){return{prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""}}const r={name:"Initial state",render:()=>i({components:{ServerDialogPhase01:a},setup(){const e=n(!0),t=p(y());return{visible:e,serverForm:t,phase01AuthStyleOptions:l}},template:`
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
