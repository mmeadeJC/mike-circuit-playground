<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import {
  CopyButton,
  DashboardPageLayout,
  MessageNotification,
  PageHeader,
  ProgressSpinner,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Tag from 'primevue/tag';
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  CommandLineIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import UserTopBar from '@/components/UserTopBar.vue';
import UserPortalTileCard from '@/components/UserPortalTileCard.vue';
import UserDemoNav from '@/components/Nav/UserDemoNav.vue';
import { createUserPortalProfileMenuItems } from '@/components/Nav/userPortalNavData';
import {
  welcomeGabrielNavMenuItems,
  welcomeGabrielTabs,
} from '../../user-portal/data/welcomeGabrielServersData';
import {
  clusterHealth,
  initialClusters,
  initialJumpServers,
  initialResources,
  type PamResource,
} from './data/clusterData';

type Scenario = 'list' | 'connect' | 'direct' | 'error';

const props = withDefaults(defineProps<{ scenario?: Scenario }>(), { scenario: 'list' });

const servers = initialJumpServers();
const clusters = initialClusters();
const resources = initialResources().filter((r) => r.clusterId);

const activeTab = ref('servers');
const profileMenuItems = createUserPortalProfileMenuItems({
  userName: 'Gabriel Ramos',
  userEmail: 'gabriel.ramos@company.com',
  userInitials: 'GR',
});

// scenario → which resource / dialog to preset
const presetResource = (id: string) => resources.find((r) => r.id === id) ?? resources[0];
const current = ref<PamResource | null>(null);
const showConnect = ref(false);
const showDirect = ref(false);
const showError = ref(false);
const phase = ref<'selecting' | 'connected'>('selecting');
let timer: ReturnType<typeof setTimeout> | undefined;

const clusterOf = (r: PamResource | null) => clusters.find((c) => c.id === r?.clusterId) ?? null;
const eligible = (r: PamResource | null) => {
  const c = clusterOf(r);
  return c ? clusterHealth(c, servers) !== 'Unavailable' : false;
};

function connect(r: PamResource) {
  current.value = r;
  if (!eligible(r)) {
    showError.value = true;
    return;
  }
  showConnect.value = true;
  phase.value = 'selecting';
  clearTimeout(timer);
  // selection happens once at connection start; session then stays on that server
  timer = setTimeout(() => (phase.value = 'connected'), 1400);
}
function directAccess(r: PamResource) {
  current.value = r;
  if (!eligible(r)) {
    showError.value = true;
    return;
  }
  showDirect.value = true;
}

const protocolFor = (r: PamResource | null) => (r?.type === 'Database' ? 'Database' : r?.type === 'Website' ? 'HTTPS' : 'SSH');
const sshCommand = computed(() => {
  const c = clusterOf(current.value);
  return c ? `ssh -p ${c.entryPort} gabriel.ramos@${c.entryPoint}` : '';
});

watch(
  () => props.scenario,
  (s) => {
    if (s === 'connect') connect(presetResource('r-2'));
    if (s === 'direct') directAccess(presetResource('r-2'));
    if (s === 'error') connect(presetResource('r-4'));
  },
  { immediate: true }
);
onBeforeUnmount(() => clearTimeout(timer));

// The user never sees or chooses which Jump Server serves the connection (PPB-110).
const cluster = computed(() => clusterOf(current.value));
</script>

<template>
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
    </aside>

    <div class="flex min-w-0 flex-1 flex-col overflow-auto">
      <UserTopBar />
      <PageHeader
        title="Welcome, Gabriel"
        subtitle-text="Launch your apps and privileged resources at the single click."
        :tabs="welcomeGabrielTabs"
        v-model:active-tab="activeTab"
        tabs-with-padding
      />
      <DashboardPageLayout class="w-full! flex-1!" max-width="1280">
        <div class="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="r in resources"
            :key="r.id"
            class="flex flex-col gap-sm rounded-md border border-neutral-default_solid p-md"
          >
            <div class="flex items-start justify-between gap-sm">
              <div class="flex flex-col min-w-0">
                <span class="text-body-md-semi-bold text-neutral-base truncate">{{ r.name }}</span>
                <span class="text-body-xs text-neutral-subtle truncate">{{ r.address }}</span>
              </div>
              <Tag :value="r.type" severity="secondary" class="!normal-case" />
            </div>
            <p class="text-body-xs text-neutral-subtle">
              Connects through {{ clusterOf(r)?.name }}
            </p>
            <div class="flex gap-sm pt-xs">
              <Button label="Connect" severity="primary" variant="outlined" size="small" @click="connect(r)" />
              <Button label="Direct Access" severity="secondary" variant="text" size="small" @click="directAccess(r)">
                <template #icon="iconProps"><CommandLineIcon :class="iconProps.class" /></template>
              </Button>
            </div>
          </div>
        </div>
        <p class="text-body-xs text-neutral-subtle pt-md">
          Prototype tip: “frankfurt-bastion-app” and “eu-customer-db” use EU Production, which has no online Jump Servers — try connecting to see the error state.
        </p>
      </DashboardPageLayout>
    </div>

    <!-- Connect (User Portal) -->
    <Dialog v-model:visible="showConnect" :draggable="false" modal :header="`Connect to ${current?.name}`" :style="{ width: '480px' }">
      <template #closeicon><XMarkIcon /></template>
      <div class="flex flex-col items-center gap-md py-md text-center">
        <template v-if="phase === 'selecting'">
          <ProgressSpinner size="large" />
          <p class="text-body-md-semi-bold text-neutral-base">Finding a healthy connection…</p>
          <p class="text-body-sm text-neutral-subtle">
            {{ cluster?.name }} is choosing an available Jump Server for you. You don’t need to pick one.
          </p>
        </template>
        <template v-else>
          <CheckCircleIcon class="size-10 text-success-base" />
          <p class="text-body-md-semi-bold text-neutral-base">Connected to {{ current?.name }}</p>
          <p class="text-body-sm text-neutral-subtle">
            Your {{ protocolFor(current) }} session is open in a new tab. It stays on the same connection until you end it.
          </p>
        </template>
      </div>
      <template #footer>
        <div class="flex gap-sm shrink-0 ml-auto">
          <Button :label="phase === 'connected' ? 'Close' : 'Cancel'" severity="secondary" variant="text" @click="showConnect = false" />
          <Button v-if="phase === 'connected'" label="Open session" @click="showConnect = false">
            <template #icon="iconProps"><ArrowTopRightOnSquareIcon :class="iconProps.class" /></template>
          </Button>
        </div>
      </template>
    </Dialog>

    <!-- Direct Access (User Portal + local client) -->
    <Dialog v-model:visible="showDirect" :draggable="false" modal :header="`Direct Access — ${current?.name}`" :style="{ width: '600px' }">
      <template #closeicon><XMarkIcon /></template>
      <div class="flex flex-col gap-md">
        <p class="text-body-sm text-neutral-subtle">
          Open this resource in your local {{ protocolFor(current) === 'SSH' ? 'terminal' : 'client' }}. The connection goes through <strong>{{ cluster?.name }}</strong> — you never specify a Jump Server.
        </p>
        <div class="flex flex-col gap-xs">
          <span class="text-body-sm-semi-bold text-neutral-base">From the User Portal</span>
          <div><Button label="Open in local client" size="small">
            <template #icon="iconProps"><ArrowTopRightOnSquareIcon :class="iconProps.class" /></template>
          </Button></div>
        </div>
        <div class="flex flex-col gap-xs">
          <span class="text-body-sm-semi-bold text-neutral-base">From your own terminal</span>
          <div class="flex items-center justify-between gap-sm rounded-md border border-neutral-default_solid bg-neutral-surface_deep px-sm py-xs">
            <code class="text-body-sm text-neutral-base truncate">{{ sshCommand }}</code>
            <CopyButton :text="sshCommand" size="small" />
          </div>
          <p class="text-body-xs text-neutral-subtle">
            Use the cluster entry point <strong>{{ cluster?.entryPoint }}:{{ cluster?.entryPort }}</strong>. Connecting to an individual Jump Server’s IP bypasses cluster selection and isn’t the recommended path.
          </p>
        </div>
      </div>
      <template #footer>
        <div class="flex gap-sm shrink-0 ml-auto">
          <Button label="Done" severity="secondary" variant="outlined" @click="showDirect = false" />
        </div>
      </template>
    </Dialog>

    <!-- No eligible Jump Server -->
    <Dialog v-model:visible="showError" :draggable="false" modal :header="`Can't connect to ${current?.name}`" :style="{ width: '480px' }">
      <template #closeicon><XMarkIcon /></template>
      <div class="flex flex-col gap-md">
        <MessageNotification
          severity="error"
          title="No connection is available right now"
          detail="Every Jump Server for this resource is offline. Your administrators have been alerted."
        />
        <p class="text-body-sm text-neutral-subtle">
          Try again in a minute. If it keeps happening, contact your administrator and mention “{{ cluster?.name }}”.
        </p>
      </div>
      <template #footer>
        <div class="flex gap-sm shrink-0 ml-auto">
          <Button label="Close" severity="secondary" variant="text" @click="showError = false" />
          <Button label="Try again" @click="connect(current!)" />
        </div>
      </template>
    </Dialog>
  </div>
</template>
