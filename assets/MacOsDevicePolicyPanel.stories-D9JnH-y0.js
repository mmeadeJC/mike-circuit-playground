import{r as l}from"./iframe-8Q3g4suX.js";import{s as r}from"./index-CkKvLbcv.js";import{s as p}from"./index-dop1ZQf9.js";import{_ as i}from"./CollapsiblePanel.vue-CmNp5iUc.js";import"./RichText.vue-C1Ty82RV.js";import{_ as m}from"./LinkText.vue-DvAjr8lK.js";import{_ as n}from"./FormField.vue-DPg-U9jM.js";import{i as d,j as u}from"./policyMigrationComponentConstants-CIoCNzJF.js";import{r as x}from"./PlayCircleIcon-CFe0yviy.js";import{r as y}from"./ShieldCheckIcon-W0AJus9F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-OJfjCxM5.js";import"./index-ZhWAdK_X.js";import"./index-M73h-aNz.js";import"./index-C19gJH8S.js";import"./index-DpCZYySO.js";import"./index-BMCZJFM3.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./index-Ck7ewAP5.js";import"./ArrowRightIcon-BXY2Zswv.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";const E={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/macOS Device Policy Panel",component:i,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:i,FormField:n,LinkText:m,PvInputText:r,PvTextarea:p,ShieldCheckIcon:y,PlayCircleIcon:x},setup(){const s=l("FileVault 2"),c=l("");return{policyName:s,policyNotes:c,samplePolicyBehavior:u,samplePolicyActivation:d}},template:`
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
