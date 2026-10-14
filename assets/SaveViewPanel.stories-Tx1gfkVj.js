import"./iframe-BFKWv3KJ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as S}from"./SaveViewPanel.vue-Dp9X-muq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-CuXoLfeA.js";import"./index-BXYT2gRT.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-2n8eVSrk.js";import"./index-D77ELRyA.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-TlXkjPb8.js";import"./FilterChip.vue-pwVG6dB0.js";import"./index-D7_QFsMT.js";import"./index--0ujXtkk.js";import"./CheckboxWithLabel.vue-BFy88Znm.js";import"./index-D6YUBXg4.js";import"./index-DdAbza1U.js";import"./ColumnConfigDropdown.vue-pb1ZhEft.js";import"./index-BECXr3Nj.js";import"./index-CiP5ygH7.js";import"./index-EcMNudkA.js";import"./LinkText.vue-cWXQLUic.js";import"./ArrowRightIcon-7cEC43zy.js";import"./DropdownSearch.vue-D-PghnKV.js";import"./useContainer-BRiKvAwH.js";import"./EyeIcon-DOU3t9h_.js";import"./FunnelIcon-DOZoA26x.js";import"./FunnelIcon-Dd6Vil59.js";const ie={title:"Circuit DS/Data Table/SaveViewPanel",component:S,tags:["autodocs"],argTypes:{mode:{control:"select",options:["save","edit"]},size:{control:"select",options:["default","small"]},sortOrder:{control:"select",options:["asc","desc"]},loading:{control:"boolean"},isPrivate:{control:"boolean"}}},r=[{label:"Name",value:"name"},{label:"Email",value:"email"},{label:"Created Date",value:"created"},{label:"Last Login",value:"lastLogin"}],a=[{id:"name",label:"Name",visible:!0,fixed:!0},{id:"email",label:"Email",visible:!0},{id:"role",label:"Role",visible:!0},{id:"status",label:"Status",visible:!0},{id:"department",label:"Department",visible:!1}],C=[{key:"Status",value:"Active"},{key:"Role",value:"Admin"}],e={args:{mode:"save",sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},o={args:{mode:"edit",viewName:"Active Users",isPrivate:!1,sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},s={args:{mode:"save",loading:!0,sortOptions:r}},t={args:{mode:"save",size:"small",sortOptions:r,columns:a}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: 'save',
    sortOptions: sampleSortOptions,
    sortField: 'name',
    sortOrder: 'asc',
    columns: sampleColumns,
    maxFixedColumns: 3,
    visibleColumnsCount: 4,
    filters: sampleFilters
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var n,p,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    mode: 'edit',
    viewName: 'Active Users',
    isPrivate: false,
    sortOptions: sampleSortOptions,
    sortField: 'name',
    sortOrder: 'asc',
    columns: sampleColumns,
    maxFixedColumns: 3,
    visibleColumnsCount: 4,
    filters: sampleFilters
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,u,v;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    mode: 'save',
    loading: true,
    sortOptions: sampleSortOptions
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,g,O;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    mode: 'save',
    size: 'small',
    sortOptions: sampleSortOptions,
    columns: sampleColumns
  }
}`,...(O=(g=t.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};const me=["SaveMode","EditMode","Loading","Small"];export{o as EditMode,s as Loading,e as SaveMode,t as Small,me as __namedExportsOrder,ie as default};
