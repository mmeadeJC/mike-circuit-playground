import{d,r as t,a0 as u}from"./iframe-e359xqcE.js";import{_ as m}from"./Agent0ServersView-BUL-NAjH.js";import{s as e,q as f}from"./mockData-DdkQ6TJx.js";import{c as h}from"./useProfileDetailBindings-CXy_sxF7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CWO9Utw3.js";import"./index-SNTWOJlm.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-BOWouLqF.js";import"./index-WY88b_Bj.js";import"./index-B2ZM6yJv.js";import"./RichText.vue-DSFy4cWp.js";import"./DataTable.vue-Dt4av9HN.js";import"./Paginator.vue-CUZVRWXH.js";import"./index-CTBTSs98.js";import"./index-B2MD1nhU.js";import"./index-DG2lsddg.js";import"./index-T5BskalJ.js";import"./index-D72zYeEF.js";import"./index-C8Trrx-R.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-CgskNI-h.js";import"./index-8qCCvjmZ.js";import"./index-DRbtjQJv.js";import"./ChevronRightIcon-atQJRe2P.js";import"./index-B4Kwt-uL.js";import"./index-Do95Hz07.js";import"./index-ss00ocVv.js";import"./index-9U7SPxNC.js";import"./index-CZJvM9KI.js";import"./index-MDUUAlov.js";import"./useDataTableSize-OVg47YRd.js";import"./DataTableToolbar.vue-CuLsC_2r.js";import"./FilterChip.vue-DoLqV2Kl.js";import"./index-BLqIZ8v0.js";import"./index-B6IZQdQn.js";import"./index-YE3wsXmc.js";import"./SaveViewPanel.vue-Dqdohw-T.js";import"./CheckboxWithLabel.vue-D6A-BAKo.js";import"./ColumnConfigDropdown.vue-DOGn7883.js";import"./index-C3FgrSHB.js";import"./LinkText.vue-CAkZt6Z4.js";import"./ArrowRightIcon-LWeHu1Pb.js";import"./DropdownSearch.vue-D9XD5nPM.js";import"./useContainer-DGxftqyG.js";import"./EyeIcon-CEoyLAXD.js";import"./FunnelIcon-BEor3Yz-.js";import"./FunnelIcon-BG58avoD.js";import"./Dropdown.vue-BCXCU-gF.js";import"./SavedViewsDropdown.vue-DLEv2TnD.js";import"./StarIcon-BMOKyYsx.js";import"./PencilIcon-Bja47iKl.js";import"./TrashIcon-D83dzVWN.js";import"./ExportDropdown.vue-DCRor2VM.js";import"./index-Bz421pNc.js";import"./ArrowDownTrayIcon-DlfVAaU-.js";import"./PlusIcon-BfUZNis0.js";import"./index-B6YXkmJR.js";import"./ArrowPathIcon-Cz3ipuws.js";import"./ListPageLayout.vue-HUNIhgRV.js";import"./BasePageLayout.vue-CIy2WbCv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BAE9PsyO.js";import"./FormField.vue-X6cJp_-2.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./ServerDeleteConfirmDialog-D25UyNN4.js";import"./SeverityDialog.vue-BgTgYLSP.js";import"./MessageNotification.vue-C0yM77Od.js";import"./index-CLgHIt31.js";import"./FlagIcon-ebJhzkK-.js";import"./DataTableCellText.vue-7C2suGZ4.js";import"./DataTableCellLink.vue-BfDcOf_v.js";import"./DataTableCellStatus.vue-BOSUv6NN.js";import"./DataTableCellAction.vue-DuwWcy79.js";import"./EllipsisHorizontalIcon-CxnQmkwF.js";import"./PencilSquareIcon-TMd81OuA.js";import"./formatListedDateTime-XDJFFXA_.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import"./index-Bn8GZArD.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";import"./ShieldCheckIcon-C8LDGAuf.js";import"./Cog6ToothIcon-B_W-iGDU.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
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
