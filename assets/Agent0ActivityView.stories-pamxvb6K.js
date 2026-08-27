import{d as a}from"./iframe-e359xqcE.js";import{_ as o}from"./Agent0ActivityView-g9p47iC7.js";import"./RichText.vue-DSFy4cWp.js";import{a as s}from"./formatListedDateTime-XDJFFXA_.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import{a as n}from"./mockData-DdkQ6TJx.js";import{u as m}from"./useProfileDetailBindings-CXy_sxF7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-DmpQNvQy.js";import"./index-B2MD1nhU.js";import"./index-DG2lsddg.js";import"./index-T5BskalJ.js";import"./index-SNTWOJlm.js";import"./index-Do95Hz07.js";import"./index-ss00ocVv.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-B6IZQdQn.js";import"./index-YE3wsXmc.js";import"./index-D72zYeEF.js";import"./index-C8Trrx-R.js";import"./index-CgskNI-h.js";import"./index-WY88b_Bj.js";import"./index-CWO9Utw3.js";import"./index-BOWouLqF.js";import"./index-B2ZM6yJv.js";import"./index-C4r0EfiV.js";import"./DataTable.vue-Dt4av9HN.js";import"./Paginator.vue-CUZVRWXH.js";import"./index-CTBTSs98.js";import"./index-8qCCvjmZ.js";import"./index-DRbtjQJv.js";import"./ChevronRightIcon-atQJRe2P.js";import"./index-B4Kwt-uL.js";import"./index-9U7SPxNC.js";import"./index-CZJvM9KI.js";import"./index-MDUUAlov.js";import"./useDataTableSize-OVg47YRd.js";import"./DataTableToolbar.vue-CuLsC_2r.js";import"./FilterChip.vue-DoLqV2Kl.js";import"./index-BLqIZ8v0.js";import"./SaveViewPanel.vue-Dqdohw-T.js";import"./CheckboxWithLabel.vue-D6A-BAKo.js";import"./ColumnConfigDropdown.vue-DOGn7883.js";import"./index-C3FgrSHB.js";import"./LinkText.vue-CAkZt6Z4.js";import"./ArrowRightIcon-LWeHu1Pb.js";import"./DropdownSearch.vue-D9XD5nPM.js";import"./useContainer-DGxftqyG.js";import"./EyeIcon-CEoyLAXD.js";import"./FunnelIcon-BEor3Yz-.js";import"./FunnelIcon-BG58avoD.js";import"./Dropdown.vue-BCXCU-gF.js";import"./SavedViewsDropdown.vue-DLEv2TnD.js";import"./StarIcon-BMOKyYsx.js";import"./PencilIcon-Bja47iKl.js";import"./TrashIcon-D83dzVWN.js";import"./ExportDropdown.vue-DCRor2VM.js";import"./index-Bz421pNc.js";import"./ArrowDownTrayIcon-DlfVAaU-.js";import"./PlusIcon-BfUZNis0.js";import"./index-B6YXkmJR.js";import"./ArrowPathIcon-Cz3ipuws.js";import"./FormField.vue-X6cJp_-2.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./ListPageLayout.vue-HUNIhgRV.js";import"./BasePageLayout.vue-CIy2WbCv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue-7C2suGZ4.js";import"./DataTableCellLink.vue-BfDcOf_v.js";import"./DataTableCellStatus.vue-BOSUv6NN.js";import"./PencilSquareIcon-TMd81OuA.js";import"./index-Bn8GZArD.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";import"./ShieldCheckIcon-C8LDGAuf.js";import"./Cog6ToothIcon-B_W-iGDU.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
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
