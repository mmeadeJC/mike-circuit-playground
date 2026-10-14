import{m as e}from"./iframe-8Q3g4suX.js";import"./RichText.vue-C1Ty82RV.js";import{_ as a}from"./AppNavigation.vue-DywdLFt4.js";import{r as b}from"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import{r as f}from"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import{r as I,a as g}from"./RocketLaunchIcon-BJK4NMZ4.js";import{r as v,a as M}from"./HomeIcon-yFRUSV7Z.js";import{r as A}from"./UserIcon-ShjzaHpT.js";import{r as h}from"./UsersIcon-Z2ifx08k.js";import{r as D}from"./UserGroupIcon-Ciz8NLc5.js";import{r as y}from"./ComputerDesktopIcon-DDj9bIO2.js";import{r as o}from"./ServerIcon-CmRi5VzS.js";import{r as N}from"./ShieldCheckIcon-W0AJus9F.js";import{r as $}from"./Cog6ToothIcon-cxmEYFc7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-DirUApOz.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-C6vF-uE7.js";import"./index-MkGR21B_.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./index-Rn1cm77L.js";const u=[{label:"Getting Started",leftIcon:e(I)},{label:"Home",leftIcon:e(v)},{label:"Alert",leftIcon:e(M),count:23},{label:"User Management",leftIcon:e(D),items:[{label:"Users",leftIcon:e(A)},{label:"User Groups",leftIcon:e(h)},{separator:!0},{label:"Active Directory"},{label:"Cloud Directories"},{label:"HR Directories"},{label:"Identity Provider"}]},{label:"Device Management",leftIcon:e(o),items:[{label:"Devices",leftIcon:e(y)},{label:"Device Groups",leftIcon:e(o)},{label:"Commands"},{label:"Asset Management",isNew:!0},{separator:!0},{label:"Policy Management"},{label:"Policy Groups"},{label:"Software Deployment"},{label:"MDM"}]},{label:"Security",leftIcon:e(N),items:[{label:"Conditional Access Policies"},{label:"Conditional List"},{label:"MFA Configurations"},{label:"Device Trust"}]},{label:"Insights",leftIcon:e(g),items:[{label:"Reports"},{label:"Directory Insights"}]},{label:"Settings",leftIcon:e($)}],d=[{label:"John Doe",itemType:"profile_compact",initials:"JD",name:"John Doe",items:[{label:"Admin IT",itemType:"profile_large",name:"Admin IT",email:"admin_it@company.com",initials:"AT"},{separator:!0},{label:"Logout",rightIcon:e(b)},{separator:!0},{label:"Change Password"},{label:"Launch User Portal",rightIcon:e(f)},{separator:!0},{label:"Billing"},{label:"My API Key"},{separator:!0},{label:"Use Old Navigation",itemType:"button"}]}],re={title:"Circuit DS/Components/AppNavigation",component:a,tags:["autodocs"]},r={render:n=>({components:{AppNavigation:a},setup(){return{args:n,menuItems:u,profileMenuItems:d}},template:`
      <div class="h-[600px] flex">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="home"
          :collapsible="true"
          :topNavToggle="true"
          v-bind="args"
        />
      </div>
    `}),args:{}},t={render:n=>({components:{AppNavigation:a},setup(){return{args:n,menuItems:u,profileMenuItems:d}},template:`
      <div class="h-[600px] flex">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="home"
          :collapsible="true"
          v-bind="args"
        />
      </div>
    `}),args:{}};var l,i,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AppNavigation
    },
    setup() {
      return {
        args,
        menuItems,
        profileMenuItems
      };
    },
    template: \`
      <div class="h-[600px] flex">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="home"
          :collapsible="true"
          :topNavToggle="true"
          v-bind="args"
        />
      </div>
    \`
  }),
  args: {}
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AppNavigation
    },
    setup() {
      return {
        args,
        menuItems,
        profileMenuItems
      };
    },
    template: \`
      <div class="h-[600px] flex">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="home"
          :collapsible="true"
          v-bind="args"
        />
      </div>
    \`
  }),
  args: {}
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const te=["Default","Collapsible"];export{t as Collapsible,r as Default,te as __namedExportsOrder,re as default};
