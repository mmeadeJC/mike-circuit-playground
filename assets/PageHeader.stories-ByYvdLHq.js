import{r as o}from"./iframe-e359xqcE.js";import{s}from"./index-B6YXkmJR.js";import{s as c}from"./index-BLqIZ8v0.js";import"./RichText.vue-DSFy4cWp.js";import{_ as r}from"./PageHeader.vue-B-RRdH_3.js";import{p as l,b as p,c as m}from"./policyMigrationComponentConstants-D7TbH3zR.js";import{r as n}from"./ComputerDesktopIcon-CZ49U3bB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgftoVju.js";import"./index-ZhWAdK_X.js";import"./index-DKwf0szZ.js";import"./index-DGdP0FUD.js";import"./index-Dqqj7jsW.js";import"./index-5GyuQi88.js";import"./index-B4Kwt-uL.js";import"./index-CKnS-nTZ.js";import"./index-B8Ht3GzB.js";import"./index-BxhYpKxH.js";import"./Dropdown.vue-BCXCU-gF.js";import"./index-C8Trrx-R.js";import"./index-C1u4NmrO.js";import"./index-BtrtblyE.js";import"./index-D72zYeEF.js";import"./EllipsisHorizontalIcon-CxnQmkwF.js";import"./ShieldCheckIcon-C8LDGAuf.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Page Header",component:r,parameters:{layout:"fullscreen"}},e={name:"With device tag",render:()=>({components:{PageHeader:r,PvTag:s,PvDivider:c,ComputerDesktopIcon:n},setup(){return{activeTab:o("details"),detailTabs:m,shieldIcon:p,policyHeaderSubtitle:l}},template:`
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
