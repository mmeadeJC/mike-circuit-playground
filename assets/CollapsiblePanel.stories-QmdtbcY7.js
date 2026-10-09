import{r as o}from"./iframe-DMCY07cZ.js";import{s as n}from"./index-I-4AEmq6.js";import{_ as a}from"./CollapsiblePanel.vue-DuGktOP2.js";import"./RichText.vue-CvF5yRyM.js";import{_ as i}from"./FormField.vue-C1zJRe6K.js";import{r as m}from"./Cog6ToothIcon-B22lkUCe.js";import{r as c}from"./ChevronRightIcon-0prVeiSQ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-CR_NoeiN.js";import"./index-ZhWAdK_X.js";import"./index-CgAMHrkT.js";import"./index-BEZAFdmF.js";import"./index-CkkhZWly.js";import"./index-C485P2jR.js";import"./index-C8jYejGu.js";import"./index-DA5-wtQK.js";import"./index-Csz9fdiB.js";import"./index-Bx337-gk.js";import"./ExclamationCircleIcon-0G5GZbYV.js";import"./ExclamationTriangleIcon-BXlGyBdT.js";import"./CheckCircleIcon-fURH8I9F.js";import"./InformationCircleIcon-49K75x1E.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Collapsible Panel",component:a,parameters:{layout:"padded"}},e={name:"Toggleable settings panel",render:()=>({components:{CollapsiblePanel:a,FormField:i,PvInputText:n,ChevronRightIcon:c,Cog6ToothIcon:m},setup(){const p=o(!1),r=o("0");return{collapsed:p,bypassCount:r}},template:`
      <div class="max-w-3xl">
        <CollapsiblePanel
          v-model:collapsed="collapsed"
          toggleable
          header="Settings"
        >
          <template #titleicon="iconProps">
            <Cog6ToothIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <FormField label="Bypass attempts before prompt">
            <template #default="{ inputId }">
              <PvInputText :id="inputId" v-model="bypassCount" class="w-full" />
            </template>
          </FormField>
        </CollapsiblePanel>
      </div>
    `})};var t,l,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Toggleable settings panel',
  render: () => ({
    components: {
      CollapsiblePanel,
      FormField,
      PvInputText: InputText,
      ChevronRightIcon,
      Cog6ToothIcon
    },
    setup() {
      const collapsed = ref(false);
      const bypassCount = ref('0');
      return {
        collapsed,
        bypassCount
      };
    },
    template: \`
      <div class="max-w-3xl">
        <CollapsiblePanel
          v-model:collapsed="collapsed"
          toggleable
          header="Settings"
        >
          <template #titleicon="iconProps">
            <Cog6ToothIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <FormField label="Bypass attempts before prompt">
            <template #default="{ inputId }">
              <PvInputText :id="inputId" v-model="bypassCount" class="w-full" />
            </template>
          </FormField>
        </CollapsiblePanel>
      </div>
    \`
  })
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const q=["ToggleableSettings"];export{e as ToggleableSettings,q as __namedExportsOrder,O as default};
