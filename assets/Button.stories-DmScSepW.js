import{s as o}from"./index-BKr2PyJj.js";import{r as u}from"./TrashIcon-zSr6WN2U.js";import{r as P}from"./PlusIcon-B94kIdrt.js";import"./iframe-D7BbHDbG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";const A={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Actions/Button",component:o,parameters:{layout:"padded"}},n={name:"Primary action",render:()=>({components:{PvButton:o},template:`
      <PvButton label="Save Policy" />
    `})},e={name:"Secondary outlined",render:()=>({components:{PvButton:o},template:`
      <PvButton label="Add row" severity="secondary" variant="outlined" size="small" />
    `})},t={name:"Icon only row actions",render:()=>({components:{PvButton:o,PlusIcon:P,TrashIcon:u},template:`
      <div class="flex items-center gap-sm">
        <PvButton severity="secondary" variant="text" size="small" aria-label="Add row">
          <template #icon="iconProps">
            <PlusIcon :class="iconProps.class" />
          </template>
        </PvButton>
        <PvButton severity="secondary" variant="text" size="small" aria-label="Remove row">
          <template #icon="iconProps">
            <TrashIcon :class="iconProps.class" />
          </template>
        </PvButton>
      </div>
    `})};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Primary action',
  render: () => ({
    components: {
      PvButton: Button
    },
    template: \`
      <PvButton label="Save Policy" />
    \`
  })
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Secondary outlined',
  render: () => ({
    components: {
      PvButton: Button
    },
    template: \`
      <PvButton label="Add row" severity="secondary" variant="outlined" size="small" />
    \`
  })
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Icon only row actions',
  render: () => ({
    components: {
      PvButton: Button,
      PlusIcon,
      TrashIcon
    },
    template: \`
      <div class="flex items-center gap-sm">
        <PvButton severity="secondary" variant="text" size="small" aria-label="Add row">
          <template #icon="iconProps">
            <PlusIcon :class="iconProps.class" />
          </template>
        </PvButton>
        <PvButton severity="secondary" variant="text" size="small" aria-label="Remove row">
          <template #icon="iconProps">
            <TrashIcon :class="iconProps.class" />
          </template>
        </PvButton>
      </div>
    \`
  })
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const O=["Primary","SecondaryOutlined","IconOnly"];export{t as IconOnly,n as Primary,e as SecondaryOutlined,O as __namedExportsOrder,A as default};
