import{r as o}from"./iframe-BFKWv3KJ.js";import{s as n}from"./index-2rr2RyNS.js";import{_ as a}from"./CollapsiblePanel.vue-DkCKI-zZ.js";import"./RichText.vue-vrSf4OCs.js";import{_ as i}from"./FormField.vue-CsyFfyrv.js";import{r as m}from"./Cog6ToothIcon-CLTd3td9.js";import{r as c}from"./ChevronRightIcon-DUJGUktX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-DUVhZ73h.js";import"./index-ZhWAdK_X.js";import"./index-CCIVz5jE.js";import"./index-DdAbza1U.js";import"./index-BMkyGRgX.js";import"./index-Dn4n97fu.js";import"./index-CtfEZ-mH.js";import"./index-CfbpxYVU.js";import"./index-BvSgnTKr.js";import"./index-h_LiPJ46.js";import"./ExclamationCircleIcon-D3xrP7cx.js";import"./ExclamationTriangleIcon-pyQOIf39.js";import"./CheckCircleIcon-CTvmflJK.js";import"./InformationCircleIcon-3yLrI0TY.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Collapsible Panel",component:a,parameters:{layout:"padded"}},e={name:"Toggleable settings panel",render:()=>({components:{CollapsiblePanel:a,FormField:i,PvInputText:n,ChevronRightIcon:c,Cog6ToothIcon:m},setup(){const p=o(!1),r=o("0");return{collapsed:p,bypassCount:r}},template:`
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
