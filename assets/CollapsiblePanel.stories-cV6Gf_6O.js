import{r as o}from"./iframe-BF79XtSp.js";import{s as n}from"./index-BkZv6EbR.js";import{_ as a}from"./CollapsiblePanel.vue-CWXrCyIT.js";import"./RichText.vue-CqGWfsH6.js";import{_ as i}from"./FormField.vue-C69YWs2P.js";import{r as m}from"./Cog6ToothIcon-xFudfeaO.js";import{r as c}from"./ChevronRightIcon-Ds2oc56S.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Da6lMlhq.js";import"./index-DyMCnse6.js";import"./index-Du18TKou.js";import"./index-ZhWAdK_X.js";import"./index-tnvvo6Sb.js";import"./index-NvGJIH0G.js";import"./index-dcWUga6b.js";import"./index-DkPTkS_b.js";import"./index-DR5Ktjtn.js";import"./index-DTZ-8UWl.js";import"./index-xyLKPl8B.js";import"./index-BVIEBy36.js";import"./ExclamationCircleIcon-Dg9pvzID.js";import"./ExclamationTriangleIcon-CJc31UiB.js";import"./CheckCircleIcon-CqBmMZEV.js";import"./InformationCircleIcon-Bb4ZZsW1.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Collapsible Panel",component:a,parameters:{layout:"padded"}},e={name:"Toggleable settings panel",render:()=>({components:{CollapsiblePanel:a,FormField:i,PvInputText:n,ChevronRightIcon:c,Cog6ToothIcon:m},setup(){const p=o(!1),r=o("0");return{collapsed:p,bypassCount:r}},template:`
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
