<script setup lang="ts">
import Tag from 'primevue/tag';

/** Tag used in dropdowns / tables to mark an entry as a Cluster (per PPB-110 acceptance criteria). */
defineProps<{ label?: string }>();
</script>

<template>
  <Tag :value="label ?? 'Cluster'" severity="info" class="!normal-case" />
</template>
