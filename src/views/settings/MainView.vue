<script setup>
import HeaderHome from '@/components/ui/HeaderHome.vue'
import HeaderHomeLoading from '@/components/loadingcomp/HeaderHomeLoading.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  console.log(route.fullPath)
})
</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <HeaderHome label="Настройки" class="sticky top-0 bg-white border-[#F5F5F7] border-b-2">
        </HeaderHome>
      </template>
      <template #fallback>
        <HeaderHomeLoading class="bg-white border-[#F5F5F7] border-b-2" />
      </template>
    </Suspense>
    <div class="flex py-8 pr-8"> <!-- TODO: есть проблема -->
      <div class="w-full pl-8 pb-8 bg-Primary-0 rounded-xl">
        <div class="mt-[3.28rem] flex border-b-[1px] border-zinc-200">
          <div class="flex gap-6">
          <RouterLink
          class="text-sm text-Secondary-300 font-medium items-center flex leading-10"
            :class="{ '!text-black !border-b-2 !border-Primary-500': route.fullPath == '/settings' }"
            :to="{ name: 'general' }"
          >
            Основные
            <div class=""></div>
          </RouterLink>
          <RouterLink
          class="text-sm text-Secondary-300 font-medium items-center flex leading-10"
            :class="{ '!text-black !border-b-2 !border-Primary-500': route.fullPath == '/settings/notifications' }"
            :to="{ name: 'notifications' }"
          >
            Уведомления
          </RouterLink>
        </div>
        </div>
        <router-view class="" />
      </div>
    </div>
  </div>
</template>

<!-- 
<style scoped>
.router-link-exact-active {
  @apply !text-black;
}
.router-link-active {
  @apply !text-black;
}
</style> -->
