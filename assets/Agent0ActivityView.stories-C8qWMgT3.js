import{d as a}from"./iframe-CrzTiCu6.js";import{_ as o}from"./Agent0ActivityView-TtuIEbog.js";import"./RichText.vue-Bo-7vQsj.js";import{a as s}from"./formatListedDateTime-BBq13wXG.js";import"./allowedAiClientOriginKindLabels-DhjafCXw.js";import{a as n}from"./mockData-C1zsvOf2.js";import{u as m}from"./useProfileDetailBindings-BoQHknTT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-BgpC02hC.js";import"./index-B9HYPvme.js";import"./index-BAK6AhQo.js";import"./index-DRWkJ3r7.js";import"./index-DHkFNkeW.js";import"./index-B5AAKPzU.js";import"./index-DBMnBcxB.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-CJ65Gie5.js";import"./index-DQmrvgOu.js";import"./index-B-mFHERX.js";import"./index-DhP11m7K.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-CXMkhyA-.js";import"./index-BaGPKY7N.js";import"./index-DUgv6TgD.js";import"./index-C5-zlbJW.js";import"./DataTable.vue-CQiZ9-Bt.js";import"./Paginator.vue-AbHFmpig.js";import"./index-Cp7GERer.js";import"./index-BRT9CP7z.js";import"./index-B6P6vZ8T.js";import"./ChevronRightIcon-BtziqKKH.js";import"./index-CJtZNPwL.js";import"./index-BwTMqirk.js";import"./index-Dq5aZyU5.js";import"./index-IX3fe5I4.js";import"./useDataTableSize-KUQE_ZpM.js";import"./DataTableToolbar.vue-De4PigJx.js";import"./FilterChip.vue-DzkAtwDL.js";import"./index-3NCE7FTh.js";import"./SaveViewPanel.vue-CT093yRW.js";import"./CheckboxWithLabel.vue-BCoIi1Rw.js";import"./ColumnConfigDropdown.vue-DIOBmyAl.js";import"./index-CdmNXZp5.js";import"./LinkText.vue-DffDQTJD.js";import"./ArrowRightIcon-BXae0GnV.js";import"./DropdownSearch.vue-DhjA7urJ.js";import"./useContainer-V_XjkKmd.js";import"./EyeIcon-CR4Kvmha.js";import"./FunnelIcon-Dv4pl4l7.js";import"./FunnelIcon-DdFOZms1.js";import"./Dropdown.vue-B3uoPsDo.js";import"./SavedViewsDropdown.vue-PX9Qdnj8.js";import"./StarIcon-C8GBQttC.js";import"./PencilIcon-D-BT-yjF.js";import"./TrashIcon-FaxNGpYS.js";import"./ExportDropdown.vue-C7xMtUr7.js";import"./index-Cnf3VQH7.js";import"./ArrowDownTrayIcon-Cc30gtJU.js";import"./PlusIcon-D2izwpUR.js";import"./index-DiksCyp3.js";import"./ArrowPathIcon-DRE--ueV.js";import"./FormField.vue-CTr1UxJM.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./ListPageLayout.vue-B1hlnzxN.js";import"./BasePageLayout.vue-DIEW9flY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue-rWBuNzMD.js";import"./DataTableCellLink.vue-8rYsVPn_.js";import"./DataTableCellStatus.vue-BpGZyrOE.js";import"./PencilSquareIcon-CPPagcZ0.js";import"./index-CjqWYhin.js";import"./ArrowRightStartOnRectangleIcon-CBJnXu54.js";import"./ArrowTopRightOnSquareIcon-DS4hPvi9.js";import"./RocketLaunchIcon-CAzmE-6h.js";import"./HomeIcon-BQPM_8Qu.js";import"./UserIcon-Bri6dvnd.js";import"./UsersIcon-DqHPfoZY.js";import"./UserGroupIcon-B6yu2ODb.js";import"./CommandLineIcon-vFXJRXVY.js";import"./ClipboardDocumentListIcon-yzE7qRAt.js";import"./ClipboardDocumentCheckIcon-CDO3bo_W.js";import"./CpuChipIcon-Df3nujkA.js";import"./ShieldCheckIcon-CwbvLCk-.js";import"./Cog6ToothIcon-BNOeg4eV.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
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
