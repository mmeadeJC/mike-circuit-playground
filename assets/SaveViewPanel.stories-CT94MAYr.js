import"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as S}from"./SaveViewPanel.vue-B5q98drN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-DGY9u_rI.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-DRA9vNfv.js";import"./index-Us1_uPk3.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-cFQtYIhg.js";import"./FilterChip.vue-CBw3qOe7.js";import"./index-CN297qaa.js";import"./index-BdbLeFxC.js";import"./CheckboxWithLabel.vue-D_gLbPG2.js";import"./index-B6YgWt2p.js";import"./index-C19gJH8S.js";import"./ColumnConfigDropdown.vue-CtuR7DM1.js";import"./index-DTiFh52L.js";import"./index-7zypbFVM.js";import"./index-MkGR21B_.js";import"./LinkText.vue-DvAjr8lK.js";import"./ArrowRightIcon-BXY2Zswv.js";import"./DropdownSearch.vue-Cnv-38a8.js";import"./useContainer-Bc2j6_Ia.js";import"./EyeIcon-DNiNViaw.js";import"./FunnelIcon-CbTjwsSd.js";import"./FunnelIcon-D3WoHsAW.js";const ie={title:"Circuit DS/Data Table/SaveViewPanel",component:S,tags:["autodocs"],argTypes:{mode:{control:"select",options:["save","edit"]},size:{control:"select",options:["default","small"]},sortOrder:{control:"select",options:["asc","desc"]},loading:{control:"boolean"},isPrivate:{control:"boolean"}}},r=[{label:"Name",value:"name"},{label:"Email",value:"email"},{label:"Created Date",value:"created"},{label:"Last Login",value:"lastLogin"}],a=[{id:"name",label:"Name",visible:!0,fixed:!0},{id:"email",label:"Email",visible:!0},{id:"role",label:"Role",visible:!0},{id:"status",label:"Status",visible:!0},{id:"department",label:"Department",visible:!1}],C=[{key:"Status",value:"Active"},{key:"Role",value:"Admin"}],e={args:{mode:"save",sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},o={args:{mode:"edit",viewName:"Active Users",isPrivate:!1,sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},s={args:{mode:"save",loading:!0,sortOptions:r}},t={args:{mode:"save",size:"small",sortOptions:r,columns:a}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
