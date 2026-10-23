import{d,r as t,a0 as u}from"./iframe-CrzTiCu6.js";import{_ as m}from"./Agent0ServersView-BSxz79oU.js";import{s as e,q as f}from"./mockData-C1zsvOf2.js";import{c as h}from"./useProfileDetailBindings-BoQHknTT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CXMkhyA-.js";import"./index-DHkFNkeW.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-BaGPKY7N.js";import"./index-Bli4s4Lb.js";import"./index-DUgv6TgD.js";import"./RichText.vue-Bo-7vQsj.js";import"./DataTable.vue-CQiZ9-Bt.js";import"./Paginator.vue-AbHFmpig.js";import"./index-Cp7GERer.js";import"./index-B9HYPvme.js";import"./index-BAK6AhQo.js";import"./index-DRWkJ3r7.js";import"./index-B-mFHERX.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-ukZ37hHN.js";import"./index-BRT9CP7z.js";import"./index-B6P6vZ8T.js";import"./ChevronRightIcon-BtziqKKH.js";import"./index-CJtZNPwL.js";import"./index-B5AAKPzU.js";import"./index-DBMnBcxB.js";import"./index-BwTMqirk.js";import"./index-Dq5aZyU5.js";import"./index-IX3fe5I4.js";import"./useDataTableSize-KUQE_ZpM.js";import"./DataTableToolbar.vue-De4PigJx.js";import"./FilterChip.vue-DzkAtwDL.js";import"./index-3NCE7FTh.js";import"./index-CJ65Gie5.js";import"./index-DQmrvgOu.js";import"./SaveViewPanel.vue-CT093yRW.js";import"./CheckboxWithLabel.vue-BCoIi1Rw.js";import"./ColumnConfigDropdown.vue-DIOBmyAl.js";import"./index-CdmNXZp5.js";import"./LinkText.vue-DffDQTJD.js";import"./ArrowRightIcon-BXae0GnV.js";import"./DropdownSearch.vue-DhjA7urJ.js";import"./useContainer-V_XjkKmd.js";import"./EyeIcon-CR4Kvmha.js";import"./FunnelIcon-Dv4pl4l7.js";import"./FunnelIcon-DdFOZms1.js";import"./Dropdown.vue-B3uoPsDo.js";import"./SavedViewsDropdown.vue-PX9Qdnj8.js";import"./StarIcon-C8GBQttC.js";import"./PencilIcon-D-BT-yjF.js";import"./TrashIcon-FaxNGpYS.js";import"./ExportDropdown.vue-C7xMtUr7.js";import"./index-Cnf3VQH7.js";import"./ArrowDownTrayIcon-Cc30gtJU.js";import"./PlusIcon-D2izwpUR.js";import"./index-DiksCyp3.js";import"./ArrowPathIcon-DRE--ueV.js";import"./ListPageLayout.vue-B1hlnzxN.js";import"./BasePageLayout.vue-DIEW9flY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-OmJKRl9c.js";import"./FormField.vue-CTr1UxJM.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./InformationCircleIcon-BV6Xhrvp.js";import"./ServerDeleteConfirmDialog-DWlkP7lT.js";import"./SeverityDialog.vue-DAxLSjJw.js";import"./MessageNotification.vue-D2EvCuUd.js";import"./index-DB_TaPch.js";import"./FlagIcon-DgAIV7Qg.js";import"./DataTableCellText.vue-rWBuNzMD.js";import"./DataTableCellLink.vue-8rYsVPn_.js";import"./DataTableCellStatus.vue-BpGZyrOE.js";import"./DataTableCellAction.vue-BdwJcGk_.js";import"./EllipsisHorizontalIcon-XgfY8G75.js";import"./PencilSquareIcon-CPPagcZ0.js";import"./formatListedDateTime-BBq13wXG.js";import"./allowedAiClientOriginKindLabels-DhjafCXw.js";import"./index-CjqWYhin.js";import"./ArrowRightStartOnRectangleIcon-CBJnXu54.js";import"./ArrowTopRightOnSquareIcon-DS4hPvi9.js";import"./RocketLaunchIcon-CAzmE-6h.js";import"./HomeIcon-BQPM_8Qu.js";import"./UserIcon-Bri6dvnd.js";import"./UsersIcon-DqHPfoZY.js";import"./UserGroupIcon-B6yu2ODb.js";import"./CommandLineIcon-vFXJRXVY.js";import"./ClipboardDocumentListIcon-yzE7qRAt.js";import"./ClipboardDocumentCheckIcon-CDO3bo_W.js";import"./CpuChipIcon-Df3nujkA.js";import"./ShieldCheckIcon-CwbvLCk-.js";import"./Cog6ToothIcon-BNOeg4eV.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
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
