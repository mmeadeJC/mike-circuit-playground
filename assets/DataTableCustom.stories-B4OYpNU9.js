import"./iframe-BFKWv3KJ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as O}from"./DataTable.vue-BxBNPbHm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-CfbpxYVU.js";import"./Paginator.vue-B6hVKag8.js";import"./index-h_LiPJ46.js";import"./index-CuXoLfeA.js";import"./index-BXYT2gRT.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-2n8eVSrk.js";import"./index-D77ELRyA.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-ZhWAdK_X.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-DICFt-SZ.js";import"./index-BVkesBF5.js";import"./ChevronRightIcon-DUJGUktX.js";import"./index-CFp6THYW.js";import"./index-CtfEZ-mH.js";import"./index-BvSgnTKr.js";import"./index-D6YUBXg4.js";import"./index-DdAbza1U.js";import"./index-CXxQSp7k.js";import"./index-Dn4n97fu.js";import"./index-CiP5ygH7.js";import"./index-EcMNudkA.js";import"./useDataTableSize-DIEaYxrt.js";const ma={title:"Circuit DS/Data Table/DataTable",component:O,tags:["autodocs"],argTypes:{card:{control:"boolean"},size:{control:"select",options:["default","small"]},paginator:{control:"boolean"},loading:{control:"boolean"},selectionMode:{control:"select",options:[void 0,"single","multiple"]}}},a=[{field:"name",header:"Name",width:"200px"},{field:"email",header:"Email",width:"250px"},{field:"role",header:"Role",width:"150px"},{field:"status",header:"Status",width:"120px"}],e=[{name:"Alice Johnson",email:"alice@example.com",role:"Admin",status:"Active"},{name:"Bob Smith",email:"bob@example.com",role:"User",status:"Active"},{name:"Carol White",email:"carol@example.com",role:"Manager",status:"Inactive"},{name:"Dave Brown",email:"dave@example.com",role:"User",status:"Active"},{name:"Eve Davis",email:"eve@example.com",role:"Admin",status:"Pending"}],o={args:{columns:a,data:e}},r={args:{columns:a,data:e,card:!0}},t={args:{columns:a,data:e,size:"small"}},s={args:{columns:a,data:e,paginator:!0,rows:3,rowsPerPageOptions:[{label:"3",value:3},{label:"5",value:5},{label:"10",value:10}],showRowsPerPageOptions:!0,showPageReport:!0}},n={args:{columns:a,data:e,selectionMode:"multiple",selection:[]}},m={args:{columns:a,data:[],loading:!0}};var l,i,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
