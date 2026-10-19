import{r as t}from"./iframe-CJNlUSJO.js";import{s as c}from"./index-DqMC5tMH.js";import{s as p}from"./index-Dv8f6L-g.js";import{_ as a}from"./CollapsiblePanel.vue-D5yOAVdx.js";import"./RichText.vue-CLPxRa2P.js";import{_ as m}from"./LinkText.vue-DQgZAyU0.js";import{_ as d}from"./FormField.vue-DokXCbml.js";import{i as n,j as x}from"./policyMigrationComponentConstants-CxSeqGmW.js";import{r as u}from"./ShieldCheckIcon-BkfH9kvS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-PTx7BYzO.js";import"./index-Bc3avc-P.js";import"./index-BbdJTiks.js";import"./index-ZhWAdK_X.js";import"./index-CpbR1NxB.js";import"./index-CMPzMs76.js";import"./index-I2lZVOjH.js";import"./index-BMQpWRRD.js";import"./index-CzaTbvQ5.js";import"./index-BP13dlUd.js";import"./index-C_WDvV0g.js";import"./index-AIzoT1ks.js";import"./ArrowRightIcon-Ba2_8xNw.js";import"./ExclamationCircleIcon-qg6l-_lk.js";import"./ExclamationTriangleIcon-BspXmJxk.js";import"./CheckCircleIcon-C8wtS4-V.js";import"./InformationCircleIcon-Dnjq95z-.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Windows Device Policy Panel",component:a,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:a,FormField:d,LinkText:m,PvInputText:c,PvTextarea:p,ShieldCheckIcon:u},setup(){const s=t("WiFi Configuration"),r=t("");return{policyName:s,policyNotes:r,samplePolicyBehavior:x,samplePolicyActivation:n}},template:`
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
