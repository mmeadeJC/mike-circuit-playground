import{r as e}from"./iframe-BFKWv3KJ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as s}from"./Paginator.vue-B6hVKag8.js";import{a as i}from"./policyMigrationComponentConstants-BMFlZuaS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUVhZ73h.js";import"./index-BMkyGRgX.js";import"./index-h_LiPJ46.js";import"./index-CuXoLfeA.js";import"./index-BXYT2gRT.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-CfbpxYVU.js";import"./index-2n8eVSrk.js";import"./index-D77ELRyA.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-ZhWAdK_X.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-DICFt-SZ.js";import"./index-BVkesBF5.js";import"./ChevronRightIcon-DUJGUktX.js";import"./ShieldCheckIcon-CQlKNWxZ.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Data Display/Paginator",component:s,parameters:{layout:"padded"}},t={render:()=>({components:{Paginator:s},setup(){const p=e(0),m=e(10);return{first:p,rows:m,totalRecords:i.length}},template:`
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
