import{usePolicyMigrationBackNavigation as k}from"./storybookPolicyMigrationNav-D9cqGXjL.js";import{d as O,r as i,q as L,m as R,k as v}from"./iframe-BFKWv3KJ.js";import{s as F}from"./index-CtfEZ-mH.js";import{s as A}from"./index-2rr2RyNS.js";import{s as B}from"./index-CuXoLfeA.js";import{s as K}from"./index-L5huya0i.js";import{s as $}from"./index-TlXkjPb8.js";import{s as E}from"./index-Mg-B1dgW.js";import{_ as W}from"./CollapsiblePanel.vue-DkCKI-zZ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as Y}from"./LinkText.vue-cWXQLUic.js";import{_ as M}from"./FormField.vue-CsyFfyrv.js";import{_ as H}from"./AppNavigation.vue-DOzZfcBr.js";import{_ as z}from"./PageHeader.vue-CGtQuNfk.js";import{_ as V}from"./ConfigPageLayout.vue-CDf30mXH.js";import{P as j}from"./PageSaveBar.vue-ztdWACPr.js";import{_ as q}from"./AdminTopBar-Cl9hHrP-.js";import{p as G,m as Q}from"./policyMigrationMenuItems-B2WMhJ_B.js";import{r as U}from"./TrashIcon-DjM9Jqnc.js";import{r as J}from"./PlusIcon-BX2LLMgO.js";import{r as X}from"./ArrowTopRightOnSquareIcon-P9gMEZmv.js";import{r as Z}from"./InformationCircleIcon-3yLrI0TY.js";import{r as ee}from"./Cog6ToothIcon-CLTd3td9.js";import{r as te}from"./ComputerDesktopIcon-CG6YIzF7.js";import{r as f}from"./ShieldCheckIcon-CQlKNWxZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CaoDn_b_.js";import"./VaultIcon-DVSS9QF0.js";import"./ArrowRightStartOnRectangleIcon-B1SaEZKF.js";import"./RocketLaunchIcon-CoLGueqR.js";import"./HomeIcon-TceTBPbm.js";import"./UserIcon-CrDAGwP1.js";import"./UsersIcon-BlDUqua-.js";import"./UserGroupIcon-DHcrWHdF.js";import"./CommandLineIcon-C_kbsQBp.js";import"./ClipboardDocumentListIcon--U-psXCG.js";import"./ClipboardDocumentCheckIcon-D4o5FMXS.js";import"./CpuChipIcon-CERMgrl8.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-BXYT2gRT.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-2n8eVSrk.js";import"./index-D77ELRyA.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-CCIVz5jE.js";import"./index-DdAbza1U.js";import"./index-Dn4n97fu.js";import"./ArrowRightIcon-7cEC43zy.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./index-F_qZZ5l1.js";import"./index-DICFt-SZ.js";import"./index-EcMNudkA.js";import"./ChevronRightIcon-DUJGUktX.js";import"./index-UPYa1M-T.js";import"./index-BOlU20yb.js";import"./index-bbn6QzYu.js";import"./index-CFp6THYW.js";import"./Dropdown.vue-Cz9UQQvj.js";import"./EllipsisHorizontalIcon-De_59ltg.js";import"./BasePageLayout.vue-DTEUtrED.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-BRiKvAwH.js";import"./PencilSquareIcon-BXVF9XnI.js";import"./CheckIcon-DKMvEF6-.js";import"./AiAgentButton.vue-D0wxz5Cd.js";import"./ArrowLeftIcon-BgI2ESLC.js";import"./FlagIcon-DzsTOg3n.js";const ae=[{label:"String",value:"String"},{label:"DWORD",value:"DWORD"},{label:"QWORD",value:"QWORD"},{label:"Binary",value:"Binary"},{label:"Multi-String",value:"Multi-String"},{label:"Expandable String",value:"Expandable String"}],y=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],g="Advanced: Custom Registry Keys-test",b="",h=[{id:1,location:"",valueName:"",type:"DWORD",data:""}],ie="Custom policies allow you to configure registry keys on Windows systems. Supported on Windows 10, Windows 11, and Windows Server 2016, 2019, 2022, and 2025.",oe="Registry key changes are applied when the policy is bound to a device or device group. If a registry key already exists, its value is overwritten. Test thoroughly before applying to production systems.",le="After you save the policy you must restart all systems where it is applied before it takes effect.",se="This is an advanced feature. Using this incorrectly can cause poor system performance, so we recommend testing thoroughly before applying to a large number of systems. See our ",re=O({name:"PolicyDetailsTabPage",components:{AppNavigation:H,PageHeader:z,CollapsiblePanel:W,FormField:M,LinkText:Y,ConfigPageLayout:V,PageSaveBar:j,TopBar:q,PvButton:F,PvTag:K,PvInputText:A,PvTextarea:E,PvSelect:B,PvDivider:$,ShieldCheckIcon:f,ComputerDesktopIcon:te,Cog6ToothIcon:ee,InformationCircleIcon:Z,ArrowTopRightOnSquareIcon:X,PlusIcon:J,TrashIcon:U},setup(){const{goBack:T,backButtonLabel:w}=k("/policy-details-tab"),m=i("details"),r=i(g),n=i(b),t=i(h.map(e=>({...e}))),a=i({policyName:g,policyNotes:b,registryKeys:h.map(e=>({...e}))}),c=i(!1),o=i(!1);let d=2;const u=v(()=>r.value!==a.value.policyName||n.value!==a.value.policyNotes||t.value.length!==a.value.registryKeys.length?!0:t.value.some((e,l)=>{const s=a.value.registryKeys[l];return s?e.location!==s.location||e.valueName!==s.valueName||e.type!==s.type||e.data!==s.data:!0}));L(u,e=>{e&&(o.value=!1)});const C=v(()=>{var e;return((e=y.find(l=>l.value===m.value))==null?void 0:e.label)??"Details"});function _(){t.value.push({id:d++,location:"",valueName:"",type:"DWORD",data:""})}function D(e){if(t.value.length<=1){t.value=[{id:d++,location:"",valueName:"",type:"DWORD",data:""}];return}t.value=t.value.filter(l=>l.id!==e)}function N(){r.value=a.value.policyName,n.value=a.value.policyNotes,t.value=a.value.registryKeys.map(e=>({...e})),o.value=!1}async function S(){c.value=!0,await new Promise(e=>setTimeout(e,600)),a.value={policyName:r.value,policyNotes:n.value,registryKeys:t.value.map(e=>({...e}))},c.value=!1,o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return{menuItems:Q,profileMenuItems:G,detailTabs:y,activeTab:m,activeTabLabel:C,policyName:r,policyNotes:n,registryKeys:t,registryTypeOptions:ae,POLICY_DESCRIPTION:ie,POLICY_BEHAVIOR:oe,POLICY_ACTIVATION:le,PRO_TIP_DETAIL:se,isDirty:u,isSaving:c,showSavedConfirmation:o,addRegistryKey:_,removeRegistryKey:D,handleDiscard:N,handleSave:S,goBack:T,backButtonLabel:w,shieldIcon:R(f)}},template:`
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="device management"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <TopBar
          showBackButton
          :backButtonLabel="backButtonLabel"
          @back="goBack"
        />

        <PageHeader
          title="Advanced: Custom Registry Keys-test"
          :icon="shieldIcon"
          :tabs="detailTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag value="Device" severity="accent-purple">
                <template #icon>
                  <ComputerDesktopIcon class="w-3.5 h-3.5" />
                </template>
              </PvTag>
              <PvDivider layout="vertical" />
              <span class="text-body-md text-neutral-subtle">
                Configure the policy below, then select the target groups or devices to apply it.
              </span>
            </div>
          </template>
        </PageHeader>

        <div class="flex-1 overflow-auto bg-neutral-surface min-h-0">
          <ConfigPageLayout
            v-if="activeTab === 'details'"
            class="w-full! h-full!"
            maxWidth="1024"
          >
            <div class="flex flex-col gap-md">
              <!-- Windows Device Policy -->
              <CollapsiblePanel header="Windows Device Policy">
                <template #titleicon="iconProps">
                  <ShieldCheckIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <FormField label="Policy Name">
                    <template #default="{ inputId }">
                      <PvInputText
                        :id="inputId"
                        v-model="policyName"
                        class="w-full"
                      />
                    </template>
                  </FormField>

                  <FormField label="Policy Notes">
                    <template #default="{ inputId }">
                      <PvTextarea
                        :id="inputId"
                        v-model="policyNotes"
                        rows="3"
                        autoResize
                        class="w-full"
                        placeholder="Add notes about this policy"
                      />
                    </template>
                  </FormField>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Description</h4>
                    <p class="text-body-md text-neutral-subtle">{{ POLICY_DESCRIPTION }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Behavior</h4>
                    <p class="text-body-md text-neutral-subtle">{{ POLICY_BEHAVIOR }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Activation</h4>
                    <p class="text-body-md text-neutral-subtle">{{ POLICY_ACTIVATION }}</p>
                  </div>
                </div>
              </CollapsiblePanel>

              <!-- Settings -->
              <CollapsiblePanel header="Settings">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <div class="flex grow items-start content-start rounded gap-2 p-2 w-full bg-notification-info shadow-message-info text-notification-info-content">
                    <span class="flex h-6 items-center justify-center shrink-0">
                      <InformationCircleIcon class="w-5 h-5 text-notification-info-content" />
                    </span>
                    <div class="flex grow flex-col py-0.5 min-w-0 gap-0.5 min-h-6 justify-center">
                      <span class="font-bold">Pro Tip</span>
                      <p class="text-body-sm m-0">
                        {{ PRO_TIP_DETAIL }}<LinkText
                          href="#"
                          target="_blank"
                          :showIcon="false"
                          customClass="inline-flex items-center gap-xs align-baseline"
                        >
                          KB article
                          <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                        </LinkText>
                      </p>
                    </div>
                  </div>

                  <div
                    v-for="row in registryKeys"
                    :key="row.id"
                    class="flex items-start gap-md"
                  >
                    <FormField
                      label="Registry Key Location"
                      label-tooltip="Enter the full registry path, for example HKEY_LOCAL_MACHINE\\SOFTWARE\\Company\\App."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="row.location"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Value Name"
                      label-tooltip="The name of the registry value to create or update."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="row.valueName"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Type"
                      label-tooltip="Select the registry value type."
                      class="w-40 shrink-0"
                    >
                      <template #default="{ inputId }">
                        <PvSelect
                          :id="inputId"
                          v-model="row.type"
                          :options="registryTypeOptions"
                          optionLabel="label"
                          optionValue="value"
                          class="w-full!"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Data"
                      label-tooltip="The data to write for this registry value."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvTextarea
                          :id="inputId"
                          v-model="row.data"
                          :rows="2"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <div class="pt-7 shrink-0">
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Delete registry key"
                        @click="removeRegistryKey(row.id)"
                      >
                        <template #icon>
                          <TrashIcon class="size-4" />
                        </template>
                      </PvButton>
                    </div>
                  </div>

                  <div>
                    <PvButton
                      label="Add Registry Key"
                      severity="secondary"
                      variant="outlined"
                      size="small"
                      @click="addRegistryKey"
                    >
                      <template #icon>
                        <PlusIcon class="size-4" />
                      </template>
                    </PvButton>
                  </div>
                </div>
              </CollapsiblePanel>
            </div>
          </ConfigPageLayout>

          <div
            v-else
            class="flex flex-col items-center justify-center h-full gap-sm text-neutral-subtle p-md"
          >
            <span class="text-body-md">{{ activeTabLabel }}</span>
            <span class="text-body-sm">Binding content is not included in this Details tab exploration.</span>
          </div>
        </div>

        <PageSaveBar
          :visible="isDirty"
          :saving="isSaving"
          :saved="showSavedConfirmation"
          message="You have unsaved changes"
          saveLabel="Save Policy"
          discardLabel="Cancel"
          @save="handleSave"
          @discard="handleDiscard"
        />
      </div>
    </div>
  `}),Lt={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Policy Details Tab",component:re,parameters:{layout:"fullscreen"}},p={};var I,P,x;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(x=(P=p.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const Rt=["PolicyDetailsTabPage","Default"];export{p as Default,re as PolicyDetailsTabPage,Rt as __namedExportsOrder,Lt as default};
