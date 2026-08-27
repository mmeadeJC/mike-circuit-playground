import{r as l}from"./iframe-DSI7I_YQ.js";import{s as r}from"./index-CbI5Nc1U.js";import{s as p}from"./index-CsSMY8xR.js";import{_ as i}from"./CollapsiblePanel.vue-CpFXaJ2N.js";import"./RichText.vue-DARNTLdh.js";import{_ as m}from"./LinkText.vue-la98-pF0.js";import{_ as n}from"./FormField.vue-DvIDnTXZ.js";import{d,e as u}from"./policyMigrationComponentConstants-DJ6Cg_qF.js";import{r as x}from"./PlayCircleIcon-Bp5KX1w7.js";import{r as y}from"./ShieldCheckIcon-nGYAINf2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-Ck3k_J8K.js";import"./index-ZhWAdK_X.js";import"./index-BI_elqOn.js";import"./index-Byho_yNF.js";import"./index-Cg08wAe5.js";import"./index-hJTrF4vo.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-CwTDpyKH.js";import"./index-Cm1NVGCj.js";import"./ArrowRightIcon-sh-7-hR7.js";import"./ExclamationCircleIcon-BCZOshDp.js";import"./ExclamationTriangleIcon-C6cd8IvR.js";import"./CheckCircleIcon-kOPkOkM8.js";import"./InformationCircleIcon-Cz23V1it.js";const E={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/macOS Device Policy Panel",component:i,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:i,FormField:n,LinkText:m,PvInputText:r,PvTextarea:p,ShieldCheckIcon:y,PlayCircleIcon:x},setup(){const s=l("FileVault 2"),c=l("");return{policyName:s,policyNotes:c,samplePolicyBehavior:u,samplePolicyActivation:d}},template:`
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
