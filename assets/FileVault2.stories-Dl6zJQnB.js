import{u as _}from"./storybookPolicyMigrationNav-c416wVVH.js";import{d as L,q as N,m as F,r as t,k as b}from"./iframe-e359xqcE.js";import{s as S}from"./index-CKnS-nTZ.js";import{s as D}from"./index-C8Trrx-R.js";import{s as A}from"./index-B6YXkmJR.js";import{s as V}from"./index-BLqIZ8v0.js";import{s as B}from"./index-BAE9PsyO.js";import{_ as $}from"./CheckboxWithLabel.vue-D6A-BAKo.js";import{_ as M}from"./CollapsiblePanel.vue-iXJaNNFX.js";import"./RichText.vue-DSFy4cWp.js";import{_ as R}from"./LinkText.vue-CAkZt6Z4.js";import{_ as O}from"./FormField.vue-X6cJp_-2.js";import{_ as E}from"./MessageNotification.vue-C0yM77Od.js";import{_ as K}from"./AppNavigation.vue-BVEgPgPp.js";import{_ as W}from"./PageHeader.vue-B-RRdH_3.js";import{_ as z}from"./DetailPageLayout.vue-B4xUUZ88.js";import{P as H}from"./PageSaveBar.vue-Bo-usfmq.js";import{_ as Y}from"./AdminTopBar-C1_aql48.js";import{p as q,m as j}from"./policyMigrationMenuItems-Cu0X-p_j.js";import{r as G}from"./PlayCircleIcon-BNy_9n_c.js";import{r as J}from"./InformationCircleIcon-DBsCv4X8.js";import{r as Q}from"./Cog6ToothIcon-B_W-iGDU.js";import{r as U}from"./ComputerDesktopIcon-CZ49U3bB.js";import{r as f}from"./ShieldCheckIcon-C8LDGAuf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B8Ht3GzB.js";import"./index-5GyuQi88.js";import"./index-DgftoVju.js";import"./index-BxhYpKxH.js";import"./index-ZhWAdK_X.js";import"./index-DGdP0FUD.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-Do95Hz07.js";import"./index-B2MD1nhU.js";import"./index-ss00ocVv.js";import"./index-C_QA9q8i.js";import"./index-CZJvM9KI.js";import"./ArrowRightIcon-LWeHu1Pb.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./CheckCircleIcon-CttTEG-u.js";import"./index-CLgHIt31.js";import"./index-SNTWOJlm.js";import"./FlagIcon-ebJhzkK-.js";import"./index-CVIMl1jo.js";import"./index-CgskNI-h.js";import"./index-WY88b_Bj.js";import"./index-8qCCvjmZ.js";import"./index-MDUUAlov.js";import"./ChevronRightIcon-atQJRe2P.js";import"./index-yC2g--ff.js";import"./index-DKwf0szZ.js";import"./index-Dqqj7jsW.js";import"./index-B4Kwt-uL.js";import"./Dropdown.vue-BCXCU-gF.js";import"./index-D72zYeEF.js";import"./EllipsisHorizontalIcon-CxnQmkwF.js";import"./BasePageLayout.vue-CIy2WbCv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-DGxftqyG.js";import"./PencilSquareIcon-TMd81OuA.js";import"./CheckIcon-CI0eXWFB.js";import"./index-Bn8GZArD.js";import"./AiAgentButton.vue-CPHfaCtk.js";import"./ArrowLeftIcon-Bj_NG_K1.js";import"./VaultIcon-DYzKEkxR.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";const y=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],a={policyName:"FileVault 2",policyNotes:"",showRecoveryKey:!1,doNotPromptAtLogout:!1,forceEnableInSetup:!1,bypassCount:"0"},X="Once the policy is successfully enabled for the system, a Recovery Key will be displayed for that respective System under System Details. Removing this policy will not disable FileVault 2 once enabled.",Z="A user will need to logout and log back in for the policy to take effect.",ee=L({name:"FileVault2Page",components:{AppNavigation:K,PageHeader:W,CollapsiblePanel:M,FormField:O,CheckboxWithLabel:$,LinkText:R,MessageNotification:E,DetailPageLayout:z,PageSaveBar:H,TopBar:Y,PvButton:S,PvTag:A,PvInputText:D,PvTextarea:B,PvDivider:V,ShieldCheckIcon:f,ComputerDesktopIcon:U,Cog6ToothIcon:Q,InformationCircleIcon:J,PlayCircleIcon:G},setup(){const{goBack:I,backButtonLabel:P}=_("/filevault-2"),d=t("details"),i=t(a.policyName),s=t(a.policyNotes),r=t(a.showRecoveryKey),n=t(a.doNotPromptAtLogout),p=t(a.forceEnableInSetup),c=t(a.bypassCount),e=t({...a}),u=t(!1),l=t(!1),v=b(()=>i.value!==e.value.policyName||s.value!==e.value.policyNotes||r.value!==e.value.showRecoveryKey||n.value!==e.value.doNotPromptAtLogout||p.value!==e.value.forceEnableInSetup||c.value!==e.value.bypassCount);N(v,o=>{o&&(l.value=!1)});const C=b(()=>{var o;return((o=y.find(k=>k.value===d.value))==null?void 0:o.label)??"Details"});function T(){i.value=e.value.policyName,s.value=e.value.policyNotes,r.value=e.value.showRecoveryKey,n.value=e.value.doNotPromptAtLogout,p.value=e.value.forceEnableInSetup,c.value=e.value.bypassCount,l.value=!1}async function w(){u.value=!0,await new Promise(o=>setTimeout(o,600)),e.value={policyName:i.value,policyNotes:s.value,showRecoveryKey:r.value,doNotPromptAtLogout:n.value,forceEnableInSetup:p.value,bypassCount:c.value},u.value=!1,l.value=!0,setTimeout(()=>{l.value=!1},2e3)}return{menuItems:j,profileMenuItems:q,detailTabs:y,activeTab:d,activeTabLabel:C,policyName:i,policyNotes:s,showRecoveryKey:r,doNotPromptAtLogout:n,forceEnableInSetup:p,bypassCount:c,POLICY_BEHAVIOR:X,POLICY_ACTIVATION:Z,isDirty:v,isSaving:u,showSavedConfirmation:l,handleDiscard:T,handleSave:w,goBack:I,backButtonLabel:P,shieldIcon:F(f)}},template:`
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
          title="FileVault 2"
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
          <DetailPageLayout
            v-if="activeTab === 'details'"
            class="w-full! h-full!"
            max-width="1440"
            :show-sidebar="true"
          >
            <div class="flex flex-col gap-md">
              <CollapsiblePanel header="macOS Device Policy">
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
                    <p class="text-body-md text-neutral-subtle m-0">
                      This policy allows you to enable and enforce FileVault. This policy works on
                      <LinkText
                        label="all JumpCloud supported operating systems"
                        href="#"
                        target="_blank"
                        :showIcon="false"
                        customClass="inline"
                      />.
                    </p>
                    <LinkText
                      href="#"
                      target="_blank"
                      :showIcon="false"
                      customClass="inline-flex items-center gap-xs"
                    >
                      <PlayCircleIcon class="size-4 shrink-0" />
                      Watch Video Tutorial
                    </LinkText>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Behavior</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_BEHAVIOR }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Activation</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_ACTIVATION }}</p>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="Settings">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <CheckboxWithLabel
                    v-model="showRecoveryKey"
                    inputId="show-recovery-key"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Show the FileVault Recovery Key to the user when enabled</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information"
                          v-tooltip.top="'When enabled, the recovery key is shown to the user after FileVault is turned on.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="doNotPromptAtLogout"
                    inputId="do-not-prompt-logout"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Do not prompt the user to enable FileVault at logout</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information"
                          v-tooltip.top="'Prevents the logout prompt that asks the user to enable FileVault.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="forceEnableInSetup"
                    inputId="force-enable-setup"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Force enable in setup assistant</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information"
                          v-tooltip.top="'Requires FileVault to be enabled during the macOS Setup Assistant.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <FormField
                    label="Number of times the user can bypass enabling FileVault"
                    label-tooltip="The number of times a user can defer enabling FileVault before it becomes required."
                  >
                    <template #default="{ inputId }">
                      <PvInputText
                        :id="inputId"
                        v-model="bypassCount"
                        class="w-20"
                      />
                    </template>
                  </FormField>
                </div>
              </CollapsiblePanel>
            </div>

            <template #sidebar>
              <MessageNotification
                severity="info"
                detail="JumpCloud MDM enrollment for macOS 11.0+"
              >
                <template #button>
                  <LinkText label="Learn more" href="#" target="_blank" />
                </template>
              </MessageNotification>
            </template>
          </DetailPageLayout>

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
  `}),wt={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/FileVault 2",component:ee,parameters:{layout:"fullscreen"}},m={};var h,g,x;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const kt=["FileVault2Page","Default"];export{m as Default,ee as FileVault2Page,kt as __namedExportsOrder,wt as default};
