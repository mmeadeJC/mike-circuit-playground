import{d as D,v as M,U as A,r as i,m as e,k as m}from"./iframe-e359xqcE.js";import{s as _}from"./index-CKnS-nTZ.js";import{s as k}from"./index-C8Trrx-R.js";import{s as R,a as B}from"./index-D72zYeEF.js";import{s as F}from"./index-B6YXkmJR.js";import{_ as H}from"./CheckboxWithLabel.vue-D6A-BAKo.js";import"./RichText.vue-DSFy4cWp.js";import{_ as G}from"./DataTable.vue-Dt4av9HN.js";import{_ as o}from"./DataTableCellText.vue-7C2suGZ4.js";import{_ as j}from"./DataTableCellLink.vue-BfDcOf_v.js";import{r as u}from"./CheckCircleIcon-CttTEG-u.js";import{_ as K}from"./AppNavigation.vue-BVEgPgPp.js";import{_ as O}from"./PageHeader.vue-B-RRdH_3.js";import{b as h,d as W,a as V,s as q,c as E,p as z,e as J}from"./index-Bn8GZArD.js";import{_ as Q}from"./AdminTopBar-C1_aql48.js";import{r as X}from"./ArrowPathIcon-Cz3ipuws.js";import{r as Y}from"./FunnelIcon-BG58avoD.js";import{r as d}from"./ComputerDesktopIcon-CZ49U3bB.js";import{r as U}from"./UserIcon-B5ybHQl4.js";import{r as Z}from"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import{r as ee}from"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import{r as te,a as oe}from"./RocketLaunchIcon-DlN-TXg6.js";import{r as ae,a as ie}from"./HomeIcon-CMcdMeJ6.js";import{r as se}from"./UsersIcon-B0NJN5D0.js";import{r as le}from"./UserGroupIcon-E0lAPvKK.js";import{r as re}from"./CommandLineIcon-DJ9ijbG3.js";import{r as ce}from"./ClipboardDocumentListIcon-DJhb6g7p.js";import{r as ne}from"./ClipboardDocumentCheckIcon-DwrfexYM.js";import{r as pe}from"./ShieldCheckIcon-C8LDGAuf.js";import{r as me}from"./Cog6ToothIcon-B_W-iGDU.js";import{r as v}from"./ExclamationCircleIcon-GWGlLrqG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-Do95Hz07.js";import"./index-B2MD1nhU.js";import"./index-ss00ocVv.js";import"./Paginator.vue-CUZVRWXH.js";import"./index-CTBTSs98.js";import"./index-DG2lsddg.js";import"./index-T5BskalJ.js";import"./index-SNTWOJlm.js";import"./index-CgskNI-h.js";import"./index-WY88b_Bj.js";import"./index-8qCCvjmZ.js";import"./index-DRbtjQJv.js";import"./ChevronRightIcon-atQJRe2P.js";import"./index-B4Kwt-uL.js";import"./index-9U7SPxNC.js";import"./index-CZJvM9KI.js";import"./index-BOWouLqF.js";import"./index-MDUUAlov.js";import"./useDataTableSize-OVg47YRd.js";import"./LinkText.vue-CAkZt6Z4.js";import"./ArrowRightIcon-LWeHu1Pb.js";import"./index-CVIMl1jo.js";import"./index-yC2g--ff.js";import"./index-DKwf0szZ.js";import"./index-Dqqj7jsW.js";import"./Dropdown.vue-BCXCU-gF.js";import"./EllipsisHorizontalIcon-CxnQmkwF.js";import"./index-BLqIZ8v0.js";import"./AiAgentButton.vue-CPHfaCtk.js";import"./ArrowLeftIcon-Bj_NG_K1.js";import"./FlagIcon-ebJhzkK-.js";const ue=D({props:{status:{type:String,required:!0}},components:{PvTag:F,CheckCircleIcon:u,ExclamationCircleIcon:v},computed:{severity(){return this.status==="Failed"?"danger":this.status==="Pending"?"warn":"success"},StatusIcon(){return this.status==="Success"?u:v}},template:`
    <PvTag :severity="severity" class="shrink-0">
      <template #icon>
        <component :is="StatusIcon" class="size-4" />
      </template>
      {{ status }}
    </PvTag>
  `}),de=[{label:"Get Started",leftIcon:e(te)},{label:"Home",leftIcon:e(ae)},{label:"Alert",leftIcon:e(ie),count:23},{label:"User Management",leftIcon:e(le),items:[{label:"Users",leftIcon:e(U)},{label:"User Groups",leftIcon:e(se)},{separator:!0},{label:"Active Directory"},{label:"Cloud Directories"},{label:"HR Directories"},{label:"Identity Providers"}]},{label:"Device Management",leftIcon:e(h),items:[{label:"Devices",leftIcon:e(W)},{label:"Device Groups",leftIcon:e(V)},{label:"Commands",leftIcon:e(re)},{label:"Asset Management",leftIcon:e(ce),isNew:!0},{separator:!0},{label:"Policy Management"},{label:"Patch Management"},{label:"Policy Groups"},{label:"Software Management"},{label:"MDM"}]},{label:"Access",leftIcon:e(J),items:[{label:"SSO Applications",leftIcon:e(q)},{label:"Access Requests",leftIcon:e(ne)},{label:"AI & SaaS Management",leftIcon:e(E)},{label:"Vault",leftIcon:e(z),isNew:!0},{separator:!0},{label:"LDAP"},{label:"RADIUS"}]},{label:"Security",leftIcon:e(pe),items:[{label:"Conditional Access Policies"},{label:"Conditional Lists"},{label:"Certificate Authority",isNew:!0},{label:"MFA Configurations"},{label:"Device Trust"},{label:"Password Policies"}]},{label:"Insights",leftIcon:e(oe),items:[{label:"Reports"},{label:"Directory Insights"}]},{label:"Settings",leftIcon:e(me)}],ve=[{label:"Admin IT",itemType:"profile_compact",initials:"AT",name:"Admin IT",items:[{label:"Admin IT",itemType:"profile_large",name:"Admin IT",email:"admin_it@company.com",initials:"AT"},{separator:!0},{label:"Logout",rightIcon:e(Z)},{separator:!0},{label:"Change Password"},{label:"Launch User Portal",rightIcon:e(ee)},{separator:!0},{label:"Billing"},{label:"My API Key"},{separator:!0},{label:"Use Old Navigation",itemType:"button"}]}],s=[{id:1,name:"User Policy 01",description:"Description",policyLevel:"User",userName:"User Name",bound:!1},{id:2,name:"User Policy 02",description:"Description",policyLevel:"User",userName:"User Name",bound:!1},{id:3,name:"User Policy 03",description:"Description",policyLevel:"Device",userName:"User Name",bound:!1},{id:4,name:"User Policy 04",description:"Description",policyLevel:"User",userName:"User Name",bound:!0},{id:5,name:"User Policy 05",description:"Description",policyLevel:"Device",userName:"User Name",bound:!0},{id:6,name:"User Policy 06",description:"Description",policyLevel:"Device",userName:"User Name",bound:!0},{id:7,name:"User Policy 07",description:"Description",policyLevel:"User",userName:"User Name",bound:!1},{id:8,name:"User Policy 08",description:"Description",policyLevel:"User",userName:"User Name",bound:!1},{id:9,name:"User Policy 09",description:"Description",policyLevel:"Device",userName:"User Name",bound:!1},{id:10,name:"User Policy 10",description:"Description",policyLevel:"User",userName:"User Name",bound:!0}],be=[{field:"name",header:"Policy",sortable:!0,component:e(o),componentProps:t=>({label:t.data.name,description:t.data.description})},{field:"policyLevel",header:"Policy Level",sortable:!0,component:e(o),componentProps:t=>({label:t.data.policyLevel,icon:t.data.policyLevel==="User"?e(U):e(h)})},{field:"userName",header:"User Name",sortable:!0,component:e(o),componentProps:t=>({label:t.data.userName})}],ye=[{id:1,status:"Failed",policy:"Install Cert",policyLevel:"User",userName:"Hari"},{id:2,status:"Failed",policy:"Install Cert",policyLevel:"User",userName:"Mike"},{id:3,status:"Pending",policy:"Allow Camera",policyLevel:"Device",userName:"—"},{id:4,status:"Pending",policy:"Application Restriction",policyLevel:"Device",userName:"—"},{id:5,status:"Success",policy:"User Policy 05",policyLevel:"Device",userName:"—"},{id:6,status:"Success",policy:"User Policy 06",policyLevel:"User",userName:"Hari"},{id:7,status:"Failed",policy:"User Policy 07",policyLevel:"User",userName:"Mike"},{id:8,status:"Success",policy:"User Policy 08",policyLevel:"Device",userName:"—"},{id:9,status:"Success",policy:"User Policy 09",policyLevel:"Device",userName:"—"},{id:10,status:"Success",policy:"User Policy 10",policyLevel:"Device",userName:"—"}],fe=[{field:"status",header:"Status",sortable:!0,component:e(ue),componentProps:t=>({status:t.data.status})},{field:"policy",header:"Policy",sortable:!0,component:e(o),componentProps:t=>({label:t.data.policy})},{field:"policyLevel",header:"Policy Level",sortable:!0,component:e(o),componentProps:t=>({label:t.data.policyLevel})},{field:"userName",header:"User Name",sortable:!0,component:e(o),componentProps:t=>({label:t.data.userName})},{field:"details",header:"Details",component:e(j),componentProps:()=>({label:"View",href:"#"})}],Pe=[{label:"Highlights",value:"highlights"},{label:"Insights",value:"insights"},{label:"Device Groups",value:"device-groups"},{label:"Users",value:"users"},{label:"MDM",value:"mdm"},{label:"Apps",value:"apps"},{label:"Policies",value:"policies"},{label:"Policy Results",value:"policy-results"},{label:"Commands",value:"commands"},{label:"Background Activity",value:"background-activity"}];function T(t){return D({name:"DeviceDetailPoliciesPage",computerIcon:e(d),components:{AppNavigation:K,PageHeader:O,CircuitDataTable:G,CheckboxWithLabel:H,PvButton:_,PvInputText:k,PvIconField:B,PvInputIcon:R,TopBar:Q,ComputerDesktopIcon:d,ChevronDownIcon:A,MagnifyingGlassIcon:M,FunnelIcon:Y,ArrowPathIcon:X},setup(){const x=i(t),c=i(s.filter(a=>a.bound)),C=i([]),n=i(!1),w=m(()=>c.value.length),L=s.length,S=m(()=>n.value?c.value:s);function $(a){const p=a.target;(p.closest('[data-pc-name="checkbox"]')||p.closest('[data-pc-section="input"]'))&&a.stopPropagation()}return{menuItems:de,profileMenuItems:ve,deviceDetailTabs:Pe,activeTab:x,policiesBindingData:s,policiesBindingColumns:be,policiesDisplayData:S,selectedPolicies:c,boundPolicyCount:w,totalPolicyCount:L,showBoundPolicies:n,policyResultsData:ye,policyResultsColumns:fe,selectedPolicyResults:C,stopCheckboxRowClick:$}},template:`
      <div class="flex h-screen overflow-hidden">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="device management"
          :collapsible="true"
          :topNavToggle="true"
        />
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
          <TopBar showBackButton backButtonLabel="Devices" @back="() => {}" />

          <PageHeader
            title="Mike's VM"
            :icon="$options.computerIcon"
            subtitleText="Primary User: Unassigned   Serial Number: 4F6HJS3   OS: Windows 11 pro"
            :tabs="deviceDetailTabs"
            :activeTab="activeTab"
            :tabsScrollable="true"
            @update:activeTab="activeTab = $event"
          >
            <template #actions>
              <PvButton label="Actions" severity="secondary" variant="outlined" iconPos="right">
                <template #icon="iconProps">
                  <ChevronDownIcon :class="iconProps.class" />
                </template>
              </PvButton>
            </template>
          </PageHeader>

          <div class="flex-1 overflow-auto bg-neutral-surface">
            <!-- Policies Tab -->
            <div v-if="activeTab === 'policies'" class="p-6 pr-4 flex flex-col gap-4">
              <div class="flex items-center gap-4">
                <PvIconField class="w-[500px]">
                  <PvInputIcon class="flex items-center justify-center">
                    <MagnifyingGlassIcon class="w-4 h-4" />
                  </PvInputIcon>
                  <PvInputText placeholder="Search" class="w-full" />
                </PvIconField>
                <span class="text-body-md text-neutral-subtle whitespace-nowrap">
                  {{ boundPolicyCount }} of {{ totalPolicyCount }} user policies bound
                </span>
                <div class="flex-1"></div>
                <CheckboxWithLabel v-model="showBoundPolicies" :binary="true" inputId="show-bound-policies">
                  <template #label>
                    <span class="text-body-md">Show bound user policies ({{ boundPolicyCount }})</span>
                  </template>
                </CheckboxWithLabel>
              </div>
              <div @click.capture="stopCheckboxRowClick">
                <CircuitDataTable
                  :columns="policiesBindingColumns"
                  :data="policiesDisplayData"
                  selectionMode="multiple"
                  v-model:selection="selectedPolicies"
                  dataKey="id"
                  compareSelectionBy="dataKey"
                  scrollable
                  scrollHeight="flex"
                />
              </div>
            </div>

            <!-- Policy Results Tab -->
            <div v-if="activeTab === 'policy-results'" class="p-6 pr-4 flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <PvIconField class="w-[500px]">
                  <PvInputIcon class="flex items-center justify-center">
                    <MagnifyingGlassIcon class="w-4 h-4" />
                  </PvInputIcon>
                  <PvInputText placeholder="Search" class="w-full" />
                </PvIconField>
                <PvButton severity="secondary" variant="text" rounded aria-label="Filter">
                  <template #icon><FunnelIcon class="w-5 h-5" /></template>
                </PvButton>
                <PvButton severity="secondary" variant="text" rounded aria-label="Refresh">
                  <template #icon><ArrowPathIcon class="w-5 h-5" /></template>
                </PvButton>
              </div>
              <CircuitDataTable
                :columns="policyResultsColumns"
                :data="policyResultsData"
                selectionMode="multiple"
                v-model:selection="selectedPolicyResults"
                dataKey="id"
                scrollable
                scrollHeight="flex"
              />
            </div>
          </div>

          <!-- Cancel/Save Footer -->
          <div
            class="flex items-center justify-end gap-3 px-6 py-3 border-t border-neutral-default_solid bg-neutral-base shrink-0"
          >
            <PvButton label="Cancel" severity="secondary" variant="text" />
            <PvButton label="Save" />
          </div>
        </div>
      </div>
    `})}const N=T("policies"),ge=T("policy-results"),Bt={title:"Projects/Mike's Playground/User Scoped Policies/Pages/Device Detail",component:N,parameters:{layout:"fullscreen"}},l={render:()=>({components:{DeviceDetailPoliciesTab:N},template:"<DeviceDetailPoliciesTab />"})},r={render:()=>({components:{DeviceDetailPolicyResultsTab:ge},template:"<DeviceDetailPolicyResultsTab />"})};var b,y,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DeviceDetailPoliciesTab
    },
    template: '<DeviceDetailPoliciesTab />'
  })
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var P,g,I;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DeviceDetailPolicyResultsTab
    },
    template: '<DeviceDetailPolicyResultsTab />'
  })
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const Ft=["PoliciesTab","PolicyResultsTab"];export{l as PoliciesTab,r as PolicyResultsTab,Ft as __namedExportsOrder,Bt as default};
