import{d,r as t,a0 as u}from"./iframe-DnhA1Jsm.js";import{_ as m}from"./Agent0ServersView-_IBAa18A.js";import{s as e,q as f}from"./mockData-b0eNLKnq.js";import{c as h}from"./useProfileDetailBindings-BPXLPLZc.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CkUOowPH.js";import"./index-l3Tk4em_.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-BNbdGjQ1.js";import"./index-lNUZEIRs.js";import"./index-BugbG7pm.js";import"./index-ZhWAdK_X.js";import"./index-B5xbJtC5.js";import"./index-BB-DZxHZ.js";import"./index-BFiFYGtt.js";import"./index-TOe8dN6-.js";import"./RichText.vue-BuoexALv.js";import"./DataTable.vue-Bj-Cy6R9.js";import"./Paginator.vue-2u0PKv_l.js";import"./index-C6XQ6gRS.js";import"./index-DNm818yJ.js";import"./index-DSiULD1o.js";import"./index-Ch682guI.js";import"./index-BI9VwZ0A.js";import"./index-DKDggJZ4.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-C3dwEfyt.js";import"./index-DYw0Q7A3.js";import"./index-D0WBUH3h.js";import"./ChevronRightIcon-CdbfjCjO.js";import"./index-SGyjFKB5.js";import"./index-BNIcB7B5.js";import"./index-DA6MtJit.js";import"./index-DUtpmYFH.js";import"./index-BIrxIukW.js";import"./index-7Fm2NweX.js";import"./useDataTableSize-CS-CgBOg.js";import"./DataTableToolbar.vue-BBcNrkn-.js";import"./FilterChip.vue-Cds_y0fD.js";import"./index-2F2whbl-.js";import"./index-BiaoWc9A.js";import"./index-qDFe3kWE.js";import"./SaveViewPanel.vue-BQ172UM9.js";import"./CheckboxWithLabel.vue-D3KLeAP4.js";import"./ColumnConfigDropdown.vue-B5x6wb80.js";import"./index-BiOqJP2u.js";import"./LinkText.vue-h4sX1MNH.js";import"./ArrowRightIcon-18DcXMgP.js";import"./DropdownSearch.vue-IbtatRI6.js";import"./useContainer-DkP69mYD.js";import"./EyeIcon-S4cIhHne.js";import"./FunnelIcon-LPKizbyg.js";import"./FunnelIcon-4QbHURh5.js";import"./Dropdown.vue-CDAwy3e-.js";import"./SavedViewsDropdown.vue-Cw4XkFHx.js";import"./StarIcon-iuKzahlx.js";import"./PencilIcon-DciTyJoH.js";import"./TrashIcon-C1u_5ym-.js";import"./ExportDropdown.vue-BiD9H9cP.js";import"./index-Dpsw-dQr.js";import"./ArrowDownTrayIcon-CJcpf1BH.js";import"./PlusIcon-CShqu8rY.js";import"./index-DmFuCnyO.js";import"./ArrowPathIcon-DiGk3PO0.js";import"./ListPageLayout.vue-achTUWZa.js";import"./BasePageLayout.vue-DLwZijeP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-d5NeXY8j.js";import"./FormField.vue-mRh6rdEv.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";import"./ServerDeleteConfirmDialog-BtHVYCTg.js";import"./SeverityDialog.vue-BfJOmHGA.js";import"./MessageNotification.vue-Bm_HYzbz.js";import"./index-Dn80zYY1.js";import"./FlagIcon-DCH0qEhv.js";import"./DataTableCellText.vue-Bk2ZGhbt.js";import"./DataTableCellLink.vue-CWJfZM0c.js";import"./DataTableCellStatus.vue-CdAQjo7v.js";import"./DataTableCellAction.vue-BYeNpGik.js";import"./EllipsisHorizontalIcon-D7_lMGYU.js";import"./PencilSquareIcon-Bez5HNT-.js";import"./formatListedDateTime-D31a1oMi.js";import"./allowedAiClientOriginKindLabels-Cm7__m1T.js";import"./index-DuIWmi4D.js";import"./ArrowRightStartOnRectangleIcon-C5SXaVic.js";import"./ArrowTopRightOnSquareIcon-Ckxu5vwN.js";import"./RocketLaunchIcon-Cg97E9Fb.js";import"./HomeIcon-BdJrXd2e.js";import"./UserIcon-LyJC13E2.js";import"./UsersIcon-BgQFsP7F.js";import"./UserGroupIcon-BLOMZMFj.js";import"./CommandLineIcon-Cd6VMgHQ.js";import"./ClipboardDocumentListIcon-BS5yXvdP.js";import"./ClipboardDocumentCheckIcon-CNnPmtk7.js";import"./CpuChipIcon-CuTYvC40.js";import"./ShieldCheckIcon-G-yjo0m6.js";import"./Cog6ToothIcon-CUj-fz1K.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
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
