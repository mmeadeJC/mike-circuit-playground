import{r as c}from"./iframe-DSI7I_YQ.js";import{_ as a}from"./SearchScopeSelectButton-DoGhkWB0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BF3dm58r.js";import"./index-Cm1NVGCj.js";import"./index-DKupdcS7.js";import"./index-Ck3k_J8K.js";import"./index-ZhWAdK_X.js";const j={title:"Projects/sena-playground/AI Search Dialog/Parts/Search Scope Select",component:a,parameters:{layout:"padded"}},s={name:"Default",render:e=>({components:{SearchScopeSelectButton:a},setup(){const t=c("all");return{args:e,scope:t}},template:`
      <div class="flex justify-start p-md">
        <SearchScopeSelectButton v-bind="args" v-model="scope" />
      </div>
    `}),args:{showCounts:!1}},o={name:"With mock counts",render:e=>({components:{SearchScopeSelectButton:a},setup(){const t=c("all");return{args:e,scope:t}},template:`
      <div class="flex justify-start p-md">
        <SearchScopeSelectButton v-bind="args" v-model="scope" />
      </div>
    `}),args:{showCounts:!0}},r={name:"Empty state counts (all zero)",render:e=>({components:{SearchScopeSelectButton:a},setup(){const t=c("all");return{args:e,scope:t}},template:`
      <div class="flex justify-start p-md">
        <SearchScopeSelectButton v-bind="args" v-model="scope" />
      </div>
    `}),args:{showCounts:!0,showZeroCounts:!0}};var n,p,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Default',
  render: args => ({
    components: {
      SearchScopeSelectButton
    },
    setup() {
      const scope = ref<SearchScopeValue>('all');
      return {
        args,
        scope
      };
    },
    template: \`
      <div class="flex justify-start p-md">
        <SearchScopeSelectButton v-bind="args" v-model="scope" />
      </div>
    \`
  }),
  args: {
    showCounts: false
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'With mock counts',
  render: args => ({
    components: {
      SearchScopeSelectButton
    },
    setup() {
      const scope = ref<SearchScopeValue>('all');
      return {
        args,
        scope
      };
    },
    template: \`
      <div class="flex justify-start p-md">
        <SearchScopeSelectButton v-bind="args" v-model="scope" />
      </div>
    \`
  }),
  args: {
    showCounts: true
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var S,i,h;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Empty state counts (all zero)',
  render: args => ({
    components: {
      SearchScopeSelectButton
    },
    setup() {
      const scope = ref<SearchScopeValue>('all');
      return {
        args,
        scope
      };
    },
    template: \`
      <div class="flex justify-start p-md">
        <SearchScopeSelectButton v-bind="args" v-model="scope" />
      </div>
    \`
  }),
  args: {
    showCounts: true,
    showZeroCounts: true
  }
}`,...(h=(i=r.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};const b=["Default","WithCounts","WithZeroCounts"];export{s as Default,o as WithCounts,r as WithZeroCounts,b as __namedExportsOrder,j as default};
