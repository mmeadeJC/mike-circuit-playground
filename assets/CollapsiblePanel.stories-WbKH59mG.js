import{r as o}from"./iframe-D7BbHDbG.js";import{s as n}from"./index-DCVTeUli.js";import{_ as a}from"./CollapsiblePanel.vue-Cecxp7w6.js";import"./RichText.vue-1XZLRn0K.js";import{_ as i}from"./FormField.vue-BiV6ZEgt.js";import{r as m}from"./Cog6ToothIcon-DbA3VXm8.js";import{r as c}from"./ChevronRightIcon-BrFzWSch.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2h6QqnDj.js";import"./index-DrYGcJBA.js";import"./index-oNdbppoo.js";import"./index-ZhWAdK_X.js";import"./index-Z_Cch3ng.js";import"./index-bbso60R8.js";import"./index-BKtZXsJ2.js";import"./index-DFQPCZRe.js";import"./index-BKr2PyJj.js";import"./index-5dj8dpAI.js";import"./index-BCWryaxY.js";import"./index-1reqc7Wl.js";import"./ExclamationCircleIcon-CLIjVPIb.js";import"./ExclamationTriangleIcon-uPO_hbeV.js";import"./CheckCircleIcon-Ctb-iWK2.js";import"./InformationCircleIcon-Cfsekz4Z.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Collapsible Panel",component:a,parameters:{layout:"padded"}},e={name:"Toggleable settings panel",render:()=>({components:{CollapsiblePanel:a,FormField:i,PvInputText:n,ChevronRightIcon:c,Cog6ToothIcon:m},setup(){const p=o(!1),r=o("0");return{collapsed:p,bypassCount:r}},template:`
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
