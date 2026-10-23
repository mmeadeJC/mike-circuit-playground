import{d as f,r as v,a0 as F}from"./iframe-DuzLv9Pd.js";import{_ as c,a as g}from"./Agent0ProfileDialog-C5KqTQ42.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-DdtCyTwi.js";import"./RichText.vue-D4MvUk45.js";import{g as O}from"./formatListedDateTime-D27HJzil.js";import"./allowedAiClientOriginKindLabels-DYIWO8UO.js";import{b as P}from"./useProfileDetailBindings-DQ9p7UqW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./index-CLqqXC_P.js";import"./index-D5zH4fN4.js";import"./index-b5e0TYx1.js";import"./index-CWlqIe1B.js";import"./index-CGiVUquh.js";import"./index-DnaDt85i.js";import"./index-CFtktJtS.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-BcWNlClR.js";import"./index-BemneOh4.js";import"./index-CjiEPaTZ.js";import"./index-BXhsDisi.js";import"./index-Brczh--H.js";import"./index-DL1Pt7bO.js";import"./index-DlU_MYIi.js";import"./index-b0ySB-5C.js";import"./index-DOizLEho.js";import"./DataTable.vue-Cj_l__a2.js";import"./Paginator.vue-CKNm14yQ.js";import"./index-CEiioRpE.js";import"./index-gSNiAAF9.js";import"./index-CdgF4ttL.js";import"./ChevronRightIcon-RLkhG38k.js";import"./index-CO-G9M_W.js";import"./index-JYiShB9D.js";import"./index-DUWomeF_.js";import"./index-BQabsSYQ.js";import"./useDataTableSize-BPDfn_He.js";import"./DataTableToolbar.vue-C5r-1yVm.js";import"./FilterChip.vue-Ca3a8qy6.js";import"./index-D3QA_pcE.js";import"./SaveViewPanel.vue-i4O3zuWV.js";import"./CheckboxWithLabel.vue-DoqDZu3R.js";import"./ColumnConfigDropdown.vue-BVX8ajl9.js";import"./index-BbuMzApp.js";import"./LinkText.vue-Dtn5ZYX7.js";import"./ArrowRightIcon-CebixEfQ.js";import"./DropdownSearch.vue-p79a3D5Z.js";import"./useContainer-Do_p2hLC.js";import"./EyeIcon-DZdtwtTn.js";import"./FunnelIcon-Cz3H4XLI.js";import"./FunnelIcon-CD3UCyXH.js";import"./Dropdown.vue-BvGCjloM.js";import"./SavedViewsDropdown.vue-YKksxr3f.js";import"./StarIcon-CQ684_9r.js";import"./PencilIcon-pp46wisY.js";import"./TrashIcon-Cf9pvfv2.js";import"./ExportDropdown.vue-SboJTm8h.js";import"./index-ZriuU7yS.js";import"./ArrowDownTrayIcon-BHhLe726.js";import"./PlusIcon-A7C_VQzz.js";import"./index-CWdSX-TA.js";import"./ArrowPathIcon-DniohQTk.js";import"./FormField.vue-CblrQISo.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./ListPageLayout.vue-c8ILG3IR.js";import"./BasePageLayout.vue-DVNcPgxb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Di5n2FZb.js";import"./ArrowRightStartOnRectangleIcon-D4g3cMin.js";import"./ArrowTopRightOnSquareIcon-vQx7CBJY.js";import"./RocketLaunchIcon-Cvc1Zpa7.js";import"./HomeIcon-B8gBiWKx.js";import"./UserIcon-CtiZzZ2X.js";import"./UsersIcon-BT-W7sF-.js";import"./UserGroupIcon-CWdxV-oE.js";import"./CommandLineIcon-BD5MFUQg.js";import"./ClipboardDocumentListIcon-CjFMn6dO.js";import"./ClipboardDocumentCheckIcon-k7_FGCzy.js";import"./CpuChipIcon-BBHeqCE_.js";import"./ShieldCheckIcon-BpS1grCD.js";import"./Cog6ToothIcon-bwwfqrlO.js";import"./DataTableCellText.vue-1rDF5L9k.js";import"./DataTableCellLink.vue-C2-AqLyE.js";import"./DataTableCellStatus.vue-mQvI-oeM.js";import"./PencilSquareIcon-DxXATT4Q.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
        <Agent0ProfilesView
          :filteredProfilesData="filteredData"
          :profileColumns="profileColumns"
          :showFilterDialog="showFilterDialog"
          :draftServers="draftServers"
          :draftUserGroups="draftUserGroups"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          :activeFilterChips="activeFilterChips"
          :activeFilterCount="activeFilterCount"
          @search="handleSearch"
          @openFilterDialog="openFilterDialog"
          @applyFilters="applyFilters"
          @cancelFilterDialog="cancelFilterDialog"
          @clearDraftFilters="clearDraftFilters"
          @clearAllFilters="clearAllFilters"
          @removeFilterChip="removeFilterChip"
          @update:draftServers="draftServers = $event"
          @update:draftUserGroups="draftUserGroups = $event"
        />
      `})},e={render:()=>f({components:{Agent0ProfileDialog:g},setup(){const t=v(!0),d=F({name:"Engineering",serverIds:["github","jira"],userGroupIds:[]});return{visible:t,profileForm:d,serverOptions:G,userGroupOptions:D}},template:`
        <Agent0ProfileDialog
          :visible="visible"
          :editingProfile="{ id: 1 }"
          :profileForm="profileForm"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          @update:visible="visible = $event"
        />
      `})};var s,a,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'List',
  render: () => defineComponent({
    components: {
      Agent0ProfilesView
    },
    setup() {
      const filters = useProfileFilters(profilesData, serversData, userGroupsData, profileUserGroups);
      return {
        profileColumns: getProfileColumns(serversData, userGroupsData, profileUserGroups, profileDashboardStats),
        ...filters
      };
    },
    template: \`
        <Agent0ProfilesView
          :filteredProfilesData="filteredData"
          :profileColumns="profileColumns"
          :showFilterDialog="showFilterDialog"
          :draftServers="draftServers"
          :draftUserGroups="draftUserGroups"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          :activeFilterChips="activeFilterChips"
          :activeFilterCount="activeFilterCount"
          @search="handleSearch"
          @openFilterDialog="openFilterDialog"
          @applyFilters="applyFilters"
          @cancelFilterDialog="cancelFilterDialog"
          @clearDraftFilters="clearDraftFilters"
          @clearAllFilters="clearAllFilters"
          @removeFilterChip="removeFilterChip"
          @update:draftServers="draftServers = $event"
          @update:draftUserGroups="draftUserGroups = $event"
        />
      \`
  })
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var m,n,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => defineComponent({
    components: {
      Agent0ProfileDialog
    },
    setup() {
      const visible = ref(true);
      const profileForm = reactive({
        name: 'Engineering',
        serverIds: ['github', 'jira'],
        userGroupIds: []
      });
      return {
        visible,
        profileForm,
        serverOptions,
        userGroupOptions
      };
    },
    template: \`
        <Agent0ProfileDialog
          :visible="visible"
          :editingProfile="{ id: 1 }"
          :profileForm="profileForm"
          :serverOptions="serverOptions"
          :userGroupOptions="userGroupOptions"
          @update:visible="visible = $event"
        />
      \`
  })
}`,...(u=(n=e.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};const fe=["List","Dialog"];export{e as Dialog,r as List,fe as __namedExportsOrder,ue as default};
