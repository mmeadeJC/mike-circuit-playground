import{r as l}from"./iframe-DMCY07cZ.js";import{s as r}from"./index-I-4AEmq6.js";import{s as p}from"./index-EyMdbmxj.js";import{_ as i}from"./CollapsiblePanel.vue-DuGktOP2.js";import"./RichText.vue-CvF5yRyM.js";import{_ as m}from"./LinkText.vue-C4Bm3LED.js";import{_ as n}from"./FormField.vue-C1zJRe6K.js";import{i as d,j as u}from"./policyMigrationComponentConstants-DQDXAvZh.js";import{r as x}from"./PlayCircleIcon-BqWJW5AL.js";import{r as y}from"./ShieldCheckIcon-DN84MN1N.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-CR_NoeiN.js";import"./index-ZhWAdK_X.js";import"./index-CgAMHrkT.js";import"./index-BEZAFdmF.js";import"./index-CkkhZWly.js";import"./index-C485P2jR.js";import"./index-C8jYejGu.js";import"./index-DA5-wtQK.js";import"./index-Csz9fdiB.js";import"./index-Bx337-gk.js";import"./ArrowRightIcon-BGWN9072.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";const E={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/macOS Device Policy Panel",component:i,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:i,FormField:n,LinkText:m,PvInputText:r,PvTextarea:p,ShieldCheckIcon:y,PlayCircleIcon:x},setup(){const s=l("FileVault 2"),c=l("");return{policyName:s,policyNotes:c,samplePolicyBehavior:u,samplePolicyActivation:d}},template:`
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
