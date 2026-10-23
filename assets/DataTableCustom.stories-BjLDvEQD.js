import"./iframe-DuzLv9Pd.js";import"./RichText.vue-D4MvUk45.js";import{_ as O}from"./DataTable.vue-Cj_l__a2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-B-toZiH_.js";import"./Paginator.vue-CKNm14yQ.js";import"./index-Br2-aBVM.js";import"./index-CEiioRpE.js";import"./index-D5zH4fN4.js";import"./index-b5e0TYx1.js";import"./index-CWlqIe1B.js";import"./index-CGiVUquh.js";import"./index-CjiEPaTZ.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-ZhWAdK_X.js";import"./index-Brczh--H.js";import"./index-DL1Pt7bO.js";import"./index-gSNiAAF9.js";import"./index-CdgF4ttL.js";import"./ChevronRightIcon-RLkhG38k.js";import"./index-CO-G9M_W.js";import"./index-J_Bj38AC.js";import"./index-DY4Fqf02.js";import"./index-DnaDt85i.js";import"./index-CFtktJtS.js";import"./index-JYiShB9D.js";import"./index-DUWomeF_.js";import"./index-b0ySB-5C.js";import"./index-BQabsSYQ.js";import"./useDataTableSize-BPDfn_He.js";const ma={title:"Circuit DS/Data Table/DataTable",component:O,tags:["autodocs"],argTypes:{card:{control:"boolean"},size:{control:"select",options:["default","small"]},paginator:{control:"boolean"},loading:{control:"boolean"},selectionMode:{control:"select",options:[void 0,"single","multiple"]}}},a=[{field:"name",header:"Name",width:"200px"},{field:"email",header:"Email",width:"250px"},{field:"role",header:"Role",width:"150px"},{field:"status",header:"Status",width:"120px"}],e=[{name:"Alice Johnson",email:"alice@example.com",role:"Admin",status:"Active"},{name:"Bob Smith",email:"bob@example.com",role:"User",status:"Active"},{name:"Carol White",email:"carol@example.com",role:"Manager",status:"Inactive"},{name:"Dave Brown",email:"dave@example.com",role:"User",status:"Active"},{name:"Eve Davis",email:"eve@example.com",role:"Admin",status:"Pending"}],o={args:{columns:a,data:e}},r={args:{columns:a,data:e,card:!0}},t={args:{columns:a,data:e,size:"small"}},s={args:{columns:a,data:e,paginator:!0,rows:3,rowsPerPageOptions:[{label:"3",value:3},{label:"5",value:5},{label:"10",value:10}],showRowsPerPageOptions:!0,showPageReport:!0}},n={args:{columns:a,data:e,selectionMode:"multiple",selection:[]}},m={args:{columns:a,data:[],loading:!0}};var l,i,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    card: true
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,h,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    size: 'small'
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,b,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    paginator: true,
    rows: 3,
    rowsPerPageOptions: [{
      label: '3',
      value: 3
    }, {
      label: '5',
      value: 5
    }, {
      label: '10',
      value: 10
    }],
    showRowsPerPageOptions: true,
    showPageReport: true
  }
}`,...(D=(b=s.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var P,S,x;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    selectionMode: 'multiple',
    selection: []
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var C,f,A;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: [],
    loading: true
  }
}`,...(A=(f=m.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const la=["Default","Card","Small","WithPagination","WithSelection","Loading"];export{r as Card,o as Default,m as Loading,t as Small,s as WithPagination,n as WithSelection,la as __namedExportsOrder,ma as default};
