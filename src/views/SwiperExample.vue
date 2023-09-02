<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {ref} from 'vue';
import CarouselUsers from '../components/minicomponents/Carousel-Users.vue';

// Import Swiper styles
import 'swiper/css';
const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
const isActive=ref(false)

</script>

<template>
    <div class="swiper ">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slide1</div>
        <div class="swiper-slide"> slide2</div>
        <div class="swiper-slide">33</div>
      </div>

    </div>



</template>