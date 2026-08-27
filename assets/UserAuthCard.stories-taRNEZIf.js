import{r as o,q as p,a0 as I}from"./iframe--pVyazG9.js";import{U as n,c as G}from"./mcpToolsDemo-CggysB-z.js";import"./preload-helper-Dp1pzeXC.js";import"./index-awHdwFoC.js";import"./index-6pJfhDGj.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-Ck1qSbo1.js";import"./index-ZhWAdK_X.js";import"./index-DgH38Tqr.js";import"./index-mLzRhsCG.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-BTlCJq6I.js";import"./index-BlXOQGTr.js";import"./index-BEGOK711.js";import"./index-CG-HcpwM.js";import"./RichText.vue-BtNuFzRg.js";import"./FormField.vue-DAGeh7uF.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./_plugin-vue_export-helper-BffYpcM-.js";const de={title:"AI Gateway - Burak/User Portal/Phase 01 Parts/User Auth Card",component:n,tags:["!autodocs"],parameters:{layout:"fullscreen",docs:{disable:!0}},decorators:[e=>({components:{story:e},template:'<div class="min-h-screen bg-neutral-surface p-md max-w-2xl"><story /></div>'})],argTypes:{authMethod:{control:"select",options:["apiKey","oauth"]},status:{control:"select",options:["notConnected","connected","error"]},enabled:{control:"boolean"}}},r={args:{title:"Figma",faviconDomain:"figma.com",status:"notConnected",authMethod:"apiKey",enabled:!0,apiKey:"",apiKeyPlaceholder:"Enter API key"},render:e=>({components:{UserAuthCard:n},setup(){const a=o(e.enabled),t=o(e.apiKey??"");return p(()=>e.enabled,s=>{a.value=s}),p(()=>e.apiKey,s=>{s!==void 0&&(t.value=s)}),{args:e,enabled:a,apiKey:t}},template:`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
        :api-key-placeholder="args.apiKeyPlaceholder"
        @save="() => {}"
        @connect="() => {}"
        @reconnect="() => {}"
      />
    `})},d={name:"Collapsed (unchecked)",args:{title:"Figma",faviconDomain:"figma.com",status:"notConnected",authMethod:"apiKey",enabled:!1},render:e=>({components:{UserAuthCard:n},setup(){const a=o(e.enabled),t=o("");return{args:e,enabled:a,apiKey:t}},template:`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `})},i={name:"API key (expanded)",args:{title:"Figma",faviconDomain:"figma.com",status:"notConnected",authMethod:"apiKey",enabled:!0},render:e=>({components:{UserAuthCard:n},setup(){const a=o(e.enabled),t=o("");return{args:e,enabled:a,apiKey:t}},template:`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `})},l={name:"OAuth (not connected)",args:{title:"Atlassian",faviconDomain:"atlassian.com",status:"notConnected",authMethod:"oauth",enabled:!0},render:e=>({components:{UserAuthCard:n},setup(){const a=o(e.enabled),t=o("");return{args:e,enabled:a,apiKey:t}},template:`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `})},c={name:"OAuth (connected)",args:{title:"Github",faviconDomain:"github.com",status:"connected",authMethod:"oauth",enabled:!0},render:e=>({components:{UserAuthCard:n},setup(){const a=o(e.enabled),t=o("");return{args:e,enabled:a,apiKey:t}},template:`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `})},m={name:"Error status",args:{title:"Slack",faviconDomain:"slack.com",status:"error",authMethod:"oauth",enabled:!0},render:e=>({components:{UserAuthCard:n},setup(){const a=o(e.enabled),t=o("");return{args:e,enabled:a,apiKey:t}},template:`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    `})},u={name:"MCP tools (stack, design reference)",render:()=>({components:{UserAuthCard:n},setup(){return{tools:I(G())}},template:`
      <div class="flex flex-col gap-md">
        <UserAuthCard
          v-for="t in tools"
          :key="t.title"
          v-model:enabled="t.enabled"
          v-model:api-key="t.apiKey"
          :title="t.title"
          :favicon-domain="t.faviconDomain"
          :status="t.status"
          :auth-method="t.authMethod"
        />
      </div>
    `})};var h,g,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Figma',
    faviconDomain: 'figma.com',
    status: 'notConnected',
    authMethod: 'apiKey',
    enabled: true,
    apiKey: '',
    apiKeyPlaceholder: 'Enter API key'
  },
  render: args => ({
    components: {
      UserAuthCard
    },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref(args.apiKey ?? '');
      watch(() => args.enabled, v => {
        enabled.value = v;
      });
      watch(() => args.apiKey, v => {
        if (v !== undefined) apiKey.value = v;
      });
      return {
        args,
        enabled,
        apiKey
      };
    },
    template: \`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
        :api-key-placeholder="args.apiKeyPlaceholder"
        @save="() => {}"
        @connect="() => {}"
        @reconnect="() => {}"
      />
    \`
  })
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,y,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Collapsed (unchecked)',
  args: {
    title: 'Figma',
    faviconDomain: 'figma.com',
    status: 'notConnected',
    authMethod: 'apiKey',
    enabled: false
  },
  render: args => ({
    components: {
      UserAuthCard
    },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return {
        args,
        enabled,
        apiKey
      };
    },
    template: \`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    \`
  })
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var K,A,C;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'API key (expanded)',
  args: {
    title: 'Figma',
    faviconDomain: 'figma.com',
    status: 'notConnected',
    authMethod: 'apiKey',
    enabled: true
  },
  render: args => ({
    components: {
      UserAuthCard
    },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return {
        args,
        enabled,
        apiKey
      };
    },
    template: \`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    \`
  })
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var k,M,D;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'OAuth (not connected)',
  args: {
    title: 'Atlassian',
    faviconDomain: 'atlassian.com',
    status: 'notConnected',
    authMethod: 'oauth',
    enabled: true
  },
  render: args => ({
    components: {
      UserAuthCard
    },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return {
        args,
        enabled,
        apiKey
      };
    },
    template: \`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    \`
  })
}`,...(D=(M=l.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var U,P,S;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'OAuth (connected)',
  args: {
    title: 'Github',
    faviconDomain: 'github.com',
    status: 'connected',
    authMethod: 'oauth',
    enabled: true
  },
  render: args => ({
    components: {
      UserAuthCard
    },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return {
        args,
        enabled,
        apiKey
      };
    },
    template: \`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    \`
  })
}`,...(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var x,E,O;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Error status',
  args: {
    title: 'Slack',
    faviconDomain: 'slack.com',
    status: 'error',
    authMethod: 'oauth',
    enabled: true
  },
  render: args => ({
    components: {
      UserAuthCard
    },
    setup() {
      const enabled = ref(args.enabled);
      const apiKey = ref('');
      return {
        args,
        enabled,
        apiKey
      };
    },
    template: \`
      <UserAuthCard
        v-model:enabled="enabled"
        v-model:api-key="apiKey"
        :title="args.title"
        :favicon-domain="args.faviconDomain"
        :status="args.status"
        :auth-method="args.authMethod"
      />
    \`
  })
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var w,F,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'MCP tools (stack, design reference)',
  render: () => ({
    components: {
      UserAuthCard
    },
    setup() {
      const tools = reactive<McpToolDemoRow[]>(createDefaultMcpToolsStack());
      return {
        tools
      };
    },
    template: \`
      <div class="flex flex-col gap-md">
        <UserAuthCard
          v-for="t in tools"
          :key="t.title"
          v-model:enabled="t.enabled"
          v-model:api-key="t.apiKey"
          :title="t.title"
          :favicon-domain="t.faviconDomain"
          :status="t.status"
          :auth-method="t.authMethod"
        />
      </div>
    \`
  })
}`,...(T=(F=u.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};const ie=["Playground","Collapsed","ApiKeyExpanded","OAuthExpanded","OAuthConnected","StatusError","McpToolsStack"];export{i as ApiKeyExpanded,d as Collapsed,u as McpToolsStack,c as OAuthConnected,l as OAuthExpanded,r as Playground,m as StatusError,ie as __namedExportsOrder,de as default};
