import{d as b,h as H,u as _,o as q,r as w}from"./iframe-D7BbHDbG.js";import{_ as a}from"./AiSearchHeader-Dt7zWG1A.js";import{r as k}from"./Square2StackIcon-JLtoU4N0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-CKmPII1G.js";const i=b({__name:"PlaceholderIcon",setup(e){return(s,P)=>(q(),H(_(k),{"aria-hidden":"true"}))}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"PlaceholderIcon",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/Users/mmeade/Desktop/Cursor Repo/mike-circuit-playground/src/stories/projects/sena-playground/components/ai-search-dialog/parts/PlaceholderIcon.vue"});const V={title:"Projects/sena-playground/AI Search Dialog/Parts/AI Search Header",component:a,parameters:{layout:"padded"}},t={name:"Default",render:e=>({components:{AiSearchHeader:a},setup(){return{args:e}},template:`
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args" />
        </div>
      </div>
    `}),args:{placeholder:"Search Users, Devices, Apps..."}},n={name:"With query",render:e=>({components:{AiSearchHeader:a},setup(){const s=w("laptop");return{args:e,query:s}},template:`
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args" v-model="query" />
        </div>
      </div>
    `}),args:{placeholder:"Search Users, Devices, Apps..."}},r={name:"Leading slot (placeholder icon)",render:e=>({components:{AiSearchHeader:a,PlaceholderIcon:i},setup(){return{args:e}},template:`
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args">
            <template #leading>
              <PlaceholderIcon
                class="size-4 shrink-0 text-neutral-base"
                aria-hidden="true"
              />
            </template>
          </AiSearchHeader>
        </div>
      </div>
    `}),args:{placeholder:"Search Users, Devices, Apps...",enableEnterKey:!1}},o={name:"With AI Search button",render:e=>({components:{AiSearchHeader:a},setup(){const s=w("support");return{args:e,query:s}},template:`
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args" v-model="query" />
        </div>
      </div>
    `}),args:{placeholder:"Search Users, Devices, Apps...",showAiSearchButton:!0}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Default',
  render: args => ({
    components: {
      AiSearchHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args" />
        </div>
      </div>
    \`
  }),
  args: {
    placeholder: 'Search Users, Devices, Apps...'
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'With query',
  render: args => ({
    components: {
      AiSearchHeader
    },
    setup() {
      const query = ref('laptop');
      return {
        args,
        query
      };
    },
    template: \`
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args" v-model="query" />
        </div>
      </div>
    \`
  }),
  args: {
    placeholder: 'Search Users, Devices, Apps...'
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,y,g,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Leading slot (placeholder icon)',
  render: args => ({
    components: {
      AiSearchHeader,
      PlaceholderIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args">
            <template #leading>
              <PlaceholderIcon
                class="size-4 shrink-0 text-neutral-base"
                aria-hidden="true"
              />
            </template>
          </AiSearchHeader>
        </div>
      </div>
    \`
  }),
  args: {
    placeholder: 'Search Users, Devices, Apps...',
    enableEnterKey: false
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"Leading slot (e.g. placeholder until Circuit search icon exists).",...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.description}}};var x,S,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With AI Search button',
  render: args => ({
    components: {
      AiSearchHeader
    },
    setup() {
      const query = ref('support');
      return {
        args,
        query
      };
    },
    template: \`
      <div class="flex min-h-[200px] w-full justify-center p-md">
        <div class="w-full max-w-[600px]">
          <AiSearchHeader v-bind="args" v-model="query" />
        </div>
      </div>
    \`
  }),
  args: {
    placeholder: 'Search Users, Devices, Apps...',
    showAiSearchButton: true
  }
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const F=["Default","WithQuery","WithLeadingSlotPlaceholder","WithAiSearchButton"];export{t as Default,o as WithAiSearchButton,r as WithLeadingSlotPlaceholder,n as WithQuery,F as __namedExportsOrder,V as default};
