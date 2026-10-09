import{d,r as t,a0 as u}from"./iframe-DMCY07cZ.js";import{_ as m}from"./Agent0ServersView-BHn18RmP.js";import{s as e,q as f}from"./mockData-C-t2Sxxt.js";import{c as h}from"./useProfileDetailBindings-CV_BfafI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-zhnW7dfa.js";import"./index-CIjxQS-N.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-C8jYejGu.js";import"./index-DA5-wtQK.js";import"./index-Csz9fdiB.js";import"./index-ZhWAdK_X.js";import"./index-Bx337-gk.js";import"./index-P6ICO6ZA.js";import"./index-0Q9rnkj1.js";import"./index-DykeBKWR.js";import"./RichText.vue-CvF5yRyM.js";import"./DataTable.vue-DVoGWkDl.js";import"./Paginator.vue-B0o699Jl.js";import"./index-CNtARqCh.js";import"./index-D3MAoQAU.js";import"./index-CAIS5x6K.js";import"./index-BKI-cOV2.js";import"./index-4qDJp6e0.js";import"./index-I-4AEmq6.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-8ifyCe0e.js";import"./index-Dcp0P5L_.js";import"./index-c_6rTq8P.js";import"./ChevronRightIcon-0prVeiSQ.js";import"./index-w2uGKA1Z.js";import"./index-BFdQe0__.js";import"./index-BEZAFdmF.js";import"./index-C8egdQ1c.js";import"./index-C485P2jR.js";import"./index-CFqI3cb6.js";import"./useDataTableSize-B27MToa2.js";import"./DataTableToolbar.vue-D_0n_2kk.js";import"./FilterChip.vue-CVHWrKgq.js";import"./index-DdjEjPWB.js";import"./index-CubICyzx.js";import"./index-DYGVLXAt.js";import"./SaveViewPanel.vue-CAjgMJLg.js";import"./CheckboxWithLabel.vue-CXSPPhJR.js";import"./ColumnConfigDropdown.vue-C9QUDHr_.js";import"./index-LveaKuZ9.js";import"./LinkText.vue-C4Bm3LED.js";import"./ArrowRightIcon-BGWN9072.js";import"./DropdownSearch.vue-DZ8Tw04x.js";import"./useContainer-DfxTB2r_.js";import"./EyeIcon-DSZ8qNEf.js";import"./FunnelIcon-CNn2UqWl.js";import"./FunnelIcon-uoPXP5Z5.js";import"./Dropdown.vue--UM-sfQu.js";import"./SavedViewsDropdown.vue-Dv8xpYN8.js";import"./StarIcon-BoCxGd1G.js";import"./PencilIcon-1xnUpOjt.js";import"./TrashIcon-CYdu5C6V.js";import"./ExportDropdown.vue-DAmxzmy0.js";import"./index-Bv_ulaMc.js";import"./ArrowDownTrayIcon-D4qx6lf7.js";import"./PlusIcon-CdK5UITC.js";import"./index-CAGYjASk.js";import"./ArrowPathIcon-C5A9MKYt.js";import"./ListPageLayout.vue-C_IURyqk.js";import"./BasePageLayout.vue-D2fYOqvl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-EyMdbmxj.js";import"./FormField.vue-C1zJRe6K.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";import"./ServerDeleteConfirmDialog-BFBNdDJY.js";import"./SeverityDialog.vue-BC_uxLq3.js";import"./MessageNotification.vue-C0aqcNlm.js";import"./index-DZkWerPt.js";import"./FlagIcon-C-dB14Ld.js";import"./DataTableCellText.vue-B4l5eQao.js";import"./DataTableCellLink.vue-Dmg_4v0n.js";import"./DataTableCellStatus.vue-lVpQ7em5.js";import"./DataTableCellAction.vue-CjYktAO9.js";import"./EllipsisHorizontalIcon-Dntkn-if.js";import"./PencilSquareIcon-Cw1GzdUb.js";import"./formatListedDateTime-CPl5ND3t.js";import"./allowedAiClientOriginKindLabels-Dea6AHHq.js";import"./index-C0Jx-WGa.js";import"./ArrowRightStartOnRectangleIcon-Bka7PvIm.js";import"./ArrowTopRightOnSquareIcon-CIGo4dDp.js";import"./RocketLaunchIcon-DVslXB5O.js";import"./HomeIcon-C9EV1fIu.js";import"./UserIcon-BoI2bMct.js";import"./UsersIcon-DP4kMeWO.js";import"./UserGroupIcon-Bogo_ozG.js";import"./CommandLineIcon-oW993rHf.js";import"./ClipboardDocumentListIcon-BMJdaMuG.js";import"./ClipboardDocumentCheckIcon-C2qlzy0s.js";import"./CpuChipIcon-xpUfEw0F.js";import"./ShieldCheckIcon-DN84MN1N.js";import"./Cog6ToothIcon-B22lkUCe.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
        <Agent0ServersView
          :filteredServersData="filteredData"
          :selectedServers="selectedServers"
          :selectedServer="selectedServer"
          :showServerDialog="showServerDialog"
          :authStyleOptions="authStyleOptions"
          :serverForm="serverForm"
          @update:selectedServers="selectedServers = $event"
          @update:showServerDialog="showServerDialog = $event"
          @delete-server="onDeleteServer"
          @search="handleSearch"
        />
      `})};var o,i,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'List',
  render: () => defineComponent({
    components: {
      Agent0ServersView
    },
    setup() {
      const selectedServers = ref([]);
      const selectedServer = ref(serversData[0]);
      const showServerDialog = ref(false);
      const serverForm = reactive({
        targetId: serversData[0].slug,
        name: serversData[0].name,
        url: serversData[0].url,
        authStyle: serversData[0].connectionType,
        authConfig: serversData[0].authConfig
      });
      const filters = useServerFilters(serversData);
      function onDeleteServer(row: Record<string, unknown>) {
        console.info('[Story] delete-server', row);
      }
      return {
        selectedServers,
        selectedServer,
        showServerDialog,
        serverForm,
        authStyleOptions,
        onDeleteServer,
        ...filters
      };
    },
    template: \`
        <Agent0ServersView
          :filteredServersData="filteredData"
          :selectedServers="selectedServers"
          :selectedServer="selectedServer"
          :showServerDialog="showServerDialog"
          :authStyleOptions="authStyleOptions"
          :serverForm="serverForm"
          @update:selectedServers="selectedServers = $event"
          @update:showServerDialog="showServerDialog = $event"
          @delete-server="onDeleteServer"
          @search="handleSearch"
        />
      \`
  })
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const Sr=["List"];export{r as List,Sr as __namedExportsOrder,cr as default};
