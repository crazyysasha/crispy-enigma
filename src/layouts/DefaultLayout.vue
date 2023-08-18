<script setup>
import SideBar from '../components/ui/SideBar.vue'
import SideBarLoading from '../components/loadingcomp/SideBarLoading.vue'
import 'swiper/css/bundle'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue' // TODO: #14 не корректно работает Swiper


</script>

<template>
  <div class="flex gap-8 w-full">
    <Suspense>
      <template #default>
        <SideBar class="shrink-0 sticky top-0" />
      </template>
      <template #fallback>
        <SideBarLoading class="shrink-0 sticky top-0" />
      </template>
    </Suspense>
      <router-view v-slot="{ Component }" class="flex-1">
        <Transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
        </Transition>
      </router-view>
  
  </div>
</template>

<!-- <style lang="css">
.slide-enter-active,
.slide-leave-active{
  transition: opacity 0.2s, transform 0.2s;
}
.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30),
}
slide-enter-exact-active,
slide-leave-exact-active{
  transition: opacity 0.0s, transform 0.0s;
}
</style> -->

