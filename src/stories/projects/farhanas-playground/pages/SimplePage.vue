<script setup lang="ts">
import Button from 'primevue/button';

function handleClick() {
  console.log('Button clicked');
}
</script>

<template>
  <div class="flex flex-col gap-6 p-6 max-w-3xl">
    <h2 class="text-heading-2 text-neutral-base">
      Welcome to Farhana's Playground
    </h2>
    <p class="text-body-md text-neutral-subtle">
      Manage certificates, CAs, and PKI from one place. You're in control.
    </p>
    <Button label="Launch PKI" @click="handleClick" />
  </div>
</template>
