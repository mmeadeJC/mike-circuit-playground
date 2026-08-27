<script setup lang="ts">
import { computed } from 'vue';
import inventory from './COMPONENT_INVENTORY.md?raw';
import { renderPolicyInventoryMarkdown } from './renderPolicyInventoryMarkdown';

const html = computed(() => renderPolicyInventoryMarkdown(inventory));
</script>

<template>
  <div class="min-h-screen overflow-auto bg-neutral-surface">
    <article
      class="inventory-markdown mx-auto max-w-5xl px-lg py-lg text-neutral-base"
      v-html="html"
    />
  </div>
</template>

<style>
.inventory-markdown h1 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.inventory-markdown h2 {
  margin: 2rem 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.inventory-markdown h3 {
  margin: 1.25rem 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.inventory-markdown p,
.inventory-markdown li {
  margin: 0 0 0.75rem;
  line-height: 1.5;
}

.inventory-markdown ul {
  margin: 0 0 1rem 1.25rem;
  padding: 0;
}

.inventory-markdown blockquote {
  margin: 0 0 1rem;
  padding-left: 1rem;
  border-left: 3px solid var(--jc-color-neutral-default_solid);
  color: var(--jc-color-neutral-subtle);
}

.inventory-markdown hr {
  margin: 1.5rem 0;
  border: 0;
  border-top: 1px solid var(--jc-color-neutral-default_solid);
}

.inventory-markdown code {
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  background: var(--jc-color-neutral-subtle_solid);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875em;
}

.inventory-markdown pre {
  margin: 0 0 1rem;
  padding: 0.75rem 1rem;
  overflow-x: auto;
  border-radius: 0.375rem;
  background: var(--jc-color-neutral-subtle_solid);
}

.inventory-markdown pre code {
  padding: 0;
  background: transparent;
}

.inventory-markdown table {
  width: 100%;
  margin: 0 0 1.5rem;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.inventory-markdown th,
.inventory-markdown td {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--jc-color-neutral-default_solid);
  text-align: left;
  vertical-align: top;
}

.inventory-markdown th {
  background: var(--jc-color-neutral-subtle_solid);
  font-weight: 600;
}
</style>
