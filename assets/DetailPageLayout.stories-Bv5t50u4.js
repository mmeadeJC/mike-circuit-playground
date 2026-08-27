import{d as g}from"./iframe-D7BbHDbG.js";import"./RichText.vue-1XZLRn0K.js";import{_ as n}from"./DetailPageLayout.vue-fJW-VyeZ.js";import"./preload-helper-Dp1pzeXC.js";import"./BasePageLayout.vue-Dr0I8sc2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"Circuit DS/Layouts/DetailPageLayout",component:n,parameters:{layout:"fullscreen"},argTypes:{maxWidth:{control:"select",options:["1024","1280","1440"],description:"Max content width when no sidebar is present (default 1280)"}}},o=g({name:"ScrollableMainContent",template:`
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Detail — Main Content (scrollable)</p>
      <div class="flex flex-col gap-4">
        <div v-for="i in 20" :key="i" class="rounded-lg border border-neutral-default_solid p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="h-4 rounded bg-neutral-surface_deep w-32"></div>
            <div class="h-4 rounded bg-neutral-surface_deep w-16"></div>
          </div>
          <div class="space-y-2">
            <div class="h-3 rounded bg-neutral-surface_deep w-3/4"></div>
            <div class="h-3 rounded bg-neutral-surface_deep w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  `}),v=g({name:"ScrollableSidebarContent",template:`
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Sidebar (scrollable)</p>
      <div class="flex flex-col gap-3">
        <div v-for="i in 25" :key="i" class="rounded border border-neutral-default_solid p-3">
          <div class="h-3 rounded bg-neutral-surface_deep w-20 mb-2"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-full"></div>
        </div>
      </div>
    </div>
  `}),e={render:()=>({components:{DetailPageLayout:n,ScrollableMainContent:o,ScrollableSidebarContent:v},template:`
      <DetailPageLayout>
        <ScrollableMainContent />
        <template #sidebar>
          <ScrollableSidebarContent />
        </template>
      </DetailPageLayout>
    `})},a={args:{maxWidth:"1280"},render:r=>({components:{DetailPageLayout:n,ScrollableMainContent:o},setup:()=>({args:r}),template:`
      <DetailPageLayout v-bind="args">
        <ScrollableMainContent />
      </DetailPageLayout>
    `})},t={args:{maxWidth:"1024"},render:r=>({components:{DetailPageLayout:n,ScrollableMainContent:o},setup:()=>({args:r}),template:`
      <DetailPageLayout v-bind="args">
        <ScrollableMainContent />
      </DetailPageLayout>
    `})};var l,i,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DetailPageLayout,
      ScrollableMainContent,
      ScrollableSidebarContent
    },
    template: \`
      <DetailPageLayout>
        <ScrollableMainContent />
        <template #sidebar>
          <ScrollableSidebarContent />
        </template>
      </DetailPageLayout>
    \`
  })
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    maxWidth: '1280'
  },
  render: args => ({
    components: {
      DetailPageLayout,
      ScrollableMainContent
    },
    setup: () => ({
      args
    }),
    template: \`
      <DetailPageLayout v-bind="args">
        <ScrollableMainContent />
      </DetailPageLayout>
    \`
  })
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    maxWidth: '1024'
  },
  render: args => ({
    components: {
      DetailPageLayout,
      ScrollableMainContent
    },
    setup: () => ({
      args
    }),
    template: \`
      <DetailPageLayout v-bind="args">
        <ScrollableMainContent />
      </DetailPageLayout>
    \`
  })
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const C=["WithSidebar","WithoutSidebar","WithoutSidebarNarrow"];export{e as WithSidebar,a as WithoutSidebar,t as WithoutSidebarNarrow,C as __namedExportsOrder,h as default};
