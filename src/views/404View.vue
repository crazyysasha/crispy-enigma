<script setup>
import { useRouter } from 'vue-router'
import SiteIcon from '/src/assets/icons/site_icon.vue'
import CButton from '/src/components/ui/c-button.vue'
const router = useRouter()
const back = () => {
  router.back();
  router.replace();
}
</script>
<template>
  <div class="flex min-h-screen justify-center items-center flex-1 p-8">
    <div class="rounded-xl px-8 pt-6 pb-8 mb-4 text-center bg-white">
      <div class="p-2.5 mt-1 flex items-center justify-center">
        <SiteIcon class="w-10 h-10" alt="" />
        <h1 class="font-bold text-black text-4xl ml-3">CRM</h1>
      </div>
      <div class="mt-4 font-bold text-7xl text-white bg-Error-600 rounded-xl p-6">404</div>
      <div class="font-semibold mt-4">Похоже вы не туда попали.</div>
      <div class="items-center flex flex-col">
        <div class="mt-6 w-20 h-1 rounded-xl bg-zinc-50"></div>
      </div>
      <div class="items-center flex flex-col">
        <router-link to="/">
          <CButton label="Вернуться на главную" />
        </router-link>
        <div class="mt-6 w-20 h-1 rounded-xl bg-zinc-50"></div>

        <CButton @click="back" label="Вернуться на предыдущую" />
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>
