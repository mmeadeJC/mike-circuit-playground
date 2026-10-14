import{usePolicyMigrationBackNavigation as L}from"./storybookPolicyMigrationNav-CWKFaQaP.js";import{d as w,q as O,m as S,r as a,k as m}from"./iframe-600w3n4H.js";import{s as k}from"./index-DAcoo9Zi.js";import{s as E}from"./index-Bu8ekTSX.js";import{s as A}from"./index-CePK2PS1.js";import{s as B}from"./index-DA9jvc7b.js";import{s as M}from"./index-DOGY-w59.js";import{_ as $}from"./CollapsiblePanel.vue-N2IyoV5w.js";import{_ as F}from"./CopyButton.vue-D-9LhzIN.js";import"./RichText.vue-CqDMFobT.js";import{_ as R}from"./LinkText.vue-Bnu_L6eP.js";import{r as Y}from"./CheckCircleIcon-D4HHsw8E.js";import{_ as V}from"./FormField.vue-9Bh63gOi.js";import{_ as U}from"./AppNavigation.vue-Bmp64vPI.js";import{_ as J}from"./PageHeader.vue-CphoGfG2.js";import{_ as H}from"./DetailPageLayout.vue-D7FaBP8C.js";import{P as j}from"./PageSaveBar.vue-BKX4f2tf.js";import{_ as z}from"./AdminTopBar-CfXfPgGc.js";import{p as G,m as W}from"./policyMigrationMenuItems-BgmX3deU.js";import{r as q}from"./InformationCircleIcon-B9PCJUqI.js";import{r as K}from"./Cog6ToothIcon-DHjR5ucD.js";import{r as Q}from"./ComputerDesktopIcon-DIfAHnbc.js";import{r as d}from"./ShieldCheckIcon-BytxG3nK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BPN10FIB.js";import"./VaultIcon-D2pNXb0H.js";import"./ArrowRightStartOnRectangleIcon-Docb568Z.js";import"./ArrowTopRightOnSquareIcon-D1DflJJw.js";import"./RocketLaunchIcon-C0UcLMmT.js";import"./HomeIcon-DzFCrQek.js";import"./UserIcon-BnMpn0XC.js";import"./UsersIcon-BAek990o.js";import"./UserGroupIcon-BAYPParn.js";import"./CommandLineIcon-BHverfhZ.js";import"./ClipboardDocumentListIcon-DJ3dp-pS.js";import"./ClipboardDocumentCheckIcon-fhZeORzP.js";import"./CpuChipIcon-DHk9P2K6.js";import"./index-BzHAkJ03.js";import"./index-CY9iazAI.js";import"./index-DtTXIm-l.js";import"./index-DknECv7p.js";import"./index-ZhWAdK_X.js";import"./index-DQaWMASi.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-C_NaY8XT.js";import"./index-B3TfiOtM.js";import"./index-D0lPU1dy.js";import"./Square2StackIcon-HzFD5fRm.js";import"./ArrowRightIcon-D0LHaIDr.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./index-DkywZ0qJ.js";import"./index-DBXXhGgD.js";import"./index-DtheA9qo.js";import"./index-CHjA10XC.js";import"./index-Dl3ThDuu.js";import"./ChevronRightIcon-BF9RliU4.js";import"./index-D5QE8W6K.js";import"./index-BWQETwp8.js";import"./index-CbCGMsrL.js";import"./index-BIOcEsci.js";import"./Dropdown.vue-BqAjJND7.js";import"./index-DosJGK4C.js";import"./EllipsisHorizontalIcon-Oc4k2XGT.js";import"./BasePageLayout.vue-DPmEk4Cz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-KG6QsGJY.js";import"./PencilSquareIcon-DlUtcSnh.js";import"./CheckIcon-Bb_mTRKE.js";import"./AiAgentButton.vue-CCmXcEc5.js";import"./ArrowLeftIcon-DfsnWOy5.js";import"./FlagIcon-Ba3Do2-9.js";const u=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],v="Custom Payload",f="",b="",X="This policy allows administrators to configure settings not available in the portal via JSON.",Z="Devices must be enrolled in EMM to use this policy.",ee="No action is needed for the policy to be activated.",te="Android 5.0 or later",ae=["Work Profile (User-allowed)","Work Profile (Company-owned device)","Fully managed device","Dedicated device"],oe=w({name:"CustomPayloadPage",components:{AppNavigation:U,PageHeader:J,CollapsiblePanel:$,FormField:V,LinkText:R,CopyButton:F,DetailPageLayout:H,PageSaveBar:j,TopBar:z,PvButton:k,PvTag:A,PvInputText:E,PvTextarea:M,PvDivider:B,ShieldCheckIcon:d,ComputerDesktopIcon:Q,Cog6ToothIcon:K,InformationCircleIcon:q,CheckCircleIcon:Y},setup(){const{goBack:I,backButtonLabel:g}=L("/custom-payload"),c=a("details"),i=a(v),s=a(f),e=a(b),t=a({policyName:v,policyNotes:f,policyContents:b}),n=a(!1),l=a(!1),p=m(()=>i.value!==t.value.policyName||s.value!==t.value.policyNotes||e.value!==t.value.policyContents);O(p,o=>{o&&(l.value=!1)});const h=m(()=>{var o;return((o=u.find(D=>D.value===c.value))==null?void 0:o.label)??"Details"});function C(){e.value=""}function T(){e.value.trim()&&JSON.parse(e.value)}function _(){i.value=t.value.policyName,s.value=t.value.policyNotes,e.value=t.value.policyContents,l.value=!1}async function N(){n.value=!0,await new Promise(o=>setTimeout(o,600)),t.value={policyName:i.value,policyNotes:s.value,policyContents:e.value},n.value=!1,l.value=!0,setTimeout(()=>{l.value=!1},2e3)}return{menuItems:W,profileMenuItems:G,detailTabs:u,activeTab:c,activeTabLabel:h,policyName:i,policyNotes:s,policyContents:e,POLICY_DESCRIPTION_LEAD:X,POLICY_BEHAVIOR:Z,POLICY_ACTIVATION:ee,MINIMUM_SUPPORTED_VERSION:te,SUPPORTED_ENROLLMENT_TYPES:ae,isDirty:p,isSaving:n,showSavedConfirmation:l,clearPolicyContents:C,validateJson:T,handleDiscard:_,handleSave:N,goBack:I,backButtonLabel:g,shieldIcon:S(d)}},template:`
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
          title="Custom Payload"
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
              <CollapsiblePanel header="Android Device Policy">
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
                      <LinkText label="Learn more" href="#" target="_blank" :showIcon="false" />
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
                  <FormField
                    label="Policy Contents"
                    label-tooltip="Enter valid JSON for the Android custom payload policy."
                  >
                    <template #default="{ inputId }">
                      <div class="flex flex-col gap-xs w-full">
                        <div class="flex justify-end">
                          <CopyButton :text="policyContents" size="small" />
                        </div>
                        <PvTextarea
                          :id="inputId"
                          v-model="policyContents"
                          :rows="14"
                          class="w-full"
                        />
                      </div>
                    </template>
                  </FormField>

                  <div class="flex justify-end gap-sm">
                    <PvButton
                      label="Clear"
                      severity="secondary"
                      variant="outlined"
                      @click="clearPolicyContents"
                    />
                    <PvButton
                      label="Validate JSON"
                      @click="validateJson"
                    />
                  </div>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <h3 class="text-heading-3 text-neutral-base">Android</h3>
                <div class="flex flex-col gap-xs w-full">
                  <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                  <p class="text-body-md text-neutral-base m-0 w-full">{{ MINIMUM_SUPPORTED_VERSION }}</p>
                </div>
                <div class="flex flex-col gap-sm w-full">
                  <span class="inline-flex items-center gap-xs text-body-md-semi-bold text-neutral-base">
                    Supported Enrollment Types
                    <button
                      type="button"
                      class="rounded-full text-neutral-subtle hover:text-neutral-base"
                      aria-label="More information about supported enrollment types"
                      v-tooltip.top="'Enrollment types that support Android custom payload policies.'"
                    >
                      <InformationCircleIcon class="size-4" />
                    </button>
                  </span>
                  <ul class="flex flex-col gap-sm list-none p-0 m-0">
                    <li
                      v-for="enrollmentType in SUPPORTED_ENROLLMENT_TYPES"
                      :key="enrollmentType"
                      class="flex items-start gap-xs"
                    >
                      <CheckCircleIcon class="size-5 shrink-0 text-success-base mt-0.5" />
                      <span class="text-body-md text-neutral-base">{{ enrollmentType }}</span>
                    </li>
                  </ul>
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
  `}),Ct={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Custom Payload",component:oe,parameters:{layout:"fullscreen"}},r={};var y,x,P;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(P=(x=r.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const Tt=["CustomPayloadPage","Default"];export{oe as CustomPayloadPage,r as Default,Tt as __namedExportsOrder,Ct as default};
