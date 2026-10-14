import{v as a,r as p}from"./iframe-600w3n4H.js";import{s as o}from"./index-BuAmHxBs.js";import"./RichText.vue-CqDMFobT.js";import{_ as l}from"./FormField.vue-9Bh63gOi.js";import{e as c}from"./policyMigrationComponentConstants-By4Q4wXb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-CtvYIbWm.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-BzHAkJ03.js";import"./index-CTl3vUKN.js";import"./index-DosJGK4C.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-ZhWAdK_X.js";import"./index-DBXXhGgD.js";import"./index-DtheA9qo.js";import"./index-DQaWMASi.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./ShieldCheckIcon-BytxG3nK.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select",component:o,parameters:{layout:"padded"}},e={name:"Certificate type",render:()=>({components:{FormField:l,PvSelect:o,MagnifyingGlassIcon:a},setup(){return{certificateType:p("ROOT"),certificateTypeOptions:c}},template:`
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
