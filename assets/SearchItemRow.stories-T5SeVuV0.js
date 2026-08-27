import{_ as r}from"./SearchItemRow-DHqyGcTp.js";import{r as x}from"./UserIcon-BxZQM_YX.js";import{r as A}from"./ArrowTopRightOnSquareIcon-dGbNogk4.js";import"./iframe--pVyazG9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C10Cm2bV.js";import"./queryHighlightSegments-uZpkqz5r.js";const z={title:"Projects/sena-playground/AI Search Dialog/Parts/Search Item Row",component:r,parameters:{layout:"fullscreen"}};function t(e){return`
    <div class="flex min-h-[200px] justify-center bg-neutral-base px-md py-xl">
      <div class="w-full max-w-[600px]">
        ${e}
      </div>
    </div>
  `}const c={title:"Show devices…",href:"#",subtitle:"AI Result",timestamp:"5 minutes ago"},a={name:"Recent variant (timestamp)",render:e=>({components:{SearchItemRow:r},setup(){return{args:e}},template:t('<SearchItemRow v-bind="args" variant="recent" />')}),args:{...c}},n={name:"Custom leading icon",render:e=>({components:{SearchItemRow:r,UserIcon:x},setup(){return{args:e}},template:t(`
      <SearchItemRow v-bind="args" variant="recent">
        <template #icon>
          <UserIcon class="size-4 shrink-0 text-neutral-subtle" aria-hidden="true" />
        </template>
      </SearchItemRow>
    `)}),args:{...c,title:"Show users matching…"}},s={name:"Result variant (external link)",render:e=>({components:{SearchItemRow:r,ArrowTopRightOnSquareIcon:A},setup(){return{args:e}},template:t(`
      <SearchItemRow v-bind="args" variant="result" search-query="device">
        <template #right>
          <div class="flex h-auto w-auto shrink-0 items-center justify-center">
            <ArrowTopRightOnSquareIcon class="size-4 text-icon-neutral-base" aria-hidden="true" />
          </div>
        </template>
      </SearchItemRow>
    `)}),args:{title:"Configure Slack app for your org",href:"#",subtitle:"App"}},o={name:"Search highlighting",render:e=>({components:{SearchItemRow:r},setup(){return{args:e}},template:t('<SearchItemRow v-bind="args" variant="recent" />')}),args:{title:"Slack notification settings and SSO for Engineering",href:"#",subtitle:"AI Result",timestamp:"2 min ago",searchQuery:"Slack"}},i={name:"Long title (truncation)",render:e=>({components:{SearchItemRow:r},setup(){return{args:e}},template:t('<SearchItemRow v-bind="args" variant="recent" />')}),args:{...c,title:"Show all devices assigned to the Engineering org unit that have not checked in for more than fourteen days"}};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Recent variant (timestamp)',
  render: args => ({
    components: {
      SearchItemRow
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<SearchItemRow v-bind="args" variant="recent" />\`)
  }),
  args: {
    ...storyArgs
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Custom leading icon',
  render: args => ({
    components: {
      SearchItemRow,
      UserIcon
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`
      <SearchItemRow v-bind="args" variant="recent">
        <template #icon>
          <UserIcon class="size-4 shrink-0 text-neutral-subtle" aria-hidden="true" />
        </template>
      </SearchItemRow>
    \`)
  }),
  args: {
    ...storyArgs,
    title: 'Show users matching…'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var d,S,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Result variant (external link)',
  render: args => ({
    components: {
      SearchItemRow,
      ArrowTopRightOnSquareIcon
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`
      <SearchItemRow v-bind="args" variant="result" search-query="device">
        <template #right>
          <div class="flex h-auto w-auto shrink-0 items-center justify-center">
            <ArrowTopRightOnSquareIcon class="size-4 text-icon-neutral-base" aria-hidden="true" />
          </div>
        </template>
      </SearchItemRow>
    \`)
  }),
  args: {
    title: 'Configure Slack app for your org',
    href: '#',
    subtitle: 'App'
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var R,I,w;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Search highlighting',
  render: args => ({
    components: {
      SearchItemRow
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<SearchItemRow v-bind="args" variant="recent" />\`)
  }),
  args: {
    title: 'Slack notification settings and SSO for Engineering',
    href: '#',
    subtitle: 'AI Result',
    timestamp: '2 min ago',
    searchQuery: 'Slack'
  }
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var f,y,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Long title (truncation)',
  render: args => ({
    components: {
      SearchItemRow
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<SearchItemRow v-bind="args" variant="recent" />\`)
  }),
  args: {
    ...storyArgs,
    title: 'Show all devices assigned to the Engineering org unit that have not checked in for more than fourteen days'
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const L=["RecentVariant","CustomLeadingIcon","ResultVariant","SearchHighlighting","AiSearchResult"];export{i as AiSearchResult,n as CustomLeadingIcon,a as RecentVariant,s as ResultVariant,o as SearchHighlighting,L as __namedExportsOrder,z as default};
