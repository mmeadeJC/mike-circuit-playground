import{d as E,V as P,X,o as g,h as b,w as a,u as s,n as v,p as W,e as q,f as C,C as G,a as H,v as J,b as K,k as r,r as m}from"./iframe-D7BbHDbG.js";import{s as k}from"./index-BKr2PyJj.js";import"./RichText.vue-1XZLRn0K.js";import{s as M,a as Q}from"./index-CiXhdmRB.js";import{s as R}from"./index-XbhyUeFS.js";import{u as U}from"./useContainer-D49SELwj.js";import{r as j}from"./Cog6ToothIcon-DbA3VXm8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./index-BaidBBYU.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-0gxlrFf7.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";const Y="p-3 border-t-1 border-neutral-default_alpha text-sm text-semibold text-neutral-subtle",l=E({name:"SelectWithSlots",__name:"SelectWithSlots",props:{invalid:{type:Boolean},disabled:{type:Boolean},size:{}},setup(t){const{containerElement:n}=U(),o=t,S=P(),F=r(()=>S.appendTo!==void 0?S.appendTo:o.appendTo!==void 0?o.appendTo:n.value),V=r(()=>{const e=o.disabled?"text-field-icon-disabled":"text-field-icon-base";let h="w-5 h-5";return o.size==="small"&&(h="w-4 h-4"),`${h} ${e}`}),D=r(()=>{let e="top-1.5! left-2!";return o.size==="small"&&(e="top-1! left-1.5!"),`absolute ${e}`}),N=r(()=>{let e="pl-8";return o.size==="small"&&(e="pl-7"),f.icon||(e=""),`min-w-63.5 ${e}`}),f=X();return(e,h)=>(g(),b(s(Q),{"data-test-id":e.$testId("icon-field")},{default:a(()=>[f.icon?(g(),b(s(M),{key:0,class:v(D.value)},{default:a(()=>[W(e.$slots,"icon",{iconClass:V.value})]),_:3},8,["class"])):q("",!0),C(s(R),K({...o,...s(S)},{"append-to":F.value,class:N.value,"data-test-id":e.$testId("select")}),G({filtericon:a(()=>[C(s(J))]),_:2},[f.footer?{name:"footer",fn:a(()=>[H("div",{class:v(Y)},[W(e.$slots,"footer")])]),key:"0"}:void 0]),1040,["append-to","class","data-test-id"])]),_:3},8,["data-test-id"]))}}),ye={title:"Circuit DS/Components/SelectWithSlots",component:l,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},u=[{name:"Option 1",code:"1"},{name:"Option 2",code:"2"},{name:"Option 3",code:"3"}],i={render:t=>({components:{SelectWithSlots:l},setup(){const n=m(null);return{args:t,selected:n,defaultOptions:u}},template:`
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        aria-label="Select an option"
        v-bind="args"
      />
    `}),args:{}},c={render:t=>({components:{SelectWithSlots:l,Cog6ToothIcon:j},setup(){const n=m(null);return{args:t,selected:n,defaultOptions:u}},template:`
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        aria-label="Select an option"
        v-bind="args"
      >
        <template #icon="{ iconClass }">
          <Cog6ToothIcon :class="iconClass" aria-hidden="true" />
        </template>
      </SelectWithSlots>
    `}),args:{}},p={render:t=>({components:{SelectWithSlots:l,Button:k},setup(){const n=m(null);return{args:t,selected:n,defaultOptions:u}},template:`
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        v-bind="args"
      >
        <template #footer>
          <Button label="Add new option" variant="text" severity="secondary" class="w-full justify-center" />
        </template>
      </SelectWithSlots>
    `}),args:{}},d={render:t=>({components:{SelectWithSlots:l,Cog6ToothIcon:j,Button:k},setup(){const n=m(null);return{args:t,selected:n,defaultOptions:u}},template:`
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        v-bind="args"
      >
        <template #icon="{ iconClass }">
          <Cog6ToothIcon :class="iconClass" />
        </template>
        <template #footer>
          <Button label="Add new option" variant="text" severity="secondary" class="w-full justify-center" />
        </template>
      </SelectWithSlots>
    `}),args:{}};var y,O,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectWithSlots
    },
    setup() {
      const selected = ref<{
        name: string;
        code: string;
      } | null>(null);
      return {
        args,
        selected,
        defaultOptions
      };
    },
    template: \`
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        aria-label="Select an option"
        v-bind="args"
      />
    \`
  }),
  args: {}
}`,...(I=(O=i.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var T,w,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectWithSlots,
      Cog6ToothIcon
    },
    setup() {
      const selected = ref<{
        name: string;
        code: string;
      } | null>(null);
      return {
        args,
        selected,
        defaultOptions
      };
    },
    template: \`
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        aria-label="Select an option"
        v-bind="args"
      >
        <template #icon="{ iconClass }">
          <Cog6ToothIcon :class="iconClass" aria-hidden="true" />
        </template>
      </SelectWithSlots>
    \`
  }),
  args: {}
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var $,x,L;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectWithSlots,
      Button
    },
    setup() {
      const selected = ref<{
        name: string;
        code: string;
      } | null>(null);
      return {
        args,
        selected,
        defaultOptions
      };
    },
    template: \`
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        v-bind="args"
      >
        <template #footer>
          <Button label="Add new option" variant="text" severity="secondary" class="w-full justify-center" />
        </template>
      </SelectWithSlots>
    \`
  }),
  args: {}
}`,...(L=(x=p.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var A,_,z;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectWithSlots,
      Cog6ToothIcon,
      Button
    },
    setup() {
      const selected = ref<{
        name: string;
        code: string;
      } | null>(null);
      return {
        args,
        selected,
        defaultOptions
      };
    },
    template: \`
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        v-bind="args"
      >
        <template #icon="{ iconClass }">
          <Cog6ToothIcon :class="iconClass" />
        </template>
        <template #footer>
          <Button label="Add new option" variant="text" severity="secondary" class="w-full justify-center" />
        </template>
      </SelectWithSlots>
    \`
  }),
  args: {}
}`,...(z=(_=d.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const Oe=["Default","WithIconSlot","WithFooterSlot","WithIconAndFooter"];export{i as Default,p as WithFooterSlot,d as WithIconAndFooter,c as WithIconSlot,Oe as __namedExportsOrder,ye as default};
