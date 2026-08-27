import{_ as n}from"./SuggestionRow-C2VDnBsr.js";import"./iframe--pVyazG9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C10Cm2bV.js";import"./queryHighlightSegments-uZpkqz5r.js";const f={title:"Projects/sena-playground/AI Search Dialog/Parts/Suggestion Row",component:n,parameters:{layout:"fullscreen"}};function d(e){return`
    <div class="flex min-h-[160px] justify-center bg-neutral-base px-md py-xl">
      <div class="w-full max-w-[600px]">
        ${e}
      </div>
    </div>
  `}const r={name:"Default",render:e=>({components:{SuggestionRow:n},setup(){return{args:e}},template:d('<SuggestionRow v-bind="args" />')}),args:{label:"Search for users named Alex"}},s={name:"Search highlight (typing)",render:e=>({components:{SuggestionRow:n},setup(){return{args:e}},template:d('<SuggestionRow v-bind="args" />')}),args:{label:"Show users who can access Slack",searchQuery:"Slack"}},a={name:"Hover (bg-state-hover)",parameters:{docs:{description:{story:"Move the pointer over the row. Background uses `hover:bg-state-hover` only."}}},render:e=>({components:{SuggestionRow:n},setup(){return{args:e}},template:`
      <div class="flex min-h-[160px] justify-center bg-neutral-base px-md py-xl">
        <div class="w-full max-w-[600px] rounded-md bg-neutral-surface p-sm">
          <SuggestionRow v-bind="args" />
        </div>
      </div>
    `}),args:{label:"Search for users named Alex"}};var t,o,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Default',
  render: args => ({
    components: {
      SuggestionRow
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<SuggestionRow v-bind="args" />\`)
  }),
  args: {
    label: 'Search for users named Alex'
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,g,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Search highlight (typing)',
  render: args => ({
    components: {
      SuggestionRow
    },
    setup() {
      return {
        args
      };
    },
    template: storyCanvas(\`<SuggestionRow v-bind="args" />\`)
  }),
  args: {
    label: 'Show users who can access Slack',
    searchQuery: 'Slack'
  }
}`,...(i=(g=s.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Hover (bg-state-hover)',
  parameters: {
    docs: {
      description: {
        story: 'Move the pointer over the row. Background uses \`hover:bg-state-hover\` only.'
      }
    }
  },
  render: args => ({
    components: {
      SuggestionRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex min-h-[160px] justify-center bg-neutral-base px-md py-xl">
        <div class="w-full max-w-[600px] rounded-md bg-neutral-surface p-sm">
          <SuggestionRow v-bind="args" />
        </div>
      </div>
    \`
  }),
  args: {
    label: 'Search for users named Alex'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const x=["Default","WithSearchHighlight","Hover"];export{r as Default,a as Hover,s as WithSearchHighlight,x as __namedExportsOrder,f as default};
