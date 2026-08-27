import{u as k}from"./storybookPolicyMigrationNav-c416wVVH.js";import{d as O,r as i,q as L,m as R,k as v}from"./iframe-e359xqcE.js";import{s as F}from"./index-CKnS-nTZ.js";import{s as A}from"./index-C8Trrx-R.js";import{s as B}from"./index-CTBTSs98.js";import{s as K}from"./index-B6YXkmJR.js";import{s as $}from"./index-BLqIZ8v0.js";import{s as E}from"./index-BAE9PsyO.js";import{_ as W}from"./CollapsiblePanel.vue-iXJaNNFX.js";import"./RichText.vue-DSFy4cWp.js";import{_ as Y}from"./LinkText.vue-CAkZt6Z4.js";import{_ as M}from"./FormField.vue-X6cJp_-2.js";import{_ as H}from"./AppNavigation.vue-BVEgPgPp.js";import{_ as z}from"./PageHeader.vue-B-RRdH_3.js";import{_ as V}from"./ConfigPageLayout.vue-BIjfHLKw.js";import{P as j}from"./PageSaveBar.vue-Bo-usfmq.js";import{_ as q}from"./AdminTopBar-C1_aql48.js";import{p as G,m as Q}from"./policyMigrationMenuItems-Cu0X-p_j.js";import{r as U}from"./TrashIcon-D83dzVWN.js";import{r as J}from"./PlusIcon-BfUZNis0.js";import{r as X}from"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import{r as Z}from"./InformationCircleIcon-DBsCv4X8.js";import{r as ee}from"./Cog6ToothIcon-B_W-iGDU.js";import{r as te}from"./ComputerDesktopIcon-CZ49U3bB.js";import{r as f}from"./ShieldCheckIcon-C8LDGAuf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-B2MD1nhU.js";import"./index-DG2lsddg.js";import"./index-T5BskalJ.js";import"./index-SNTWOJlm.js";import"./index-D72zYeEF.js";import"./index-CgskNI-h.js";import"./index-WY88b_Bj.js";import"./index-C_QA9q8i.js";import"./index-ss00ocVv.js";import"./index-CZJvM9KI.js";import"./ArrowRightIcon-LWeHu1Pb.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./index-CVIMl1jo.js";import"./index-8qCCvjmZ.js";import"./index-MDUUAlov.js";import"./ChevronRightIcon-atQJRe2P.js";import"./index-yC2g--ff.js";import"./index-DKwf0szZ.js";import"./index-Dqqj7jsW.js";import"./index-B4Kwt-uL.js";import"./Dropdown.vue-BCXCU-gF.js";import"./EllipsisHorizontalIcon-CxnQmkwF.js";import"./BasePageLayout.vue-CIy2WbCv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-DGxftqyG.js";import"./PencilSquareIcon-TMd81OuA.js";import"./CheckIcon-CI0eXWFB.js";import"./index-Bn8GZArD.js";import"./AiAgentButton.vue-CPHfaCtk.js";import"./ArrowLeftIcon-Bj_NG_K1.js";import"./FlagIcon-ebJhzkK-.js";import"./VaultIcon-DYzKEkxR.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";const ae=[{label:"String",value:"String"},{label:"DWORD",value:"DWORD"},{label:"QWORD",value:"QWORD"},{label:"Binary",value:"Binary"},{label:"Multi-String",value:"Multi-String"},{label:"Expandable String",value:"Expandable String"}],y=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],g="Advanced: Custom Registry Keys-test",b="",h=[{id:1,location:"",valueName:"",type:"DWORD",data:""}],ie="Custom policies allow you to configure registry keys on Windows systems. Supported on Windows 10, Windows 11, and Windows Server 2016, 2019, 2022, and 2025.",oe="Registry key changes are applied when the policy is bound to a device or device group. If a registry key already exists, its value is overwritten. Test thoroughly before applying to production systems.",le="After you save the policy you must restart all systems where it is applied before it takes effect.",se="This is an advanced feature. Using this incorrectly can cause poor system performance, so we recommend testing thoroughly before applying to a large number of systems. See our ",re=O({name:"PolicyDetailsTabPage",components:{AppNavigation:H,PageHeader:z,CollapsiblePanel:W,FormField:M,LinkText:Y,ConfigPageLayout:V,PageSaveBar:j,TopBar:q,PvButton:F,PvTag:K,PvInputText:A,PvTextarea:E,PvSelect:B,PvDivider:$,ShieldCheckIcon:f,ComputerDesktopIcon:te,Cog6ToothIcon:ee,InformationCircleIcon:Z,ArrowTopRightOnSquareIcon:X,PlusIcon:J,TrashIcon:U},setup(){const{goBack:T,backButtonLabel:w}=k("/policy-details-tab"),m=i("details"),r=i(g),n=i(b),t=i(h.map(e=>({...e}))),a=i({policyName:g,policyNotes:b,registryKeys:h.map(e=>({...e}))}),c=i(!1),o=i(!1);let d=2;const u=v(()=>r.value!==a.value.policyName||n.value!==a.value.policyNotes||t.value.length!==a.value.registryKeys.length?!0:t.value.some((e,l)=>{const s=a.value.registryKeys[l];return s?e.location!==s.location||e.valueName!==s.valueName||e.type!==s.type||e.data!==s.data:!0}));L(u,e=>{e&&(o.value=!1)});const C=v(()=>{var e;return((e=y.find(l=>l.value===m.value))==null?void 0:e.label)??"Details"});function _(){t.value.push({id:d++,location:"",valueName:"",type:"DWORD",data:""})}function D(e){if(t.value.length<=1){t.value=[{id:d++,location:"",valueName:"",type:"DWORD",data:""}];return}t.value=t.value.filter(l=>l.id!==e)}function N(){r.value=a.value.policyName,n.value=a.value.policyNotes,t.value=a.value.registryKeys.map(e=>({...e})),o.value=!1}async function S(){c.value=!0,await new Promise(e=>setTimeout(e,600)),a.value={policyName:r.value,policyNotes:n.value,registryKeys:t.value.map(e=>({...e}))},c.value=!1,o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return{menuItems:Q,profileMenuItems:G,detailTabs:y,activeTab:m,activeTabLabel:C,policyName:r,policyNotes:n,registryKeys:t,registryTypeOptions:ae,POLICY_DESCRIPTION:ie,POLICY_BEHAVIOR:oe,POLICY_ACTIVATION:le,PRO_TIP_DETAIL:se,isDirty:u,isSaving:c,showSavedConfirmation:o,addRegistryKey:_,removeRegistryKey:D,handleDiscard:N,handleSave:S,goBack:T,backButtonLabel:w,shieldIcon:R(f)}},template:`
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
