import{d,r as t,a0 as u}from"./iframe-DuzLv9Pd.js";import{_ as m}from"./Agent0ServersView-BQlCDcy-.js";import{s as e,q as f}from"./mockData-DdtCyTwi.js";import{c as h}from"./useProfileDetailBindings-DQ9p7UqW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DlU_MYIi.js";import"./index-CGiVUquh.js";import"./index-CPNNQ3fD.js";import"./index-BuiD5gzs.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-DY4Fqf02.js";import"./index-ZhWAdK_X.js";import"./index-Br2-aBVM.js";import"./index-b0ySB-5C.js";import"./index-DL1Pt7bO.js";import"./index-DOizLEho.js";import"./RichText.vue-D4MvUk45.js";import"./DataTable.vue-Cj_l__a2.js";import"./Paginator.vue-CKNm14yQ.js";import"./index-CEiioRpE.js";import"./index-D5zH4fN4.js";import"./index-b5e0TYx1.js";import"./index-CWlqIe1B.js";import"./index-CjiEPaTZ.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-Brczh--H.js";import"./index-gSNiAAF9.js";import"./index-CdgF4ttL.js";import"./ChevronRightIcon-RLkhG38k.js";import"./index-CO-G9M_W.js";import"./index-DnaDt85i.js";import"./index-CFtktJtS.js";import"./index-JYiShB9D.js";import"./index-DUWomeF_.js";import"./index-BQabsSYQ.js";import"./useDataTableSize-BPDfn_He.js";import"./DataTableToolbar.vue-C5r-1yVm.js";import"./FilterChip.vue-Ca3a8qy6.js";import"./index-D3QA_pcE.js";import"./index-BcWNlClR.js";import"./index-BemneOh4.js";import"./SaveViewPanel.vue-i4O3zuWV.js";import"./CheckboxWithLabel.vue-DoqDZu3R.js";import"./ColumnConfigDropdown.vue-BVX8ajl9.js";import"./index-BbuMzApp.js";import"./LinkText.vue-Dtn5ZYX7.js";import"./ArrowRightIcon-CebixEfQ.js";import"./DropdownSearch.vue-p79a3D5Z.js";import"./useContainer-Do_p2hLC.js";import"./EyeIcon-DZdtwtTn.js";import"./FunnelIcon-Cz3H4XLI.js";import"./FunnelIcon-CD3UCyXH.js";import"./Dropdown.vue-BvGCjloM.js";import"./SavedViewsDropdown.vue-YKksxr3f.js";import"./StarIcon-CQ684_9r.js";import"./PencilIcon-pp46wisY.js";import"./TrashIcon-Cf9pvfv2.js";import"./ExportDropdown.vue-SboJTm8h.js";import"./index-ZriuU7yS.js";import"./ArrowDownTrayIcon-BHhLe726.js";import"./PlusIcon-A7C_VQzz.js";import"./index-CWdSX-TA.js";import"./ArrowPathIcon-DniohQTk.js";import"./ListPageLayout.vue-c8ILG3IR.js";import"./BasePageLayout.vue-DVNcPgxb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BnPtWTiX.js";import"./FormField.vue-CblrQISo.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./ServerDeleteConfirmDialog-DG4-hwTZ.js";import"./SeverityDialog.vue-Bjby2zaJ.js";import"./MessageNotification.vue-gttcx1zG.js";import"./index-2kR38mcb.js";import"./FlagIcon-CcLmoULS.js";import"./DataTableCellText.vue-1rDF5L9k.js";import"./DataTableCellLink.vue-C2-AqLyE.js";import"./DataTableCellStatus.vue-mQvI-oeM.js";import"./DataTableCellAction.vue-W9RGyFtY.js";import"./EllipsisHorizontalIcon-CpSAr9zQ.js";import"./PencilSquareIcon-DxXATT4Q.js";import"./formatListedDateTime-D27HJzil.js";import"./allowedAiClientOriginKindLabels-DYIWO8UO.js";import"./index-Di5n2FZb.js";import"./ArrowRightStartOnRectangleIcon-D4g3cMin.js";import"./ArrowTopRightOnSquareIcon-vQx7CBJY.js";import"./RocketLaunchIcon-Cvc1Zpa7.js";import"./HomeIcon-B8gBiWKx.js";import"./UserIcon-CtiZzZ2X.js";import"./UsersIcon-BT-W7sF-.js";import"./UserGroupIcon-CWdxV-oE.js";import"./CommandLineIcon-BD5MFUQg.js";import"./ClipboardDocumentListIcon-CjFMn6dO.js";import"./ClipboardDocumentCheckIcon-k7_FGCzy.js";import"./CpuChipIcon-BBHeqCE_.js";import"./ShieldCheckIcon-BpS1grCD.js";import"./Cog6ToothIcon-bwwfqrlO.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
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
