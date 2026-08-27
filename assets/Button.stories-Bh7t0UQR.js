import{s as r}from"./index-sD1-d5gW.js";import"./iframe-wHZiWscM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";const Le={title:"Circuit DS/Components/Button",component:r,tags:["autodocs"],argTypes:{severity:{control:"select",options:["primary","secondary","danger"]},variant:{control:"select",options:[void 0,"outlined","text"]},label:{control:"text"},disabled:{control:"boolean"},size:{control:"select",options:[void 0,"small","large"]},icon:{control:"text"},iconPos:{control:"select",options:["left","right"]},loading:{control:"boolean"}}},a={args:{label:"Primary",severity:"primary"}},t={args:{label:"Secondary",severity:"secondary"}},n={args:{label:"Danger",severity:"danger"}},s={name:"Outlined / Primary",args:{label:"Outlined Primary",severity:"primary",variant:"outlined"}},o={name:"Outlined / Secondary",args:{label:"Outlined Secondary",severity:"secondary",variant:"outlined"}},l={name:"Outlined / Danger",args:{label:"Outlined Danger",severity:"danger",variant:"outlined"}},i={name:"Text / Primary",args:{label:"Text Primary",severity:"primary",variant:"text"}},c={name:"Text / Secondary",args:{label:"Text Secondary",severity:"secondary",variant:"text"}},m={name:"Text / Danger",args:{label:"Text Danger",severity:"danger",variant:"text"}},d={name:"Icon Only",render:e=>({components:{Button:r},setup(){return{args:e}},template:`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" aria-hidden="true">
            <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
          </svg>
        </template>
      </Button>
    `}),args:{severity:"primary",ariaLabel:"More options"}},p={name:"Icon Only / Small",render:e=>({components:{Button:r},setup(){return{args:e}},template:`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    `}),args:{severity:"primary",size:"small",ariaLabel:"Add item"}},u={name:"Icon Only / Outlined",render:e=>({components:{Button:r},setup(){return{args:e}},template:`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" aria-hidden="true">
            <path d="M5.433 13.917l1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
          </svg>
        </template>
      </Button>
    `}),args:{severity:"secondary",variant:"outlined",ariaLabel:"Edit"}},g={args:{label:"Small",severity:"primary",size:"small"}},v={args:{label:"Large",severity:"primary",size:"large"}},y={args:{label:"Disabled",severity:"primary",disabled:!0}},h={args:{label:"Loading",severity:"primary",loading:!0}},w={name:"With Icon / Left",render:e=>({components:{Button:r},setup(){return{args:e}},template:`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    `}),args:{label:"Add Item",severity:"primary"}},b={name:"With Icon / Right",render:e=>({components:{Button:r},setup(){return{args:e}},template:`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-4.158a.75.75 0 1 1 1.08-1.04l5.25 5.5a.75.75 0 0 1 0 1.04l-5.25 5.5a.75.75 0 1 1-1.08-1.04l3.96-4.158H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    `}),args:{label:"Next",severity:"primary",iconPos:"right"}};var x,S,B;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    severity: 'primary'
  }
}`,...(B=(S=a.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var O,f,I;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    severity: 'secondary'
  }
}`,...(I=(f=t.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var D,P,T;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Danger',
    severity: 'danger'
  }
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var L,Z,M;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Outlined / Primary',
  args: {
    label: 'Outlined Primary',
    severity: 'primary',
    variant: 'outlined'
  }
}`,...(M=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}};var C,A,W;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Outlined / Secondary',
  args: {
    label: 'Outlined Secondary',
    severity: 'secondary',
    variant: 'outlined'
  }
}`,...(W=(A=o.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var z,R,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Outlined / Danger',
  args: {
    label: 'Outlined Danger',
    severity: 'danger',
    variant: 'outlined'
  }
}`,...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var H,N,_;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Text / Primary',
  args: {
    label: 'Text Primary',
    severity: 'primary',
    variant: 'text'
  }
}`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var j,k,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Text / Secondary',
  args: {
    label: 'Text Secondary',
    severity: 'secondary',
    variant: 'text'
  }
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var F,G,J;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Text / Danger',
  args: {
    label: 'Text Danger',
    severity: 'danger',
    variant: 'text'
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" aria-hidden="true">
            <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
          </svg>
        </template>
      </Button>
    \`
  }),
  args: {
    severity: 'primary',
    ariaLabel: 'More options'
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Icon Only / Small',
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    \`
  }),
  args: {
    severity: 'primary',
    size: 'small',
    ariaLabel: 'Add item'
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,re;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Icon Only / Outlined',
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" aria-hidden="true">
            <path d="M5.433 13.917l1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
          </svg>
        </template>
      </Button>
    \`
  }),
  args: {
    severity: 'secondary',
    variant: 'outlined',
    ariaLabel: 'Edit'
  }
}`,...(re=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,ne;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    severity: 'primary',
    size: 'small'
  }
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,le;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Large',
    severity: 'primary',
    size: 'large'
  }
}`,...(le=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ce,me;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    severity: 'primary',
    disabled: true
  }
}`,...(me=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,pe,ue;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Loading',
    severity: 'primary',
    loading: true
  }
}`,...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,ve,ye;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'With Icon / Left',
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    \`
  }),
  args: {
    label: 'Add Item',
    severity: 'primary'
  }
}`,...(ye=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var he,we,be;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'With Icon / Right',
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-4.158a.75.75 0 1 1 1.08-1.04l5.25 5.5a.75.75 0 0 1 0 1.04l-5.25 5.5a.75.75 0 1 1-1.08-1.04l3.96-4.158H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
          </svg>
        </template>
      </Button>
    \`
  }),
  args: {
    label: 'Next',
    severity: 'primary',
    iconPos: 'right'
  }
}`,...(be=(we=b.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};const Ze=["Primary","Secondary","Danger","OutlinedPrimary","OutlinedSecondary","OutlinedDanger","TextPrimary","TextSecondary","TextDanger","IconOnly","IconOnlySmall","IconOnlyOutlined","Small","Large","Disabled","Loading","WithIconLeft","WithIconRight"];export{n as Danger,y as Disabled,d as IconOnly,u as IconOnlyOutlined,p as IconOnlySmall,v as Large,h as Loading,l as OutlinedDanger,s as OutlinedPrimary,o as OutlinedSecondary,a as Primary,t as Secondary,g as Small,m as TextDanger,i as TextPrimary,c as TextSecondary,w as WithIconLeft,b as WithIconRight,Ze as __namedExportsOrder,Le as default};
