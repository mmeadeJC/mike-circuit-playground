import"./iframe-D7BbHDbG.js";import"./RichText.vue-1XZLRn0K.js";import{_ as O}from"./DataTable.vue-D1tQPxhX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-5dj8dpAI.js";import"./Paginator.vue-BuMmMYPz.js";import"./index-1reqc7Wl.js";import"./index-XbhyUeFS.js";import"./index-BaidBBYU.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-0gxlrFf7.js";import"./index-CiXhdmRB.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-ZhWAdK_X.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";import"./index-pQFxUuf4.js";import"./index-LzOnpYVg.js";import"./ChevronRightIcon-BrFzWSch.js";import"./index-DP0gcRj_.js";import"./index-BKr2PyJj.js";import"./index-BCWryaxY.js";import"./index-CL0m3nvY.js";import"./index-bbso60R8.js";import"./index-1PNgIuf3.js";import"./index-DFQPCZRe.js";import"./index-DHnCHi6v.js";import"./index-DopepIUV.js";import"./useDataTableSize-WEItdoUR.js";const ma={title:"Circuit DS/Data Table/DataTable",component:O,tags:["autodocs"],argTypes:{card:{control:"boolean"},size:{control:"select",options:["default","small"]},paginator:{control:"boolean"},loading:{control:"boolean"},selectionMode:{control:"select",options:[void 0,"single","multiple"]}}},a=[{field:"name",header:"Name",width:"200px"},{field:"email",header:"Email",width:"250px"},{field:"role",header:"Role",width:"150px"},{field:"status",header:"Status",width:"120px"}],e=[{name:"Alice Johnson",email:"alice@example.com",role:"Admin",status:"Active"},{name:"Bob Smith",email:"bob@example.com",role:"User",status:"Active"},{name:"Carol White",email:"carol@example.com",role:"Manager",status:"Inactive"},{name:"Dave Brown",email:"dave@example.com",role:"User",status:"Active"},{name:"Eve Davis",email:"eve@example.com",role:"Admin",status:"Pending"}],o={args:{columns:a,data:e}},r={args:{columns:a,data:e,card:!0}},t={args:{columns:a,data:e,size:"small"}},s={args:{columns:a,data:e,paginator:!0,rows:3,rowsPerPageOptions:[{label:"3",value:3},{label:"5",value:5},{label:"10",value:10}],showRowsPerPageOptions:!0,showPageReport:!0}},n={args:{columns:a,data:e,selectionMode:"multiple",selection:[]}},m={args:{columns:a,data:[],loading:!0}};var l,i,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
