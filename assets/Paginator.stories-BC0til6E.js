import{r as e}from"./iframe-DnhA1Jsm.js";import"./RichText.vue-BuoexALv.js";import{_ as s}from"./Paginator.vue-2u0PKv_l.js";import{a as i}from"./policyMigrationComponentConstants-BSeo4Py0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DwERWXoD.js";import"./index-DtpEFz2i.js";import"./index-B5xbJtC5.js";import"./index-C6XQ6gRS.js";import"./index-DNm818yJ.js";import"./index-DSiULD1o.js";import"./index-Ch682guI.js";import"./index-lNUZEIRs.js";import"./index-l3Tk4em_.js";import"./index-BI9VwZ0A.js";import"./index-DKDggJZ4.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-ZhWAdK_X.js";import"./index-C3dwEfyt.js";import"./index-BFiFYGtt.js";import"./index-DYw0Q7A3.js";import"./index-D0WBUH3h.js";import"./ChevronRightIcon-CdbfjCjO.js";import"./ShieldCheckIcon-G-yjo0m6.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Data Display/Paginator",component:s,parameters:{layout:"padded"}},t={render:()=>({components:{Paginator:s},setup(){const p=e(0),m=e(10);return{first:p,rows:m,totalRecords:i.length}},template:`
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
