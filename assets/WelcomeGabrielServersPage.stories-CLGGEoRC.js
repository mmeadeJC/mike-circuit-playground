import{m as a,v as I,r,k as n}from"./iframe-wHZiWscM.js";import{s as x}from"./index-sD1-d5gW.js";import{s as y}from"./index-BZ44v4AP.js";import{s as h,a as P}from"./index-B9GWGLe7.js";import"./RichText.vue-CHGMbC98.js";import{_ as S}from"./Paginator.vue-CcRzGc69.js";import{_ as T}from"./PageHeader.vue-CAUSrv2U.js";import{_ as G}from"./DashboardPageLayout.vue-Ctol66FG.js";import{_ as L}from"./UserTopBar-CFE86-S_.js";import{_ as A}from"./UserPortalTileCard-BQm3ZPdK.js";import{r as _,_ as R,c as U}from"./UserDemoNav-Dyz9o5gG.js";import{s as M,l as D,p as k}from"./index-Andb7bwO.js";import{r as F}from"./ArrowLeftIcon-BueVzbuM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuolNdSU.js";import"./index-D_4jZi02.js";import"./index-_YupRtQ5.js";import"./index-5yBlAq5O.js";import"./index-ZhWAdK_X.js";import"./index-DhULWF8q.js";import"./index-1K2xgv1q.js";import"./index-8Q6wweZ5.js";import"./index-B52hguGd.js";import"./index-BsadxdHP.js";import"./index-CK8YOc-s.js";import"./index-OomjoOn0.js";import"./index-DG2sTEJu.js";import"./index-B0f83xA1.js";import"./index-Box4ManB.js";import"./index-NL-pVcRR.js";import"./index-DBRsCQYT.js";import"./ChevronRightIcon-CCd9mxHV.js";import"./index-dz_S8yXK.js";import"./index-BSrPWlqO.js";import"./index-BX58BE5p.js";import"./Dropdown.vue-BSd8d_yA.js";import"./EllipsisHorizontalIcon-BHjLtj66.js";import"./BasePageLayout.vue-BxTNDttc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ArrowTopRightOnSquareIcon-Di75X2M6.js";import"./LockClosedIcon-Ch9bRAQi.js";import"./StarIcon-DK6Nr4X7.js";import"./AppNavigation.vue-i1RfVmw-.js";import"./index-DGe5eYzI.js";import"./index-BsNWgMfo.js";import"./index-BQHp0V5H.js";import"./ArrowRightStartOnRectangleIcon-CLdR-YKA.js";import"./CubeIcon-Co8lyA_E.js";import"./CpuChipIcon-D7soRAGz.js";const B=[{label:"All Applications",leftIcon:a(M)},{label:"Requests",leftIcon:a(_)},{label:"Tasks",leftIcon:a(D)},{label:"Security",leftIcon:a(k)}],C=[{label:"All Resources (143)",value:"all"},{label:"Applications (35)",value:"applications"},{label:"Privileged Websites (32)",value:"privileged-websites"},{label:"Servers (32)",value:"servers"},{label:"Databases (32)",value:"databases"},{label:"Favorites (46)",value:"favorites"}],N=[{id:"1",label:"Amazon Linux Bastion 23",logoSrc:"/logos/aws.png",favorite:!0},{id:"2",label:"Red Hat Enterprise Linux Prod",logoSrc:"/logos/os/redhat.png",favorite:!0},{id:"3",label:"CentOS Monitoring 7",logoSrc:"/logos/os/centos.png",favorite:!0},{id:"4",label:"Debian Apt Mirror 6",logoSrc:"/logos/os/debian.png",favorite:!0},{id:"5",label:"Fedora Workstation 2",logoSrc:"/logos/os/fedora.png",favorite:!0},{id:"6",label:"Kubernetes EKS Cluster 5",logoSrc:"/logos/os/kubernetes.png",favorite:!0},{id:"7",label:"Linux Prod",logoSrc:"/logos/apple.png",favorite:!0},{id:"8",label:"Custom Appliance 1",favorite:!1},{id:"9",label:"Oracle Linux Database 8",logoSrc:"/logos/os/oracle.png",favorite:!0},{id:"10",label:"Red Hat Enterprise Linux Dev 9",logoSrc:"/logos/os/redhat.png",favorite:!0},{id:"11",label:"SUSE SAP App Server 11",logoSrc:"/logos/os/suse.png",favorite:!0},{id:"12",label:"Amazon Linux Web 21",logoSrc:"/logos/aws.png",favorite:!0},{id:"13",label:"Analytics GPU Node 14",logoSrc:"/logos/aws.png",favorite:!0},{id:"14",label:"Amazon Linux Analytics 7",logoSrc:"/logos/aws.png",favorite:!0},{id:"15",label:"Amazon Linux Dev 12",logoSrc:"/logos/aws.png",favorite:!0},{id:"16",label:"Ubuntu Prod Jump Host 2",logoSrc:"/logos/os/ubuntu.png",favorite:!0},{id:"17",label:"Ubuntu QA Sandbox 13",logoSrc:"/logos/os/ubuntu.png",favorite:!0},{id:"18",label:"Amazon Linux QA 17",logoSrc:"/logos/aws.png",favorite:!0},{id:"19",label:"Analytics Prod DB 1",logoSrc:"/logos/aws.png",favorite:!0},{id:"20",label:"Analytics Sandbox 9",logoSrc:"/logos/aws.png",favorite:!0}],ke={title:"Mike's Playground/User Portal/Welcome Gabriel (Servers)",parameters:{layout:"fullscreen"}},l={render:()=>({components:{UserDemoNav:R,UserTopBar:L,PageHeader:T,DashboardPageLayout:G,UserPortalTileCard:A,Paginator:S,Button:x,IconField:P,InputIcon:h,InputText:y,ArrowLeftIcon:F,MagnifyingGlassIcon:I},setup(){const u=r("servers"),s=r(""),d=r(0),g=r(50),t=r(N.map(e=>({...e}))),f=U({userName:"Gabriel Ramos",userEmail:"gabriel.ramos@company.com",userInitials:"GR"}),i=n(()=>{const e=s.value.trim().toLowerCase();return e?t.value.filter(o=>o.label.toLowerCase().includes(e)):t.value}),v=n(()=>i.value.length);function b(e){const o=t.value.find(w=>w.id===e);o&&(o.favorite=!o.favorite)}return{activeTab:u,searchQuery:s,first:d,rows:g,filteredTiles:i,totalRecords:v,welcomeGabrielTabs:C,welcomeGabrielNavMenuItems:B,profileMenuItems:f,toggleFavorite:b}},template:`
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
    `})};var c,m,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Fe=["Default"];export{l as Default,Fe as __namedExportsOrder,ke as default};
