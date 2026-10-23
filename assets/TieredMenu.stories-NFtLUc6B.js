import{s as o}from"./index-B1VXYqPb.js";import{s as d}from"./index-DGRV0ejT.js";import{r as g}from"./iframe-CrzTiCu6.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-DpHaaPKG.js";import"./index-BRT9CP7z.js";import"./index-n-Vy3yQf.js";import"./index-CyFmKK29.js";import"./index-br2uRJO8.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./preload-helper-Dp1pzeXC.js";const O={title:"Circuit DS/Components/TieredMenu",component:o,tags:["autodocs"]},l=[{label:"File",items:[{label:"New",icon:"pi pi-plus"},{label:"Open",icon:"pi pi-folder-open"},{separator:!0},{label:"Export",icon:"pi pi-upload"}]},{label:"Edit",items:[{label:"Undo",icon:"pi pi-undo"},{label:"Redo",icon:"pi pi-refresh"}]}],e={render:t=>({components:{TieredMenu:o},setup(){return{args:t,menuItems:l}},template:'<TieredMenu :model="menuItems" />'})},n={render:t=>({components:{TieredMenu:o,Button:d},setup(){const r=g();return{args:t,menuItems:l,menu:r,toggle:c=>r.value.toggle(c)}},template:`
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
