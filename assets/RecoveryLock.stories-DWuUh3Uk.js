import{u as D}from"./storybookPolicyMigrationNav-c416wVVH.js";import{d as O,q as k,m as S,r as a,k as u}from"./iframe-e359xqcE.js";import{s as A}from"./index-C8Trrx-R.js";import{s as M}from"./index-B6YXkmJR.js";import{s as E}from"./index-BLqIZ8v0.js";import{s as B}from"./index-BAE9PsyO.js";import{_ as $}from"./CheckboxWithLabel.vue-D6A-BAKo.js";import{_ as Y}from"./CollapsiblePanel.vue-iXJaNNFX.js";import"./RichText.vue-DSFy4cWp.js";import{_ as F}from"./LinkText.vue-CAkZt6Z4.js";import{r as W}from"./CheckCircleIcon-CttTEG-u.js";import{_ as q}from"./FormField.vue-X6cJp_-2.js";import{_ as V}from"./RadioButtonWithLabel.vue-JJpgj9Mx.js";import{_ as z}from"./MessageNotification.vue-C0yM77Od.js";import{_ as H}from"./AppNavigation.vue-BVEgPgPp.js";import{_ as U}from"./PageHeader.vue-B-RRdH_3.js";import{_ as j}from"./DetailPageLayout.vue-B4xUUZ88.js";import{P as G}from"./PageSaveBar.vue-Bo-usfmq.js";import{_ as J}from"./AdminTopBar-C1_aql48.js";import{p as X,m as K}from"./policyMigrationMenuItems-Cu0X-p_j.js";import{r as Q}from"./XCircleIcon-cAERQm2f.js";import{r as Z}from"./ArrowTopRightOnSquareIcon-BvZHgtlV.js";import{r as ee}from"./Cog6ToothIcon-B_W-iGDU.js";import{r as ae}from"./ComputerDesktopIcon-CZ49U3bB.js";import{r as v}from"./ShieldCheckIcon-C8LDGAuf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-DgftoVju.js";import"./index-ZhWAdK_X.js";import"./index-Do95Hz07.js";import"./index-B2MD1nhU.js";import"./index-5GyuQi88.js";import"./index-ss00ocVv.js";import"./index-C_QA9q8i.js";import"./index-CZJvM9KI.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-BxhYpKxH.js";import"./index-DGdP0FUD.js";import"./ArrowRightIcon-LWeHu1Pb.js";import"./ExclamationCircleIcon-GWGlLrqG.js";import"./ExclamationTriangleIcon-BD-Kddb2.js";import"./InformationCircleIcon-DBsCv4X8.js";import"./index-9U7SPxNC.js";import"./index-CLgHIt31.js";import"./index-SNTWOJlm.js";import"./FlagIcon-ebJhzkK-.js";import"./index-CVIMl1jo.js";import"./index-CgskNI-h.js";import"./index-WY88b_Bj.js";import"./index-8qCCvjmZ.js";import"./index-MDUUAlov.js";import"./ChevronRightIcon-atQJRe2P.js";import"./index-yC2g--ff.js";import"./index-DKwf0szZ.js";import"./index-Dqqj7jsW.js";import"./index-B4Kwt-uL.js";import"./Dropdown.vue-BCXCU-gF.js";import"./index-D72zYeEF.js";import"./EllipsisHorizontalIcon-CxnQmkwF.js";import"./BasePageLayout.vue-CIy2WbCv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-DGxftqyG.js";import"./PencilSquareIcon-TMd81OuA.js";import"./CheckIcon-CI0eXWFB.js";import"./index-Bn8GZArD.js";import"./AiAgentButton.vue-CPHfaCtk.js";import"./ArrowLeftIcon-Bj_NG_K1.js";import"./VaultIcon-DYzKEkxR.js";import"./ArrowRightStartOnRectangleIcon-CXujPh-D.js";import"./RocketLaunchIcon-DlN-TXg6.js";import"./HomeIcon-CMcdMeJ6.js";import"./UserIcon-B5ybHQl4.js";import"./UsersIcon-B0NJN5D0.js";import"./UserGroupIcon-E0lAPvKK.js";import"./CommandLineIcon-DJ9ijbG3.js";import"./ClipboardDocumentListIcon-DJhb6g7p.js";import"./ClipboardDocumentCheckIcon-DwrfexYM.js";import"./CpuChipIcon-BSVUGhtA.js";const f=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],b="Recovery Lock",y="",h="auto-generate",x=!0,I="90",te="Securely restrict recovery on Mac computers with Apple silicon by requiring a password. This enhances physical security by preventing unauthorized access to macOS Recovery, which includes items such as the startup options menu and security settings. ",oe=" Note: Only 1 Recovery Lock policy is allowed per organization.",se="When this policy is applied, a Recovery Lock password is set on supported Mac computers. Passwords can be automatically generated or specified, and are stored in JumpCloud for retrieval from the device details page.",le="The policy takes effect when successfully applied to enrolled, supervised devices.",ie="macOS 11.5 or later",re=[{label:"User-Enrolled Devices",supported:!1},{label:"Device-Enrolled Devices",supported:!0},{label:"Auto-Enrolled Devices",supported:!0}],ce=O({name:"RecoveryLockPage",components:{AppNavigation:H,PageHeader:U,CollapsiblePanel:Y,FormField:q,CheckboxWithLabel:$,RadioButtonWithLabel:V,LinkText:F,MessageNotification:z,DetailPageLayout:j,PageSaveBar:G,TopBar:J,PvTag:M,PvInputText:A,PvTextarea:B,PvDivider:E,ShieldCheckIcon:v,ComputerDesktopIcon:ae,Cog6ToothIcon:ee,ArrowTopRightOnSquareIcon:Z,CheckCircleIcon:W,XCircleIcon:Q},setup(){const{goBack:_,backButtonLabel:w}=D("/recovery-lock"),m=a("details"),s=a(b),l=a(y),i=a(h),r=a(x),c=a(I),e=a({policyName:b,policyNotes:y,passwordCreationMethod:h,automaticallyRotatePassword:x,rotationIntervalDays:I}),p=a(!1),o=a(!1),d=u(()=>s.value!==e.value.policyName||l.value!==e.value.policyNotes||i.value!==e.value.passwordCreationMethod||r.value!==e.value.automaticallyRotatePassword||c.value!==e.value.rotationIntervalDays);k(d,t=>{t&&(o.value=!1)});const C=u(()=>{var t;return((t=f.find(R=>R.value===m.value))==null?void 0:t.label)??"Details"});function L(){s.value=e.value.policyName,l.value=e.value.policyNotes,i.value=e.value.passwordCreationMethod,r.value=e.value.automaticallyRotatePassword,c.value=e.value.rotationIntervalDays,o.value=!1}async function N(){p.value=!0,await new Promise(t=>setTimeout(t,600)),e.value={policyName:s.value,policyNotes:l.value,passwordCreationMethod:i.value,automaticallyRotatePassword:r.value,rotationIntervalDays:c.value},p.value=!1,o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return{menuItems:K,profileMenuItems:X,detailTabs:f,activeTab:m,activeTabLabel:C,policyName:s,policyNotes:l,passwordCreationMethod:i,automaticallyRotatePassword:r,rotationIntervalDays:c,POLICY_DESCRIPTION_LEAD:te,POLICY_DESCRIPTION_NOTE:oe,POLICY_BEHAVIOR:se,POLICY_ACTIVATION:le,MINIMUM_SUPPORTED_VERSION:ie,ENROLLMENT_TYPES:re,isDirty:d,isSaving:p,showSavedConfirmation:o,handleDiscard:L,handleSave:N,goBack:_,backButtonLabel:w,shieldIcon:S(v)}},template:`
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
          title="Recovery Lock"
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
            class="w-full! min-h-full"
            max-width="1440"
            :show-sidebar="true"
          >
            <div class="flex flex-col gap-md pb-32">
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
                      {{ POLICY_DESCRIPTION_LEAD }}
                      <LinkText
                        href="#"
                        target="_blank"
                        :showIcon="false"
                        customClass="inline-flex items-center gap-xs align-baseline"
                      >
                        Learn more
                        <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                      </LinkText>
                      {{ POLICY_DESCRIPTION_NOTE }}
                    </p>
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
                  <FormField label="Password Creation Method">
                    <template #default>
                      <div class="flex flex-col gap-md">
                        <RadioButtonWithLabel
                          v-model="passwordCreationMethod"
                          value="auto-generate"
                          name="password-creation-method"
                          inputId="password-creation-auto-generate"
                        >
                          <template #label>Automatically generate a unique password</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="passwordCreationMethod"
                          value="specify"
                          name="password-creation-method"
                          inputId="password-creation-specify"
                        >
                          <template #label>Specify a password</template>
                        </RadioButtonWithLabel>
                      </div>
                    </template>
                  </FormField>

                  <CheckboxWithLabel
                    v-model="automaticallyRotatePassword"
                    inputId="automatically-rotate-password"
                    :binary="true"
                  >
                    <template #label>Automatically rotate password</template>
                  </CheckboxWithLabel>

                  <div
                    v-if="automaticallyRotatePassword"
                    class="flex flex-wrap items-center gap-sm pl-7"
                  >
                    <span class="text-body-md text-neutral-base">Rotate password every</span>
                    <PvInputText
                      id="rotation-interval-days"
                      v-model="rotationIntervalDays"
                      class="w-20"
                      aria-label="Rotation interval in days"
                    />
                    <span class="text-body-md text-neutral-base">days</span>
                  </div>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <MessageNotification
                  severity="info"
                  title="Requires Supervision"
                  detail="This policy requires devices to be supervised. JumpCloud MDM enrollment is required."
                >
                  <template #button>
                    <LinkText label="Learn more" href="#" target="_blank" />
                  </template>
                </MessageNotification>

                <div class="flex flex-col gap-md">
                  <h3 class="text-heading-3 text-neutral-base">macOS</h3>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                    <p class="text-body-md text-neutral-base m-0 w-full">{{ MINIMUM_SUPPORTED_VERSION }}</p>
                  </div>
                  <div class="flex flex-col gap-sm w-full">
                    <span class="text-body-md-semi-bold text-neutral-base">Supported Enrollment Types</span>
                    <ul class="flex flex-col gap-sm list-none p-0 m-0">
                      <li
                        v-for="enrollmentType in ENROLLMENT_TYPES"
                        :key="enrollmentType.label"
                        class="flex items-start gap-xs"
                      >
                        <CheckCircleIcon
                          v-if="enrollmentType.supported"
                          class="size-5 shrink-0 text-success-base mt-0.5"
                        />
                        <XCircleIcon
                          v-else
                          class="size-5 shrink-0 text-error-base mt-0.5"
                        />
                        <span class="text-body-md text-neutral-base">{{ enrollmentType.label }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
  `}),Ma={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Recovery Lock",component:ce,parameters:{layout:"fullscreen"}},n={};var g,P,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const Ea=["RecoveryLockPage","Default"];export{n as Default,ce as RecoveryLockPage,Ea as __namedExportsOrder,Ma as default};
