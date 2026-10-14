import{v as w,r as t,k as l}from"./iframe-BFKWv3KJ.js";import{s as I}from"./index-CtfEZ-mH.js";import{s as h}from"./index-2rr2RyNS.js";import{s as y,a as x}from"./index-D77ELRyA.js";import"./RichText.vue-vrSf4OCs.js";import{_ as P}from"./Paginator.vue-B6hVKag8.js";import{_ as T}from"./PageHeader.vue-CGtQuNfk.js";import{_ as G}from"./DashboardPageLayout.vue-D-XAk_vn.js";import{_}from"./UserTopBar-C2RiiLaM.js";import{_ as L}from"./UserPortalTileCard-2Bhq4cVv.js";import{_ as M,c as U}from"./UserDemoNav-BIcsaIsz.js";import{w as R,a as D,b as F}from"./welcomeGabrielServersData-BkHflGLy.js";import{r as B}from"./ArrowLeftIcon-BgI2ESLC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CfbpxYVU.js";import"./index-BMkyGRgX.js";import"./index-DUVhZ73h.js";import"./index-BvSgnTKr.js";import"./index-ZhWAdK_X.js";import"./index-h_LiPJ46.js";import"./index-CT7f8Zbq.js";import"./index-HEPxPyLV.js";import"./index-CuXoLfeA.js";import"./index-BXYT2gRT.js";import"./index-CCVlNmxk.js";import"./index-BNdKjMYw.js";import"./index-2n8eVSrk.js";import"./index-D_AG_8rG.js";import"./index-BoZ1l_-u.js";import"./index-DICFt-SZ.js";import"./index-BVkesBF5.js";import"./ChevronRightIcon-DUJGUktX.js";import"./index-BOlU20yb.js";import"./index-bbn6QzYu.js";import"./index-CFp6THYW.js";import"./Dropdown.vue-Cz9UQQvj.js";import"./EllipsisHorizontalIcon-De_59ltg.js";import"./BasePageLayout.vue-DTEUtrED.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ArrowTopRightOnSquareIcon-P9gMEZmv.js";import"./LockClosedIcon-ISxSCf5K.js";import"./StarIcon-DbV_0Wc8.js";import"./AppNavigation.vue-DOzZfcBr.js";import"./index-F_qZZ5l1.js";import"./index-EcMNudkA.js";import"./index-UPYa1M-T.js";import"./index-CaoDn_b_.js";import"./ArrowRightStartOnRectangleIcon-B1SaEZKF.js";import"./CubeIcon-h3O8XWG3.js";import"./CpuChipIcon-CERMgrl8.js";const Re={title:"Mike's Playground/User Portal/Welcome Gabriel (Servers)",parameters:{layout:"fullscreen"}},a={render:()=>({components:{UserDemoNav:M,UserTopBar:_,PageHeader:T,DashboardPageLayout:G,UserPortalTileCard:L,Paginator:P,Button:I,IconField:x,InputIcon:y,InputText:h,ArrowLeftIcon:B,MagnifyingGlassIcon:w},setup(){const p=t("servers"),i=t(""),d=t(0),u=t(50),o=t(R.map(e=>({...e}))),f=U({userName:"Gabriel Ramos",userEmail:"gabriel.ramos@company.com",userInitials:"GR"}),s=l(()=>{const e=i.value.trim().toLowerCase();return e?o.value.filter(r=>r.label.toLowerCase().includes(e)):o.value}),v=l(()=>s.value.length);function g(e){const r=o.value.find(b=>b.id===e);r&&(r.favorite=!r.favorite)}return{activeTab:p,searchQuery:i,first:d,rows:u,filteredTiles:s,totalRecords:v,welcomeGabrielTabs:F,welcomeGabrielNavMenuItems:D,profileMenuItems:f,toggleFavorite:g}},template:`
      <div class="flex h-screen overflow-hidden bg-neutral-surface">
        <aside class="flex w-[280px] shrink-0 flex-col border-r border-neutral-default_solid bg-neutral-surface">
          <UserDemoNav
            class="min-h-0 flex-1"
            active-item="all applications"
            :menu-items="welcomeGabrielNavMenuItems"
            :profile-menu-items="profileMenuItems"
            user-name="Gabriel Ramos"
            user-email="gabriel.ramos@company.com"
            user-initials="GR"
          />
          <div class="px-md pb-md">
            <Button
              label="Return to main menu"
              severity="secondary"
              variant="outlined"
              size="small"
              class="w-full"
            >
              <template #icon="iconProps">
                <ArrowLeftIcon :class="iconProps.class" />
              </template>
            </Button>
          </div>
        </aside>

        <div class="flex min-w-0 flex-1 flex-col overflow-auto">
          <UserTopBar />

          <PageHeader
            title="Welcome, Gabriel"
            subtitle-text="Launch your apps and privileged resources at the single click."
            :tabs="welcomeGabrielTabs"
            v-model:active-tab="activeTab"
            tabs-with-padding
          >
            <template #actions>
              <IconField>
                <InputIcon>
                  <MagnifyingGlassIcon />
                </InputIcon>
                <InputText
                  v-model="searchQuery"
                  placeholder="Search..."
                  class="w-60"
                  size="small"
                />
              </IconField>
            </template>
          </PageHeader>

          <DashboardPageLayout class="w-full! flex-1!" max-width="1280">
            <div class="flex flex-col gap-md">
              <div class="grid grid-cols-2 gap-md sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <UserPortalTileCard
                  v-for="tile in filteredTiles"
                  :key="tile.id"
                  :label="tile.label"
                  :logo-src="tile.logoSrc"
                  :favorite="tile.favorite"
                  @toggle-favorite="toggleFavorite(tile.id)"
                />
              </div>

              <Paginator
                v-model:first="first"
                v-model:rows="rows"
                :total-records="totalRecords"
                :show-rows-per-page-options="true"
                :rows-per-page-options="[
                  { label: '50 items per page', value: 50 },
                  { label: '100 items per page', value: 100 },
                ]"
              />
            </div>
          </DashboardPageLayout>
        </div>
      </div>
    `})};var m,c,n;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UserDemoNav,
      UserTopBar,
      PageHeader,
      DashboardPageLayout,
      UserPortalTileCard,
      Paginator,
      Button,
      IconField,
      InputIcon,
      InputText,
      ArrowLeftIcon,
      MagnifyingGlassIcon
    },
    setup() {
      const activeTab = ref('servers');
      const searchQuery = ref('');
      const first = ref(0);
      const rows = ref(50);
      const tiles = ref<UserPortalServerTile[]>(welcomeGabrielServerTiles.map(tile => ({
        ...tile
      })));
      const profileMenuItems = createUserPortalProfileMenuItems({
        userName: 'Gabriel Ramos',
        userEmail: 'gabriel.ramos@company.com',
        userInitials: 'GR'
      });
      const filteredTiles = computed(() => {
        const query = searchQuery.value.trim().toLowerCase();
        if (!query) return tiles.value;
        return tiles.value.filter(tile => tile.label.toLowerCase().includes(query));
      });
      const totalRecords = computed(() => filteredTiles.value.length);
      function toggleFavorite(id: string) {
        const tile = tiles.value.find(entry => entry.id === id);
        if (tile) tile.favorite = !tile.favorite;
      }
      return {
        activeTab,
        searchQuery,
        first,
        rows,
        filteredTiles,
        totalRecords,
        welcomeGabrielTabs,
        welcomeGabrielNavMenuItems,
        profileMenuItems,
        toggleFavorite
      };
    },
    template: \`
      <div class="flex h-screen overflow-hidden bg-neutral-surface">
        <aside class="flex w-[280px] shrink-0 flex-col border-r border-neutral-default_solid bg-neutral-surface">
          <UserDemoNav
            class="min-h-0 flex-1"
            active-item="all applications"
            :menu-items="welcomeGabrielNavMenuItems"
            :profile-menu-items="profileMenuItems"
            user-name="Gabriel Ramos"
            user-email="gabriel.ramos@company.com"
            user-initials="GR"
          />
          <div class="px-md pb-md">
            <Button
              label="Return to main menu"
              severity="secondary"
              variant="outlined"
              size="small"
              class="w-full"
            >
              <template #icon="iconProps">
                <ArrowLeftIcon :class="iconProps.class" />
              </template>
            </Button>
          </div>
        </aside>

        <div class="flex min-w-0 flex-1 flex-col overflow-auto">
          <UserTopBar />

          <PageHeader
            title="Welcome, Gabriel"
            subtitle-text="Launch your apps and privileged resources at the single click."
            :tabs="welcomeGabrielTabs"
            v-model:active-tab="activeTab"
            tabs-with-padding
          >
            <template #actions>
              <IconField>
                <InputIcon>
                  <MagnifyingGlassIcon />
                </InputIcon>
                <InputText
                  v-model="searchQuery"
                  placeholder="Search..."
                  class="w-60"
                  size="small"
                />
              </IconField>
            </template>
          </PageHeader>

          <DashboardPageLayout class="w-full! flex-1!" max-width="1280">
            <div class="flex flex-col gap-md">
              <div class="grid grid-cols-2 gap-md sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <UserPortalTileCard
                  v-for="tile in filteredTiles"
                  :key="tile.id"
                  :label="tile.label"
                  :logo-src="tile.logoSrc"
                  :favorite="tile.favorite"
                  @toggle-favorite="toggleFavorite(tile.id)"
                />
              </div>

              <Paginator
                v-model:first="first"
                v-model:rows="rows"
                :total-records="totalRecords"
                :show-rows-per-page-options="true"
                :rows-per-page-options="[
                  { label: '50 items per page', value: 50 },
                  { label: '100 items per page', value: 100 },
                ]"
              />
            </div>
          </DashboardPageLayout>
        </div>
      </div>
    \`
  })
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const De=["Default"];export{a as Default,De as __namedExportsOrder,Re as default};
