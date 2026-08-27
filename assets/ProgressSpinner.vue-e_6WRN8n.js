import{ah as c,o as s,c as p,b as r,a as g,d as f,h,Z as u,u as m,k as l}from"./iframe-wHZiWscM.js";import{s as k}from"./index-_YupRtQ5.js";var y=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,v={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},S=c.extend({name:"progressspinner",style:y,classes:v}),b={name:"BaseProgressSpinner",extends:k,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:S,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},d={name:"ProgressSpinner",extends:b,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},$=["fill","stroke-width"];function w(e,n,t,o,i,a){return s(),p("div",r({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(s(),p("svg",r({class:e.cx("spin"),viewBox:"25 25 50 50",style:a.svgStyle},e.ptm("spin")),[g("circle",r({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,$)],16))],16)}d.render=w;const P=f({name:"ProgressSpinner",__name:"ProgressSpinner",props:{size:{default:32},ariaLabel:{default:"Loading"}},setup(e){const n=e,t=l(()=>({width:`${n.size}px`,height:`${n.size}px`})),o=l(()=>n.size<=24?"3":"4");return(i,a)=>(s(),h(m(d),{style:u(t.value),"stroke-width":o.value,fill:"transparent","aria-label":n.ariaLabel,"data-test-id":i.$testId("progress-spinner")},null,8,["style","stroke-width","aria-label","data-test-id"]))}});export{P as _};
