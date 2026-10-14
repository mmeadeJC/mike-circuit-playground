import{r as l}from"./iframe-600w3n4H.js";import{s as r}from"./index-Bu8ekTSX.js";import{s as p}from"./index-DOGY-w59.js";import{_ as i}from"./CollapsiblePanel.vue-N2IyoV5w.js";import"./RichText.vue-CqDMFobT.js";import{_ as m}from"./LinkText.vue-Bnu_L6eP.js";import{_ as n}from"./FormField.vue-9Bh63gOi.js";import{i as d,j as u}from"./policyMigrationComponentConstants-By4Q4wXb.js";import{r as x}from"./PlayCircleIcon-B_brYixV.js";import{r as y}from"./ShieldCheckIcon-BytxG3nK.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bzx6DhGJ.js";import"./index-CD70s4gz.js";import"./index-DtTXIm-l.js";import"./index-ZhWAdK_X.js";import"./index-C_NaY8XT.js";import"./index-B3TfiOtM.js";import"./index-CY9iazAI.js";import"./index-D0lPU1dy.js";import"./index-DAcoo9Zi.js";import"./index-BzHAkJ03.js";import"./index-DknECv7p.js";import"./index-DQaWMASi.js";import"./ArrowRightIcon-D0LHaIDr.js";import"./ExclamationCircleIcon-BGUBc7GW.js";import"./ExclamationTriangleIcon-DWA-fhHk.js";import"./CheckCircleIcon-D4HHsw8E.js";import"./InformationCircleIcon-B9PCJUqI.js";const E={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/macOS Device Policy Panel",component:i,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:i,FormField:n,LinkText:m,PvInputText:r,PvTextarea:p,ShieldCheckIcon:y,PlayCircleIcon:x},setup(){const s=l("FileVault 2"),c=l("");return{policyName:s,policyNotes:c,samplePolicyBehavior:u,samplePolicyActivation:d}},template:`
      <div class="max-w-3xl">
        <CollapsiblePanel header="macOS Device Policy">
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
                This policy allows you to enable and enforce FileVault.
                <LinkText
                  label="all JumpCloud supported operating systems"
                  href="#"
                  target="_blank"
                  :showIcon="false"
                  customClass="inline"
                />.
              </p>
              <LinkText
                href="#"
                target="_blank"
                :showIcon="false"
                customClass="inline-flex items-center gap-xs"
              >
                <PlayCircleIcon class="size-4 shrink-0" />
                Watch Video Tutorial
              </LinkText>
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
    `})};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CollapsiblePanel,
      FormField,
      LinkText,
      PvInputText: InputText,
      PvTextarea: Textarea,
      ShieldCheckIcon,
      PlayCircleIcon
    },
    setup() {
      const policyName = ref('FileVault 2');
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
        <CollapsiblePanel header="macOS Device Policy">
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
                This policy allows you to enable and enforce FileVault.
                <LinkText
                  label="all JumpCloud supported operating systems"
                  href="#"
                  target="_blank"
                  :showIcon="false"
                  customClass="inline"
                />.
              </p>
              <LinkText
                href="#"
                target="_blank"
                :showIcon="false"
                customClass="inline-flex items-center gap-xs"
              >
                <PlayCircleIcon class="size-4 shrink-0" />
                Watch Video Tutorial
              </LinkText>
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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,E as default};
