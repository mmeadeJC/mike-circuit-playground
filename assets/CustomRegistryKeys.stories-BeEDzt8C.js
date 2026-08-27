import{u as R}from"./storybookPolicyMigrationNav-CMDIYfRs.js";import{d as k,r as i,q as S,m as F,k as v}from"./iframe-wHZiWscM.js";import{s as L}from"./index-sD1-d5gW.js";import{s as A}from"./index-BZ44v4AP.js";import{s as B}from"./index-B52hguGd.js";import{s as K}from"./index-BUFlMVon.js";import{s as $}from"./index-cu68_uPv.js";import{s as E}from"./index-DvptmZO3.js";import{_ as Y}from"./CollapsiblePanel.vue-CyXpgIN2.js";import"./RichText.vue-CHGMbC98.js";import{_ as W}from"./LinkText.vue-CZtYLLzG.js";import{_ as M}from"./FormField.vue-Di73I2_d.js";import{_ as z}from"./AppNavigation.vue-i1RfVmw-.js";import{_ as H}from"./PageHeader.vue-CAUSrv2U.js";import{_ as V}from"./ConfigPageLayout.vue-DxzM22X4.js";import{P as j}from"./PageSaveBar.vue-CkqAZn2h.js";import{_ as q}from"./AdminTopBar-D6XpGr1h.js";import{p as G,m as Q}from"./policyMigrationMenuItems-DbbeCtrB.js";import{r as J}from"./TrashIcon-UFJmnL45.js";import{r as U}from"./PlusIcon-DGBp3WlK.js";import{r as X}from"./ArrowTopRightOnSquareIcon-Di75X2M6.js";import{r as Z}from"./InformationCircleIcon-DZ4ah18T.js";import{r as ee}from"./Cog6ToothIcon-CpmE-KkZ.js";import{r as te}from"./ComputerDesktopIcon-DvIVXyFC.js";import{r as f}from"./ShieldCheckIcon-XJT-0kMA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-BsadxdHP.js";import"./index-CK8YOc-s.js";import"./index-OomjoOn0.js";import"./index-DG2sTEJu.js";import"./index-B9GWGLe7.js";import"./index-B0f83xA1.js";import"./index-Box4ManB.js";import"./index-tXLQuD6N.js";import"./index-Bx3ApnQM.js";import"./index-Cho0WR5H.js";import"./ArrowRightIcon-BHnqKJRg.js";import"./ExclamationCircleIcon-EhF7PbwK.js";import"./ExclamationTriangleIcon-CSek95QY.js";import"./CheckCircleIcon-BjhpPrT8.js";import"./index-DGe5eYzI.js";import"./index-NL-pVcRR.js";import"./index-BsNWgMfo.js";import"./ChevronRightIcon-CCd9mxHV.js";import"./index-BQHp0V5H.js";import"./index-dz_S8yXK.js";import"./index-BSrPWlqO.js";import"./index-BX58BE5p.js";import"./Dropdown.vue-BSd8d_yA.js";import"./EllipsisHorizontalIcon-BHjLtj66.js";import"./BasePageLayout.vue-BxTNDttc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useContainer-Bxg-bmhf.js";import"./PencilSquareIcon-BGXvyPGw.js";import"./CheckIcon-CJcok3j9.js";import"./index-Andb7bwO.js";import"./AiAgentButton.vue-BXAkTtdZ.js";import"./ArrowLeftIcon-BueVzbuM.js";import"./FlagIcon-DIzDNC3I.js";import"./VaultIcon-BgLDyadC.js";import"./ArrowRightStartOnRectangleIcon-CLdR-YKA.js";import"./RocketLaunchIcon-CNdx9WZl.js";import"./HomeIcon-5r_QbQOS.js";import"./UserIcon-BeF8Hyvt.js";import"./UsersIcon-DnG2W9uG.js";import"./UserGroupIcon-BLdtu9b8.js";import"./CommandLineIcon-8W_LRzjZ.js";import"./ClipboardDocumentListIcon-zSNh2cWZ.js";import"./ClipboardDocumentCheckIcon-B9O-4nOP.js";import"./CpuChipIcon-D7soRAGz.js";const ae=[{label:"String",value:"String"},{label:"DWORD",value:"DWORD"},{label:"QWORD",value:"QWORD"},{label:"Binary",value:"Binary"},{label:"Multi-String",value:"Multi-String"},{label:"Expandable String",value:"Expandable String"}],y=[{label:"Details",value:"details"},{label:"Policy Groups",value:"policy-groups"},{label:"Device Groups",value:"device-groups"},{label:"Devices",value:"devices"}],g="Advanced: Custom Registry Keys",b="",h=[{id:1,location:"",valueName:"",type:"DWORD",data:""}],ie="These policies allow you to configure any system settings that we may not offer in our standard policies. Custom policies allow for even further customization of policy settings on your systems.",oe="Any settings added to this policy will override the same settings that may already exist on your system(s). It is recommended you test this policy against a single system prior to applying to your organization's entire fleet.",le="This policy will take effect when all systems where this is policy is enabled have rebooted.",se="Editing registry settings can cause poor system performance or invalidate Windows licensing. We recommend testing thoroughly before applying to a large number of systems.",re=k({name:"CustomRegistryKeysPage",components:{AppNavigation:z,PageHeader:H,CollapsiblePanel:Y,FormField:M,LinkText:W,ConfigPageLayout:V,PageSaveBar:j,TopBar:q,PvButton:L,PvTag:K,PvInputText:A,PvTextarea:E,PvSelect:B,PvDivider:$,ShieldCheckIcon:f,ComputerDesktopIcon:te,Cog6ToothIcon:ee,InformationCircleIcon:Z,ArrowTopRightOnSquareIcon:X,PlusIcon:U,TrashIcon:J},setup(){const{goBack:T,backButtonLabel:w}=R("/custom-registry-keys"),c=i("details"),r=i(g),n=i(b),t=i(h.map(e=>({...e}))),a=i({policyName:g,policyNotes:b,registryKeys:h.map(e=>({...e}))}),p=i(!1),o=i(!1);let d=2;const u=v(()=>r.value!==a.value.policyName||n.value!==a.value.policyNotes||t.value.length!==a.value.registryKeys.length?!0:t.value.some((e,l)=>{const s=a.value.registryKeys[l];return s?e.location!==s.location||e.valueName!==s.valueName||e.type!==s.type||e.data!==s.data:!0}));S(u,e=>{e&&(o.value=!1)});const C=v(()=>{var e;return((e=y.find(l=>l.value===c.value))==null?void 0:e.label)??"Details"});function _(){t.value.push({id:d++,location:"",valueName:"",type:"DWORD",data:""})}function D(e){if(t.value.length<=1){t.value=[{id:d++,location:"",valueName:"",type:"DWORD",data:""}];return}t.value=t.value.filter(l=>l.id!==e)}function N(){r.value=a.value.policyName,n.value=a.value.policyNotes,t.value=a.value.registryKeys.map(e=>({...e})),o.value=!1}async function O(){p.value=!0,await new Promise(e=>setTimeout(e,600)),a.value={policyName:r.value,policyNotes:n.value,registryKeys:t.value.map(e=>({...e}))},p.value=!1,o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return{menuItems:Q,profileMenuItems:G,detailTabs:y,activeTab:c,activeTabLabel:C,policyName:r,policyNotes:n,registryKeys:t,registryTypeOptions:ae,POLICY_DESCRIPTION:ie,POLICY_BEHAVIOR:oe,POLICY_ACTIVATION:le,PRO_TIP_BODY:se,isDirty:u,isSaving:p,showSavedConfirmation:o,addRegistryKey:_,removeRegistryKey:D,handleDiscard:N,handleSave:O,goBack:T,backButtonLabel:w,shieldIcon:F(f)}},template:`
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
