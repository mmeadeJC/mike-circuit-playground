import{d as f,r as v,a0 as F}from"./iframe-600w3n4H.js";import{_ as c,a as g}from"./Agent0ProfileDialog-LL40jyx4.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-fbvw1-A_.js";import"./RichText.vue-CqDMFobT.js";import{g as O}from"./formatListedDateTime-Br3v5uvi.js";import"./allowedAiClientOriginKindLabels-BXOqaci5.js";import{b as P}from"./useProfileDetailBindings-CvBAnAuU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-DVtMRYBu.js";import"./index-CtvYIbWm.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-CTl3vUKN.js";import"./index-DyPrYXuB.js";import"./index-B3TfiOtM.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-v8PIUxlP.js";import"./index-DcxJnJl9.js";import"./index-DosJGK4C.js";import"./index-Bu8ekTSX.js";import"./index-DBXXhGgD.js";import"./index-DtheA9qo.js";import"./index-eDcuTK2L.js";import"./index-CC9FbOuz.js";import"./index-Cy7FONXb.js";import"./DataTable.vue-BpegDMSl.js";import"./Paginator.vue-N5cwZAMR.js";import"./index-BuAmHxBs.js";import"./index-CHjA10XC.js";import"./index-Bz6f5oKS.js";import"./ChevronRightIcon-BF9RliU4.js";import"./index-BIOcEsci.js";import"./index-Co2ulTVq.js";import"./index-D0lPU1dy.js";import"./index-Dl3ThDuu.js";import"./useDataTableSize-DxcZGPDn.js";import"./DataTableToolbar.vue-BqFfdW4o.js";import"./FilterChip.vue-BtvpShAi.js";import"./index-DA9jvc7b.js";import"./SaveViewPanel.vue-Czdz2F03.js";import"./CheckboxWithLabel.vue-BmE_SJFg.js";import"./ColumnConfigDropdown.vue-Bjs32508.js";import"./index-B_FT7YyE.js";import"./LinkText.vue-Bnu_L6eP.js";import"./ArrowRightIcon-D0LHaIDr.js";import"./DropdownSearch.vue-Cx63eXt4.js";import"./useContainer-KG6QsGJY.js";import"./EyeIcon-BZIzJ2Hw.js";import"./FunnelIcon-CVFb1k60.js";import"./FunnelIcon-rqOm78Ah.js";import"./Dropdown.vue-BqAjJND7.js";import"./SavedViewsDropdown.vue-Dz_I86JH.js";import"./StarIcon-D6Wvb7gj.js";import"./PencilIcon-ChxzSqPh.js";import"./TrashIcon-DM5MVlXY.js";import"./ExportDropdown.vue-ogXm79xd.js";import"./index-BG9T1I3x.js";import"./ArrowDownTrayIcon-HGt3Lp9D.js";import"./PlusIcon-Ji6CXzfg.js";import"./index-CePK2PS1.js";import"./ArrowPathIcon-BgUDuyAT.js";import"./FormField.vue-9Bh63gOi.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./ListPageLayout.vue-Bn2tSLYK.js";import"./BasePageLayout.vue-DPmEk4Cz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BPN10FIB.js";import"./ArrowRightStartOnRectangleIcon-Docb568Z.js";import"./ArrowTopRightOnSquareIcon-D1DflJJw.js";import"./RocketLaunchIcon-C0UcLMmT.js";import"./HomeIcon-DzFCrQek.js";import"./UserIcon-BnMpn0XC.js";import"./UsersIcon-BAek990o.js";import"./UserGroupIcon-BAYPParn.js";import"./CommandLineIcon-BHverfhZ.js";import"./ClipboardDocumentListIcon-DJ3dp-pS.js";import"./ClipboardDocumentCheckIcon-fhZeORzP.js";import"./CpuChipIcon-DHk9P2K6.js";import"./ShieldCheckIcon-BytxG3nK.js";import"./Cog6ToothIcon-DHjR5ucD.js";import"./DataTableCellText.vue-BLAdT-0i.js";import"./DataTableCellLink.vue-CLTjAIj8.js";import"./DataTableCellStatus.vue-WvqoxSpa.js";import"./PencilSquareIcon-DlUtcSnh.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
        <Agent0ProfilesView
          :filteredProfilesData="filteredData"
          :profileColumns="profileColumns"
          :showFilterDialog="showFilterDialog"
          :draftServers="draftServers"
          :draftUserGroups="draftUserGroups"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          :activeFilterChips="activeFilterChips"
          :activeFilterCount="activeFilterCount"
          @search="handleSearch"
          @openFilterDialog="openFilterDialog"
          @applyFilters="applyFilters"
          @cancelFilterDialog="cancelFilterDialog"
          @clearDraftFilters="clearDraftFilters"
          @clearAllFilters="clearAllFilters"
          @removeFilterChip="removeFilterChip"
          @update:draftServers="draftServers = $event"
          @update:draftUserGroups="draftUserGroups = $event"
        />
      `})},e={render:()=>f({components:{Agent0ProfileDialog:g},setup(){const t=v(!0),d=F({name:"Engineering",serverIds:["github","jira"],userGroupIds:[]});return{visible:t,profileForm:d,serverOptions:G,userGroupOptions:D}},template:`
        <Agent0ProfileDialog
          :visible="visible"
          :editingProfile="{ id: 1 }"
          :profileForm="profileForm"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          @update:visible="visible = $event"
        />
      `})};var s,a,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'List',
  render: () => defineComponent({
    components: {
      Agent0ProfilesView
    },
    setup() {
      const filters = useProfileFilters(profilesData, serversData, userGroupsData, profileUserGroups);
      return {
        profileColumns: getProfileColumns(serversData, userGroupsData, profileUserGroups, profileDashboardStats),
        ...filters
      };
    },
    template: \`
        <Agent0ProfilesView
          :filteredProfilesData="filteredData"
          :profileColumns="profileColumns"
          :showFilterDialog="showFilterDialog"
          :draftServers="draftServers"
          :draftUserGroups="draftUserGroups"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          :activeFilterChips="activeFilterChips"
          :activeFilterCount="activeFilterCount"
          @search="handleSearch"
          @openFilterDialog="openFilterDialog"
          @applyFilters="applyFilters"
          @cancelFilterDialog="cancelFilterDialog"
          @clearDraftFilters="clearDraftFilters"
          @clearAllFilters="clearAllFilters"
          @removeFilterChip="removeFilterChip"
          @update:draftServers="draftServers = $event"
          @update:draftUserGroups="draftUserGroups = $event"
        />
      \`
  })
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var m,n,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => defineComponent({
    components: {
      Agent0ProfileDialog
    },
    setup() {
      const visible = ref(true);
      const profileForm = reactive({
        name: 'Engineering',
        serverIds: ['github', 'jira'],
        userGroupIds: []
      });
      return {
        visible,
        profileForm,
        serverOptions,
        userGroupOptions
      };
    },
    template: \`
        <Agent0ProfileDialog
          :visible="visible"
          :editingProfile="{ id: 1 }"
          :profileForm="profileForm"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          @update:visible="visible = $event"
        />
      \`
  })
}`,...(u=(n=e.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const fe=["List","Dialog"];export{e as Dialog,r as List,fe as __namedExportsOrder,ue as default};
