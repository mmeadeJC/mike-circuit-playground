import{m as e}from"./iframe-600w3n4H.js";import"./RichText.vue-CqDMFobT.js";import{_ as a}from"./AppNavigation.vue-Bmp64vPI.js";import{r as b}from"./ArrowRightStartOnRectangleIcon-Docb568Z.js";import{r as f}from"./ArrowTopRightOnSquareIcon-D1DflJJw.js";import{r as I,a as g}from"./RocketLaunchIcon-C0UcLMmT.js";import{r as v,a as M}from"./HomeIcon-DzFCrQek.js";import{r as A}from"./UserIcon-BnMpn0XC.js";import{r as h}from"./UsersIcon-BAek990o.js";import{r as D}from"./UserGroupIcon-BAYPParn.js";import{r as y}from"./ComputerDesktopIcon-DIfAHnbc.js";import{r as o}from"./ServerIcon-Dge0ylR3.js";import{r as N}from"./ShieldCheckIcon-BytxG3nK.js";import{r as $}from"./Cog6ToothIcon-DHjR5ucD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-DkywZ0qJ.js";import"./index-DBXXhGgD.js";import"./index-DtheA9qo.js";import"./index-CHjA10XC.js";import"./index-Dl3ThDuu.js";import"./ChevronRightIcon-BF9RliU4.js";import"./index-D5QE8W6K.js";const u=[{label:"Getting Started",leftIcon:e(I)},{label:"Home",leftIcon:e(v)},{label:"Alert",leftIcon:e(M),count:23},{label:"User Management",leftIcon:e(D),items:[{label:"Users",leftIcon:e(A)},{label:"User Groups",leftIcon:e(h)},{separator:!0},{label:"Active Directory"},{label:"Cloud Directories"},{label:"HR Directories"},{label:"Identity Provider"}]},{label:"Device Management",leftIcon:e(o),items:[{label:"Devices",leftIcon:e(y)},{label:"Device Groups",leftIcon:e(o)},{label:"Commands"},{label:"Asset Management",isNew:!0},{separator:!0},{label:"Policy Management"},{label:"Policy Groups"},{label:"Software Deployment"},{label:"MDM"}]},{label:"Security",leftIcon:e(N),items:[{label:"Conditional Access Policies"},{label:"Conditional List"},{label:"MFA Configurations"},{label:"Device Trust"}]},{label:"Insights",leftIcon:e(g),items:[{label:"Reports"},{label:"Directory Insights"}]},{label:"Settings",leftIcon:e($)}],d=[{label:"John Doe",itemType:"profile_compact",initials:"JD",name:"John Doe",items:[{label:"Admin IT",itemType:"profile_large",name:"Admin IT",email:"admin_it@company.com",initials:"AT"},{separator:!0},{label:"Logout",rightIcon:e(b)},{separator:!0},{label:"Change Password"},{label:"Launch User Portal",rightIcon:e(f)},{separator:!0},{label:"Billing"},{label:"My API Key"},{separator:!0},{label:"Use Old Navigation",itemType:"button"}]}],re={title:"Circuit DS/Components/AppNavigation",component:a,tags:["autodocs"]},r={render:n=>({components:{AppNavigation:a},setup(){return{args:n,menuItems:u,profileMenuItems:d}},template:`
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
