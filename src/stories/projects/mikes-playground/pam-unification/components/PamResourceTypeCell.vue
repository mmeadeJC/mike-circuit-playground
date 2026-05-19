<script setup lang="ts">
import Tag from 'primevue/tag';

export type PamResourceType = 'Web Shield' | 'Server' | 'Database';

const props = defineProps<{
  type: PamResourceType;
}>();

const severityByType: Record<PamResourceType, 'info' | 'secondary' | 'primary'> = {
  'Web Shield': 'info',
  Server: 'secondary',
  Database: 'primary',
};
</script>

<template>
  <Tag
    :value="props.type"
    :severity="severityByType[props.type]"
    class="!normal-case"
  />
</template>
