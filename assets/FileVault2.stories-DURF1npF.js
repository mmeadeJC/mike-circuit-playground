import{usePolicyMigrationBackNavigation as _}from"./storybookPolicyMigrationNav-DTOaigvl.js";import{d as L,q as N,m as F,r as t,k as b}from"./iframe-CrzTiCu6.js";import{s as S}from"./index-DGRV0ejT.js";import{s as D}from"./index-DhP11m7K.js";import{s as A}from"./index-DiksCyp3.js";import{s as V}from"./index-3NCE7FTh.js";import{s as B}from"./index-OmJKRl9c.js";import{_ as $}from"./CheckboxWithLabel.vue-BCoIi1Rw.js";import{_ as M}from"./CollapsiblePanel.vue-CteESfah.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as R}from"./LinkText.vue-DffDQTJD.js";import{_ as O}from"./FormField.vue-CTr1UxJM.js";import{_ as E}from"./MessageNotification.vue-D2EvCuUd.js";import{_ as K}from"./AppNavigation.vue-DJCDVPu-.js";import{_ as W}from"./PageHeader.vue-C9ZyG74k.js";import{_ as z}from"./DetailPageLayout.vue-U7uVS8up.js";import{P as H}from"./PageSaveBar.vue-CfKKff-y.js";import{_ as Y}from"./AdminTopBar-BKJmvn0D.js";import{p as q,m as j}from"./policyMigrationMenuItems-4icKfN6E.js";import{r as G}from"./PlayCircleIcon-BFI0lZWE.js";import{r as J}from"./InformationCircleIcon-BV6Xhrvp.js";import{r as Q}from"./Cog6ToothIcon-BNOeg4eV.js";import{r as U}from"./ComputerDesktopIcon-Bdhw8rQC.js";import{r as f}from"./ShieldCheckIcon-CwbvLCk-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CjqWYhin.js";import"./VaultIcon-Cd_O6-yI.js";import"./ArrowRightStartOnRectangleIcon-CBJnXu54.js";import"./ArrowTopRightOnSquareIcon-DS4hPvi9.js";import"./RocketLaunchIcon-CAzmE-6h.js";import"./HomeIcon-BQPM_8Qu.js";import"./UserIcon-Bri6dvnd.js";import"./UsersIcon-DqHPfoZY.js";import"./UserGroupIcon-B6yu2ODb.js";import"./CommandLineIcon-vFXJRXVY.js";import"./ClipboardDocumentListIcon-yzE7qRAt.js";import"./ClipboardDocumentCheckIcon-CDO3bo_W.js";import"./CpuChipIcon-Df3nujkA.js";import"./index-br2uRJO8.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-B5AAKPzU.js";import"./index-B9HYPvme.js";import"./index-DBMnBcxB.js";import"./index-DGrjWtF_.js";import"./index-Dq5aZyU5.js";import"./ArrowRightIcon-BXae0GnV.js";import"./ExclamationCircleIcon-DJCe_prE.js";import"./ExclamationTriangleIcon-0_xNFPaJ.js";import"./CheckCircleIcon-DlswDrJ5.js";import"./index-DB_TaPch.js";import"./index-DHkFNkeW.js";import"./FlagIcon-DgAIV7Qg.js";import"./index-B1VXYqPb.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-BRT9CP7z.js";import"./index-IX3fe5I4.js";import"./ChevronRightIcon-BtziqKKH.js";import"./index-B5zsakeD.js";import"./index-BYVbZ-Ky.js";import"./index-Is3bGEIS.js";import"./index-CJtZNPwL.js";import"./Dropdown.vue-B3uoPsDo.js";import"./index-B-mFHERX.js";import"./EllipsisHorizontalIcon-XgfY8G75.js";import"./BasePageLayout.vue-DIEW9flY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-V_XjkKmd.js";import"./PencilSquareIcon-CPPagcZ0.js";import"./CheckIcon-DU9b1JoB.js";import"./AiAgentButton.vue-BF_sJadp.js";import"./ArrowLeftIcon-CDYutihO.js";const y=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],a={policyName:"FileVault 2",policyNotes:"",showRecoveryKey:!1,doNotPromptAtLogout:!1,forceEnableInSetup:!1,bypassCount:"0"},X="Once the policy is successfully enabled for the system, a Recovery Key will be displayed for that respective System under System Details. Removing this policy will not disable FileVault 2 once enabled.",Z="A user will need to logout and log back in for the policy to take effect.",ee=L({name:"FileVault2Page",components:{AppNavigation:K,PageHeader:W,CollapsiblePanel:M,FormField:O,CheckboxWithLabel:$,LinkText:R,MessageNotification:E,DetailPageLayout:z,PageSaveBar:H,TopBar:Y,PvButton:S,PvTag:A,PvInputText:D,PvTextarea:B,PvDivider:V,ShieldCheckIcon:f,ComputerDesktopIcon:U,Cog6ToothIcon:Q,InformationCircleIcon:J,PlayCircleIcon:G},setup(){const{goBack:I,backButtonLabel:P}=_("/filevault-2"),d=t("details"),i=t(a.policyName),s=t(a.policyNotes),r=t(a.showRecoveryKey),n=t(a.doNotPromptAtLogout),p=t(a.forceEnableInSetup),c=t(a.bypassCount),e=t({...a}),u=t(!1),l=t(!1),v=b(()=>i.value!==e.value.policyName||s.value!==e.value.policyNotes||r.value!==e.value.showRecoveryKey||n.value!==e.value.doNotPromptAtLogout||p.value!==e.value.forceEnableInSetup||c.value!==e.value.bypassCount);N(v,o=>{o&&(l.value=!1)});const C=b(()=>{var o;return((o=y.find(k=>k.value===d.value))==null?void 0:o.label)??"Details"});function T(){i.value=e.value.policyName,s.value=e.value.policyNotes,r.value=e.value.showRecoveryKey,n.value=e.value.doNotPromptAtLogout,p.value=e.value.forceEnableInSetup,c.value=e.value.bypassCount,l.value=!1}async function w(){u.value=!0,await new Promise(o=>setTimeout(o,600)),e.value={policyName:i.value,policyNotes:s.value,showRecoveryKey:r.value,doNotPromptAtLogout:n.value,forceEnableInSetup:p.value,bypassCount:c.value},u.value=!1,l.value=!0,setTimeout(()=>{l.value=!1},2e3)}return{menuItems:j,profileMenuItems:q,detailTabs:y,activeTab:d,activeTabLabel:C,policyName:i,policyNotes:s,showRecoveryKey:r,doNotPromptAtLogout:n,forceEnableInSetup:p,bypassCount:c,POLICY_BEHAVIOR:X,POLICY_ACTIVATION:Z,isDirty:v,isSaving:u,showSavedConfirmation:l,handleDiscard:T,handleSave:w,goBack:I,backButtonLabel:P,shieldIcon:F(f)}},template:`
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
