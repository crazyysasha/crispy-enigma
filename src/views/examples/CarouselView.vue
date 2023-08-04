<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Scrollbar } from 'swiper/modules';

import TaskCarouselItem from '@/components/tasks/carousel-item.vue'
</script>
<template>
    <div>
        <Swiper :slides-per-view="4" :modules="[Mousewheel, Scrollbar]" :scrollbar="{ draggable: true }">
            <swiper-slide>
                <TaskCarouselItem></TaskCarouselItem>
            </swiper-slide>
            <swiper-slide>
                <TaskCarouselItem></TaskCarouselItem>
            </swiper-slide>
            <swiper-slide>
                <TaskCarouselItem></TaskCarouselItem>
            </swiper-slide>
        </Swiper>
    </div>
</template>