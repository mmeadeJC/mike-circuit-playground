import"./iframe-DSI7I_YQ.js";import"./RichText.vue-DARNTLdh.js";import{_ as S}from"./SaveViewPanel.vue-l_rKKUK_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./index-CbI5Nc1U.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-B2CuMtSM.js";import"./index-16iY2v2i.js";import"./index-CD_7J42F.js";import"./index-EU9vbBWi.js";import"./index-BuxjV2Ka.js";import"./index-DsdYTbg9.js";import"./index-CxxjhJ-R.js";import"./index-CZjsJVeR.js";import"./index-Cz6kxq3w.js";import"./FilterChip.vue-DRNhKzlB.js";import"./index-HxTnj3va.js";import"./index-BfO8N2P2.js";import"./CheckboxWithLabel.vue-DGxWw3fq.js";import"./index-CwS7Mw-8.js";import"./index-Byho_yNF.js";import"./ColumnConfigDropdown.vue-QDJHIeIG.js";import"./index-BxSFYkr5.js";import"./index-Ck6lw9mO.js";import"./index-Bhi6wGVV.js";import"./LinkText.vue-la98-pF0.js";import"./ArrowRightIcon-sh-7-hR7.js";import"./DropdownSearch.vue-BlbPyvSd.js";import"./useContainer-fllqqkML.js";import"./EyeIcon-CgTh71dA.js";import"./FunnelIcon-BTXIR61W.js";import"./FunnelIcon-D794Vtkm.js";const ie={title:"Circuit DS/Data Table/SaveViewPanel",component:S,tags:["autodocs"],argTypes:{mode:{control:"select",options:["save","edit"]},size:{control:"select",options:["default","small"]},sortOrder:{control:"select",options:["asc","desc"]},loading:{control:"boolean"},isPrivate:{control:"boolean"}}},r=[{label:"Name",value:"name"},{label:"Email",value:"email"},{label:"Created Date",value:"created"},{label:"Last Login",value:"lastLogin"}],a=[{id:"name",label:"Name",visible:!0,fixed:!0},{id:"email",label:"Email",visible:!0},{id:"role",label:"Role",visible:!0},{id:"status",label:"Status",visible:!0},{id:"department",label:"Department",visible:!1}],C=[{key:"Status",value:"Active"},{key:"Role",value:"Admin"}],e={args:{mode:"save",sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},o={args:{mode:"edit",viewName:"Active Users",isPrivate:!1,sortOptions:r,sortField:"name",sortOrder:"asc",columns:a,maxFixedColumns:3,visibleColumnsCount:4,filters:C}},s={args:{mode:"save",loading:!0,sortOptions:r}},t={args:{mode:"save",size:"small",sortOptions:r,columns:a}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
