<script setup>
import ArrowDownIcon from '/src/assets/icons/arrow-down.vue'
</script>
<template>
  <div class="w-[28.875rem] h-[13.375rem] rounded-xl p-5 bg-[#F5F5F7]">
    <div class="justify-between flex">
      <p class="font-semibold text-base">Activity</p>
      <div class="flex gap-2 items-center text-xs font-medium">
        This Week
        <ArrowDownIcon class="w-3 h-3" />
      </div>
    </div>
    <div class="mt-5 w-[26.375rem] h-[8.125rem] rounded-xl bg-white"></div>
  </div>
</template>
