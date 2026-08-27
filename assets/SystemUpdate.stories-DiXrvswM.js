import{u as R}from"./storybookPolicyMigrationNav-BujCQNAr.js";import{d as U,r as i,q as $,m as G,k as f}from"./iframe-DSI7I_YQ.js";import{s as Y}from"./index-DdDMkWFP.js";import{s as H}from"./index-CbI5Nc1U.js";import{s as V}from"./index-B3LPCdXq.js";import{s as q,a as W}from"./index-DDFxwijU.js";import{s as X}from"./index-Cz6kxq3w.js";import{s as Z}from"./index-CsSMY8xR.js";import{s as j}from"./index-B-tSyprP.js";import{s as J}from"./index-BF3dm58r.js";import{_ as K}from"./CollapsiblePanel.vue-CpFXaJ2N.js";import"./RichText.vue-DARNTLdh.js";import{_ as Q}from"./LinkText.vue-la98-pF0.js";import{r as ee}from"./CheckCircleIcon-kOPkOkM8.js";import{_ as te}from"./FormField.vue-DvIDnTXZ.js";import{_ as ae}from"./AppNavigation.vue-WvpKRwdI.js";import{_ as le}from"./PageHeader.vue-8CZb4mnW.js";import{_ as oe}from"./DetailPageLayout.vue-BR2VVeJ7.js";import{P as ie}from"./PageSaveBar.vue-CPLAYq51.js";import{_ as se}from"./AdminTopBar-Bkm6k6PL.js";import{p as re,m as ne}from"./policyMigrationMenuItems-I8sYFzQ8.js";import{r as de}from"./PlusIcon-BEMe8u-I.js";import{r as pe}from"./TrashIcon-BHjh44dq.js";import{r as me}from"./InformationCircleIcon-Cz23V1it.js";import{r as ce}from"./XCircleIcon-DHyy3ew2.js";import{r as ue}from"./ArrowTopRightOnSquareIcon-C_EktnJD.js";import{r as ve}from"./Cog6ToothIcon-CsHyeCNP.js";import{r as fe}from"./ComputerDesktopIcon-DE9MREWp.js";import{r as I}from"./ShieldCheckIcon-nGYAINf2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DASh1IA2.js";import"./index-Cg08wAe5.js";import"./index-Ck3k_J8K.js";import"./index-CwTDpyKH.js";import"./index-ZhWAdK_X.js";import"./index-Cm1NVGCj.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-CD_7J42F.js";import"./index-B89_K_JM.js";import"./index-KUyW3X8b.js";import"./index-BuxjV2Ka.js";import"./index-CxxjhJ-R.js";import"./index-CZjsJVeR.js";import"./index-BI_elqOn.js";import"./index-Byho_yNF.js";import"./index-hJTrF4vo.js";import"./ArrowRightIcon-sh-7-hR7.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./index-BqmjiiIs.js";import"./index-DJOK6PAC.js";import"./index-Bhi6wGVV.js";import"./ChevronRightIcon-vzjO-UCf.js";import"./index-D6LVU54M.js";import"./index-uwcmB5ii.js";import"./Dropdown.vue-D3A6JM3M.js";import"./index-DsdYTbg9.js";import"./EllipsisHorizontalIcon-BAmumi3c.js";import"./BasePageLayout.vue-x6vCfDbO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-fllqqkML.js";import"./PencilSquareIcon-sxctLZ_v.js";import"./CheckIcon-DO40XkyB.js";import"./index-D6mY1Y8s.js";import"./AiAgentButton.vue-BBdh0oDh.js";import"./ArrowLeftIcon-hMAymlAx.js";import"./FlagIcon-Bax3lVf6.js";import"./VaultIcon-DKqs3JZC.js";import"./ArrowRightStartOnRectangleIcon-CiAc9VBg.js";import"./RocketLaunchIcon-Dsyb3UQf.js";import"./HomeIcon-CQmrqHE7.js";import"./UserIcon-CSW82trP.js";import"./UsersIcon-OEvGzjDd.js";import"./UserGroupIcon-DeF3nAvb.js";import"./CommandLineIcon-Bs9Wraq9.js";import"./ClipboardDocumentListIcon-BaP2rSiE.js";import"./ClipboardDocumentCheckIcon-ByZb5sDi.js";import"./CpuChipIcon-DEbsRDHr.js";const x=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],ye=[{label:"Default",value:"default"},{label:"Automatic",value:"automatic"},{label:"Windowed",value:"windowed"},{label:"Postpone",value:"postpone"}],g="System Update",w="";let S=1;function F(){const t={id:S,dateRange:null};return S+=1,t}const v={systemUpdateMode:"default",dailyStartTime:null,dailyStopTime:null,freezePeriods:[F()]},be="America/New_York",Pe="Scheduled time uses your organization timezone.",he="This policy lets you manage over-the-air (OTA) system updates on Android devices. Configure when and how updates are installed to align with your organization's maintenance and compliance requirements. ",Te="Devices must be enrolled in EMM to use this policy.",Ie="No action is needed to activate this policy.",xe="Android 6.0 or later",ge=[{label:"Work Profile (Personal device)",supported:!1},{label:"Work Profile (Company owned device)",supported:!1},{label:"Fully managed device",supported:!0},{label:"Dedicated device",supported:!0}];function P(t,o){return!t&&!o?!0:!t||!o?!1:t.getTime()===o.getTime()}function h(t){return t.map(o=>({id:o.id,dateRange:o.dateRange?o.dateRange.map(d=>new Date(d)):null}))}function we(t,o){return t.length!==o.length?!1:t.every((d,p)=>{const m=o[p],a=d.dateRange,s=m.dateRange;return!a&&!s?!0:!a||!s||a.length!==s.length?!1:a.every((c,l)=>P(c,s[l]))})}function _(t){return{systemUpdateMode:t.systemUpdateMode,dailyStartTime:t.dailyStartTime?new Date(t.dailyStartTime):null,dailyStopTime:t.dailyStopTime?new Date(t.dailyStopTime):null,freezePeriods:h(t.freezePeriods)}}const Se=U({name:"SystemUpdatePage",components:{AppNavigation:ae,PageHeader:le,CollapsiblePanel:K,FormField:te,LinkText:Q,DatePicker:j,DetailPageLayout:oe,PageSaveBar:ie,TopBar:se,PvButton:Y,PvTag:V,PvInputText:H,PvTextarea:Z,PvSelectButton:J,PvInputGroup:W,PvInputGroupAddon:q,PvDivider:X,ShieldCheckIcon:I,ComputerDesktopIcon:fe,Cog6ToothIcon:ve,ArrowTopRightOnSquareIcon:ue,CheckCircleIcon:ee,XCircleIcon:ce,InformationCircleIcon:me,TrashIcon:pe,PlusIcon:de},setup(){const{goBack:t,backButtonLabel:o}=R("/system-update"),d=i("details"),p=i(g),m=i(w),a=i(v.systemUpdateMode),s=i(v.dailyStartTime),c=i(v.dailyStopTime),l=i(h(v.freezePeriods)),n=i({policyName:g,policyNotes:w,settings:_(v)}),b=i(!1),u=i(!1),L=f(()=>a.value==="automatic"||a.value==="windowed"||a.value==="postpone"),M=f(()=>a.value==="windowed"),T=f(()=>{if(p.value!==n.value.policyName||m.value!==n.value.policyNotes)return!0;const e={systemUpdateMode:a.value,dailyStartTime:s.value,dailyStopTime:c.value,freezePeriods:l.value},r=n.value.settings;return e.systemUpdateMode!==r.systemUpdateMode||!P(e.dailyStartTime,r.dailyStartTime)||!P(e.dailyStopTime,r.dailyStopTime)||!we(e.freezePeriods,r.freezePeriods)});$(T,e=>{e&&(u.value=!1)});const N=f(()=>{var e;return((e=x.find(r=>r.value===d.value))==null?void 0:e.label)??"Details"});function k(e){a.value=e.systemUpdateMode,s.value=e.dailyStartTime?new Date(e.dailyStartTime):null,c.value=e.dailyStopTime?new Date(e.dailyStopTime):null,l.value=h(e.freezePeriods)}function z(){l.value=[...l.value,F()]}function A(e){if(l.value.length<=1){l.value=[{...l.value[0],dateRange:null}];return}l.value=l.value.filter(r=>r.id!==e)}function O(){p.value=n.value.policyName,m.value=n.value.policyNotes,k(n.value.settings),u.value=!1}async function B(){b.value=!0,await new Promise(e=>setTimeout(e,600)),n.value={policyName:p.value,policyNotes:m.value,settings:_({systemUpdateMode:a.value,dailyStartTime:s.value,dailyStopTime:c.value,freezePeriods:l.value})},b.value=!1,u.value=!0,setTimeout(()=>{u.value=!1},2e3)}return{menuItems:ne,profileMenuItems:re,detailTabs:x,activeTab:d,activeTabLabel:N,policyName:p,policyNotes:m,systemUpdateMode:a,systemUpdateModeOptions:ye,dailyStartTime:s,dailyStopTime:c,freezePeriods:l,showsFreezePeriod:L,showsWindowedTimes:M,TIMEZONE_LABEL:be,TIME_HELP_TEXT:Pe,POLICY_DESCRIPTION_LEAD:he,POLICY_BEHAVIOR:Te,POLICY_ACTIVATION:Ie,MINIMUM_SUPPORTED_VERSION:xe,ENROLLMENT_TYPES:ge,isDirty:T,isSaving:b,showSavedConfirmation:u,addFreezePeriod:z,removeFreezePeriod:A,handleDiscard:O,handleSave:B,goBack:t,backButtonLabel:o,shieldIcon:G(I)}},template:`
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
          title="System Update"
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
                Configure the policy here, then select the target groups or devices to apply it.
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

              <CollapsiblePanel header="Settings">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <FormField
                    label="System Update Settings"
                    label-tooltip="Choose how over-the-air system updates are delivered to enrolled Android devices."
                  >
                    <template #default="{ inputId }">
                      <PvSelectButton
                        :id="inputId"
                        v-model="systemUpdateMode"
                        :options="systemUpdateModeOptions"
                        optionLabel="label"
                        optionValue="value"
                        :allowEmpty="false"
                      />
                    </template>
                  </FormField>

                  <template v-if="showsWindowedTimes">
                    <FormField
                      label="Daily Start Time"
                      label-tooltip="The start of the daily maintenance window when updates may be installed."
                      :help-text="TIME_HELP_TEXT"
                    >
                      <template #default="{ inputId }">
                        <div class="w-[400px] max-w-full shrink-0">
                          <PvInputGroup class="w-full">
                            <DatePicker
                              :id="inputId"
                              v-model="dailyStartTime"
                              timeOnly
                              showIcon
                              iconDisplay="input"
                              hourFormat="12"
                              placeholder="--:-- --"
                              fluid
                            />
                            <PvInputGroupAddon>{{ TIMEZONE_LABEL }}</PvInputGroupAddon>
                          </PvInputGroup>
                        </div>
                      </template>
                    </FormField>

                    <FormField
                      label="Daily Stop Time"
                      label-tooltip="The end of the daily maintenance window when updates may be installed."
                      :help-text="TIME_HELP_TEXT"
                    >
                      <template #default="{ inputId }">
                        <div class="w-[400px] max-w-full shrink-0">
                          <PvInputGroup class="w-full">
                            <DatePicker
                              :id="inputId"
                              v-model="dailyStopTime"
                              timeOnly
                              showIcon
                              iconDisplay="input"
                              hourFormat="12"
                              placeholder="--:-- --"
                              fluid
                            />
                            <PvInputGroupAddon>{{ TIMEZONE_LABEL }}</PvInputGroupAddon>
                          </PvInputGroup>
                        </div>
                      </template>
                    </FormField>
                  </template>

                  <div
                    v-if="showsFreezePeriod"
                    class="flex flex-col gap-md"
                  >
                    <span class="inline-flex items-center gap-xs text-body-md-semi-bold text-neutral-base">
                      Freeze Period
                      <button
                        type="button"
                        class="rounded-full text-neutral-subtle hover:text-neutral-base"
                        aria-label="More information about freeze periods"
                        v-tooltip.top="'Date ranges when system updates will not be installed.'"
                      >
                        <InformationCircleIcon class="size-4" />
                      </button>
                    </span>

                    <div
                      v-for="row in freezePeriods"
                      :key="row.id"
                      class="flex items-start gap-md"
                    >
                      <FormField
                        label="Date"
                        label-tooltip="Select the start and end dates for this freeze period."
                        class="flex-1 min-w-0"
                      >
                        <template #default="{ inputId }">
                          <DatePicker
                            :id="inputId"
                            v-model="row.dateRange"
                            selectionMode="range"
                            dateFormat="mm/dd/yy"
                            showIcon
                            iconDisplay="input"
                            fluid
                          />
                        </template>
                      </FormField>

                      <div class="pt-7 shrink-0">
                        <PvButton
                          severity="secondary"
                          variant="text"
                          size="small"
                          aria-label="Delete freeze period"
                          @click="removeFreezePeriod(row.id)"
                        >
                          <template #icon>
                            <TrashIcon class="size-4" />
                          </template>
                        </PvButton>
                      </div>
                    </div>

                    <div>
                      <PvButton
                        label="Add Freeze Period"
                        severity="secondary"
                        variant="outlined"
                        size="small"
                        @click="addFreezePeriod"
                      >
                        <template #icon>
                          <PlusIcon class="size-4" />
                        </template>
                      </PvButton>
                    </div>
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
                      v-tooltip.top="'Enrollment types that support the System Update policy.'"
                    >
                      <InformationCircleIcon class="size-4" />
                    </button>
                  </span>
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
  `}),Jt={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/System Update",component:Se,parameters:{layout:"fullscreen"}},y={};var D,C,E;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(E=(C=y.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Kt=["SystemUpdatePage","Default"];export{y as Default,Se as SystemUpdatePage,Kt as __namedExportsOrder,Jt as default};
