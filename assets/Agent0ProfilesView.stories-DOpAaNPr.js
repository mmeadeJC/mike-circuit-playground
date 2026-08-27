import{d as f,r as v,a0 as F}from"./iframe--pVyazG9.js";import{_ as c,a as g}from"./Agent0ProfileDialog-BUWBVXKI.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-XDQr9OOC.js";import"./RichText.vue-BtNuFzRg.js";import{g as O}from"./formatListedDateTime-DUyAo-cU.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import{b as P}from"./useProfileDetailBindings-CeA-vvDD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-awHdwFoC.js";import"./index-6pJfhDGj.js";import"./index-BiPL9L3R.js";import"./index-iMZkGNHR.js";import"./index-Ck1qSbo1.js";import"./index-ZhWAdK_X.js";import"./index-DgH38Tqr.js";import"./index-esGF_EyX.js";import"./index-BlXOQGTr.js";import"./index-B-BOOr65.js";import"./index-DaGsjZDs.js";import"./index-CtElKYVw.js";import"./index-BTlCJq6I.js";import"./index-BEGOK711.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-CPnASwP1.js";import"./index-uGbhYqvO.js";import"./index-BWGkmJ0o.js";import"./index-mLzRhsCG.js";import"./index-Cr53P9D2.js";import"./index-DDTNvhH8.js";import"./index-BFHwi_tq.js";import"./index-By2lxUOL.js";import"./index-BUzjRe-W.js";import"./DataTable.vue-DqH3c9Zg.js";import"./Paginator.vue-a3fgflnh.js";import"./index-V_KBkFc6.js";import"./index-Dd-vKo1S.js";import"./index-CvasHF5g.js";import"./ChevronRightIcon-Bvh2VZdW.js";import"./index-8lieu_W4.js";import"./index-DQv4vshS.js";import"./index-BlpXHy1l.js";import"./index-CxmVMPmr.js";import"./useDataTableSize-io0PgdVT.js";import"./DataTableToolbar.vue-DdGrqeAe.js";import"./FilterChip.vue-tNFkSu_z.js";import"./index-B2GG8oKH.js";import"./SaveViewPanel.vue-wKl1wZ0w.js";import"./CheckboxWithLabel.vue-CXC4U4Hx.js";import"./ColumnConfigDropdown.vue-5NiWQhrP.js";import"./index-4Pe3dUvL.js";import"./LinkText.vue-BKb948uI.js";import"./ArrowRightIcon-DFyskfUp.js";import"./DropdownSearch.vue-Bxymjsbx.js";import"./useContainer-BCUrt0t4.js";import"./EyeIcon-_XjitPcg.js";import"./FunnelIcon-BLQhHX9Z.js";import"./FunnelIcon-7h7e9gzG.js";import"./Dropdown.vue-BTsVmqg3.js";import"./SavedViewsDropdown.vue-BAuw7E2L.js";import"./StarIcon-6lIDDNkq.js";import"./PencilIcon-C8Lc0pkE.js";import"./TrashIcon-n8-NWlXQ.js";import"./ExportDropdown.vue-ekmBNKXU.js";import"./index-DgSuPwdB.js";import"./ArrowDownTrayIcon-DW6KrGkH.js";import"./PlusIcon-Ddgts6Le.js";import"./index-CG-HcpwM.js";import"./ArrowPathIcon-CKN8GqAu.js";import"./FormField.vue-DAGeh7uF.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./ListPageLayout.vue-RtUp_BKg.js";import"./BasePageLayout.vue-Cg_buLnZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C10Cm2bV.js";import"./ArrowRightStartOnRectangleIcon-hGdjTmS_.js";import"./ArrowTopRightOnSquareIcon-dGbNogk4.js";import"./RocketLaunchIcon-EZqtAKN2.js";import"./HomeIcon-BIUhWVpo.js";import"./UserIcon-BxZQM_YX.js";import"./UsersIcon-DQhrqsfm.js";import"./UserGroupIcon-DtFhSmsY.js";import"./CommandLineIcon-DpVPf4B3.js";import"./ClipboardDocumentListIcon-wBneEAPl.js";import"./ClipboardDocumentCheckIcon-D6uiJ4ly.js";import"./CpuChipIcon-DjhQRX8j.js";import"./ShieldCheckIcon-DcBYyFbD.js";import"./Cog6ToothIcon-LI9RgjlE.js";import"./DataTableCellText.vue-Cc7EfsFZ.js";import"./DataTableCellLink.vue-DCIiMIR1.js";import"./DataTableCellStatus.vue-CD1yWqI9.js";import"./PencilSquareIcon-DNTaoy60.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
