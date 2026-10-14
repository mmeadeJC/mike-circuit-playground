import{d as a}from"./iframe-600w3n4H.js";import{_ as o}from"./Agent0ActivityView-CNtEXTjM.js";import"./RichText.vue-CqDMFobT.js";import{a as s}from"./formatListedDateTime-Br3v5uvi.js";import"./allowedAiClientOriginKindLabels-BXOqaci5.js";import{a as n}from"./mockData-fbvw1-A_.js";import{u as m}from"./useProfileDetailBindings-CvBAnAuU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-DVtMRYBu.js";import"./index-CtvYIbWm.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-CTl3vUKN.js";import"./index-DyPrYXuB.js";import"./index-B3TfiOtM.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-v8PIUxlP.js";import"./index-DcxJnJl9.js";import"./index-DosJGK4C.js";import"./index-Bu8ekTSX.js";import"./index-DBXXhGgD.js";import"./index-DtheA9qo.js";import"./index-eDcuTK2L.js";import"./index-CC9FbOuz.js";import"./index-Cy7FONXb.js";import"./index-BZWznq43.js";import"./DataTable.vue-BpegDMSl.js";import"./Paginator.vue-N5cwZAMR.js";import"./index-BuAmHxBs.js";import"./index-CHjA10XC.js";import"./index-Bz6f5oKS.js";import"./ChevronRightIcon-BF9RliU4.js";import"./index-BIOcEsci.js";import"./index-Co2ulTVq.js";import"./index-D0lPU1dy.js";import"./index-Dl3ThDuu.js";import"./useDataTableSize-DxcZGPDn.js";import"./DataTableToolbar.vue-BqFfdW4o.js";import"./FilterChip.vue-BtvpShAi.js";import"./index-DA9jvc7b.js";import"./SaveViewPanel.vue-Czdz2F03.js";import"./CheckboxWithLabel.vue-BmE_SJFg.js";import"./ColumnConfigDropdown.vue-Bjs32508.js";import"./index-B_FT7YyE.js";import"./LinkText.vue-Bnu_L6eP.js";import"./ArrowRightIcon-D0LHaIDr.js";import"./DropdownSearch.vue-Cx63eXt4.js";import"./useContainer-KG6QsGJY.js";import"./EyeIcon-BZIzJ2Hw.js";import"./FunnelIcon-CVFb1k60.js";import"./FunnelIcon-rqOm78Ah.js";import"./Dropdown.vue-BqAjJND7.js";import"./SavedViewsDropdown.vue-Dz_I86JH.js";import"./StarIcon-D6Wvb7gj.js";import"./PencilIcon-ChxzSqPh.js";import"./TrashIcon-DM5MVlXY.js";import"./ExportDropdown.vue-ogXm79xd.js";import"./index-BG9T1I3x.js";import"./ArrowDownTrayIcon-HGt3Lp9D.js";import"./PlusIcon-Ji6CXzfg.js";import"./index-CePK2PS1.js";import"./ArrowPathIcon-BgUDuyAT.js";import"./FormField.vue-9Bh63gOi.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./ListPageLayout.vue-Bn2tSLYK.js";import"./BasePageLayout.vue-DPmEk4Cz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue-BLAdT-0i.js";import"./DataTableCellLink.vue-CLTjAIj8.js";import"./DataTableCellStatus.vue-WvqoxSpa.js";import"./PencilSquareIcon-DlUtcSnh.js";import"./index-BPN10FIB.js";import"./ArrowRightStartOnRectangleIcon-Docb568Z.js";import"./ArrowTopRightOnSquareIcon-D1DflJJw.js";import"./RocketLaunchIcon-C0UcLMmT.js";import"./HomeIcon-DzFCrQek.js";import"./UserIcon-BnMpn0XC.js";import"./UsersIcon-BAek990o.js";import"./UserGroupIcon-BAYPParn.js";import"./CommandLineIcon-BHverfhZ.js";import"./ClipboardDocumentListIcon-DJ3dp-pS.js";import"./ClipboardDocumentCheckIcon-fhZeORzP.js";import"./CpuChipIcon-DHk9P2K6.js";import"./ShieldCheckIcon-BytxG3nK.js";import"./Cog6ToothIcon-DHjR5ucD.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
        <Agent0ActivityView
          :activityLogColumns="activityLogColumns"
          :filteredActivityData="filteredActivityData"
          :showFilterDialog="showFilterDialog"
          :draftUsers="draftUsers"
          :draftEventTypes="draftEventTypes"
          :draftServers="draftServers"
          :draftStatus="draftStatus"
          :userOptions="userOptions"
          :eventTypeOptions="eventTypeOptions"
          :serverOptions="serverOptions"
          :statusOptions="statusOptions"
          :activeFilterChips="activeFilterChips"
          :activeFilterCount="activeFilterCount"
          @search="handleActivitySearch"
          @openFilterDialog="openFilterDialog"
          @applyFilters="applyFilters"
          @cancelFilterDialog="cancelFilterDialog"
          @clearDraftFilters="clearDraftFilters"
          @clearAllFilters="clearAllFilters"
          @removeFilterChip="removeFilterChip"
          @update:draftUsers="draftUsers = $event"
          @update:draftEventTypes="draftEventTypes = $event"
          @update:draftServers="draftServers = $event"
          @update:draftStatus="draftStatus = $event"
        />
      `})};var r,i,e;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Recent Activity',
  render: () => defineComponent({
    components: {
      Agent0ActivityView
    },
    setup() {
      const filters = useActivityFilters(activityLogData);
      return {
        activityLogColumns,
        ...filters
      };
    },
    template: \`
        <Agent0ActivityView
          :activityLogColumns="activityLogColumns"
          :filteredActivityData="filteredActivityData"
          :showFilterDialog="showFilterDialog"
          :draftUsers="draftUsers"
          :draftEventTypes="draftEventTypes"
          :draftServers="draftServers"
          :draftStatus="draftStatus"
          :userOptions="userOptions"
          :eventTypeOptions="eventTypeOptions"
          :serverOptions="serverOptions"
          :statusOptions="statusOptions"
          :activeFilterChips="activeFilterChips"
          :activeFilterCount="activeFilterCount"
          @search="handleActivitySearch"
          @openFilterDialog="openFilterDialog"
          @applyFilters="applyFilters"
          @cancelFilterDialog="cancelFilterDialog"
          @clearDraftFilters="clearDraftFilters"
          @clearAllFilters="clearAllFilters"
          @removeFilterChip="removeFilterChip"
          @update:draftUsers="draftUsers = $event"
          @update:draftEventTypes="draftEventTypes = $event"
          @update:draftServers="draftServers = $event"
          @update:draftStatus="draftStatus = $event"
        />
      \`
  })
}`,...(e=(i=t.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const Zt=["RecentActivity"];export{t as RecentActivity,Zt as __namedExportsOrder,Yt as default};
