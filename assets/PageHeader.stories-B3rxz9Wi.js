import{r as o}from"./iframe-DuzLv9Pd.js";import{s}from"./index-CWdSX-TA.js";import{s as c}from"./index-D3QA_pcE.js";import"./RichText.vue-D4MvUk45.js";import{_ as r}from"./PageHeader.vue-DtI1h7PV.js";import{p as l,g as p,h as m}from"./policyMigrationComponentConstants-DKtyczDC.js";import{r as n}from"./ComputerDesktopIcon-DGbkS9Vh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BuiD5gzs.js";import"./index-ZhWAdK_X.js";import"./index-BiLRIlNb.js";import"./index-Br2-aBVM.js";import"./index-BEZ2S-VF.js";import"./index-CPNNQ3fD.js";import"./index-CO-G9M_W.js";import"./index-J_Bj38AC.js";import"./index-B-toZiH_.js";import"./index-DY4Fqf02.js";import"./Dropdown.vue-BvGCjloM.js";import"./index-BXhsDisi.js";import"./index-C1HSDRFT.js";import"./index-BMYflPr_.js";import"./index-CjiEPaTZ.js";import"./EllipsisHorizontalIcon-CpSAr9zQ.js";import"./ShieldCheckIcon-BpS1grCD.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Page Header",component:r,parameters:{layout:"fullscreen"}},e={name:"With device tag",render:()=>({components:{PageHeader:r,PvTag:s,PvDivider:c,ComputerDesktopIcon:n},setup(){return{activeTab:o("details"),detailTabs:m,shieldIcon:p,policyHeaderSubtitle:l}},template:`
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
