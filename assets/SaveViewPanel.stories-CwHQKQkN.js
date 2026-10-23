import"./iframe-DuzLv9Pd.js";import"./RichText.vue-D4MvUk45.js";import{_ as S}from"./SaveViewPanel.vue-i4O3zuWV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-CEiioRpE.js";import"./index-D5zH4fN4.js";import"./index-b5e0TYx1.js";import"./index-CWlqIe1B.js";import"./index-CGiVUquh.js";import"./index-CjiEPaTZ.js";import"./index-Brczh--H.js";import"./index-DL1Pt7bO.js";import"./index-D3QA_pcE.js";import"./FilterChip.vue-Ca3a8qy6.js";import"./index-BcWNlClR.js";import"./index-BemneOh4.js";import"./CheckboxWithLabel.vue-DoqDZu3R.js";import"./index-DnaDt85i.js";import"./index-CFtktJtS.js";import"./ColumnConfigDropdown.vue-BVX8ajl9.js";import"./index-BbuMzApp.js";import"./index-b0ySB-5C.js";import"./index-BQabsSYQ.js";import"./LinkText.vue-Dtn5ZYX7.js";import"./ArrowRightIcon-CebixEfQ.js";import"./DropdownSearch.vue-p79a3D5Z.js";import"./useContainer-Do_p2hLC.js";import"./EyeIcon-DZdtwtTn.js";import"./FunnelIcon-Cz3H4XLI.js";import"./FunnelIcon-CD3UCyXH.js";const ie={title:"Circuit DS/Data Table/SaveViewPanel",component:S,tags:["autodocs"],argTypes:{mode:{control:"select",options:["save","edit"]},size:{control:"select",options:["default","small"]},sortOrder:{control:"select",options:["asc","desc"]},loading:{control:"boolean"},isPrivate:{control:"boolean"}}},r=[{label:"Name",value:"name"},{label:"Email",value:"email"},{label:"Created Date",value:"created"},{label:"Last Login",value:"lastLogin"}],a=[{id:"name",label:"Name",visible:!0,fixed:!0},{id:"email",label:"Email",visible:!0},{id:"role",label:"Role",visible:!0},{id:"status",label:"Status",visible:!0},{id:"department",label:"Department",visible:!1}],C=[{key:"Status",value:"Active"},{key:"Role",value:"Admin"}],e={args:{mode:"save",sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},o={args:{mode:"edit",viewName:"Active Users",isPrivate:!1,sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},s={args:{mode:"save",loading:!0,sortOptions:r}},t={args:{mode:"save",size:"small",sortOptions:r,columns:a}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
