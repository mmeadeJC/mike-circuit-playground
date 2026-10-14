import{d,r as t,a0 as u}from"./iframe-8Q3g4suX.js";import{_ as m}from"./Agent0ServersView-3ha9JXj3.js";import{s as e,q as f}from"./mockData-B40J5FIn.js";import{c as h}from"./useProfileDetailBindings-ZxDS1XxG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DswaKqI5.js";import"./index-DRA9vNfv.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-7zypbFVM.js";import"./index-Bpd14J7o.js";import"./index-BB_hCnE-.js";import"./RichText.vue-C1Ty82RV.js";import"./DataTable.vue-CqBNXemk.js";import"./Paginator.vue-CcesqfBl.js";import"./index-DGY9u_rI.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-Us1_uPk3.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-BL2_KjjI.js";import"./index-C6vF-uE7.js";import"./index--cVum_Py.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./index-NkGFgNPM.js";import"./index-B6YgWt2p.js";import"./index-C19gJH8S.js";import"./index-D8_kzb1y.js";import"./index-BMCZJFM3.js";import"./index-MkGR21B_.js";import"./useDataTableSize-ICT-xewV.js";import"./DataTableToolbar.vue-ByVarpJJ.js";import"./FilterChip.vue-CBw3qOe7.js";import"./index-cFQtYIhg.js";import"./index-CN297qaa.js";import"./index-BdbLeFxC.js";import"./SaveViewPanel.vue-B5q98drN.js";import"./CheckboxWithLabel.vue-D_gLbPG2.js";import"./ColumnConfigDropdown.vue-CtuR7DM1.js";import"./index-DTiFh52L.js";import"./LinkText.vue-DvAjr8lK.js";import"./ArrowRightIcon-BXY2Zswv.js";import"./DropdownSearch.vue-Cnv-38a8.js";import"./useContainer-Bc2j6_Ia.js";import"./EyeIcon-DNiNViaw.js";import"./FunnelIcon-CbTjwsSd.js";import"./FunnelIcon-D3WoHsAW.js";import"./Dropdown.vue-CKApLVqP.js";import"./SavedViewsDropdown.vue-Bkhuo6Co.js";import"./StarIcon-DyZx2qfY.js";import"./PencilIcon-CGZE74QN.js";import"./TrashIcon-Batrj4xL.js";import"./ExportDropdown.vue-BSvMj9vV.js";import"./index-DnuNANX7.js";import"./ArrowDownTrayIcon-BdnXguS2.js";import"./PlusIcon-BstNSs7l.js";import"./index-BEvLtaLX.js";import"./ArrowPathIcon-Do2QagUJ.js";import"./ListPageLayout.vue-CXbiXEcG.js";import"./BasePageLayout.vue-CwV5cDx0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-dop1ZQf9.js";import"./FormField.vue-DPg-U9jM.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";import"./ServerDeleteConfirmDialog-mF6jMsxa.js";import"./SeverityDialog.vue-CfijBZPn.js";import"./MessageNotification.vue-Cpg8Rucu.js";import"./index-CXQWPAyu.js";import"./FlagIcon-CTBX6-CL.js";import"./DataTableCellText.vue-BME5Ov-M.js";import"./DataTableCellLink.vue-C2An6vkM.js";import"./DataTableCellStatus.vue-DTXzUrUS.js";import"./DataTableCellAction.vue-C57wmWCe.js";import"./EllipsisHorizontalIcon-DtE3Bb7n.js";import"./PencilSquareIcon-CZ923cNI.js";import"./formatListedDateTime-CSMLMKDO.js";import"./allowedAiClientOriginKindLabels-DXTLUnQQ.js";import"./index-DPUoOQbX.js";import"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import"./RocketLaunchIcon-BJK4NMZ4.js";import"./HomeIcon-yFRUSV7Z.js";import"./UserIcon-ShjzaHpT.js";import"./UsersIcon-Z2ifx08k.js";import"./UserGroupIcon-Ciz8NLc5.js";import"./CommandLineIcon-4Js_OSQE.js";import"./ClipboardDocumentListIcon-CnTg33RY.js";import"./ClipboardDocumentCheckIcon--weNKert.js";import"./CpuChipIcon-DVt0p-5v.js";import"./ShieldCheckIcon-W0AJus9F.js";import"./Cog6ToothIcon-cxmEYFc7.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
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
