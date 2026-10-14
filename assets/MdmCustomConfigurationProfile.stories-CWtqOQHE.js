import{usePolicyMigrationBackNavigation as E}from"./storybookPolicyMigrationNav-CIxige6k.js";import{d as B,r as t,q as U,m as $,k as u}from"./iframe-BF79XtSp.js";import{s as R}from"./index-BkZv6EbR.js";import{s as Y}from"./index-C_hXlnlQ.js";import{s as j}from"./index-D6ZVkPAC.js";import{s as H}from"./index-mj-WlYOT.js";import{_ as V}from"./CheckboxWithLabel.vue-BXWhMwWQ.js";import{_ as W}from"./CollapsiblePanel.vue-CWXrCyIT.js";import{_ as z}from"./CopyButton.vue-DQa5JtXY.js";import"./RichText.vue-CqGWfsH6.js";import{_ as G}from"./LinkText.vue-C1RSiwbX.js";import{_ as q}from"./FormField.vue-C69YWs2P.js";import{_ as J}from"./AppNavigation.vue-DJqEUTPj.js";import{_ as K}from"./PageHeader.vue-DWFSVb00.js";import{_ as Q}from"./DetailPageLayout.vue-CAqtlJnI.js";import{P as X}from"./PageSaveBar.vue-DvB7ec11.js";import{_ as Z}from"./AdminTopBar-kFcTia82.js";import{_ as ee}from"./CircuitFileUpload-C6c8qmpG.js";import{p as te,m as oe}from"./policyMigrationMenuItems-DB8bk3cd.js";import{r as ae}from"./InformationCircleIcon-Bb4ZZsW1.js";import{r as ie}from"./Cog6ToothIcon-xFudfeaO.js";import{r as le}from"./ComputerDesktopIcon-Ciwfr_XC.js";import{r as g}from"./ShieldCheckIcon-xpQZCNU8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-vX2hHYrt.js";import"./VaultIcon-DG1zHfD4.js";import"./ArrowRightStartOnRectangleIcon-m3mkNkcV.js";import"./ArrowTopRightOnSquareIcon-Bb4rBF4d.js";import"./RocketLaunchIcon-BqMZlamx.js";import"./HomeIcon-CRuA8H2X.js";import"./UserIcon-KpILDYI2.js";import"./UsersIcon-mPqKsBT7.js";import"./UserGroupIcon-odcgopw8.js";import"./CommandLineIcon-D7zOx_l8.js";import"./ClipboardDocumentListIcon-C1vC7p4N.js";import"./ClipboardDocumentCheckIcon-Hd-7WFS2.js";import"./CpuChipIcon-C8H0NY6t.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-Du18TKou.js";import"./index-ZhWAdK_X.js";import"./index-P-Yy9vDb.js";import"./index-CR4bzIFl.js";import"./index-dcWUga6b.js";import"./index-NvGJIH0G.js";import"./index-tnvvo6Sb.js";import"./index-DkPTkS_b.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-xyLKPl8B.js";import"./index-BVIEBy36.js";import"./Square2StackIcon-DAlcuERQ.js";import"./ArrowRightIcon-BO2KgFRi.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./index-D5gZjp3s.js";import"./index-bqWkeg_n.js";import"./index-PuebpjLD.js";import"./index-C4C8uF8-.js";import"./index-Ln8ICEkF.js";import"./ChevronRightIcon-Ds2oc56S.js";import"./index-fIrCZ8Qe.js";import"./index-BDHcVGdQ.js";import"./index-BMgqVpQE.js";import"./index-DccRakCb.js";import"./Dropdown.vue-Csy1Li7S.js";import"./index-lST1gP85.js";import"./EllipsisHorizontalIcon-BlcnArUO.js";import"./BasePageLayout.vue-DaSm17Gu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-CrNDtG4W.js";import"./PencilSquareIcon-BuhRV4E0.js";import"./CheckIcon-C0Leymti.js";import"./AiAgentButton.vue-DCnV5B9s.js";import"./ArrowLeftIcon-C5ySLvd1.js";import"./FlagIcon-Bi-xPCPe.js";import"./DocumentIcon-qb1-QNtE.js";import"./CloudArrowUpIcon-K7pypRps.js";const b=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],C="MDM Custom Configuration Profile",P="",y=!0,se=".mobileconfig",re="Distribute custom MDM configuration profiles using this policy. Profiles can be exported from tools like Apple Configurator or ProfileCreator and then uploaded as .mobileconfig files. ",ne="Applies the provided .mobileconfig configuration to the device using the MDM protocol.",pe="You must set up an Apple MDM Certificate before this policy takes effect.",me=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>PayloadContent</key>
    <array/>
    <key>PayloadDisplayName</key>
    <string>JumpCloud Custom Profile</string>
    <key>PayloadIdentifier</key>
    <string>com.jumpcloud.custom.profile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>00000000-0000-0000-0000-000000000001</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
  </dict>
</plist>`,k=B({name:"MdmCustomConfigurationProfilePage",props:{initialUploadedFileName:{type:null,default:null},initialProfileContents:{type:String,default:""}},components:{AppNavigation:J,PageHeader:K,CollapsiblePanel:W,FormField:q,CheckboxWithLabel:V,LinkText:G,DetailPageLayout:Q,PageSaveBar:X,CopyButton:z,TopBar:Z,CircuitFileUpload:ee,PvTag:Y,PvInputText:R,PvTextarea:H,PvDivider:j,ShieldCheckIcon:g,ComputerDesktopIcon:le,Cog6ToothIcon:ie,InformationCircleIcon:ae},setup(l){const{goBack:L,backButtonLabel:O}=E("/mdm-custom-configuration-profile"),f=t("details"),s=t(C),r=t(P),n=t(l.initialUploadedFileName),a=t(l.initialProfileContents),p=t(y),e=t({policyName:C,policyNotes:P,uploadedFileName:l.initialUploadedFileName,profileContents:l.initialProfileContents,reapplyOnOsUpdate:y}),d=t(!1),i=t(!1),v=u(()=>s.value!==e.value.policyName||r.value!==e.value.policyNotes||n.value!==e.value.uploadedFileName||a.value!==e.value.profileContents||p.value!==e.value.reapplyOnOsUpdate);U(v,o=>{o&&(i.value=!1)});const D=u(()=>{var o;return((o=b.find(S=>S.value===f.value))==null?void 0:o.label)??"Details"}),F=u(()=>a.value.trim().length>0);function w(o){a.value=o}function M(){s.value=e.value.policyName,r.value=e.value.policyNotes,n.value=e.value.uploadedFileName,a.value=e.value.profileContents,p.value=e.value.reapplyOnOsUpdate,i.value=!1}async function A(){d.value=!0,await new Promise(o=>setTimeout(o,600)),e.value={policyName:s.value,policyNotes:r.value,uploadedFileName:n.value,profileContents:a.value,reapplyOnOsUpdate:p.value},d.value=!1,i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return{menuItems:oe,profileMenuItems:te,detailTabs:b,activeTab:f,activeTabLabel:D,policyName:s,policyNotes:r,uploadedFileName:n,profileContents:a,hasProfileContents:F,reapplyOnOsUpdate:p,ACCEPT_MOBILECONFIG:se,POLICY_DESCRIPTION_LEAD:re,POLICY_BEHAVIOR:ne,POLICY_ACTIVATION:pe,handleFileContent:w,isDirty:v,isSaving:d,showSavedConfirmation:i,handleDiscard:M,handleSave:A,goBack:L,backButtonLabel:O,shieldIcon:$(g)}},template:`
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
          title="MDM Custom Configuration Profile"
          :icon="shieldIcon"
          :tabs="detailTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag value="All Devices" severity="accent-purple">
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
                      {{ POLICY_DESCRIPTION_LEAD }}<LinkText
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
                    v-if="hasProfileContents"
                    label="Profile Contents"
                  >
                    <template #default>
                      <div class="flex flex-col gap-sm w-full rounded-sm border border-neutral-default_solid bg-neutral-surface p-md">
                        <div class="flex justify-end">
                          <CopyButton :text="profileContents" size="small" />
                        </div>
                        <pre class="text-body-sm text-neutral-base whitespace-pre-wrap m-0 max-h-60 overflow-auto">{{ profileContents }}</pre>
                      </div>
                    </template>
                  </FormField>

                  <FormField
                    label="Mobile Configuration File"
                    label-tooltip="Upload a .mobileconfig file exported from Apple Configurator or ProfileCreator."
                  >
                    <template #default>
                      <CircuitFileUpload
                        v-model="uploadedFileName"
                        :accept="ACCEPT_MOBILECONFIG"
                        button-label="Upload File"
                        replace-button-label="Replace File"
                        compact-when-selected
                        @file-content="handleFileContent"
                      />
                    </template>
                  </FormField>

                  <CheckboxWithLabel
                    v-model="reapplyOnOsUpdate"
                    inputId="reapply-on-os-update"
                    :binary="true"
                  >
                    <template #label>Re-apply policy on every OS update</template>
                  </CheckboxWithLabel>
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
                      <span class="text-body-sm">JumpCloud MDM enrollment</span>
                      <LinkText
                        label="Learn more"
                        href="#"
                        target="_blank"
                        customClass="inline-flex items-center shrink-0 py-xs pl-xs"
                      />
                    </div>
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
  `}),Et={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/MDM Custom Configuration Profile",component:k,parameters:{layout:"fullscreen"}},m={},c={render:()=>({components:{MdmCustomConfigurationProfilePage:k},template:`
      <MdmCustomConfigurationProfilePage
        initial-uploaded-file-name="profile_jc.mobileconfig"
        :initial-profile-contents="sampleContents"
      />
    `,setup(){return{sampleContents:me}}})};var x,h,I;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(I=(h=m.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var _,T,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MdmCustomConfigurationProfilePage
    },
    template: \`
      <MdmCustomConfigurationProfilePage
        initial-uploaded-file-name="profile_jc.mobileconfig"
        :initial-profile-contents="sampleContents"
      />
    \`,
    setup() {
      return {
        sampleContents: SAMPLE_PROFILE_CONTENTS
      };
    }
  })
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const Bt=["MdmCustomConfigurationProfilePage","Default","WithUploadedProfile"];export{m as Default,k as MdmCustomConfigurationProfilePage,c as WithUploadedProfile,Bt as __namedExportsOrder,Et as default};
