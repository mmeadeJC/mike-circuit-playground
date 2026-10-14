import{d as a}from"./iframe-BF79XtSp.js";import{_ as o}from"./Agent0ActivityView-x4_xta0F.js";import"./RichText.vue-CqGWfsH6.js";import{a as s}from"./formatListedDateTime-DrwQiUrl.js";import"./allowedAiClientOriginKindLabels-BT_IAVu_.js";import{a as n}from"./mockData-DCPRTQhH.js";import{u as m}from"./useProfileDetailBindings-DFq0WTQO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-xyLKPl8B.js";import"./index-ZhWAdK_X.js";import"./index-BVIEBy36.js";import"./index-U54BmgOn.js";import"./index-CR4bzIFl.js";import"./index-DIEiO-G_.js";import"./index-BCK9IpMv.js";import"./index-Dtk_BLuX.js";import"./index-P-Yy9vDb.js";import"./index-NvGJIH0G.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-D43yMZyM.js";import"./index-DckzHriz.js";import"./index-lST1gP85.js";import"./index-BkZv6EbR.js";import"./index-bqWkeg_n.js";import"./index-PuebpjLD.js";import"./index-LSIY3ybW.js";import"./index-ADEA_n6J.js";import"./index-K7HfYiQs.js";import"./index-Br5QgYsP.js";import"./DataTable.vue-BHtrcVVc.js";import"./Paginator.vue-Dy2cGaqu.js";import"./index-DMx2X42p.js";import"./index-C4C8uF8-.js";import"./index-dbOlY_KS.js";import"./ChevronRightIcon-Ds2oc56S.js";import"./index-DccRakCb.js";import"./index-BKhPoeTw.js";import"./index-DkPTkS_b.js";import"./index-Ln8ICEkF.js";import"./useDataTableSize-CTpRUYeY.js";import"./DataTableToolbar.vue-CXKDBfw_.js";import"./FilterChip.vue-BEAOtRH2.js";import"./index-D6ZVkPAC.js";import"./SaveViewPanel.vue-mC0sem9y.js";import"./CheckboxWithLabel.vue-BXWhMwWQ.js";import"./ColumnConfigDropdown.vue-CH6WIYua.js";import"./index-DHPhN9oC.js";import"./LinkText.vue-C1RSiwbX.js";import"./ArrowRightIcon-BO2KgFRi.js";import"./DropdownSearch.vue-DZQ_8jKi.js";import"./useContainer-CrNDtG4W.js";import"./EyeIcon-DVodujmo.js";import"./FunnelIcon-BvP__tww.js";import"./FunnelIcon-CZhOYWoP.js";import"./Dropdown.vue-Csy1Li7S.js";import"./SavedViewsDropdown.vue-CtH4QF7P.js";import"./StarIcon-BU5rQd7q.js";import"./PencilIcon-2BKw63Xz.js";import"./TrashIcon-C2JPFfO6.js";import"./ExportDropdown.vue-DQI6ViPu.js";import"./index-DQOir5uS.js";import"./ArrowDownTrayIcon-DZq-TuMT.js";import"./PlusIcon-B0Ifsxjs.js";import"./index-C_hXlnlQ.js";import"./ArrowPathIcon-DSpVmERO.js";import"./FormField.vue-C69YWs2P.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./ListPageLayout.vue-CcKGpmva.js";import"./BasePageLayout.vue-DaSm17Gu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue--n6dloHJ.js";import"./DataTableCellLink.vue-D4Pd0MA6.js";import"./DataTableCellStatus.vue-C6HcYjwX.js";import"./PencilSquareIcon-BuhRV4E0.js";import"./index-vX2hHYrt.js";import"./ArrowRightStartOnRectangleIcon-m3mkNkcV.js";import"./ArrowTopRightOnSquareIcon-Bb4rBF4d.js";import"./RocketLaunchIcon-BqMZlamx.js";import"./HomeIcon-CRuA8H2X.js";import"./UserIcon-KpILDYI2.js";import"./UsersIcon-mPqKsBT7.js";import"./UserGroupIcon-odcgopw8.js";import"./CommandLineIcon-D7zOx_l8.js";import"./ClipboardDocumentListIcon-C1vC7p4N.js";import"./ClipboardDocumentCheckIcon-Hd-7WFS2.js";import"./CpuChipIcon-C8H0NY6t.js";import"./ShieldCheckIcon-xpQZCNU8.js";import"./Cog6ToothIcon-xFudfeaO.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
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
