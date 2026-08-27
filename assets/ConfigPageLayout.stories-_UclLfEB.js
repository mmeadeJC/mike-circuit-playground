import{d}from"./iframe--pVyazG9.js";import"./RichText.vue-BtNuFzRg.js";import{_ as t}from"./ConfigPageLayout.vue-DZvKKvUm.js";import"./preload-helper-Dp1pzeXC.js";import"./BasePageLayout.vue-Cg_buLnZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Circuit DS/Layouts/ConfigPageLayout",component:t,parameters:{layout:"fullscreen"},argTypes:{maxWidth:{control:"select",options:["1024","1280","1440"],description:"Max content width when no sidebar is present (default 1280)"}}},c=d({name:"ScrollableFormContent",template:`
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">General Settings</p>
      <div class="flex flex-col gap-6">
        <div v-for="section in 4" :key="section">
          <p class="text-body-md-semi-bold text-neutral-base mb-3">Section {{ section }}</p>
          <div class="space-y-4">
            <div v-for="i in 5" :key="i">
              <div class="h-3 rounded bg-neutral-surface_deep w-24 mb-2"></div>
              <div class="h-10 rounded border border-neutral-default_solid bg-neutral-surface w-full max-w-[320px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}),p=d({name:"ScrollableNavSidebar",template:`
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Settings Nav</p>
      <div class="flex flex-col gap-1">
        <div v-for="i in 20" :key="i"
          class="h-8 rounded px-3 flex items-center"
          :class="i === 1 ? 'bg-neutral-surface_deep' : ''"
        >
          <div class="h-3 rounded w-24" :class="i === 1 ? 'bg-neutral-surface' : 'bg-neutral-surface_deep'"></div>
        </div>
      </div>
    </div>
  `}),e={render:()=>({components:{ConfigPageLayout:t,ScrollableFormContent:c,ScrollableNavSidebar:p},template:`
      <ConfigPageLayout>
        <ScrollableFormContent />
        <template #sidebar>
          <ScrollableNavSidebar />
        </template>
      </ConfigPageLayout>
    `})},a={args:{maxWidth:"1024"},render:m=>({components:{ConfigPageLayout:t,ScrollableFormContent:c},setup:()=>({args:m}),template:`
      <ConfigPageLayout v-bind="args">
        <ScrollableFormContent />
      </ConfigPageLayout>
    `})};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ConfigPageLayout,
      ScrollableFormContent,
      ScrollableNavSidebar
    },
    template: \`
      <ConfigPageLayout>
        <ScrollableFormContent />
        <template #sidebar>
          <ScrollableNavSidebar />
        </template>
      </ConfigPageLayout>
    \`
  })
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var l,s,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    maxWidth: '1024'
  },
  render: args => ({
    components: {
      ConfigPageLayout,
      ScrollableFormContent
    },
    setup: () => ({
      args
    }),
    template: \`
      <ConfigPageLayout v-bind="args">
        <ScrollableFormContent />
      </ConfigPageLayout>
    \`
  })
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const y=["WithSidebar","WithoutSidebar"];export{e as WithSidebar,a as WithoutSidebar,y as __namedExportsOrder,x as default};
