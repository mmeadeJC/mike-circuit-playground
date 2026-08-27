import{u as Y}from"./storybookPolicyMigrationNav-CaA9lteq.js";import{d as G,v as W,r as i,q as H,m as q,k as y}from"./iframe-D7BbHDbG.js";import{s as j}from"./index-BKr2PyJj.js";import{s as J}from"./index-DCVTeUli.js";import{s as K}from"./index-XbhyUeFS.js";import{s as Q,a as X}from"./index-CiXhdmRB.js";import{s as Z}from"./index-CUoDpPp7.js";import{s as ee}from"./index-D-Q9u-0k.js";import{s as te}from"./index-C2zOs5JV.js";import{_ as ie}from"./CollapsiblePanel.vue-Cecxp7w6.js";import"./RichText.vue-1XZLRn0K.js";import{_ as le}from"./LinkText.vue-CWhhAGQ4.js";import{_ as ae}from"./FormField.vue-BiV6ZEgt.js";import{_ as oe}from"./MessageNotification.vue-CXd-EBo7.js";import{_ as se}from"./AppNavigation.vue-BO4jtGC6.js";import{_ as ne}from"./PageHeader.vue-0YQpSj3p.js";import{_ as re}from"./DetailPageLayout.vue-fJW-VyeZ.js";import{P as pe}from"./PageSaveBar.vue-DsoLE5OD.js";import{_ as ce}from"./AdminTopBar-Chx_4VGs.js";import{p as me,m as de}from"./policyMigrationMenuItems-DFmOS9T4.js";import{r as ue}from"./PlusIcon-B94kIdrt.js";import{r as ve}from"./TrashIcon-zSr6WN2U.js";import{r as fe}from"./ChevronRightIcon-BrFzWSch.js";import{r as he}from"./ComputerDesktopIcon-BY-6jc1E.js";import{r as F}from"./ShieldCheckIcon-BY_KE66K.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5dj8dpAI.js";import"./index-BKtZXsJ2.js";import"./index-oNdbppoo.js";import"./index-BCWryaxY.js";import"./index-ZhWAdK_X.js";import"./index-1reqc7Wl.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-BaidBBYU.js";import"./index-D1TpkbyC.js";import"./index-BHG3Q-Ws.js";import"./index-0gxlrFf7.js";import"./index-DSpYqzCj.js";import"./index-BDr-K8Vc.js";import"./index-Z_Cch3ng.js";import"./index-bbso60R8.js";import"./index-DFQPCZRe.js";import"./ArrowRightIcon-BCpGJgPW.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";import"./index-CkmisnA9.js";import"./FlagIcon-BljeC-Dg.js";import"./index-DdqW2O0M.js";import"./index-pQFxUuf4.js";import"./index-DopepIUV.js";import"./index-BVixZLR4.js";import"./index-CLbTpqPL.js";import"./index-CA7vwr87.js";import"./index-DP0gcRj_.js";import"./Dropdown.vue-D2xWW_V3.js";import"./EllipsisHorizontalIcon-Dlw4O3VD.js";import"./BasePageLayout.vue-Dr0I8sc2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-D49SELwj.js";import"./PencilSquareIcon-DdOkIHmm.js";import"./CheckIcon-DNEDYMqg.js";import"./index-CKmPII1G.js";import"./AiAgentButton.vue-DoZHtGB6.js";import"./ArrowLeftIcon-BcjWK0Vo.js";import"./VaultIcon-qdBx7DKE.js";import"./ArrowRightStartOnRectangleIcon-B91pfFJz.js";import"./ArrowTopRightOnSquareIcon-_aQH2B8X.js";import"./RocketLaunchIcon-BIuD1oEk.js";import"./HomeIcon-XZc1Dfyu.js";import"./UserIcon-DRjp4_6R.js";import"./UsersIcon-BbZ6Qpdm.js";import"./UserGroupIcon-Ctmauh4_.js";import"./CommandLineIcon-CWVZZFIo.js";import"./ClipboardDocumentListIcon-DLWg2TFY.js";import"./ClipboardDocumentCheckIcon-B9tp8omi.js";import"./CpuChipIcon-BPQeLsIA.js";import"./Cog6ToothIcon-DbA3VXm8.js";const S=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],Pe=[{label:"Run",value:"run"},{label:"Block",value:"block"}];let N=2,T=2;function be(){const e={id:N,vendorName:"",productName:"",binaryName:"",editPreference:"run"};return N+=1,e}function Ie(){const e={id:T,path:""};return T+=1,e}const w="Application Restriction",C="",d={inlineAppsSearch:"",fileDimensions:[{id:1,vendorName:"",productName:"",binaryName:"",editPreference:"run"}],filePaths:[{id:1,path:""}],storeAppsSearch:""},ge="This policy restricts application execution from common locations on Windows devices. Use it to block specific inline apps, file dimensions, file paths, or Microsoft Store apps from running.",xe="Users are blocked from accessing applications and components included in the policy list.",ye="The policy takes effect upon the next device check-in after it is applied.",Fe="Windows 10 version 1809 (10.0.17763) or later",Se=["Pro","Enterprise","Enterprise LTSC","Education","Windows SE","IoT Enterprise","IoT Enterprise LTSC"];function I(e){return e.map(l=>({...l}))}function g(e){return e.map(l=>({...l}))}function D(e){return{inlineAppsSearch:e.inlineAppsSearch,fileDimensions:I(e.fileDimensions),filePaths:g(e.filePaths),storeAppsSearch:e.storeAppsSearch}}function Ne(e,l){return e.length!==l.length?!1:e.every((s,p)=>{const r=l[p];return s.vendorName===r.vendorName&&s.productName===r.productName&&s.binaryName===r.binaryName&&s.editPreference===r.editPreference})}function Te(e,l){return e.length!==l.length?!1:e.every((s,p)=>s.path===l[p].path)}const we=G({name:"ApplicationRestrictionPage",components:{AppNavigation:se,PageHeader:ne,CollapsiblePanel:ie,FormField:ae,LinkText:le,MessageNotification:oe,DetailPageLayout:re,PageSaveBar:pe,TopBar:ce,PvButton:j,PvTag:Z,PvInputText:J,PvTextarea:te,PvSelect:K,PvIconField:X,PvInputIcon:Q,PvDivider:ee,ShieldCheckIcon:F,ComputerDesktopIcon:he,ChevronRightIcon:fe,MagnifyingGlassIcon:W,TrashIcon:ve,PlusIcon:ue},setup(){const{goBack:e,backButtonLabel:l}=Y("/application-restriction"),s=i("details"),p=i(!1),r=i(!1),B=i(!1),E=i(!1),u=i(w),v=i(C),f=i(d.inlineAppsSearch),a=i(I(d.fileDimensions)),o=i(g(d.filePaths)),h=i(d.storeAppsSearch),n=i({policyName:w,policyNotes:C,settings:D(d)}),b=i(!1),c=i(!1),x=y(()=>{if(u.value!==n.value.policyName||v.value!==n.value.policyNotes)return!0;const t=n.value.settings;return f.value!==t.inlineAppsSearch||h.value!==t.storeAppsSearch||!Ne(a.value,t.fileDimensions)||!Te(o.value,t.filePaths)});H(x,t=>{t&&(c.value=!1)});const O=y(()=>{var t;return((t=S.find(m=>m.value===s.value))==null?void 0:t.label)??"Details"});function R(){a.value=[...a.value,be()]}function L(t){if(a.value.length<=1){a.value=[{...a.value[0],vendorName:"",productName:"",binaryName:"",editPreference:"run"}];return}a.value=a.value.filter(m=>m.id!==t)}function M(){o.value=[...o.value,Ie()]}function $(t){if(o.value.length<=1){o.value=[{...o.value[0],path:""}];return}o.value=o.value.filter(m=>m.id!==t)}function z(t){f.value=t.inlineAppsSearch,h.value=t.storeAppsSearch,a.value=I(t.fileDimensions),o.value=g(t.filePaths)}function U(){u.value=n.value.policyName,v.value=n.value.policyNotes,z(n.value.settings),c.value=!1}async function V(){b.value=!0,await new Promise(t=>setTimeout(t,600)),n.value={policyName:u.value,policyNotes:v.value,settings:D({inlineAppsSearch:f.value,fileDimensions:a.value,filePaths:o.value,storeAppsSearch:h.value})},b.value=!1,c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return{menuItems:de,profileMenuItems:me,detailTabs:S,activeTab:s,activeTabLabel:O,inlineAppsCollapsed:p,fileDimensionsCollapsed:r,filePathsCollapsed:B,storeAppsCollapsed:E,policyName:u,policyNotes:v,inlineAppsSearch:f,fileDimensions:a,filePaths:o,storeAppsSearch:h,editPreferenceOptions:Pe,POLICY_DESCRIPTION:ge,POLICY_BEHAVIOR:xe,POLICY_ACTIVATION:ye,MINIMUM_SUPPORTED_VERSION:Fe,SUPPORTED_EDITIONS:Se,isDirty:x,isSaving:b,showSavedConfirmation:c,addFileDimension:R,removeFileDimension:L,addFilePath:M,removeFilePath:$,handleDiscard:U,handleSave:V,goBack:e,backButtonLabel:l,shieldIcon:q(F)}},template:`
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
          title="Application Restriction"
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
                Configure the policy below, then select the target groups and devices to apply it.
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
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_DESCRIPTION }}</p>
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

              <CollapsiblePanel
                v-model:collapsed="inlineAppsCollapsed"
                toggleable
                header="Blocked Inline Apps &amp; Components"
              >
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <FormField
                  label="Search Inline Apps &amp; Components"
                  label-tooltip="Search for inline apps and components to block."
                >
                  <template #default="{ inputId }">
                    <PvIconField>
                      <PvInputIcon>
                        <MagnifyingGlassIcon />
                      </PvInputIcon>
                      <PvInputText
                        :id="inputId"
                        v-model="inlineAppsSearch"
                        placeholder="Search"
                        class="w-full"
                      />
                    </PvIconField>
                  </template>
                </FormField>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="fileDimensionsCollapsed"
                toggleable
                header="Blocked File Dimensions"
              >
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <FormField
                  label="Add File Dimensions"
                  label-tooltip="Add vendor, product, and binary name dimensions to block matching applications."
                >
                  <template #default>
                    <div class="flex flex-col gap-md">
                      <div
                        v-for="row in fileDimensions"
                        :key="row.id"
                        class="flex items-start gap-sm"
                      >
                        <div class="grid flex-1 min-w-0 grid-cols-1 gap-md md:grid-cols-4">
                          <FormField label="Vendor Name">
                            <template #default="{ inputId }">
                              <PvInputText
                                :id="inputId"
                                v-model="row.vendorName"
                                class="w-full"
                              />
                            </template>
                          </FormField>

                          <FormField label="Product Name">
                            <template #default="{ inputId }">
                              <PvInputText
                                :id="inputId"
                                v-model="row.productName"
                                class="w-full"
                              />
                            </template>
                          </FormField>

                          <FormField label="Binary Name">
                            <template #default="{ inputId }">
                              <PvInputText
                                :id="inputId"
                                v-model="row.binaryName"
                                class="w-full"
                              />
                            </template>
                          </FormField>

                          <FormField
                            label="Edit Preference"
                            label-tooltip="Choose whether matching binaries are allowed to run or blocked."
                          >
                            <template #default="{ inputId }">
                              <PvSelect
                                :id="inputId"
                                v-model="row.editPreference"
                                :options="editPreferenceOptions"
                                optionLabel="label"
                                optionValue="value"
                                class="w-full!"
                              />
                            </template>
                          </FormField>
                        </div>

                        <div class="flex items-center gap-xs pt-7 shrink-0">
                          <PvButton
                            severity="secondary"
                            variant="text"
                            size="small"
                            aria-label="Delete file dimension"
                            @click="removeFileDimension(row.id)"
                          >
                            <template #icon>
                              <TrashIcon class="size-4" />
                            </template>
                          </PvButton>
                          <PvButton
                            severity="secondary"
                            variant="text"
                            size="small"
                            aria-label="Add file dimension"
                            @click="addFileDimension"
                          >
                            <template #icon>
                              <PlusIcon class="size-4" />
                            </template>
                          </PvButton>
                        </div>
                      </div>
                    </div>
                  </template>
                </FormField>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="filePathsCollapsed"
                toggleable
                header="Blocked File Paths"
              >
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <div
                    v-for="row in filePaths"
                    :key="row.id"
                    class="flex items-start gap-sm"
                  >
                    <FormField
                      label="File Path"
                      label-tooltip="Enter a file path to block."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="row.path"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <div class="flex items-center gap-xs pt-7 shrink-0">
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Delete file path"
                        @click="removeFilePath(row.id)"
                      >
                        <template #icon>
                          <TrashIcon class="size-4" />
                        </template>
                      </PvButton>
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Add file path"
                        @click="addFilePath"
                      >
                        <template #icon>
                          <PlusIcon class="size-4" />
                        </template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="storeAppsCollapsed"
                toggleable
                header="Blocked Microsoft Store Apps"
              >
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <FormField
                  label="Search Microsoft Store Apps"
                  label-tooltip="Search for Microsoft Store apps to block."
                >
                  <template #default="{ inputId }">
                    <PvIconField>
                      <PvInputIcon>
                        <MagnifyingGlassIcon />
                      </PvInputIcon>
                      <PvInputText
                        :id="inputId"
                        v-model="storeAppsSearch"
                        placeholder="Search"
                        class="w-full"
                      />
                    </PvIconField>
                  </template>
                </FormField>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <MessageNotification
                  severity="info"
                  detail="Updates to Windows policies are now available."
                />

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
  `}),ei={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Application Restriction",component:we,parameters:{layout:"fullscreen"}},P={};var A,_,k;P.parameters={...P.parameters,docs:{...(A=P.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(k=(_=P.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ti=["ApplicationRestrictionPage","Default"];export{we as ApplicationRestrictionPage,P as Default,ti as __namedExportsOrder,ei as default};
