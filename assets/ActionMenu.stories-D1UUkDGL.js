import{r as s,m as p}from"./iframe-wHZiWscM.js";import{s as l}from"./index-sD1-d5gW.js";import{r as C}from"./PencilIcon-wBp-c_x7.js";import{r as T}from"./DocumentDuplicateIcon-B21hUKr1.js";import{r as W}from"./TrashIcon-UFJmnL45.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";const o={},Z={title:"Circuit DS/Components/ActionMenu",component:o,tags:["autodocs"],argTypes:{items:{control:"object"},popup:{control:"boolean"},menuClass:{control:"text"}}},w=[{id:"edit",label:"Edit"},{id:"duplicate",label:"Duplicate"},{id:"delete",label:"Delete"}],O=[{id:"edit",label:"Edit",icon:p(C)},{id:"duplicate",label:"Duplicate",icon:p(T)},{id:"delete",label:"Delete",icon:p(W),iconSeverity:"danger"}],U=[{id:"suspend",label:"Suspend User",group:"User",groupOrder:1},{id:"reset-mfa",label:"Reset MFA",group:"User",groupOrder:1},{id:"run-command",label:"Run a Command",group:"Device",groupOrder:2},{id:"restart",label:"Restart Devices",group:"Device",groupOrder:2}],G=[{id:"csv",label:"Export as CSV"},{id:"api-docs",label:"API Documentation",isExternal:!0,url:"https://docs.example.com"}],_=[{id:"edit",label:"Edit"},{id:"duplicate",label:"Duplicate",disabled:!0},{id:"delete",label:"Delete"}],j=[{id:"edit",label:"Edit this item with a very long label that might wrap"},{id:"duplicate",label:"Duplicate and create a copy"},{id:"delete",label:"Delete permanently"}],c={render:e=>({components:{ActionMenu:o,Button:l},setup(){const n=s(null);return{args:e,menuRef:n,basicItems:w,onSelect:t=>{console.log("Selected:",t)}}},template:`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="basicItems" @select="onSelect" />
      </div>
    `}),args:{}},i={render:e=>({components:{ActionMenu:o,Button:l},setup(){const n=s(null);return{args:e,menuRef:n,itemsWithIcons:O,onSelect:t=>{console.log("Selected:",t)}}},template:`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="itemsWithIcons" @select="onSelect" />
      </div>
    `}),args:{}},a={render:e=>({components:{ActionMenu:o,Button:l},setup(){const n=s(null);return{args:e,menuRef:n,groupedItems:U,onSelect:t=>{console.log("Selected:",t)}}},template:`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="groupedItems" @select="onSelect" />
      </div>
    `}),args:{}},u={render:e=>({components:{ActionMenu:o,Button:l},setup(){const n=s(null);return{args:e,menuRef:n,externalLinkItems:G,onSelect:t=>{console.log("Selected:",t)}}},template:`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="externalLinkItems" @select="onSelect" />
      </div>
    `}),args:{}},m={render:e=>({components:{ActionMenu:o,Button:l},setup(){const n=s(null);return{args:e,menuRef:n,disabledItems:_,onSelect:t=>{console.log("Selected:",t)}}},template:`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="disabledItems" @select="onSelect" />
      </div>
    `}),args:{}},d={render:e=>({components:{ActionMenu:o,Button:l},setup(){const n=s(null);return{args:e,menuRef:n,longLabelItems:j,onSelect:t=>{console.log("Selected:",t)}}},template:`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="longLabelItems" menuClass="w-[180px]" @select="onSelect" />
      </div>
    `}),args:{}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ActionMenu,
      Button
    },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: {
        id: string;
        label: string;
      }) => {
        console.log('Selected:', item);
      };
      return {
        args,
        menuRef,
        basicItems,
        onSelect
      };
    },
    template: \`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="basicItems" @select="onSelect" />
      </div>
    \`
  }),
  args: {}
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,b,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ActionMenu,
      Button
    },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: {
        id: string;
        label: string;
      }) => {
        console.log('Selected:', item);
      };
      return {
        args,
        menuRef,
        itemsWithIcons,
        onSelect
      };
    },
    template: \`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="itemsWithIcons" @select="onSelect" />
      </div>
    \`
  }),
  args: {}
}`,...(R=(b=i.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var y,A,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ActionMenu,
      Button
    },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: {
        id: string;
        label: string;
      }) => {
        console.log('Selected:', item);
      };
      return {
        args,
        menuRef,
        groupedItems,
        onSelect
      };
    },
    template: \`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="groupedItems" @select="onSelect" />
      </div>
    \`
  }),
  args: {}
}`,...(I=(A=a.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var M,B,k;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ActionMenu,
      Button
    },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: {
        id: string;
        label: string;
      }) => {
        console.log('Selected:', item);
      };
      return {
        args,
        menuRef,
        externalLinkItems,
        onSelect
      };
    },
    template: \`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="externalLinkItems" @select="onSelect" />
      </div>
    \`
  }),
  args: {}
}`,...(k=(B=u.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var D,x,L;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ActionMenu,
      Button
    },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: {
        id: string;
        label: string;
      }) => {
        console.log('Selected:', item);
      };
      return {
        args,
        menuRef,
        disabledItems,
        onSelect
      };
    },
    template: \`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="disabledItems" @select="onSelect" />
      </div>
    \`
  }),
  args: {}
}`,...(L=(x=m.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var $,h,E;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ActionMenu,
      Button
    },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: {
        id: string;
        label: string;
      }) => {
        console.log('Selected:', item);
      };
      return {
        args,
        menuRef,
        longLabelItems,
        onSelect
      };
    },
    template: \`
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="longLabelItems" menuClass="w-[180px]" @select="onSelect" />
      </div>
    \`
  }),
  args: {}
}`,...(E=(h=d.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const ee=["Basic","WithIcons","GroupedItems","ExternalLinks","DisabledItems","LongLabels"];export{c as Basic,m as DisabledItems,u as ExternalLinks,a as GroupedItems,d as LongLabels,i as WithIcons,ee as __namedExportsOrder,Z as default};
