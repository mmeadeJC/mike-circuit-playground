import{d,r as t,a0 as u}from"./iframe-wHZiWscM.js";import{_ as m}from"./Agent0ServersView-BoCSX0x8.js";import{s as e,q as f}from"./mockData-Kk33s5oK.js";import{c as h}from"./useProfileDetailBindings-D8k_gkGL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-_1pOB8MI.js";import"./index-DG2sTEJu.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-sD1-d5gW.js";import"./index-DuolNdSU.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-DSxjRmh5.js";import"./index-Box4ManB.js";import"./index-0sOqJRIv.js";import"./RichText.vue-CHGMbC98.js";import"./DataTable.vue-DmbfuVh_.js";import"./Paginator.vue-CcRzGc69.js";import"./index-B52hguGd.js";import"./index-BsadxdHP.js";import"./index-CK8YOc-s.js";import"./index-OomjoOn0.js";import"./index-B9GWGLe7.js";import"./index-BZ44v4AP.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-B0f83xA1.js";import"./index-NL-pVcRR.js";import"./index-DBRsCQYT.js";import"./ChevronRightIcon-CCd9mxHV.js";import"./index-BX58BE5p.js";import"./index-CfbwjWnr.js";import"./index-Bx3ApnQM.js";import"./index-Btj4TG0i.js";import"./index-Cho0WR5H.js";import"./index-BsNWgMfo.js";import"./useDataTableSize-GGD2JHfG.js";import"./DataTableToolbar.vue-BhLGIGSm.js";import"./FilterChip.vue-BuyWvAI-.js";import"./index-cu68_uPv.js";import"./index-CDKqnkXt.js";import"./index-BUW6mAnI.js";import"./SaveViewPanel.vue-BSEPrvYC.js";import"./CheckboxWithLabel.vue-Dt-Ksd6A.js";import"./ColumnConfigDropdown.vue-CcDJZGBU.js";import"./index-Bu_OB4cS.js";import"./LinkText.vue-CZtYLLzG.js";import"./ArrowRightIcon-BHnqKJRg.js";import"./DropdownSearch.vue-C35jZCVV.js";import"./useContainer-Bxg-bmhf.js";import"./EyeIcon-BcUj4a6b.js";import"./FunnelIcon-CmBG5ncV.js";import"./FunnelIcon-BdHbE0IY.js";import"./Dropdown.vue-BSd8d_yA.js";import"./SavedViewsDropdown.vue-BeF5vpON.js";import"./StarIcon-DK6Nr4X7.js";import"./PencilIcon-wBp-c_x7.js";import"./TrashIcon-UFJmnL45.js";import"./ExportDropdown.vue-DBKeRelR.js";import"./index-DDAh2LOB.js";import"./ArrowDownTrayIcon-Akc_5Wek.js";import"./PlusIcon-DGBp3WlK.js";import"./index-BUFlMVon.js";import"./ArrowPathIcon-bipDiGZD.js";import"./ListPageLayout.vue-7CWw602M.js";import"./BasePageLayout.vue-BxTNDttc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DvptmZO3.js";import"./FormField.vue-Di73I2_d.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./InformationCircleIcon-DZ4ah18T.js";import"./ServerDeleteConfirmDialog-Ctl8By7H.js";import"./SeverityDialog.vue-DOZdWb7d.js";import"./MessageNotification.vue-Cb774PtG.js";import"./index-2F9klpTw.js";import"./FlagIcon-DIzDNC3I.js";import"./DataTableCellText.vue-CtY5epkb.js";import"./DataTableCellLink.vue-DCTifLuN.js";import"./DataTableCellStatus.vue-DQo5LaW9.js";import"./DataTableCellAction.vue-B2eJafMR.js";import"./EllipsisHorizontalIcon-BHjLtj66.js";import"./PencilSquareIcon-BGXvyPGw.js";import"./formatListedDateTime-DP50yT1B.js";import"./allowedAiClientOriginKindLabels-DQwjsRbr.js";import"./index-Andb7bwO.js";import"./ArrowRightStartOnRectangleIcon-CLdR-YKA.js";import"./ArrowTopRightOnSquareIcon-Di75X2M6.js";import"./RocketLaunchIcon-CNdx9WZl.js";import"./HomeIcon-5r_QbQOS.js";import"./UserIcon-BeF8Hyvt.js";import"./UsersIcon-DnG2W9uG.js";import"./UserGroupIcon-BLdtu9b8.js";import"./CommandLineIcon-8W_LRzjZ.js";import"./ClipboardDocumentListIcon-zSNh2cWZ.js";import"./ClipboardDocumentCheckIcon-B9O-4nOP.js";import"./CpuChipIcon-D7soRAGz.js";import"./ShieldCheckIcon-XJT-0kMA.js";import"./Cog6ToothIcon-CpmE-KkZ.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
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
