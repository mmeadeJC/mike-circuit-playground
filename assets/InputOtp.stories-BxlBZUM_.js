import{ah as G,aN as H,aE as R,o as I,c as y,F as Y,g as q,p as J,f as M,n as Q,b as T,d as W,V as X,h as Z,w as _,bb as tt,u as b,e as et,k as x,bc as nt,bd as rt,r as d}from"./iframe-D7BbHDbG.js";import"./RichText.vue-1XZLRn0K.js";import{s as z}from"./index-DCVTeUli.js";import{s as at}from"./index-2h6QqnDj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ZhWAdK_X.js";import"./index-DrYGcJBA.js";import"./index-oNdbppoo.js";var ot=`
    .p-inputotp {
        display: flex;
        align-items: center;
        gap: dt('inputotp.gap');
    }

    .p-inputotp-input {
        text-align: center;
        width: dt('inputotp.input.width');
    }

    .p-inputotp-input.p-inputtext-sm {
        text-align: center;
        width: dt('inputotp.input.sm.width');
    }

    .p-inputotp-input.p-inputtext-lg {
        text-align: center;
        width: dt('inputotp.input.lg.width');
    }
`,st={root:"p-inputotp p-component",pcInputText:"p-inputotp-input"},ut=G.extend({name:"inputotp",style:ot,classes:st}),it={name:"BaseInputOtp",extends:at,props:{readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},length:{type:Number,default:4},mask:{type:Boolean,default:!1},integerOnly:{type:Boolean,default:!1}},style:ut,provide:function(){return{$pcInputOtp:this,$parentInstance:this}}},L={name:"InputOtp",extends:it,inheritAttrs:!1,emits:["change","focus","blur"],data:function(){return{tokens:[]}},watch:{modelValue:{immediate:!0,handler:function(t){this.tokens=t?t.split(""):new Array(this.length)}}},methods:{getTemplateAttrs:function(t){return{value:this.tokens[t]}},getTemplateEvents:function(t){var n=this;return{input:function(r){return n.onInput(r,t)},keydown:function(r){return n.onKeyDown(r)},focus:function(r){return n.onFocus(r)},blur:function(r){return n.onBlur(r)},paste:function(r){return n.onPaste(r)}}},onInput:function(t,n){this.tokens[n]=t.target.value,this.updateModel(t),t.inputType==="deleteContentBackward"?this.moveToPrev(t):(t.inputType==="insertText"||t.inputType==="deleteContentForward"||H()&&t instanceof CustomEvent)&&this.moveToNext(t)},updateModel:function(t){var n=this.tokens.join("");this.writeValue(n,t),this.$emit("change",{originalEvent:t,value:n})},moveToPrev:function(t){var n=this.findPrevInput(t.target);n&&(n.focus(),n.select())},moveToNext:function(t){var n=this.findNextInput(t.target);n&&(n.focus(),n.select())},findNextInput:function(t){var n=t.nextElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findNextInput(n)},findPrevInput:function(t){var n=t.previousElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findPrevInput(n)},onFocus:function(t){t.target.select(),this.$emit("focus",t)},onBlur:function(t){this.$emit("blur",t)},onClick:function(t){setTimeout(function(){return t.target.select()},1)},onKeyDown:function(t){if(!(t.ctrlKey||t.metaKey))switch(t.key){case"ArrowLeft":this.moveToPrev(t),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Backspace":t.target.value.length===0&&(this.moveToPrev(t),t.preventDefault());break;case"ArrowRight":this.moveToNext(t),t.preventDefault();break;case"Enter":case"Tab":break;default:var n=t.target,s=n.selectionStart!==n.selectionEnd,r=this.tokens.join("").length>=this.length,a=this.integerOnly?/^[0-9]$/.test(t.key):!0;(!a||r&&t.key!=="Delete"&&!s)&&t.preventDefault();break}},onPaste:function(t){if(!(this.readonly||this.disabled)){var n=t.clipboardData.getData("text");if(n.length){var s=n.substring(0,this.length);(!this.integerOnly||!isNaN(s))&&(this.tokens=s.split(""),this.updateModel(t))}t.preventDefault()}}},computed:{inputMode:function(){return this.integerOnly?"numeric":"text"},inputType:function(){return this.mask?"password":"text"}},components:{OtpInputText:z}};function pt(e,t,n,s,r,a){var c=R("OtpInputText");return I(),y("div",T({class:e.cx("root")},e.ptmi("root")),[(I(!0),y(Y,null,q(e.length,function(u){return J(e.$slots,"default",{key:u,events:a.getTemplateEvents(u-1),attrs:a.getTemplateAttrs(u-1),index:u},function(){return[M(c,{value:r.tokens[u-1],type:a.inputType,class:Q(e.cx("pcInputText")),name:e.$formName?e.$formName+"_"+(u-1):void 0,inputmode:a.inputMode,variant:e.variant,readonly:e.readonly,disabled:e.disabled,size:e.size,invalid:e.invalid,tabindex:e.tabindex,unstyled:e.unstyled,onInput:function(i){return a.onInput(i,u-1)},onFocus:t[0]||(t[0]=function(o){return a.onFocus(o)}),onBlur:t[1]||(t[1]=function(o){return a.onBlur(o)}),onPaste:t[2]||(t[2]=function(o){return a.onPaste(o)}),onKeydown:t[3]||(t[3]=function(o){return a.onKeyDown(o)}),onClick:t[4]||(t[4]=function(o){return a.onClick(o)}),pt:e.ptm("pcInputText")},null,8,["value","type","class","name","inputmode","variant","readonly","disabled","size","invalid","tabindex","unstyled","onInput","pt"])]})}),128))],16)}L.render=pt;const lt={key:0,class:"mx-1 w-6 h-px self-center border-t border-neutral-strong_alpha"},p=W({name:"InputOtp",__name:"InputOtp",props:{digit:{default:"4"},modelValue:{default:""},name:{default:""},size:{default:"default"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},tabindex:{default:0},formControl:{default:void 0}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=t,r={"3-3":6,4:4,6:6},a=x(()=>r[n.digit]),c=x(()=>({root:()=>"flex gap-2",pcInputText:{root(o){const i=nt.root(o.parent)??"",l=n.size==="small"?"w-6":"w-8";return`${rt} ${i} ${l} text-center`.trim()}}})),u=X();return(o,i)=>(I(),Z(b(L),T({length:a.value},{...n,...b(u)},{class:"flex gap-2",pt:c.value,"data-test-id":o.$testId("otp-input"),"onUpdate:modelValue":i[0]||(i[0]=l=>s("update:modelValue",l))}),{default:_(({attrs:l,events:U,index:j})=>[M(b(z),T(l,tt(U),{disabled:n.disabled,readonly:n.readonly,invalid:n.invalid,formControl:n.formControl,inputmode:"numeric",pt:c.value.pcInputText,pattern:"[0-9]*"}),null,16,["disabled","readonly","invalid","formControl","pt"]),n.digit==="3-3"&&j===3?(I(),y("span",lt)):et("",!0)]),_:1},16,["length","pt","data-test-id"]))}}),bt={title:"Circuit DS/Components/InputOtp",component:p,tags:["autodocs"],argTypes:{digit:{control:"select",options:["4","6","3-3"]},disabled:{control:"boolean"},invalid:{control:"boolean"}}},m={render:e=>({components:{InputOtp:p},setup(){const t=d("");return{args:e,value:t}},template:`
      <InputOtp v-model="value" digit="4" v-bind="args" />
    `}),args:{}},f={render:e=>({components:{InputOtp:p},setup(){const t=d("");return{args:e,value:t}},template:`
      <InputOtp v-model="value" digit="6" v-bind="args" />
    `}),args:{}},g={render:e=>({components:{InputOtp:p},setup(){const t=d("");return{args:e,value:t}},template:`
      <InputOtp v-model="value" digit="3-3" v-bind="args" />
    `}),args:{}},v={render:e=>({components:{InputOtp:p},setup(){const t=d("1234");return{args:e,value:t}},template:`
      <InputOtp v-model="value" digit="4" disabled v-bind="args" />
    `}),args:{}},h={render:e=>({components:{InputOtp:p},setup(){const t=d("12");return{args:e,value:t}},template:`
      <InputOtp v-model="value" digit="4" invalid v-bind="args" />
    `}),args:{}};var O,k,w;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputOtp
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <InputOtp v-model="value" digit="4" v-bind="args" />
    \`
  }),
  args: {}
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,N,B;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputOtp
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <InputOtp v-model="value" digit="6" v-bind="args" />
    \`
  }),
  args: {}
}`,...(B=(N=f.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var C,P,E;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputOtp
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <InputOtp v-model="value" digit="3-3" v-bind="args" />
    \`
  }),
  args: {}
}`,...(E=(P=g.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var S,A,F;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputOtp
    },
    setup() {
      const value = ref('1234');
      return {
        args,
        value
      };
    },
    template: \`
      <InputOtp v-model="value" digit="4" disabled v-bind="args" />
    \`
  }),
  args: {}
}`,...(F=(A=v.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var V,$,K;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      InputOtp
    },
    setup() {
      const value = ref('12');
      return {
        args,
        value
      };
    },
    template: \`
      <InputOtp v-model="value" digit="4" invalid v-bind="args" />
    \`
  }),
  args: {}
}`,...(K=($=h.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const yt=["FourDigit","SixDigit","ThreeThreeDigit","Disabled","Invalid"];export{v as Disabled,m as FourDigit,h as Invalid,f as SixDigit,g as ThreeThreeDigit,yt as __namedExportsOrder,bt as default};
