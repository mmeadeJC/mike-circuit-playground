import{r as e}from"./iframe-CrzTiCu6.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as s}from"./Paginator.vue-AbHFmpig.js";import{a as i}from"./policyMigrationComponentConstants-Jlo0urnD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DpHaaPKG.js";import"./index-n-Vy3yQf.js";import"./index-CyFmKK29.js";import"./index-Cp7GERer.js";import"./index-B9HYPvme.js";import"./index-BAK6AhQo.js";import"./index-DRWkJ3r7.js";import"./index-br2uRJO8.js";import"./index-DHkFNkeW.js";import"./index-B-mFHERX.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-ZhWAdK_X.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-BRT9CP7z.js";import"./index-B6P6vZ8T.js";import"./ChevronRightIcon-BtziqKKH.js";import"./ShieldCheckIcon-CwbvLCk-.js";const k={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Data Display/Paginator",component:s,parameters:{layout:"padded"}},t={render:()=>({components:{Paginator:s},setup(){const p=e(0),m=e(10);return{first:p,rows:m,totalRecords:i.length}},template:`
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
