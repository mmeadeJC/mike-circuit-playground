import{d as f,r as v,a0 as F}from"./iframe-wHZiWscM.js";import{_ as c,a as g}from"./Agent0ProfileDialog-C-x_sAFX.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-Kk33s5oK.js";import"./RichText.vue-CHGMbC98.js";import{g as O}from"./formatListedDateTime-DP50yT1B.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import{b as P}from"./useProfileDetailBindings-D8k_gkGL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-sD1-d5gW.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-BCe0KpuU.js";import"./index-BsadxdHP.js";import"./index-CK8YOc-s.js";import"./index-OomjoOn0.js";import"./index-DG2sTEJu.js";import"./index-CfbwjWnr.js";import"./index-Bx3ApnQM.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-CDKqnkXt.js";import"./index-BUW6mAnI.js";import"./index-B9GWGLe7.js";import"./index-BZ44v4AP.js";import"./index-B0f83xA1.js";import"./index-Box4ManB.js";import"./index-_1pOB8MI.js";import"./index-DSxjRmh5.js";import"./index-0sOqJRIv.js";import"./DataTable.vue-DmbfuVh_.js";import"./Paginator.vue-CcRzGc69.js";import"./index-B52hguGd.js";import"./index-NL-pVcRR.js";import"./index-DBRsCQYT.js";import"./ChevronRightIcon-CCd9mxHV.js";import"./index-BX58BE5p.js";import"./index-Btj4TG0i.js";import"./index-Cho0WR5H.js";import"./index-BsNWgMfo.js";import"./useDataTableSize-GGD2JHfG.js";import"./DataTableToolbar.vue-BhLGIGSm.js";import"./FilterChip.vue-BuyWvAI-.js";import"./index-cu68_uPv.js";import"./SaveViewPanel.vue-BSEPrvYC.js";import"./CheckboxWithLabel.vue-Dt-Ksd6A.js";import"./ColumnConfigDropdown.vue-CcDJZGBU.js";import"./index-Bu_OB4cS.js";import"./LinkText.vue-CZtYLLzG.js";import"./ArrowRightIcon-BHnqKJRg.js";import"./DropdownSearch.vue-C35jZCVV.js";import"./useContainer-Bxg-bmhf.js";import"./EyeIcon-BcUj4a6b.js";import"./FunnelIcon-CmBG5ncV.js";import"./FunnelIcon-BdHbE0IY.js";import"./Dropdown.vue-BSd8d_yA.js";import"./SavedViewsDropdown.vue-BeF5vpON.js";import"./StarIcon-DK6Nr4X7.js";import"./PencilIcon-wBp-c_x7.js";import"./TrashIcon-UFJmnL45.js";import"./ExportDropdown.vue-DBKeRelR.js";import"./index-DDAh2LOB.js";import"./ArrowDownTrayIcon-Akc_5Wek.js";import"./PlusIcon-DGBp3WlK.js";import"./index-BUFlMVon.js";import"./ArrowPathIcon-bipDiGZD.js";import"./FormField.vue-Di73I2_d.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./InformationCircleIcon-DZ4ah18T.js";import"./ListPageLayout.vue-7CWw602M.js";import"./BasePageLayout.vue-BxTNDttc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Andb7bwO.js";import"./ArrowRightStartOnRectangleIcon-CLdR-YKA.js";import"./ArrowTopRightOnSquareIcon-Di75X2M6.js";import"./RocketLaunchIcon-CNdx9WZl.js";import"./HomeIcon-5r_QbQOS.js";import"./UserIcon-BeF8Hyvt.js";import"./UsersIcon-DnG2W9uG.js";import"./UserGroupIcon-BLdtu9b8.js";import"./CommandLineIcon-8W_LRzjZ.js";import"./ClipboardDocumentListIcon-zSNh2cWZ.js";import"./ClipboardDocumentCheckIcon-B9O-4nOP.js";import"./CpuChipIcon-D7soRAGz.js";import"./ShieldCheckIcon-XJT-0kMA.js";import"./Cog6ToothIcon-CpmE-KkZ.js";import"./DataTableCellText.vue-CtY5epkb.js";import"./DataTableCellLink.vue-DCTifLuN.js";import"./DataTableCellStatus.vue-DQo5LaW9.js";import"./PencilSquareIcon-BGXvyPGw.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
