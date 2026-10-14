import{d,r as t,a0 as u}from"./iframe-600w3n4H.js";import{_ as m}from"./Agent0ServersView-CVOkre17.js";import{s as e,q as f}from"./mockData-fbvw1-A_.js";import{c as h}from"./useProfileDetailBindings-CvBAnAuU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-eDcuTK2L.js";import"./index-CTl3vUKN.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-CC9FbOuz.js";import"./index-DtheA9qo.js";import"./index-Cy7FONXb.js";import"./RichText.vue-CqDMFobT.js";import"./DataTable.vue-BpegDMSl.js";import"./Paginator.vue-N5cwZAMR.js";import"./index-BuAmHxBs.js";import"./index-CtvYIbWm.js";import"./index-DQGhf_8I.js";import"./index-avCkw835.js";import"./index-DosJGK4C.js";import"./index-Bu8ekTSX.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-DBXXhGgD.js";import"./index-CHjA10XC.js";import"./index-Bz6f5oKS.js";import"./ChevronRightIcon-BF9RliU4.js";import"./index-BIOcEsci.js";import"./index-DyPrYXuB.js";import"./index-B3TfiOtM.js";import"./index-Co2ulTVq.js";import"./index-D0lPU1dy.js";import"./index-Dl3ThDuu.js";import"./useDataTableSize-DxcZGPDn.js";import"./DataTableToolbar.vue-BqFfdW4o.js";import"./FilterChip.vue-BtvpShAi.js";import"./index-DA9jvc7b.js";import"./index-v8PIUxlP.js";import"./index-DcxJnJl9.js";import"./SaveViewPanel.vue-Czdz2F03.js";import"./CheckboxWithLabel.vue-BmE_SJFg.js";import"./ColumnConfigDropdown.vue-Bjs32508.js";import"./index-B_FT7YyE.js";import"./LinkText.vue-Bnu_L6eP.js";import"./ArrowRightIcon-D0LHaIDr.js";import"./DropdownSearch.vue-Cx63eXt4.js";import"./useContainer-KG6QsGJY.js";import"./EyeIcon-BZIzJ2Hw.js";import"./FunnelIcon-CVFb1k60.js";import"./FunnelIcon-rqOm78Ah.js";import"./Dropdown.vue-BqAjJND7.js";import"./SavedViewsDropdown.vue-Dz_I86JH.js";import"./StarIcon-D6Wvb7gj.js";import"./PencilIcon-ChxzSqPh.js";import"./TrashIcon-DM5MVlXY.js";import"./ExportDropdown.vue-ogXm79xd.js";import"./index-BG9T1I3x.js";import"./ArrowDownTrayIcon-HGt3Lp9D.js";import"./PlusIcon-Ji6CXzfg.js";import"./index-CePK2PS1.js";import"./ArrowPathIcon-BgUDuyAT.js";import"./ListPageLayout.vue-Bn2tSLYK.js";import"./BasePageLayout.vue-DPmEk4Cz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DOGY-w59.js";import"./FormField.vue-9Bh63gOi.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";import"./ServerDeleteConfirmDialog-DLogJDxp.js";import"./SeverityDialog.vue-_qbtizbh.js";import"./MessageNotification.vue-mnj1Yhnk.js";import"./index-BXs8LW6R.js";import"./FlagIcon-Ba3Do2-9.js";import"./DataTableCellText.vue-BLAdT-0i.js";import"./DataTableCellLink.vue-CLTjAIj8.js";import"./DataTableCellStatus.vue-WvqoxSpa.js";import"./DataTableCellAction.vue-fEdy6Xn2.js";import"./EllipsisHorizontalIcon-Oc4k2XGT.js";import"./PencilSquareIcon-DlUtcSnh.js";import"./formatListedDateTime-Br3v5uvi.js";import"./allowedAiClientOriginKindLabels-BXOqaci5.js";import"./index-BPN10FIB.js";import"./ArrowRightStartOnRectangleIcon-Docb568Z.js";import"./ArrowTopRightOnSquareIcon-D1DflJJw.js";import"./RocketLaunchIcon-C0UcLMmT.js";import"./HomeIcon-DzFCrQek.js";import"./UserIcon-BnMpn0XC.js";import"./UsersIcon-BAek990o.js";import"./UserGroupIcon-BAYPParn.js";import"./CommandLineIcon-BHverfhZ.js";import"./ClipboardDocumentListIcon-DJ3dp-pS.js";import"./ClipboardDocumentCheckIcon-fhZeORzP.js";import"./CpuChipIcon-DHk9P2K6.js";import"./ShieldCheckIcon-BytxG3nK.js";import"./Cog6ToothIcon-DHjR5ucD.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
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
