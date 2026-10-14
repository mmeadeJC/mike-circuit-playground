import{d as f,r as v,a0 as F}from"./iframe-8Q3g4suX.js";import{_ as c,a as g}from"./Agent0ProfileDialog-CwE9PNyB.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-B40J5FIn.js";import"./RichText.vue-C1Ty82RV.js";import{g as O}from"./formatListedDateTime-CSMLMKDO.js";import"./allowedAiClientOriginKindLabels-DXTLUnQQ.js";import{b as P}from"./useProfileDetailBindings-ZxDS1XxG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-C_dd-9yx.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-DRA9vNfv.js";import"./index-B6YgWt2p.js";import"./index-C19gJH8S.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-CN297qaa.js";import"./index-BdbLeFxC.js";import"./index-Us1_uPk3.js";import"./index-CkKvLbcv.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-DswaKqI5.js";import"./index-7zypbFVM.js";import"./index-BB_hCnE-.js";import"./DataTable.vue-CqBNXemk.js";import"./Paginator.vue-CcesqfBl.js";import"./index-DGY9u_rI.js";import"./index-C6vF-uE7.js";import"./index--cVum_Py.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./index-NkGFgNPM.js";import"./index-D8_kzb1y.js";import"./index-BMCZJFM3.js";import"./index-MkGR21B_.js";import"./useDataTableSize-ICT-xewV.js";import"./DataTableToolbar.vue-ByVarpJJ.js";import"./FilterChip.vue-CBw3qOe7.js";import"./index-cFQtYIhg.js";import"./SaveViewPanel.vue-B5q98drN.js";import"./CheckboxWithLabel.vue-D_gLbPG2.js";import"./ColumnConfigDropdown.vue-CtuR7DM1.js";import"./index-DTiFh52L.js";import"./LinkText.vue-DvAjr8lK.js";import"./ArrowRightIcon-BXY2Zswv.js";import"./DropdownSearch.vue-Cnv-38a8.js";import"./useContainer-Bc2j6_Ia.js";import"./EyeIcon-DNiNViaw.js";import"./FunnelIcon-CbTjwsSd.js";import"./FunnelIcon-D3WoHsAW.js";import"./Dropdown.vue-CKApLVqP.js";import"./SavedViewsDropdown.vue-Bkhuo6Co.js";import"./StarIcon-DyZx2qfY.js";import"./PencilIcon-CGZE74QN.js";import"./TrashIcon-Batrj4xL.js";import"./ExportDropdown.vue-BSvMj9vV.js";import"./index-DnuNANX7.js";import"./ArrowDownTrayIcon-BdnXguS2.js";import"./PlusIcon-BstNSs7l.js";import"./index-BEvLtaLX.js";import"./ArrowPathIcon-Do2QagUJ.js";import"./FormField.vue-DPg-U9jM.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./ListPageLayout.vue-CXbiXEcG.js";import"./BasePageLayout.vue-CwV5cDx0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DPUoOQbX.js";import"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import"./RocketLaunchIcon-BJK4NMZ4.js";import"./HomeIcon-yFRUSV7Z.js";import"./UserIcon-ShjzaHpT.js";import"./UsersIcon-Z2ifx08k.js";import"./UserGroupIcon-Ciz8NLc5.js";import"./CommandLineIcon-4Js_OSQE.js";import"./ClipboardDocumentListIcon-CnTg33RY.js";import"./ClipboardDocumentCheckIcon--weNKert.js";import"./CpuChipIcon-DVt0p-5v.js";import"./ShieldCheckIcon-W0AJus9F.js";import"./Cog6ToothIcon-cxmEYFc7.js";import"./DataTableCellText.vue-BME5Ov-M.js";import"./DataTableCellLink.vue-C2An6vkM.js";import"./DataTableCellStatus.vue-DTXzUrUS.js";import"./PencilSquareIcon-CZ923cNI.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
