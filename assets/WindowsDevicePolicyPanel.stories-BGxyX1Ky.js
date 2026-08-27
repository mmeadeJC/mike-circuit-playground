import{r as t}from"./iframe-DSI7I_YQ.js";import{s as c}from"./index-CbI5Nc1U.js";import{s as p}from"./index-CsSMY8xR.js";import{_ as a}from"./CollapsiblePanel.vue-CpFXaJ2N.js";import"./RichText.vue-DARNTLdh.js";import{_ as d}from"./LinkText.vue-la98-pF0.js";import{_ as m}from"./FormField.vue-DvIDnTXZ.js";import{d as n,e as x}from"./policyMigrationComponentConstants-DJ6Cg_qF.js";import{r as u}from"./ShieldCheckIcon-nGYAINf2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-Ck3k_J8K.js";import"./index-ZhWAdK_X.js";import"./index-BI_elqOn.js";import"./index-Byho_yNF.js";import"./index-Cg08wAe5.js";import"./index-hJTrF4vo.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-CwTDpyKH.js";import"./index-Cm1NVGCj.js";import"./ArrowRightIcon-sh-7-hR7.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./InformationCircleIcon-Cz23V1it.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Windows Device Policy Panel",component:a,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:a,FormField:m,LinkText:d,PvInputText:c,PvTextarea:p,ShieldCheckIcon:u},setup(){const s=t("WiFi Configuration"),r=t("");return{policyName:s,policyNotes:r,samplePolicyBehavior:x,samplePolicyActivation:n}},template:`
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
