import"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as n}from"./MessageNotification.vue-Cpg8Rucu.js";import{_ as s}from"./DetailPageLayout.vue-DTAsiTuY.js";import{b as o,c as r}from"./policyMigrationComponentConstants-CIoCNzJF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CXQWPAyu.js";import"./index-DRA9vNfv.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-Ck7ewAP5.js";import"./index-ZhWAdK_X.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./FlagIcon-CTBX6-CL.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./BasePageLayout.vue-CwV5cDx0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ShieldCheckIcon-W0AJus9F.js";const j={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Layouts/Detail Page Layout",component:s,parameters:{layout:"padded"}},e={render:()=>({components:{DetailPageLayout:s,MessageNotification:n},setup(){return{sampleSidebarMessageTitle:r,sampleSidebarMessageDetail:o}},template:`
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
