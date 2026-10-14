import"./iframe-DnhA1Jsm.js";import"./RichText.vue-BuoexALv.js";import{_ as b}from"./FilterField.vue-D2zupF-a.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C6XQ6gRS.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-DNm818yJ.js";import"./index-DSiULD1o.js";import"./index-Ch682guI.js";import"./index-lNUZEIRs.js";import"./index-l3Tk4em_.js";import"./index-BI9VwZ0A.js";import"./index-DKDggJZ4.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-ZhWAdK_X.js";import"./index-C3dwEfyt.js";import"./index-BFiFYGtt.js";import"./index-B5xbJtC5.js";import"./index-BkS1dZYY.js";import"./index-BNIcB7B5.js";import"./index-DA6MtJit.js";import"./index-BiaoWc9A.js";import"./index-qDFe3kWE.js";import"./index-Ctu82zAg.js";import"./index-BWWQO6Z8.js";import"./index-SGyjFKB5.js";import"./index-BNbdGjQ1.js";import"./index-BugbG7pm.js";import"./index-DW_gF6rd.js";import"./FormField.vue-mRh6rdEv.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./RadioButtonWithLabel.vue-CRTzEgjq.js";import"./index-DUtpmYFH.js";import"./CheckboxWithLabel.vue-D3KLeAP4.js";import"./useContainer-DkP69mYD.js";const ne={title:"Circuit DS/Data Table/FilterField",component:b,tags:["autodocs"]},e={args:{filter:{id:"status",label:"Status",type:"singleSelect",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"},{label:"Pending",value:"pending"}]},modelValue:null}},a={args:{filter:{id:"role",label:"Role",type:"multiSelect",options:[{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Manager",value:"manager"}]},modelValue:["admin"]}},t={args:{filter:{id:"name",label:"Name",type:"text",placeholder:"Enter name...",operators:[{label:"Contains",value:"contains"},{label:"Equals",value:"equals"},{label:"Starts with",value:"startsWith"}]},modelValue:{operator:"contains",value:""}}},n={args:{filter:{id:"department",label:"Department",type:"singleSelectDropdown",isAdditional:!0,options:[{label:"Engineering",value:"engineering"},{label:"Marketing",value:"marketing"}]},modelValue:null,removable:!0}};var l,r,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    filter: {
      id: 'status',
      label: 'Status',
      type: 'singleSelect',
      options: [{
        label: 'Active',
        value: 'active'
      }, {
        label: 'Inactive',
        value: 'inactive'
      }, {
        label: 'Pending',
        value: 'pending'
      }]
    },
    modelValue: null
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var o,s,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    filter: {
      id: 'role',
      label: 'Role',
      type: 'multiSelect',
      options: [{
        label: 'Admin',
        value: 'admin'
      }, {
        label: 'User',
        value: 'user'
      }, {
        label: 'Manager',
        value: 'manager'
      }]
    },
    modelValue: ['admin']
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,u,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    filter: {
      id: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter name...',
      operators: [{
        label: 'Contains',
        value: 'contains' as const
      }, {
        label: 'Equals',
        value: 'equals' as const
      }, {
        label: 'Starts with',
        value: 'startsWith' as const
      }]
    },
    modelValue: {
      operator: 'contains' as const,
      value: ''
    }
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,g,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    filter: {
      id: 'department',
      label: 'Department',
      type: 'singleSelectDropdown',
      isAdditional: true,
      options: [{
        label: 'Engineering',
        value: 'engineering'
      }, {
        label: 'Marketing',
        value: 'marketing'
      }]
    },
    modelValue: null,
    removable: true
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const le=["SingleSelect","MultiSelect","TextFilter","Removable"];export{a as MultiSelect,n as Removable,e as SingleSelect,t as TextFilter,le as __namedExportsOrder,ne as default};
