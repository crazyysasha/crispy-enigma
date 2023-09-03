<script setup >
import CarouselItems from './Carousel-items.vue';
import { register } from 'swiper/element/bundle';
import { Swiper,SwiperSlide } from 'swiper/vue';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cards';
import 'swiper/css';

</script>


<template>
    <div class="flex flex-col items-center">
     <CarouselItems whatdoing="Creating Awesome Mobile Apps" whatjob="UI /UX Designer" lastseen="1 Hour" class="text-xl">
                <img src="src/assets/images/RightBarPictures/Image(3).png" alt="" class="w-80rem h-[10rem]">
                <template #slot2>
                    <img src="src/assets/images/DashboardPictures/Userspictures2.svg" alt="" class="">
                </template>
    </CarouselItems>
    </div>  
   <!-- <swiper
    :effect="'cards'"
    :grab-cursor="true"
    :modules="modules"
    @swiper="SwiperCards"
    >
        <swiper-slide>
           
        </swiper-slide>
        <swiper-slide>
            <CarouselItems whatdoing="Creating Fresh Website" whatjob="Web Developer" lastseen="2 Hour" class="text-xl">
                <img src="src/assets/images/TaskPictures/Image(6).png" alt="" class="w-80 h-[10rem]">
                <template #slot2>
                    <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="">
                </template>
            </CarouselItems>
        </swiper-slide>
        <swiper-slide>
            <CarouselItems whatdoing="Creating Color Palletes" whatjob="UI UX Design" lastseen="1 Hour" class="text-xl">
                <img src="src/assets/images/TaskPictures/Image(7).png" alt="" class="w-80 h-[10rem]">
                <template #slot2>
                    <img src="src/assets/images/Dashboardpictures/Userspictures.svg" alt="" class="">
                </template>
            </CarouselItems>
        </swiper-slide>
   </swiper>          -->
</template>