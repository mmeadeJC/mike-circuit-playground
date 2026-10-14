import{r as o}from"./iframe-C6YxvgI9.js";import{s}from"./index-jrOAnztS.js";import{s as c}from"./index-CZUO3voq.js";import"./RichText.vue-h6zLaVtH.js";import{_ as r}from"./PageHeader.vue-MVpvswyO.js";import{p as l,g as p,h as m}from"./policyMigrationComponentConstants-D9sxqnnN.js";import{r as n}from"./ComputerDesktopIcon-CU9tTOLC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AqntUfTj.js";import"./index-ZhWAdK_X.js";import"./index-DmantTCP.js";import"./index-BxytmV1x.js";import"./index-DlFKO-zo.js";import"./index-BnKDY8uA.js";import"./index-Ct0lVA_L.js";import"./index-DNf9RvZr.js";import"./index-0tFSCsg7.js";import"./index-DhNdrOGc.js";import"./Dropdown.vue-DTfK3dWE.js";import"./index-Dp_YoHvc.js";import"./index-7GMQJDkB.js";import"./index-3EU1b8VQ.js";import"./index-B8A-AHQI.js";import"./EllipsisHorizontalIcon-BY6Srncl.js";import"./ShieldCheckIcon-cVyPPREN.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Page Header",component:r,parameters:{layout:"fullscreen"}},e={name:"With device tag",render:()=>({components:{PageHeader:r,PvTag:s,PvDivider:c,ComputerDesktopIcon:n},setup(){return{activeTab:o("details"),detailTabs:m,shieldIcon:p,policyHeaderSubtitle:l}},template:`
      <div class="bg-neutral-surface">
        <PageHeader
          title="FileVault 2"
          :icon="shieldIcon"
          :tabs="detailTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag value="Device" severity="accent-purple">
                <template #icon>
                  <ComputerDesktopIcon class="w-3.5 h-3.5" />
                </template>
              </PvTag>
              <PvDivider layout="vertical" />
              <span class="text-body-md text-neutral-subtle">{{ policyHeaderSubtitle }}</span>
            </div>
          </template>
        </PageHeader>
      </div>
    `})};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'With device tag',
  render: () => ({
    components: {
      PageHeader,
      PvTag: Tag,
      PvDivider: Divider,
      ComputerDesktopIcon
    },
    setup() {
      const activeTab = ref('details');
      return {
        activeTab,
        detailTabs: policyDetailTabs,
        shieldIcon: policyShieldIcon,
        policyHeaderSubtitle
      };
    },
    template: \`
      <div class="bg-neutral-surface">
        <PageHeader
          title="FileVault 2"
          :icon="shieldIcon"
          :tabs="detailTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag value="Device" severity="accent-purple">
                <template #icon>
                  <ComputerDesktopIcon class="w-3.5 h-3.5" />
                </template>
              </PvTag>
              <PvDivider layout="vertical" />
              <span class="text-body-md text-neutral-subtle">{{ policyHeaderSubtitle }}</span>
            </div>
          </template>
        </PageHeader>
      </div>
    \`
  })
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const q=["WithDeviceTag"];export{e as WithDeviceTag,q as __namedExportsOrder,O as default};
