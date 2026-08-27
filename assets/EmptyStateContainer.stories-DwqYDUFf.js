import{_ as s}from"./EmptyStateContainer-CQ6-m1ln.js";import"./iframe-e359xqcE.js";import"./preload-helper-Dp1pzeXC.js";const y={title:"Projects/sena-playground/AI Search Dialog/Parts/Empty States/Empty State Container",component:s,parameters:{layout:"padded"},args:{message:"Custom empty state message."}},t={name:"Custom illustration slot",render:e=>({components:{EmptyStateContainer:s},setup(){return{args:e}},template:`
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <EmptyStateContainer :message="args.message">
          <template #illustration>
            <div
              class="flex h-16 w-[100px] items-center justify-center rounded-md border border-dashed border-neutral-strong_solid bg-neutral-base text-body-sm text-neutral-muted"
            >
              Slot
            </div>
          </template>
        </EmptyStateContainer>
      </div>
    `})},a={name:"Narrow container (320px)",args:{message:"Short message."},render:e=>({components:{EmptyStateContainer:s},setup(){return{args:e}},template:`
      <div class="w-[320px] bg-neutral-surface p-4">
        <EmptyStateContainer :message="args.message">
          <template #illustration>
            <div
              class="flex h-16 w-[100px] items-center justify-center rounded-md border border-dashed border-neutral-strong_solid bg-neutral-base text-body-sm text-neutral-muted"
            >
              Slot
            </div>
          </template>
        </EmptyStateContainer>
      </div>
    `})},r={name:"Long message wraps",args:{message:"This is a longer status message so we can confirm wrapping and alignment inside the dashed container look correct at typical dialog widths."},render:e=>({components:{EmptyStateContainer:s},setup(){return{args:e}},template:`
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <EmptyStateContainer :message="args.message">
          <template #illustration>
            <div
              class="flex h-16 w-[100px] items-center justify-center rounded-md border border-dashed border-neutral-strong_solid bg-neutral-base text-body-sm text-neutral-muted"
            >
              Slot
            </div>
          </template>
        </EmptyStateContainer>
      </div>
    `})};var n,o,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Custom illustration slot',
  render: args => ({
    components: {
      EmptyStateContainer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <EmptyStateContainer :message="args.message">
          <template #illustration>
            <div
              class="flex h-16 w-[100px] items-center justify-center rounded-md border border-dashed border-neutral-strong_solid bg-neutral-base text-body-sm text-neutral-muted"
            >
              Slot
            </div>
          </template>
        </EmptyStateContainer>
      </div>
    \`
  })
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var d,l,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Narrow container (320px)',
  args: {
    message: 'Short message.'
  },
  render: args => ({
    components: {
      EmptyStateContainer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-[320px] bg-neutral-surface p-4">
        <EmptyStateContainer :message="args.message">
          <template #illustration>
            <div
              class="flex h-16 w-[100px] items-center justify-center rounded-md border border-dashed border-neutral-strong_solid bg-neutral-base text-body-sm text-neutral-muted"
            >
              Slot
            </div>
          </template>
        </EmptyStateContainer>
      </div>
    \`
  })
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Long message wraps',
  args: {
    message: 'This is a longer status message so we can confirm wrapping and alignment inside the dashed container look correct at typical dialog widths.'
  },
  render: args => ({
    components: {
      EmptyStateContainer
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <EmptyStateContainer :message="args.message">
          <template #illustration>
            <div
              class="flex h-16 w-[100px] items-center justify-center rounded-md border border-dashed border-neutral-strong_solid bg-neutral-base text-body-sm text-neutral-muted"
            >
              Slot
            </div>
          </template>
        </EmptyStateContainer>
      </div>
    \`
  })
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const S=["Default","NarrowWidth","LongMessageWraps"];export{t as Default,r as LongMessageWraps,a as NarrowWidth,S as __namedExportsOrder,y as default};
