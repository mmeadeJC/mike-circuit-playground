import{r as e}from"./iframe-CJNlUSJO.js";import"./RichText.vue-CLPxRa2P.js";import{_ as s}from"./Paginator.vue-BnmxpoRn.js";import{a as i}from"./policyMigrationComponentConstants-CxSeqGmW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BbdJTiks.js";import"./index-I2lZVOjH.js";import"./index-AIzoT1ks.js";import"./index-CK3JQGnr.js";import"./index-BBDD1QfU.js";import"./index-TgrN5p_g.js";import"./index-CtMg5eIS.js";import"./index-BP13dlUd.js";import"./index-Do-nvtb2.js";import"./index-DNoP2_Hj.js";import"./index-DqMC5tMH.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-ZhWAdK_X.js";import"./index-DMJeGYfZ.js";import"./index-B_P4GBGL.js";import"./index-Dzg4DU0m.js";import"./index-DrlABjM6.js";import"./ChevronRightIcon-9Bjzgkk8.js";import"./ShieldCheckIcon-BkfH9kvS.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Data Display/Paginator",component:s,parameters:{layout:"padded"}},t={render:()=>({components:{Paginator:s},setup(){const p=e(0),m=e(10);return{first:p,rows:m,totalRecords:i.length}},template:`
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
