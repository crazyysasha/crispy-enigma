<script setup>
import {Swiper,SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import {ref} from 'vue'
import CarouselItems from './Carousel-items.vue';
</script>

<template>
    <div>
    <swiper
        :slides-per-view="3"
        :space-between="2"
    >
        <swiper-slide>
            <CarouselItems whatdoing="Creating Mobile App Design" whatjob="UI UX Design" lastseen="3 Days Left">
                <img src="src/assets/images/TaskPictures/Image(8).png" alt="" class="max-w-lg">
                <template #slot2>
                    <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                </template>
            </CarouselItems>
        </swiper-slide>
        <swiper-slide>    
            <CarouselItems whatdoing="Creating Perfect Website" whatjob="Web Developer" lastseen="4 Days Left">
                <img src="src/assets/images/TaskPictures/Image(9).png" alt="" class="max-w-lg">
                <template #slot2>
                    <img src="src/assets/images/Dashboardpictures/Userspictures2.svg" alt="" class="w-[72px] aspect-square">
                </template>
            </CarouselItems>
        </swiper-slide>
        <swiper-slide>    
            <CarouselItems whatdoing="Mobile App Design" whatjob="UI UX Design" lastseen="3 Days Left">
                <img src="src/assets/images/TaskPictures/Image(10).png" alt="" class="max-w-lg">
                <template #slot2>
                    <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                </template>
            </CarouselItems>
        </swiper-slide>
        <swiper-slide>    
            <CarouselItems whatdoing="Mobile App Design" whatjob="UI UX Design" lastseen="3 Days Left">
                <img src="src/assets/images/TaskPictures/Image(10).png" alt="" class="max-w-lg">
                <template #slot2>
                    <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                </template>
            </CarouselItems>
        </swiper-slide> 
        <swiper-slide>    
            <CarouselItems whatdoing="Mobile App Design" whatjob="UI UX Design" lastseen="3 Days Left">
                <img src="src/assets/images/TaskPictures/Image(10).png" alt="" class="max-w-lg">
                <template #slot2>
                    <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="w-[72px] aspect-square">
                </template>
            </CarouselItems>
        </swiper-slide>     
    </swiper>
    </div>        
</template>