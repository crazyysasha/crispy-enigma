<script setup>
import ArrowDownItem from '/src/assets/icons/arrow-down.vue'

defineProps({
    label: {},
})
</script>
<template>
    <div class="w-96 h-12 px-5 py-4 bg-white rounded-lg border border-neutral-100 justify-between items-center gap-2.5 inline-flex">
  <div class="w-60 text-gray-900 text-xs font-medium">{{ label }}</div>
  <ArrowDownItem class="w-5 h-5" />
</div>
</template>