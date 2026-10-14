import{d as a}from"./iframe-DnhA1Jsm.js";import{_ as o}from"./Agent0ActivityView-CxkQYOSe.js";import"./RichText.vue-BuoexALv.js";import{a as s}from"./formatListedDateTime-D31a1oMi.js";import"./allowedAiClientOriginKindLabels-Cm7__m1T.js";import{a as n}from"./mockData-b0eNLKnq.js";import{u as m}from"./useProfileDetailBindings-BPXLPLZc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BNbdGjQ1.js";import"./index-lNUZEIRs.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-BugbG7pm.js";import"./index-ZhWAdK_X.js";import"./index-B5xbJtC5.js";import"./index-BkS1dZYY.js";import"./index-DNm818yJ.js";import"./index-DSiULD1o.js";import"./index-Ch682guI.js";import"./index-l3Tk4em_.js";import"./index-BNIcB7B5.js";import"./index-DA6MtJit.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-BiaoWc9A.js";import"./index-qDFe3kWE.js";import"./index-BI9VwZ0A.js";import"./index-DKDggJZ4.js";import"./index-C3dwEfyt.js";import"./index-BFiFYGtt.js";import"./index-CkUOowPH.js";import"./index-BB-DZxHZ.js";import"./index-TOe8dN6-.js";import"./index-DqjS6dfD.js";import"./DataTable.vue-Bj-Cy6R9.js";import"./Paginator.vue-2u0PKv_l.js";import"./index-C6XQ6gRS.js";import"./index-DYw0Q7A3.js";import"./index-D0WBUH3h.js";import"./ChevronRightIcon-CdbfjCjO.js";import"./index-SGyjFKB5.js";import"./index-DUtpmYFH.js";import"./index-BIrxIukW.js";import"./index-7Fm2NweX.js";import"./useDataTableSize-CS-CgBOg.js";import"./DataTableToolbar.vue-BBcNrkn-.js";import"./FilterChip.vue-Cds_y0fD.js";import"./index-2F2whbl-.js";import"./SaveViewPanel.vue-BQ172UM9.js";import"./CheckboxWithLabel.vue-D3KLeAP4.js";import"./ColumnConfigDropdown.vue-B5x6wb80.js";import"./index-BiOqJP2u.js";import"./LinkText.vue-h4sX1MNH.js";import"./ArrowRightIcon-18DcXMgP.js";import"./DropdownSearch.vue-IbtatRI6.js";import"./useContainer-DkP69mYD.js";import"./EyeIcon-S4cIhHne.js";import"./FunnelIcon-LPKizbyg.js";import"./FunnelIcon-4QbHURh5.js";import"./Dropdown.vue-CDAwy3e-.js";import"./SavedViewsDropdown.vue-Cw4XkFHx.js";import"./StarIcon-iuKzahlx.js";import"./PencilIcon-DciTyJoH.js";import"./TrashIcon-C1u_5ym-.js";import"./ExportDropdown.vue-BiD9H9cP.js";import"./index-Dpsw-dQr.js";import"./ArrowDownTrayIcon-CJcpf1BH.js";import"./PlusIcon-CShqu8rY.js";import"./index-DmFuCnyO.js";import"./ArrowPathIcon-DiGk3PO0.js";import"./FormField.vue-mRh6rdEv.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./ListPageLayout.vue-achTUWZa.js";import"./BasePageLayout.vue-DLwZijeP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue-Bk2ZGhbt.js";import"./DataTableCellLink.vue-CWJfZM0c.js";import"./DataTableCellStatus.vue-CdAQjo7v.js";import"./PencilSquareIcon-Bez5HNT-.js";import"./index-DuIWmi4D.js";import"./ArrowRightStartOnRectangleIcon-C5SXaVic.js";import"./ArrowTopRightOnSquareIcon-Ckxu5vwN.js";import"./RocketLaunchIcon-Cg97E9Fb.js";import"./HomeIcon-BdJrXd2e.js";import"./UserIcon-LyJC13E2.js";import"./UsersIcon-BgQFsP7F.js";import"./UserGroupIcon-BLOMZMFj.js";import"./CommandLineIcon-Cd6VMgHQ.js";import"./ClipboardDocumentListIcon-BS5yXvdP.js";import"./ClipboardDocumentCheckIcon-CNnPmtk7.js";import"./CpuChipIcon-CuTYvC40.js";import"./ShieldCheckIcon-G-yjo0m6.js";import"./Cog6ToothIcon-CUj-fz1K.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
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
