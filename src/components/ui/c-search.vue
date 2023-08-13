<script setup>
import SearchIcon from '/src/assets/icons/search_normal.vue'
defineProps({
  searchlabel: {},
})
</script>
<template>
    <div class="w-[30rem] h-12 px-7 py-3.5 rounded-lg border border-neutral-100 justify-between items-center flex">
      <div class="text-slate-600 text-xs font-normal">{{ searchlabel }}</div>
      <SearchIcon />
    </div>
</template>