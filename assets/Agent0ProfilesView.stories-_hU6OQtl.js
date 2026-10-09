import{d as f,r as v,a0 as F}from"./iframe-DMCY07cZ.js";import{_ as c,a as g}from"./Agent0ProfileDialog-BR7kcSry.js";import{f as D,g as G,u as i,s as o,p as C,h,e as p}from"./mockData-C-t2Sxxt.js";import"./RichText.vue-CvF5yRyM.js";import{g as O}from"./formatListedDateTime-CPl5ND3t.js";import"./allowedAiClientOriginKindLabels-Dea6AHHq.js";import{b as P}from"./useProfileDetailBindings-CV_BfafI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C8jYejGu.js";import"./index-DA5-wtQK.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-Csz9fdiB.js";import"./index-ZhWAdK_X.js";import"./index-Bx337-gk.js";import"./index-DilifcX3.js";import"./index-D3MAoQAU.js";import"./index-CAIS5x6K.js";import"./index-BKI-cOV2.js";import"./index-CIjxQS-N.js";import"./index-BFdQe0__.js";import"./index-BEZAFdmF.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-CubICyzx.js";import"./index-DYGVLXAt.js";import"./index-4qDJp6e0.js";import"./index-I-4AEmq6.js";import"./index-8ifyCe0e.js";import"./index-0Q9rnkj1.js";import"./index-zhnW7dfa.js";import"./index-P6ICO6ZA.js";import"./index-DykeBKWR.js";import"./DataTable.vue-DVoGWkDl.js";import"./Paginator.vue-B0o699Jl.js";import"./index-CNtARqCh.js";import"./index-Dcp0P5L_.js";import"./index-c_6rTq8P.js";import"./ChevronRightIcon-0prVeiSQ.js";import"./index-w2uGKA1Z.js";import"./index-C8egdQ1c.js";import"./index-C485P2jR.js";import"./index-CFqI3cb6.js";import"./useDataTableSize-B27MToa2.js";import"./DataTableToolbar.vue-D_0n_2kk.js";import"./FilterChip.vue-CVHWrKgq.js";import"./index-DdjEjPWB.js";import"./SaveViewPanel.vue-CAjgMJLg.js";import"./CheckboxWithLabel.vue-CXSPPhJR.js";import"./ColumnConfigDropdown.vue-C9QUDHr_.js";import"./index-LveaKuZ9.js";import"./LinkText.vue-C4Bm3LED.js";import"./ArrowRightIcon-BGWN9072.js";import"./DropdownSearch.vue-DZ8Tw04x.js";import"./useContainer-DfxTB2r_.js";import"./EyeIcon-DSZ8qNEf.js";import"./FunnelIcon-CNn2UqWl.js";import"./FunnelIcon-uoPXP5Z5.js";import"./Dropdown.vue--UM-sfQu.js";import"./SavedViewsDropdown.vue-Dv8xpYN8.js";import"./StarIcon-BoCxGd1G.js";import"./PencilIcon-1xnUpOjt.js";import"./TrashIcon-CYdu5C6V.js";import"./ExportDropdown.vue-DAmxzmy0.js";import"./index-Bv_ulaMc.js";import"./ArrowDownTrayIcon-D4qx6lf7.js";import"./PlusIcon-CdK5UITC.js";import"./index-CAGYjASk.js";import"./ArrowPathIcon-C5A9MKYt.js";import"./FormField.vue-C1zJRe6K.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";import"./ListPageLayout.vue-C_IURyqk.js";import"./BasePageLayout.vue-D2fYOqvl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C0Jx-WGa.js";import"./ArrowRightStartOnRectangleIcon-Bka7PvIm.js";import"./ArrowTopRightOnSquareIcon-CIGo4dDp.js";import"./RocketLaunchIcon-DVslXB5O.js";import"./HomeIcon-C9EV1fIu.js";import"./UserIcon-BoI2bMct.js";import"./UsersIcon-DP4kMeWO.js";import"./UserGroupIcon-Bogo_ozG.js";import"./CommandLineIcon-oW993rHf.js";import"./ClipboardDocumentListIcon-BMJdaMuG.js";import"./ClipboardDocumentCheckIcon-C2qlzy0s.js";import"./CpuChipIcon-xpUfEw0F.js";import"./ShieldCheckIcon-DN84MN1N.js";import"./Cog6ToothIcon-B22lkUCe.js";import"./DataTableCellText.vue-B4l5eQao.js";import"./DataTableCellLink.vue-Dmg_4v0n.js";import"./DataTableCellStatus.vue-lVpQ7em5.js";import"./PencilSquareIcon-Cw1GzdUb.js";const ue={title:"AI Gateway - Burak/Admin Portal/Concept Parts/Profile",component:c,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>f({components:{Agent0ProfilesView:c},setup(){const t=P(C,o,i,p);return{profileColumns:O(o,i,p,h),...t}},template:`
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
