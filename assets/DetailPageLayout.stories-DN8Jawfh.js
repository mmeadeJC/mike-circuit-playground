import"./iframe-600w3n4H.js";import"./RichText.vue-CqDMFobT.js";import{_ as n}from"./MessageNotification.vue-mnj1Yhnk.js";import{_ as s}from"./DetailPageLayout.vue-D7FaBP8C.js";import{b as o,c as r}from"./policyMigrationComponentConstants-By4Q4wXb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXs8LW6R.js";import"./index-CTl3vUKN.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DQaWMASi.js";import"./index-ZhWAdK_X.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-DknECv7p.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./FlagIcon-Ba3Do2-9.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./BasePageLayout.vue-DPmEk4Cz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ShieldCheckIcon-BytxG3nK.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Layouts/Detail Page Layout",component:s,parameters:{layout:"padded"}},e={render:()=>({components:{DetailPageLayout:s,MessageNotification:n},setup(){return{sampleSidebarMessageTitle:r,sampleSidebarMessageDetail:o}},template:`
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
