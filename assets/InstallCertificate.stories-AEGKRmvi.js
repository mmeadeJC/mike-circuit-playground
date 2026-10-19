import{usePolicyMigrationBackNavigation as O}from"./storybookPolicyMigrationNav-B4wHo3jn.js";import{d as D,q as F,m as w,r as t,k as u}from"./iframe-CJNlUSJO.js";import{s as A}from"./index-CzaTbvQ5.js";import{s as L}from"./index-DqMC5tMH.js";import{s as R}from"./index-CK3JQGnr.js";import{s as M}from"./index-G7cLCde7.js";import{s as k}from"./index-87h8nido.js";import{s as B}from"./index-Dv8f6L-g.js";import{_ as $}from"./CollapsiblePanel.vue-D5yOAVdx.js";import"./RichText.vue-CLPxRa2P.js";import{_ as Y}from"./LinkText.vue-DQgZAyU0.js";import{_ as U}from"./FormField.vue-DokXCbml.js";import{_ as V}from"./AppNavigation.vue-DcH97lTt.js";import{_ as H}from"./PageHeader.vue-DhJ1GZXF.js";import{_ as W}from"./DetailPageLayout.vue-BYXPj0P7.js";import{P as q}from"./PageSaveBar.vue-ZkzgRMby.js";import{_ as z}from"./AdminTopBar-BIysc9Tr.js";import{_ as j}from"./CircuitFileUpload-CmPZGV5a.js";import{p as G,m as X}from"./policyMigrationMenuItems-D8o9gxah.js";import{r as J}from"./ArrowTopRightOnSquareIcon-Cd_6qSPk.js";import{r as K}from"./InformationCircleIcon-Dnjq95z-.js";import{r as Q}from"./Cog6ToothIcon-BCMOD4VN.js";import{r as Z}from"./ComputerDesktopIcon-D92IkDNz.js";import{r as v}from"./ShieldCheckIcon-BkfH9kvS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bb-Am5iU.js";import"./VaultIcon-0yVqGDWj.js";import"./ArrowRightStartOnRectangleIcon-CLCUEpzv.js";import"./RocketLaunchIcon-MP9dRmf5.js";import"./HomeIcon-DGihxR32.js";import"./UserIcon-B9-rHRsZ.js";import"./UsersIcon-oaPeND-z.js";import"./UserGroupIcon-C-0WA-Ss.js";import"./CommandLineIcon-BlUqAMc5.js";import"./ClipboardDocumentListIcon-HkPtUXlJ.js";import"./ClipboardDocumentCheckIcon-DA2PjPuu.js";import"./CpuChipIcon-7isR4Woi.js";import"./index-BP13dlUd.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-C_WDvV0g.js";import"./index-ZhWAdK_X.js";import"./index-AIzoT1ks.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-BBDD1QfU.js";import"./index-TgrN5p_g.js";import"./index-CtMg5eIS.js";import"./index-Do-nvtb2.js";import"./index-DNoP2_Hj.js";import"./index-DMJeGYfZ.js";import"./index-B_P4GBGL.js";import"./index-CpbR1NxB.js";import"./index-CMPzMs76.js";import"./index-BMQpWRRD.js";import"./ArrowRightIcon-Ba2_8xNw.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./index-Cy2jNuCI.js";import"./index-Dzg4DU0m.js";import"./index-4T4mPLxV.js";import"./ChevronRightIcon-9Bjzgkk8.js";import"./index-B0m5ICal.js";import"./index-Dsw3nu2T.js";import"./index--qYgJinF.js";import"./index-Dw453XQ1.js";import"./Dropdown.vue-C4EK6U1h.js";import"./EllipsisHorizontalIcon-CReXKJ2c.js";import"./BasePageLayout.vue-BfMxOwFg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-B_1ygOmR.js";import"./PencilSquareIcon-C2zE7SZM.js";import"./CheckIcon-CnYI-wva.js";import"./AiAgentButton.vue-BVYZC-a5.js";import"./ArrowLeftIcon-ZppuD48h.js";import"./FlagIcon-xEoXMcNx.js";import"./DocumentIcon-CgDk-DhW.js";import"./CloudArrowUpIcon-CvwTi-OQ.js";const f=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],b="Install Certificate",T="",I="ROOT",x="",ee=[{label:"ROOT",value:"ROOT"},{label:"CA",value:"CA"},{label:"MY",value:"MY"},{label:"SYSTEM",value:"SYSTEM"}],te="This policy allows deploying and updating of various types of certificates for secure access to internal organization resources. Accepted extensions: .cer, .pem, .p12, .der and .crt. ",ae="Devices must be enrolled in Windows MDM to use this policy.",ie="No action is needed for the policy to be activated.",le="Windows 10 version 1511 (10.0.10586) or later",oe=["Pro","Enterprise","Education","Windows SE","IoT Enterprise","IoT Enterprise LTSC"],se=".cer,.pem,.p12,.der,.crt",re="cer, pem, p12, der, crt",ce=D({name:"InstallCertificatePage",components:{AppNavigation:V,PageHeader:H,CollapsiblePanel:$,FormField:U,LinkText:Y,DetailPageLayout:W,PageSaveBar:q,TopBar:z,CircuitFileUpload:j,PvButton:A,PvTag:M,PvInputText:L,PvTextarea:B,PvSelect:R,PvDivider:k,ShieldCheckIcon:v,ComputerDesktopIcon:Z,Cog6ToothIcon:Q,InformationCircleIcon:K,ArrowTopRightOnSquareIcon:J},setup(){const{goBack:g,backButtonLabel:C}=O("/install-certificate"),m=t("details"),l=t(b),o=t(T),s=t(I),r=t(x),c=t(null),e=t({policyName:b,policyNotes:T,certificateType:I,certThumbprint:x,uploadedFileName:null}),n=t(!1),i=t(!1),d=u(()=>l.value!==e.value.policyName||o.value!==e.value.policyNotes||s.value!==e.value.certificateType||r.value!==e.value.certThumbprint||c.value!==e.value.uploadedFileName);F(d,a=>{a&&(i.value=!1)});const _=u(()=>{var a;return((a=f.find(S=>S.value===m.value))==null?void 0:a.label)??"Details"});function E(){l.value=e.value.policyName,o.value=e.value.policyNotes,s.value=e.value.certificateType,r.value=e.value.certThumbprint,c.value=e.value.uploadedFileName,i.value=!1}async function N(){n.value=!0,await new Promise(a=>setTimeout(a,600)),e.value={policyName:l.value,policyNotes:o.value,certificateType:s.value,certThumbprint:r.value,uploadedFileName:c.value},n.value=!1,i.value=!0,setTimeout(()=>{i.value=!1},2e3)}return{menuItems:X,profileMenuItems:G,detailTabs:f,activeTab:m,activeTabLabel:_,policyName:l,policyNotes:o,certificateType:s,certThumbprint:r,uploadedFileName:c,certificateTypeOptions:ee,POLICY_DESCRIPTION_LEAD:te,POLICY_BEHAVIOR:ae,POLICY_ACTIVATION:ie,MINIMUM_SUPPORTED_VERSION:le,SUPPORTED_EDITIONS:oe,ACCEPTED_CERTIFICATE_EXTENSIONS:se,SUPPORTED_CERTIFICATE_FORMATS:re,isDirty:d,isSaving:n,showSavedConfirmation:i,handleDiscard:E,handleSave:N,goBack:g,backButtonLabel:C,shieldIcon:w(v)}},template:`
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
