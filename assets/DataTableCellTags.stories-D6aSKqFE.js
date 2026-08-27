import{d as F,o as e,c as a,F as L,g as V,h as W,u as t,t as I,e as u,a8 as l,r as A}from"./iframe-wHZiWscM.js";import"./RichText.vue-CHGMbC98.js";import{s as B}from"./index-BUFlMVon.js";import{u as E}from"./useOverflowItems-BpdFNEwb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-_YupRtQ5.js";import"./index-ZhWAdK_X.js";const O=["data-test-id"],R={key:0,class:"text-body-sm text-neutral-ghost shrink-0"},P={key:1,class:"absolute border-neutral-default_solid border-0 border-r bottom-0 right-0 top-0 w-px"},G=80,H=F({name:"DataTableCellTags",__name:"DataTableCellTags",props:{tags:{default:()=>[]},maxVisibleTags:{default:3},advanceFilterLine:{type:Boolean,default:!1},width:{default:void 0}},setup(c){const i=c,g=A(null),{visibleItems:w,overflowCount:d}=E({items:l(i,"tags"),maxVisible:l(i,"maxVisibleTags"),containerRef:g,estimatedItemWidth:G,explicitWidth:l(i,"width")});return(C,M)=>(e(),a("div",{ref_key:"containerRef",ref:g,class:"flex items-center gap-1 p-2 pb-1.75 relative overflow-hidden h-full","data-test-id":C.$testId("root")},[(e(!0),a(L,null,V(t(w),m=>(e(),W(t(B),{key:m,severity:"secondary",value:m,class:"shrink-0"},null,8,["value"]))),128)),t(d)>0?(e(),a("span",R," +"+I(t(d)),1)):u("",!0),c.advanceFilterLine?(e(),a("div",P)):u("",!0)],8,O))}}),Q={title:"Circuit DS/Components/DataTableCellTags",component:H,tags:["autodocs"],argTypes:{maxVisibleTags:{control:"number"}}},s={args:{tags:["Tag 01","Tag 02","Tag 03"]}},r={args:{tags:["Tag 01","Tag 02","Tag 03","Tag 04","Tag 05"],maxVisibleTags:3}},o={args:{tags:["Production"]}},n={args:{tags:["Tag 01","Tag 02","Tag 03"],advanceFilterLine:!0}};var p,T,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tags: ['Tag 01', 'Tag 02', 'Tag 03']
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var v,b,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tags: ['Tag 01', 'Tag 02', 'Tag 03', 'Tag 04', 'Tag 05'],
    maxVisibleTags: 3
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var _,x,y;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tags: ['Production']
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,D,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    tags: ['Tag 01', 'Tag 02', 'Tag 03'],
    advanceFilterLine: true
  }
}`,...(S=(D=n.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const U=["Default","WithOverflow","SingleTag","WithAdvanceFilterLine"];export{s as Default,o as SingleTag,n as WithAdvanceFilterLine,r as WithOverflow,U as __namedExportsOrder,Q as default};
