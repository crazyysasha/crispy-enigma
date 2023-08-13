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
      <router-view class="flex-1" />
  
  </div>
</template>
