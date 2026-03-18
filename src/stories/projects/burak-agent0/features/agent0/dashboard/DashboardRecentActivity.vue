<script setup lang="ts">
import Button from 'primevue/button';

defineProps<{
  activities: { user: string; server: string; time: string; event: string }[];
}>();

const emit = defineEmits<{
  'see-all': [];
}>();
</script>

<template>
  <div class="flex flex-col">
    <div
      class="sticky -top-6 z-10 bg-neutral-surface border-b border-neutral-default_solid pt-6 pb-4 -mt-6"
    >
      <div class="flex items-center justify-between">
        <span class="text-heading-3 text-neutral-base">Recent Activity</span>
        <Button label="See All" severity="secondary" variant="outlined" size="small" @click="emit('see-all')" />
      </div>
    </div>
    <div class="flex flex-col pb-6">
      <div
        v-for="(activity, i) in activities"
        :key="i"
        class="flex flex-col gap-1 py-3"
        :class="{ 'border-b border-neutral-default_solid': i < activities.length - 1 }"
      >
        <span class="text-body-sm text-neutral-subtle">
          <span class="text-body-sm-semi-bold">{{ activity.user }}</span>
          <template v-if="activity.server !== '—'"> · <span class="text-body-sm-semi-bold">{{ activity.server }}</span></template>
          · {{ activity.time }}
        </span>
        <span class="text-body-md text-neutral-base">{{ activity.event }}</span>
      </div>
    </div>
  </div>
</template>
