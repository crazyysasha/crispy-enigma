<script setup>
import SideBar from '../components/SideBar.vue';
import TaskCarouselItem from '../components/tasks/carousel-item.vue'
import HeaderMain from '../components/ui/HeaderMain.vue'
import 'swiper/css/bundle'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue'; // TODO: #14 не корректно работает Swiper 



</script>


<template>
  <div class="flex">
    <router-view />
    <SideBar class="shrink-0" />
    <div class="flex-col flex-1">
    <HeaderMain />
  </div>
    </div>

</template>
