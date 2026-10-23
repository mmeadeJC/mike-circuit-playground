import{r as o}from"./iframe-CrzTiCu6.js";import{s}from"./index-DiksCyp3.js";import{s as c}from"./index-3NCE7FTh.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as r}from"./PageHeader.vue-C9ZyG74k.js";import{p as l,g as p,h as m}from"./policyMigrationComponentConstants-Jlo0urnD.js";import{r as n}from"./ComputerDesktopIcon-Bdhw8rQC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DpHaaPKG.js";import"./index-ZhWAdK_X.js";import"./index-BYVbZ-Ky.js";import"./index-CyFmKK29.js";import"./index-Is3bGEIS.js";import"./index-n-Vy3yQf.js";import"./index-CJtZNPwL.js";import"./index-DGRV0ejT.js";import"./index-br2uRJO8.js";import"./index-BtHZjdl_.js";import"./Dropdown.vue-B3uoPsDo.js";import"./index-DhP11m7K.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-B-mFHERX.js";import"./EllipsisHorizontalIcon-XgfY8G75.js";import"./ShieldCheckIcon-CwbvLCk-.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Page Header",component:r,parameters:{layout:"fullscreen"}},e={name:"With device tag",render:()=>({components:{PageHeader:r,PvTag:s,PvDivider:c,ComputerDesktopIcon:n},setup(){return{activeTab:o("details"),detailTabs:m,shieldIcon:p,policyHeaderSubtitle:l}},template:`
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
