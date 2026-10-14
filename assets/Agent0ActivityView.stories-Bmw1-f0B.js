import{d as a}from"./iframe-C6YxvgI9.js";import{_ as o}from"./Agent0ActivityView-4xDeNUV6.js";import"./RichText.vue-h6zLaVtH.js";import{a as s}from"./formatListedDateTime-Dt7S-xgo.js";import"./allowedAiClientOriginKindLabels-B6Jfr3AU.js";import{a as n}from"./mockData-BEYIwFVK.js";import{u as m}from"./useProfileDetailBindings-CD7lUmLf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-BnKDY8uA.js";import"./index-AqntUfTj.js";import"./index-DhNdrOGc.js";import"./index-ZhWAdK_X.js";import"./index-BxytmV1x.js";import"./index-Dh_AZRb-.js";import"./index-DT3_wyj-.js";import"./index-BimTu2-D.js";import"./index-ZSh15SJz.js";import"./index-BTBx138D.js";import"./index-B91snyJO.js";import"./index-WUqO2RC_.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-VIQgHCAc.js";import"./index-DJBHbLMX.js";import"./index-B8A-AHQI.js";import"./index-Dp_YoHvc.js";import"./index-1UUbJVrK.js";import"./index-eKE_C28L.js";import"./index-CJZ03RY2.js";import"./index-DLF1yM0N.js";import"./index-DqUJJtw3.js";import"./index-BhaHS2dW.js";import"./DataTable.vue-Cyt8z7Rc.js";import"./Paginator.vue-CUj4V86y.js";import"./index-Ch3Q-vZV.js";import"./index-D_pfiKOk.js";import"./index-B3rEIbXx.js";import"./ChevronRightIcon-DYx_DqJa.js";import"./index-Ct0lVA_L.js";import"./index-CvIohtEI.js";import"./index-CPIDmXOH.js";import"./index-DpARX3gF.js";import"./useDataTableSize-DQ6_HCRc.js";import"./DataTableToolbar.vue-BQYu5ZMp.js";import"./FilterChip.vue-eRobgtcW.js";import"./index-CZUO3voq.js";import"./SaveViewPanel.vue-DHwNgbgC.js";import"./CheckboxWithLabel.vue-CdCpAZFa.js";import"./ColumnConfigDropdown.vue-D_1KAjmw.js";import"./index-BZi2DMME.js";import"./LinkText.vue-2aQeA1S0.js";import"./ArrowRightIcon-BjhmG1dS.js";import"./DropdownSearch.vue-DJziCYXk.js";import"./useContainer-w-xfgTus.js";import"./EyeIcon-IM-N29tT.js";import"./FunnelIcon-BrffPYtQ.js";import"./FunnelIcon-B88oviph.js";import"./Dropdown.vue-DTfK3dWE.js";import"./SavedViewsDropdown.vue-D7Kg98oI.js";import"./StarIcon-qCP1Yig1.js";import"./PencilIcon-CBsplorN.js";import"./TrashIcon-CA9tPlCX.js";import"./ExportDropdown.vue-CtLgruoA.js";import"./index-D2drqcEo.js";import"./ArrowDownTrayIcon-BboR5BhL.js";import"./PlusIcon--Yp9nAnL.js";import"./index-jrOAnztS.js";import"./ArrowPathIcon-BMz1chbS.js";import"./FormField.vue-BTAWN9Np.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./InformationCircleIcon-BY7njxzn.js";import"./ListPageLayout.vue--ZOEzS4Z.js";import"./BasePageLayout.vue-BPB1ZTDf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue-DAizk2a9.js";import"./DataTableCellLink.vue-B_3CE8op.js";import"./DataTableCellStatus.vue-DTTucrUv.js";import"./PencilSquareIcon-a9Apd0g5.js";import"./index-C24-u6em.js";import"./ArrowRightStartOnRectangleIcon-DKKidjNO.js";import"./ArrowTopRightOnSquareIcon-Cgq2sJub.js";import"./RocketLaunchIcon-6D8sm1LH.js";import"./HomeIcon-C13KMEnf.js";import"./UserIcon-4wtVhT1W.js";import"./UsersIcon-C5hMjpAO.js";import"./UserGroupIcon-BvSX4X8P.js";import"./CommandLineIcon-COGtHxUL.js";import"./ClipboardDocumentListIcon-lODL2qZu.js";import"./ClipboardDocumentCheckIcon-BTD2-XPO.js";import"./CpuChipIcon-C8YSMOmc.js";import"./ShieldCheckIcon-cVyPPREN.js";import"./Cog6ToothIcon-DmdqmVoL.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
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
