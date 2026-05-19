<script setup lang="ts">
import Tag from 'primevue/tag';

export type JumpServerStatus = 'Online' | 'Offline' | 'Not Installed';

const props = defineProps<{
  status: JumpServerStatus;
}>();

const severityByStatus: Record<JumpServerStatus, 'success' | 'danger' | 'secondary'> = {
  Online: 'success',
  Offline: 'danger',
  'Not Installed': 'secondary',
};
</script>

<template>
  <Tag
    :value="props.status"
    :severity="severityByStatus[props.status]"
    class="!normal-case"
  />
</template>
