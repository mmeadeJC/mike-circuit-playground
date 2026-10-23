import{v as a,r as p}from"./iframe-CrzTiCu6.js";import{s as o}from"./index-Cp7GERer.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as l}from"./FormField.vue-CTr1UxJM.js";import{e as c}from"./policyMigrationComponentConstants-Jlo0urnD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-B9HYPvme.js";import"./index-BAK6AhQo.js";import"./index-DRWkJ3r7.js";import"./index-br2uRJO8.js";import"./index-DHkFNkeW.js";import"./index-B-mFHERX.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-ZhWAdK_X.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-CyFmKK29.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./ShieldCheckIcon-CwbvLCk-.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select",component:o,parameters:{layout:"padded"}},e={name:"Certificate type",render:()=>({components:{FormField:l,PvSelect:o,MagnifyingGlassIcon:a},setup(){return{certificateType:p("ROOT"),certificateTypeOptions:c}},template:`
      <div class="w-full max-w-3xl">
        <FormField label="Certificate type">
          <template #default="{ inputId }">
            <PvSelect
              :id="inputId"
              v-model="certificateType"
              :options="certificateTypeOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select certificate type"
              filter
              filterPlaceholder="Search..."
              class="w-full!"
            >
              <template #filtericon>
                <MagnifyingGlassIcon />
              </template>
            </PvSelect>
          </template>
        </FormField>
      </div>
    `})};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Certificate type',
  render: () => ({
    components: {
      FormField,
      PvSelect: Select,
      MagnifyingGlassIcon
    },
    setup() {
      const certificateType = ref('ROOT');
      return {
        certificateType,
        certificateTypeOptions
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <FormField label="Certificate type">
          <template #default="{ inputId }">
            <PvSelect
              :id="inputId"
              v-model="certificateType"
              :options="certificateTypeOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select certificate type"
              filter
              filterPlaceholder="Search..."
              class="w-full!"
            >
              <template #filtericon>
                <MagnifyingGlassIcon />
              </template>
            </PvSelect>
          </template>
        </FormField>
      </div>
    \`
  })
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const E=["CertificateType"];export{e as CertificateType,E as __namedExportsOrder,k as default};
