<script setup>
import SiteIcon from '/src/assets/icons/site_icon.vue'
</script>

<template>
  <div class="flex min-h-screen justify-center items-center flex-1 p-8">
    <div class="rounded-xl px-8 pt-6 pb-8 mb-4 text-center bg-white">
      <div class="p-2.5 mt-1 flex items-center justify-center">
        <SiteIcon class="w-10 h-10" />
        <h1 class="font-bold text-black text-4xl ml-3">CRM</h1>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
