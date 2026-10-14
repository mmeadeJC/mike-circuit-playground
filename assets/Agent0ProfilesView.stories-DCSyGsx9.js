import{d as f,r as v,a0 as F}from"./iframe-C6YxvgI9.js";import{_ as c,a as g}from"./Agent0ProfileDialog-D3cKcRPO.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-BEYIwFVK.js";import"./RichText.vue-h6zLaVtH.js";import{g as O}from"./formatListedDateTime-Dt7S-xgo.js";import"./allowedAiClientOriginKindLabels-B6Jfr3AU.js";import{b as P}from"./useProfileDetailBindings-CD7lUmLf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-BnKDY8uA.js";import"./index-AqntUfTj.js";import"./index-DhNdrOGc.js";import"./index-ZhWAdK_X.js";import"./index-BxytmV1x.js";import"./index-Dh_AZRb-.js";import"./index-DT3_wyj-.js";import"./index-BimTu2-D.js";import"./index-ZSh15SJz.js";import"./index-BTBx138D.js";import"./index-B91snyJO.js";import"./index-WUqO2RC_.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-VIQgHCAc.js";import"./index-DJBHbLMX.js";import"./index-B8A-AHQI.js";import"./index-Dp_YoHvc.js";import"./index-1UUbJVrK.js";import"./index-eKE_C28L.js";import"./index-CJZ03RY2.js";import"./index-DLF1yM0N.js";import"./index-DqUJJtw3.js";import"./DataTable.vue-Cyt8z7Rc.js";import"./Paginator.vue-CUj4V86y.js";import"./index-Ch3Q-vZV.js";import"./index-D_pfiKOk.js";import"./index-B3rEIbXx.js";import"./ChevronRightIcon-DYx_DqJa.js";import"./index-Ct0lVA_L.js";import"./index-CvIohtEI.js";import"./index-CPIDmXOH.js";import"./index-DpARX3gF.js";import"./useDataTableSize-DQ6_HCRc.js";import"./DataTableToolbar.vue-BQYu5ZMp.js";import"./FilterChip.vue-eRobgtcW.js";import"./index-CZUO3voq.js";import"./SaveViewPanel.vue-DHwNgbgC.js";import"./CheckboxWithLabel.vue-CdCpAZFa.js";import"./ColumnConfigDropdown.vue-D_1KAjmw.js";import"./index-BZi2DMME.js";import"./LinkText.vue-2aQeA1S0.js";import"./ArrowRightIcon-BjhmG1dS.js";import"./DropdownSearch.vue-DJziCYXk.js";import"./useContainer-w-xfgTus.js";import"./EyeIcon-IM-N29tT.js";import"./FunnelIcon-BrffPYtQ.js";import"./FunnelIcon-B88oviph.js";import"./Dropdown.vue-DTfK3dWE.js";import"./SavedViewsDropdown.vue-D7Kg98oI.js";import"./StarIcon-qCP1Yig1.js";import"./PencilIcon-CBsplorN.js";import"./TrashIcon-CA9tPlCX.js";import"./ExportDropdown.vue-CtLgruoA.js";import"./index-D2drqcEo.js";import"./ArrowDownTrayIcon-BboR5BhL.js";import"./PlusIcon--Yp9nAnL.js";import"./index-jrOAnztS.js";import"./ArrowPathIcon-BMz1chbS.js";import"./FormField.vue-BTAWN9Np.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./InformationCircleIcon-BY7njxzn.js";import"./ListPageLayout.vue--ZOEzS4Z.js";import"./BasePageLayout.vue-BPB1ZTDf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C24-u6em.js";import"./ArrowRightStartOnRectangleIcon-DKKidjNO.js";import"./ArrowTopRightOnSquareIcon-Cgq2sJub.js";import"./RocketLaunchIcon-6D8sm1LH.js";import"./HomeIcon-C13KMEnf.js";import"./UserIcon-4wtVhT1W.js";import"./UsersIcon-C5hMjpAO.js";import"./UserGroupIcon-BvSX4X8P.js";import"./CommandLineIcon-COGtHxUL.js";import"./ClipboardDocumentListIcon-lODL2qZu.js";import"./ClipboardDocumentCheckIcon-BTD2-XPO.js";import"./CpuChipIcon-C8YSMOmc.js";import"./ShieldCheckIcon-cVyPPREN.js";import"./Cog6ToothIcon-DmdqmVoL.js";import"./DataTableCellText.vue-DAizk2a9.js";import"./DataTableCellLink.vue-B_3CE8op.js";import"./DataTableCellStatus.vue-DTTucrUv.js";import"./PencilSquareIcon-a9Apd0g5.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
