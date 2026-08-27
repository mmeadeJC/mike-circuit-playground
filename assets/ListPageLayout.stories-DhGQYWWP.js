import{d as i}from"./iframe--pVyazG9.js";import"./RichText.vue-BtNuFzRg.js";import{_ as r}from"./ListPageLayout.vue-RtUp_BKg.js";import"./preload-helper-Dp1pzeXC.js";import"./BasePageLayout.vue-Cg_buLnZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={title:"Circuit DS/Layouts/ListPageLayout",component:r,parameters:{layout:"fullscreen"}},c=i({name:"ScrollableTableContent",template:`
    <div class="flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <p class="text-body-md-semi-bold text-neutral-base">Items (256)</p>
        <div class="flex gap-2">
          <div class="h-8 w-20 rounded bg-neutral-surface_deep"></div>
          <div class="h-8 w-20 rounded bg-neutral-surface_deep"></div>
        </div>
      </div>
      <div class="border border-neutral-default_solid rounded-lg overflow-hidden">
        <div class="grid grid-cols-5 gap-4 p-3 border-b border-neutral-default_solid bg-neutral-surface_deep">
          <div class="h-3 rounded bg-neutral-surface w-16"></div>
          <div class="h-3 rounded bg-neutral-surface w-20"></div>
          <div class="h-3 rounded bg-neutral-surface w-14"></div>
          <div class="h-3 rounded bg-neutral-surface w-18"></div>
          <div class="h-3 rounded bg-neutral-surface w-12"></div>
        </div>
        <div v-for="i in 30" :key="i" class="grid grid-cols-5 gap-4 p-3 border-b border-neutral-default_solid last:border-b-0">
          <div class="h-3 rounded bg-neutral-surface_deep w-24"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-28"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-16"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-20"></div>
          <div class="h-3 rounded bg-neutral-surface_deep w-14"></div>
        </div>
      </div>
    </div>
  `}),u=i({name:"ScrollableFilterSidebar",template:`
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Filters</p>
      <div class="flex flex-col gap-5">
        <div v-for="i in 15" :key="i">
          <div class="h-3 rounded bg-neutral-surface_deep w-20 mb-2"></div>
          <div class="h-8 rounded border border-neutral-default_solid bg-neutral-surface"></div>
        </div>
      </div>
    </div>
  `}),e={render:()=>({components:{ListPageLayout:r,ScrollableTableContent:c,ScrollableFilterSidebar:u},template:`
      <ListPageLayout>
        <ScrollableTableContent />
        <template #sidebar>
          <ScrollableFilterSidebar />
        </template>
      </ListPageLayout>
    `})},a={render:()=>({components:{ListPageLayout:r,ScrollableTableContent:c},template:`
      <ListPageLayout>
        <ScrollableTableContent />
      </ListPageLayout>
    `})};var t,l,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ListPageLayout,
      ScrollableTableContent,
      ScrollableFilterSidebar
    },
    template: \`
      <ListPageLayout>
        <ScrollableTableContent />
        <template #sidebar>
          <ScrollableFilterSidebar />
        </template>
      </ListPageLayout>
    \`
  })
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var s,o,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ListPageLayout,
      ScrollableTableContent
    },
    template: \`
      <ListPageLayout>
        <ScrollableTableContent />
      </ListPageLayout>
    \`
  })
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const S=["WithSidebar","WithoutSidebar"];export{e as WithSidebar,a as WithoutSidebar,S as __namedExportsOrder,L as default};
