import{d as a}from"./iframe-wHZiWscM.js";import{_ as o}from"./Agent0ActivityView-Du480IGv.js";import"./RichText.vue-CHGMbC98.js";import{a as s}from"./formatListedDateTime-DP50yT1B.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import{a as n}from"./mockData-Kk33s5oK.js";import{u as m}from"./useProfileDetailBindings-D8k_gkGL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-sD1-d5gW.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-BCe0KpuU.js";import"./index-BsadxdHP.js";import"./index-CK8YOc-s.js";import"./index-OomjoOn0.js";import"./index-DG2sTEJu.js";import"./index-CfbwjWnr.js";import"./index-Bx3ApnQM.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-CDKqnkXt.js";import"./index-BUW6mAnI.js";import"./index-B9GWGLe7.js";import"./index-BZ44v4AP.js";import"./index-B0f83xA1.js";import"./index-Box4ManB.js";import"./index-_1pOB8MI.js";import"./index-DSxjRmh5.js";import"./index-0sOqJRIv.js";import"./index-QsK0X07t.js";import"./DataTable.vue-DmbfuVh_.js";import"./Paginator.vue-CcRzGc69.js";import"./index-B52hguGd.js";import"./index-NL-pVcRR.js";import"./index-DBRsCQYT.js";import"./ChevronRightIcon-CCd9mxHV.js";import"./index-BX58BE5p.js";import"./index-Btj4TG0i.js";import"./index-Cho0WR5H.js";import"./index-BsNWgMfo.js";import"./useDataTableSize-GGD2JHfG.js";import"./DataTableToolbar.vue-BhLGIGSm.js";import"./FilterChip.vue-BuyWvAI-.js";import"./index-cu68_uPv.js";import"./SaveViewPanel.vue-BSEPrvYC.js";import"./CheckboxWithLabel.vue-Dt-Ksd6A.js";import"./ColumnConfigDropdown.vue-CcDJZGBU.js";import"./index-Bu_OB4cS.js";import"./LinkText.vue-CZtYLLzG.js";import"./ArrowRightIcon-BHnqKJRg.js";import"./DropdownSearch.vue-C35jZCVV.js";import"./useContainer-Bxg-bmhf.js";import"./EyeIcon-BcUj4a6b.js";import"./FunnelIcon-CmBG5ncV.js";import"./FunnelIcon-BdHbE0IY.js";import"./Dropdown.vue-BSd8d_yA.js";import"./SavedViewsDropdown.vue-BeF5vpON.js";import"./StarIcon-DK6Nr4X7.js";import"./PencilIcon-wBp-c_x7.js";import"./TrashIcon-UFJmnL45.js";import"./ExportDropdown.vue-DBKeRelR.js";import"./index-DDAh2LOB.js";import"./ArrowDownTrayIcon-Akc_5Wek.js";import"./PlusIcon-DGBp3WlK.js";import"./index-BUFlMVon.js";import"./ArrowPathIcon-bipDiGZD.js";import"./FormField.vue-Di73I2_d.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./InformationCircleIcon-DZ4ah18T.js";import"./ListPageLayout.vue-7CWw602M.js";import"./BasePageLayout.vue-BxTNDttc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue-CtY5epkb.js";import"./DataTableCellLink.vue-DCTifLuN.js";import"./DataTableCellStatus.vue-DQo5LaW9.js";import"./PencilSquareIcon-BGXvyPGw.js";import"./index-Andb7bwO.js";import"./ArrowRightStartOnRectangleIcon-CLdR-YKA.js";import"./ArrowTopRightOnSquareIcon-Di75X2M6.js";import"./RocketLaunchIcon-CNdx9WZl.js";import"./HomeIcon-5r_QbQOS.js";import"./UserIcon-BeF8Hyvt.js";import"./UsersIcon-DnG2W9uG.js";import"./UserGroupIcon-BLdtu9b8.js";import"./CommandLineIcon-8W_LRzjZ.js";import"./ClipboardDocumentListIcon-zSNh2cWZ.js";import"./ClipboardDocumentCheckIcon-B9O-4nOP.js";import"./CpuChipIcon-D7soRAGz.js";import"./ShieldCheckIcon-XJT-0kMA.js";import"./Cog6ToothIcon-CpmE-KkZ.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
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
