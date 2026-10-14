import{v as a,r as p}from"./iframe-8Q3g4suX.js";import{s as o}from"./index-DGY9u_rI.js";import"./RichText.vue-C1Ty82RV.js";import{_ as l}from"./FormField.vue-DPg-U9jM.js";import{e as c}from"./policyMigrationComponentConstants-CIoCNzJF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-BLMVtjtO.js";import"./index-DRA9vNfv.js";import"./index-Us1_uPk3.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-ZhWAdK_X.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-Ck7ewAP5.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./ShieldCheckIcon-W0AJus9F.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select",component:o,parameters:{layout:"padded"}},e={name:"Certificate type",render:()=>({components:{FormField:l,PvSelect:o,MagnifyingGlassIcon:a},setup(){return{certificateType:p("ROOT"),certificateTypeOptions:c}},template:`
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
