<script setup>
defineProps({
    label: {},
})
</script>
<template>
    <div class="w-44 h-12 px-5 py-4 bg-white rounded-lg border active:border-indigo-500 justify-between items-center flex">
  <div class=" text-gray-900 text-xs font-medium">{{ label }}</div>
  <div class="w-5 h-5 rounded-full border-2 border-[#F5F5F7] active:bg-Primary-500 active:border-0 items-center justify-center flex">
    <div class="w-3 h-3 active:bg-white rounded-full"></div>
  </div>
</div>
</template>