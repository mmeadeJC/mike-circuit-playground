import{usePolicyMigrationBackNavigation as E}from"./storybookPolicyMigrationNav-_9nWf7P8.js";import{d as B,r as t,q as U,m as $,k as u}from"./iframe-DuzLv9Pd.js";import{s as R}from"./index-BXhsDisi.js";import{s as Y}from"./index-CWdSX-TA.js";import{s as j}from"./index-D3QA_pcE.js";import{s as H}from"./index-BnPtWTiX.js";import{_ as V}from"./CheckboxWithLabel.vue-DoqDZu3R.js";import{_ as W}from"./CollapsiblePanel.vue-HiMYz6FK.js";import{_ as z}from"./CopyButton.vue-mN-gB8pe.js";import"./RichText.vue-D4MvUk45.js";import{_ as G}from"./LinkText.vue-Dtn5ZYX7.js";import{_ as q}from"./FormField.vue-CblrQISo.js";import{_ as J}from"./AppNavigation.vue-DWyFLfer.js";import{_ as K}from"./PageHeader.vue-DtI1h7PV.js";import{_ as Q}from"./DetailPageLayout.vue-D4BojKqv.js";import{P as X}from"./PageSaveBar.vue-ChYkT8Lw.js";import{_ as Z}from"./AdminTopBar-CApat_qI.js";import{_ as ee}from"./CircuitFileUpload-BCStRagr.js";import{p as te,m as oe}from"./policyMigrationMenuItems-BY6Dr-zu.js";import{r as ae}from"./InformationCircleIcon-o0jrs0p0.js";import{r as ie}from"./Cog6ToothIcon-bwwfqrlO.js";import{r as le}from"./ComputerDesktopIcon-DGbkS9Vh.js";import{r as g}from"./ShieldCheckIcon-BpS1grCD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Di5n2FZb.js";import"./VaultIcon-B_8FW2x5.js";import"./ArrowRightStartOnRectangleIcon-D4g3cMin.js";import"./ArrowTopRightOnSquareIcon-vQx7CBJY.js";import"./RocketLaunchIcon-Cvc1Zpa7.js";import"./HomeIcon-B8gBiWKx.js";import"./UserIcon-CtiZzZ2X.js";import"./UsersIcon-BT-W7sF-.js";import"./UserGroupIcon-CWdxV-oE.js";import"./CommandLineIcon-BD5MFUQg.js";import"./ClipboardDocumentListIcon-CjFMn6dO.js";import"./ClipboardDocumentCheckIcon-k7_FGCzy.js";import"./CpuChipIcon-BBHeqCE_.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-BuiD5gzs.js";import"./index-ZhWAdK_X.js";import"./index-DnaDt85i.js";import"./index-D5zH4fN4.js";import"./index-CPNNQ3fD.js";import"./index-CFtktJtS.js";import"./index-ByOVh7y-.js";import"./index-DUWomeF_.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-DY4Fqf02.js";import"./index-Br2-aBVM.js";import"./Square2StackIcon-BONc7SRo.js";import"./ArrowRightIcon-CebixEfQ.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./index-DyQWyx6D.js";import"./index-Brczh--H.js";import"./index-DL1Pt7bO.js";import"./index-gSNiAAF9.js";import"./index-BQabsSYQ.js";import"./ChevronRightIcon-RLkhG38k.js";import"./index-C9g0vWw9.js";import"./index-BiLRIlNb.js";import"./index-BEZ2S-VF.js";import"./index-CO-G9M_W.js";import"./Dropdown.vue-BvGCjloM.js";import"./index-CjiEPaTZ.js";import"./EllipsisHorizontalIcon-CpSAr9zQ.js";import"./BasePageLayout.vue-DVNcPgxb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-Do_p2hLC.js";import"./PencilSquareIcon-DxXATT4Q.js";import"./CheckIcon-Cki03Z-0.js";import"./AiAgentButton.vue-BwR0d7yG.js";import"./ArrowLeftIcon-BrTKOOsg.js";import"./FlagIcon-CcLmoULS.js";import"./DocumentIcon-BB7-M64P.js";import"./CloudArrowUpIcon-CRE54MAg.js";const b=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],C="MDM Custom Configuration Profile",P="",y=!0,se=".mobileconfig",re="Distribute custom MDM configuration profiles using this policy. Profiles can be exported from tools like Apple Configurator or ProfileCreator and then uploaded as .mobileconfig files. ",ne="Applies the provided .mobileconfig configuration to the device using the MDM protocol.",pe="You must set up an Apple MDM Certificate before this policy takes effect.",me=`<?xml version="1.0" encoding="UTF-8"?>
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
