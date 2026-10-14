import{d,r as t,a0 as u}from"./iframe-BF79XtSp.js";import{_ as m}from"./Agent0ServersView-DR_koa49.js";import{s as e,q as f}from"./mockData-DCPRTQhH.js";import{c as h}from"./useProfileDetailBindings-DFq0WTQO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LSIY3ybW.js";import"./index-Dtk_BLuX.js";import"./index-dcWUga6b.js";import"./index-Du18TKou.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-xyLKPl8B.js";import"./index-ZhWAdK_X.js";import"./index-BVIEBy36.js";import"./index-ADEA_n6J.js";import"./index-PuebpjLD.js";import"./index-K7HfYiQs.js";import"./RichText.vue-CqGWfsH6.js";import"./DataTable.vue-BHtrcVVc.js";import"./Paginator.vue-Dy2cGaqu.js";import"./index-DMx2X42p.js";import"./index-CR4bzIFl.js";import"./index-DIEiO-G_.js";import"./index-BCK9IpMv.js";import"./index-lST1gP85.js";import"./index-BkZv6EbR.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-bqWkeg_n.js";import"./index-C4C8uF8-.js";import"./index-dbOlY_KS.js";import"./ChevronRightIcon-Ds2oc56S.js";import"./index-DccRakCb.js";import"./index-P-Yy9vDb.js";import"./index-NvGJIH0G.js";import"./index-BKhPoeTw.js";import"./index-DkPTkS_b.js";import"./index-Ln8ICEkF.js";import"./useDataTableSize-CTpRUYeY.js";import"./DataTableToolbar.vue-CXKDBfw_.js";import"./FilterChip.vue-BEAOtRH2.js";import"./index-D6ZVkPAC.js";import"./index-D43yMZyM.js";import"./index-DckzHriz.js";import"./SaveViewPanel.vue-mC0sem9y.js";import"./CheckboxWithLabel.vue-BXWhMwWQ.js";import"./ColumnConfigDropdown.vue-CH6WIYua.js";import"./index-DHPhN9oC.js";import"./LinkText.vue-C1RSiwbX.js";import"./ArrowRightIcon-BO2KgFRi.js";import"./DropdownSearch.vue-DZQ_8jKi.js";import"./useContainer-CrNDtG4W.js";import"./EyeIcon-DVodujmo.js";import"./FunnelIcon-BvP__tww.js";import"./FunnelIcon-CZhOYWoP.js";import"./Dropdown.vue-Csy1Li7S.js";import"./SavedViewsDropdown.vue-CtH4QF7P.js";import"./StarIcon-BU5rQd7q.js";import"./PencilIcon-2BKw63Xz.js";import"./TrashIcon-C2JPFfO6.js";import"./ExportDropdown.vue-DQI6ViPu.js";import"./index-DQOir5uS.js";import"./ArrowDownTrayIcon-DZq-TuMT.js";import"./PlusIcon-B0Ifsxjs.js";import"./index-C_hXlnlQ.js";import"./ArrowPathIcon-DSpVmERO.js";import"./ListPageLayout.vue-CcKGpmva.js";import"./BasePageLayout.vue-DaSm17Gu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-mj-WlYOT.js";import"./FormField.vue-C69YWs2P.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";import"./ServerDeleteConfirmDialog-DKUEaAgc.js";import"./SeverityDialog.vue-wJEFWhGm.js";import"./MessageNotification.vue-DrjRSHb0.js";import"./index-DHrjVwem.js";import"./FlagIcon-Bi-xPCPe.js";import"./DataTableCellText.vue--n6dloHJ.js";import"./DataTableCellLink.vue-D4Pd0MA6.js";import"./DataTableCellStatus.vue-C6HcYjwX.js";import"./DataTableCellAction.vue-DfwjMCYP.js";import"./EllipsisHorizontalIcon-BlcnArUO.js";import"./PencilSquareIcon-BuhRV4E0.js";import"./formatListedDateTime-DrwQiUrl.js";import"./allowedAiClientOriginKindLabels-BT_IAVu_.js";import"./index-vX2hHYrt.js";import"./ArrowRightStartOnRectangleIcon-m3mkNkcV.js";import"./ArrowTopRightOnSquareIcon-Bb4rBF4d.js";import"./RocketLaunchIcon-BqMZlamx.js";import"./HomeIcon-CRuA8H2X.js";import"./UserIcon-KpILDYI2.js";import"./UsersIcon-mPqKsBT7.js";import"./UserGroupIcon-odcgopw8.js";import"./CommandLineIcon-D7zOx_l8.js";import"./ClipboardDocumentListIcon-C1vC7p4N.js";import"./ClipboardDocumentCheckIcon-Hd-7WFS2.js";import"./CpuChipIcon-C8H0NY6t.js";import"./ShieldCheckIcon-xpQZCNU8.js";import"./Cog6ToothIcon-xFudfeaO.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
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
