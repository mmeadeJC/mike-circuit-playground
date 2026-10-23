import{d as f,r as v,a0 as F}from"./iframe-CrzTiCu6.js";import{_ as c,a as g}from"./Agent0ProfileDialog-CBrYJd8U.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-C1zsvOf2.js";import"./RichText.vue-Bo-7vQsj.js";import{g as O}from"./formatListedDateTime-BBq13wXG.js";import"./allowedAiClientOriginKindLabels-DhjafCXw.js";import{b as P}from"./useProfileDetailBindings-BoQHknTT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-BgpC02hC.js";import"./index-B9HYPvme.js";import"./index-BAK6AhQo.js";import"./index-DRWkJ3r7.js";import"./index-DHkFNkeW.js";import"./index-B5AAKPzU.js";import"./index-DBMnBcxB.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-CJ65Gie5.js";import"./index-DQmrvgOu.js";import"./index-B-mFHERX.js";import"./index-DhP11m7K.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-CXMkhyA-.js";import"./index-BaGPKY7N.js";import"./index-DUgv6TgD.js";import"./DataTable.vue-CQiZ9-Bt.js";import"./Paginator.vue-AbHFmpig.js";import"./index-Cp7GERer.js";import"./index-BRT9CP7z.js";import"./index-B6P6vZ8T.js";import"./ChevronRightIcon-BtziqKKH.js";import"./index-CJtZNPwL.js";import"./index-BwTMqirk.js";import"./index-Dq5aZyU5.js";import"./index-IX3fe5I4.js";import"./useDataTableSize-KUQE_ZpM.js";import"./DataTableToolbar.vue-De4PigJx.js";import"./FilterChip.vue-DzkAtwDL.js";import"./index-3NCE7FTh.js";import"./SaveViewPanel.vue-CT093yRW.js";import"./CheckboxWithLabel.vue-BCoIi1Rw.js";import"./ColumnConfigDropdown.vue-DIOBmyAl.js";import"./index-CdmNXZp5.js";import"./LinkText.vue-DffDQTJD.js";import"./ArrowRightIcon-BXae0GnV.js";import"./DropdownSearch.vue-DhjA7urJ.js";import"./useContainer-V_XjkKmd.js";import"./EyeIcon-CR4Kvmha.js";import"./FunnelIcon-Dv4pl4l7.js";import"./FunnelIcon-DdFOZms1.js";import"./Dropdown.vue-B3uoPsDo.js";import"./SavedViewsDropdown.vue-PX9Qdnj8.js";import"./StarIcon-C8GBQttC.js";import"./PencilIcon-D-BT-yjF.js";import"./TrashIcon-FaxNGpYS.js";import"./ExportDropdown.vue-C7xMtUr7.js";import"./index-Cnf3VQH7.js";import"./ArrowDownTrayIcon-Cc30gtJU.js";import"./PlusIcon-D2izwpUR.js";import"./index-DiksCyp3.js";import"./ArrowPathIcon-DRE--ueV.js";import"./FormField.vue-CTr1UxJM.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./ListPageLayout.vue-B1hlnzxN.js";import"./BasePageLayout.vue-DIEW9flY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CjqWYhin.js";import"./ArrowRightStartOnRectangleIcon-CBJnXu54.js";import"./ArrowTopRightOnSquareIcon-DS4hPvi9.js";import"./RocketLaunchIcon-CAzmE-6h.js";import"./HomeIcon-BQPM_8Qu.js";import"./UserIcon-Bri6dvnd.js";import"./UsersIcon-DqHPfoZY.js";import"./UserGroupIcon-B6yu2ODb.js";import"./CommandLineIcon-vFXJRXVY.js";import"./ClipboardDocumentListIcon-yzE7qRAt.js";import"./ClipboardDocumentCheckIcon-CDO3bo_W.js";import"./CpuChipIcon-Df3nujkA.js";import"./ShieldCheckIcon-CwbvLCk-.js";import"./Cog6ToothIcon-BNOeg4eV.js";import"./DataTableCellText.vue-rWBuNzMD.js";import"./DataTableCellLink.vue-8rYsVPn_.js";import"./DataTableCellStatus.vue-BpGZyrOE.js";import"./PencilSquareIcon-CPPagcZ0.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
