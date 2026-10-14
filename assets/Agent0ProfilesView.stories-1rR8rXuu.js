import{d as f,r as v,a0 as F}from"./iframe-BF79XtSp.js";import{_ as c,a as g}from"./Agent0ProfileDialog-DG9DGuKW.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-DCPRTQhH.js";import"./RichText.vue-CqGWfsH6.js";import{g as O}from"./formatListedDateTime-DrwQiUrl.js";import"./allowedAiClientOriginKindLabels-BT_IAVu_.js";import{b as P}from"./useProfileDetailBindings-DFq0WTQO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-xyLKPl8B.js";import"./index-ZhWAdK_X.js";import"./index-BVIEBy36.js";import"./index-U54BmgOn.js";import"./index-CR4bzIFl.js";import"./index-DIEiO-G_.js";import"./index-BCK9IpMv.js";import"./index-Dtk_BLuX.js";import"./index-P-Yy9vDb.js";import"./index-NvGJIH0G.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-D43yMZyM.js";import"./index-DckzHriz.js";import"./index-lST1gP85.js";import"./index-BkZv6EbR.js";import"./index-bqWkeg_n.js";import"./index-PuebpjLD.js";import"./index-LSIY3ybW.js";import"./index-ADEA_n6J.js";import"./index-K7HfYiQs.js";import"./DataTable.vue-BHtrcVVc.js";import"./Paginator.vue-Dy2cGaqu.js";import"./index-DMx2X42p.js";import"./index-C4C8uF8-.js";import"./index-dbOlY_KS.js";import"./ChevronRightIcon-Ds2oc56S.js";import"./index-DccRakCb.js";import"./index-BKhPoeTw.js";import"./index-DkPTkS_b.js";import"./index-Ln8ICEkF.js";import"./useDataTableSize-CTpRUYeY.js";import"./DataTableToolbar.vue-CXKDBfw_.js";import"./FilterChip.vue-BEAOtRH2.js";import"./index-D6ZVkPAC.js";import"./SaveViewPanel.vue-mC0sem9y.js";import"./CheckboxWithLabel.vue-BXWhMwWQ.js";import"./ColumnConfigDropdown.vue-CH6WIYua.js";import"./index-DHPhN9oC.js";import"./LinkText.vue-C1RSiwbX.js";import"./ArrowRightIcon-BO2KgFRi.js";import"./DropdownSearch.vue-DZQ_8jKi.js";import"./useContainer-CrNDtG4W.js";import"./EyeIcon-DVodujmo.js";import"./FunnelIcon-BvP__tww.js";import"./FunnelIcon-CZhOYWoP.js";import"./Dropdown.vue-Csy1Li7S.js";import"./SavedViewsDropdown.vue-CtH4QF7P.js";import"./StarIcon-BU5rQd7q.js";import"./PencilIcon-2BKw63Xz.js";import"./TrashIcon-C2JPFfO6.js";import"./ExportDropdown.vue-DQI6ViPu.js";import"./index-DQOir5uS.js";import"./ArrowDownTrayIcon-DZq-TuMT.js";import"./PlusIcon-B0Ifsxjs.js";import"./index-C_hXlnlQ.js";import"./ArrowPathIcon-DSpVmERO.js";import"./FormField.vue-C69YWs2P.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./ListPageLayout.vue-CcKGpmva.js";import"./BasePageLayout.vue-DaSm17Gu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-vX2hHYrt.js";import"./ArrowRightStartOnRectangleIcon-m3mkNkcV.js";import"./ArrowTopRightOnSquareIcon-Bb4rBF4d.js";import"./RocketLaunchIcon-BqMZlamx.js";import"./HomeIcon-CRuA8H2X.js";import"./UserIcon-KpILDYI2.js";import"./UsersIcon-mPqKsBT7.js";import"./UserGroupIcon-odcgopw8.js";import"./CommandLineIcon-D7zOx_l8.js";import"./ClipboardDocumentListIcon-C1vC7p4N.js";import"./ClipboardDocumentCheckIcon-Hd-7WFS2.js";import"./CpuChipIcon-C8H0NY6t.js";import"./ShieldCheckIcon-xpQZCNU8.js";import"./Cog6ToothIcon-xFudfeaO.js";import"./DataTableCellText.vue--n6dloHJ.js";import"./DataTableCellLink.vue-D4Pd0MA6.js";import"./DataTableCellStatus.vue-C6HcYjwX.js";import"./PencilSquareIcon-BuhRV4E0.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
