import{d as D,v as M,U as A,r as i,m as e,k as m}from"./iframe-C6YxvgI9.js";import{s as _}from"./index-DNf9RvZr.js";import{s as k}from"./index-Dp_YoHvc.js";import{s as R,a as B}from"./index-B8A-AHQI.js";import{s as F}from"./index-jrOAnztS.js";import{_ as H}from"./CheckboxWithLabel.vue-CdCpAZFa.js";import"./RichText.vue-h6zLaVtH.js";import{_ as G}from"./DataTable.vue-Cyt8z7Rc.js";import{_ as o}from"./DataTableCellText.vue-DAizk2a9.js";import{_ as j}from"./DataTableCellLink.vue-B_3CE8op.js";import{r as u}from"./CheckCircleIcon-Bae8Oi8q.js";import{_ as K}from"./AppNavigation.vue-4o5DmXkM.js";import{_ as O}from"./PageHeader.vue-MVpvswyO.js";import{b as h,d as W,a as V,s as q,c as E,p as z,e as J}from"./index-C24-u6em.js";import{_ as Q}from"./AdminTopBar-GIU1WNEk.js";import{r as X}from"./ArrowPathIcon-BMz1chbS.js";import{r as Y}from"./FunnelIcon-B88oviph.js";import{r as d}from"./ComputerDesktopIcon-CU9tTOLC.js";import{r as U}from"./UserIcon-4wtVhT1W.js";import{r as Z}from"./ArrowRightStartOnRectangleIcon-DKKidjNO.js";import{r as ee}from"./ArrowTopRightOnSquareIcon-Cgq2sJub.js";import{r as te,a as oe}from"./RocketLaunchIcon-6D8sm1LH.js";import{r as ae,a as ie}from"./HomeIcon-C13KMEnf.js";import{r as se}from"./UsersIcon-C5hMjpAO.js";import{r as le}from"./UserGroupIcon-BvSX4X8P.js";import{r as re}from"./CommandLineIcon-COGtHxUL.js";import{r as ce}from"./ClipboardDocumentListIcon-lODL2qZu.js";import{r as ne}from"./ClipboardDocumentCheckIcon-BTD2-XPO.js";import{r as pe}from"./ShieldCheckIcon-cVyPPREN.js";import{r as me}from"./Cog6ToothIcon-DmdqmVoL.js";import{r as v}from"./ExclamationCircleIcon-CH7OyVqW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-0tFSCsg7.js";import"./index-BnKDY8uA.js";import"./index-AqntUfTj.js";import"./index-DhNdrOGc.js";import"./index-ZhWAdK_X.js";import"./index-BxytmV1x.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-B91snyJO.js";import"./index-DT3_wyj-.js";import"./index-WUqO2RC_.js";import"./Paginator.vue-CUj4V86y.js";import"./index-Ch3Q-vZV.js";import"./index-BimTu2-D.js";import"./index-ZSh15SJz.js";import"./index-BTBx138D.js";import"./index-1UUbJVrK.js";import"./index-eKE_C28L.js";import"./index-D_pfiKOk.js";import"./index-B3rEIbXx.js";import"./ChevronRightIcon-DYx_DqJa.js";import"./index-Ct0lVA_L.js";import"./index-CvIohtEI.js";import"./index-CPIDmXOH.js";import"./index-DLF1yM0N.js";import"./index-DpARX3gF.js";import"./useDataTableSize-DQ6_HCRc.js";import"./LinkText.vue-2aQeA1S0.js";import"./ArrowRightIcon-BjhmG1dS.js";import"./index-BWRiIQIx.js";import"./index-Dw5PtzPk.js";import"./index-DmantTCP.js";import"./index-DlFKO-zo.js";import"./Dropdown.vue-DTfK3dWE.js";import"./EllipsisHorizontalIcon-BY6Srncl.js";import"./index-CZUO3voq.js";import"./AiAgentButton.vue-CQXS5Xtg.js";import"./ArrowLeftIcon-CJlY5xq0.js";import"./FlagIcon-FVNvSbUv.js";const ue=D({props:{status:{type:String,required:!0}},components:{PvTag:F,CheckCircleIcon:u,ExclamationCircleIcon:v},computed:{severity(){return this.status==="Failed"?"danger":this.status==="Pending"?"warn":"success"},StatusIcon(){return this.status==="Success"?u:v}},template:`
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
