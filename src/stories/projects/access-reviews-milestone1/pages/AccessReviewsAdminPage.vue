<script setup lang="ts">
import { markRaw, provide, ref } from 'vue';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import { AppNavigation, PageHeader } from '@jumpcloud/circuit/components';
import AdminTopBar from '@/components/AdminTopBar.vue';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';
import ConfigPageLayout from '@/components/layout/page-layouts/ConfigPageLayout.vue';
import DetailPageLayout from '@/components/layout/page-layouts/DetailPageLayout.vue';
import { ArrowLeftIcon, Cog6ToothIcon, ShieldExclamationIcon } from '@heroicons/vue/24/outline';
import type {
  AccessReviewCampaign,
  AccessReviewsActiveSubTab,
  AccessReviewsAdminTopTab,
} from '../types';
import { ACCESS_REVIEWS_ACTIVE_SUB_TABS } from '../types';
import {
  ACCESS_REVIEW_M1_STORE_KEY,
  createAccessReviewM1Store,
} from '../accessReviewM1Store';
import { accessReviewsM1MenuItems, accessReviewsM1ProfileMenuItems } from '../navigation';
import AccessReviewsGlobalSettings from '../components/AccessReviewsGlobalSettings.vue';
import AccessReviewsCampaignHub from '../components/AccessReviewsCampaignHub.vue';
import AccessReviewsCampaignTemplatesPanel from '../components/AccessReviewsCampaignTemplatesPanel.vue';
import AccessReviewCampaignAuditReportPage from '../components/AccessReviewCampaignAuditReportPage.vue';
import AccessReviewsCampaignDetail from '../components/AccessReviewsCampaignDetail.vue';
import AccessReviewsCreateCampaign from '../components/AccessReviewsCreateCampaign.vue';

defineOptions({ name: 'AccessReviewsAdminPage' });

const store = createAccessReviewM1Store();
provide(ACCESS_REVIEW_M1_STORE_KEY, store);

const adminView = ref<'hub' | 'detail' | 'report' | 'create' | 'settings'>('hub');
const selectedCampaign = ref<AccessReviewCampaign | null>(null);
/** Initial tab when opening campaign detail (`users` = “Users in scope”). */
const campaignDetailInitialTab = ref<'configuration' | 'users'>('configuration');
/** When set, create flow hydrates from this campaign (edit not-yet-started). */
const campaignDraftForEdit = ref<AccessReviewCampaign | null>(null);
/** Which Stepper step to show when opening edit from campaign detail (1–3). */
const editInitialWizardStep = ref<'1' | '2' | '3' | null>(null);
const topCampaignsTab = ref<AccessReviewsAdminTopTab>('all');
const activeSubTab = ref<AccessReviewsActiveSubTab>('active');

const topCampaignTabLabels: Record<AccessReviewsAdminTopTab, string> = {
  all: 'All Campaigns',
  active: 'Active',
  completed: 'Completed',
  templates: 'Campaign templates',
};

const activeSubTabLabels: Record<AccessReviewsActiveSubTab, string> = {
  active: 'All',
  overdue: 'Overdue',
  pending_remediation: 'Pending Remediation',
};

const activeSubTabSelectOptions = ACCESS_REVIEWS_ACTIVE_SUB_TABS.map((value) => ({
  label: activeSubTabLabels[value],
  value,
}));

const shieldIcon = markRaw(ShieldExclamationIcon);
const cogIcon = markRaw(Cog6ToothIcon);

function onSelectCampaign(
  c: AccessReviewCampaign,
  options?: { openUsersInScopeTab?: boolean },
) {
  selectedCampaign.value = c;
  campaignDetailInitialTab.value = options?.openUsersInScopeTab ? 'users' : 'configuration';
  adminView.value = 'detail';
}

function backToHub() {
  selectedCampaign.value = null;
  campaignDetailInitialTab.value = 'configuration';
  adminView.value = 'hub';
}

function openReportFromDetail() {
  adminView.value = 'report';
}

function backFromReport() {
  adminView.value = 'detail';
}

function openCreate() {
  campaignDraftForEdit.value = null;
  editInitialWizardStep.value = null;
  adminView.value = 'create';
}

function openEditFromDetail(payload: {
  campaign: AccessReviewCampaign;
  initialWizardStep: '1' | '2' | '3';
}) {
  selectedCampaign.value = payload.campaign;
  campaignDraftForEdit.value = payload.campaign;
  editInitialWizardStep.value = payload.initialWizardStep;
  adminView.value = 'create';
}

function onCreateDone() {
  campaignDraftForEdit.value = null;
  editInitialWizardStep.value = null;
  selectedCampaign.value = null;
  adminView.value = 'hub';
}

function onCreateCancel() {
  campaignDraftForEdit.value = null;
  editInitialWizardStep.value = null;
  adminView.value = selectedCampaign.value ? 'detail' : 'hub';
}

function openSettings() {
  adminView.value = 'settings';
}

function backFromSettings() {
  adminView.value = 'hub';
}
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <AppNavigation
      :menuItems="accessReviewsM1MenuItems"
      :profileMenuItems="accessReviewsM1ProfileMenuItems"
      activeItem="access"
      :collapsible="true"
      :topNavToggle="true"
    />
    <div class="flex flex-1 flex-col min-w-0 overflow-hidden">
      <AdminTopBar
        v-if="adminView !== 'settings'"
      />
      <AdminTopBar
        v-else
        show-back-button
        back-button-label="Access Reviews"
        @back="backFromSettings"
      />
      <PageHeader
        v-if="adminView !== 'settings'"
        title="Access Reviews"
        subtitle="Configure campaigns, reviewers, and remediation — Milestone 1 playground"
        :icon="shieldIcon"
        class="shrink-0"
      >
        <template v-if="adminView === 'hub'" #actions>
          <Button
            label="Settings"
            severity="secondary"
            variant="outlined"
            @click="openSettings"
          >
            <template #icon="iconProps">
              <Cog6ToothIcon :class="iconProps.class" />
            </template>
          </Button>
        </template>
      </PageHeader>
      <PageHeader
        v-else
        title="Settings"
        subtitle="Feature toggle and email notifications for Access Reviews"
        :icon="cogIcon"
        class="shrink-0"
      />

      <div class="flex flex-1 flex-col min-h-0 min-w-0 overflow-hidden bg-neutral-surface">
        <template v-if="adminView === 'settings'">
          <ConfigPageLayout class="w-full! h-full!">
            <AccessReviewsGlobalSettings />
          </ConfigPageLayout>
        </template>

        <template v-else-if="adminView === 'hub'">
          <ListPageLayout class="w-full! h-full!">
            <div class="flex flex-col h-full min-h-0">
              <Tabs v-model:value="topCampaignsTab" class="flex flex-1 flex-col min-h-0">
                <TabList
                  withPadding
                  class="shrink-0 border-b border-neutral-default_solid bg-neutral-surface"
                >
                  <Tab value="all">{{ topCampaignTabLabels.all }}</Tab>
                  <Tab value="active">{{ topCampaignTabLabels.active }}</Tab>
                  <Tab value="completed">{{ topCampaignTabLabels.completed }}</Tab>
                  <Tab value="templates">{{ topCampaignTabLabels.templates }}</Tab>
                </TabList>
                <TabPanels class="flex flex-1 flex-col min-h-0 overflow-hidden pt-md">
                  <TabPanel value="all" class="flex flex-1 flex-col min-h-0 p-0!">
                    <AccessReviewsCampaignHub
                      v-if="topCampaignsTab === 'all'"
                      campaign-tab="all"
                      @select="onSelectCampaign"
                      @edit="onSelectCampaign"
                      @create="openCreate"
                    />
                  </TabPanel>
                  <TabPanel value="active" class="flex flex-1 flex-col min-h-0 p-0!">
                    <div class="flex flex-1 flex-col min-h-0">
                      <div
                        class="px-6 py-3 border-b border-neutral-default_solid shrink-0 bg-neutral-surface"
                      >
                        <SelectButton
                          v-model="activeSubTab"
                          :options="activeSubTabSelectOptions"
                          optionLabel="label"
                          optionValue="value"
                          :allowEmpty="false"
                        />
                      </div>
                      <div class="flex flex-1 flex-col min-h-0 overflow-hidden pt-md">
                        <AccessReviewsCampaignHub
                          v-if="topCampaignsTab === 'active'"
                          :key="activeSubTab"
                          :campaign-tab="activeSubTab"
                          @select="onSelectCampaign"
                          @edit="onSelectCampaign"
                          @create="openCreate"
                        />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="completed" class="flex flex-1 flex-col min-h-0 p-0!">
                    <AccessReviewsCampaignHub
                      v-if="topCampaignsTab === 'completed'"
                      campaign-tab="completed"
                      @select="onSelectCampaign"
                      @edit="onSelectCampaign"
                      @create="openCreate"
                    />
                  </TabPanel>
                  <TabPanel value="templates" class="flex flex-1 flex-col min-h-0 p-0!">
                    <AccessReviewsCampaignTemplatesPanel v-if="topCampaignsTab === 'templates'" />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </ListPageLayout>
        </template>

        <template v-else-if="adminView === 'report' && selectedCampaign">
          <DetailPageLayout class="w-full! h-full!">
            <AccessReviewCampaignAuditReportPage
              :campaign="selectedCampaign"
              @back="backFromReport"
            />
          </DetailPageLayout>
        </template>

        <template v-else-if="adminView === 'detail' && selectedCampaign">
          <DetailPageLayout class="w-full! h-full!">
            <AccessReviewsCampaignDetail
              :campaign="selectedCampaign"
              :initial-detail-tab="campaignDetailInitialTab"
              @back="backToHub"
              @edit="openEditFromDetail"
              @view-report="openReportFromDetail"
            />
          </DetailPageLayout>
        </template>

        <template v-else-if="adminView === 'create'">
          <DetailPageLayout class="w-full! h-full!">
            <div class="flex flex-col gap-md min-h-0">
              <div class="flex items-center gap-sm">
                <Button
                  label="Back to campaigns"
                  severity="secondary"
                  variant="outlined"
                  @click="onCreateCancel"
                >
                  <template #icon="iconProps">
                    <ArrowLeftIcon :class="iconProps.class" />
                  </template>
                </Button>
              </div>
              <h1 class="text-heading-2 text-neutral-base">Add campaign</h1>
              <AccessReviewsCreateCampaign
                :initial-campaign="campaignDraftForEdit"
                :initial-wizard-step="editInitialWizardStep ?? undefined"
                @done="onCreateDone"
                @cancel="onCreateCancel"
              />
            </div>
          </DetailPageLayout>
        </template>
      </div>
    </div>
  </div>
</template>
