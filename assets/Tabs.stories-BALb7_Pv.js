import{r as w}from"./iframe-DSI7I_YQ.js";import{b as l,a as T,s as e}from"./index-uwcmB5ii.js";import{s as r,a as p}from"./index-DhPLHvCN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cm1NVGCj.js";import"./index-Ck3k_J8K.js";import"./index-ZhWAdK_X.js";import"./index-B89_K_JM.js";import"./index-Cg08wAe5.js";import"./index-KUyW3X8b.js";const U={title:"Circuit DS/Components/Tabs",component:e,tags:["autodocs"]},n={render:a=>({components:{Tabs:e,TabList:T,Tab:l,TabPanels:p,TabPanel:r},setup(){return{args:a}},template:`
      <Tabs v-bind="args" value="0">
        <TabList>
          <Tab value="0">Overview</Tab>
          <Tab value="1">Settings</Tab>
          <Tab value="2">Members</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">Overview content goes here.</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Settings content goes here.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Members content goes here.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `}),args:{}},t={render:a=>({components:{Tabs:e,TabList:T,Tab:l,TabPanels:p,TabPanel:r},setup(){return{args:a}},template:`
      <Tabs v-bind="args" value="0">
        <TabList withPadding>
          <Tab value="0">Overview</Tab>
          <Tab value="1">Settings</Tab>
          <Tab value="2">Members</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">TabList with withPadding prop (24px horizontal padding).</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Settings content.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Members content.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `}),args:{}},s={render:a=>({components:{Tabs:e,TabList:T,Tab:l,TabPanels:p,TabPanel:r},setup(){return{args:a}},template:`
      <Tabs v-bind="args" value="0" scrollable>
        <TabList>
          <Tab value="0">Overview</Tab>
          <Tab value="1">Users</Tab>
          <Tab value="2">Devices</Tab>
          <Tab value="3">Policies</Tab>
          <Tab value="4">Applications</Tab>
          <Tab value="5">Groups</Tab>
          <Tab value="6">Reports</Tab>
          <Tab value="7">Audit Log</Tab>
          <Tab value="8">Integrations</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">Overview panel content.</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Users panel.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Devices panel.</p>
          </TabPanel>
          <TabPanel value="3">
            <p class="text-body-md text-neutral-base p-md">Policies panel.</p>
          </TabPanel>
          <TabPanel value="4">
            <p class="text-body-md text-neutral-base p-md">Applications panel.</p>
          </TabPanel>
          <TabPanel value="5">
            <p class="text-body-md text-neutral-base p-md">Groups panel.</p>
          </TabPanel>
          <TabPanel value="6">
            <p class="text-body-md text-neutral-base p-md">Reports panel.</p>
          </TabPanel>
          <TabPanel value="7">
            <p class="text-body-md text-neutral-base p-md">Audit Log panel.</p>
          </TabPanel>
          <TabPanel value="8">
            <p class="text-body-md text-neutral-base p-md">Integrations panel.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `}),args:{}},b={render:a=>({components:{Tabs:e,TabList:T,Tab:l,TabPanels:p,TabPanel:r},setup(){const h=w("0");return{args:a,value:h}},template:`
      <Tabs v-bind="args" v-model:value="value">
        <TabList>
          <Tab value="0">Tab 1</Tab>
          <Tab value="1">Tab 2</Tab>
          <Tab value="2">Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">Active tab: {{ value }}</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Active tab: {{ value }}</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Active tab: {{ value }}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    `}),args:{}};var u,o,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tabs,
      TabList,
      Tab,
      TabPanels,
      TabPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Tabs v-bind="args" value="0">
        <TabList>
          <Tab value="0">Overview</Tab>
          <Tab value="1">Settings</Tab>
          <Tab value="2">Members</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">Overview content goes here.</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Settings content goes here.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Members content goes here.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    \`
  }),
  args: {}
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,v,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tabs,
      TabList,
      Tab,
      TabPanels,
      TabPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Tabs v-bind="args" value="0">
        <TabList withPadding>
          <Tab value="0">Overview</Tab>
          <Tab value="1">Settings</Tab>
          <Tab value="2">Members</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">TabList with withPadding prop (24px horizontal padding).</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Settings content.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Members content.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    \`
  }),
  args: {}
}`,...(i=(v=t.parameters)==null?void 0:v.docs)==null?void 0:i.source}}};var c,P,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tabs,
      TabList,
      Tab,
      TabPanels,
      TabPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Tabs v-bind="args" value="0" scrollable>
        <TabList>
          <Tab value="0">Overview</Tab>
          <Tab value="1">Users</Tab>
          <Tab value="2">Devices</Tab>
          <Tab value="3">Policies</Tab>
          <Tab value="4">Applications</Tab>
          <Tab value="5">Groups</Tab>
          <Tab value="6">Reports</Tab>
          <Tab value="7">Audit Log</Tab>
          <Tab value="8">Integrations</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">Overview panel content.</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Users panel.</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Devices panel.</p>
          </TabPanel>
          <TabPanel value="3">
            <p class="text-body-md text-neutral-base p-md">Policies panel.</p>
          </TabPanel>
          <TabPanel value="4">
            <p class="text-body-md text-neutral-base p-md">Applications panel.</p>
          </TabPanel>
          <TabPanel value="5">
            <p class="text-body-md text-neutral-base p-md">Groups panel.</p>
          </TabPanel>
          <TabPanel value="6">
            <p class="text-body-md text-neutral-base p-md">Reports panel.</p>
          </TabPanel>
          <TabPanel value="7">
            <p class="text-body-md text-neutral-base p-md">Audit Log panel.</p>
          </TabPanel>
          <TabPanel value="8">
            <p class="text-body-md text-neutral-base p-md">Integrations panel.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    \`
  }),
  args: {}
}`,...(x=(P=s.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var g,y,L;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Tabs,
      TabList,
      Tab,
      TabPanels,
      TabPanel
    },
    setup() {
      const value = ref('0');
      return {
        args,
        value
      };
    },
    template: \`
      <Tabs v-bind="args" v-model:value="value">
        <TabList>
          <Tab value="0">Tab 1</Tab>
          <Tab value="1">Tab 2</Tab>
          <Tab value="2">Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="text-body-md text-neutral-base p-md">Active tab: {{ value }}</p>
          </TabPanel>
          <TabPanel value="1">
            <p class="text-body-md text-neutral-base p-md">Active tab: {{ value }}</p>
          </TabPanel>
          <TabPanel value="2">
            <p class="text-body-md text-neutral-base p-md">Active tab: {{ value }}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    \`
  }),
  args: {}
}`,...(L=(y=b.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const $=["Default","WithPadding","Scrollable","Controlled"];export{b as Controlled,n as Default,s as Scrollable,t as WithPadding,$ as __namedExportsOrder,U as default};
