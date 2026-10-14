import{d as I,o as s,c,f as L,M as x,u as d,e as k}from"./iframe-BFKWv3KJ.js";import"./RichText.vue-vrSf4OCs.js";import{s as y}from"./index-CuXoLfeA.js";import{u as B}from"./useContainer-BRiKvAwH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BXYT2gRT.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-CfbpxYVU.js";import"./index-2n8eVSrk.js";import"./index-D77ELRyA.js";import"./index-2rr2RyNS.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-ZhWAdK_X.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-h_LiPJ46.js";const P=["data-test-id"],T={key:0,class:"absolute border-neutral-default_solid border-b-0 border-l-0 border-r border-solid border-t-0 bottom-0 right-0 top-0 w-px"},E=I({name:"DataTableCellSelect",__name:"DataTableCellSelect",props:{modelValue:{default:void 0},options:{default:()=>[]},optionLabel:{default:"label"},optionValue:{default:"value"},placeholder:{default:void 0},disabled:{type:Boolean,default:!1},advanceFilterLine:{type:Boolean,default:!1},size:{}},emits:["update:modelValue","change"],setup(e,{emit:D}){const{containerElement:w}=B(),i=D,z=a=>{i("update:modelValue",a),i("change",a)};return(a,r)=>(s(),c("div",{class:"flex items-center gap-2 relative overflow-hidden p-2 pb-1.75 h-full","data-test-id":a.$testId("root")},[L(d(y),{class:"flex-1",modelValue:e.modelValue,options:e.options,optionLabel:e.optionLabel,optionValue:e.optionValue,placeholder:e.placeholder,disabled:e.disabled,size:"small","append-to":d(w),onClick:r[0]||(r[0]=x(()=>{},["stop"])),"onUpdate:modelValue":z},null,8,["modelValue","options","optionLabel","optionValue","placeholder","disabled","append-to"]),e.advanceFilterLine?(s(),c("div",T)):k("",!0)],8,P))}}),ae={title:"Circuit DS/Components/DataTableCellSelect",component:E,tags:["autodocs"],argTypes:{size:{control:"select",options:["default","small"]}}},l={args:{modelValue:"active",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"},{label:"Pending",value:"pending"}],placeholder:"Select status"}},t={args:{options:[{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Viewer",value:"viewer"}],placeholder:"Select role"}},o={args:{modelValue:"active",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],disabled:!0}},n={args:{modelValue:"active",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],size:"small"}};var u,p,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    modelValue: 'active',
    options: [{
      label: 'Active',
      value: 'active'
    }, {
      label: 'Inactive',
      value: 'inactive'
    }, {
      label: 'Pending',
      value: 'pending'
    }],
    placeholder: 'Select status'
  }
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,b,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Admin',
      value: 'admin'
    }, {
      label: 'User',
      value: 'user'
    }, {
      label: 'Viewer',
      value: 'viewer'
    }],
    placeholder: 'Select role'
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,h,V;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    modelValue: 'active',
    options: [{
      label: 'Active',
      value: 'active'
    }, {
      label: 'Inactive',
      value: 'inactive'
    }],
    disabled: true
  }
}`,...(V=(h=o.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var S,C,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    modelValue: 'active',
    options: [{
      label: 'Active',
      value: 'active'
    }, {
      label: 'Inactive',
      value: 'inactive'
    }],
    size: 'small'
  }
}`,...(A=(C=n.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const le=["Default","WithPlaceholder","Disabled","SmallSize"];export{l as Default,o as Disabled,n as SmallSize,t as WithPlaceholder,le as __namedExportsOrder,ae as default};
