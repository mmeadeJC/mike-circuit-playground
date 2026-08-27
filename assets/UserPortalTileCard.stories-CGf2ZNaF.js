import{r as w}from"./iframe--pVyazG9.js";import{_ as s}from"./UserPortalTileCard-Ce00_aPv.js";import"./preload-helper-Dp1pzeXC.js";import"./LockClosedIcon-BtPlAas5.js";import"./StarIcon-6lIDDNkq.js";const D={title:"Circuit DS/Custom Components/UserPortalTileCard",component:s,parameters:{layout:"padded"},argTypes:{label:{control:"text"},logoSrc:{control:"text"},favorite:{control:"boolean"},pinned:{control:"boolean"},showPin:{control:"boolean"}}},e={args:{label:"Kubernetes EKS Cluster 5",logoSrc:"/logos/os/kubernetes.png",favorite:!1,pinned:!1},render:r=>({components:{UserPortalTileCard:s},setup(){return{args:r}},template:`
      <div class="w-48">
        <UserPortalTileCard v-bind="args" />
      </div>
    `})},o={args:{label:"Amazon Linux Bastion 23",logoSrc:"/logos/aws.png",favorite:!0},render:e.render},t={args:{label:"Custom Appliance 1",favorite:!1},render:e.render},a={render:()=>({components:{UserPortalTileCard:s},setup(){const r=w([{id:"1",label:"Amazon Linux Bastion 23",logoSrc:"/logos/aws.png",favorite:!0},{id:"2",label:"Red Hat Enterprise Linux Prod",logoSrc:"/logos/os/redhat.png",favorite:!0},{id:"3",label:"Debian Apt Mirror 6",logoSrc:"/logos/os/debian.png",favorite:!0},{id:"4",label:"Kubernetes EKS Cluster 5",logoSrc:"/logos/os/kubernetes.png",favorite:!0},{id:"5",label:"Custom Appliance 1",favorite:!1}]);function C(x){const l=r.value.find(P=>P.id===x);l&&(l.favorite=!l.favorite)}return{tiles:r,toggleFavorite:C}},template:`
      <div class="grid grid-cols-2 gap-md sm:grid-cols-3 md:grid-cols-5 max-w-[1280px]">
        <UserPortalTileCard
          v-for="tile in tiles"
          :key="tile.id"
          :label="tile.label"
          :logo-src="tile.logoSrc"
          :favorite="tile.favorite"
          @toggle-favorite="toggleFavorite(tile.id)"
        />
      </div>
    `})};var i,n,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Kubernetes EKS Cluster 5',
    logoSrc: '/logos/os/kubernetes.png',
    favorite: false,
    pinned: false
  },
  render: args => ({
    components: {
      UserPortalTileCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-48">
        <UserPortalTileCard v-bind="args" />
      </div>
    \`
  })
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var g,c,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Amazon Linux Bastion 23',
    logoSrc: '/logos/aws.png',
    favorite: true
  },
  render: Default.render
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Custom Appliance 1',
    favorite: false
  },
  render: Default.render
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var v,b,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UserPortalTileCard
    },
    setup() {
      const tiles = ref([{
        id: '1',
        label: 'Amazon Linux Bastion 23',
        logoSrc: '/logos/aws.png',
        favorite: true
      }, {
        id: '2',
        label: 'Red Hat Enterprise Linux Prod',
        logoSrc: '/logos/os/redhat.png',
        favorite: true
      }, {
        id: '3',
        label: 'Debian Apt Mirror 6',
        logoSrc: '/logos/os/debian.png',
        favorite: true
      }, {
        id: '4',
        label: 'Kubernetes EKS Cluster 5',
        logoSrc: '/logos/os/kubernetes.png',
        favorite: true
      }, {
        id: '5',
        label: 'Custom Appliance 1',
        favorite: false
      }]);
      function toggleFavorite(id: string) {
        const tile = tiles.value.find(entry => entry.id === id);
        if (tile) tile.favorite = !tile.favorite;
      }
      return {
        tiles,
        toggleFavorite
      };
    },
    template: \`
      <div class="grid grid-cols-2 gap-md sm:grid-cols-3 md:grid-cols-5 max-w-[1280px]">
        <UserPortalTileCard
          v-for="tile in tiles"
          :key="tile.id"
          :label="tile.label"
          :logo-src="tile.logoSrc"
          :favorite="tile.favorite"
          @toggle-favorite="toggleFavorite(tile.id)"
        />
      </div>
    \`
  })
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const E=["Default","Favorited","NoLogo","GridPreview"];export{e as Default,o as Favorited,a as GridPreview,t as NoLogo,E as __namedExportsOrder,D as default};
