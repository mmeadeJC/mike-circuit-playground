import{d as a}from"./iframe-DSI7I_YQ.js";import{_ as o}from"./Agent0ActivityView-CoGZsK7M.js";import"./RichText.vue-DARNTLdh.js";import{a as s}from"./formatListedDateTime-T2_XsPYD.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import{a as n}from"./mockData-BgyvNFPM.js";import{u as m}from"./useProfileDetailBindings-BDV76cGz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./index-DPUA2Kqt.js";import"./index-16iY2v2i.js";import"./index-CD_7J42F.js";import"./index-EU9vbBWi.js";import"./index-BuxjV2Ka.js";import"./index-CwS7Mw-8.js";import"./index-Byho_yNF.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-HxTnj3va.js";import"./index-BfO8N2P2.js";import"./index-DsdYTbg9.js";import"./index-CbI5Nc1U.js";import"./index-CxxjhJ-R.js";import"./index-CZjsJVeR.js";import"./index-BuLOyT5f.js";import"./index-Ck6lw9mO.js";import"./index-BxkuIoyf.js";import"./index-BF3dm58r.js";import"./DataTable.vue-8K7hcEUA.js";import"./Paginator.vue-ChhxJboP.js";import"./index-B2CuMtSM.js";import"./index-DJOK6PAC.js";import"./index-DwCBYExO.js";import"./ChevronRightIcon-vzjO-UCf.js";import"./index-KUyW3X8b.js";import"./index-C03-JXXY.js";import"./index-hJTrF4vo.js";import"./index-Bhi6wGVV.js";import"./useDataTableSize-De9ZRuOb.js";import"./DataTableToolbar.vue-pdtBbbpF.js";import"./FilterChip.vue-DRNhKzlB.js";import"./index-Cz6kxq3w.js";import"./SaveViewPanel.vue-l_rKKUK_.js";import"./CheckboxWithLabel.vue-DGxWw3fq.js";import"./ColumnConfigDropdown.vue-QDJHIeIG.js";import"./index-BxSFYkr5.js";import"./LinkText.vue-la98-pF0.js";import"./ArrowRightIcon-sh-7-hR7.js";import"./DropdownSearch.vue-BlbPyvSd.js";import"./useContainer-fllqqkML.js";import"./EyeIcon-CgTh71dA.js";import"./FunnelIcon-BTXIR61W.js";import"./FunnelIcon-D794Vtkm.js";import"./Dropdown.vue-D3A6JM3M.js";import"./SavedViewsDropdown.vue-_a_ObuX6.js";import"./StarIcon-DCHzdX9U.js";import"./PencilIcon-Djri8E9o.js";import"./TrashIcon-BHjh44dq.js";import"./ExportDropdown.vue-C1NrNxDq.js";import"./index-CvSTnlSh.js";import"./ArrowDownTrayIcon-Dz1YweaX.js";import"./PlusIcon-BEMe8u-I.js";import"./index-B3LPCdXq.js";import"./ArrowPathIcon-7slEBIR7.js";import"./FormField.vue-DvIDnTXZ.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./InformationCircleIcon-Cz23V1it.js";import"./ListPageLayout.vue-DYcCPq7K.js";import"./BasePageLayout.vue-x6vCfDbO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DataTableCellText.vue-JtdyCYAL.js";import"./DataTableCellLink.vue-BxmN_r2T.js";import"./DataTableCellStatus.vue-CDqXggOi.js";import"./PencilSquareIcon-sxctLZ_v.js";import"./index-D6mY1Y8s.js";import"./ArrowRightStartOnRectangleIcon-CiAc9VBg.js";import"./ArrowTopRightOnSquareIcon-C_EktnJD.js";import"./RocketLaunchIcon-Dsyb3UQf.js";import"./HomeIcon-CQmrqHE7.js";import"./UserIcon-CSW82trP.js";import"./UsersIcon-OEvGzjDd.js";import"./UserGroupIcon-DeF3nAvb.js";import"./CommandLineIcon-Bs9Wraq9.js";import"./ClipboardDocumentListIcon-BaP2rSiE.js";import"./ClipboardDocumentCheckIcon-ByZb5sDi.js";import"./CpuChipIcon-DEbsRDHr.js";import"./ShieldCheckIcon-nGYAINf2.js";import"./Cog6ToothIcon-CsHyeCNP.js";const Yt={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Recent Activity",component:o,parameters:{layout:"fullscreen"}},t={name:"Recent Activity",render:()=>a({components:{Agent0ActivityView:o},setup(){const p=m(n);return{activityLogColumns:s,...p}},template:`
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
