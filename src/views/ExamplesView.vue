<script setup>
import { RouterView } from 'vue-router'
import CarouselItem from '/src/components/tasks/carousel-item.vue'
import SideBar from '/src/components/SideBar.vue'
import HeaderMain from '/src/components/ui/HeaderMain.vue'
import { SwiperSlide, Swiper } from 'swiper/vue'
</script>

<template>
  <div class="grid grid-rows-3 grid-flow-col gap-0">
    <div class="row-span-3">
      <SideBar />
    </div>
    <div class="col-span-3">
      <HeaderMain />
    </div>
    <div class="row-span-2 col-span-2">
      <Swiper :space-between="10" :slides-per-view="3">
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <router-view />
</template>
