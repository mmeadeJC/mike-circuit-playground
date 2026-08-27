import{d as o,m as e}from"./iframe-e359xqcE.js";import{s as i}from"./index-CKnS-nTZ.js";import{s as n}from"./index-B6YXkmJR.js";import{_ as c}from"./CollapsiblePanel.vue-iXJaNNFX.js";import"./RichText.vue-DSFy4cWp.js";import{_ as p}from"./AppNavigation.vue-BVEgPgPp.js";import{_ as m}from"./AdminTopBar-C1_aql48.js";import{d,a as u,b as f,s as b,c as v,p as g,e as x,w as y}from"./index-Bn8GZArD.js";import{r as s,a as P}from"./RocketLaunchIcon-DlN-TXg6.js";import{r as I}from"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import{r as h}from"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import{r as C,a as w}from"./HomeIcon-CMcdMeJ6.js";import{r as A}from"./UserIcon-B5ybHQl4.js";import{r as S}from"./UsersIcon-B0NJN5D0.js";import{r as M}from"./UserGroupIcon-E0lAPvKK.js";import{r as D}from"./CommandLineIcon-DJ9ijbG3.js";import{r as _}from"./ClipboardDocumentListIcon-DJhb6g7p.js";import{r as $}from"./ClipboardDocumentCheckIcon-DwrfexYM.js";import{r as T}from"./ShieldCheckIcon-C8LDGAuf.js";import{r as B}from"./Cog6ToothIcon-B_W-iGDU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-C_QA9q8i.js";import"./index-ss00ocVv.js";import"./index-CZJvM9KI.js";import"./index-CVIMl1jo.js";import"./index-CgskNI-h.js";import"./index-WY88b_Bj.js";import"./index-8qCCvjmZ.js";import"./index-MDUUAlov.js";import"./ChevronRightIcon-atQJRe2P.js";import"./index-yC2g--ff.js";import"./index-BLqIZ8v0.js";import"./AiAgentButton.vue-CPHfaCtk.js";import"./ArrowLeftIcon-Bj_NG_K1.js";import"./FlagIcon-ebJhzkK-.js";const k=[{label:"Get Started",leftIcon:e(s)},{label:"Home",leftIcon:e(C)},{label:"Alerts",leftIcon:e(w),count:25},{label:"User Management",leftIcon:e(M),items:[{label:"Users",leftIcon:e(A)},{label:"User Groups",leftIcon:e(S)},{separator:!0},{label:"Active Directories"},{label:"Cloud Directories"},{label:"HR Directories"},{label:"Identity Providers"}]},{label:"Device Management",leftIcon:e(f),items:[{label:"Devices",leftIcon:e(d)},{label:"Device Groups",leftIcon:e(u)},{label:"Commands",leftIcon:e(D)},{label:"Asset Management",leftIcon:e(_),isNew:!0},{separator:!0},{label:"Policy Management"},{label:"Patch Management"},{label:"Policy Groups"},{label:"Software Management"},{label:"MDM"}]},{label:"Access",leftIcon:e(x),items:[{label:"SSO Applications",leftIcon:e(b)},{label:"Access Requests",leftIcon:e($)},{label:"AI & SaaS Management",leftIcon:e(v)},{label:"Vault",leftIcon:e(g),isNew:!0},{separator:!0},{label:"LDAP"},{label:"RADIUS"}]},{label:"Workflows",leftIcon:e(y)},{label:"Security",leftIcon:e(T),items:[{label:"Conditional Access Policies"},{label:"Conditional Lists"},{label:"Certificate Authority",isNew:!0},{label:"MFA Configurations"},{label:"Device Trust"},{label:"Password Policies"}]},{label:"Insights",leftIcon:e(P),items:[{label:"Reports"},{label:"Directory Insights"}]},{label:"Settings",leftIcon:e(B)}],G=[{label:"Jake Taylor",itemType:"profile_compact",initials:"JT",name:"Jake Taylor",items:[{label:"Admin IT",itemType:"profile_large",name:"Admin IT",email:"admin_it@company.com",initials:"AT"},{separator:!0},{label:"Logout",rightIcon:e(I)},{separator:!0},{label:"Change Password"},{label:"Launch User Portal",rightIcon:e(h)},{separator:!0},{label:"Billing"},{label:"My API Key"}]}],L=o({name:"GetStartedPage",components:{AppNavigation:p,PvButton:i,PvTag:n,AdminTopBar:m,CollapsiblePanel:c,RocketLaunchIcon:s},setup(){return{menuItems:k,profileMenuItems:G}},template:`
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="get-started"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <AdminTopBar />

        <!-- Page Header -->
        <div class="border-b border-neutral-default_solid bg-neutral-base shrink-0">
          <div class="flex flex-wrap items-start gap-4 px-6 py-4">
            <div class="flex-1 min-w-0 flex items-center gap-2 py-1">
              <RocketLaunchIcon class="w-6 h-6 text-neutral-base shrink-0" />
              <h1 class="text-heading-2 text-neutral-base">Get Started</h1>
            </div>
          </div>
        </div>

        <!-- Page Content -->
        <div class="flex-1 overflow-auto bg-neutral-surface p-6">
          <div class="max-w-3xl mx-auto flex flex-col gap-6">

            <!-- Welcome -->
            <div class="flex flex-col gap-2">
              <h2 class="text-heading-3 text-neutral-base">Welcome to JumpCloud</h2>
              <p class="text-body-md text-neutral-subtle">Complete the steps below to set up your organization and start managing users, devices, and access.</p>
            </div>

            <!-- Progress -->
            <CollapsiblePanel header="Setup Progress">
              <div class="flex items-center gap-4">
                <div class="flex-1 h-2 bg-neutral-subtle_solid rounded-full overflow-hidden">
                  <div class="h-full bg-primary-base rounded-full" style="width: 20%"></div>
                </div>
                <span class="text-body-sm-bold text-neutral-base">1 of 5 complete</span>
              </div>
            </CollapsiblePanel>

            <!-- Step 1: Complete -->
            <CollapsiblePanel header="1. Create your account">
              <div class="flex items-center justify-between">
                <div class="flex flex-col gap-1">
                  <p class="text-body-md text-neutral-subtle">Your admin account has been created and verified.</p>
                </div>
                <PvTag value="Complete" severity="success" />
              </div>
            </CollapsiblePanel>

            <!-- Step 2 -->
            <CollapsiblePanel header="2. Add your first users">
              <div class="flex flex-col gap-3">
                <p class="text-body-md text-neutral-subtle">Import users from a directory or add them manually to start managing identities.</p>
                <div class="flex items-center gap-2">
                  <PvButton label="Add Users" severity="primary" />
                  <PvButton label="Import from Directory" severity="secondary" variant="outlined" />
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Step 3 -->
            <CollapsiblePanel header="3. Enroll devices">
              <div class="flex flex-col gap-3">
                <p class="text-body-md text-neutral-subtle">Install the JumpCloud agent on your organization's devices to manage them remotely.</p>
                <div class="flex items-center gap-2">
                  <PvButton label="Enroll Devices" severity="primary" />
                  <PvButton label="Learn More" severity="secondary" variant="outlined" />
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Step 4 -->
            <CollapsiblePanel header="4. Configure SSO applications">
              <div class="flex flex-col gap-3">
                <p class="text-body-md text-neutral-subtle">Connect your cloud applications to JumpCloud for single sign-on access.</p>
                <div class="flex items-center gap-2">
                  <PvButton label="Add SSO App" severity="primary" />
                  <PvButton label="Browse Catalog" severity="secondary" variant="outlined" />
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Step 5 -->
            <CollapsiblePanel header="5. Set up security policies">
              <div class="flex flex-col gap-3">
                <p class="text-body-md text-neutral-subtle">Define password policies, MFA requirements, and conditional access rules for your organization.</p>
                <div class="flex items-center gap-2">
                  <PvButton label="Configure Policies" severity="primary" />
                </div>
              </div>
            </CollapsiblePanel>

          </div>
        </div>
      </div>
    </div>
  `}),Ce={title:"Projects/Jake's Playground/Get Started",component:L,parameters:{layout:"fullscreen"}},a={};var t,l,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(r=(l=a.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const we=["Default"];export{a as Default,we as __namedExportsOrder,Ce as default};
