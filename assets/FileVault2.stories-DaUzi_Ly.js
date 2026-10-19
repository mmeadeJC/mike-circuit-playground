import{usePolicyMigrationBackNavigation as _}from"./storybookPolicyMigrationNav-B4wHo3jn.js";import{d as L,q as N,m as F,r as t,k as b}from"./iframe-CJNlUSJO.js";import{s as S}from"./index-CzaTbvQ5.js";import{s as D}from"./index-DqMC5tMH.js";import{s as A}from"./index-G7cLCde7.js";import{s as V}from"./index-87h8nido.js";import{s as B}from"./index-Dv8f6L-g.js";import{_ as $}from"./CheckboxWithLabel.vue-B3I6fX3T.js";import{_ as M}from"./CollapsiblePanel.vue-D5yOAVdx.js";import"./RichText.vue-CLPxRa2P.js";import{_ as R}from"./LinkText.vue-DQgZAyU0.js";import{_ as O}from"./FormField.vue-DokXCbml.js";import{_ as E}from"./MessageNotification.vue-C83opUOC.js";import{_ as K}from"./AppNavigation.vue-DcH97lTt.js";import{_ as W}from"./PageHeader.vue-DhJ1GZXF.js";import{_ as z}from"./DetailPageLayout.vue-BYXPj0P7.js";import{P as H}from"./PageSaveBar.vue-ZkzgRMby.js";import{_ as Y}from"./AdminTopBar-BIysc9Tr.js";import{p as q,m as j}from"./policyMigrationMenuItems-D8o9gxah.js";import{r as G}from"./PlayCircleIcon-ACN8oX7n.js";import{r as J}from"./InformationCircleIcon-Dnjq95z-.js";import{r as Q}from"./Cog6ToothIcon-BCMOD4VN.js";import{r as U}from"./ComputerDesktopIcon-D92IkDNz.js";import{r as f}from"./ShieldCheckIcon-BkfH9kvS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bb-Am5iU.js";import"./VaultIcon-0yVqGDWj.js";import"./ArrowRightStartOnRectangleIcon-CLCUEpzv.js";import"./ArrowTopRightOnSquareIcon-Cd_6qSPk.js";import"./RocketLaunchIcon-MP9dRmf5.js";import"./HomeIcon-DGihxR32.js";import"./UserIcon-B9-rHRsZ.js";import"./UsersIcon-oaPeND-z.js";import"./UserGroupIcon-C-0WA-Ss.js";import"./CommandLineIcon-BlUqAMc5.js";import"./ClipboardDocumentListIcon-HkPtUXlJ.js";import"./ClipboardDocumentCheckIcon-DA2PjPuu.js";import"./CpuChipIcon-7isR4Woi.js";import"./index-BP13dlUd.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-C_WDvV0g.js";import"./index-ZhWAdK_X.js";import"./index-AIzoT1ks.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-Btd800F5.js";import"./index-BBDD1QfU.js";import"./index-CMPzMs76.js";import"./index-CpbR1NxB.js";import"./index-BMQpWRRD.js";import"./ArrowRightIcon-Ba2_8xNw.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./index-BGmcZnfZ.js";import"./index-Do-nvtb2.js";import"./FlagIcon-xEoXMcNx.js";import"./index-Cy2jNuCI.js";import"./index-DMJeGYfZ.js";import"./index-B_P4GBGL.js";import"./index-Dzg4DU0m.js";import"./index-4T4mPLxV.js";import"./ChevronRightIcon-9Bjzgkk8.js";import"./index-B0m5ICal.js";import"./index-Dsw3nu2T.js";import"./index--qYgJinF.js";import"./index-Dw453XQ1.js";import"./Dropdown.vue-C4EK6U1h.js";import"./index-DNoP2_Hj.js";import"./EllipsisHorizontalIcon-CReXKJ2c.js";import"./BasePageLayout.vue-BfMxOwFg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-B_1ygOmR.js";import"./PencilSquareIcon-C2zE7SZM.js";import"./CheckIcon-CnYI-wva.js";import"./AiAgentButton.vue-BVYZC-a5.js";import"./ArrowLeftIcon-ZppuD48h.js";const y=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],a={policyName:"FileVault 2",policyNotes:"",showRecoveryKey:!1,doNotPromptAtLogout:!1,forceEnableInSetup:!1,bypassCount:"0"},X="Once the policy is successfully enabled for the system, a Recovery Key will be displayed for that respective System under System Details. Removing this policy will not disable FileVault 2 once enabled.",Z="A user will need to logout and log back in for the policy to take effect.",ee=L({name:"FileVault2Page",components:{AppNavigation:K,PageHeader:W,CollapsiblePanel:M,FormField:O,CheckboxWithLabel:$,LinkText:R,MessageNotification:E,DetailPageLayout:z,PageSaveBar:H,TopBar:Y,PvButton:S,PvTag:A,PvInputText:D,PvTextarea:B,PvDivider:V,ShieldCheckIcon:f,ComputerDesktopIcon:U,Cog6ToothIcon:Q,InformationCircleIcon:J,PlayCircleIcon:G},setup(){const{goBack:I,backButtonLabel:P}=_("/filevault-2"),d=t("details"),i=t(a.policyName),s=t(a.policyNotes),r=t(a.showRecoveryKey),n=t(a.doNotPromptAtLogout),p=t(a.forceEnableInSetup),c=t(a.bypassCount),e=t({...a}),u=t(!1),l=t(!1),v=b(()=>i.value!==e.value.policyName||s.value!==e.value.policyNotes||r.value!==e.value.showRecoveryKey||n.value!==e.value.doNotPromptAtLogout||p.value!==e.value.forceEnableInSetup||c.value!==e.value.bypassCount);N(v,o=>{o&&(l.value=!1)});const C=b(()=>{var o;return((o=y.find(k=>k.value===d.value))==null?void 0:o.label)??"Details"});function T(){i.value=e.value.policyName,s.value=e.value.policyNotes,r.value=e.value.showRecoveryKey,n.value=e.value.doNotPromptAtLogout,p.value=e.value.forceEnableInSetup,c.value=e.value.bypassCount,l.value=!1}async function w(){u.value=!0,await new Promise(o=>setTimeout(o,600)),e.value={policyName:i.value,policyNotes:s.value,showRecoveryKey:r.value,doNotPromptAtLogout:n.value,forceEnableInSetup:p.value,bypassCount:c.value},u.value=!1,l.value=!0,setTimeout(()=>{l.value=!1},2e3)}return{menuItems:j,profileMenuItems:q,detailTabs:y,activeTab:d,activeTabLabel:C,policyName:i,policyNotes:s,showRecoveryKey:r,doNotPromptAtLogout:n,forceEnableInSetup:p,bypassCount:c,POLICY_BEHAVIOR:X,POLICY_ACTIVATION:Z,isDirty:v,isSaving:u,showSavedConfirmation:l,handleDiscard:T,handleSave:w,goBack:I,backButtonLabel:P,shieldIcon:F(f)}},template:`
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
