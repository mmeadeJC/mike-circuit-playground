import{usePolicyMigrationBackNavigation as k}from"./storybookPolicyMigrationNav-CpsoCc-v.js";import{d as T,q as _,m as L,r as t,k as m}from"./iframe-8Q3g4suX.js";import{s as C}from"./index-CkKvLbcv.js";import{s as A}from"./index-BEvLtaLX.js";import{s as N}from"./index-cFQtYIhg.js";import{s as D}from"./index-dop1ZQf9.js";import{_ as S}from"./CollapsiblePanel.vue-CmNp5iUc.js";import"./RichText.vue-C1Ty82RV.js";import{_ as O}from"./LinkText.vue-DvAjr8lK.js";import{r as E}from"./CheckCircleIcon-BlALaqTn.js";import{_ as M}from"./FormField.vue-DPg-U9jM.js";import{_ as R}from"./AppNavigation.vue-DywdLFt4.js";import{_ as B}from"./PageHeader.vue-COzcmwfr.js";import{_ as $}from"./DetailPageLayout.vue-DTAsiTuY.js";import{P as F}from"./PageSaveBar.vue-D2eZ_K1C.js";import{_ as Y}from"./AdminTopBar-Ck-Dv7za.js";import{p as z,m as V}from"./policyMigrationMenuItems-D670dAGr.js";import{r as q}from"./XCircleIcon-111cEVOv.js";import{r as U}from"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import{r as H}from"./ArrowRightIcon-BXY2Zswv.js";import{r as j}from"./InformationCircleIcon-ozw6Xz0u.js";import{r as G}from"./ComputerDesktopIcon-DDj9bIO2.js";import{r as p}from"./ShieldCheckIcon-W0AJus9F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-OJfjCxM5.js";import"./index-ZhWAdK_X.js";import"./index-M73h-aNz.js";import"./index-C19gJH8S.js";import"./index-DpCZYySO.js";import"./index-BMCZJFM3.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./index-Ck7ewAP5.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./index-DirUApOz.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-C6vF-uE7.js";import"./index-MkGR21B_.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./index-Rn1cm77L.js";import"./index-MAZOfW6J.js";import"./index-CZrXZwQy.js";import"./index-NkGFgNPM.js";import"./Dropdown.vue-CKApLVqP.js";import"./index-Us1_uPk3.js";import"./EllipsisHorizontalIcon-DtE3Bb7n.js";import"./BasePageLayout.vue-CwV5cDx0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-Bc2j6_Ia.js";import"./PencilSquareIcon-CZ923cNI.js";import"./CheckIcon-Mq2NBLaA.js";import"./index-DPUoOQbX.js";import"./AiAgentButton.vue-hSAdW1Kt.js";import"./ArrowLeftIcon-CzirQB4t.js";import"./FlagIcon-CTBX6-CL.js";import"./VaultIcon-DvFqgId8.js";import"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import"./RocketLaunchIcon-BJK4NMZ4.js";import"./HomeIcon-yFRUSV7Z.js";import"./UserIcon-ShjzaHpT.js";import"./UsersIcon-Z2ifx08k.js";import"./UserGroupIcon-Ciz8NLc5.js";import"./CommandLineIcon-4Js_OSQE.js";import"./ClipboardDocumentListIcon-CnTg33RY.js";import"./ClipboardDocumentCheckIcon--weNKert.js";import"./CpuChipIcon-DVt0p-5v.js";import"./Cog6ToothIcon-cxmEYFc7.js";const d=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],u="Allow Activation Lock",v="",X="Allows Activation Lock on enrolled Apple devices, helping prevent unauthorized users from activating or erasing a device without the owner's credentials.",J="Lets you allow or restrict Activation Lock on managed macOS devices. When enabled, a device remains linked to the organization until Activation Lock is cleared. This policy interacts with the Find My feature on the device.",W="The end user must be signed in to iCloud and have Find My enabled on the device. Devices must be supervised for this policy to take effect.",K="macOS 11 or later",Q=[{label:"User-Enrolled Devices",supported:!1},{label:"Device-Enrolled Devices",supported:!0},{label:"Auto-Enrolled Devices",supported:!0}],Z=T({name:"AllowActivationLockPage",components:{AppNavigation:R,PageHeader:B,CollapsiblePanel:S,FormField:M,LinkText:O,DetailPageLayout:$,PageSaveBar:F,TopBar:Y,PvTag:A,PvInputText:C,PvTextarea:D,PvDivider:N,ShieldCheckIcon:p,ComputerDesktopIcon:G,InformationCircleIcon:j,ArrowRightIcon:H,ArrowTopRightOnSquareIcon:U,CheckCircleIcon:E,XCircleIcon:q},setup(){const{goBack:h,backButtonLabel:g}=k("/allow-activation-lock"),n=t("details"),l=t(u),o=t(v),a=t({policyName:u,policyNotes:v}),r=t(!1),i=t(!1),c=m(()=>l.value!==a.value.policyName||o.value!==a.value.policyNotes);_(c,e=>{e&&(i.value=!1)});const y=m(()=>{var e;return((e=d.find(P=>P.value===n.value))==null?void 0:e.label)??"Details"});function I(){l.value=a.value.policyName,o.value=a.value.policyNotes,i.value=!1}async function w(){r.value=!0,await new Promise(e=>setTimeout(e,600)),a.value={policyName:l.value,policyNotes:o.value},r.value=!1,i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return{menuItems:V,profileMenuItems:z,detailTabs:d,activeTab:n,activeTabLabel:y,policyName:l,policyNotes:o,POLICY_DESCRIPTION:X,POLICY_BEHAVIOR:J,POLICY_ACTIVATION:W,MINIMUM_SUPPORTED_VERSION:K,ENROLLMENT_TYPES:Q,isDirty:c,isSaving:r,showSavedConfirmation:i,handleDiscard:I,handleSave:w,goBack:h,backButtonLabel:g,shieldIcon:L(p)}},template:`
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
          title="Allow Activation Lock"
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
                      {{ POLICY_DESCRIPTION }}
                      <LinkText
                        href="#"
                        target="_blank"
                        :showIcon="false"
                        customClass="inline-flex items-center gap-xs align-baseline"
                      >
                        Learn more
                        <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                      </LinkText>
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

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex w-full min-w-0 max-w-full flex-col gap-md">
                <div class="p-px">
                  <div class="flex w-full min-w-0 items-center gap-sm rounded-sm bg-notification-info p-sm shadow-message-info text-notification-info-content">
                    <InformationCircleIcon class="size-5 shrink-0 text-notification-info-content" />
                    <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-sm gap-y-xs">
                      <span class="text-body-md-bold text-neutral-base shrink-0">Requires Supervision</span>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex min-w-0 max-w-full shrink items-center gap-0.5 py-xs pl-xs text-body-md-link text-link-base no-underline transition-colors hover:text-link-hover hover:underline hover:underline-offset-2 active:text-link-active active:underline"
                      >
                        <span class="min-w-0 break-words">Understanding Supervised Devices</span>
                        <ArrowRightIcon class="size-5 shrink-0 text-current" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-xs w-full">
                  <span class="text-body-md-semi-bold text-neutral-base">Other Requirements</span>
                  <p class="text-body-md text-neutral-base m-0">
                    JumpCloud MDM enrollment for macOS 11.0+
                    <LinkText
                      href="#"
                      target="_blank"
                      :showIcon="false"
                      customClass="inline-flex items-center gap-xs align-baseline ml-xs"
                    >
                      Learn more
                      <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                    </LinkText>
                  </p>
                </div>

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
          saveLabel="Create Policy"
          discardLabel="Cancel"
          @save="handleSave"
          @discard="handleDiscard"
        />
      </div>
    </div>
  `}),ht={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Allow Activation Lock",component:Z,parameters:{layout:"fullscreen"}},s={};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const gt=["AllowActivationLockPage","Default"];export{Z as AllowActivationLockPage,s as Default,gt as __namedExportsOrder,ht as default};
