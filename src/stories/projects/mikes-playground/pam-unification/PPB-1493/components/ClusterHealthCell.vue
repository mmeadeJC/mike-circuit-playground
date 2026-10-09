<script setup lang="ts">
import Tag from 'primevue/tag';
import type { ClusterHealth } from '../data/clusterData';

const props = defineProps<{ health: ClusterHealth }>();

const severityByHealth: Record<ClusterHealth, 'success' | 'warning' | 'danger'> = {
  Healthy: 'success',
  Degraded: 'warning',
  Unavailable: 'danger',
};
</script>

<template>
  <Tag :value="props.health" :severity="severityByHealth[props.health]" class="!normal-case" />
</template>
