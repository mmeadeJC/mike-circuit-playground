import"./iframe-CrzTiCu6.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as n}from"./MessageNotification.vue-D2EvCuUd.js";import{_ as s}from"./DetailPageLayout.vue-U7uVS8up.js";import{b as o,c as r}from"./policyMigrationComponentConstants-Jlo0urnD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DB_TaPch.js";import"./index-DHkFNkeW.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-CyFmKK29.js";import"./index-ZhWAdK_X.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-BtHZjdl_.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./FlagIcon-DgAIV7Qg.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./BasePageLayout.vue-DIEW9flY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ShieldCheckIcon-CwbvLCk-.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Layouts/Detail Page Layout",component:s,parameters:{layout:"padded"}},e={render:()=>({components:{DetailPageLayout:s,MessageNotification:n},setup(){return{sampleSidebarMessageTitle:r,sampleSidebarMessageDetail:o}},template:`
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
