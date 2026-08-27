import{s as i}from"./index-D-Q9u-0k.js";import{s as n}from"./index-CUoDpPp7.js";import{p as o}from"./policyMigrationComponentConstants-BCnQhr6a.js";import{r as s}from"./ComputerDesktopIcon-BY-6jc1E.js";import"./index-oNdbppoo.js";import"./iframe-D7BbHDbG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ZhWAdK_X.js";import"./ShieldCheckIcon-BY_KE66K.js";const P={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Divider",component:i,parameters:{layout:"padded"}},e={name:"Header subtitle divider",render:()=>({components:{PvDivider:i,PvTag:n,ComputerDesktopIcon:s},setup(){return{policyHeaderSubtitle:o}},template:`
      <div class="flex items-center gap-sm">
        <PvTag value="Device" severity="accent-purple">
          <template #icon>
            <ComputerDesktopIcon class="w-3.5 h-3.5" />
          </template>
        </PvTag>
        <PvDivider layout="vertical" />
        <span class="text-body-md text-neutral-subtle">{{ policyHeaderSubtitle }}</span>
      </div>
    `})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Header subtitle divider',
  render: () => ({
    components: {
      PvDivider: Divider,
      PvTag: Tag,
      ComputerDesktopIcon
    },
    setup() {
      return {
        policyHeaderSubtitle
      };
    },
    template: \`
      <div class="flex items-center gap-sm">
        <PvTag value="Device" severity="accent-purple">
          <template #icon>
            <ComputerDesktopIcon class="w-3.5 h-3.5" />
          </template>
        </PvTag>
        <PvDivider layout="vertical" />
        <span class="text-body-md text-neutral-subtle">{{ policyHeaderSubtitle }}</span>
      </div>
    \`
  })
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const y=["HeaderSubtitleDivider"];export{e as HeaderSubtitleDivider,y as __namedExportsOrder,P as default};
