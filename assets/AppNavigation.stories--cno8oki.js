import{m as e}from"./iframe-CrzTiCu6.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as a}from"./AppNavigation.vue-DJCDVPu-.js";import{r as b}from"./ArrowRightStartOnRectangleIcon-CBJnXu54.js";import{r as f}from"./ArrowTopRightOnSquareIcon-DS4hPvi9.js";import{r as I,a as g}from"./RocketLaunchIcon-CAzmE-6h.js";import{r as v,a as M}from"./HomeIcon-BQPM_8Qu.js";import{r as A}from"./UserIcon-Bri6dvnd.js";import{r as h}from"./UsersIcon-DqHPfoZY.js";import{r as D}from"./UserGroupIcon-B6yu2ODb.js";import{r as y}from"./ComputerDesktopIcon-Bdhw8rQC.js";import{r as o}from"./ServerIcon-dnmDdKBk.js";import{r as N}from"./ShieldCheckIcon-CwbvLCk-.js";import{r as $}from"./Cog6ToothIcon-BNOeg4eV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-B1VXYqPb.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-BRT9CP7z.js";import"./index-IX3fe5I4.js";import"./ChevronRightIcon-BtziqKKH.js";import"./index-B5zsakeD.js";const u=[{label:"Getting Started",leftIcon:e(I)},{label:"Home",leftIcon:e(v)},{label:"Alert",leftIcon:e(M),count:23},{label:"User Management",leftIcon:e(D),items:[{label:"Users",leftIcon:e(A)},{label:"User Groups",leftIcon:e(h)},{separator:!0},{label:"Active Directory"},{label:"Cloud Directories"},{label:"HR Directories"},{label:"Identity Provider"}]},{label:"Device Management",leftIcon:e(o),items:[{label:"Devices",leftIcon:e(y)},{label:"Device Groups",leftIcon:e(o)},{label:"Commands"},{label:"Asset Management",isNew:!0},{separator:!0},{label:"Policy Management"},{label:"Policy Groups"},{label:"Software Deployment"},{label:"MDM"}]},{label:"Security",leftIcon:e(N),items:[{label:"Conditional Access Policies"},{label:"Conditional List"},{label:"MFA Configurations"},{label:"Device Trust"}]},{label:"Insights",leftIcon:e(g),items:[{label:"Reports"},{label:"Directory Insights"}]},{label:"Settings",leftIcon:e($)}],d=[{label:"John Doe",itemType:"profile_compact",initials:"JD",name:"John Doe",items:[{label:"Admin IT",itemType:"profile_large",name:"Admin IT",email:"admin_it@company.com",initials:"AT"},{separator:!0},{label:"Logout",rightIcon:e(b)},{separator:!0},{label:"Change Password"},{label:"Launch User Portal",rightIcon:e(f)},{separator:!0},{label:"Billing"},{label:"My API Key"},{separator:!0},{label:"Use Old Navigation",itemType:"button"}]}],re={title:"Circuit DS/Components/AppNavigation",component:a,tags:["autodocs"]},r={render:n=>({components:{AppNavigation:a},setup(){return{args:n,menuItems:u,profileMenuItems:d}},template:`
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
