import{v as w,r as t,k as l}from"./iframe-8Q3g4suX.js";import{s as I}from"./index-BdLVtuk9.js";import{s as h}from"./index-CkKvLbcv.js";import{s as y,a as x}from"./index-Us1_uPk3.js";import"./RichText.vue-C1Ty82RV.js";import{_ as P}from"./Paginator.vue-CcesqfBl.js";import{_ as T}from"./PageHeader.vue-COzcmwfr.js";import{_ as G}from"./DashboardPageLayout.vue-rVc-CY1h.js";import{_}from"./UserTopBar-BKcHbliZ.js";import{_ as L}from"./UserPortalTileCard-CwqeOlgX.js";import{_ as M,c as U}from"./UserDemoNav-Da9e_L54.js";import{w as R,a as D,b as F}from"./welcomeGabrielServersData-C4bSEstG.js";import{r as B}from"./ArrowLeftIcon-CzirQB4t.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BLMVtjtO.js";import"./index-DpCZYySO.js";import"./index-OJfjCxM5.js";import"./index-CIl6GEky.js";import"./index-ZhWAdK_X.js";import"./index-Ck7ewAP5.js";import"./index-IpaK9p3N.js";import"./index-BMnuNU6D.js";import"./index-DGY9u_rI.js";import"./index-MzEPBPaO.js";import"./index-B9TYHysj.js";import"./index-VujJlMzw.js";import"./index-DRA9vNfv.js";import"./index-BL2_KjjI.js";import"./index-Bpd14J7o.js";import"./index-C6vF-uE7.js";import"./index--cVum_Py.js";import"./ChevronRightIcon-CFN2Ud17.js";import"./index-MAZOfW6J.js";import"./index-CZrXZwQy.js";import"./index-NkGFgNPM.js";import"./Dropdown.vue-CKApLVqP.js";import"./EllipsisHorizontalIcon-DtE3Bb7n.js";import"./BasePageLayout.vue-CwV5cDx0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ArrowTopRightOnSquareIcon-D4YoyqIZ.js";import"./LockClosedIcon-CNk7k573.js";import"./StarIcon-DyZx2qfY.js";import"./AppNavigation.vue-DywdLFt4.js";import"./index-DirUApOz.js";import"./index-MkGR21B_.js";import"./index-Rn1cm77L.js";import"./index-DPUoOQbX.js";import"./ArrowRightStartOnRectangleIcon-Dk2jWnPV.js";import"./CubeIcon-C4MIM8T-.js";import"./CpuChipIcon-DVt0p-5v.js";const Re={title:"Mike's Playground/User Portal/Welcome Gabriel (Servers)",parameters:{layout:"fullscreen"}},a={render:()=>({components:{UserDemoNav:M,UserTopBar:_,PageHeader:T,DashboardPageLayout:G,UserPortalTileCard:L,Paginator:P,Button:I,IconField:x,InputIcon:y,InputText:h,ArrowLeftIcon:B,MagnifyingGlassIcon:w},setup(){const p=t("servers"),i=t(""),d=t(0),u=t(50),o=t(R.map(e=>({...e}))),f=U({userName:"Gabriel Ramos",userEmail:"gabriel.ramos@company.com",userInitials:"GR"}),s=l(()=>{const e=i.value.trim().toLowerCase();return e?o.value.filter(r=>r.label.toLowerCase().includes(e)):o.value}),v=l(()=>s.value.length);function g(e){const r=o.value.find(b=>b.id===e);r&&(r.favorite=!r.favorite)}return{activeTab:p,searchQuery:i,first:d,rows:u,filteredTiles:s,totalRecords:v,welcomeGabrielTabs:F,welcomeGabrielNavMenuItems:D,profileMenuItems:f,toggleFavorite:g}},template:`
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
