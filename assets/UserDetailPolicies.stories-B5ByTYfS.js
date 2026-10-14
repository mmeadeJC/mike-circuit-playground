import{d as s,v as M,m as e,r as i,k as S}from"./iframe-BFKWv3KJ.js";import{s as k}from"./index-CtfEZ-mH.js";import{s as R}from"./index-2rr2RyNS.js";import{s as $,a as A}from"./index-D77ELRyA.js";import{s as B}from"./index-L5huya0i.js";import{_}from"./CheckboxWithLabel.vue-BFy88Znm.js";import"./RichText.vue-vrSf4OCs.js";import{_ as L}from"./DataTable.vue-BxBNPbHm.js";import{_ as r}from"./DataTableCellText.vue-CzHXmDrp.js";import{r as F}from"./CheckCircleIcon-CTvmflJK.js";import{_ as V}from"./AppNavigation.vue-DOzZfcBr.js";import{_ as H}from"./PageHeader.vue-CGtQuNfk.js";import{d as G,a as O,b as W,s as z,c as N,p as j,e as K}from"./index-CaoDn_b_.js";import{_ as E}from"./AdminTopBar-Cl9hHrP-.js";import{r as q}from"./ArrowPathIcon-FnjRaPAd.js";import{r as J}from"./FunnelIcon-Dd6Vil59.js";import{r as Q}from"./ChevronRightIcon-DUJGUktX.js";import{r as c}from"./UserIcon-CrDAGwP1.js";import{r as X}from"./ArrowRightStartOnRectangleIcon-B1SaEZKF.js";import{r as Y}from"./ArrowTopRightOnSquareIcon-P9gMEZmv.js";import{r as Z,a as ee}from"./RocketLaunchIcon-CoLGueqR.js";import{r as te,a as se}from"./HomeIcon-TceTBPbm.js";import{r as oe}from"./UsersIcon-BlDUqua-.js";import{r as ie}from"./UserGroupIcon-DHcrWHdF.js";import{r as ae}from"./CommandLineIcon-C_kbsQBp.js";import{r as le}from"./ClipboardDocumentListIcon--U-psXCG.js";import{r as re}from"./ClipboardDocumentCheckIcon-D4o5FMXS.js";import{r as ce}from"./ShieldCheckIcon-CQlKNWxZ.js";import{r as ne}from"./Cog6ToothIcon-CLTd3td9.js";import{r as pe}from"./ExclamationCircleIcon-D3xrP7cx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-D6YUBXg4.js";import"./index-BXYT2gRT.js";import"./index-DdAbza1U.js";import"./Paginator.vue-B6hVKag8.js";import"./index-CuXoLfeA.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-2n8eVSrk.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-DICFt-SZ.js";import"./index-BVkesBF5.js";import"./index-CFp6THYW.js";import"./index-CXxQSp7k.js";import"./index-Dn4n97fu.js";import"./index-CiP5ygH7.js";import"./index-EcMNudkA.js";import"./useDataTableSize-DIEaYxrt.js";import"./index-F_qZZ5l1.js";import"./index-UPYa1M-T.js";import"./index-BOlU20yb.js";import"./index-bbn6QzYu.js";import"./Dropdown.vue-Cz9UQQvj.js";import"./EllipsisHorizontalIcon-De_59ltg.js";import"./index-TlXkjPb8.js";import"./AiAgentButton.vue-D0wxz5Cd.js";import"./ArrowLeftIcon-BgI2ESLC.js";import"./FlagIcon-DzsTOg3n.js";const y=s({template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M3 5.548l7.065-0.966v6.822H3V5.548zm0 12.904l7.065 0.966v-6.822H3v5.856zm7.937 1.085L21 21v-7.596H10.937v-0.001 8.133zm0-15.074v8.133H21V3L10.937 4.463z"/></svg>'}),g=s({template:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>'}),de=s({name:"OsTypeIcon",props:{os:{type:String,default:"windows"}},components:{WindowsIcon:y,AppleIcon:g},computed:{label(){return this.os==="windows"?"Windows":"Mac"}},template:`
    <div class="flex items-center gap-2">
      <WindowsIcon v-if="os === 'windows'" />
      <AppleIcon v-else />
      <span class="text-body-md text-neutral-base">{{ label }}</span>
    </div>
  `}),me=s({name:"OsColumnCell",props:{os:{type:String,default:"windows"}},components:{WindowsIcon:y,AppleIcon:g},template:`
    <div class="flex items-center gap-2">
      <WindowsIcon v-if="os === 'windows'" />
      <AppleIcon v-else />
      <span class="text-body-md text-neutral-base">{{ os === 'windows' ? 'Windows' : 'Mac' }}</span>
    </div>
  `}),ue=s({name:"ViewLink",props:{label:{type:String,default:"View"},href:{type:String,default:"#"}},template:'<div class="px-2 py-1.5"><a :href="href" class="text-body-md-link text-link-base hover:text-link-hover hover:underline active:text-link-active no-underline transition-colors">{{ label }}</a></div>'}),be=s({name:"PolicyResultsStatusTag",props:{statusLabel:{type:String,default:"Success"}},components:{PvTag:B,CheckCircleIcon:F,ExclamationCircleIcon:pe},computed:{isFailed(){return this.statusLabel==="Failed"}},template:`
    <PvTag :severity="isFailed ? 'danger' : 'success'" class="shrink-0">
      <template #icon>
        <ExclamationCircleIcon v-if="isFailed" class="size-4" />
        <CheckCircleIcon v-else class="size-4" />
      </template>
      {{ statusLabel }}
    </PvTag>
  `}),ve=[{label:"Get Started",leftIcon:e(Z)},{label:"Home",leftIcon:e(te)},{label:"Alert",leftIcon:e(se),count:23},{label:"User Management",leftIcon:e(ie),items:[{label:"Users",leftIcon:e(c)},{label:"User Groups",leftIcon:e(oe)},{separator:!0},{label:"Active Directory"},{label:"Cloud Directories"},{label:"HR Directories"},{label:"Identity Providers"}]},{label:"Device Management",leftIcon:e(W),items:[{label:"Devices",leftIcon:e(G)},{label:"Device Groups",leftIcon:e(O)},{label:"Commands",leftIcon:e(ae)},{label:"Asset Management",leftIcon:e(le),isNew:!0},{separator:!0},{label:"Policy Management"},{label:"Patch Management"},{label:"Policy Groups"},{label:"Software Management"},{label:"MDM"}]},{label:"Access",leftIcon:e(K),items:[{label:"SSO Applications",leftIcon:e(z)},{label:"Access Requests",leftIcon:e(re)},{label:"AI & SaaS Management",leftIcon:e(N)},{label:"Vault",leftIcon:e(j),isNew:!0},{separator:!0},{label:"LDAP"},{label:"RADIUS"}]},{label:"Security",leftIcon:e(ce),items:[{label:"Conditional Access Policies"},{label:"Conditional Lists"},{label:"Certificate Authority",isNew:!0},{label:"MFA Configurations"},{label:"Device Trust"},{label:"Password Policies"}]},{label:"Insights",leftIcon:e(ee),items:[{label:"Reports"},{label:"Directory Insights"}]},{label:"Settings",leftIcon:e(ne)}],fe=[{label:"Admin IT",itemType:"profile_compact",initials:"AT",name:"Admin IT",items:[{label:"Admin IT",itemType:"profile_large",name:"Admin IT",email:"admin_it@company.com",initials:"AT"},{separator:!0},{label:"Logout",rightIcon:e(X)},{separator:!0},{label:"Change Password"},{label:"Launch User Portal",rightIcon:e(Y)},{separator:!0},{label:"Billing"},{label:"My API Key"},{separator:!0},{label:"Use Old Navigation",itemType:"button"}]}],d=[{id:1,name:"User Policy 01",description:"Description text",os:"mac",bound:!0},{id:2,name:"User Policy 02",description:"Description text",os:"mac",bound:!0},{id:3,name:"User Policy 03",description:"Description text",os:"windows",bound:!0},{id:4,name:"User Policy 04",description:"Description text",os:"windows",bound:!0},{id:5,name:"User Policy 05",description:"Description text",os:"mac",bound:!1},{id:6,name:"User Policy 06",description:"Description text",os:"mac",bound:!1},{id:7,name:"User Policy 07",description:"Description text",os:"mac",bound:!1},{id:8,name:"User Policy 08",description:"Description text",os:"windows",bound:!1},{id:9,name:"User Policy 09",description:"Description text",os:"windows",bound:!1},{id:10,name:"User Policy 10",description:"Description text",os:"windows",bound:!1}],Pe=[{field:"name",header:"Policy",sortable:!0,component:e(r),componentProps:t=>({label:t.data.name,description:t.data.description})},{field:"os",header:"OS",sortable:!0,component:e(de),componentProps:t=>({os:t.data.os})}],ye=[{id:1,status:"Failed",policy:"User Policy 01",device:"Burak's VM",os:"mac"},{id:2,status:"Success",policy:"User Policy 01",device:"Mike's VM",os:"mac"},{id:3,status:"Success",policy:"User Policy 01",device:"Tim's VM",os:"windows"},{id:4,status:"Success",policy:"User Policy 01",device:"Hari's VM",os:"windows"},{id:5,status:"Failed",policy:"User Policy 02",device:"Burak's VM",os:"mac"},{id:6,status:"Success",policy:"User Policy 02",device:"Mike's VM",os:"mac"},{id:7,status:"Success",policy:"User Policy 02",device:"Tim's VM",os:"mac"},{id:8,status:"Success",policy:"User Policy 02",device:"Hari's VM",os:"windows"},{id:9,status:"Success",policy:"User Policy 03",device:"Todd's VM",os:"windows"},{id:10,status:"Success",policy:"User Policy 03",device:"Lorie's VM",os:"windows"}],ge=[{field:"status",header:"Status",sortable:!0,width:"100px",component:e(be),componentProps:t=>({statusLabel:t.data.status})},{field:"policy",header:"Policy",sortable:!0,component:e(r),componentProps:t=>({label:t.data.policy})},{field:"device",header:"Device",sortable:!0,component:e(r),componentProps:t=>({label:t.data.device})},{field:"os",header:"OS",sortable:!0,component:e(me),componentProps:t=>({os:t.data.os})},{field:"details",header:"Details",component:e(ue),componentProps:()=>({label:"View",href:"#"})}],we=[{label:"Highlights",value:"highlights"},{label:"Details",value:"details"},{label:"User Groups",value:"user-groups"},{label:"Devices",value:"devices"},{label:"Directories",value:"directories"},{label:"Policies",value:"policies"},{label:"Policy Results",value:"policy-results"}];function w(t){return s({name:"UserDetailPoliciesPage",components:{AppNavigation:V,PageHeader:H,CircuitDataTable:L,CheckboxWithLabel:_,PvButton:k,PvInputText:R,PvIconField:A,PvInputIcon:$,TopBar:E,UserIcon:c,ChevronRightIcon:Q,MagnifyingGlassIcon:M,FunnelIcon:J,ArrowPathIcon:q},setup(){const I=i(t),n=i(d.filter(o=>o.bound)),x=i(!1),U=S(()=>n.value.length),T=15,C=i([]);function D(o){const p=o.target;(p.closest('[data-pc-name="checkbox"]')||p.closest('[data-pc-section="input"]'))&&o.stopPropagation()}return{menuItems:ve,profileMenuItems:fe,pageTabs:we,activeTab:I,userPoliciesData:d,userPoliciesColumns:Pe,selectedUserPolicies:n,showBoundUserPolicies:x,boundUserPolicyCount:U,totalUserPolicyCount:T,policyResultsData:ye,policyResultsColumns:ge,selectedPolicyResults:C,stopCheckboxRowClick:D}},template:`
      <div class="flex h-screen overflow-hidden">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="user management"
          :collapsible="true"
          :topNavToggle="true"
        />
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
          <TopBar showBackButton backButtonLabel="Users" />

          <PageHeader
            title="Marty McFly 85"
            :icon="$options.userIcon"
            :tabs="pageTabs"
            :activeTab="activeTab"
            @update:activeTab="activeTab = $event"
          >
            <template #subtitle>
              <span class="text-body-md text-neutral-subtle">Email: outatime85@example.com</span>
            </template>
            <template #actions>
              <PvButton label="Active" severity="secondary" variant="outlined" iconPos="right">
                <template #icon="iconProps"><ChevronRightIcon :class="[iconProps.class, 'rotate-90']" /></template>
              </PvButton>
            </template>
          </PageHeader>

          <div class="flex-1 overflow-auto bg-neutral-surface">
            <!-- Policies Tab -->
            <div v-if="activeTab === 'policies'" class="p-6 pr-4 flex flex-col gap-4">
              <div class="flex items-center gap-4">
                <PvIconField class="w-[500px]">
                  <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                  <PvInputText placeholder="Search" class="w-full" />
                </PvIconField>
                <span class="text-body-md text-neutral-subtle whitespace-nowrap">{{ boundUserPolicyCount }} of {{ totalUserPolicyCount }} User Policies</span>
                <div class="flex-1"></div>
                <CheckboxWithLabel v-model="showBoundUserPolicies" :binary="true" inputId="show-bound-user-policies">
                  <template #label><span class="text-body-md">Show bound user policies ({{ boundUserPolicyCount }})</span></template>
                </CheckboxWithLabel>
              </div>
              <div @click.capture="stopCheckboxRowClick">
                <CircuitDataTable
                  :columns="userPoliciesColumns"
                  :data="showBoundUserPolicies ? selectedUserPolicies : userPoliciesData"
                  v-model:selection="selectedUserPolicies"
                  selectionMode="multiple"
                  dataKey="id"
                  compareSelectionBy="dataKey"
                  :paginator="true"
                  :rows="50"
                  :totalRecords="totalUserPolicyCount"
                  scrollable
                  scrollHeight="flex"
                />
              </div>
            </div>

            <!-- Policy Results Tab -->
            <div v-if="activeTab === 'policy-results'" class="p-6 pr-4 flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <PvIconField class="w-[500px]">
                  <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                  <PvInputText placeholder="Search" class="w-full" />
                </PvIconField>
                <PvButton severity="secondary" variant="text" rounded aria-label="Filter">
                  <template #icon><FunnelIcon class="w-5 h-5" /></template>
                </PvButton>
                <PvButton severity="secondary" variant="text" rounded aria-label="Refresh">
                  <template #icon><ArrowPathIcon class="w-5 h-5" /></template>
                </PvButton>
              </div>
              <div @click.capture="stopCheckboxRowClick">
                <CircuitDataTable
                  :columns="policyResultsColumns"
                  :data="policyResultsData"
                  v-model:selection="selectedPolicyResults"
                  selectionMode="multiple"
                  dataKey="id"
                  compareSelectionBy="dataKey"
                  :paginator="true"
                  :rows="50"
                  :totalRecords="policyResultsData.length"
                  scrollable
                  scrollHeight="flex"
                />
              </div>
            </div>
          </div>

          <!-- Cancel/Save Footer -->
          <div class="flex items-center justify-end gap-3 px-6 py-3 border-t border-neutral-default_solid bg-neutral-base shrink-0">
            <PvButton label="Cancel" severity="secondary" variant="text" />
            <PvButton label="Save" />
          </div>
        </div>
      </div>
    `,userIcon:e(c)})}const h=w("policies"),he=w("policy-results"),_t={title:"Projects/Mike's Playground/User Scoped Policies/Pages/User Detail",component:h,parameters:{layout:"fullscreen"}},a={render:()=>({components:{UserDetailPoliciesPoliciesTab:h},template:"<UserDetailPoliciesPoliciesTab />"})},l={render:()=>({components:{UserDetailPoliciesPolicyResultsTab:he},template:"<UserDetailPoliciesPolicyResultsTab />"})};var m,u,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UserDetailPoliciesPoliciesTab
    },
    template: '<UserDetailPoliciesPoliciesTab />'
  })
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,f,P;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UserDetailPoliciesPolicyResultsTab
    },
    template: '<UserDetailPoliciesPolicyResultsTab />'
  })
}`,...(P=(f=l.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const Lt=["PoliciesTab","PolicyResultsTab"];export{a as PoliciesTab,l as PolicyResultsTab,Lt as __namedExportsOrder,_t as default};
