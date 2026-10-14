import{_ as d}from"./DashboardGovernanceWidget-SyXdLtwX.js";import"./iframe-600w3n4H.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-DA9jvc7b.js";import"./CollapsiblePanel.vue-N2IyoV5w.js";import"./index-C_NaY8XT.js";import"./index-B3TfiOtM.js";import"./index-D0lPU1dy.js";import"./RichText.vue-CqDMFobT.js";import"./ArrowTopRightOnSquareIcon-D1DflJJw.js";import"./ShieldCheckIcon-BytxG3nK.js";const h={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Dashboard/Governance Card",component:d,parameters:{layout:"centered"},decorators:[()=>({template:'<div style="width: 600px;"><story /></div>'})]},e={name:"ALT 01",args:{policies:[{name:"Require managed devices"},{name:"Contractor access restriction",profiles:["Engineering Profile"]},{name:"Trusted network only",profiles:["Engineering Profile","Sales Profile"]}]}},r={name:"ALT 02",args:{policies:[{name:"Require managed devices"},{name:"Contractor access restriction",servers:["Engineering Server"]},{name:"Trusted network only",servers:["Engineering Server","Sales Server"]}],scopeType:"servers"}},n={name:"Empty State",args:{policies:[]}};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'ALT 01',
  args: {
    policies: [{
      name: 'Require managed devices'
    }, {
      name: 'Contractor access restriction',
      profiles: ['Engineering Profile']
    }, {
      name: 'Trusted network only',
      profiles: ['Engineering Profile', 'Sales Profile']
    }]
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var t,i,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'ALT 02',
  args: {
    policies: [{
      name: 'Require managed devices'
    }, {
      name: 'Contractor access restriction',
      servers: ['Engineering Server']
    }, {
      name: 'Trusted network only',
      servers: ['Engineering Server', 'Sales Server']
    }],
    scopeType: 'servers'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Empty State',
  args: {
    policies: []
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const G=["Alt01","Alt02","EmptyState"];export{e as Alt01,r as Alt02,n as EmptyState,G as __namedExportsOrder,h as default};
