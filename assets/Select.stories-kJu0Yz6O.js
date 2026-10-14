import{v as a,r as p}from"./iframe-BF79XtSp.js";import{s as o}from"./index-DMx2X42p.js";import"./RichText.vue-CqGWfsH6.js";import{_ as l}from"./FormField.vue-C69YWs2P.js";import{e as c}from"./policyMigrationComponentConstants-BIkg6p9Q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-CR4bzIFl.js";import"./index-DIEiO-G_.js";import"./index-BCK9IpMv.js";import"./index-DTZ-8UWl.js";import"./index-Dtk_BLuX.js";import"./index-lST1gP85.js";import"./index-BkZv6EbR.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-ZhWAdK_X.js";import"./index-bqWkeg_n.js";import"./index-PuebpjLD.js";import"./index-BVIEBy36.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./ShieldCheckIcon-xpQZCNU8.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select",component:o,parameters:{layout:"padded"}},e={name:"Certificate type",render:()=>({components:{FormField:l,PvSelect:o,MagnifyingGlassIcon:a},setup(){return{certificateType:p("ROOT"),certificateTypeOptions:c}},template:`
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
