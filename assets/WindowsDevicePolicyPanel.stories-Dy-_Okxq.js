import{r as t}from"./iframe-8Q3g4suX.js";import{s as c}from"./index-CkKvLbcv.js";import{s as p}from"./index-dop1ZQf9.js";import{_ as a}from"./CollapsiblePanel.vue-CmNp5iUc.js";import"./RichText.vue-C1Ty82RV.js";import{_ as m}from"./LinkText.vue-DvAjr8lK.js";import{_ as d}from"./FormField.vue-DPg-U9jM.js";import{i as n,j as x}from"./policyMigrationComponentConstants-CIoCNzJF.js";import{r as u}from"./ShieldCheckIcon-W0AJus9F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-OJfjCxM5.js";import"./index-ZhWAdK_X.js";import"./index-M73h-aNz.js";import"./index-C19gJH8S.js";import"./index-DpCZYySO.js";import"./index-BMCZJFM3.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./index-Ck7ewAP5.js";import"./ArrowRightIcon-BXY2Zswv.js";import"./ExclamationCircleIcon-BfS8hW09.js";import"./ExclamationTriangleIcon-MejY1_7F.js";import"./CheckCircleIcon-BlALaqTn.js";import"./InformationCircleIcon-ozw6Xz0u.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Windows Device Policy Panel",component:a,parameters:{layout:"padded"}},e={render:()=>({components:{CollapsiblePanel:a,FormField:d,LinkText:m,PvInputText:c,PvTextarea:p,ShieldCheckIcon:u},setup(){const s=t("WiFi Configuration"),r=t("");return{policyName:s,policyNotes:r,samplePolicyBehavior:x,samplePolicyActivation:n}},template:`
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
