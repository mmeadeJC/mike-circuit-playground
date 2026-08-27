import{u as D}from"./storybookPolicyMigrationNav-CaA9lteq.js";import{d as O,q as k,m as S,r as a,k as u}from"./iframe-D7BbHDbG.js";import{s as A}from"./index-DCVTeUli.js";import{s as M}from"./index-CUoDpPp7.js";import{s as E}from"./index-D-Q9u-0k.js";import{s as B}from"./index-C2zOs5JV.js";import{_ as $}from"./CheckboxWithLabel.vue-DmVEARZq.js";import{_ as Y}from"./CollapsiblePanel.vue-Cecxp7w6.js";import"./RichText.vue-1XZLRn0K.js";import{_ as F}from"./LinkText.vue-CWhhAGQ4.js";import{r as W}from"./CheckCircleIcon-Ctb-iWK2.js";import{_ as q}from"./FormField.vue-BiV6ZEgt.js";import{_ as V}from"./RadioButtonWithLabel.vue-DUZ-C-BV.js";import{_ as z}from"./MessageNotification.vue-CXd-EBo7.js";import{_ as H}from"./AppNavigation.vue-BO4jtGC6.js";import{_ as U}from"./PageHeader.vue-0YQpSj3p.js";import{_ as j}from"./DetailPageLayout.vue-fJW-VyeZ.js";import{P as G}from"./PageSaveBar.vue-DsoLE5OD.js";import{_ as J}from"./AdminTopBar-Chx_4VGs.js";import{p as X,m as K}from"./policyMigrationMenuItems-DFmOS9T4.js";import{r as Q}from"./XCircleIcon-B-RG5fvz.js";import{r as Z}from"./ArrowTopRightOnSquareIcon-_aQH2B8X.js";import{r as ee}from"./Cog6ToothIcon-DbA3VXm8.js";import{r as ae}from"./ComputerDesktopIcon-BY-6jc1E.js";import{r as v}from"./ShieldCheckIcon-BY_KE66K.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-oNdbppoo.js";import"./index-ZhWAdK_X.js";import"./index-CL0m3nvY.js";import"./index-BaidBBYU.js";import"./index-BKtZXsJ2.js";import"./index-bbso60R8.js";import"./index-Z_Cch3ng.js";import"./index-DFQPCZRe.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BCWryaxY.js";import"./index-1reqc7Wl.js";import"./ArrowRightIcon-BCpGJgPW.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./index-1PNgIuf3.js";import"./index-CkmisnA9.js";import"./index-0gxlrFf7.js";import"./FlagIcon-BljeC-Dg.js";import"./index-DdqW2O0M.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";import"./index-pQFxUuf4.js";import"./index-DopepIUV.js";import"./ChevronRightIcon-BrFzWSch.js";import"./index-BVixZLR4.js";import"./index-CLbTpqPL.js";import"./index-CA7vwr87.js";import"./index-DP0gcRj_.js";import"./Dropdown.vue-D2xWW_V3.js";import"./index-CiXhdmRB.js";import"./EllipsisHorizontalIcon-Dlw4O3VD.js";import"./BasePageLayout.vue-Dr0I8sc2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-D49SELwj.js";import"./PencilSquareIcon-DdOkIHmm.js";import"./CheckIcon-DNEDYMqg.js";import"./index-CKmPII1G.js";import"./AiAgentButton.vue-DoZHtGB6.js";import"./ArrowLeftIcon-BcjWK0Vo.js";import"./VaultIcon-qdBx7DKE.js";import"./ArrowRightStartOnRectangleIcon-B91pfFJz.js";import"./RocketLaunchIcon-BIuD1oEk.js";import"./HomeIcon-XZc1Dfyu.js";import"./UserIcon-DRjp4_6R.js";import"./UsersIcon-BbZ6Qpdm.js";import"./UserGroupIcon-Ctmauh4_.js";import"./CommandLineIcon-CWVZZFIo.js";import"./ClipboardDocumentListIcon-DLWg2TFY.js";import"./ClipboardDocumentCheckIcon-B9tp8omi.js";import"./CpuChipIcon-BPQeLsIA.js";const f=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],b="Recovery Lock",y="",h="auto-generate",x=!0,I="90",te="Securely restrict recovery on Mac computers with Apple silicon by requiring a password. This enhances physical security by preventing unauthorized access to macOS Recovery, which includes items such as the startup options menu and security settings. ",oe=" Note: Only 1 Recovery Lock policy is allowed per organization.",se="When this policy is applied, a Recovery Lock password is set on supported Mac computers. Passwords can be automatically generated or specified, and are stored in JumpCloud for retrieval from the device details page.",le="The policy takes effect when successfully applied to enrolled, supervised devices.",ie="macOS 11.5 or later",re=[{label:"User-Enrolled Devices",supported:!1},{label:"Device-Enrolled Devices",supported:!0},{label:"Auto-Enrolled Devices",supported:!0}],ce=O({name:"RecoveryLockPage",components:{AppNavigation:H,PageHeader:U,CollapsiblePanel:Y,FormField:q,CheckboxWithLabel:$,RadioButtonWithLabel:V,LinkText:F,MessageNotification:z,DetailPageLayout:j,PageSaveBar:G,TopBar:J,PvTag:M,PvInputText:A,PvTextarea:B,PvDivider:E,ShieldCheckIcon:v,ComputerDesktopIcon:ae,Cog6ToothIcon:ee,ArrowTopRightOnSquareIcon:Z,CheckCircleIcon:W,XCircleIcon:Q},setup(){const{goBack:_,backButtonLabel:w}=D("/recovery-lock"),m=a("details"),s=a(b),l=a(y),i=a(h),r=a(x),c=a(I),e=a({policyName:b,policyNotes:y,passwordCreationMethod:h,automaticallyRotatePassword:x,rotationIntervalDays:I}),p=a(!1),o=a(!1),d=u(()=>s.value!==e.value.policyName||l.value!==e.value.policyNotes||i.value!==e.value.passwordCreationMethod||r.value!==e.value.automaticallyRotatePassword||c.value!==e.value.rotationIntervalDays);k(d,t=>{t&&(o.value=!1)});const C=u(()=>{var t;return((t=f.find(R=>R.value===m.value))==null?void 0:t.label)??"Details"});function L(){s.value=e.value.policyName,l.value=e.value.policyNotes,i.value=e.value.passwordCreationMethod,r.value=e.value.automaticallyRotatePassword,c.value=e.value.rotationIntervalDays,o.value=!1}async function N(){p.value=!0,await new Promise(t=>setTimeout(t,600)),e.value={policyName:s.value,policyNotes:l.value,passwordCreationMethod:i.value,automaticallyRotatePassword:r.value,rotationIntervalDays:c.value},p.value=!1,o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return{menuItems:K,profileMenuItems:X,detailTabs:f,activeTab:m,activeTabLabel:C,policyName:s,policyNotes:l,passwordCreationMethod:i,automaticallyRotatePassword:r,rotationIntervalDays:c,POLICY_DESCRIPTION_LEAD:te,POLICY_DESCRIPTION_NOTE:oe,POLICY_BEHAVIOR:se,POLICY_ACTIVATION:le,MINIMUM_SUPPORTED_VERSION:ie,ENROLLMENT_TYPES:re,isDirty:d,isSaving:p,showSavedConfirmation:o,handleDiscard:L,handleSave:N,goBack:_,backButtonLabel:w,shieldIcon:S(v)}},template:`
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
