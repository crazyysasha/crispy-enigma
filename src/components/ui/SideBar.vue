<script setup>
import OverviewIcon from '/src/assets/icons/overwiew.vue'
import TaskIcon from '/src/assets/icons/task.vue'
import MentorsIcon from '/src/assets/icons/mentors.vue'
import MessageIcon from '/src/assets/icons/message.vue'
import SettingsIcon from '/src/assets/icons/settings.vue'
import SiteIcon from '/src/assets/icons/site_icon.vue'
import { ref } from 'vue'

const loadUserData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}
await loadUserData()
</script>

<template>
  <div
    class="sidebar w-64 p-10 h-screen overflow-y-auto text-center bg-white border-[#F5F5F7] border-r-2"
  >
    <div class="text-gray-700 text-xl">
      <div class="p-2.5 mt-1 flex items-center">
        <SiteIcon class="w-10 h-10" alt="" />
        <h1 class="font-bold text-black text-4xl ml-3">CRM</h1>
      </div>
      <div class="my-14"></div>
    </div>
    <router-link
      to="/"
      class="py-3 mt-6 flex text-Secondary-300 items-center text-sm font-bold fill-current cursor-pointer rounded-xl px-4 duration-300 hover:bg-Secondary-500/5 focus:bg-Secondary-500/5 focus:outline-none focus:ring active:text-black active:bg-Secondary-500/20"
    >
      <OverviewIcon class="w-6 h-6 mr-3" />
      Главная
    </router-link>
    <router-link
      class="py-3 mt-6 flex text-Secondary-300 items-center text-sm font-bold fill-current cursor-pointer rounded-xl px-4 duration-300 hover:bg-Secondary-500/5 focus:bg-Secondary-500/5 focus:outline-none focus:ring active:text-black active:bg-Secondary-500/20"
      to="/task"
    >
      <TaskIcon class="w-6 h-6 mr-3" />
      Задачи
    </router-link>
    <router-link
      class="py-3 mt-6 flex text-Secondary-300 items-center text-sm font-bold fill-current cursor-pointer rounded-xl px-4 duration-300 hover:bg-Secondary-500/5 focus:bg-Secondary-500/5 focus:outline-none focus:ring active:text-black active:bg-Secondary-500/20"
      to="/mentors"
    >
      <MentorsIcon class="w-6 h-6 mr-3" />
      Ментаты
    </router-link>
    <router-link
      class="py-3 mt-6 flex text-Secondary-300 items-center text-sm font-bold fill-current cursor-pointer rounded-xl px-4 duration-300 hover:bg-Secondary-500/5 focus:bg-Secondary-500/5 focus:outline-none focus:ring active:text-black active:bg-Secondary-500/20"
      to="/settings"
    >
      <SettingsIcon class="w-6 h-6 mr-3" />
      Настройки
    </router-link>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply !bg-Secondary-500/5;
  @apply !text-black;
}
</style>
