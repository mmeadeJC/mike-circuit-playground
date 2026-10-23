import{v as w,r as t,k as l}from"./iframe-CrzTiCu6.js";import{s as I}from"./index-DGRV0ejT.js";import{s as h}from"./index-DhP11m7K.js";import{s as y,a as x}from"./index-B-mFHERX.js";import"./RichText.vue-Bo-7vQsj.js";import{_ as P}from"./Paginator.vue-AbHFmpig.js";import{_ as T}from"./PageHeader.vue-C9ZyG74k.js";import{_ as G}from"./DashboardPageLayout.vue-D9U3DZK6.js";import{_}from"./UserTopBar-BVWHVj9O.js";import{_ as L}from"./UserPortalTileCard-DQdWu0tY.js";import{_ as M,c as U}from"./UserDemoNav--RZucQpV.js";import{w as R,a as D,b as F}from"./welcomeGabrielServersData-DgShd-rg.js";import{r as B}from"./ArrowLeftIcon-CDYutihO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-br2uRJO8.js";import"./index-n-Vy3yQf.js";import"./index-DpHaaPKG.js";import"./index-BtHZjdl_.js";import"./index-ZhWAdK_X.js";import"./index-CyFmKK29.js";import"./index-CzzR1Eo2.js";import"./index-Dc1OLfrE.js";import"./index-Cp7GERer.js";import"./index-B9HYPvme.js";import"./index-BAK6AhQo.js";import"./index-DRWkJ3r7.js";import"./index-DHkFNkeW.js";import"./index-ukZ37hHN.js";import"./index-Bli4s4Lb.js";import"./index-BRT9CP7z.js";import"./index-B6P6vZ8T.js";import"./ChevronRightIcon-BtziqKKH.js";import"./index-BYVbZ-Ky.js";import"./index-Is3bGEIS.js";import"./index-CJtZNPwL.js";import"./Dropdown.vue-B3uoPsDo.js";import"./EllipsisHorizontalIcon-XgfY8G75.js";import"./BasePageLayout.vue-DIEW9flY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ArrowTopRightOnSquareIcon-DS4hPvi9.js";import"./LockClosedIcon-7BmmzuGg.js";import"./StarIcon-C8GBQttC.js";import"./AppNavigation.vue-DJCDVPu-.js";import"./index-B1VXYqPb.js";import"./index-IX3fe5I4.js";import"./index-B5zsakeD.js";import"./index-CjqWYhin.js";import"./ArrowRightStartOnRectangleIcon-CBJnXu54.js";import"./CubeIcon-ChOMRu_n.js";import"./CpuChipIcon-Df3nujkA.js";const Re={title:"Mike's Playground/User Portal/Welcome Gabriel (Servers)",parameters:{layout:"fullscreen"}},a={render:()=>({components:{UserDemoNav:M,UserTopBar:_,PageHeader:T,DashboardPageLayout:G,UserPortalTileCard:L,Paginator:P,Button:I,IconField:x,InputIcon:y,InputText:h,ArrowLeftIcon:B,MagnifyingGlassIcon:w},setup(){const p=t("servers"),i=t(""),d=t(0),u=t(50),o=t(R.map(e=>({...e}))),f=U({userName:"Gabriel Ramos",userEmail:"gabriel.ramos@company.com",userInitials:"GR"}),s=l(()=>{const e=i.value.trim().toLowerCase();return e?o.value.filter(r=>r.label.toLowerCase().includes(e)):o.value}),v=l(()=>s.value.length);function g(e){const r=o.value.find(b=>b.id===e);r&&(r.favorite=!r.favorite)}return{activeTab:p,searchQuery:i,first:d,rows:u,filteredTiles:s,totalRecords:v,welcomeGabrielTabs:F,welcomeGabrielNavMenuItems:D,profileMenuItems:f,toggleFavorite:g}},template:`
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
