import{d as f,r as v,a0 as F}from"./iframe-CJNlUSJO.js";import{_ as c,a as g}from"./Agent0ProfileDialog-Cr3Z7Ocs.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-BsVqpDJ5.js";import"./RichText.vue-CLPxRa2P.js";import{g as O}from"./formatListedDateTime-Dqp3GapW.js";import"./allowedAiClientOriginKindLabels-BIv2o64s.js";import{b as P}from"./useProfileDetailBindings-BW_AHnKl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CzaTbvQ5.js";import"./index-BP13dlUd.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-C_WDvV0g.js";import"./index-ZhWAdK_X.js";import"./index-AIzoT1ks.js";import"./index-BCZY3Z-Y.js";import"./index-BBDD1QfU.js";import"./index-TgrN5p_g.js";import"./index-CtMg5eIS.js";import"./index-Do-nvtb2.js";import"./index-Btd800F5.js";import"./index-CMPzMs76.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-BsZ9r3ps.js";import"./index-DnvcML7u.js";import"./index-DNoP2_Hj.js";import"./index-DqMC5tMH.js";import"./index-DMJeGYfZ.js";import"./index-B_P4GBGL.js";import"./index-Cpp0aXdO.js";import"./index-CcTHBmI2.js";import"./index-D-nSq33G.js";import"./DataTable.vue-DAo7L1lM.js";import"./Paginator.vue-BnmxpoRn.js";import"./index-CK3JQGnr.js";import"./index-Dzg4DU0m.js";import"./index-DrlABjM6.js";import"./ChevronRightIcon-9Bjzgkk8.js";import"./index-Dw453XQ1.js";import"./index-DJ8ZCC17.js";import"./index-BMQpWRRD.js";import"./index-4T4mPLxV.js";import"./useDataTableSize-Bx3sf5QI.js";import"./DataTableToolbar.vue-C1vYp0lp.js";import"./FilterChip.vue-yJdOeIns.js";import"./index-87h8nido.js";import"./SaveViewPanel.vue-B736bIBk.js";import"./CheckboxWithLabel.vue-B3I6fX3T.js";import"./ColumnConfigDropdown.vue-BGYHbmr2.js";import"./index-yem5Yr21.js";import"./LinkText.vue-DQgZAyU0.js";import"./ArrowRightIcon-Ba2_8xNw.js";import"./DropdownSearch.vue-DkJbj8iR.js";import"./useContainer-B_1ygOmR.js";import"./EyeIcon-mgzepyF5.js";import"./FunnelIcon-CKpJeMQQ.js";import"./FunnelIcon-D-1JRozE.js";import"./Dropdown.vue-C4EK6U1h.js";import"./SavedViewsDropdown.vue-BcOfyV_I.js";import"./StarIcon-BvOqlUQg.js";import"./PencilIcon-Dgec98nv.js";import"./TrashIcon-v0EM-4lq.js";import"./ExportDropdown.vue-DSU6CKYp.js";import"./index-CUJzSYKO.js";import"./ArrowDownTrayIcon-DQZZdDtV.js";import"./PlusIcon-BED19NaW.js";import"./index-G7cLCde7.js";import"./ArrowPathIcon-Dpy7Hin9.js";import"./FormField.vue-DokXCbml.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./InformationCircleIcon-Dnjq95z-.js";import"./ListPageLayout.vue-D-Chwlxz.js";import"./BasePageLayout.vue-BfMxOwFg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bb-Am5iU.js";import"./ArrowRightStartOnRectangleIcon-CLCUEpzv.js";import"./ArrowTopRightOnSquareIcon-Cd_6qSPk.js";import"./RocketLaunchIcon-MP9dRmf5.js";import"./HomeIcon-DGihxR32.js";import"./UserIcon-B9-rHRsZ.js";import"./UsersIcon-oaPeND-z.js";import"./UserGroupIcon-C-0WA-Ss.js";import"./CommandLineIcon-BlUqAMc5.js";import"./ClipboardDocumentListIcon-HkPtUXlJ.js";import"./ClipboardDocumentCheckIcon-DA2PjPuu.js";import"./CpuChipIcon-7isR4Woi.js";import"./ShieldCheckIcon-BkfH9kvS.js";import"./Cog6ToothIcon-BCMOD4VN.js";import"./DataTableCellText.vue-BZ3AmWYN.js";import"./DataTableCellLink.vue-TjwLSp-j.js";import"./DataTableCellStatus.vue-B49X7_OC.js";import"./PencilSquareIcon-C2zE7SZM.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
