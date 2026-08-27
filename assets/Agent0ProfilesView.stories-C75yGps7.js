import{d as f,r as v,a0 as F}from"./iframe-e359xqcE.js";import{_ as c,a as g}from"./Agent0ProfileDialog-DJdKP_c7.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-DdkQ6TJx.js";import"./RichText.vue-DSFy4cWp.js";import{g as O}from"./formatListedDateTime-XDJFFXA_.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import{b as P}from"./useProfileDetailBindings-CXy_sxF7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-DmpQNvQy.js";import"./index-B2MD1nhU.js";import"./index-DG2lsddg.js";import"./index-T5BskalJ.js";import"./index-SNTWOJlm.js";import"./index-Do95Hz07.js";import"./index-ss00ocVv.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-B6IZQdQn.js";import"./index-YE3wsXmc.js";import"./index-D72zYeEF.js";import"./index-C8Trrx-R.js";import"./index-CgskNI-h.js";import"./index-WY88b_Bj.js";import"./index-CWO9Utw3.js";import"./index-BOWouLqF.js";import"./index-B2ZM6yJv.js";import"./DataTable.vue-Dt4av9HN.js";import"./Paginator.vue-CUZVRWXH.js";import"./index-CTBTSs98.js";import"./index-8qCCvjmZ.js";import"./index-DRbtjQJv.js";import"./ChevronRightIcon-atQJRe2P.js";import"./index-B4Kwt-uL.js";import"./index-9U7SPxNC.js";import"./index-CZJvM9KI.js";import"./index-MDUUAlov.js";import"./useDataTableSize-OVg47YRd.js";import"./DataTableToolbar.vue-CuLsC_2r.js";import"./FilterChip.vue-DoLqV2Kl.js";import"./index-BLqIZ8v0.js";import"./SaveViewPanel.vue-Dqdohw-T.js";import"./CheckboxWithLabel.vue-D6A-BAKo.js";import"./ColumnConfigDropdown.vue-DOGn7883.js";import"./index-C3FgrSHB.js";import"./LinkText.vue-CAkZt6Z4.js";import"./ArrowRightIcon-LWeHu1Pb.js";import"./DropdownSearch.vue-D9XD5nPM.js";import"./useContainer-DGxftqyG.js";import"./EyeIcon-CEoyLAXD.js";import"./FunnelIcon-BEor3Yz-.js";import"./FunnelIcon-BG58avoD.js";import"./Dropdown.vue-BCXCU-gF.js";import"./SavedViewsDropdown.vue-DLEv2TnD.js";import"./StarIcon-BMOKyYsx.js";import"./PencilIcon-Bja47iKl.js";import"./TrashIcon-D83dzVWN.js";import"./ExportDropdown.vue-DCRor2VM.js";import"./index-Bz421pNc.js";import"./ArrowDownTrayIcon-DlfVAaU-.js";import"./PlusIcon-BfUZNis0.js";import"./index-B6YXkmJR.js";import"./ArrowPathIcon-Cz3ipuws.js";import"./FormField.vue-X6cJp_-2.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./ListPageLayout.vue-HUNIhgRV.js";import"./BasePageLayout.vue-CIy2WbCv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bn8GZArD.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";import"./ShieldCheckIcon-C8LDGAuf.js";import"./Cog6ToothIcon-B_W-iGDU.js";import"./DataTableCellText.vue-7C2suGZ4.js";import"./DataTableCellLink.vue-BfDcOf_v.js";import"./DataTableCellStatus.vue-BOSUv6NN.js";import"./PencilSquareIcon-TMd81OuA.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
