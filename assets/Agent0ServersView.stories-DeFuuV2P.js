import{d,r as t,a0 as u}from"./iframe-C6YxvgI9.js";import{_ as m}from"./Agent0ServersView-C4h7i9FG.js";import{s as e,q as f}from"./mockData-BEYIwFVK.js";import{c as h}from"./useProfileDetailBindings-CD7lUmLf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CJZ03RY2.js";import"./index-BTBx138D.js";import"./index-BnKDY8uA.js";import"./index-AqntUfTj.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-DhNdrOGc.js";import"./index-ZhWAdK_X.js";import"./index-BxytmV1x.js";import"./index-DLF1yM0N.js";import"./index-eKE_C28L.js";import"./index-DqUJJtw3.js";import"./RichText.vue-h6zLaVtH.js";import"./DataTable.vue-Cyt8z7Rc.js";import"./Paginator.vue-CUj4V86y.js";import"./index-Ch3Q-vZV.js";import"./index-DT3_wyj-.js";import"./index-BimTu2-D.js";import"./index-ZSh15SJz.js";import"./index-B8A-AHQI.js";import"./index-Dp_YoHvc.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-1UUbJVrK.js";import"./index-D_pfiKOk.js";import"./index-B3rEIbXx.js";import"./ChevronRightIcon-DYx_DqJa.js";import"./index-Ct0lVA_L.js";import"./index-B91snyJO.js";import"./index-WUqO2RC_.js";import"./index-CvIohtEI.js";import"./index-CPIDmXOH.js";import"./index-DpARX3gF.js";import"./useDataTableSize-DQ6_HCRc.js";import"./DataTableToolbar.vue-BQYu5ZMp.js";import"./FilterChip.vue-eRobgtcW.js";import"./index-CZUO3voq.js";import"./index-VIQgHCAc.js";import"./index-DJBHbLMX.js";import"./SaveViewPanel.vue-DHwNgbgC.js";import"./CheckboxWithLabel.vue-CdCpAZFa.js";import"./ColumnConfigDropdown.vue-D_1KAjmw.js";import"./index-BZi2DMME.js";import"./LinkText.vue-2aQeA1S0.js";import"./ArrowRightIcon-BjhmG1dS.js";import"./DropdownSearch.vue-DJziCYXk.js";import"./useContainer-w-xfgTus.js";import"./EyeIcon-IM-N29tT.js";import"./FunnelIcon-BrffPYtQ.js";import"./FunnelIcon-B88oviph.js";import"./Dropdown.vue-DTfK3dWE.js";import"./SavedViewsDropdown.vue-D7Kg98oI.js";import"./StarIcon-qCP1Yig1.js";import"./PencilIcon-CBsplorN.js";import"./TrashIcon-CA9tPlCX.js";import"./ExportDropdown.vue-CtLgruoA.js";import"./index-D2drqcEo.js";import"./ArrowDownTrayIcon-BboR5BhL.js";import"./PlusIcon--Yp9nAnL.js";import"./index-jrOAnztS.js";import"./ArrowPathIcon-BMz1chbS.js";import"./ListPageLayout.vue--ZOEzS4Z.js";import"./BasePageLayout.vue-BPB1ZTDf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DUYu4GBk.js";import"./FormField.vue-BTAWN9Np.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./InformationCircleIcon-BY7njxzn.js";import"./ServerDeleteConfirmDialog-BP9kRNmL.js";import"./SeverityDialog.vue-CHIFdcky.js";import"./MessageNotification.vue-BaGQb2DK.js";import"./index-rF62C8m_.js";import"./FlagIcon-FVNvSbUv.js";import"./DataTableCellText.vue-DAizk2a9.js";import"./DataTableCellLink.vue-B_3CE8op.js";import"./DataTableCellStatus.vue-DTTucrUv.js";import"./DataTableCellAction.vue-C2fSFDqz.js";import"./EllipsisHorizontalIcon-BY6Srncl.js";import"./PencilSquareIcon-a9Apd0g5.js";import"./formatListedDateTime-Dt7S-xgo.js";import"./allowedAiClientOriginKindLabels-B6Jfr3AU.js";import"./index-C24-u6em.js";import"./ArrowRightStartOnRectangleIcon-DKKidjNO.js";import"./ArrowTopRightOnSquareIcon-Cgq2sJub.js";import"./RocketLaunchIcon-6D8sm1LH.js";import"./HomeIcon-C13KMEnf.js";import"./UserIcon-4wtVhT1W.js";import"./UsersIcon-C5hMjpAO.js";import"./UserGroupIcon-BvSX4X8P.js";import"./CommandLineIcon-COGtHxUL.js";import"./ClipboardDocumentListIcon-lODL2qZu.js";import"./ClipboardDocumentCheckIcon-BTD2-XPO.js";import"./CpuChipIcon-C8YSMOmc.js";import"./ShieldCheckIcon-cVyPPREN.js";import"./Cog6ToothIcon-DmdqmVoL.js";const cr={title:"AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server",component:m,parameters:{layout:"fullscreen"}},r={name:"List",render:()=>d({components:{Agent0ServersView:m},setup(){const p=t([]),a=t(e[0]),n=t(!1),l=u({targetId:e[0].slug,name:e[0].name,url:e[0].url,authStyle:e[0].connectionType,authConfig:e[0].authConfig}),v=h(e);function c(S){console.info("[Story] delete-server",S)}return{selectedServers:p,selectedServer:a,showServerDialog:n,serverForm:l,authStyleOptions:f,onDeleteServer:c,...v}},template:`
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
