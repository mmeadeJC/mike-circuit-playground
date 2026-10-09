import{m as y,r as W}from"./iframe-DMCY07cZ.js";import{s as x}from"./index-C8jYejGu.js";import"./RichText.vue-CvF5yRyM.js";import{_ as n}from"./PageHeader.vue-C3zDDtuT.js";import{r as B}from"./ServerIcon-CcQHYU1w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DA5-wtQK.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-Csz9fdiB.js";import"./index-ZhWAdK_X.js";import"./index-Bx337-gk.js";import"./index-CMmLDw0_.js";import"./index-ZFjHbOyq.js";import"./index-w2uGKA1Z.js";import"./Dropdown.vue--UM-sfQu.js";import"./index-I-4AEmq6.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-4qDJp6e0.js";import"./EllipsisHorizontalIcon-Dntkn-if.js";const V={title:"Circuit DS/Components/PageHeader",component:n,tags:["autodocs"],argTypes:{title:{control:"text"},subtitleText:{control:"text"},tabsScrollable:{control:"boolean"},tabsWithPadding:{control:"boolean"}}},_=[{label:"Tab 1",value:"tab1"},{label:"Tab 2",value:"tab2"},{label:"Tab 3",value:"tab3"}],e={args:{title:"Page Title"}},t={args:{title:"Page Title",subtitleText:"Page description"}},a={args:{title:"Page Title",icon:y(B)}},r={render:s=>({components:{PageHeader:n,Button:x},setup(){return{args:s}},template:`
      <PageHeader v-bind="args">
        <template #actions>
          <Button label="Secondary" severity="secondary" variant="outlined" />
          <Button label="Primary" />
        </template>
      </PageHeader>
    `}),args:{title:"Page Title"}},o={render:s=>({components:{PageHeader:n},setup(){const h=W("tab1");return{args:s,activeTab:h,sampleTabs:_}},template:`
      <PageHeader
        v-bind="args"
        :tabs="sampleTabs"
        v-model:activeTab="activeTab"
      />
    `}),args:{title:"Page Title"}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Page Title'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    subtitleText: 'Page description'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,b,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    icon: markRaw(ServerIcon)
  }
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var T,P,v;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      PageHeader,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <PageHeader v-bind="args">
        <template #actions>
          <Button label="Secondary" severity="secondary" variant="outlined" />
          <Button label="Primary" />
        </template>
      </PageHeader>
    \`
  }),
  args: {
    title: 'Page Title'
  }
}`,...(v=(P=r.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var S,H,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      PageHeader
    },
    setup() {
      const activeTab = ref('tab1');
      return {
        args,
        activeTab,
        sampleTabs
      };
    },
    template: \`
      <PageHeader
        v-bind="args"
        :tabs="sampleTabs"
        v-model:activeTab="activeTab"
      />
    \`
  }),
  args: {
    title: 'Page Title'
  }
}`,...(f=(H=o.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};const X=["Default","WithSubtitle","WithIcon","WithActions","WithTabs"];export{e as Default,r as WithActions,a as WithIcon,t as WithSubtitle,o as WithTabs,X as __namedExportsOrder,V as default};
