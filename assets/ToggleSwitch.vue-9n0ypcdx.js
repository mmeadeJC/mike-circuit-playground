import{ah as C,o as i,c as s,a as d,b as r,p as L,d as u,V as x,W as B,f as S,u as a,bg as V,h as f,n as g,bh as k,e as h,t as m,k as I}from"./iframe-e359xqcE.js";import{s as _}from"./index-BtrtblyE.js";import{f as T}from"./index-ZhWAdK_X.js";var P=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,O={root:{position:"relative"}},$={root:function(n){var e=n.instance,o=n.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":o.disabled,"p-invalid":e.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},z=C.extend({name:"toggleswitch",style:P,classes:$,inlineStyles:O}),F={name:"BaseToggleSwitch",extends:_,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:z,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},y={name:"ToggleSwitch",extends:F,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(n){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.writeValue(e,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var e,o;this.$emit("blur",n),(e=(o=this.formField).onBlur)===null||e===void 0||e.call(o,n)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return T({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},j=["data-p-checked","data-p-disabled","data-p"],M=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],N=["data-p"],A=["data-p"];function X(t,n,e,o,p,l){return i(),s("div",r({class:t.cx("root"),style:t.sx("root")},l.getPTOptions("root"),{"data-p-checked":l.checked,"data-p-disabled":t.disabled,"data-p":l.dataP}),[d("input",r({id:t.inputId,type:"checkbox",role:"switch",class:[t.cx("input"),t.inputClass],style:t.inputStyle,checked:l.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":l.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:n[0]||(n[0]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:n[1]||(n[1]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)}),onChange:n[2]||(n[2]=function(){return l.onChange&&l.onChange.apply(l,arguments)})},l.getPTOptions("input")),null,16,M),d("div",r({class:t.cx("slider")},l.getPTOptions("slider"),{"data-p":l.dataP}),[d("div",r({class:t.cx("handle")},l.getPTOptions("handle"),{"data-p":l.dataP}),[L(t.$slots,"handle",{checked:l.checked})],16,A)],16,N)],16,j)}y.render=X;const Z={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},D=u({name:"ToggleCheckIcon",__name:"ToggleCheckIcon",setup(t){return(n,e)=>(i(),s("svg",Z,[...e[0]||(e[0]=[d("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.5887 5.05835C12.8879 5.3835 12.8668 5.88959 12.5416 6.18874L7.32425 10.9887C7.01809 11.2704 6.54713 11.2704 6.24096 10.9887L3.45836 8.42874C3.1332 8.12959 3.11211 7.6235 3.41126 7.29835C3.7104 6.97319 4.21649 6.9521 4.54165 7.25125L6.78261 9.31293L11.4584 5.01125C11.7835 4.7121 12.2896 4.73319 12.5887 5.05835Z",fill:"currentColor"},null,-1)])]))}}),E={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},U=u({name:"ToggleXMarkIcon",__name:"ToggleXMarkIcon",setup(t){return(n,e)=>(i(),s("svg",E,[...e[0]||(e[0]=[d("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.73726 4.60587C5.42484 4.29345 4.91831 4.29345 4.60589 4.60587C4.29347 4.91829 4.29347 5.42482 4.60589 5.73724L6.86863 7.99998L4.60588 10.2627C4.29346 10.5752 4.29346 11.0817 4.60588 11.3941C4.9183 11.7065 5.42483 11.7065 5.73725 11.3941L8 9.13135L10.2627 11.3941C10.5752 11.7065 11.0817 11.7065 11.3941 11.3941C11.7065 11.0817 11.7065 10.5751 11.3941 10.2627L9.13138 7.99998L11.3941 5.73725C11.7065 5.42483 11.7065 4.9183 11.3941 4.60588C11.0817 4.29346 10.5752 4.29346 10.2627 4.60588L8 6.86861L5.73726 4.60587Z",fill:"currentColor"},null,-1)])]))}}),W=["data-test-id"],q={class:"relative inline-flex"},G={key:0,class:"flex flex-col gap-0.5"},H=["for","data-test-id"],J=["data-test-id"],Y=u({name:"ToggleSwitch",__name:"ToggleSwitch",props:{label:{},description:{},modelValue:{type:[Boolean,String]},defaultValue:{type:[Boolean,String]},name:{},trueValue:{},falseValue:{},invalid:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},tabindex:{},inputId:{},inputClass:{},inputStyle:{},ariaLabelledby:{},ariaLabel:{},formControl:{},dt:{},pt:{},ptOptions:{},unstyled:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:n}){const e=t,o=n,p=x(),l=e.inputId??B(),b=I(()=>e.modelValue??!1);return(c,w)=>(i(),s("div",{class:"inline-flex items-start justify-start gap-2","data-test-id":c.$testId("root")},[d("div",q,[S(a(y),r({modelValue:e.modelValue,"onUpdate:modelValue":w[0]||(w[0]=v=>o("update:modelValue",v)),disabled:e.disabled,inputId:a(l),ariaLabelledby:e.ariaLabelledby,ariaLabel:e.ariaLabel},a(p),{pt:a(V),"data-test-id":c.$testId("toggle-switch")}),null,16,["modelValue","disabled","inputId","ariaLabelledby","ariaLabel","pt","data-test-id"]),b.value?h("",!0):(i(),f(U,{key:0,class:g(["absolute pointer-events-none z-0",a(k)(e.disabled??!1,!1)]),style:{right:"5px",top:"2px"}},null,8,["class"])),b.value?(i(),f(D,{key:1,class:g(["absolute pointer-events-none z-0",a(k)(e.disabled??!1,!0)]),style:{left:"5px",top:"2px"}},null,8,["class"])):h("",!0)]),e.label?(i(),s("div",G,[d("label",{class:g(["text-body-md",{"cursor-pointer":!e.disabled,"cursor-not-allowed text-neutral-ghost":e.disabled}]),for:a(l),"data-test-id":c.$testId("label")},m(e.label),11,H),e.description?(i(),s("span",{key:0,class:g(["text-body-sm text-neutral-subtle",{"text-neutral-ghost":e.disabled}]),"data-test-id":c.$testId("description")},m(e.description),11,J)):h("",!0)])):h("",!0)],8,W))}});export{Y as _};
