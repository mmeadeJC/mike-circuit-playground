import{d as V,o as e,c as s,F as W,g as A,h as B,u as p,t as E,e as u,a8 as c,r as O}from"./iframe-D7BbHDbG.js";import"./RichText.vue-1XZLRn0K.js";import{_ as R}from"./Chip.vue-DWhIPt7n.js";import{u as H}from"./useOverflowItems-DFZ6sac9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Blxf5QWh.js";import"./index-BmNQnOBp.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-ZhWAdK_X.js";const $=["data-test-id"],M={key:0,class:"text-body-sm text-neutral-ghost shrink-0"},N={key:1,class:"absolute border-neutral-default_solid border-0 border-r bottom-0 right-0 top-0 w-px"},P=70,j=V({name:"DataTableCellChips",__name:"DataTableCellChips",props:{chips:{default:()=>[]},maxVisibleChips:{default:3},advanceFilterLine:{type:Boolean,default:!1},size:{default:void 0},width:{default:void 0}},setup(l){const n=l,m=O(null),{visibleItems:L,overflowCount:h}=H({items:c(n,"chips"),maxVisible:c(n,"maxVisibleChips"),containerRef:m,estimatedItemWidth:P,explicitWidth:c(n,"width")});return(T,q)=>(e(),s("div",{ref_key:"containerRef",ref:m,class:"flex items-center gap-1 p-2 pb-1.75 relative overflow-hidden h-full","data-test-id":T.$testId("root")},[(e(!0),s(W,null,A(p(L),d=>(e(),B(R,{key:d,value:d,size:"compact",class:"shrink-0"},null,8,["value"]))),128)),p(h)>0?(e(),s("span",M," +"+E(p(h)),1)):u("",!0),l.advanceFilterLine?(e(),s("div",N)):u("",!0)],8,$))}}),ae={title:"Circuit DS/Components/DataTableCellChips",component:j,tags:["autodocs"],argTypes:{maxVisibleChips:{control:"number"},size:{control:"select",options:["default","small"]}}},a={args:{chips:["Chip 01","Chip 02","Chip 03"]}},i={args:{chips:["Chip 01","Chip 02","Chip 03","Chip 04","Chip 05"],maxVisibleChips:3}},t={args:{chips:["Admin"]}},r={args:{chips:["Chip 01","Chip 02","Chip 03"],size:"small"}},o={args:{chips:["Chip 01","Chip 02"],advanceFilterLine:!0}};var C,f,g;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    chips: ['Chip 01', 'Chip 02', 'Chip 03']
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,b,_;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    chips: ['Chip 01', 'Chip 02', 'Chip 03', 'Chip 04', 'Chip 05'],
    maxVisibleChips: 3
  }
}`,...(_=(b=i.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var S,x,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    chips: ['Admin']
  }
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,w,y;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    chips: ['Chip 01', 'Chip 02', 'Chip 03'],
    size: 'small'
  }
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var F,z,I;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    chips: ['Chip 01', 'Chip 02'],
    advanceFilterLine: true
  }
}`,...(I=(z=o.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const ie=["Default","WithOverflow","SingleChip","SmallSize","WithAdvanceFilterLine"];export{a as Default,t as SingleChip,r as SmallSize,o as WithAdvanceFilterLine,i as WithOverflow,ie as __namedExportsOrder,ae as default};
