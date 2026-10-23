import{r as t}from"./iframe-DuzLv9Pd.js";import{s as c}from"./index-BXhsDisi.js";import{s as p}from"./index-BnPtWTiX.js";import{_ as a}from"./CollapsiblePanel.vue-HiMYz6FK.js";import"./RichText.vue-D4MvUk45.js";import{_ as m}from"./LinkText.vue-Dtn5ZYX7.js";import{_ as d}from"./FormField.vue-CblrQISo.js";import{i as n,j as x}from"./policyMigrationComponentConstants-DKtyczDC.js";import{r as u}from"./ShieldCheckIcon-BpS1grCD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-BuiD5gzs.js";import"./index-ZhWAdK_X.js";import"./index-ByOVh7y-.js";import"./index-CFtktJtS.js";import"./index-CPNNQ3fD.js";import"./index-DUWomeF_.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-DY4Fqf02.js";import"./index-Br2-aBVM.js";import"./ArrowRightIcon-CebixEfQ.js";import"./ExclamationCircleIcon-Ow_EVGr5.js";import"./ExclamationTriangleIcon-BMFu93R0.js";import"./CheckCircleIcon-CN10XXYi.js";import"./InformationCircleIcon-o0jrs0p0.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Windows Device Policy Panel",component:a,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:a,FormField:d,LinkText:m,PvInputText:c,PvTextarea:p,ShieldCheckIcon:u},setup(){const s=t("WiFi Configuration"),r=t("");return{policyName:s,policyNotes:r,samplePolicyBehavior:x,samplePolicyActivation:n}},template:`
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
