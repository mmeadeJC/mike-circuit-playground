import{o as x,c as f,a as g,d as o,v as M,r,m as e,I as k,q,k as c}from"./iframe-DSI7I_YQ.js";import{s as B}from"./index-DdDMkWFP.js";import{s as y}from"./index-B3LPCdXq.js";import{s as L}from"./index-Cz6kxq3w.js";import{s as A}from"./index-BF3dm58r.js";import{_ as z}from"./CollapsiblePanel.vue-CpFXaJ2N.js";import"./RichText.vue-DARNTLdh.js";import{_}from"./DataTable.vue-8K7hcEUA.js";import{_ as a}from"./DataTableCellText.vue-JtdyCYAL.js";import{r as D}from"./EllipsisHorizontalIcon-BAmumi3c.js";import{_ as H}from"./AppNavigation.vue-WvpKRwdI.js";import{_ as R}from"./PageHeader.vue-8CZb4mnW.js";import{_ as E}from"./AdminTopBar-Bkm6k6PL.js";import{r as h}from"./Cog6ToothIcon-CsHyeCNP.js";import{a as I,r as C}from"./HomeIcon-CQmrqHE7.js";import{r as N}from"./GlobeAltIcon-B6gaU9hK.js";import{r as V}from"./ComputerDesktopIcon-DE9MREWp.js";import{r as J}from"./CircleStackIcon-D_yg4YYV.js";import{r as $}from"./ShieldExclamationIcon-CXXJHYJl.js";import{r as j}from"./KeyIcon-DBP2Snds.js";import{r as U}from"./ClipboardDocumentListIcon-BaP2rSiE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./index-DKupdcS7.js";import"./index-BI_elqOn.js";import"./index-Byho_yNF.js";import"./index-hJTrF4vo.js";import"./Paginator.vue-ChhxJboP.js";import"./index-B2CuMtSM.js";import"./index-16iY2v2i.js";import"./index-CD_7J42F.js";import"./index-EU9vbBWi.js";import"./index-BuxjV2Ka.js";import"./index-DsdYTbg9.js";import"./index-CbI5Nc1U.js";import"./index-bfryJj2q.js";import"./index-CxxjhJ-R.js";import"./index-CZjsJVeR.js";import"./index-DJOK6PAC.js";import"./index-DwCBYExO.js";import"./ChevronRightIcon-vzjO-UCf.js";import"./index-KUyW3X8b.js";import"./index-CwS7Mw-8.js";import"./index-C03-JXXY.js";import"./index-Ck6lw9mO.js";import"./index-Bhi6wGVV.js";import"./useDataTableSize-De9ZRuOb.js";import"./index-BqmjiiIs.js";import"./index-D6LVU54M.js";import"./index-uwcmB5ii.js";import"./index-B89_K_JM.js";import"./Dropdown.vue-D3A6JM3M.js";import"./index-D6mY1Y8s.js";import"./AiAgentButton.vue-BBdh0oDh.js";import"./ArrowLeftIcon-hMAymlAx.js";import"./FlagIcon-Bax3lVf6.js";function p(t,n){return x(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"})])}function m(t,n){return x(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"})])}const K=o({name:"StatCard",props:{label:{type:String,required:!0},value:{type:[String,Number],required:!0},unit:{type:String,default:""},trend:{type:String,default:""},trendDirection:{type:String,default:"up"}},template:`
    <div class="border border-neutral-default_solid rounded-md p-4 flex flex-col gap-2 bg-neutral-base">
      <span class="text-body-sm text-neutral-subtle">{{ label }}</span>
      <div class="flex items-baseline gap-1.5">
        <span class="text-heading-1 text-neutral-base">{{ value }}</span>
        <span class="text-body-md text-neutral-subtle">{{ unit }}</span>
      </div>
      <div v-if="trend" class="flex items-center gap-1">
        <svg v-if="trendDirection === 'down'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3 h-3 text-tag-danger-text">
          <path fill-rule="evenodd" d="M8 1a.75.75 0 0 1 .75.75v9.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V1.75A.75.75 0 0 1 8 1Z" clip-rule="evenodd" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3 h-3 text-tag-success-text">
          <path fill-rule="evenodd" d="M8 15a.75.75 0 0 0 .75-.75V4.56l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06l2.72-2.72v9.69c0 .414.336.75.75.75Z" clip-rule="evenodd" />
        </svg>
        <span :class="trendDirection === 'down' ? 'text-tag-danger-text' : 'text-tag-success-text'" class="text-body-sm">{{ trend }}</span>
      </div>
    </div>
  `}),w=o({name:"RequestStatusTag",props:{statusLabel:{type:String,default:"Approved"}},components:{PvTag:y},template:`
    <PvTag :severity="statusLabel === 'Denied' ? 'danger' : 'success'">
      {{ statusLabel }}
    </PvTag>
  `}),W=[{label:"Home",leftIcon:e(C)},{label:"Websites",leftIcon:e(N)},{label:"Computers",leftIcon:e(V)},{label:"Databases",leftIcon:e(J)},{label:"Blocking Rules",leftIcon:e($),isNew:!0},{label:"Credentials",leftIcon:e(j)},{label:"Access Requests",leftIcon:e(U)},{label:"Administration",leftIcon:e(h)}],G=[{label:"Mike Meade",itemType:"profile_compact",initials:"MM",name:"Mike Meade",items:[{label:"Mike Meade",itemType:"profile_large",name:"Mike Meade",email:"mike.meade@company.com",initials:"MM"},{separator:!0},{label:"Logout"}]}],Z=[{id:1,name:"Label Cell",type:"Label Cell",actions:"Label Cell"},{id:2,name:"Label Cell",type:"Label Cell",actions:"Label Cell"},{id:3,name:"Label Cell",type:"Label Cell",actions:"Label Cell"}],O=[{field:"name",header:"Name",sortable:!0,component:e(a)},{field:"type",header:"Type",sortable:!0,component:e(a)},{field:"actions",header:"Actions",sortable:!0,component:e(a)}],F=[{id:1,credentialName:"Table Link",credentialSub:"Label Cell",requester:"Admin Admin",requestedTime:"Jan 9, 2026, 12:00 PM",requestedStartTime:"Jan 9, 2026, 12:00 PM",requestedEndTime:"Jan 9, 2026, 12:00 PM",status:"Approved"},{id:2,credentialName:"Table Link",credentialSub:"Label Cell",requester:"Admin Admin",requestedTime:"Jan 9, 2026, 12:00 PM",requestedStartTime:"Jan 9, 2026, 12:00 PM",requestedEndTime:"Jan 9, 2026, 12:00 PM",status:"Approved"},{id:3,credentialName:"Table Link",credentialSub:"Label Cell",requester:"Admin Admin",requestedTime:"Jan 9, 2026, 12:00 PM",requestedStartTime:"Jan 9, 2026, 12:00 PM",requestedEndTime:"Jan 9, 2026, 12:00 PM",status:"Denied"},{id:4,credentialName:"Table Link",credentialSub:"Label Cell",requester:"Admin Admin",requestedTime:"Jan 9, 2026, 12:00 PM",requestedStartTime:"Jan 9, 2026, 12:00 PM",requestedEndTime:"Jan 9, 2026, 12:00 PM",status:"Denied"},{id:5,credentialName:"Table Link",credentialSub:"Label Cell",requester:"Admin Admin",requestedTime:"Jan 9, 2026, 12:00 PM",requestedStartTime:"Jan 9, 2026, 12:00 PM",requestedEndTime:"Jan 9, 2026, 12:00 PM",status:"Approved"},{id:6,credentialName:"Table Link",credentialSub:"Label Cell",requester:"Admin Admin",requestedTime:"Jan 9, 2026, 12:00 PM",requestedStartTime:"Jan 9, 2026, 12:00 PM",requestedEndTime:"Jan 9, 2026, 12:00 PM",status:"Approved"}],Q=o({name:"BoldLabelCell",props:{label:{type:String,default:""},description:{type:String,default:""}},template:`
    <div class="flex flex-col">
      <span class="text-body-md font-semibold text-neutral-base">{{ label }}</span>
      <span v-if="description" class="text-body-sm text-neutral-subtle">{{ description }}</span>
    </div>
  `}),X=[{field:"credentialName",header:"Credential Name",sortable:!0,component:e(Q),componentProps:t=>({label:t.data.credentialName,description:t.data.credentialSub})},{field:"requester",header:"Requester",sortable:!0,component:e(a)},{field:"requestedTime",header:"Requested Time",sortable:!0,component:e(a)},{field:"requestedStartTime",header:"Requested Start Time",sortable:!0,component:e(a)},{field:"requestedEndTime",header:"Requested End Time",sortable:!0,component:e(a)},{field:"status",header:"Status",sortable:!0,component:e(w),componentProps:t=>({statusLabel:t.data.status})}],Y=[{name:"Sarah Chen",email:"sarah@company.com",time:"8 minutes ago"},{name:"Marcus Rodriguez",email:"marcus@company.com",time:"36 minutes ago"},{name:"Emily Johnson",email:"emily@company.com",time:"2 hours ago"},{name:"Michael Smith",email:"michael@company.com",time:"16 hours ago"}],ee=[{name:"Sarah Chen",email:"sarah@company.com",type:"Key",expiry:"Expires 1 day",urgent:!0},{name:"Marcus Rodriguez",email:"marcus@company.com",type:"Password",expiry:"Expires 2 days",urgent:!0},{name:"Emily Johnson",email:"emily@company.com",type:"Password",expiry:"Expires 3 days",urgent:!1},{name:"Michael Smith",email:"michael@company.com",type:"Key",expiry:"Expires 6 days",urgent:!1}],te=[{name:"AWS Gabriel",type:"Key Credential"},{name:"Test 10",type:"Password Credential"},{name:"AWS Gabriel",type:"Password Credential"},{name:"MySQL Admin",type:"Key Credential"}],ae=[{name:"AWS Gabriel",type:"Key",text:"Last Used 46 days ago",severe:!1},{name:"Test 10",type:"Password",text:"Last Used 123 days ago",severe:!0},{name:"AWS Gabriel",type:"Password",text:"Last Used 53 days ago",severe:!0},{name:"MySQL Admin",type:"Key",text:"Last Used 66 days ago",severe:!0}],se=o({name:"VaultDashboard",components:{AppNavigation:H,PageHeader:R,CollapsiblePanel:z,CircuitDataTable:_,TopBar:E,PvButton:B,PvTag:y,PvDivider:L,StatCard:K,RequestStatusTag:w,PvSelectButton:A,HomeIcon:C,BellIcon:I,MoonIcon:p,SunIcon:m,Cog6ToothIcon:h,MagnifyingGlassIcon:M,EllipsisHorizontalIcon:D},setup(){const t=r([]),n=r([]),s=r(document.documentElement.getAttribute("data-theme")==="circuit-dark"?"dark":"light"),T=[{value:"light",icon:e(m)},{value:"dark",icon:e(p)}];function d(i){document.documentElement.setAttribute("data-theme",i==="dark"?"circuit-dark":"circuit-light")}const P=c(()=>s.value==="dark"?"#ffffff":"#0F202F"),S=c(()=>s.value==="dark"?"rgba(255,255,255,0.6)":"rgba(15,32,47,0.74)");return k(()=>d(s.value)),q(s,i=>d(i)),{vaultNavItems:W,vaultProfileMenuItems:G,connectedResourcesData:Z,connectedResourcesColumns:O,accessRequestsData:F,accessRequestsColumns:X,recentLoginsData:Y,credentialExpirationsData:ee,weakCredentialsData:te,unusedCredentialsData:ae,selectedResources:t,selectedRequests:n,themeMode:s,themeModeOptions:T,bodyTextColor:P,subtleTextColor:S}},template:`
    <div class="flex h-screen bg-neutral-surface overflow-hidden">
      <!-- Left Navigation -->
      <AppNavigation
        :menuItems="vaultNavItems"
        :profileMenuItems="vaultProfileMenuItems"
        :collapsible="true"
        :topNavToggle="true"
      >
        <template #logo="{ class: cls }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 109 20" :class="cls">
            <g clip-path="url(#jc-logo-a)">
              <path fill-rule="evenodd" d="M30.864 15.137a4.3 4.3 0 0 0 1.275-3.057 4.31 4.31 0 0 0-1.706-3.431 4.38 4.38 0 0 0-3.778-.743 4.58 4.58 0 0 0-1.936-3.566 4.65 4.65 0 0 0-4.025-.654 5.68 5.68 0 0 0-5.852-2.646 5.65 5.65 0 0 0-4.575 4.488 4.35 4.35 0 0 0-4.285 2.539 4.37 4.37 0 0 0-4.718.98A4.3 4.3 0 0 0 .35 13.75a4.35 4.35 0 0 0 4.014 2.653h.03l.024-.002v.002h1.144c.257-1.108 1.473-2.036 3.141-2.484a3.18 3.18 0 0 1-.714-3.49 3.22 3.22 0 0 1 2.978-1.983 3.22 3.22 0 0 1 2.978 1.983 3.18 3.18 0 0 1-.715 3.49 6.5 6.5 0 0 1 1.585.645 6.6 6.6 0 0 1 2.731-1.393 3.73 3.73 0 0 1-.838-4.093A3.78 3.78 0 0 1 20.2 6.753c1.531 0 2.91.918 3.493 2.325a3.73 3.73 0 0 1-.838 4.093c2.114.568 3.608 1.793 3.733 3.232h1.145l-.001-.002h.01l.013.001h.031a4.37 4.37 0 0 0 3.077-1.265m7.3-6.542v7.362c0 1.898-.764 3.103-2.842 3.103a5 5 0 0 1-.73-.065l.1-1.932q.262.05.531.05c.515 0 .681-.347.681-.859v-7.66zm6.713 7.808h2.21V8.578H44.81v4.358c0 .99-.599 1.667-1.562 1.667-.83 0-1.196-.544-1.196-1.353V8.578h-2.26v5.3c0 1.7.764 2.756 2.26 2.756 1.246 0 2.21-.792 2.658-2.311h.166zm7.644-6.009c-.963 0-1.578.677-1.578 1.651v4.358h-2.26V8.578h2.21v2.097h.166c.449-1.519 1.396-2.311 2.642-2.311 1.396 0 2.077.875 2.177 2.344h.182c.432-1.535 1.33-2.344 2.626-2.344 1.545 0 2.326 1.04 2.326 2.74v5.299h-2.276V11.73c0-.792-.366-1.337-1.197-1.337-.964 0-1.562.677-1.562 1.651v4.358h-2.26V11.73c0-.792-.382-1.337-1.196-1.337m17.698 2.113c0-2.69-.981-4.143-2.71-4.143-1.262 0-2.126.825-2.541 2.195h-.15V8.58h-2.26v10.333h2.26v-4.556h.133c.399 1.37 1.246 2.278 2.559 2.278 1.695 0 2.709-1.436 2.709-4.127m-5.4.33c0 1.09.63 1.816 1.594 1.816 1.097 0 1.579-.71 1.579-2.146s-.482-2.113-1.562-2.113c-.997 0-1.612.71-1.612 1.832zm11.797-1.073 2.094-.396c-.283-1.898-1.28-3.004-3.623-3.004-2.508 0-4.037 1.568-4.037 4.226 0 2.674 1.562 4.044 4.054 4.044 2.243 0 3.357-1.14 3.623-2.955l-2.077-.495c-.166.809-.55 1.486-1.563 1.486-1.162 0-1.728-.81-1.728-2.196 0-1.485.649-2.146 1.695-2.146.997 0 1.363.594 1.562 1.436m3.407-5.959h2.26v10.598h-2.26zM87.6 16.634c2.51 0 4.038-1.568 4.038-4.143 0-2.609-1.579-4.127-4.038-4.127-2.509 0-4.07 1.518-4.07 4.127 0 2.575 1.511 4.143 4.07 4.143m1.778-4.16c0-1.42-.548-2.228-1.794-2.228s-1.795.808-1.795 2.228.515 2.245 1.795 2.245c1.263 0 1.794-.825 1.794-2.245m8.525 3.929h2.21V8.578h-2.277v4.358c0 .99-.598 1.667-1.561 1.667-.831 0-1.197-.544-1.197-1.353V8.578h-2.26v5.3c0 1.7.764 2.756 2.26 2.756 1.246 0 2.21-.792 2.659-2.311h.166zm11.084 0h-2.26v-2.047h-.133c-.399 1.37-1.263 2.278-2.576 2.278-1.695 0-2.691-1.436-2.691-4.077 0-2.724.996-4.193 2.725-4.193 1.262 0 2.11.825 2.525 2.195h.15V5.805h2.26zm-3.855-1.75c-1.114 0-1.595-.693-1.595-2.096 0-1.47.498-2.163 1.578-2.163.997 0 1.612.726 1.612 1.865v.611c0 1.09-.648 1.783-1.595 1.783M35.816 6.39c0 .668.545 1.21 1.218 1.21s1.219-.542 1.219-1.21c0-.321-.129-.63-.357-.856a1.22 1.22 0 0 0-.862-.355c-.673 0-1.218.542-1.218 1.21" clip-rule="evenodd"/>
            </g>
            <defs><clipPath id="jc-logo-a"><path d="M0 .953h109v18.094H0z"/></clipPath></defs>
          </svg>
        </template>
      </AppNavigation>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Top Bar -->
        <TopBar searchPlaceholder="Search Resources, Users, Settings, etc..." shortcutLabel="⌘/Ctrl + K">
          <template #icon-buttons>
            <PvButton severity="secondary" variant="text" rounded aria-label="Notifications">
              <template #icon><BellIcon class="w-5 h-5" /></template>
            </PvButton>
            <PvButton severity="secondary" variant="text" rounded aria-label="Settings">
              <template #icon><Cog6ToothIcon class="w-5 h-5" /></template>
            </PvButton>
            <PvSelectButton
              v-model="themeMode"
              :options="themeModeOptions"
              optionValue="value"
              :allowEmpty="false"
            >
              <template #option="{ option }">
                <component :is="option.icon" class="w-4 h-4" />
              </template>
            </PvSelectButton>
          </template>
        </TopBar>

        <!-- Page Header -->
        <PageHeader title="Home">
          <template #actions>
            <PvButton label="Customize" severity="secondary" variant="outlined" />
            <PvButton label="Export" severity="secondary" variant="outlined" />
            <PvButton severity="secondary" variant="outlined" aria-label="More actions">
              <template #icon><EllipsisHorizontalIcon class="w-5 h-5" /></template>
            </PvButton>
          </template>
        </PageHeader>

        <!-- Scrollable Dashboard Content -->
        <div class="flex-1 overflow-y-auto p-6 flex flex-col gap-6">

          <!-- Stats Row -->
          <div class="grid grid-cols-4 gap-4">
            <StatCard label="Total Users" :value="168" unit="Users" trend="8% vs last month" trendDirection="down" />
            <StatCard label="Resources" :value="122" unit="Resources" trend="2 new this month" trendDirection="up" />
            <StatCard label="Secrets" :value="86" unit="Devices" trend="23% vs last month" trendDirection="up" />
            <StatCard label="Connectors" :value="40" unit="Connectors" trend="5.3% vs last month" trendDirection="up" />
          </div>

          <!-- Most Connected Resources -->
          <CollapsiblePanel header="Most Connected Resources">
            <CircuitDataTable
              :columns="connectedResourcesColumns"
              :data="connectedResourcesData"
              v-model:selection="selectedResources"
              selectionMode="multiple"
              dataKey="id"
              :paginator="false"
            />
          </CollapsiblePanel>

          <!-- Access Requests -->
          <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
            <div class="flex items-center justify-between px-4 py-3">
              <span class="text-heading-4 text-neutral-base">Access Requests</span>
              <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
            </div>
            <CircuitDataTable
              :columns="accessRequestsColumns"
              :data="accessRequestsData"
              v-model:selection="selectedRequests"
              selectionMode="multiple"
              dataKey="id"
              :paginator="false"
            />
          </div>

          <!-- Bottom 2x2 Grid -->
          <div class="grid grid-cols-2 gap-4">

            <!-- Recent Logins -->
            <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
              <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
                <span class="text-heading-4" :style="{ color: bodyTextColor }">Recent Logins</span>
                <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
              </div>
              <div class="px-4 py-3">
                <div class="flex items-baseline gap-1.5 mb-3">
                  <span class="text-heading-3 text-tag-danger-text">26</span>
                  <span :style="{ color: subtleTextColor, fontSize: '14px', lineHeight: '20px' }">Logins in the last</span>
                  <span :style="{ color: subtleTextColor, fontSize: '14px', lineHeight: '20px', fontWeight: 600 }">48 hours</span>
                </div>
                <div class="flex flex-col">
                  <div v-for="(login, idx) in recentLoginsData" :key="idx" class="flex items-center justify-between py-2.5" :class="idx < recentLoginsData.length - 1 ? 'border-b border-neutral-default_solid' : ''">
                    <div class="flex flex-col">
                      <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">{{ login.name }}</span>
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ login.email }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">logged in: <span class="text-link-base">{{ login.time }}</span></span>
                      <PvButton severity="secondary" variant="text" rounded size="small" aria-label="More">
                        <template #icon><EllipsisHorizontalIcon class="w-4 h-4" /></template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Credential Expirations -->
            <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
              <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
                <span class="text-heading-4" :style="{ color: bodyTextColor }">Credential Expirations</span>
                <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
              </div>
              <div class="px-4 py-3">
                <div class="flex items-baseline gap-1.5 mb-3">
                  <span class="text-heading-3 text-tag-danger-text">7</span>
                  <span :style="{ color: subtleTextColor, fontSize: '14px', lineHeight: '20px' }">Expiring Soon</span>
                  <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">Next 7 days</span>
                </div>
                <div class="flex flex-col">
                  <div v-for="(cred, idx) in credentialExpirationsData" :key="idx" class="flex items-center justify-between py-2.5" :class="idx < credentialExpirationsData.length - 1 ? 'border-b border-neutral-default_solid' : ''">
                    <div class="flex flex-col">
                      <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">{{ cred.name }}</span>
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ cred.email }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ cred.type }}: {{ cred.expiry }}</span>
                      <PvButton severity="secondary" variant="text" rounded size="small" aria-label="More">
                        <template #icon><EllipsisHorizontalIcon class="w-4 h-4" /></template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Weak Credentials -->
            <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
              <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
                <span class="text-heading-4" :style="{ color: bodyTextColor }">Weak Credentials</span>
                <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
              </div>
              <div class="px-4 py-3">
                <div class="flex items-baseline gap-1.5 mb-3">
                  <span class="text-heading-3 text-tag-danger-text">11</span>
                  <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">Credentials</span>
                </div>
                <div class="flex flex-col">
                  <div v-for="(weak, idx) in weakCredentialsData" :key="idx" class="flex items-center justify-between py-2.5" :class="idx < weakCredentialsData.length - 1 ? 'border-b border-neutral-default_solid' : ''">
                    <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">{{ weak.name }}</span>
                    <div class="flex items-center gap-2">
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ weak.type }}</span>
                      <PvButton severity="secondary" variant="text" rounded size="small" aria-label="More">
                        <template #icon><EllipsisHorizontalIcon class="w-4 h-4" /></template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Unused Credentials -->
            <div class="border border-neutral-default_solid rounded-md bg-neutral-base">
              <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
                <span class="text-heading-4" :style="{ color: bodyTextColor }">Unused Credentials</span>
                <PvButton label="View All" severity="secondary" variant="outlined" size="small" />
              </div>
              <div class="px-4 py-3">
                <div class="flex items-baseline gap-1.5 mb-3">
                  <span class="text-heading-3 text-tag-danger-text">14</span>
                  <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">Unused</span>
                </div>
                <div class="flex flex-col">
                  <div v-for="(unused, idx) in unusedCredentialsData" :key="idx" class="flex items-center justify-between py-2.5" :class="idx < unusedCredentialsData.length - 1 ? 'border-b border-neutral-default_solid' : ''">
                    <span :style="{ color: bodyTextColor, fontSize: '14px', lineHeight: '20px' }">{{ unused.name }}</span>
                    <div class="flex items-center gap-2">
                      <span :style="{ color: subtleTextColor, fontSize: '12px', lineHeight: '16px' }">{{ unused.type }}: {{ unused.text }}</span>
                      <PvButton severity="secondary" variant="text" rounded size="small" aria-label="More">
                        <template #icon><EllipsisHorizontalIcon class="w-4 h-4" /></template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Bottom Help Link -->
          <div class="flex items-center gap-1 pb-4 text-body-sm text-neutral-subtle">
            <span>Having trouble with the new navigation?</span>
            <span class="text-link-base cursor-pointer hover:underline">Check out the guide</span>
          </div>

        </div>
      </div>
    </div>
  `}),pt={title:"Projects/Mike's Playground/JumpCloud Vault/Darkmode Screens",component:se,parameters:{layout:"fullscreen"}},l={};var u,v,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const mt=["HomePage"];export{l as HomePage,mt as __namedExportsOrder,pt as default};
