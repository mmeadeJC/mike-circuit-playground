import{r as o}from"./iframe-C6YxvgI9.js";import{s as n}from"./index-Dp_YoHvc.js";import{_ as a}from"./CollapsiblePanel.vue-BdApM4Z9.js";import"./RichText.vue-h6zLaVtH.js";import{_ as i}from"./FormField.vue-BTAWN9Np.js";import{r as m}from"./Cog6ToothIcon-DmdqmVoL.js";import{r as c}from"./ChevronRightIcon-DYx_DqJa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-AqntUfTj.js";import"./index-ZhWAdK_X.js";import"./index-C0ybsppr.js";import"./index-WUqO2RC_.js";import"./index-BnKDY8uA.js";import"./index-CPIDmXOH.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-DhNdrOGc.js";import"./index-BxytmV1x.js";import"./ExclamationCircleIcon-CH7OyVqW.js";import"./ExclamationTriangleIcon-ChwV-1LY.js";import"./CheckCircleIcon-Bae8Oi8q.js";import"./InformationCircleIcon-BY7njxzn.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Collapsible Panel",component:a,parameters:{layout:"padded"}},e={name:"Toggleable settings panel",render:()=>({components:{CollapsiblePanel:a,FormField:i,PvInputText:n,ChevronRightIcon:c,Cog6ToothIcon:m},setup(){const p=o(!1),r=o("0");return{collapsed:p,bypassCount:r}},template:`
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
