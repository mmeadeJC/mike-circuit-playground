import{usePolicyMigrationBackNavigation as A}from"./storybookPolicyMigrationNav-B4wHo3jn.js";import{d as D,r as s,q as B,m as E,k as h}from"./iframe-CJNlUSJO.js";import{s as O}from"./index-CzaTbvQ5.js";import{s as W}from"./index-DqMC5tMH.js";import{s as F}from"./index-G7cLCde7.js";import{s as $}from"./index-87h8nido.js";import{s as R}from"./index-Dv8f6L-g.js";import{_ as H}from"./CheckboxWithLabel.vue-B3I6fX3T.js";import{_ as V}from"./CollapsiblePanel.vue-D5yOAVdx.js";import"./RichText.vue-CLPxRa2P.js";import{_ as U}from"./LinkText.vue-DQgZAyU0.js";import{_ as Y}from"./FormField.vue-DokXCbml.js";import{_ as z}from"./MessageNotification.vue-C83opUOC.js";import{_ as K}from"./AppNavigation.vue-DcH97lTt.js";import{_ as j}from"./PageHeader.vue-DhJ1GZXF.js";import{_ as q}from"./DetailPageLayout.vue-BYXPj0P7.js";import{P as G}from"./PageSaveBar.vue-ZkzgRMby.js";import{_ as J}from"./AdminTopBar-BIysc9Tr.js";import{p as Q,m as X}from"./policyMigrationMenuItems-D8o9gxah.js";import{r as Z}from"./TrashIcon-v0EM-4lq.js";import{r as ee}from"./PlusIcon-BED19NaW.js";import{r as te}from"./InformationCircleIcon-Dnjq95z-.js";import{r as ae}from"./Cog6ToothIcon-BCMOD4VN.js";import{r as oe}from"./ComputerDesktopIcon-D92IkDNz.js";import{r as x}from"./ShieldCheckIcon-BkfH9kvS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bb-Am5iU.js";import"./VaultIcon-0yVqGDWj.js";import"./ArrowRightStartOnRectangleIcon-CLCUEpzv.js";import"./ArrowTopRightOnSquareIcon-Cd_6qSPk.js";import"./RocketLaunchIcon-MP9dRmf5.js";import"./HomeIcon-DGihxR32.js";import"./UserIcon-B9-rHRsZ.js";import"./UsersIcon-oaPeND-z.js";import"./UserGroupIcon-C-0WA-Ss.js";import"./CommandLineIcon-BlUqAMc5.js";import"./ClipboardDocumentListIcon-HkPtUXlJ.js";import"./ClipboardDocumentCheckIcon-DA2PjPuu.js";import"./CpuChipIcon-7isR4Woi.js";import"./index-BP13dlUd.js";import"./index-I2lZVOjH.js";import"./index-BbdJTiks.js";import"./index-C_WDvV0g.js";import"./index-ZhWAdK_X.js";import"./index-AIzoT1ks.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-Btd800F5.js";import"./index-BBDD1QfU.js";import"./index-CMPzMs76.js";import"./index-CpbR1NxB.js";import"./index-BMQpWRRD.js";import"./ArrowRightIcon-Ba2_8xNw.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./index-BGmcZnfZ.js";import"./index-Do-nvtb2.js";import"./FlagIcon-xEoXMcNx.js";import"./index-Cy2jNuCI.js";import"./index-DMJeGYfZ.js";import"./index-B_P4GBGL.js";import"./index-Dzg4DU0m.js";import"./index-4T4mPLxV.js";import"./ChevronRightIcon-9Bjzgkk8.js";import"./index-B0m5ICal.js";import"./index-Dsw3nu2T.js";import"./index--qYgJinF.js";import"./index-Dw453XQ1.js";import"./Dropdown.vue-C4EK6U1h.js";import"./index-DNoP2_Hj.js";import"./EllipsisHorizontalIcon-CReXKJ2c.js";import"./BasePageLayout.vue-BfMxOwFg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-B_1ygOmR.js";import"./PencilSquareIcon-C2zE7SZM.js";import"./CheckIcon-CnYI-wva.js";import"./AiAgentButton.vue-BVYZC-a5.js";import"./ArrowLeftIcon-ZppuD48h.js";const g=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],I="Bluetooth Configuration",y="",P={allowBluetoothAdvertising:!0,allowDiscoveryMode:!0,allowPrepairing:!0,handsFreeProfile:!0,audioHeadsetsMono:!0,audioHeadsetsAndSpeakers:!0,classicKeyboardsAndMice:!0,leKeyboardsAndMice:!0,fileTransfer:!0},C=[{id:1,serviceName:"",uuidNumber:""}],ie="This policy configures Bluetooth restrictions for Windows 10 and 11 devices.",le="Devices must be enrolled in Windows MDM to use this policy.",se="No action is needed to activate this policy.",re="Windows 10, Version 1507 (10.0.10240) and above or later",ne=["Pro","Enterprise","Education","Windows SE","IoT Enterprise","IoT Enterprise LTSC"];function u(t){return{...t}}function ce(t,r){return Object.keys(t).every(i=>t[i]===r[i])}function me(t,r){return t.length!==r.length?!1:t.every((i,n)=>{const l=r[n];return l?i.serviceName===l.serviceName&&i.uuidNumber===l.uuidNumber:!1})}const ue=D({name:"BluetoothConfigurationPage",components:{AppNavigation:K,PageHeader:j,CollapsiblePanel:V,FormField:Y,CheckboxWithLabel:H,LinkText:U,MessageNotification:z,DetailPageLayout:q,PageSaveBar:G,TopBar:J,PvButton:O,PvTag:F,PvInputText:W,PvTextarea:R,PvDivider:$,ShieldCheckIcon:x,ComputerDesktopIcon:oe,Cog6ToothIcon:ae,InformationCircleIcon:te,PlusIcon:ee,TrashIcon:Z},setup(){const{goBack:t,backButtonLabel:r}=A("/bluetooth-configuration"),i=s("details"),n=s(I),l=s(y),m=s(u(P)),a=s(C.map(e=>({...e}))),o=s({policyName:I,policyNotes:y,settings:u(P),customServices:C.map(e=>({...e}))}),d=s(!1),c=s(!1);let b=2;const f=h(()=>n.value!==o.value.policyName||l.value!==o.value.policyNotes||!ce(m.value,o.value.settings)?!0:!me(a.value,o.value.customServices));B(f,e=>{e&&(c.value=!1)});const S=h(()=>{var e;return((e=g.find(v=>v.value===i.value))==null?void 0:e.label)??"Details"});function k(){a.value.push({id:b++,serviceName:"",uuidNumber:""})}function _(e){if(a.value.length<=1){a.value=[{id:b++,serviceName:"",uuidNumber:""}];return}a.value=a.value.filter(v=>v.id!==e)}function L(){n.value=o.value.policyName,l.value=o.value.policyNotes,m.value=u(o.value.settings),a.value=o.value.customServices.map(e=>({...e})),c.value=!1}async function M(){d.value=!0,await new Promise(e=>setTimeout(e,600)),o.value={policyName:n.value,policyNotes:l.value,settings:u(m.value),customServices:a.value.map(e=>({...e}))},d.value=!1,c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return{menuItems:X,profileMenuItems:Q,detailTabs:g,activeTab:i,activeTabLabel:S,policyName:n,policyNotes:l,settings:m,customServices:a,POLICY_DESCRIPTION:ie,POLICY_BEHAVIOR:le,POLICY_ACTIVATION:se,MINIMUM_SUPPORTED_VERSION:re,SUPPORTED_EDITIONS:ne,isDirty:f,isSaving:d,showSavedConfirmation:c,addCustomService:k,removeCustomService:_,handleDiscard:L,handleSave:M,goBack:t,backButtonLabel:r,shieldIcon:E(x)}},template:`
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
