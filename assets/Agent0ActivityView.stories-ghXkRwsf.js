import{d as a}from"./iframe-DuzLv9Pd.js";import{_ as o}from"./Agent0ActivityView-CDnBZ3_q.js";import"./RichText.vue-D4MvUk45.js";import{a as s}from"./formatListedDateTime-D27HJzil.js";import"./allowedAiClientOriginKindLabels-DYIWO8UO.js";import{a as n}from"./mockData-DdtCyTwi.js";import{u as m}from"./useProfileDetailBindings-DQ9p7UqW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./index-CLqqXC_P.js";import"./index-D5zH4fN4.js";import"./index-b5e0TYx1.js";import"./index-CWlqIe1B.js";import"./index-CGiVUquh.js";import"./index-DnaDt85i.js";import"./index-CFtktJtS.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-BcWNlClR.js";import"./index-BemneOh4.js";import"./index-CjiEPaTZ.js";import"./index-BXhsDisi.js";import"./index-Brczh--H.js";import"./index-DL1Pt7bO.js";import"./index-DlU_MYIi.js";import"./index-b0ySB-5C.js";import"./index-DOizLEho.js";import"./index-SNXtFHNq.js";import"./DataTable.vue-Cj_l__a2.js";import"./Paginator.vue-CKNm14yQ.js";import"./index-CEiioRpE.js";import"./index-gSNiAAF9.js";import"./index-CdgF4ttL.js";import"./ChevronRightIcon-RLkhG38k.js";import"./index-CO-G9M_W.js";import"./index-JYiShB9D.js";import"./index-DUWomeF_.js";import"./index-BQabsSYQ.js";import"./useDataTableSize-BPDfn_He.js";import"./DataTableToolbar.vue-C5r-1yVm.js";import"./FilterChip.vue-Ca3a8qy6.js";import"./index-D3QA_pcE.js";import"./SaveViewPanel.vue-i4O3zuWV.js";import"./CheckboxWithLabel.vue-DoqDZu3R.js";import"./ColumnConfigDropdown.vue-BVX8ajl9.js";import"./index-BbuMzApp.js";import"./LinkText.vue-Dtn5ZYX7.js";import"./ArrowRightIcon-CebixEfQ.js";import"./DropdownSearch.vue-p79a3D5Z.js";import"./useContainer-Do_p2hLC.js";import"./EyeIcon-DZdtwtTn.js";import"./FunnelIcon-Cz3H4XLI.js";import"./FunnelIcon-CD3UCyXH.js";import"./Dropdown.vue-BvGCjloM.js";import"./SavedViewsDropdown.vue-YKksxr3f.js";import"./StarIcon-CQ684_9r.js";import"./PencilIcon-pp46wisY.js";import"./TrashIcon-Cf9pvfv2.js";import"./ExportDropdown.vue-SboJTm8h.js";import"./index-ZriuU7yS.js";import"./ArrowDownTrayIcon-BHhLe726.js";import"./PlusIcon-A7C_VQzz.js";import"./index-CWdSX-TA.js";import"./ArrowPathIcon-DniohQTk.js";import"./FormField.vue-CblrQISo.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./ListPageLayout.vue-c8ILG3IR.js";import"./BasePageLayout.vue-DVNcPgxb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue-1rDF5L9k.js";import"./DataTableCellLink.vue-C2-AqLyE.js";import"./DataTableCellStatus.vue-mQvI-oeM.js";import"./PencilSquareIcon-DxXATT4Q.js";import"./index-Di5n2FZb.js";import"./ArrowRightStartOnRectangleIcon-D4g3cMin.js";import"./ArrowTopRightOnSquareIcon-vQx7CBJY.js";import"./RocketLaunchIcon-Cvc1Zpa7.js";import"./HomeIcon-B8gBiWKx.js";import"./UserIcon-CtiZzZ2X.js";import"./UsersIcon-BT-W7sF-.js";import"./UserGroupIcon-CWdxV-oE.js";import"./CommandLineIcon-BD5MFUQg.js";import"./ClipboardDocumentListIcon-CjFMn6dO.js";import"./ClipboardDocumentCheckIcon-k7_FGCzy.js";import"./CpuChipIcon-BBHeqCE_.js";import"./ShieldCheckIcon-BpS1grCD.js";import"./Cog6ToothIcon-bwwfqrlO.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
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
