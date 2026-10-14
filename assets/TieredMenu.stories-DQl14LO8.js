import{s as o}from"./index-F_qZZ5l1.js";import{s as d}from"./index-CtfEZ-mH.js";import{r as g}from"./iframe-BFKWv3KJ.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-DUVhZ73h.js";import"./index-DICFt-SZ.js";import"./index-BMkyGRgX.js";import"./index-h_LiPJ46.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./preload-helper-Dp1pzeXC.js";const O={title:"Circuit DS/Components/TieredMenu",component:o,tags:["autodocs"]},l=[{label:"File",items:[{label:"New",icon:"pi pi-plus"},{label:"Open",icon:"pi pi-folder-open"},{separator:!0},{label:"Export",icon:"pi pi-upload"}]},{label:"Edit",items:[{label:"Undo",icon:"pi pi-undo"},{label:"Redo",icon:"pi pi-refresh"}]}],e={render:t=>({components:{TieredMenu:o},setup(){return{args:t,menuItems:l}},template:'<TieredMenu :model="menuItems" />'})},n={render:t=>({components:{TieredMenu:o,Button:d},setup(){const r=g();return{args:t,menuItems:l,menu:r,toggle:c=>r.value.toggle(c)}},template:`
      <div>
        <Button label="Show Menu" @click="toggle" />
        <TieredMenu ref="menu" :model="menuItems" popup />
      </div>
    `})};var p,s,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TieredMenu
    },
    setup() {
      return {
        args,
        menuItems
      };
    },
    template: '<TieredMenu :model="menuItems" />'
  })
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var i,u,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TieredMenu,
      Button
    },
    setup() {
      const menu = ref();
      const toggle = (event: Event) => menu.value.toggle(event);
      return {
        args,
        menuItems,
        menu,
        toggle
      };
    },
    template: \`
      <div>
        <Button label="Show Menu" @click="toggle" />
        <TieredMenu ref="menu" :model="menuItems" popup />
      </div>
    \`
  })
}`,...(a=(u=n.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const P=["Inline","Popup"];export{e as Inline,n as Popup,P as __namedExportsOrder,O as default};
