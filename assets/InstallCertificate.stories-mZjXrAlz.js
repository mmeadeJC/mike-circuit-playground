import{usePolicyMigrationBackNavigation as O}from"./storybookPolicyMigrationNav-CbmoKHq2.js";import{d as D,q as F,m as w,r as t,k as u}from"./iframe-DnhA1Jsm.js";import{s as A}from"./index-BNbdGjQ1.js";import{s as L}from"./index-DKDggJZ4.js";import{s as R}from"./index-C6XQ6gRS.js";import{s as M}from"./index-DmFuCnyO.js";import{s as k}from"./index-2F2whbl-.js";import{s as B}from"./index-d5NeXY8j.js";import{_ as $}from"./CollapsiblePanel.vue-BnTrlRAQ.js";import"./RichText.vue-BuoexALv.js";import{_ as Y}from"./LinkText.vue-h4sX1MNH.js";import{_ as U}from"./FormField.vue-mRh6rdEv.js";import{_ as V}from"./AppNavigation.vue-DXF6GQeF.js";import{_ as H}from"./PageHeader.vue-CiTv7gPo.js";import{_ as W}from"./DetailPageLayout.vue-5pqx_T5L.js";import{P as q}from"./PageSaveBar.vue-Df1KIaOR.js";import{_ as z}from"./AdminTopBar-Qju5lV3M.js";import{_ as j}from"./CircuitFileUpload-BUeww2wT.js";import{p as G,m as X}from"./policyMigrationMenuItems-B_KnQqbi.js";import{r as J}from"./ArrowTopRightOnSquareIcon-Ckxu5vwN.js";import{r as K}from"./InformationCircleIcon-CLlN2oSo.js";import{r as Q}from"./Cog6ToothIcon-CUj-fz1K.js";import{r as Z}from"./ComputerDesktopIcon-D5Fshv-K.js";import{r as v}from"./ShieldCheckIcon-G-yjo0m6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuIWmi4D.js";import"./VaultIcon-BREb5UXY.js";import"./ArrowRightStartOnRectangleIcon-C5SXaVic.js";import"./RocketLaunchIcon-Cg97E9Fb.js";import"./HomeIcon-BdJrXd2e.js";import"./UserIcon-LyJC13E2.js";import"./UsersIcon-BgQFsP7F.js";import"./UserGroupIcon-BLOMZMFj.js";import"./CommandLineIcon-Cd6VMgHQ.js";import"./ClipboardDocumentListIcon-BS5yXvdP.js";import"./ClipboardDocumentCheckIcon-CNnPmtk7.js";import"./CpuChipIcon-CuTYvC40.js";import"./index-lNUZEIRs.js";import"./index-DtpEFz2i.js";import"./index-DwERWXoD.js";import"./index-BugbG7pm.js";import"./index-ZhWAdK_X.js";import"./index-B5xbJtC5.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-DNm818yJ.js";import"./index-DSiULD1o.js";import"./index-Ch682guI.js";import"./index-l3Tk4em_.js";import"./index-BI9VwZ0A.js";import"./index-C3dwEfyt.js";import"./index-BFiFYGtt.js";import"./index-Dkdx5MdW.js";import"./index-DA6MtJit.js";import"./index-BIrxIukW.js";import"./ArrowRightIcon-18DcXMgP.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./index-DjWZZQ6o.js";import"./index-DYw0Q7A3.js";import"./index-7Fm2NweX.js";import"./ChevronRightIcon-CdbfjCjO.js";import"./index-BoSNPNXO.js";import"./index-Ct7FBQ5C.js";import"./index-BWWQO6Z8.js";import"./index-SGyjFKB5.js";import"./Dropdown.vue-CDAwy3e-.js";import"./EllipsisHorizontalIcon-D7_lMGYU.js";import"./BasePageLayout.vue-DLwZijeP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-DkP69mYD.js";import"./PencilSquareIcon-Bez5HNT-.js";import"./CheckIcon-CdA1wLor.js";import"./AiAgentButton.vue-Bm39XAqR.js";import"./ArrowLeftIcon-VPDFahz-.js";import"./FlagIcon-DCH0qEhv.js";import"./DocumentIcon-cJz5qgub.js";import"./CloudArrowUpIcon-C9ofDZB-.js";const f=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],b="Install Certificate",T="",I="ROOT",x="",ee=[{label:"ROOT",value:"ROOT"},{label:"CA",value:"CA"},{label:"MY",value:"MY"},{label:"SYSTEM",value:"SYSTEM"}],te="This policy allows deploying and updating of various types of certificates for secure access to internal organization resources. Accepted extensions: .cer, .pem, .p12, .der and .crt. ",ae="Devices must be enrolled in Windows MDM to use this policy.",ie="No action is needed for the policy to be activated.",le="Windows 10 version 1511 (10.0.10586) or later",oe=["Pro","Enterprise","Education","Windows SE","IoT Enterprise","IoT Enterprise LTSC"],se=".cer,.pem,.p12,.der,.crt",re="cer, pem, p12, der, crt",ce=D({name:"InstallCertificatePage",components:{AppNavigation:V,PageHeader:H,CollapsiblePanel:$,FormField:U,LinkText:Y,DetailPageLayout:W,PageSaveBar:q,TopBar:z,CircuitFileUpload:j,PvButton:A,PvTag:M,PvInputText:L,PvTextarea:B,PvSelect:R,PvDivider:k,ShieldCheckIcon:v,ComputerDesktopIcon:Z,Cog6ToothIcon:Q,InformationCircleIcon:K,ArrowTopRightOnSquareIcon:J},setup(){const{goBack:g,backButtonLabel:C}=O("/install-certificate"),m=t("details"),l=t(b),o=t(T),s=t(I),r=t(x),c=t(null),e=t({policyName:b,policyNotes:T,certificateType:I,certThumbprint:x,uploadedFileName:null}),n=t(!1),i=t(!1),d=u(()=>l.value!==e.value.policyName||o.value!==e.value.policyNotes||s.value!==e.value.certificateType||r.value!==e.value.certThumbprint||c.value!==e.value.uploadedFileName);F(d,a=>{a&&(i.value=!1)});const _=u(()=>{var a;return((a=f.find(S=>S.value===m.value))==null?void 0:a.label)??"Details"});function E(){l.value=e.value.policyName,o.value=e.value.policyNotes,s.value=e.value.certificateType,r.value=e.value.certThumbprint,c.value=e.value.uploadedFileName,i.value=!1}async function N(){n.value=!0,await new Promise(a=>setTimeout(a,600)),e.value={policyName:l.value,policyNotes:o.value,certificateType:s.value,certThumbprint:r.value,uploadedFileName:c.value},n.value=!1,i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return{menuItems:X,profileMenuItems:G,detailTabs:f,activeTab:m,activeTabLabel:_,policyName:l,policyNotes:o,certificateType:s,certThumbprint:r,uploadedFileName:c,certificateTypeOptions:ee,POLICY_DESCRIPTION_LEAD:te,POLICY_BEHAVIOR:ae,POLICY_ACTIVATION:ie,MINIMUM_SUPPORTED_VERSION:le,SUPPORTED_EDITIONS:oe,ACCEPTED_CERTIFICATE_EXTENSIONS:se,SUPPORTED_CERTIFICATE_FORMATS:re,isDirty:d,isSaving:n,showSavedConfirmation:i,handleDiscard:E,handleSave:N,goBack:g,backButtonLabel:C,shieldIcon:w(v)}},template:`
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
          title="Install Certificate"
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
            <div class="flex flex-col gap-md">
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
                  <FormField label="Certificate Type">
                    <template #default="{ inputId }">
                      <PvSelect
                        :id="inputId"
                        v-model="certificateType"
                        :options="certificateTypeOptions"
                        optionLabel="label"
                        optionValue="value"
                        class="w-full!"
                      />
                    </template>
                  </FormField>

                  <FormField
                    label="Cert Thumbprint"
                    label-tooltip="The SHA-1 thumbprint of the certificate to install."
                  >
                    <template #default="{ inputId }">
                      <PvInputText
                        :id="inputId"
                        v-model="certThumbprint"
                        class="w-full"
                      />
                    </template>
                  </FormField>

                  <FormField
                    label="Base64-Encoded Certificate"
                    label-tooltip="Upload a certificate file. Accepted extensions: .cer, .pem, .p12, .der, and .crt."
                  >
                    <template #default>
                      <CircuitFileUpload
                        v-model="uploadedFileName"
                        :accept="ACCEPTED_CERTIFICATE_EXTENSIONS"
                        :supported-formats="SUPPORTED_CERTIFICATE_FORMATS"
                      />
                    </template>
                  </FormField>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
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
  `}),Lt={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Install Certificate",component:ce,parameters:{layout:"fullscreen"}},p={};var P,h,y;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(y=(h=p.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const Rt=["InstallCertificatePage","Default"];export{p as Default,ce as InstallCertificatePage,Rt as __namedExportsOrder,Lt as default};
