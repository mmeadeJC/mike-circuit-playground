import{usePolicyMigrationBackNavigation as A}from"./storybookPolicyMigrationNav-CpsoCc-v.js";import{d as D,r as s,q as B,m as E,k as h}from"./iframe-8Q3g4suX.js";import{s as O}from"./index-BdLVtuk9.js";import{s as W}from"./index-CkKvLbcv.js";import{s as F}from"./index-BEvLtaLX.js";import{s as $}from"./index-cFQtYIhg.js";import{s as R}from"./index-dop1ZQf9.js";import{_ as H}from"./CheckboxWithLabel.vue-D_gLbPG2.js";import{_ as V}from"./CollapsiblePanel.vue-CmNp5iUc.js";import"./RichText.vue-C1Ty82RV.js";import{_ as U}from"./LinkText.vue-DvAjr8lK.js";import{_ as Y}from"./FormField.vue-DPg-U9jM.js";import{_ as z}from"./MessageNotification.vue-Cpg8Rucu.js";import{_ as K}from"./AppNavigation.vue-DywdLFt4.js";import{_ as j}from"./PageHeader.vue-COzcmwfr.js";import{_ as q}from"./DetailPageLayout.vue-DTAsiTuY.js";import{P as G}from"./PageSaveBar.vue-D2eZ_K1C.js";import{_ as J}from"./AdminTopBar-Ck-Dv7za.js";import{p as Q,m as X}from"./policyMigrationMenuItems-D670dAGr.js";import{r as Z}from"./TrashIcon-Batrj4xL.js";import{r as ee}from"./PlusIcon-BstNSs7l.js";import{r as te}from"./InformationCircleIcon-ozw6Xz0u.js";import{r as ae}from"./Cog6ToothIcon-cxmEYFc7.js";import{r as oe}from"./ComputerDesktopIcon-DDj9bIO2.js";import{r as x}from"./ShieldCheckIcon-W0AJus9F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPUoOQbX.js";import"./VaultIcon-DvFqgId8.js";import"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import"./RocketLaunchIcon-BJK4NMZ4.js";import"./HomeIcon-yFRUSV7Z.js";import"./UserIcon-ShjzaHpT.js";import"./UsersIcon-Z2ifx08k.js";import"./UserGroupIcon-Ciz8NLc5.js";import"./CommandLineIcon-4Js_OSQE.js";import"./ClipboardDocumentListIcon-CnTg33RY.js";import"./ClipboardDocumentCheckIcon--weNKert.js";import"./CpuChipIcon-DVt0p-5v.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-B6YgWt2p.js";import"./index-MzEPBPaO.js";import"./index-C19gJH8S.js";import"./index-M73h-aNz.js";import"./index-BMCZJFM3.js";import"./ArrowRightIcon-BXY2Zswv.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./index-CXQWPAyu.js";import"./index-DRA9vNfv.js";import"./FlagIcon-CTBX6-CL.js";import"./index-DirUApOz.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-C6vF-uE7.js";import"./index-MkGR21B_.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./index-Rn1cm77L.js";import"./index-MAZOfW6J.js";import"./index-CZrXZwQy.js";import"./index-NkGFgNPM.js";import"./Dropdown.vue-CKApLVqP.js";import"./index-Us1_uPk3.js";import"./EllipsisHorizontalIcon-DtE3Bb7n.js";import"./BasePageLayout.vue-CwV5cDx0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-Bc2j6_Ia.js";import"./PencilSquareIcon-CZ923cNI.js";import"./CheckIcon-Mq2NBLaA.js";import"./AiAgentButton.vue-hSAdW1Kt.js";import"./ArrowLeftIcon-CzirQB4t.js";const g=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],I="Bluetooth Configuration",y="",P={allowBluetoothAdvertising:!0,allowDiscoveryMode:!0,allowPrepairing:!0,handsFreeProfile:!0,audioHeadsetsMono:!0,audioHeadsetsAndSpeakers:!0,classicKeyboardsAndMice:!0,leKeyboardsAndMice:!0,fileTransfer:!0},C=[{id:1,serviceName:"",uuidNumber:""}],ie="This policy configures Bluetooth restrictions for Windows 10 and 11 devices.",le="Devices must be enrolled in Windows MDM to use this policy.",se="No action is needed to activate this policy.",re="Windows 10, Version 1507 (10.0.10240) and above or later",ne=["Pro","Enterprise","Education","Windows SE","IoT Enterprise","IoT Enterprise LTSC"];function u(t){return{...t}}function ce(t,r){return Object.keys(t).every(i=>t[i]===r[i])}function me(t,r){return t.length!==r.length?!1:t.every((i,n)=>{const l=r[n];return l?i.serviceName===l.serviceName&&i.uuidNumber===l.uuidNumber:!1})}const ue=D({name:"BluetoothConfigurationPage",components:{AppNavigation:K,PageHeader:j,CollapsiblePanel:V,FormField:Y,CheckboxWithLabel:H,LinkText:U,MessageNotification:z,DetailPageLayout:q,PageSaveBar:G,TopBar:J,PvButton:O,PvTag:F,PvInputText:W,PvTextarea:R,PvDivider:$,ShieldCheckIcon:x,ComputerDesktopIcon:oe,Cog6ToothIcon:ae,InformationCircleIcon:te,PlusIcon:ee,TrashIcon:Z},setup(){const{goBack:t,backButtonLabel:r}=A("/bluetooth-configuration"),i=s("details"),n=s(I),l=s(y),m=s(u(P)),a=s(C.map(e=>({...e}))),o=s({policyName:I,policyNotes:y,settings:u(P),customServices:C.map(e=>({...e}))}),d=s(!1),c=s(!1);let b=2;const f=h(()=>n.value!==o.value.policyName||l.value!==o.value.policyNotes||!ce(m.value,o.value.settings)?!0:!me(a.value,o.value.customServices));B(f,e=>{e&&(c.value=!1)});const S=h(()=>{var e;return((e=g.find(v=>v.value===i.value))==null?void 0:e.label)??"Details"});function k(){a.value.push({id:b++,serviceName:"",uuidNumber:""})}function _(e){if(a.value.length<=1){a.value=[{id:b++,serviceName:"",uuidNumber:""}];return}a.value=a.value.filter(v=>v.id!==e)}function L(){n.value=o.value.policyName,l.value=o.value.policyNotes,m.value=u(o.value.settings),a.value=o.value.customServices.map(e=>({...e})),c.value=!1}async function M(){d.value=!0,await new Promise(e=>setTimeout(e,600)),o.value={policyName:n.value,policyNotes:l.value,settings:u(m.value),customServices:a.value.map(e=>({...e}))},d.value=!1,c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return{menuItems:X,profileMenuItems:Q,detailTabs:g,activeTab:i,activeTabLabel:S,policyName:n,policyNotes:l,settings:m,customServices:a,POLICY_DESCRIPTION:ie,POLICY_BEHAVIOR:le,POLICY_ACTIVATION:se,MINIMUM_SUPPORTED_VERSION:re,SUPPORTED_EDITIONS:ne,isDirty:f,isSaving:d,showSavedConfirmation:c,addCustomService:k,removeCustomService:_,handleDiscard:L,handleSave:M,goBack:t,backButtonLabel:r,shieldIcon:E(x)}},template:`
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
          title="Bluetooth Configuration"
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

              <CollapsiblePanel header="Settings">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <CheckboxWithLabel
                    v-model="settings.allowBluetoothAdvertising"
                    inputId="bluetooth-advertising"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Allow Bluetooth Advertising</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about Allow Bluetooth Advertising"
                          v-tooltip.top="'Allow the device to advertise over Bluetooth.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="settings.allowDiscoveryMode"
                    inputId="bluetooth-discovery"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Allow Discovery Mode</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about Allow Discovery Mode"
                          v-tooltip.top="'Allow the device to be discoverable by other Bluetooth devices.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="settings.allowPrepairing"
                    inputId="bluetooth-prepairing"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Allow Prepairing</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about Allow Prepairing"
                          v-tooltip.top="'Allow Bluetooth prepairing on the device.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="settings.handsFreeProfile"
                    inputId="bluetooth-hands-free"
                    :binary="true"
                  >
                    <template #label>Hands Free Profile</template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="settings.audioHeadsetsMono"
                    inputId="bluetooth-audio-mono"
                    :binary="true"
                  >
                    <template #label>Audio Headsets (Mono)</template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="settings.audioHeadsetsAndSpeakers"
                    inputId="bluetooth-audio-voice-music"
                    :binary="true"
                  >
                    <template #label>Audio Headsets and Speakers (Voice &amp; Music)</template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="settings.classicKeyboardsAndMice"
                    inputId="bluetooth-classic-keyboards"
                    :binary="true"
                  >
                    <template #label>Classic Keyboards and Mice</template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="settings.leKeyboardsAndMice"
                    inputId="bluetooth-le-keyboards"
                    :binary="true"
                  >
                    <template #label>LE Keyboards and Mice</template>
                  </CheckboxWithLabel>

                  <PvDivider />

                  <CheckboxWithLabel
                    v-model="settings.fileTransfer"
                    inputId="bluetooth-file-transfer"
                    :binary="true"
                  >
                    <template #label>File Transfer</template>
                  </CheckboxWithLabel>

                  <div class="flex flex-col gap-md">
                    <h4 class="text-body-md-bold text-neutral-base m-0">Add Custom Service</h4>

                    <div
                      v-for="(row, index) in customServices"
                      :key="row.id"
                      class="flex items-start gap-md"
                    >
                      <FormField label="Service Name" class="flex-1 min-w-0">
                        <template #default="{ inputId }">
                          <PvInputText
                            :id="index === 0 ? inputId : undefined"
                            v-model="row.serviceName"
                            class="w-full"
                          />
                        </template>
                      </FormField>

                      <FormField label="UUID Number" class="flex-1 min-w-0">
                        <template #default="{ inputId }">
                          <PvInputText
                            :id="inputId"
                            v-model="row.uuidNumber"
                            class="w-full"
                          />
                        </template>
                      </FormField>

                      <div class="flex items-center gap-xs pt-7 shrink-0">
                        <PvButton
                          severity="secondary"
                          variant="text"
                          size="small"
                          aria-label="Delete custom service"
                          @click="removeCustomService(row.id)"
                        >
                          <template #icon>
                            <TrashIcon class="size-4" />
                          </template>
                        </PvButton>
                        <PvButton
                          severity="secondary"
                          variant="text"
                          size="small"
                          aria-label="Add custom service"
                          @click="addCustomService"
                        >
                          <template #icon>
                            <PlusIcon class="size-4" />
                          </template>
                        </PvButton>
                      </div>
                    </div>
                  </div>
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
  `}),Wt={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Bluetooth Configuration",component:ue,parameters:{layout:"fullscreen"}},p={};var T,N,w;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(w=(N=p.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const Ft=["BluetoothConfigurationPage","Default"];export{ue as BluetoothConfigurationPage,p as Default,Ft as __namedExportsOrder,Wt as default};
