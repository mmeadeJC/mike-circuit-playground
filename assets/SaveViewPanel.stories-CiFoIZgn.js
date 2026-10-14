import"./iframe-600w3n4H.js";import"./RichText.vue-CqDMFobT.js";import{_ as S}from"./SaveViewPanel.vue-Czdz2F03.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-BuAmHxBs.js";import"./index-CtvYIbWm.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-CTl3vUKN.js";import"./index-DosJGK4C.js";import"./index-DBXXhGgD.js";import"./index-DtheA9qo.js";import"./index-DA9jvc7b.js";import"./FilterChip.vue-BtvpShAi.js";import"./index-v8PIUxlP.js";import"./index-DcxJnJl9.js";import"./CheckboxWithLabel.vue-BmE_SJFg.js";import"./index-DyPrYXuB.js";import"./index-B3TfiOtM.js";import"./ColumnConfigDropdown.vue-Bjs32508.js";import"./index-B_FT7YyE.js";import"./index-CC9FbOuz.js";import"./index-Dl3ThDuu.js";import"./LinkText.vue-Bnu_L6eP.js";import"./ArrowRightIcon-D0LHaIDr.js";import"./DropdownSearch.vue-Cx63eXt4.js";import"./useContainer-KG6QsGJY.js";import"./EyeIcon-BZIzJ2Hw.js";import"./FunnelIcon-CVFb1k60.js";import"./FunnelIcon-rqOm78Ah.js";const ie={title:"Circuit DS/Data Table/SaveViewPanel",component:S,tags:["autodocs"],argTypes:{mode:{control:"select",options:["save","edit"]},size:{control:"select",options:["default","small"]},sortOrder:{control:"select",options:["asc","desc"]},loading:{control:"boolean"},isPrivate:{control:"boolean"}}},r=[{label:"Name",value:"name"},{label:"Email",value:"email"},{label:"Created Date",value:"created"},{label:"Last Login",value:"lastLogin"}],a=[{id:"name",label:"Name",visible:!0,fixed:!0},{id:"email",label:"Email",visible:!0},{id:"role",label:"Role",visible:!0},{id:"status",label:"Status",visible:!0},{id:"department",label:"Department",visible:!1}],C=[{key:"Status",value:"Active"},{key:"Role",value:"Admin"}],e={args:{mode:"save",sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},o={args:{mode:"edit",viewName:"Active Users",isPrivate:!1,sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},s={args:{mode:"save",loading:!0,sortOptions:r}},t={args:{mode:"save",size:"small",sortOptions:r,columns:a}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
