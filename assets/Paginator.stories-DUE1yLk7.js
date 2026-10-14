import{r as e}from"./iframe-BF79XtSp.js";import"./RichText.vue-CqGWfsH6.js";import{_ as s}from"./Paginator.vue-Dy2cGaqu.js";import{a as i}from"./policyMigrationComponentConstants-BIkg6p9Q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Du18TKou.js";import"./index-dcWUga6b.js";import"./index-BVIEBy36.js";import"./index-DMx2X42p.js";import"./index-CR4bzIFl.js";import"./index-DIEiO-G_.js";import"./index-BCK9IpMv.js";import"./index-DTZ-8UWl.js";import"./index-Dtk_BLuX.js";import"./index-lST1gP85.js";import"./index-BkZv6EbR.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-ZhWAdK_X.js";import"./index-bqWkeg_n.js";import"./index-PuebpjLD.js";import"./index-C4C8uF8-.js";import"./index-dbOlY_KS.js";import"./ChevronRightIcon-Ds2oc56S.js";import"./ShieldCheckIcon-xpQZCNU8.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Data Display/Paginator",component:s,parameters:{layout:"padded"}},t={render:()=>({components:{Paginator:s},setup(){const p=e(0),m=e(10);return{first:p,rows:m,totalRecords:i.length}},template:`
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
