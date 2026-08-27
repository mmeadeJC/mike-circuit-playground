import{u as S}from"./storybookPolicyMigrationNav-Bpjkvbt-.js";import{d as L,q as N,m as C,r as t,k as f}from"./iframe--pVyazG9.js";import{s as k}from"./index-mLzRhsCG.js";import{s as R}from"./index-V_KBkFc6.js";import{s as A}from"./index-CG-HcpwM.js";import{s as O,a as M}from"./index-C_BBIm7y.js";import{s as F}from"./index-B2GG8oKH.js";import{s as B}from"./index-D2UuSKuo.js";import{s as $}from"./index-zMWr_mGq.js";import{_ as Y}from"./CollapsiblePanel.vue-CPoWVDSB.js";import"./RichText.vue-BtNuFzRg.js";import{_ as H}from"./LinkText.vue-BKb948uI.js";import{_ as G}from"./FormField.vue-DAGeh7uF.js";import{_ as U}from"./MessageNotification.vue-BIaLRi4B.js";import{_ as V}from"./AppNavigation.vue-DyTM78Ks.js";import{_ as W}from"./PageHeader.vue-C0DTfLHH.js";import{_ as q}from"./DetailPageLayout.vue-CZZdl905.js";import{P as z}from"./PageSaveBar.vue-D23tmDlN.js";import{_ as j}from"./AdminTopBar-YsOJDETq.js";import{p as X,m as Z}from"./policyMigrationMenuItems-BOyNnO1s.js";import{r as J}from"./ArrowTopRightOnSquareIcon-dGbNogk4.js";import{r as K}from"./Cog6ToothIcon-LI9RgjlE.js";import{r as Q}from"./ComputerDesktopIcon-DDq7LetA.js";import{r as h}from"./ShieldCheckIcon-DcBYyFbD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DlTQV9NJ.js";import"./index-BX6qIScn.js";import"./index-iMZkGNHR.js";import"./index-ZhWAdK_X.js";import"./index-BiPL9L3R.js";import"./index-BlXOQGTr.js";import"./index-B-BOOr65.js";import"./index-DaGsjZDs.js";import"./index-6pJfhDGj.js";import"./index-CtElKYVw.js";import"./index-BWGkmJ0o.js";import"./index-Cr53P9D2.js";import"./index-DDTNvhH8.js";import"./index-DgH38Tqr.js";import"./index-DCPbTvu2.js";import"./index-8lieu_W4.js";import"./index-awHdwFoC.js";import"./index-Ck1qSbo1.js";import"./index-becnzg5d.js";import"./index-BEGOK711.js";import"./index-BlpXHy1l.js";import"./ArrowRightIcon-DFyskfUp.js";import"./ExclamationCircleIcon-BLZmoYVZ.js";import"./ExclamationTriangleIcon-C0LU7L06.js";import"./CheckCircleIcon-BsRajZpZ.js";import"./InformationCircleIcon-DHXiAKy4.js";import"./index-LWk9cYfp.js";import"./FlagIcon-n-8lc86R.js";import"./index-CS4MPEf-.js";import"./index-Dd-vKo1S.js";import"./index-CxmVMPmr.js";import"./ChevronRightIcon-Bvh2VZdW.js";import"./index-Bc-xnt0N.js";import"./index-DjfYLa6o.js";import"./Dropdown.vue-BTsVmqg3.js";import"./EllipsisHorizontalIcon-vlhJGnpU.js";import"./BasePageLayout.vue-Cg_buLnZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-BCUrt0t4.js";import"./PencilSquareIcon-DNTaoy60.js";import"./CheckIcon-Gpynwz3T.js";import"./index-C10Cm2bV.js";import"./AiAgentButton.vue-BqeG1F10.js";import"./ArrowLeftIcon-CWuApAEd.js";import"./VaultIcon-Dsls0DPq.js";import"./ArrowRightStartOnRectangleIcon-hGdjTmS_.js";import"./RocketLaunchIcon-EZqtAKN2.js";import"./HomeIcon-BIUhWVpo.js";import"./UserIcon-BxZQM_YX.js";import"./UsersIcon-DQhrqsfm.js";import"./UserGroupIcon-DtFhSmsY.js";import"./CommandLineIcon-DpVPf4B3.js";import"./ClipboardDocumentListIcon-wBneEAPl.js";import"./ClipboardDocumentCheckIcon-D6uiJ4ly.js";import"./CpuChipIcon-DjhQRX8j.js";const b=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],ee=[{label:"Single",value:"single"},{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"}],I="Schedule Restart",x="",T="single",d=new Date(2026,2,12,10,30),te="This policy automates device restarts to ensure timely application of critical updates. This ensures maintaining system security, performance, and compliance. ",ae="This policy helps ensure devices restart to apply updates and maintain security. Administrators can define a restart schedule as Daily, Weekly, or a Single scheduled restart.",ie="Devices must be MDM enrolled to activate this policy. After you save the policy it takes effect immediately.",le="Windows 10 (1607 or later) and Windows 11 or later",se=["Pro","Enterprise","Education","Windows SE","Pro Education","IoT Enterprise LTSC"],oe="America/New_York",re="Scheduled time uses your organization timezone.";function ne(i,l){return!i&&!l?!0:!i||!l?!1:i.getTime()===l.getTime()}const ce=L({name:"ScheduleRestartPage",components:{AppNavigation:V,PageHeader:W,CollapsiblePanel:Y,FormField:G,LinkText:H,MessageNotification:U,DatePicker:$,DetailPageLayout:q,PageSaveBar:z,TopBar:j,PvTag:A,PvInputText:k,PvTextarea:B,PvSelect:R,PvInputGroup:M,PvInputGroupAddon:O,PvDivider:F,ShieldCheckIcon:h,ComputerDesktopIcon:Q,Cog6ToothIcon:K,ArrowTopRightOnSquareIcon:J},setup(){const{goBack:i,backButtonLabel:l}=S("/schedule-restart"),u=t("details"),r=t(I),n=t(x),c=t(T),s=t(new Date(d)),e=t({policyName:I,policyNotes:x,scheduleRestart:T,scheduledDateTime:new Date(d)}),m=t(!1),o=t(!1),v=f(()=>r.value!==e.value.policyName||n.value!==e.value.policyNotes||c.value!==e.value.scheduleRestart||!ne(s.value,e.value.scheduledDateTime));N(v,a=>{a&&(o.value=!1)});const _=f(()=>{var a;return((a=b.find(E=>E.value===u.value))==null?void 0:a.label)??"Details"});function D(){r.value=e.value.policyName,n.value=e.value.policyNotes,c.value=e.value.scheduleRestart,s.value=new Date(e.value.scheduledDateTime),o.value=!1}async function w(){m.value=!0,await new Promise(a=>setTimeout(a,600)),e.value={policyName:r.value,policyNotes:n.value,scheduleRestart:c.value,scheduledDateTime:s.value?new Date(s.value):new Date(d)},m.value=!1,o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return{menuItems:Z,profileMenuItems:X,detailTabs:b,activeTab:u,activeTabLabel:_,policyName:r,policyNotes:n,scheduleRestart:c,scheduleRestartOptions:ee,scheduledDateTime:s,DATE_TIME_HELP_TEXT:re,POLICY_DESCRIPTION_LEAD:te,POLICY_BEHAVIOR:ae,POLICY_ACTIVATION:ie,MINIMUM_SUPPORTED_VERSION:le,SUPPORTED_EDITIONS:se,TIMEZONE_LABEL:oe,isDirty:v,isSaving:m,showSavedConfirmation:o,handleDiscard:D,handleSave:w,goBack:i,backButtonLabel:l,shieldIcon:C(h)}},template:`
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
  `}),Mt={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Schedule Restart",component:ce,parameters:{layout:"fullscreen"}},p={};var y,P,g;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(g=(P=p.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};const Ft=["ScheduleRestartPage","Default"];export{p as Default,ce as ScheduleRestartPage,Ft as __namedExportsOrder,Mt as default};
