import"./iframe-DuzLv9Pd.js";import"./RichText.vue-D4MvUk45.js";import{_ as n}from"./MessageNotification.vue-gttcx1zG.js";import{_ as s}from"./DetailPageLayout.vue-D4BojKqv.js";import{b as o,c as r}from"./policyMigrationComponentConstants-DKtyczDC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2kR38mcb.js";import"./index-CGiVUquh.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-Br2-aBVM.js";import"./index-ZhWAdK_X.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-DY4Fqf02.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./FlagIcon-CcLmoULS.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./BasePageLayout.vue-DVNcPgxb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ShieldCheckIcon-BpS1grCD.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Layouts/Detail Page Layout",component:s,parameters:{layout:"padded"}},e={render:()=>({components:{DetailPageLayout:s,MessageNotification:n},setup(){return{sampleSidebarMessageTitle:r,sampleSidebarMessageDetail:o}},template:`
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
