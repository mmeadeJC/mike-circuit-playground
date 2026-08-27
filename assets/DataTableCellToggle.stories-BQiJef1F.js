import{d as T,o as d,c as n,f as k,M as B,t as A,e as m}from"./iframe-wHZiWscM.js";import"./RichText.vue-CHGMbC98.js";import{_ as W}from"./ToggleSwitch.vue-BCqhbKx7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-8Q6wweZ5.js";import"./index-_YupRtQ5.js";import"./index-ZhWAdK_X.js";const w=["data-test-id"],M={key:0,class:"text-body-sm text-neutral-base"},N={key:1,class:"absolute border-neutral-default_solid border-b-0 border-l-0 border-r border-solid border-t-0 bottom-0 right-0 top-0 w-px"},$=T({name:"DataTableCellToggle",__name:"DataTableCellToggle",props:{modelValue:{type:Boolean,default:!1},label:{default:void 0},disabled:{type:Boolean,default:!1},advanceFilterLine:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:E}){const i=E,F=a=>{i("update:modelValue",a),i("change",a)};return(a,c)=>(d(),n("div",{class:"flex items-center gap-2 relative overflow-hidden p-2 pb-1.75 h-full","data-test-id":a.$testId("root")},[k(W,{disabled:e.disabled,modelValue:e.modelValue,onClick:c[0]||(c[0]=B(()=>{},["stop"])),"onUpdate:modelValue":F},null,8,["disabled","modelValue"]),e.label?(d(),n("span",M,A(e.label),1)):m("",!0),e.advanceFilterLine?(d(),n("div",N)):m("",!0)],8,w))}}),H={title:"Circuit DS/Components/DataTableCellToggle",component:$,tags:["autodocs"]},t={args:{modelValue:!1}},r={args:{modelValue:!0}},l={args:{modelValue:!0,label:"Enabled"}},o={args:{modelValue:!1,disabled:!0}},s={args:{modelValue:!0,label:"Active",advanceFilterLine:!0}};var u,p,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    modelValue: false
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,f,V;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    modelValue: true
  }
}`,...(V=(f=r.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var h,v,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: 'Enabled'
  }
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var D,L,y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    disabled: true
  }
}`,...(y=(L=o.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var S,_,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: 'Active',
    advanceFilterLine: true
  }
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const J=["Default","Enabled","WithLabel","Disabled","WithAdvanceFilterLine"];export{t as Default,o as Disabled,r as Enabled,s as WithAdvanceFilterLine,l as WithLabel,J as __namedExportsOrder,H as default};
