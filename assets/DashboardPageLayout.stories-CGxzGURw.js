import{d as i}from"./iframe-e359xqcE.js";import"./RichText.vue-DSFy4cWp.js";import{_ as r}from"./DashboardPageLayout.vue-gOc5-V9W.js";import"./preload-helper-Dp1pzeXC.js";import"./BasePageLayout.vue-CIy2WbCv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Circuit DS/Layouts/DashboardPageLayout",component:r,parameters:{layout:"fullscreen"},argTypes:{maxWidth:{control:"select",options:["1024","1280","1440"],description:"Max content width when no sidebar is present (default 1280)"}}},b=i({name:"ScrollableDashboardContent",template:`
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Dashboard — Main Content (scrollable)</p>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="i in 3" :key="i" class="rounded-lg border border-neutral-default_solid p-4 min-h-[120px]">
          <div class="h-3 rounded bg-neutral-surface_deep w-20 mb-3"></div>
          <div class="h-8 rounded bg-neutral-surface_deep w-24 mb-2"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-16"></div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="i in 10" :key="i" class="rounded-lg border border-neutral-default_solid p-4 min-h-[200px]">
          <div class="h-3 rounded bg-neutral-surface_deep w-32 mb-4"></div>
          <div class="h-36 rounded bg-neutral-surface_deep"></div>
        </div>
      </div>
    </div>
  `}),u=i({name:"ScrollableWidgetSidebar",template:`
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Widgets (scrollable)</p>
      <div class="flex flex-col gap-3">
        <div v-for="i in 20" :key="i" class="rounded border border-neutral-default_solid p-3">
          <div class="h-3 rounded bg-neutral-surface_deep w-20 mb-2"></div>
          <div class="h-6 rounded bg-neutral-surface_deep w-16"></div>
        </div>
      </div>
    </div>
  `}),e={render:()=>({components:{DashboardPageLayout:r,ScrollableDashboardContent:b,ScrollableWidgetSidebar:u},template:`
      <DashboardPageLayout>
        <ScrollableDashboardContent />
        <template #sidebar>
          <ScrollableWidgetSidebar />
        </template>
      </DashboardPageLayout>
    `})},a={args:{maxWidth:"1280"},render:c=>({components:{DashboardPageLayout:r,ScrollableDashboardContent:b},setup:()=>({args:c}),template:`
      <DashboardPageLayout v-bind="args">
        <ScrollableDashboardContent />
      </DashboardPageLayout>
    `})};var o,d,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DashboardPageLayout,
      ScrollableDashboardContent,
      ScrollableWidgetSidebar
    },
    template: \`
      <DashboardPageLayout>
        <ScrollableDashboardContent />
        <template #sidebar>
          <ScrollableWidgetSidebar />
        </template>
      </DashboardPageLayout>
    \`
  })
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var s,n,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    maxWidth: '1280'
  },
  render: args => ({
    components: {
      DashboardPageLayout,
      ScrollableDashboardContent
    },
    setup: () => ({
      args
    }),
    template: \`
      <DashboardPageLayout v-bind="args">
        <ScrollableDashboardContent />
      </DashboardPageLayout>
    \`
  })
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const D=["WithSidebar","WithoutSidebar"];export{e as WithSidebar,a as WithoutSidebar,D as __namedExportsOrder,S as default};
