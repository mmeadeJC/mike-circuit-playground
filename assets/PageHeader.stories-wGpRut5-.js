import{r as o}from"./iframe-DSI7I_YQ.js";import{s}from"./index-B3LPCdXq.js";import{s as c}from"./index-Cz6kxq3w.js";import"./RichText.vue-DARNTLdh.js";import{_ as r}from"./PageHeader.vue-8CZb4mnW.js";import{p as l,b as p,c as m}from"./policyMigrationComponentConstants-DJ6Cg_qF.js";import{r as n}from"./ComputerDesktopIcon-DE9MREWp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Ck3k_J8K.js";import"./index-ZhWAdK_X.js";import"./index-uwcmB5ii.js";import"./index-Cm1NVGCj.js";import"./index-B89_K_JM.js";import"./index-Cg08wAe5.js";import"./index-KUyW3X8b.js";import"./index-DdDMkWFP.js";import"./index-DASh1IA2.js";import"./index-CwTDpyKH.js";import"./Dropdown.vue-D3A6JM3M.js";import"./index-CbI5Nc1U.js";import"./index-bfryJj2q.js";import"./index-DKupdcS7.js";import"./index-DsdYTbg9.js";import"./EllipsisHorizontalIcon-BAmumi3c.js";import"./ShieldCheckIcon-nGYAINf2.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Page Header",component:r,parameters:{layout:"fullscreen"}},e={name:"With device tag",render:()=>({components:{PageHeader:r,PvTag:s,PvDivider:c,ComputerDesktopIcon:n},setup(){return{activeTab:o("details"),detailTabs:m,shieldIcon:p,policyHeaderSubtitle:l}},template:`
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
