import{usePolicyMigrationBackNavigation as S}from"./storybookPolicyMigrationNav-_9nWf7P8.js";import{d as L,q as N,m as C,r as t,k as f}from"./iframe-DuzLv9Pd.js";import{s as k}from"./index-BXhsDisi.js";import{s as R}from"./index-CEiioRpE.js";import{s as A}from"./index-CWdSX-TA.js";import{s as O}from"./index-C8JchokT.js";import{s as M}from"./index-Dypqr4YY.js";import{s as F}from"./index-D3QA_pcE.js";import{s as B}from"./index-BnPtWTiX.js";import{s as $}from"./index-ULr8DkZR.js";import{_ as Y}from"./CollapsiblePanel.vue-HiMYz6FK.js";import"./RichText.vue-D4MvUk45.js";import{_ as H}from"./LinkText.vue-Dtn5ZYX7.js";import{_ as G}from"./FormField.vue-CblrQISo.js";import{_ as U}from"./MessageNotification.vue-gttcx1zG.js";import{_ as V}from"./AppNavigation.vue-DWyFLfer.js";import{_ as W}from"./PageHeader.vue-DtI1h7PV.js";import{_ as q}from"./DetailPageLayout.vue-D4BojKqv.js";import{P as z}from"./PageSaveBar.vue-ChYkT8Lw.js";import{_ as j}from"./AdminTopBar-CApat_qI.js";import{p as X,m as Z}from"./policyMigrationMenuItems-BY6Dr-zu.js";import{r as J}from"./ArrowTopRightOnSquareIcon-vQx7CBJY.js";import{r as K}from"./Cog6ToothIcon-bwwfqrlO.js";import{r as Q}from"./ComputerDesktopIcon-DGbkS9Vh.js";import{r as h}from"./ShieldCheckIcon-BpS1grCD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Di5n2FZb.js";import"./VaultIcon-B_8FW2x5.js";import"./ArrowRightStartOnRectangleIcon-D4g3cMin.js";import"./RocketLaunchIcon-Cvc1Zpa7.js";import"./HomeIcon-B8gBiWKx.js";import"./UserIcon-CtiZzZ2X.js";import"./UsersIcon-BT-W7sF-.js";import"./UserGroupIcon-CWdxV-oE.js";import"./CommandLineIcon-BD5MFUQg.js";import"./ClipboardDocumentListIcon-CjFMn6dO.js";import"./ClipboardDocumentCheckIcon-k7_FGCzy.js";import"./CpuChipIcon-BBHeqCE_.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-BuiD5gzs.js";import"./index-ZhWAdK_X.js";import"./index-CPNNQ3fD.js";import"./index-D5zH4fN4.js";import"./index-b5e0TYx1.js";import"./index-CWlqIe1B.js";import"./index-B-toZiH_.js";import"./index-CGiVUquh.js";import"./index-CjiEPaTZ.js";import"./index-Brczh--H.js";import"./index-DL1Pt7bO.js";import"./index-Br2-aBVM.js";import"./index-BEZ2S-VF.js";import"./index-CO-G9M_W.js";import"./index-J_Bj38AC.js";import"./index-DY4Fqf02.js";import"./index-ByOVh7y-.js";import"./index-CFtktJtS.js";import"./index-DUWomeF_.js";import"./ArrowRightIcon-CebixEfQ.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";import"./index-2kR38mcb.js";import"./FlagIcon-CcLmoULS.js";import"./index-DyQWyx6D.js";import"./index-gSNiAAF9.js";import"./index-BQabsSYQ.js";import"./ChevronRightIcon-RLkhG38k.js";import"./index-C9g0vWw9.js";import"./index-BiLRIlNb.js";import"./Dropdown.vue-BvGCjloM.js";import"./EllipsisHorizontalIcon-CpSAr9zQ.js";import"./BasePageLayout.vue-DVNcPgxb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-Do_p2hLC.js";import"./PencilSquareIcon-DxXATT4Q.js";import"./CheckIcon-Cki03Z-0.js";import"./AiAgentButton.vue-BwR0d7yG.js";import"./ArrowLeftIcon-BrTKOOsg.js";const b=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],ee=[{label:"Single",value:"single"},{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"}],I="Schedule Restart",x="",T="single",d=new Date(2026,2,12,10,30),te="This policy automates device restarts to ensure timely application of critical updates. This ensures maintaining system security, performance, and compliance. ",ae="This policy helps ensure devices restart to apply updates and maintain security. Administrators can define a restart schedule as Daily, Weekly, or a Single scheduled restart.",ie="Devices must be MDM enrolled to activate this policy. After you save the policy it takes effect immediately.",le="Windows 10 (1607 or later) and Windows 11 or later",se=["Pro","Enterprise","Education","Windows SE","Pro Education","IoT Enterprise LTSC"],oe="America/New_York",re="Scheduled time uses your organization timezone.";function ne(i,l){return!i&&!l?!0:!i||!l?!1:i.getTime()===l.getTime()}const ce=L({name:"ScheduleRestartPage",components:{AppNavigation:V,PageHeader:W,CollapsiblePanel:Y,FormField:G,LinkText:H,MessageNotification:U,DatePicker:$,DetailPageLayout:q,PageSaveBar:z,TopBar:j,PvTag:A,PvInputText:k,PvTextarea:B,PvSelect:R,PvInputGroup:O,PvInputGroupAddon:M,PvDivider:F,ShieldCheckIcon:h,ComputerDesktopIcon:Q,Cog6ToothIcon:K,ArrowTopRightOnSquareIcon:J},setup(){const{goBack:i,backButtonLabel:l}=S("/schedule-restart"),u=t("details"),r=t(I),n=t(x),c=t(T),s=t(new Date(d)),e=t({policyName:I,policyNotes:x,scheduleRestart:T,scheduledDateTime:new Date(d)}),m=t(!1),o=t(!1),v=f(()=>r.value!==e.value.policyName||n.value!==e.value.policyNotes||c.value!==e.value.scheduleRestart||!ne(s.value,e.value.scheduledDateTime));N(v,a=>{a&&(o.value=!1)});const _=f(()=>{var a;return((a=b.find(E=>E.value===u.value))==null?void 0:a.label)??"Details"});function D(){r.value=e.value.policyName,n.value=e.value.policyNotes,c.value=e.value.scheduleRestart,s.value=new Date(e.value.scheduledDateTime),o.value=!1}async function w(){m.value=!0,await new Promise(a=>setTimeout(a,600)),e.value={policyName:r.value,policyNotes:n.value,scheduleRestart:c.value,scheduledDateTime:s.value?new Date(s.value):new Date(d)},m.value=!1,o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return{menuItems:Z,profileMenuItems:X,detailTabs:b,activeTab:u,activeTabLabel:_,policyName:r,policyNotes:n,scheduleRestart:c,scheduleRestartOptions:ee,scheduledDateTime:s,DATE_TIME_HELP_TEXT:re,POLICY_DESCRIPTION_LEAD:te,POLICY_BEHAVIOR:ae,POLICY_ACTIVATION:ie,MINIMUM_SUPPORTED_VERSION:le,SUPPORTED_EDITIONS:se,TIMEZONE_LABEL:oe,isDirty:v,isSaving:m,showSavedConfirmation:o,handleDiscard:D,handleSave:w,goBack:i,backButtonLabel:l,shieldIcon:C(h)}},template:`
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
          title="Schedule Restart"
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
                Configure the policy items, then select the target groups or devices to apply it.
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
                    label="Schedule Device Restart"
                    label-tooltip="Choose whether devices restart on a single date, daily, or weekly schedule."
                  >
                    <template #default="{ inputId }">
                      <PvSelect
                        :id="inputId"
                        v-model="scheduleRestart"
                        :options="scheduleRestartOptions"
                        optionLabel="label"
                        optionValue="value"
                        class="w-full!"
                      />
                    </template>
                  </FormField>

                  <FormField
                    v-if="scheduleRestart === 'single'"
                    label="Date & Time"
                    :help-text="DATE_TIME_HELP_TEXT"
                  >
                    <template #default="{ inputId }">
                      <div class="w-[400px] max-w-full shrink-0">
                        <PvInputGroup class="w-full">
                          <DatePicker
                            :id="inputId"
                            v-model="scheduledDateTime"
                            fluid
                            showTime
                            hourFormat="12"
                            dateFormat="mm/dd/yy"
                            showIcon
                            iconDisplay="input"
                          />
                          <PvInputGroupAddon>{{ TIMEZONE_LABEL }}</PvInputGroupAddon>
                        </PvInputGroup>
                      </div>
                    </template>
                  </FormField>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <MessageNotification
                  severity="info"
                  detail="JumpCloud MDM enrollment"
                >
                  <template #button>
                    <LinkText label="Learn more" href="#" target="_blank" />
                  </template>
                </MessageNotification>

                <div class="flex flex-col gap-md">
                  <h3 class="text-heading-3 text-neutral-base">Windows</h3>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                    <p class="text-body-md text-neutral-base m-0 w-full">{{ MINIMUM_SUPPORTED_VERSION }}</p>
                  </div>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base">Supported Editions</span>
                    <ul class="flex flex-col gap-xs list-disc pl-5 m-0">
                      <li
                        v-for="edition in SUPPORTED_EDITIONS"
                        :key="edition"
                        class="text-body-md text-neutral-base"
                      >
                        {{ edition }}
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
  `}),Ft={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Schedule Restart",component:ce,parameters:{layout:"fullscreen"}},p={};var y,P,g;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(g=(P=p.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const Bt=["ScheduleRestartPage","Default"];export{p as Default,ce as ScheduleRestartPage,Bt as __namedExportsOrder,Ft as default};
