<script setup>
import SiteIcon from '/src/assets/icons/site_icon.vue'
import SLoading from '/src/components/ui/loadingitems/s-button.vue'
</script>
<template>
  <div role="status" class="sidebar h-screen w-64 p-10 text-center bg-white border-[#F5F5F7] border-r-2">
    <div class="text-gray-700 text-xl">
      <div class="p-2.5 mt-1 flex items-center">
        <SiteIcon class="w-10 h-10" alt="" />
        <h1 class="font-bold text-black text-4xl ml-3">CRM</h1>
      </div>
      <div class="my-14"></div>
    </div>
    <div class="animate-pulse">
      <div class="gap-6 flex-col flex ml-4">
      <SLoading class="w-[172px] h-[48px]" />
      <SLoading class="w-[172px] h-[48px]" />
      <SLoading class="w-[172px] h-[48px]" />
      <SLoading class="w-[172px] h-[48px]" />
    </div>
</div>
</div>
</template>
