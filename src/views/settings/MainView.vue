<script setup>
import HeaderHome from '@/components/ui/HeaderHome.vue'
import HeaderHomeLoading from '@/components/loadingcomp/HeaderHomeLoading.vue'
import CTab from '@/components/ui/c-tab.vue'
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
    <div class="flex py-8 pr-8">
      <div class="w-full pl-8 pb-8 bg-Primary-0 rounded-xl">
        <div class="mt-[3.28rem] gap-6 flex">
          <RouterLink :to="{ name: 'general' }">
            <CTab label="Основные" />
          </RouterLink>
          <RouterLink :to="{ name: 'notifications' }">
            <CTab label="Уведомления" />
          </RouterLink>
        </div>
        <router-view class="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply !text-black;
}
</style>
