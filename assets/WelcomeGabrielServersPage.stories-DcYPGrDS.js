import{v as w,r as t,k as l}from"./iframe-DMCY07cZ.js";import{s as I}from"./index-C8jYejGu.js";import{s as h}from"./index-I-4AEmq6.js";import{s as y,a as x}from"./index-4qDJp6e0.js";import"./RichText.vue-CvF5yRyM.js";import{_ as P}from"./Paginator.vue-B0o699Jl.js";import{_ as T}from"./PageHeader.vue-C3zDDtuT.js";import{_ as G}from"./DashboardPageLayout.vue-N2JmdlZu.js";import{_}from"./UserTopBar-BYzxWBYM.js";import{_ as L}from"./UserPortalTileCard-BguPOSgG.js";import{_ as M,c as U}from"./UserDemoNav-CpWQ-PZL.js";import{w as R,a as D,b as F}from"./welcomeGabrielServersData-BRiXht8m.js";import{r as B}from"./ArrowLeftIcon-BBvjnoWm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DA5-wtQK.js";import"./index-CkkhZWly.js";import"./index-CR_NoeiN.js";import"./index-Csz9fdiB.js";import"./index-ZhWAdK_X.js";import"./index-Bx337-gk.js";import"./index-5ggD6TA1.js";import"./index-DBPbF2tz.js";import"./index-CNtARqCh.js";import"./index-D3MAoQAU.js";import"./index-CAIS5x6K.js";import"./index-BKI-cOV2.js";import"./index-CIjxQS-N.js";import"./index-8ifyCe0e.js";import"./index-0Q9rnkj1.js";import"./index-Dcp0P5L_.js";import"./index-c_6rTq8P.js";import"./ChevronRightIcon-0prVeiSQ.js";import"./index-CMmLDw0_.js";import"./index-ZFjHbOyq.js";import"./index-w2uGKA1Z.js";import"./Dropdown.vue--UM-sfQu.js";import"./EllipsisHorizontalIcon-Dntkn-if.js";import"./BasePageLayout.vue-D2fYOqvl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ArrowTopRightOnSquareIcon-CIGo4dDp.js";import"./LockClosedIcon-D4UdMKEU.js";import"./StarIcon-BoCxGd1G.js";import"./AppNavigation.vue-Di9_-vuu.js";import"./index-DOYqFgbr.js";import"./index-CFqI3cb6.js";import"./index-CyTLq4VN.js";import"./index-C0Jx-WGa.js";import"./ArrowRightStartOnRectangleIcon-Bka7PvIm.js";import"./CubeIcon-ILKS6i81.js";import"./CpuChipIcon-xpUfEw0F.js";const Re={title:"Mike's Playground/User Portal/Welcome Gabriel (Servers)",parameters:{layout:"fullscreen"}},a={render:()=>({components:{UserDemoNav:M,UserTopBar:_,PageHeader:T,DashboardPageLayout:G,UserPortalTileCard:L,Paginator:P,Button:I,IconField:x,InputIcon:y,InputText:h,ArrowLeftIcon:B,MagnifyingGlassIcon:w},setup(){const p=t("servers"),i=t(""),d=t(0),u=t(50),o=t(R.map(e=>({...e}))),f=U({userName:"Gabriel Ramos",userEmail:"gabriel.ramos@company.com",userInitials:"GR"}),s=l(()=>{const e=i.value.trim().toLowerCase();return e?o.value.filter(r=>r.label.toLowerCase().includes(e)):o.value}),v=l(()=>s.value.length);function g(e){const r=o.value.find(b=>b.id===e);r&&(r.favorite=!r.favorite)}return{activeTab:p,searchQuery:i,first:d,rows:u,filteredTiles:s,totalRecords:v,welcomeGabrielTabs:F,welcomeGabrielNavMenuItems:D,profileMenuItems:f,toggleFavorite:g}},template:`
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
