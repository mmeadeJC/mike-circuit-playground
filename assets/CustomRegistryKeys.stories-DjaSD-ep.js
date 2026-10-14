import{usePolicyMigrationBackNavigation as R}from"./storybookPolicyMigrationNav-CpsoCc-v.js";import{d as k,r as i,q as S,m as F,k as v}from"./iframe-8Q3g4suX.js";import{s as L}from"./index-BdLVtuk9.js";import{s as A}from"./index-CkKvLbcv.js";import{s as B}from"./index-DGY9u_rI.js";import{s as K}from"./index-BEvLtaLX.js";import{s as $}from"./index-cFQtYIhg.js";import{s as E}from"./index-dop1ZQf9.js";import{_ as Y}from"./CollapsiblePanel.vue-CmNp5iUc.js";import"./RichText.vue-C1Ty82RV.js";import{_ as W}from"./LinkText.vue-DvAjr8lK.js";import{_ as M}from"./FormField.vue-DPg-U9jM.js";import{_ as z}from"./AppNavigation.vue-DywdLFt4.js";import{_ as H}from"./PageHeader.vue-COzcmwfr.js";import{_ as V}from"./ConfigPageLayout.vue-CESQ1aGH.js";import{P as j}from"./PageSaveBar.vue-D2eZ_K1C.js";import{_ as q}from"./AdminTopBar-Ck-Dv7za.js";import{p as G,m as Q}from"./policyMigrationMenuItems-D670dAGr.js";import{r as J}from"./TrashIcon-Batrj4xL.js";import{r as U}from"./PlusIcon-BstNSs7l.js";import{r as X}from"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import{r as Z}from"./InformationCircleIcon-ozw6Xz0u.js";import{r as ee}from"./Cog6ToothIcon-cxmEYFc7.js";import{r as te}from"./ComputerDesktopIcon-DDj9bIO2.js";import{r as f}from"./ShieldCheckIcon-W0AJus9F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPUoOQbX.js";import"./VaultIcon-DvFqgId8.js";import"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import"./RocketLaunchIcon-BJK4NMZ4.js";import"./HomeIcon-yFRUSV7Z.js";import"./UserIcon-ShjzaHpT.js";import"./UsersIcon-Z2ifx08k.js";import"./UserGroupIcon-Ciz8NLc5.js";import"./CommandLineIcon-4Js_OSQE.js";import"./ClipboardDocumentListIcon-CnTg33RY.js";import"./ClipboardDocumentCheckIcon--weNKert.js";import"./CpuChipIcon-DVt0p-5v.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-DRA9vNfv.js";import"./index-Us1_uPk3.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-M73h-aNz.js";import"./index-C19gJH8S.js";import"./index-BMCZJFM3.js";import"./ArrowRightIcon-BXY2Zswv.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./index-DirUApOz.js";import"./index-C6vF-uE7.js";import"./index-MkGR21B_.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./index-Rn1cm77L.js";import"./index-MAZOfW6J.js";import"./index-CZrXZwQy.js";import"./index-NkGFgNPM.js";import"./Dropdown.vue-CKApLVqP.js";import"./EllipsisHorizontalIcon-DtE3Bb7n.js";import"./BasePageLayout.vue-CwV5cDx0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-Bc2j6_Ia.js";import"./PencilSquareIcon-CZ923cNI.js";import"./CheckIcon-Mq2NBLaA.js";import"./AiAgentButton.vue-hSAdW1Kt.js";import"./ArrowLeftIcon-CzirQB4t.js";import"./FlagIcon-CTBX6-CL.js";const ae=[{label:"String",value:"String"},{label:"DWORD",value:"DWORD"},{label:"QWORD",value:"QWORD"},{label:"Binary",value:"Binary"},{label:"Multi-String",value:"Multi-String"},{label:"Expandable String",value:"Expandable String"}],y=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],g="Advanced: Custom Registry Keys",b="",h=[{id:1,location:"",valueName:"",type:"DWORD",data:""}],ie="These policies allow you to configure any system settings that we may not offer in our standard policies. Custom policies allow for even further customization of policy settings on your systems.",oe="Any settings added to this policy will override the same settings that may already exist on your system(s). It is recommended you test this policy against a single system prior to applying to your organization's entire fleet.",le="This policy will take effect when all systems where this is policy is enabled have rebooted.",se="Editing registry settings can cause poor system performance or invalidate Windows licensing. We recommend testing thoroughly before applying to a large number of systems.",re=k({name:"CustomRegistryKeysPage",components:{AppNavigation:z,PageHeader:H,CollapsiblePanel:Y,FormField:M,LinkText:W,ConfigPageLayout:V,PageSaveBar:j,TopBar:q,PvButton:L,PvTag:K,PvInputText:A,PvTextarea:E,PvSelect:B,PvDivider:$,ShieldCheckIcon:f,ComputerDesktopIcon:te,Cog6ToothIcon:ee,InformationCircleIcon:Z,ArrowTopRightOnSquareIcon:X,PlusIcon:U,TrashIcon:J},setup(){const{goBack:T,backButtonLabel:w}=R("/custom-registry-keys"),c=i("details"),r=i(g),n=i(b),t=i(h.map(e=>({...e}))),a=i({policyName:g,policyNotes:b,registryKeys:h.map(e=>({...e}))}),p=i(!1),o=i(!1);let d=2;const u=v(()=>r.value!==a.value.policyName||n.value!==a.value.policyNotes||t.value.length!==a.value.registryKeys.length?!0:t.value.some((e,l)=>{const s=a.value.registryKeys[l];return s?e.location!==s.location||e.valueName!==s.valueName||e.type!==s.type||e.data!==s.data:!0}));S(u,e=>{e&&(o.value=!1)});const C=v(()=>{var e;return((e=y.find(l=>l.value===c.value))==null?void 0:e.label)??"Details"});function _(){t.value.push({id:d++,location:"",valueName:"",type:"DWORD",data:""})}function D(e){if(t.value.length<=1){t.value=[{id:d++,location:"",valueName:"",type:"DWORD",data:""}];return}t.value=t.value.filter(l=>l.id!==e)}function N(){r.value=a.value.policyName,n.value=a.value.policyNotes,t.value=a.value.registryKeys.map(e=>({...e})),o.value=!1}async function O(){p.value=!0,await new Promise(e=>setTimeout(e,600)),a.value={policyName:r.value,policyNotes:n.value,registryKeys:t.value.map(e=>({...e}))},p.value=!1,o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return{menuItems:Q,profileMenuItems:G,detailTabs:y,activeTab:c,activeTabLabel:C,policyName:r,policyNotes:n,registryKeys:t,registryTypeOptions:ae,POLICY_DESCRIPTION:ie,POLICY_BEHAVIOR:oe,POLICY_ACTIVATION:le,PRO_TIP_BODY:se,isDirty:u,isSaving:p,showSavedConfirmation:o,addRegistryKey:_,removeRegistryKey:D,handleDiscard:N,handleSave:O,goBack:T,backButtonLabel:w,shieldIcon:F(f)}},template:`
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
          title="Advanced: Custom Registry Keys"
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
          <ConfigPageLayout
            v-if="activeTab === 'details'"
            class="w-full! min-h-full"
            maxWidth="1024"
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
                  <div class="flex grow items-start content-start rounded gap-2 p-2 w-full bg-notification-info shadow-message-info text-notification-info-content">
                    <span class="flex h-6 items-center justify-center shrink-0">
                      <InformationCircleIcon class="w-5 h-5 text-notification-info-content" />
                    </span>
                    <div class="flex grow flex-col py-0.5 min-w-0 gap-sm min-h-6">
                      <span class="text-body-sm font-bold">Pro Tip</span>
                      <p class="text-body-sm m-0">{{ PRO_TIP_BODY }}</p>
                      <p class="text-body-sm m-0">
                        For more information, please reference our
                        <LinkText
                          href="#"
                          target="_blank"
                          :showIcon="false"
                          customClass="inline-flex items-center gap-xs align-baseline ml-xs"
                        >
                          KB Article
                          <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                        </LinkText>.
                      </p>
                    </div>
                  </div>

                  <div
                    v-for="row in registryKeys"
                    :key="row.id"
                    class="flex items-start gap-md"
                  >
                    <FormField
                      label="Registry Key Location"
                      label-tooltip="Enter the full registry path, for example HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Company\\\\App."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="row.location"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Value Name"
                      label-tooltip="The name of the registry value to create or update."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="row.valueName"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Type"
                      label-tooltip="Select the registry value type."
                      class="w-40 shrink-0"
                    >
                      <template #default="{ inputId }">
                        <PvSelect
                          :id="inputId"
                          v-model="row.type"
                          :options="registryTypeOptions"
                          optionLabel="label"
                          optionValue="value"
                          class="w-full!"
                        />
                      </template>
                    </FormField>

                    <FormField
                      label="Data"
                      label-tooltip="The data to write for this registry value."
                      class="flex-1 min-w-0"
                    >
                      <template #default="{ inputId }">
                        <PvTextarea
                          :id="inputId"
                          v-model="row.data"
                          :rows="2"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <div class="flex items-center gap-xs pt-7 shrink-0">
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Delete registry key"
                        @click="removeRegistryKey(row.id)"
                      >
                        <template #icon>
                          <TrashIcon class="size-4" />
                        </template>
                      </PvButton>
                      <PvButton
                        severity="secondary"
                        variant="text"
                        size="small"
                        aria-label="Add registry key"
                        @click="addRegistryKey"
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
          </ConfigPageLayout>

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
  `}),St={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Advanced: Custom Registry Keys",component:re,parameters:{layout:"fullscreen"}},m={};var x,I,P;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const Ft=["CustomRegistryKeysPage","Default"];export{re as CustomRegistryKeysPage,m as Default,Ft as __namedExportsOrder,St as default};
