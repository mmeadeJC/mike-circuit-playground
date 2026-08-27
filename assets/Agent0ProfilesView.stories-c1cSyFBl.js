import{d as f,r as v,a0 as F}from"./iframe-D7BbHDbG.js";import{_ as c,a as g}from"./Agent0ProfileDialog-BtX2pquK.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-CmBXhQsJ.js";import"./RichText.vue-1XZLRn0K.js";import{g as O}from"./formatListedDateTime-HBifDuIW.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import{b as P}from"./useProfileDetailBindings-DfETnM_w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./index-DZLl4wby.js";import"./index-BaidBBYU.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-0gxlrFf7.js";import"./index-CL0m3nvY.js";import"./index-bbso60R8.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-Blxf5QWh.js";import"./index-BmNQnOBp.js";import"./index-CiXhdmRB.js";import"./index-DCVTeUli.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";import"./index-DBWVCl5L.js";import"./index-DHnCHi6v.js";import"./index-CCeEX0h1.js";import"./DataTable.vue-D1tQPxhX.js";import"./Paginator.vue-BuMmMYPz.js";import"./index-XbhyUeFS.js";import"./index-pQFxUuf4.js";import"./index-LzOnpYVg.js";import"./ChevronRightIcon-BrFzWSch.js";import"./index-DP0gcRj_.js";import"./index-1PNgIuf3.js";import"./index-DFQPCZRe.js";import"./index-DopepIUV.js";import"./useDataTableSize-WEItdoUR.js";import"./DataTableToolbar.vue-DZvmr1zI.js";import"./FilterChip.vue-BOKRZnH1.js";import"./index-D-Q9u-0k.js";import"./SaveViewPanel.vue-DB9EdfCj.js";import"./CheckboxWithLabel.vue-DmVEARZq.js";import"./ColumnConfigDropdown.vue-BwwHz_nR.js";import"./index-CYBRqvTS.js";import"./LinkText.vue-CWhhAGQ4.js";import"./ArrowRightIcon-BCpGJgPW.js";import"./DropdownSearch.vue-DYFJiipE.js";import"./useContainer-D49SELwj.js";import"./EyeIcon-Cdr2PXsn.js";import"./FunnelIcon-QjX3PsK8.js";import"./FunnelIcon-BW6Ml2Am.js";import"./Dropdown.vue-D2xWW_V3.js";import"./SavedViewsDropdown.vue-Cv6gyBli.js";import"./StarIcon-B-sKJzJV.js";import"./PencilIcon-5Jfjkumk.js";import"./TrashIcon-zSr6WN2U.js";import"./ExportDropdown.vue-BpPmEcA2.js";import"./index-CoUfR_Hg.js";import"./ArrowDownTrayIcon-BZdF9POM.js";import"./PlusIcon-B94kIdrt.js";import"./index-CUoDpPp7.js";import"./ArrowPathIcon-CfGxZalC.js";import"./FormField.vue-BiV6ZEgt.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./ListPageLayout.vue-Cb9WGu1E.js";import"./BasePageLayout.vue-Dr0I8sc2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CKmPII1G.js";import"./ArrowRightStartOnRectangleIcon-B91pfFJz.js";import"./ArrowTopRightOnSquareIcon-_aQH2B8X.js";import"./RocketLaunchIcon-BIuD1oEk.js";import"./HomeIcon-XZc1Dfyu.js";import"./UserIcon-DRjp4_6R.js";import"./UsersIcon-BbZ6Qpdm.js";import"./UserGroupIcon-Ctmauh4_.js";import"./CommandLineIcon-CWVZZFIo.js";import"./ClipboardDocumentListIcon-DLWg2TFY.js";import"./ClipboardDocumentCheckIcon-B9tp8omi.js";import"./CpuChipIcon-BPQeLsIA.js";import"./ShieldCheckIcon-BY_KE66K.js";import"./Cog6ToothIcon-DbA3VXm8.js";import"./DataTableCellText.vue-C1ce4CLO.js";import"./DataTableCellLink.vue-BxH5aVfN.js";import"./DataTableCellStatus.vue-BVuThCB8.js";import"./PencilSquareIcon-DdOkIHmm.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
