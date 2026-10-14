import{r as t}from"./iframe-DnhA1Jsm.js";import{s as c}from"./index-DKDggJZ4.js";import{s as p}from"./index-d5NeXY8j.js";import{_ as a}from"./CollapsiblePanel.vue-BnTrlRAQ.js";import"./RichText.vue-BuoexALv.js";import{_ as m}from"./LinkText.vue-h4sX1MNH.js";import{_ as d}from"./FormField.vue-mRh6rdEv.js";import{i as n,j as x}from"./policyMigrationComponentConstants-BSeo4Py0.js";import{r as u}from"./ShieldCheckIcon-G-yjo0m6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMi26Np3.js";import"./index-D3lRbD1q.js";import"./index-DwERWXoD.js";import"./index-ZhWAdK_X.js";import"./index-Dkdx5MdW.js";import"./index-DA6MtJit.js";import"./index-DtpEFz2i.js";import"./index-BIrxIukW.js";import"./index-BNbdGjQ1.js";import"./index-lNUZEIRs.js";import"./index-BugbG7pm.js";import"./index-B5xbJtC5.js";import"./ArrowRightIcon-18DcXMgP.js";import"./ExclamationCircleIcon-C-2LRUJi.js";import"./ExclamationTriangleIcon-B9mXmASX.js";import"./CheckCircleIcon-CB1pNqov.js";import"./InformationCircleIcon-CLlN2oSo.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Windows Device Policy Panel",component:a,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:a,FormField:d,LinkText:m,PvInputText:c,PvTextarea:p,ShieldCheckIcon:u},setup(){const s=t("WiFi Configuration"),r=t("");return{policyName:s,policyNotes:r,samplePolicyBehavior:x,samplePolicyActivation:n}},template:`
      <div class="max-w-3xl">
        <CollapsiblePanel header="Windows Device Policy">
          <template #titleicon="iconProps">
            <ShieldCheckIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <FormField label="Policy Name">
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="policyName" class="w-full" />
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
                This policy configures a wireless network for Windows 10/11 devices.
              </p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold text-neutral-base">Policy Behavior</h4>
              <p class="text-body-md text-neutral-subtle m-0">{{ samplePolicyBehavior }}</p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold text-neutral-base">Policy Activation</h4>
              <p class="text-body-md text-neutral-subtle m-0">{{ samplePolicyActivation }}</p>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    `})};var l,o,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CollapsiblePanel,
      FormField,
      LinkText,
      PvInputText: InputText,
      PvTextarea: Textarea,
      ShieldCheckIcon
    },
    setup() {
      const policyName = ref('WiFi Configuration');
      const policyNotes = ref('');
      return {
        policyName,
        policyNotes,
        samplePolicyBehavior,
        samplePolicyActivation
      };
    },
    template: \`
      <div class="max-w-3xl">
        <CollapsiblePanel header="Windows Device Policy">
          <template #titleicon="iconProps">
            <ShieldCheckIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <FormField label="Policy Name">
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="policyName" class="w-full" />
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
                This policy configures a wireless network for Windows 10/11 devices.
              </p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold text-neutral-base">Policy Behavior</h4>
              <p class="text-body-md text-neutral-subtle m-0">{{ samplePolicyBehavior }}</p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold text-neutral-base">Policy Activation</h4>
              <p class="text-body-md text-neutral-subtle m-0">{{ samplePolicyActivation }}</p>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    \`
  })
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,O as default};
