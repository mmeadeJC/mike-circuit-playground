import{v as a,r as p}from"./iframe-D7BbHDbG.js";import{s as o}from"./index-XbhyUeFS.js";import"./RichText.vue-1XZLRn0K.js";import{_ as l}from"./FormField.vue-BiV6ZEgt.js";import{e as c}from"./policyMigrationComponentConstants-BCnQhr6a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BaidBBYU.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-5dj8dpAI.js";import"./index-0gxlrFf7.js";import"./index-CiXhdmRB.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-ZhWAdK_X.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";import"./index-1reqc7Wl.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./ShieldCheckIcon-BY_KE66K.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select",component:o,parameters:{layout:"padded"}},e={name:"Certificate type",render:()=>({components:{FormField:l,PvSelect:o,MagnifyingGlassIcon:a},setup(){return{certificateType:p("ROOT"),certificateTypeOptions:c}},template:`
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
