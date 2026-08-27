import{d as i,r as n,a0 as p}from"./iframe-e359xqcE.js";import{_ as a}from"./ServerDialogPhase01-D85Z1xCj.js";import{v as l}from"./mockData-DdkQ6TJx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CWO9Utw3.js";import"./index-SNTWOJlm.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-BOWouLqF.js";import"./index-WY88b_Bj.js";import"./index-B2ZM6yJv.js";import"./index-C8Trrx-R.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-CTBTSs98.js";import"./index-B2MD1nhU.js";import"./index-DG2lsddg.js";import"./index-T5BskalJ.js";import"./index-D72zYeEF.js";import"./index-CgskNI-h.js";import"./index-BLqIZ8v0.js";import"./index-C4r0EfiV.js";import"./RichText.vue-DSFy4cWp.js";import"./FormField.vue-X6cJp_-2.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./ChevronRightIcon-atQJRe2P.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./index-Bn8GZArD.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";import"./ShieldCheckIcon-C8LDGAuf.js";import"./Cog6ToothIcon-B_W-iGDU.js";const ue={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Add Server/States",component:a,parameters:{layout:"fullscreen"}};function y(){return{prefix:"",name:"",url:"",authStyle:"OAuth",apiDocumentationUrl:"",oauthClientId:"",oauthScope:""}}const r={name:"Initial state",render:()=>i({components:{ServerDialogPhase01:a},setup(){const e=n(!0),t=p(y());return{visible:e,serverForm:t,phase01AuthStyleOptions:l}},template:`
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
