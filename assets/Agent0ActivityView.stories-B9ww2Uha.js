import{d as a}from"./iframe-BFKWv3KJ.js";import{_ as o}from"./Agent0ActivityView-Cyz34QlT.js";import"./RichText.vue-vrSf4OCs.js";import{a as s}from"./formatListedDateTime-Bapyr9ga.js";import"./allowedAiClientOriginKindLabels-B_IN2wf3.js";import{a as n}from"./mockData-CMO8nWrt.js";import{u as m}from"./useProfileDetailBindings-BB-QYpPY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-CIkrppRN.js";import"./index-BXYT2gRT.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-2n8eVSrk.js";import"./index-D6YUBXg4.js";import"./index-DdAbza1U.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-D7_QFsMT.js";import"./index--0ujXtkk.js";import"./index-D77ELRyA.js";import"./index-2rr2RyNS.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-DynKogrQ.js";import"./index-CiP5ygH7.js";import"./index-CG-J9OXr.js";import"./index-BVT3NVWy.js";import"./DataTable.vue-BxBNPbHm.js";import"./Paginator.vue-B6hVKag8.js";import"./index-CuXoLfeA.js";import"./index-DICFt-SZ.js";import"./index-BVkesBF5.js";import"./ChevronRightIcon-DUJGUktX.js";import"./index-CFp6THYW.js";import"./index-CXxQSp7k.js";import"./index-Dn4n97fu.js";import"./index-EcMNudkA.js";import"./useDataTableSize-DIEaYxrt.js";import"./DataTableToolbar.vue-Dg0IzUBT.js";import"./FilterChip.vue-pwVG6dB0.js";import"./index-TlXkjPb8.js";import"./SaveViewPanel.vue-Dp9X-muq.js";import"./CheckboxWithLabel.vue-BFy88Znm.js";import"./ColumnConfigDropdown.vue-pb1ZhEft.js";import"./index-BECXr3Nj.js";import"./LinkText.vue-cWXQLUic.js";import"./ArrowRightIcon-7cEC43zy.js";import"./DropdownSearch.vue-D-PghnKV.js";import"./useContainer-BRiKvAwH.js";import"./EyeIcon-DOU3t9h_.js";import"./FunnelIcon-DOZoA26x.js";import"./FunnelIcon-Dd6Vil59.js";import"./Dropdown.vue-Cz9UQQvj.js";import"./SavedViewsDropdown.vue-BZ-k7bgE.js";import"./StarIcon-DbV_0Wc8.js";import"./PencilIcon-D2dkdMHd.js";import"./TrashIcon-DjM9Jqnc.js";import"./ExportDropdown.vue-CUA8Jf1d.js";import"./index-Dsw3gaHM.js";import"./ArrowDownTrayIcon-dPGg0p95.js";import"./PlusIcon-BX2LLMgO.js";import"./index-L5huya0i.js";import"./ArrowPathIcon-FnjRaPAd.js";import"./FormField.vue-CsyFfyrv.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";import"./ListPageLayout.vue-BLCCPUcH.js";import"./BasePageLayout.vue-DTEUtrED.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue-CzHXmDrp.js";import"./DataTableCellLink.vue-Y8x8PfTc.js";import"./DataTableCellStatus.vue-shoc61mp.js";import"./PencilSquareIcon-BXVF9XnI.js";import"./index-CaoDn_b_.js";import"./ArrowRightStartOnRectangleIcon-B1SaEZKF.js";import"./ArrowTopRightOnSquareIcon-P9gMEZmv.js";import"./RocketLaunchIcon-CoLGueqR.js";import"./HomeIcon-TceTBPbm.js";import"./UserIcon-CrDAGwP1.js";import"./UsersIcon-BlDUqua-.js";import"./UserGroupIcon-DHcrWHdF.js";import"./CommandLineIcon-C_kbsQBp.js";import"./ClipboardDocumentListIcon--U-psXCG.js";import"./ClipboardDocumentCheckIcon-D4o5FMXS.js";import"./CpuChipIcon-CERMgrl8.js";import"./ShieldCheckIcon-CQlKNWxZ.js";import"./Cog6ToothIcon-CLTd3td9.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
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
