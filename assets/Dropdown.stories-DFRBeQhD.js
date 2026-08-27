import{s as h}from"./index-BKr2PyJj.js";import"./iframe-D7BbHDbG.js";import{_ as v}from"./Dropdown.vue-D2xWW_V3.js";import"./RichText.vue-1XZLRn0K.js";import{r as C}from"./EllipsisVerticalIcon-DuCRKzBR.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DCVTeUli.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-CiXhdmRB.js";const K={title:"Circuit DS/Components/Dropdown",component:v,tags:["autodocs"],argTypes:{filter:{control:"boolean"},placement:{control:"select",options:["bottom","top","auto"]}}},a=[{label:"Edit",value:"edit"},{label:"Duplicate",value:"duplicate"},{label:"Delete",value:"delete"}],_=[{label:"Actions",items:[{label:"Edit",value:"edit"},{label:"Duplicate",value:"duplicate"}]},{label:"Danger",items:[{label:"Delete",value:"delete"}]}],e={args:{label:"Actions",options:a}},o={args:{label:"Actions",options:a,icon:C}},t={args:{label:"Actions",options:a,filter:!0}},r={render:S=>({components:{Dropdown:v,Button:h},setup(){return{args:S,defaultOptions:a}},template:`
      <Dropdown
        v-bind="args"
        :options="defaultOptions"
      >
        <template #trigger="{ isOpen, toggleDropdown }>
          <Button
            :label="isOpen ? 'Close' : 'Open'"
            @click="toggleDropdown"
          />
        </template>
      </Dropdown>
    `}),args:{}},s={args:{label:"Actions",groupedOptions:_}};var n,p,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    options: defaultOptions
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,c,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    options: defaultOptions,
    icon: EllipsisVerticalIcon
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    options: defaultOptions,
    filter: true
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,D,O;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Dropdown,
      Button
    },
    setup() {
      return {
        args,
        defaultOptions
      };
    },
    template: \`
      <Dropdown
        v-bind="args"
        :options="defaultOptions"
      >
        <template #trigger="{ isOpen, toggleDropdown }>
          <Button
            :label="isOpen ? 'Close' : 'Open'"
            @click="toggleDropdown"
          />
        </template>
      </Dropdown>
    \`
  }),
  args: {}
}`,...(O=(D=r.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var f,w,A;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    groupedOptions
  }
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const L=["Default","WithIcon","WithSearch","CustomTrigger","GroupedOptions"];export{r as CustomTrigger,e as Default,s as GroupedOptions,o as WithIcon,t as WithSearch,L as __namedExportsOrder,K as default};
