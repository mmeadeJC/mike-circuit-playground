import{r as o}from"./iframe-8Q3g4suX.js";import{s}from"./index-BEvLtaLX.js";import{s as c}from"./index-cFQtYIhg.js";import"./RichText.vue-C1Ty82RV.js";import{_ as r}from"./PageHeader.vue-COzcmwfr.js";import{p as l,g as p,h as m}from"./policyMigrationComponentConstants-CIoCNzJF.js";import{r as n}from"./ComputerDesktopIcon-DDj9bIO2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-OJfjCxM5.js";import"./index-ZhWAdK_X.js";import"./index-MAZOfW6J.js";import"./index-Ck7ewAP5.js";import"./index-CZrXZwQy.js";import"./index-DpCZYySO.js";import"./index-NkGFgNPM.js";import"./index-BdLVtuk9.js";import"./index-BLMVtjtO.js";import"./index-CIl6GEky.js";import"./Dropdown.vue-CKApLVqP.js";import"./index-CkKvLbcv.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-Us1_uPk3.js";import"./EllipsisHorizontalIcon-DtE3Bb7n.js";import"./ShieldCheckIcon-W0AJus9F.js";const O={title:"Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Page Header",component:r,parameters:{layout:"fullscreen"}},e={name:"With device tag",render:()=>({components:{PageHeader:r,PvTag:s,PvDivider:c,ComputerDesktopIcon:n},setup(){return{activeTab:o("details"),detailTabs:m,shieldIcon:p,policyHeaderSubtitle:l}},template:`
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
