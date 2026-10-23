import{m as y,r as W}from"./iframe-DuzLv9Pd.js";import{s as x}from"./index-J_Bj38AC.js";import"./RichText.vue-D4MvUk45.js";import{_ as n}from"./PageHeader.vue-DtI1h7PV.js";import{r as B}from"./ServerIcon-BVfrwoi6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-toZiH_.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./index-BiLRIlNb.js";import"./index-BEZ2S-VF.js";import"./index-CO-G9M_W.js";import"./Dropdown.vue-BvGCjloM.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-CjiEPaTZ.js";import"./EllipsisHorizontalIcon-CpSAr9zQ.js";const V={title:"Circuit DS/Components/PageHeader",component:n,tags:["autodocs"],argTypes:{title:{control:"text"},subtitleText:{control:"text"},tabsScrollable:{control:"boolean"},tabsWithPadding:{control:"boolean"}}},_=[{label:"Tab 1",value:"tab1"},{label:"Tab 2",value:"tab2"},{label:"Tab 3",value:"tab3"}],e={args:{title:"Page Title"}},t={args:{title:"Page Title",subtitleText:"Page description"}},a={args:{title:"Page Title",icon:y(B)}},r={render:s=>({components:{PageHeader:n,Button:x},setup(){return{args:s}},template:`
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
