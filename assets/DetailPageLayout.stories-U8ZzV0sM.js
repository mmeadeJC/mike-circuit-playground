import"./iframe-BFKWv3KJ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as n}from"./MessageNotification.vue-Mb9RLQam.js";import{_ as s}from"./DetailPageLayout.vue-Bsm2RhNI.js";import{b as o,c as r}from"./policyMigrationComponentConstants-BMFlZuaS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-1hqM6AZA.js";import"./index-2n8eVSrk.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-h_LiPJ46.js";import"./index-ZhWAdK_X.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./FlagIcon-DzsTOg3n.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./BasePageLayout.vue-DTEUtrED.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ShieldCheckIcon-CQlKNWxZ.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Layouts/Detail Page Layout",component:s,parameters:{layout:"padded"}},e={render:()=>({components:{DetailPageLayout:s,MessageNotification:n},setup(){return{sampleSidebarMessageTitle:r,sampleSidebarMessageDetail:o}},template:`
      <DetailPageLayout class="w-full! min-h-96">
        <div class="flex flex-col gap-md p-md">
          <h3 class="text-heading-3 text-neutral-base m-0">Main column</h3>
          <p class="text-body-md text-neutral-subtle m-0">
            Policy settings and form fields render in this column on detail pages.
          </p>
        </div>

        <template #sidebar>
          <MessageNotification
            severity="info"
            :title="sampleSidebarMessageTitle"
            :detail="sampleSidebarMessageDetail"
          />
        </template>
      </DetailPageLayout>
    `})};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DetailPageLayout,
      MessageNotification
    },
    setup() {
      return {
        sampleSidebarMessageTitle,
        sampleSidebarMessageDetail
      };
    },
    template: \`
      <DetailPageLayout class="w-full! min-h-96">
        <div class="flex flex-col gap-md p-md">
          <h3 class="text-heading-3 text-neutral-base m-0">Main column</h3>
          <p class="text-body-md text-neutral-subtle m-0">
            Policy settings and form fields render in this column on detail pages.
          </p>
        </div>

        <template #sidebar>
          <MessageNotification
            severity="info"
            :title="sampleSidebarMessageTitle"
            :detail="sampleSidebarMessageDetail"
          />
        </template>
      </DetailPageLayout>
    \`
  })
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,j as default};
