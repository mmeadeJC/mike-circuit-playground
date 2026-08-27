import{ah as C,o as n,c as r,b as s,p as o,e as l,a as c,d as w,X as B,h,C as I,w as y,x as z,t as g,n as S,i as x,u as N,k as i}from"./iframe-D7BbHDbG.js";import{s as T}from"./index-oNdbppoo.js";var V=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,D={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},P=C.extend({name:"card",style:V,classes:D}),A={name:"BaseCard",extends:T,style:P,provide:function(){return{$pcCard:this,$parentInstance:this}}},$={name:"Card",extends:A,inheritAttrs:!1};function E(t,p,a,u,d,m){return n(),r("div",s({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(n(),r("div",s({key:0,class:t.cx("header")},t.ptm("header")),[o(t.$slots,"header")],16)):l("",!0),c("div",s({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(n(),r("div",s({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(n(),r("div",s({key:0,class:t.cx("title")},t.ptm("title")),[o(t.$slots,"title")],16)):l("",!0),t.$slots.subtitle?(n(),r("div",s({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[o(t.$slots,"subtitle")],16)):l("",!0)],16)):l("",!0),c("div",s({class:t.cx("content")},t.ptm("content")),[o(t.$slots,"content")],16),t.$slots.footer?(n(),r("div",s({key:1,class:t.cx("footer")},t.ptm("footer")),[o(t.$slots,"footer")],16)):l("",!0)],16)],16)}$.render=E;const H=["data-test-id"],X=["data-test-id"],G=w({name:"CardButton",__name:"CardButton",props:{title:{},content:{},clickable:{type:Boolean,default:!0},trailingIcon:{},size:{default:"default"}},emits:["click"],setup(t,{emit:p}){const a=t,u=p,d=B(),m=i(()=>!!(a.title||d.title)),f=i(()=>!!(a.title||d.title||d.leading||d.trailing||a.trailingIcon)),b=i(()=>!!(a.content||d.default)),v=i(()=>({root:`flex flex-col ${a.size==="small"?"p-3":"p-4"} bg-neutral-surface shadow-e200 rounded-md w-full ${a.clickable?"cursor-pointer hover:bg-state-hover active:bg-state-pressed transition-colors duration-168":""}`,header:"m-0 border-0",body:`p-0 m-0 border-0 flex flex-col ${f.value&&b.value?"gap-2":""}`,title:"m-0 flex gap-2 items-center",content:"m-0",footer:"m-0 border-0"})),k=e=>{a.clickable&&u("click",e)};return(e,j)=>(n(),h(N($),s(a,{unstyled:"",pt:v.value,"data-test-id":e.$testId("root"),onClick:k}),I({_:2},[f.value?{name:"title",fn:y(()=>[o(e.$slots,"leading"),m.value?(n(),r("div",{key:0,class:S(["text-neutral-base text-pretty text-left w-full",a.size==="small"?"text-heading-5":"text-heading-4"]),"data-test-id":e.$testId("title")},[o(e.$slots,"title",{},()=>[z(g(t.title),1)])],10,H)):l("",!0),o(e.$slots,"trailing",{},()=>[t.trailingIcon?(n(),h(x(t.trailingIcon),{key:0,class:"w-5 h-5 text-neutral-base shrink-0","data-test-id":e.$testId("trailing-icon")},null,8,["data-test-id"])):l("",!0)])]),key:"0"}:void 0,b.value?{name:"content",fn:y(()=>[o(e.$slots,"default",{},()=>[c("p",{class:"m-0 text-body-sm text-neutral-base text-left","data-test-id":e.$testId("content")},g(t.content),9,X)])]),key:"1"}:void 0]),1040,["pt","data-test-id"]))}});export{G as _};
