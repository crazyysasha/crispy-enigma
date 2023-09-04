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
   <article>
  <time>Mar 10, 2020</time>
  <h2>Boost your conversion rate</h2>
  <p class="line-clamp-3">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
  <p class="leading-6">So I started to walk into the water...</p>
  <div>
    <img src="..." />
    Lindsay Walton
  </div>
</article>


</template>