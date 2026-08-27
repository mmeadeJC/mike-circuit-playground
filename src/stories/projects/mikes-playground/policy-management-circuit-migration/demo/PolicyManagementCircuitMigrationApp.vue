<script setup lang="ts">
import { RouterView } from 'vue-router';

defineOptions({ name: 'PolicyManagementCircuitMigrationApp' });
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>
