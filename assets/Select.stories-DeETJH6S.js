import{r as a}from"./iframe-D7BbHDbG.js";import{s as o}from"./index-XbhyUeFS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BaidBBYU.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-5dj8dpAI.js";import"./index-0gxlrFf7.js";import"./index-CiXhdmRB.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-ZhWAdK_X.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";import"./index-1reqc7Wl.js";const P={title:"Circuit DS/Components/Select",component:o,tags:["autodocs"]},i=[{name:"Option 1",code:"1"},{name:"Option 2",code:"2"},{name:"Option 3",code:"3"}],O=[{label:"Group A",items:[{name:"A1",code:"a1"},{name:"A2",code:"a2"}]},{label:"Group B",items:[{name:"B1",code:"b1"},{name:"B2",code:"b2"}]}],l={render:e=>({components:{Select:o},setup(){const n=a(null);return{args:e,value:n}},template:`
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Select an option"
        aria-label="Select an option"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `}),args:{options:i}},t={render:e=>({components:{Select:o},setup(){const n=a(null);return{args:e,value:n}},template:`
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Small select"
        size="small"
        aria-label="Small select"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `}),args:{options:i}},r={render:e=>({components:{Select:o},setup(){const n=a(null);return{args:e,value:n}},template:`
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Search options..."
        filter
        aria-label="Search options"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `}),args:{options:i}},s={render:e=>({components:{Select:o},setup(){const n=a(null);return{args:e,value:n}},template:`
      <Select
        v-model="value"
        :options="args.options"
        optionGroupLabel="label"
        optionGroupChildren="items"
        optionLabel="name"
        placeholder="Select from groups"
        aria-label="Select from groups"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `}),args:{options:O}},p={render:e=>({components:{Select:o},setup(){const n=a(null);return{args:e,value:n}},template:`
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Disabled select"
        disabled
        aria-label="Disabled select"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `}),args:{options:i}};var c,m,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup() {
      const value = ref(null);
      return {
        args,
        value
      };
    },
    template: \`
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Select an option"
        aria-label="Select an option"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    \`
  }),
  args: {
    options
  }
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,g,S;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup() {
      const value = ref(null);
      return {
        args,
        value
      };
    },
    template: \`
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Small select"
        size="small"
        aria-label="Small select"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    \`
  }),
  args: {
    options
  }
}`,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var b,v,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup() {
      const value = ref(null);
      return {
        args,
        value
      };
    },
    template: \`
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Search options..."
        filter
        aria-label="Search options"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    \`
  }),
  args: {
    options
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,w,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup() {
      const value = ref(null);
      return {
        args,
        value
      };
    },
    template: \`
      <Select
        v-model="value"
        :options="args.options"
        optionGroupLabel="label"
        optionGroupChildren="items"
        optionLabel="name"
        placeholder="Select from groups"
        aria-label="Select from groups"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    \`
  }),
  args: {
    options: groupedOptions
  }
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var L,D,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select
    },
    setup() {
      const value = ref(null);
      return {
        args,
        value
      };
    },
    template: \`
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Disabled select"
        disabled
        aria-label="Disabled select"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    \`
  }),
  args: {
    options
  }
}`,...(G=(D=p.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const Q=["Default","SmallSize","WithFilter","GroupedOptions","Disabled"];export{l as Default,p as Disabled,s as GroupedOptions,t as SmallSize,r as WithFilter,Q as __namedExportsOrder,P as default};
