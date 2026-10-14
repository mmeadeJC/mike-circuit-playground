import{r as e}from"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as s}from"./Paginator.vue-CcesqfBl.js";import{a as i}from"./policyMigrationComponentConstants-CIoCNzJF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-OJfjCxM5.js";import"./index-DpCZYySO.js";import"./index-Ck7ewAP5.js";import"./index-DGY9u_rI.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-BLMVtjtO.js";import"./index-DRA9vNfv.js";import"./index-Us1_uPk3.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-ZhWAdK_X.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-C6vF-uE7.js";import"./index--cVum_Py.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./ShieldCheckIcon-W0AJus9F.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Data Display/Paginator",component:s,parameters:{layout:"padded"}},t={render:()=>({components:{Paginator:s},setup(){const p=e(0),m=e(10);return{first:p,rows:m,totalRecords:i.length}},template:`
      <Paginator
        v-model:first="first"
        v-model:rows="rows"
        :totalRecords="totalRecords"
        pageReportTemplate="{first} - {last} of {totalRecords}"
        :rowsPerPageOptions="[
          { label: '10 Items per page', value: 10 },
          { label: '25 Items per page', value: 25 },
          { label: '50 Items per page', value: 50 },
        ]"
      />
    `})};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Paginator
    },
    setup() {
      const first = ref(0);
      const rows = ref(10);
      return {
        first,
        rows,
        totalRecords: sampleAppList.length
      };
    },
    template: \`
      <Paginator
        v-model:first="first"
        v-model:rows="rows"
        :totalRecords="totalRecords"
        pageReportTemplate="{first} - {last} of {totalRecords}"
        :rowsPerPageOptions="[
          { label: '10 Items per page', value: 10 },
          { label: '25 Items per page', value: 25 },
          { label: '50 Items per page', value: 50 },
        ]"
      />
    \`
  })
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,k as default};
