<script setup lang="ts">
import { GlobeAltIcon, LockClosedIcon, Squares2X2Icon } from '@heroicons/vue/24/outline';
import type { CampaignScopeGroupExpansionSections } from '../types';

defineOptions({ name: 'CampaignScopeGroupExpansionContent' });

defineProps<{
  sections: CampaignScopeGroupExpansionSections;
}>();
</script>

<template>
  <div
    class="mt-md flex flex-col gap-lg px-lg py-lg bg-neutral-surface_raised border-t border-neutral-default_solid min-w-0"
  >
    <p class="text-body-md-bold text-neutral-base m-0">Assigned resources</p>

    <div
      v-if="sections.applications.length > 0"
      class="flex flex-col gap-sm min-w-0 rounded-md border border-neutral-default_solid bg-neutral-base p-md"
    >
      <div class="flex items-center gap-sm text-body-sm text-neutral-subtle">
        <Squares2X2Icon class="size-4 shrink-0" aria-hidden="true" />
        <span class="text-body-md-bold text-neutral-base">Applications</span>
      </div>
      <ul class="list-none m-0 pl-0 flex flex-col gap-sm">
        <li v-for="line in sections.applications" :key="line.id" class="flex items-start gap-sm min-w-0">
          <div
            class="size-6 shrink-0 rounded-sm border border-neutral-default_solid bg-neutral-surface_raised flex items-center justify-center text-body-sm text-neutral-subtle font-semibold"
            aria-hidden="true"
          >
            {{ line.abbreviation.slice(0, 2) }}
          </div>
          <span class="text-body-md text-neutral-base break-words">{{ line.label }}</span>
        </li>
      </ul>
    </div>

    <div
      v-if="sections.directories.length > 0"
      class="flex flex-col gap-sm min-w-0 rounded-md border border-neutral-default_solid bg-neutral-base p-md"
    >
      <div class="flex items-center gap-sm text-body-sm text-neutral-subtle">
        <GlobeAltIcon class="size-4 shrink-0" aria-hidden="true" />
        <span class="text-body-md-bold text-neutral-base">Directories</span>
      </div>
      <ul class="list-none m-0 pl-0 flex flex-col gap-sm">
        <li v-for="line in sections.directories" :key="line.id" class="flex items-start gap-sm min-w-0">
          <div
            class="size-6 shrink-0 rounded-sm border border-neutral-default_solid bg-neutral-surface_raised flex items-center justify-center text-body-sm text-neutral-subtle font-semibold"
            aria-hidden="true"
          >
            {{ line.abbreviation.slice(0, 2) }}
          </div>
          <span class="text-body-md text-neutral-base break-words">{{ line.label }}</span>
        </li>
      </ul>
    </div>

    <div
      v-if="sections.vault.length > 0"
      class="flex flex-col gap-sm min-w-0 rounded-md border border-neutral-default_solid bg-neutral-base p-md"
    >
      <div class="flex items-center gap-sm text-body-sm text-neutral-subtle">
        <LockClosedIcon class="size-4 shrink-0" aria-hidden="true" />
        <span class="text-body-md-bold text-neutral-base">Vault</span>
      </div>
      <ul class="list-none m-0 pl-0 flex flex-col gap-sm">
        <li v-for="line in sections.vault" :key="line.id" class="flex items-start gap-sm min-w-0">
          <div
            class="size-6 shrink-0 rounded-sm border border-neutral-default_solid bg-neutral-surface_raised flex items-center justify-center text-body-sm text-neutral-subtle font-semibold"
            aria-hidden="true"
          >
            {{ line.abbreviation.slice(0, 2) }}
          </div>
          <span class="text-body-md text-neutral-base break-words">{{ line.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
